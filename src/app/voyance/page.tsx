import type { Metadata } from "next";
import VoyanceForm from "@/app/components/VoyanceForm";

export const metadata: Metadata = {
    title: "Voyance par Pendule — Réponse Oui/Non Précise | Sélène Voyance",
    description: "Grâce à mon pendule, je réponds de façon précise à vos questions par un Oui ou un Non. 1 question : 5€, 3 questions : 10€. Réponse sous 24h.",
};

export default function VoyancePage() {
    return (
        <>
            {/* HEADER */}
            <section className="py-16 sm:py-24 text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-mystic-600/10 blur-[120px]" />
                <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] rounded-full bg-gold-600/10 blur-[80px]" />

                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    {/* Pendulum */}
                    <div className="flex justify-center mb-8">
                        <div className="pendulum">
                            <div className="flex flex-col items-center">
                                <div className="w-0.5 h-20 bg-gradient-to-b from-gold-400/60 to-gold-500" />
                                <div className="w-12 h-16 rounded-full bg-gradient-to-b from-mystic-400 to-mystic-700 shadow-lg shadow-mystic-500/40 border border-mystic-400/30 animate-glow" />
                            </div>
                        </div>
                    </div>

                    <h1 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
                        Voyance par <span className="text-gold-400">Pendule</span>
                    </h1>
                    <p className="text-mystic-300 text-lg max-w-xl mx-auto mb-2">
                        Grâce à mon pendule, je réponds de façon précise à vos questions
                        par un <strong className="text-gold-400">Oui</strong> ou un <strong className="text-gold-400">Non</strong>.
                    </p>
                    <p className="text-mystic-500 text-sm">Réponse personnalisée sous 24h par email</p>
                    <div className="mystic-divider max-w-xs mx-auto mt-6" />
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="pb-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white text-center mb-12">
                        Comment ça <span className="text-mystic-400">fonctionne</span> ?
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="glass-card p-6 text-center">
                            <div className="w-12 h-12 rounded-full bg-mystic-600/20 border border-mystic-500/30 flex items-center justify-center mx-auto mb-4">
                                <span className="font-heading font-bold text-mystic-300">1</span>
                            </div>
                            <h3 className="font-heading text-sm font-bold text-mystic-200 mb-2">Choisissez votre formule</h3>
                            <p className="text-mystic-400 text-xs">1, 3 ou 5 questions selon vos besoins</p>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <div className="w-12 h-12 rounded-full bg-mystic-600/20 border border-mystic-500/30 flex items-center justify-center mx-auto mb-4">
                                <span className="font-heading font-bold text-mystic-300">2</span>
                            </div>
                            <h3 className="font-heading text-sm font-bold text-mystic-200 mb-2">Posez vos questions</h3>
                            <p className="text-mystic-400 text-xs">Formulez des questions avec réponse Oui/Non</p>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <div className="w-12 h-12 rounded-full bg-mystic-600/20 border border-mystic-500/30 flex items-center justify-center mx-auto mb-4">
                                <span className="font-heading font-bold text-mystic-300">3</span>
                            </div>
                            <h3 className="font-heading text-sm font-bold text-mystic-200 mb-2">Consultation pendule</h3>
                            <p className="text-mystic-400 text-xs">Je consulte mon pendule pour chacune de vos questions</p>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <div className="w-12 h-12 rounded-full bg-gold-600/20 border border-gold-500/30 flex items-center justify-center mx-auto mb-4">
                                <span className="font-heading font-bold text-gold-400">4</span>
                            </div>
                            <h3 className="font-heading text-sm font-bold text-gold-400 mb-2">Réponse sous 24h</h3>
                            <p className="text-mystic-400 text-xs">Recevez votre réponse détaillée par email</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section className="section-purple py-20 sm:py-28" id="tarifs">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white text-center mb-4">
                        Choisissez votre <span className="text-gold-400">formule</span>
                    </h2>
                    <p className="text-mystic-400 text-center mb-12 max-w-lg mx-auto">
                        Paiement sécurisé par Stripe. Réponse garantie sous 24h.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        {/* 1 Question */}
                        <div className="glass-card p-8 text-center">
                            <div className="text-4xl mb-4">🔮</div>
                            <h3 className="font-heading text-xl font-bold text-mystic-200 mb-2">1 Question</h3>
                            <p className="text-mystic-400 text-sm mb-6">Réponse Oui / Non avec explication</p>
                            <div className="text-5xl font-bold text-white mb-1">5€</div>
                            <div className="text-mystic-500 text-sm mb-8">Paiement unique</div>
                            <ul className="text-left space-y-3 mb-8 text-sm text-mystic-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-0.5">✓</span>
                                    <span>1 question Oui / Non</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-0.5">✓</span>
                                    <span>Consultation pendule personnalisée</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-0.5">✓</span>
                                    <span>Explication de la réponse</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-0.5">✓</span>
                                    <span>Réponse sous 24h par email</span>
                                </li>
                            </ul>
                            <a href="https://buy.stripe.com/5kQfZh6dG81a96seiWeEo01" target="_blank" rel="noopener noreferrer" className="btn-mystic w-full justify-center text-base">
                                🔒 Poser ma question — 5€
                            </a>
                        </div>

                        {/* 3 Questions - Populaire */}
                        <div className="glass-card p-8 text-center pricing-popular">
                            <div className="text-4xl mb-4 animate-float">🔮</div>
                            <h3 className="font-heading text-xl font-bold text-gold-400 mb-2">3 Questions</h3>
                            <p className="text-mystic-400 text-sm mb-6">3 réponses Oui / Non avec explications</p>
                            <div className="flex items-center justify-center gap-3 mb-1">
                                <span className="text-mystic-500 line-through text-xl">15€</span>
                                <span className="text-5xl font-bold text-gold-400">10€</span>
                            </div>
                            <div className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full mb-8">
                                Économisez 5€
                            </div>
                            <ul className="text-left space-y-3 mb-8 text-sm text-mystic-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold-400 mt-0.5">✓</span>
                                    <span>3 questions Oui / Non</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold-400 mt-0.5">✓</span>
                                    <span>3 consultations pendule personnalisées</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold-400 mt-0.5">✓</span>
                                    <span>Explication détaillée de chaque réponse</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold-400 mt-0.5">✓</span>
                                    <span>Réponse sous 24h par email</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold-400 mt-0.5">✓</span>
                                    <span className="font-semibold">Conseil spirituel bonus</span>
                                </li>
                            </ul>
                            <a href="https://buy.stripe.com/dRm6oHcC4epy5Ug6QueEo02" target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center text-base">
                                🔒 Poser mes 3 questions — 10€
                            </a>
                        </div>

                        {/* 5 Questions */}
                        <div className="glass-card p-8 text-center">
                            <div className="text-4xl mb-4">🔮</div>
                            <h3 className="font-heading text-xl font-bold text-mystic-200 mb-2">5 Questions</h3>
                            <p className="text-mystic-400 text-sm mb-6">5 réponses Oui / Non avec explications</p>
                            <div className="flex items-center justify-center gap-3 mb-1">
                                <span className="text-mystic-500 line-through text-xl">25€</span>
                                <span className="text-5xl font-bold text-white">15€</span>
                            </div>
                            <div className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full mb-8">
                                Économisez 10€
                            </div>
                            <ul className="text-left space-y-3 mb-8 text-sm text-mystic-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-0.5">✓</span>
                                    <span>5 questions Oui / Non</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-0.5">✓</span>
                                    <span>5 consultations pendule personnalisées</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-0.5">✓</span>
                                    <span>Explication détaillée de chaque réponse</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-0.5">✓</span>
                                    <span>Réponse sous 24h par email</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-0.5">✓</span>
                                    <span className="font-semibold">Guidance spirituelle complète</span>
                                </li>
                            </ul>
                            <a href="https://buy.stripe.com/5kQfZhdG881a6Yk1waeEo03" target="_blank" rel="noopener noreferrer" className="btn-mystic w-full justify-center text-base">
                                🔒 Poser mes 5 questions — 15€
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FORMULAIRE */}
            <section className="py-20 sm:py-28" id="commander">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                            Posez votre <span className="text-gold-400">question</span> au pendule
                        </h2>
                        <p className="text-mystic-400 text-sm">
                            Entrez vos questions ci-dessous, payez en toute sécurité et recevez votre réponse par email sous 24h.
                        </p>
                    </div>
                    <VoyanceForm />
                </div>
            </section>

            {/* FAQ */}
            <section className="section-dark py-20">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="font-heading text-2xl font-bold text-white text-center mb-12">
                        Questions <span className="text-mystic-400">fréquentes</span>
                    </h2>

                    <div className="space-y-4">
                        <details className="glass-card overflow-hidden group">
                            <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-mystic-200 hover:text-gold-400 transition">
                                Qu&apos;est-ce que la voyance par pendule ?
                                <span className="text-mystic-500 text-xl group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-6 pb-6 text-mystic-400 text-sm leading-relaxed">
                                Le pendule est un outil de radiesthésie utilisé depuis des millénaires. Il répond aux questions
                                par des mouvements spécifiques : un mouvement circulaire ou de balancier indique un &ldquo;Oui&rdquo;,
                                un autre mouvement indique un &ldquo;Non&rdquo;. Je me connecte à votre énergie à travers votre prénom
                                et votre question pour obtenir des réponses précises.
                            </div>
                        </details>

                        <details className="glass-card overflow-hidden group">
                            <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-mystic-200 hover:text-gold-400 transition">
                                Comment formuler ma question ?
                                <span className="text-mystic-500 text-xl group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-6 pb-6 text-mystic-400 text-sm leading-relaxed">
                                Formulez votre question de manière claire et précise, avec une réponse possible par Oui ou Non.
                                Par exemple : &ldquo;Est-ce que je vais obtenir ce travail ?&rdquo; plutôt que &ldquo;Quand est-ce
                                que je vais trouver un travail ?&rdquo;. Plus votre question est précise, plus la réponse du
                                pendule sera claire.
                            </div>
                        </details>

                        <details className="glass-card overflow-hidden group">
                            <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-mystic-200 hover:text-gold-400 transition">
                                En combien de temps reçois-je ma réponse ?
                                <span className="text-mystic-500 text-xl group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-6 pb-6 text-mystic-400 text-sm leading-relaxed">
                                Vous recevez votre réponse <strong>sous 24h maximum</strong> par email. Je prends le temps de
                                me concentrer sur chaque question individuellement pour vous offrir la réponse la plus précise
                                possible. En général, les réponses sont envoyées dans les 2 à 6 heures.
                            </div>
                        </details>

                        <details className="glass-card overflow-hidden group">
                            <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-mystic-200 hover:text-gold-400 transition">
                                Le paiement est-il sécurisé ?
                                <span className="text-mystic-500 text-xl group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-6 pb-6 text-mystic-400 text-sm leading-relaxed">
                                Oui, le paiement est traité par <strong>Stripe</strong>, la même plateforme de paiement
                                utilisée par des millions d&apos;entreprises dans le monde. Vos données bancaires ne sont jamais
                                stockées sur notre site. C&apos;est 100% sécurisé.
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </>
    );
}
