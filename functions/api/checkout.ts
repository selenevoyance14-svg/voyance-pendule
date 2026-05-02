// Cloudflare Pages Function — POST /api/checkout
// Crée une session Stripe Checkout et stocke les infos du client en metadata.

interface Env {
  STRIPE_SECRET_KEY: string;
  SITE_URL: string;
}

const PRICES: Record<string, { amount: number; label: string; questions: number }> = {
  q1: { amount: 590, label: "1 question — Réponse personnalisée du pendule", questions: 1 },
  q3: { amount: 1190, label: "3 questions — Tirage approfondi", questions: 3 },
  q5: { amount: 1990, label: "Tirage complet — 5 questions + interprétation détaillée", questions: 5 },
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const body = (await request.json()) as {
      plan?: string;
      email?: string;
      firstName?: string;
      birthDate?: string;
      questions?: string[];
    };

    const plan = body.plan && PRICES[body.plan] ? body.plan : null;
    if (!plan) return jsonError("Plan invalide", 400);
    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return jsonError("Email invalide", 400);
    if (!body.firstName || body.firstName.length < 2) return jsonError("Prénom requis", 400);
    if (!Array.isArray(body.questions) || body.questions.length === 0) return jsonError("Au moins une question requise", 400);

    const cleanQuestions = body.questions
      .map((q) => (typeof q === "string" ? q.trim() : ""))
      .filter((q) => q.length >= 3)
      .slice(0, PRICES[plan].questions);

    if (cleanQuestions.length === 0) return jsonError("Question(s) invalide(s)", 400);

    const price = PRICES[plan];

    const params = new URLSearchParams();
    params.append("mode", "payment");
    params.append("payment_method_types[]", "card");
    params.append("customer_email", body.email);
    params.append("line_items[0][price_data][currency]", "eur");
    params.append("line_items[0][price_data][product_data][name]", price.label);
    params.append("line_items[0][price_data][unit_amount]", price.amount.toString());
    params.append("line_items[0][quantity]", "1");
    params.append("success_url", `${env.SITE_URL}/merci?session_id={CHECKOUT_SESSION_ID}`);
    params.append("cancel_url", `${env.SITE_URL}/consultation?cancelled=1`);
    params.append("metadata[plan]", plan);
    params.append("metadata[firstName]", body.firstName.slice(0, 60));
    params.append("metadata[birthDate]", (body.birthDate || "").slice(0, 20));
    cleanQuestions.forEach((q, i) => {
      params.append(`metadata[q${i + 1}]`, q.slice(0, 480));
    });

    const stripeRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = (await stripeRes.json()) as { url?: string; error?: { message?: string } };
    if (!stripeRes.ok || !data.url) {
      return jsonError(data.error?.message || "Erreur Stripe", 502);
    }

    return new Response(JSON.stringify({ url: data.url }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return jsonError(err instanceof Error ? err.message : "Erreur serveur", 500);
  }
};

function jsonError(message: string, status: number) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
