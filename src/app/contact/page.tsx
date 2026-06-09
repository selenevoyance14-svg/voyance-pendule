import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact — Sélène Voyance | voyance-pendule.fr",
    description: "Une question sur la voyance par pendule, une consultation ou le site ? Contactez Sélène par e-mail. Réponse personnelle sous 24 à 48 heures.",
    alternates: { canonical: "https://voyance-pendule.fr/contact" },
};

export default function Contact() {
    return (
        <div className="min-h-screen bg-[#2a1a3a] pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">✉️</div>
                    <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                        Me <span className="text-gold-400">contacter</span>
                    </h1>
                    <div className="mystic-divider max-w-xs mx-auto" />
                    <p className="text-mystic-300 mt-6 max-w-xl mx-auto leading-relaxed">
                        Une question, une remarque, un besoin d&apos;aide avec une consultation ou
                        simplement l&apos;envie d&apos;échanger ? Je lis personnellement chaque message
                        et je vous réponds avec attention.
                    </p>
                </div>

                <div className="space-y-8 text-mystic-300 leading-relaxed">
                    <section className="glass-card p-6 sm:p-8 text-center">
                        <h2 className="font-heading text-xl font-semibold text-white mb-4">
                            Par e-mail
                        </h2>
                        <p className="mb-6">
                            Le plus simple est de m&apos;écrire directement. J&apos;y réponds
                            personnellement, généralement sous <strong className="text-white">24 à 48 heures</strong>
                            (hors week-ends et jours fériés).
                        </p>
                        <a
                            href="mailto:contact@voyance-pendule.fr"
                            className="btn-gold inline-block"
                        >
                            ✉️ contact@voyance-pendule.fr
                        </a>
                    </section>

                    <section className="glass-card p-6 sm:p-8">
                        <h2 className="font-heading text-xl font-semibold text-white mb-4">
                            Pour quel motif m&apos;écrire ?
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-gold-400 mt-0.5">✦</span>
                                <span><strong className="text-white">Une consultation</strong> — question sur votre tirage, modification, ou message non reçu.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gold-400 mt-0.5">✦</span>
                                <span><strong className="text-white">Un paiement</strong> — facture, remboursement ou difficulté lors du règlement.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gold-400 mt-0.5">✦</span>
                                <span><strong className="text-white">Le blog ou la boutique</strong> — suggestion d&apos;article, signalement d&apos;une erreur, demande de précision.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gold-400 mt-0.5">✦</span>
                                <span><strong className="text-white">Vos données personnelles</strong> — accès, rectification ou suppression (voir aussi la <a href="/confidentialite" className="text-gold-400 hover:text-gold-300">politique de confidentialité</a>).</span>
                            </li>
                        </ul>
                    </section>

                    <section className="glass-card p-6 sm:p-8">
                        <h2 className="font-heading text-xl font-semibold text-white mb-4">
                            Avant de m&apos;écrire
                        </h2>
                        <p>
                            La plupart des questions trouvent déjà leur réponse dans la
                            {" "}<a href="/faq" className="text-gold-400 hover:text-gold-300">FAQ</a> :
                            délai de réception d&apos;une consultation, déroulé d&apos;un tirage par pendule,
                            confidentialité de vos questions, moyens de paiement acceptés. N&apos;hésitez pas
                            à y jeter un œil, c&apos;est souvent le plus rapide.
                        </p>
                        <p className="mt-4">
                            Pour rappel, les outils gratuits et les consultations proposés ici sont à usage
                            de divertissement et de réflexion personnelle. Ils ne remplacent pas un avis
                            médical, juridique, psychologique ou financier.
                        </p>
                    </section>

                    <section className="glass-card p-6 sm:p-8">
                        <h2 className="font-heading text-xl font-semibold text-white mb-4">
                            Éditeur du site
                        </h2>
                        <p>
                            Le site <strong className="text-white">voyance-pendule.fr</strong> est édité à titre
                            individuel. Pour toute demande officielle (mentions légales, hébergeur, informations
                            sur l&apos;éditeur), consultez la page
                            {" "}<a href="/mentions-legales" className="text-gold-400 hover:text-gold-300">Mentions légales</a>.
                            L&apos;adresse <strong className="text-white">contact@voyance-pendule.fr</strong> reste
                            le point de contact unique pour toute correspondance.
                        </p>
                    </section>

                    <section className="text-center py-8">
                        <p className="text-mystic-400 mb-6">
                            À très bientôt sur les chemins de l&apos;intuition. 🌙
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="/pendule-gratuit" className="btn-gold">
                                🔮 Essayer le Pendule Gratuit
                            </a>
                            <a href="/faq" className="btn-mystic">
                                ❓ Consulter la FAQ
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
