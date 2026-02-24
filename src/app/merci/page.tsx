import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Merci pour votre confiance — Sélène Voyance",
    description: "Votre commande de voyance par pendule a bien été enregistrée.",
};

export default function MerciPage() {
    return (
        <div className="min-h-screen bg-[#0a0518] pt-24 pb-16 flex items-center justify-center">
            <div className="max-w-2xl mx-auto px-4 text-center">
                <div className="text-7xl mb-8 animate-float">✨</div>

                <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
                    Merci pour votre <span className="text-gold-400">confiance</span>
                </h1>

                <div className="glass-card p-8 mb-10 text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">🔮</div>
                    <h2 className="text-xl font-bold text-mystic-200 mb-4">Et maintenant ?</h2>
                    <ul className="space-y-4 text-mystic-300">
                        <li className="flex gap-3">
                            <span className="text-gold-500 font-bold">1.</span>
                            votre paiement a bien été validé et vos questions ont été transmises à Sélène.
                        </li>
                        <li className="flex gap-3">
                            <span className="text-gold-500 font-bold">2.</span>
                            Vous allez recevoir un reçu de paiement automatique par email (expéditeur: Stripe).
                        </li>
                        <li className="flex gap-3">
                            <span className="text-gold-500 font-bold">3.</span>
                            Sélène étudiera vos questions avec son pendule et vous enverra votre réponse personnalisée par email sous <strong className="text-gold-400">24h à 48h</strong>.
                        </li>
                    </ul>
                </div>

                <p className="text-mystic-400 mb-10 italic">
                    "Que les astres continuent d&apos;éclairer votre chemin."
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="/" className="btn-mystic">
                        Retour à l&apos;accueil
                    </a>
                    <a href="/blog" className="text-mystic-300 hover:text-gold-400 transition text-sm font-medium">
                        Découvrir nos articles 📝
                    </a>
                </div>
            </div>
        </div>
    );
}
