import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const FORMULAS = {
  '1': { amount: 500, label: '1 Question — Consultation Pendule', count: 1 },
  '3': { amount: 1000, label: '3 Questions — Consultation Pendule', count: 3 },
  '5': { amount: 1500, label: '5 Questions — Consultation Pendule', count: 5 },
};

export async function POST(req: NextRequest) {
  try {
    const { email, questions, formula } = await req.json();

    const f = FORMULAS[formula as keyof typeof FORMULAS];
    if (!f) return NextResponse.json({ error: 'Formule invalide' }, { status: 400 });
    if (!email) return NextResponse.json({ error: 'Email requis' }, { status: 400 });
    if (!questions || questions.length === 0) return NextResponse.json({ error: 'Questions requises' }, { status: 400 });

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://voyance-pendule.vercel.app';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: {
            name: f.label,
            description: `Réponse Oui/Non par pendule — ${f.count} question(s) — Réponse sous 24h`,
          },
          unit_amount: f.amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${baseUrl}/merci`,
      cancel_url: `${baseUrl}/voyance`,
      metadata: {
        email,
        questions: JSON.stringify(questions),
        formula,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
