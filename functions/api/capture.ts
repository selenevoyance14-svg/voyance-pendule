// Cloudflare Pages Function — POST /api/capture
// Capture un ordre PayPal approuvé, vérifie le montant côté serveur,
// génère le tirage avec Claude Haiku et envoie l'email via Resend.

interface Env {
  PAYPAL_CLIENT_ID: string;
  PAYPAL_SECRET: string;
  PAYPAL_API_BASE: string;
  MISTRAL_API_KEY: string;
  RESEND_API_KEY: string;
  EMAIL_FROM: string;
}

const PLANS: Record<string, { amount: string; label: string; questions: number }> = {
  q1: { amount: "5.90", label: "1 question", questions: 1 },
  q3: { amount: "11.90", label: "3 questions", questions: 3 },
  q5: { amount: "19.90", label: "Tirage complet (5 questions)", questions: 5 },
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const body = (await request.json()) as {
      orderID?: string;
      plan?: string;
      firstName?: string;
      birthDate?: string;
      email?: string;
      questions?: string[];
    };

    if (!body.orderID) return jsonError("orderID manquant", 400);
    const plan = body.plan && PLANS[body.plan] ? body.plan : null;
    if (!plan) return jsonError("Plan invalide", 400);
    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return jsonError("Email invalide", 400);
    if (!body.firstName || body.firstName.trim().length < 2) return jsonError("Prénom requis", 400);

    const expected = PLANS[plan];
    const cleanQuestions = (body.questions || [])
      .map((q) => (typeof q === "string" ? q.trim() : ""))
      .filter((q) => q.length >= 3)
      .slice(0, expected.questions);

    if (cleanQuestions.length !== expected.questions) {
      return jsonError(`${expected.questions} question(s) requise(s)`, 400);
    }

    const accessToken = await getPaypalToken(env);

    // Capture l'ordre
    const capRes = await fetch(`${env.PAYPAL_API_BASE}/v2/checkout/orders/${body.orderID}/capture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    const capData = (await capRes.json()) as {
      status?: string;
      purchase_units?: {
        custom_id?: string;
        payments?: {
          captures?: { amount?: { value?: string; currency_code?: string }; status?: string }[];
        };
      }[];
      message?: string;
    };

    if (!capRes.ok || capData.status !== "COMPLETED") {
      return jsonError(capData.message || "Capture PayPal échouée", 502);
    }

    // Vérification du montant côté serveur (anti-tampering localStorage)
    const capture = capData.purchase_units?.[0]?.payments?.captures?.[0];
    const paidAmount = capture?.amount?.value;
    const paidCurrency = capture?.amount?.currency_code;
    const customId = capData.purchase_units?.[0]?.custom_id;

    // Comparaison en centimes pour éviter les soucis de formatage ("5.9" vs "5.90")
    const paidCents = paidAmount ? Math.round(parseFloat(paidAmount) * 100) : 0;
    const expectedCents = Math.round(parseFloat(expected.amount) * 100);

    if (paidCurrency !== "EUR" || paidCents !== expectedCents) {
      console.error("Amount mismatch", { paidAmount, paidCents, expectedAmount: expected.amount, expectedCents, paidCurrency, customId, plan });
      return jsonError("Montant ou plan invalide", 400);
    }
    // customId est juste un check additionnel — log si différent mais ne bloque pas
    if (customId && customId !== plan) {
      console.warn("Plan mismatch (non-blocking)", { customId, plan });
    }

    // Génération du tirage
    const tirage = await generateTirage({
      apiKey: env.MISTRAL_API_KEY,
      firstName: body.firstName.trim(),
      birthDate: (body.birthDate || "").trim(),
      questions: cleanQuestions,
      plan,
    });

    // Envoi email
    await sendEmail({
      apiKey: env.RESEND_API_KEY,
      from: env.EMAIL_FROM,
      to: body.email.trim(),
      firstName: body.firstName.trim(),
      tirage,
      plan,
    });

    return new Response(
      JSON.stringify({ success: true, plan }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Capture error:", err);
    return jsonError(err instanceof Error ? err.message : "Erreur serveur", 500);
  }
};

async function getPaypalToken(env: Env): Promise<string> {
  const auth = btoa(`${env.PAYPAL_CLIENT_ID}:${env.PAYPAL_SECRET}`);
  const res = await fetch(`${env.PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  const data = (await res.json()) as { access_token?: string; error_description?: string };
  if (!res.ok || !data.access_token) {
    throw new Error(data.error_description || "Auth PayPal échouée");
  }
  return data.access_token;
}

async function generateTirage(opts: {
  apiKey: string;
  firstName: string;
  birthDate: string;
  questions: string[];
  plan: string;
}): Promise<string> {
  const { apiKey, firstName, birthDate, questions, plan } = opts;
  const isLong = plan === "q5";

  const system = `Tu es Sélène, oracle numérique inspirée de la tradition divinatoire du pendule.
Tu réponds avec bienveillance, profondeur et poésie, mais sans jamais promettre l'impossible
(pas de prédictions médicales, financières précises, ni de dates exactes).
Tu utilises un langage chaleureux, un peu mystique, et tu invites toujours à la réflexion personnelle.
Tu écris en français, avec accents corrects (é, è, ê, à, ç, ô).
Format de chaque réponse : 1) le mouvement du pendule (Oui / Non / Hésite / Redemande plus tard), 2) une interprétation de 4 à 8 phrases, 3) un conseil concret.${
    isLong ? "\nPour ce tirage complet, ajoute à la fin une synthèse globale (8-12 phrases) qui relie toutes les réponses." : ""
  }`;

  const userPrompt = `Consultant : ${firstName}${birthDate ? ` (né(e) le ${birthDate})` : ""}.
Questions posées :
${questions.map((q, i) => `${i + 1}. ${q}`).join("\n")}

Réponds à chaque question dans l'ordre. Sépare clairement chaque réponse par "---".${
    isLong ? "\nTermine par une synthèse globale précédée de '## Synthèse globale'." : ""
  }`;

  const res = await fetch("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      model: "mistral-large-latest",
      max_tokens: isLong ? 2400 : 1400,
      temperature: 0.85,
      messages: [
        { role: "system", content: system },
        { role: "user", content: userPrompt },
      ],
    }),
  });

  if (!res.ok) {
    throw new Error(`Mistral error: ${res.status} ${await res.text()}`);
  }

  const data = (await res.json()) as {
    choices: { message: { content: string } }[];
  };
  return data.choices[0]?.message?.content || "";
}

