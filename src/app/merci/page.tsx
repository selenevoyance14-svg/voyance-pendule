import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merci — Votre tirage arrive | Sélène Voyance",
  description: "Votre paiement a été confirmé. Votre tirage du pendule personnalisé arrive par email sous 30 minutes.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://voyance-pendule.fr/merci" },
};

export default function MerciPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="text-7xl mb-6 animate-float">🌙</div>

        <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-mystic-300 via-mystic-400 to-gold-400 bg-clip-text text-transparent">
            Merci infiniment
          </span>
        </h1>

        <p className="text-xl text-mystic-200 mb-8 leading-relaxed">
          Le pendule est en mouvement.
        </p>

        <div className="bg-gradient-to-br from-mystic-950/60 to-[#0a0518]/80 border border-gold-500/30 rounded-2xl p-8 mb-8 text-left">
          <h2 className="font-heading text-xl text-gold-400 mb-4">📧 Votre tirage arrive</h2>
          <p className="text-mystic-300 leading-relaxed mb-4">
            Sélène consulte les énergies pour vous. Vous recevrez votre tirage personnalisé
            par email <strong className="text-gold-300">sous 30 minutes</strong>, à l'adresse
            que vous avez indiquée lors du paiement.
          </p>
          <p className="text-mystic-400 text-sm leading-relaxed">
            ✨ Pensez à vérifier votre dossier <strong>Spam / Promotions</strong> si rien n'arrive.
            Pour toute question, écrivez à <a href="mailto:contact@voyance-pendule.fr" className="text-gold-400 underline">contact@voyance-pendule.fr</a>.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-mystic-950/40 border border-mystic-700/30 rounded-lg p-5">
            <div className="text-3xl mb-2">⏱️</div>
            <strong className="text-mystic-100 block mb-1">Délai habituel</strong>
            <span className="text-mystic-400 text-sm">5 à 30 minutes</span>
          </div>
          <div className="bg-mystic-950/40 border border-mystic-700/30 rounded-lg p-5">
            <div className="text-3xl mb-2">🔒</div>
            <strong className="text-mystic-100 block mb-1">Confidentiel</strong>
            <span className="text-mystic-400 text-sm">Vos données ne sont jamais partagées</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/" className="btn-mystic">← Retour à l'accueil</a>
          <a href="/blog" className="btn-gold">📝 Lire le blog en attendant</a>
        </div>

        <p className="mt-12 text-xs text-mystic-600 leading-relaxed">
          Tirage généré par notre oracle numérique Sélène, à usage de divertissement et de réflexion personnelle.
        </p>
      </div>
    </div>
  );
}
