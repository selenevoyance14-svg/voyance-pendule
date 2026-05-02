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
- **PayPal Orders v2 API** (paiement direct via API REST, pas de SDK Node)
- Claude Haiku 4.5 (`claude-haiku-4-5-20251001`) — appel API Anthropic REST direct
- Resend (envoi email depuis `contact@voyance-pendule.fr`)

## Flux de paiement (consultation)
1. `src/app/consultation/page.tsx` — landing avec FAQ + composant client
2. `src/app/components/VoyanceForm.tsx` — formulaire (3 plans, prénom, date, email, questions)
3. POST `functions/api/checkout.ts` — crée un Order PayPal, retourne `{orderID, approvalUrl}`
4. Le client **stocke les données dans `localStorage`** (clé : `pp_order_${orderID}`) avant de rediriger vers PayPal
5. PayPal redirige vers `/merci?token=ORDER_ID` après approbation
6. `src/app/components/MerciClient.tsx` (client) lit l'orderID + récupère les données depuis localStorage
7. POST `functions/api/capture.ts` — capture l'ordre PayPal, **vérifie le montant côté serveur** (anti-tampering),
   génère le tirage Haiku, envoie l'email via Resend
8. La page /merci affiche success / missing (data perdue) / error

## Tarifs
| Plan | ID | Prix | Questions |
|------|----|----|-----------|
| Question Unique | `q1` | 5,90€ | 1 |
| Tirage Approfondi (★ populaire) | `q3` | 11,90€ | 3 |
| Tirage Complet | `q5` | 19,90€ | 5 |

## Variables d'environnement (Cloudflare Pages → Settings → Environment variables → Production)
À configurer pour les **Functions** :

```
PAYPAL_CLIENT_ID=Axxx...
PAYPAL_SECRET=Exxx...
PAYPAL_API_BASE=https://api-m.paypal.com
ANTHROPIC_API_KEY=sk-ant-...
RESEND_API_KEY=re_...
EMAIL_FROM=contact@voyance-pendule.fr
SITE_URL=https://voyance-pendule.fr
```

Pour tester en sandbox PayPal : `PAYPAL_API_BASE=https://api-m.sandbox.paypal.com`
+ utiliser les credentials sandbox.

## Setup PayPal (à faire 1 fois)
1. Aller sur https://developer.paypal.com/ → Apps & Credentials
2. Basculer **Live** (pas Sandbox) — sauf pour tester
3. Cliquer "Create App" → nom = "Voyance Pendule"
4. Récupérer **Client ID** + **Secret** → mettre dans les env vars Cloudflare Pages
5. Pas de webhook nécessaire (capture synchrone côté return_url)

## Setup Resend
1. Vérifier que le domaine `voyance-pendule.fr` est configuré (DNS SPF/DKIM/DMARC) dans Resend
2. Récupérer `RESEND_API_KEY` (mode production)
3. Adresse expéditrice : `contact@voyance-pendule.fr`

## Pages publiques
- `/` — Home (hero, outils gratuits, **section consultation premium**, zodiac, témoignages)
- `/consultation` — Landing payante avec formulaire et FAQ
- `/merci` — Confirmation post-paiement + capture client-side (no-index)
- `/voyance` — redirige vers `/pendule-gratuit`
- `/pendule-gratuit`, `/tirage`, `/horoscope`, `/message-ange`, `/anges` — outils gratuits
- `/blog`, `/blog/[slug]` — articles SEO
- `/boutique` — affiliation Amazon
- `/qui-suis-je`, `/faq`, `/cgv`, `/mentions-legales`, `/confidentialite`

## Points importants
- `output: "export"` → site **static**. Routes API via `functions/` (Cloudflare Pages Functions), pas `app/api/`.
- Les données du formulaire (questions, email, etc.) sont **stockées en localStorage** côté client entre /consultation et /merci. Pas de KV ni de DB nécessaire — simplifie le déploiement.
- **Anti-tampering** : `/api/capture` revérifie côté serveur que le montant capturé par PayPal correspond bien au plan demandé (`q1`/`q3`/`q5`). Un user qui modifie son localStorage ne peut pas tricher.
- Si l'utilisateur change de navigateur entre paiement et retour, localStorage est vide → page /merci affiche un message demandant de contacter `contact@voyance-pendule.fr`. Edge case rare mais géré proprement.
- Tirage généré en français avec ton "Sélène" (bienveillant, poétique). Disclaimer "oracle numérique" présent dans email + page consultation pour éthique et conformité légale.
