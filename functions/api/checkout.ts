// Cloudflare Pages Function — POST /api/checkout
// Crée un ordre PayPal et retourne {orderID, approvalUrl}.
// Le client stocke les données du formulaire dans localStorage avant de rediriger.

interface Env {
  PAYPAL_CLIENT_ID: string;
  PAYPAL_SECRET: string;
  PAYPAL_API_BASE: string; // "https://api-m.paypal.com" (live) ou "https://api-m.sandbox.paypal.com" (sandbox)
  SITE_URL: string;
}

const PRICES: Record<string, { amount: string; label: string; questions: number }> = {
  q1: { amount: "5.90", label: "Tirage du pendule — 1 question", questions: 1 },
  q3: { amount: "11.90", label: "Tirage du pendule — 3 questions (approfondi)", questions: 3 },
  q5: { amount: "19.90", label: "Tirage du pendule — 5 questions + synthèse", questions: 5 },
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const body = (await request.json()) as { plan?: string };
    const plan = body.plan && PRICES[body.plan] ? body.plan : null;
    if (!plan) return jsonError("Plan invalide", 400);

    const price = PRICES[plan];
    const accessToken = await getPaypalToken(env);

    const orderRes = await fetch(`${env.PAYPAL_API_BASE}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: { currency_code: "EUR", value: price.amount },
            description: price.label,
            custom_id: plan,
          },
        ],
        application_context: {
          brand_name: "Sélène Voyance",
          locale: "fr-FR",
          landing_page: "NO_PREFERENCE",
          shipping_preference: "NO_SHIPPING",
          user_action: "PAY_NOW",
          return_url: `${env.SITE_URL}/merci`,
          cancel_url: `${env.SITE_URL}/consultation?cancelled=1`,
        },
      }),
    });

    const data = (await orderRes.json()) as {
      id?: string;
      links?: { href: string; rel: string }[];
      message?: string;
      details?: { description?: string }[];
    };

    if (!orderRes.ok || !data.id) {
      const msg = data.details?.[0]?.description || data.message || "Erreur PayPal";
      return jsonError(msg, 502);
    }

    const approvalUrl = data.links?.find((l) => l.rel === "approve")?.href;
    if (!approvalUrl) return jsonError("Lien PayPal introuvable", 502);

    return new Response(
      JSON.stringify({ orderID: data.id, approvalUrl }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
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

function jsonError(message: string, status: number) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