async function sendEmail(opts: {
  apiKey: string;
  from: string;
  to: string;
  firstName: string;
  tirage: string;
  plan: string;
}) {
  const { apiKey, from, to, firstName, tirage, plan } = opts;
  const planLabel = PLANS[plan]?.label || "Consultation pendule";

  const html = renderEmailHtml(firstName, tirage, planLabel);
  const text = `Bonjour ${firstName},\n\nVoici votre tirage Sélène :\n\n${tirage}\n\nAvec bienveillance,\nSélène — voyance-pendule.fr\n\nNote : interprétation générée par notre oracle numérique, à usage de divertissement.`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Sélène Voyance <${from}>`,
      to: [to],
      subject: `🌙 Votre tirage du pendule — ${planLabel}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend error: ${res.status} ${await res.text()}`);
  }
}

function renderEmailHtml(firstName: string, tirage: string, planLabel: string): string {
  const safe = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const tirageHtml = safe(tirage)
    .replace(/^---\s*$/gm, '<hr style="border:none;border-top:1px solid #e0c468;margin:24px 0">')
    .replace(/^## (.+)$/gm, '<h3 style="color:#b8860b;font-family:Georgia,serif;margin:24px 0 12px">$1</h3>')
    .replace(/\n/g, "<br>");

  return `<!DOCTYPE html><html lang="fr"><body style="margin:0;padding:0;background:#f5f1e8;font-family:Georgia,serif;color:#2a1a3a">
  <div style="max-width:620px;margin:0 auto;padding:32px 24px;background:#fffbf2">
    <div style="text-align:center;margin-bottom:24px">
      <div style="font-size:36px">🌙</div>
      <h1 style="font-family:Georgia,serif;color:#5b3d8a;font-size:24px;margin:8px 0 4px">Sélène Voyance</h1>
      <p style="color:#8b6f3a;font-size:13px;margin:0;letter-spacing:1px">${safe(planLabel.toUpperCase())}</p>
    </div>
    <p style="font-size:16px;line-height:1.6">Bonjour <strong>${safe(firstName)}</strong>,</p>
    <p style="font-size:15px;line-height:1.7">Le pendule a parlé. Voici les messages que les énergies vous adressent aujourd'hui :</p>
    <div style="background:#f5edd8;border-left:3px solid #d4a73a;padding:20px 24px;margin:24px 0;border-radius:4px;font-size:15px;line-height:1.7;white-space:normal">${tirageHtml}</div>
    <p style="font-size:14px;line-height:1.6;color:#5a4a6a;font-style:italic">Avec bienveillance,<br>Sélène ✨</p>
    <hr style="border:none;border-top:1px solid #e0c468;margin:32px 0">
    <p style="font-size:11px;color:#8a7a9a;line-height:1.5;text-align:center">
      Cette interprétation est générée par notre oracle numérique inspiré de la tradition divinatoire.<br>
      Service à usage de divertissement et de réflexion personnelle, sans valeur médicale, financière ou juridique.<br>
      <a href="https://voyance-pendule.fr" style="color:#5b3d8a">voyance-pendule.fr</a>
    </p>
  </div>
</body></html>`;
}

function jsonError(message: string, status: number) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
