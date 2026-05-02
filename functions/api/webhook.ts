// Cloudflare Pages Function — POST /api/webhook
// Reçoit les événements Stripe (checkout.session.completed),
// génère le tirage avec Claude Haiku, envoie l'email via Resend.

interface Env {
  STRIPE_WEBHOOK_SECRET: string;
  ANTHROPIC_API_KEY: string;
  RESEND_API_KEY: string;
  EMAIL_FROM: string;
}

const PLAN_LABELS: Record<string, string> = {
  q1: "1 question",
  q3: "3 questions",
  q5: "Tirage complet (5 questions)",
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const sig = request.headers.get("stripe-signature");
  const rawBody = await request.text();

  if (!sig) return new Response("Missing signature", { status: 400 });

  const verified = await verifyStripeSignature(rawBody, sig, env.STRIPE_WEBHOOK_SECRET);
  if (!verified) return new Response("Invalid signature", { status: 400 });

  const event = JSON.parse(rawBody) as { type: string; data: { object: any } };

  if (event.type !== "checkout.session.completed") {
    return new Response("ok", { status: 200 });
  }

  const session = event.data.object;
  const meta = session.metadata || {};
  const email: string | undefined = session.customer_details?.email || session.customer_email;
  const firstName: string = meta.firstName || "Cher consultant";
  const birthDate: string = meta.birthDate || "";
  const plan: string = meta.plan || "q1";

  const questions: string[] = [];
  for (let i = 1; i <= 5; i++) {
    if (meta[`q${i}`]) questions.push(meta[`q${i}`]);
  }

  if (!email || questions.length === 0) {
    return new Response("Missing data", { status: 200 });
  }

  try {
    const tirage = await generateTirage({
      apiKey: env.ANTHROPIC_API_KEY,
      firstName,
      birthDate,
      questions,
      plan,
    });

    await sendEmail({
      apiKey: env.RESEND_API_KEY,
      from: env.EMAIL_FROM,
      to: email,
      firstName,
      tirage,
      plan,
    });
  } catch (err) {
    console.error("Webhook processing error:", err);
    // 200 pour éviter retry Stripe en boucle ; on log l'erreur
  }

  return new Response("ok", { status: 200 });
};

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

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: isLong ? 2400 : 1400,
      system,
      messages: [{ role: "user", content: userPrompt }],
    }),
  });

  if (!res.ok) {
    throw new Error(`Anthropic error: ${res.status} ${await res.text()}`);
  }

  const data = (await res.json()) as { content: { text: string }[] };
  return data.content.map((c) => c.text).join("\n");
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
  const planLabel = PLAN_LABELS[plan] || "Consultation pendule";

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

// --- Vérification de signature Stripe (HMAC-SHA256, Web Crypto API) ---

async function verifyStripeSignature(
  payload: string,
  header: string,
  secret: string
): Promise<boolean> {
  const parts = header.split(",").reduce<Record<string, string>>((acc, p) => {
    const [k, v] = p.split("=");
    if (k === "t") acc.t = v;
    if (k === "v1") acc.v1 = (acc.v1 ? acc.v1 + "," : "") + v;
    return acc;
  }, {});

  if (!parts.t || !parts.v1) return false;

  const signed = `${parts.t}.${payload}`;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(signed));
  const expected = Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const provided = parts.v1.split(",");
  return provided.some((p) => safeEqual(p, expected));
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}
