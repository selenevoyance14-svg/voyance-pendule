# Sélène Voyance — CLAUDE.md

## Projet
Site Next.js 14 (static export) hébergé sur Cloudflare Pages.
- **Outils gratuits** : pendule Oui/Non, tirage de cartes, horoscope, messages anges, blog SEO.
- **Offre payante** : `/consultation` — tirage du pendule personnalisé envoyé par email,
  généré par Claude Haiku (persona "Sélène"), livré en quelques minutes (annoncé "sous 30 min").

## Stack
- Next.js 14 (App Router), TypeScript, Tailwind CSS (thème `mystic-*` + `gold-*`)
- **Cloudflare Pages** (static export `output: "export"` → dossier `out/`)
- **Cloudflare Pages Functions** (`functions/api/*.ts`) pour les routes API serveur
- Stripe (paiement Checkout, appel API REST direct depuis Worker)
- Claude Haiku 4.5 (`claude-haiku-4-5-20251001`) — appel API Anthropic REST direct
- Resend (envoi email depuis `contact@voyance-pendule.fr`)

## Flux de paiement (consultation)
1. `src/app/consultation/page.tsx` — landing avec FAQ + composant client
2. `src/app/components/VoyanceForm.tsx` — formulaire (3 plans, prénom, date, email, questions)
3. POST `functions/api/checkout.ts` — crée session Stripe Checkout, métadonnées dans `metadata`
4. Redirection Stripe → paiement → webhook
5. POST `functions/api/webhook.ts` — vérifie signature, génère tirage Haiku, envoie email Resend
6. `src/app/merci/page.tsx` — page de confirmation post-paiement

## Tarifs
| Plan | ID | Prix | Questions |
|------|----|----|-----------|
| Question Unique | `q1` | 5,90€ (590) | 1 |
| Tirage Approfondi (★ populaire) | `q3` | 11,90€ (1190) | 3 |
| Tirage Complet | `q5` | 19,90€ (1990) | 5 |

## Variables d'environnement (Cloudflare Pages → Settings → Environment variables)
À configurer pour les **Functions** (pas le build) :

```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
ANTHROPIC_API_KEY=sk-ant-...
RESEND_API_KEY=re_...
EMAIL_FROM=contact@voyance-pendule.fr
SITE_URL=https://voyance-pendule.fr
```

## Setup Stripe (à faire 1 fois)
1. Créer compte Stripe (vérifier que la catégorie "voyance/divinatoire" passe — sinon basculer SumUp/Mollie)
2. Récupérer `STRIPE_SECRET_KEY` (mode live)
3. Dashboard Stripe → Developers → Webhooks → Add endpoint
   - URL : `https://voyance-pendule.fr/api/webhook`
   - Event : `checkout.session.completed`
   - Récupérer `STRIPE_WEBHOOK_SECRET`
4. Configurer les env vars dans Cloudflare Pages → Settings → Environment variables (Production)

## Setup Resend (déjà utilisé sur bonsplansmania)
1. Vérifier que le domaine `voyance-pendule.fr` est configuré dans Resend
2. Récupérer `RESEND_API_KEY`
3. Adresse d'expédition : `contact@voyance-pendule.fr`

## Pages publiques
- `/` — Home (hero, outils gratuits, **section consultation premium**, zodiac, témoignages)
- `/consultation` — Landing payante avec formulaire et FAQ
- `/merci` — Confirmation post-paiement (no-index)
- `/voyance` — redirige vers `/pendule-gratuit`
- `/pendule-gratuit`, `/tirage`, `/horoscope`, `/message-ange`, `/anges` — outils gratuits
- `/blog`, `/blog/[slug]` — articles SEO
- `/boutique` — affiliation Amazon
- `/qui-suis-je`, `/faq`, `/cgv`, `/mentions-legales`, `/confidentialite`

## Points importants
- `output: "export"` → site **static**. Les routes API doivent passer par `functions/` (Cloudflare Pages Functions), pas `app/api/`.
- Le webhook Stripe **doit recevoir le body brut** pour vérifier la signature — les Pages Functions gèrent ça nativement (`request.text()` avant `JSON.parse`).
- La signature Stripe est vérifiée en HMAC-SHA256 via Web Crypto API (pas de SDK Node nécessaire dans le Worker).
- Tirage généré en français avec le ton "Sélène" (bienveillant, poétique). Disclaimer "oracle numérique" présent dans email + page consultation pour éthique et conformité légale.
