import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Qui suis-je ? — Sélène Voyance | voyance-pendule.fr",
    description: "Découvrez Sélène, votre guide spirituelle sur voyance-pendule.fr. Passionnée de voyance par pendule, radiesthésie, tarot et spiritualité depuis plus de 15 ans.",
};

export default function QuiSuisJe() {
    return (
        <div className="min-h-screen bg-[#0a0520] pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">🌙</div>
                    <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                        Qui suis-je <span className="text-gold-400">?</span>
                    </h1>
                    <div className="mystic-divider max-w-xs mx-auto" />
                </div>

                <div className="space-y-8 text-mystic-300 leading-relaxed">
                    <section className="glass-card p-6 sm:p-8">
                        <h2 className="font-heading text-xl font-semibold text-white mb-4">
                            Bienvenue, je suis <span className="text-gold-400">Sélène</span>
                        </h2>
                        <p>
                            Passionnée de voyance et de spiritualité depuis plus de 15 ans, j&apos;ai créé
                            voyance-pendule.fr pour partager cette passion et rendre la guidance spirituelle
                            accessible à tous. Mon approche repose sur le pendule de radiesthésie, un outil
                            ancestral que j&apos;utilise au quotidien pour apporter des réponses claires
                            et bienveillantes.
                        </p>
                        <p className="mt-4">
                            Mon parcours m&apos;a menée de la lithothérapie au tarot, en passant par
                            l&apos;astrologie et la communication avec les anges gardiens. Chacune de ces
                            disciplines m&apos;a enrichie et m&apos;a permis de développer une sensibilité
                            particulière pour accompagner ceux qui cherchent des réponses.
                        </p>
                    </section>

                    <section className="glass-card p-6 sm:p-8">
                        <h2 className="font-heading text-xl font-semibold text-white mb-4">
                            Ma vision de la voyance
                        </h2>
                        <p>
                            Pour moi, la voyance n&apos;est pas une prédiction figée de l&apos;avenir.
                            C&apos;est un éclairage, un moment de recul qui permet de mieux comprendre
                            sa situation et de prendre des décisions en conscience. Le pendule est un
                            formidable outil de connexion intérieure : il capte les énergies subtiles
                            et traduit ce que notre intuition perçoit sans toujours pouvoir l&apos;exprimer.
                        </p>
                        <p className="mt-4">
                            Je crois profondément que chacun possède en soi les réponses à ses questions.
                            Mon rôle est de vous aider à les révéler, avec douceur et sans jugement.
                        </p>
                    </section>

                    <section className="glass-card p-6 sm:p-8">
                        <h2 className="font-heading text-xl font-semibold text-white mb-4">
                            Ce que je propose sur ce site
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-gold-400 font-semibold mb-1">Des outils gratuits</h3>
                                <p>
                                    Tirage de cartes, pendule Oui/Non, horoscope du jour et messages de vos anges
                                    gardiens — tous accessibles gratuitement et sans inscription. Je souhaite que
                                    chaque visiteur puisse trouver un moment de guidance, quels que soient ses moyens.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-gold-400 font-semibold mb-1">Des consultations personnalisées</h3>
                                <p>
                                    Pour ceux qui souhaitent aller plus loin, je propose des consultations par pendule
                                    à partir de 5 euros. Vous posez vos questions, je consulte le pendule et vous
                                    recevez une réponse détaillée par email. Chaque consultation est unique et
                                    réalisée avec soin.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-gold-400 font-semibold mb-1">Un blog riche en contenu</h3>
                                <p>
                                    Je partage régulièrement des articles sur la voyance, le tarot, la lithothérapie,
                                    les anges gardiens, l&apos;astrologie et le développement personnel. Mon objectif :
                                    vous transmettre les connaissances qui m&apos;ont aidée à mieux comprendre le monde
                                    spirituel.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-gold-400 font-semibold mb-1">Une boutique de confiance</h3>
                                <p>
                                    Je sélectionne avec soin les produits que je recommande dans la boutique :
                                    pendules, tarots, pierres, bougies, encens et livres. Ce sont des objets que
                                    j&apos;utilise moi-même ou que je connais bien. La boutique fonctionne via
                                    des liens affiliés Amazon, sans aucun surcoût pour vous.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="glass-card p-6 sm:p-8">
                        <h2 className="font-heading text-xl font-semibold text-white mb-4">
                            Mon engagement
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-gold-400 mt-0.5">✦</span>
                                <span><strong className="text-white">Bienveillance</strong> — Chaque consultation est réalisée dans le respect et la douceur, sans jugement.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gold-400 mt-0.5">✦</span>
                                <span><strong className="text-white">Honnêteté</strong> — Je transmets les messages tels qu&apos;ils me parviennent, avec sincérité.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gold-400 mt-0.5">✦</span>
                                <span><strong className="text-white">Confidentialité</strong> — Vos questions et données personnelles restent strictement confidentielles.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gold-400 mt-0.5">✦</span>
                                <span><strong className="text-white">Transparence</strong> — Les tarifs sont clairs, les liens affiliés sont signalés, et les limites de la voyance sont rappelées.</span>
                            </li>
                        </ul>
                    </section>

                    <section className="text-center py-8">
                        <p className="text-mystic-400 mb-6">
                            Une question ? Un message ? N&apos;hésitez pas à me contacter.
                        </p>
                        <a href="mailto:bonsplansmania@gmail.com" className="text-gold-400 hover:text-gold-300 transition font-medium">
                            contact@voyance-pendule.fr
                        </a>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                            <a href="/pendule-gratuit" className="btn-gold">
                                🔮 Essayer le Pendule Gratuit
                            </a>
                            <a href="/boutique" className="btn-mystic">
                                🛍️ Voir la Boutique
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
