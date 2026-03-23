# Sélène Voyance — CLAUDE.md

## Projet
Site de voyance par pendule IA. Clients paient, posent des questions Oui/Non, reçoivent une réponse générée par Claude Haiku (persona "Sélène") par email avec délai de 30 min simulé.

## Stack
- Next.js 14 (App Router), TypeScript
- Tailwind CSS (thème : couleurs `mystic-*` et `gold-*`)
- Stripe (paiement)
- Anthropic SDK — Claude Haiku (`claude-haiku-4-5-20251001`)
- Resend (envoi email depuis contact@voyance-pendule.fr)

## Flux de paiement
1. `src/app/components/VoyanceForm.tsx` — formulaire client
2. `src/app/api/create-checkout/route.ts` — crée session Stripe
3. `src/app/api/webhook/route.ts` — reçoit paiement confirmé, génère réponse IA, envoie email
4. `src/app/merci/page.tsx` — page de confirmation

## Tarifs
- 1 question : 5€ (500 centimes)
- 3 questions : 10€ (1000 centimes) — populaire
- 5 questions : 15€ (1500 centimes)

## Variables d'environnement requises
```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
ANTHROPIC_API_KEY=sk-ant-...
RESEND_API_KEY=re_...
NEXT_PUBLIC_SITE_URL=https://voyance-pendule.fr
```

## Pages
- `/` — Home avec hero, services, zodiac, pricing, témoignages
- `/voyance` — Formulaire de consultation + pricing
- `/horoscope` — Horoscope gratuit (12 signes)
- `/anges` — Messages anges gardiens
- `/blog` — Blog articles SEO
- `/merci` — Confirmation post-paiement
- `/cgv`, `/mentions-legales`, `/confidentialite`
