import type { Metadata } from "next";
import VoyanceForm from "@/app/components/VoyanceForm";

export const metadata: Metadata = {
  title: "Consultation Pendule Personnalisée — Tirage par Email | Sélène Voyance",
  description:
    "Recevez votre tirage du pendule personnalisé par email sous 30 minutes. Question unique 5,90€, tirage approfondi 11,90€, tirage complet 19,90€.",
  alternates: { canonical: "https://voyance-pendule.fr/consultation" },
  openGraph: {
    title: "Consultation Pendule Personnalisée — Tirage par Email",
    description:
      "Votre tirage du pendule, écrit pour vous, livré par email sous 30 minutes. Trois formules au choix.",
    url: "https://voyance-pendule.fr/consultation",
    type: "website",
  },
};

export default function ConsultationPage() {
  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-5 py-2 mb-6">
            <span>✨</span>
            <span className="text-gold-300 text-sm font-medium">Consultation personnalisée par email</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-mystic-300 via-mystic-400 to-gold-400 bg-clip-text text-transparent">
              Votre Tirage du Pendule
            </span>
            <br />
            <span className="text-white text-glow">Écrit pour Vous</span>
          </h1>

          <p className="text-lg text-mystic-300 max-w-2xl mx-auto leading-relaxed">
            Posez vos questions au pendule de Sélène. Vous recevez votre tirage personnalisé
            par email sous 30 minutes — interprétation détaillée et conseil concret pour chaque question.
          </p>
        </div>

        {/* COMMENT ÇA MARCHE */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="font-heading font-bold text-gold-400 mb-2">1. Vos questions</h3>
            <p className="text-mystic-400 text-sm leading-relaxed">
              Choisissez votre formule et formulez vos questions en toute sérénité.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🌙</div>
            <h3 className="font-heading font-bold text-gold-400 mb-2">2. Le pendule parle</h3>
            <p className="text-mystic-400 text-sm leading-relaxed">
              Sélène consulte le pendule et rédige votre tirage personnalisé.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-heading font-bold text-gold-400 mb-2">3. Réponse par email</h3>
            <p className="text-mystic-400 text-sm leading-relaxed">
              Vous recevez votre tirage complet sous 30 minutes dans votre boîte mail.
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-gradient-to-br from-mystic-950/60 to-[#0a0518]/80 backdrop-blur-sm border border-mystic-700/30 rounded-2xl p-6 sm:p-10 shadow-2xl shadow-mystic-900/30">
          <VoyanceForm />
        </div>

        {/* TRUST */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
          <div className="text-mystic-300 text-sm">
            <div className="text-2xl mb-2">🔒</div>
            <strong className="text-mystic-100 block">Paiement sécurisé</strong>
            Stripe — vos données ne transitent jamais par notre serveur.
          </div>
          <div className="text-mystic-300 text-sm">
            <div className="text-2xl mb-2">⏱️</div>
            <strong className="text-mystic-100 block">Sous 30 minutes</strong>
            Tirage rédigé et envoyé rapidement, 7j/7.
          </div>
          <div className="text-mystic-300 text-sm">
            <div className="text-2xl mb-2">🌿</div>
            <strong className="text-mystic-100 block">Bienveillance</strong>
            Pas de prédictions alarmantes — uniquement des messages constructifs.
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="font-heading text-2xl font-bold text-center text-gold-400 mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <details className="bg-mystic-950/40 border border-mystic-700/30 rounded-lg p-5">
              <summary className="font-medium text-mystic-100 cursor-pointer">
                Mon tirage est-il vraiment personnalisé ?
              </summary>
              <p className="mt-3 text-mystic-400 text-sm leading-relaxed">
                Oui. Chaque tirage est unique et rédigé en fonction de votre prénom, votre date de naissance
                (si fournie) et de vos questions précises. Notre oracle numérique Sélène n'envoie jamais deux
                tirages identiques.
              </p>
            </details>
            <details className="bg-mystic-950/40 border border-mystic-700/30 rounded-lg p-5">
              <summary className="font-medium text-mystic-100 cursor-pointer">
                Comment fonctionne l'oracle numérique Sélène ?
              </summary>
              <p className="mt-3 text-mystic-400 text-sm leading-relaxed">
                Sélène est une intelligence artificielle entraînée sur la tradition divinatoire du pendule.
                Elle interprète vos questions avec bienveillance et formule des réponses inspirées des principes
                de la radiesthésie. Ce n'est pas un médium humain : c'est un outil de réflexion et de guidance.
              </p>
            </details>
            <details className="bg-mystic-950/40 border border-mystic-700/30 rounded-lg p-5">
              <summary className="font-medium text-mystic-100 cursor-pointer">
                Puis-je poser n'importe quelle question ?
              </summary>
              <p className="mt-3 text-mystic-400 text-sm leading-relaxed">
                Privilégiez les questions personnelles : amour, travail, choix de vie, énergies du moment.
                Évitez les questions médicales, financières précises (cotations, dates) ou concernant
                directement la vie privée d'une autre personne nommée.
              </p>
            </details>
            <details className="bg-mystic-950/40 border border-mystic-700/30 rounded-lg p-5">
              <summary className="font-medium text-mystic-100 cursor-pointer">
                Et si je ne reçois pas mon tirage ?
              </summary>
              <p className="mt-3 text-mystic-400 text-sm leading-relaxed">
                Vérifiez vos spams. Si rien après 1h, écrivez à contact@voyance-pendule.fr avec votre adresse
                de paiement : nous renvoyons votre tirage immédiatement ou vous remboursons.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
