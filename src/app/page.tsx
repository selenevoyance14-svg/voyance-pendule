const zodiacSigns = [
    { sign: "Bélier", emoji: "♈", dates: "21 mars - 19 avril" },
    { sign: "Taureau", emoji: "♉", dates: "20 avril - 20 mai" },
    { sign: "Gémeaux", emoji: "♊", dates: "21 mai - 20 juin" },
    { sign: "Cancer", emoji: "♋", dates: "21 juin - 22 juillet" },
    { sign: "Lion", emoji: "♌", dates: "23 juillet - 22 août" },
    { sign: "Vierge", emoji: "♍", dates: "23 août - 22 sept." },
    { sign: "Balance", emoji: "♎", dates: "23 sept. - 22 oct." },
    { sign: "Scorpion", emoji: "♏", dates: "23 oct. - 21 nov." },
    { sign: "Sagittaire", emoji: "♐", dates: "22 nov. - 21 déc." },
    { sign: "Capricorne", emoji: "♑", dates: "22 déc. - 19 janv." },
    { sign: "Verseau", emoji: "♒", dates: "20 janv. - 18 fév." },
    { sign: "Poissons", emoji: "♓", dates: "19 fév. - 20 mars" },
];

const testimonials = [
    { name: "Sophie M.", text: "Le pendule de Sélène m'a donné une réponse claire à une question que je me posais depuis des mois. Impressionnant !", rating: 5 },
    { name: "Laurent D.", text: "Réponse rapide et précise. Je recommande vivement pour les moments de doute.", rating: 5 },
    { name: "Marie C.", text: "L'horoscope est très juste et la consultation par pendule m'a beaucoup aidée dans ma prise de décision.", rating: 5 },
];

export default function Home() {
    return (
        <>
            {/* HERO */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-mystic-600/10 blur-[120px]" />
                <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-gold-600/5 blur-[100px]" />

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-mystic-950/50 border border-mystic-700/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
                        <span className="animate-twinkle">✨</span>
                        <span className="text-mystic-300 text-sm font-medium">Voyance &amp; Guidance Spirituelle</span>
                    </div>

                    <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-mystic-300 via-mystic-400 to-gold-400 bg-clip-text text-transparent">
                            Révélez votre
                        </span>
                        <br />
                        <span className="text-white text-glow">Destinée</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-mystic-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Horoscope gratuit, messages de vos anges gardiens, et consultations
                        de voyance par pendule. Laissez les astres guider votre chemin.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/horoscope" className="btn-mystic text-lg">
                            ♈ Horoscope Gratuit
                        </a>
                        <a href="/voyance" className="btn-gold text-lg">
                            🔮 Consultation Pendule
                        </a>
                    </div>

                    {/* Pendulum visual */}
                    <div className="mt-16 flex justify-center">
                        <div className="pendulum">
                            <div className="flex flex-col items-center">
                                <div className="w-0.5 h-24 bg-gradient-to-b from-gold-400/60 to-gold-500" />
                                <div className="w-10 h-14 rounded-full bg-gradient-to-b from-mystic-400 to-mystic-700 shadow-lg shadow-mystic-500/30 border border-mystic-400/30 animate-glow" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="section-purple py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                            Nos Services <span className="text-gold-500">Spirituels</span>
                        </h2>
                        <div className="mystic-divider max-w-xs mx-auto mt-4" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Horoscope */}
                        <a href="/horoscope" className="glass-card p-8 text-center block">
                            <div className="text-5xl mb-6">♈</div>
                            <h3 className="font-heading text-xl font-bold text-mystic-200 mb-3">Horoscope Gratuit</h3>
                            <p className="text-mystic-400 text-sm leading-relaxed mb-4">
                                Découvrez votre horoscope du jour pour les 12 signes du zodiaque.
                                Amour, travail, santé — les astres vous guident.
                            </p>
                            <span className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                                ✨ GRATUIT
                            </span>
                        </a>

                        {/* Anges */}
                        <a href="/anges" className="glass-card p-8 text-center block">
                            <div className="text-5xl mb-6">👼</div>
                            <h3 className="font-heading text-xl font-bold text-mystic-200 mb-3">Anges Gardiens</h3>
                            <p className="text-mystic-400 text-sm leading-relaxed mb-4">
                                Découvrez votre ange gardien, ses messages et ses heures
                                de guidance. Connectez-vous à votre protecteur céleste.
                            </p>
                            <span className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                                ✨ GRATUIT
                            </span>
                        </a>

                        {/* Pendule */}
                        <a href="/voyance" className="gold-card p-8 text-center block">
                            <div className="text-5xl mb-6 animate-float">🔮</div>
                            <h3 className="font-heading text-xl font-bold text-gold-400 mb-3">Voyance Pendule</h3>
                            <p className="text-mystic-300 text-sm leading-relaxed mb-4">
                                Grâce à mon pendule, je réponds de façon précise à vos questions
                                par un Oui ou un Non. Réponse sous 24h.
                            </p>
                            <span className="inline-block bg-gold-500/20 text-gold-400 text-xs font-bold px-3 py-1 rounded-full">
                                À partir de 5€
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* ZODIAC SIGNS */}
            <section className="section-dark py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                            Votre Signe <span className="text-mystic-400">Astrologique</span>
                        </h2>
                        <p className="text-mystic-400 max-w-xl mx-auto">
                            Cliquez sur votre signe pour découvrir votre horoscope du jour
                        </p>
                        <div className="mystic-divider max-w-xs mx-auto mt-4" />
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
                        {zodiacSigns.map((z) => (
                            <a
                                key={z.sign}
                                href="/horoscope"
                                className="glass-card p-4 text-center group block"
                            >
                                <div className="zodiac-icon mx-auto mb-3 group-hover:bg-mystic-600/30">
                                    {z.emoji}
                                </div>
                                <div className="font-heading text-sm font-bold text-mystic-200">{z.sign}</div>
                                <div className="text-[10px] text-mystic-500 mt-1">{z.dates}</div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING PENDULE */}
            <section className="section-purple py-20 sm:py-28" id="tarifs">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                            Consultations <span className="text-gold-500">Pendule</span>
                        </h2>
                        <p className="text-mystic-400 max-w-lg mx-auto">
                            Grâce à mon pendule, je réponds de façon précise à vos questions par un Oui ou un Non.
                        </p>
                        <div className="mystic-divider max-w-xs mx-auto mt-4" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        {/* 1 Question */}
                        <div className="glass-card p-8 text-center">
                            <div className="text-4xl mb-4">🔮</div>
                            <h3 className="font-heading text-xl font-bold text-mystic-200 mb-2">1 Question</h3>
                            <p className="text-mystic-400 text-sm mb-6">Réponse Oui / Non par pendule</p>
                            <div className="text-4xl font-bold text-white mb-1">5€</div>
                            <div className="text-mystic-500 text-sm mb-8">Paiement unique</div>
                            <a href="/voyance" className="btn-mystic w-full justify-center">
                                Poser ma question
                            </a>
                        </div>

                        {/* 3 Questions - Populaire */}
                        <div className="glass-card p-8 text-center pricing-popular relative">
                            <div className="text-4xl mb-4 animate-float">🔮</div>
                            <h3 className="font-heading text-xl font-bold text-gold-400 mb-2">3 Questions</h3>
                            <p className="text-mystic-400 text-sm mb-6">3 réponses Oui / Non par pendule</p>
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <span className="text-mystic-500 line-through text-lg">15€</span>
                                <span className="text-4xl font-bold text-gold-400">10€</span>
                            </div>
                            <div className="text-gold-600 text-sm mb-8 font-medium">Économisez 5€</div>
                            <a href="/voyance" className="btn-gold w-full justify-center">
                                Poser mes 3 questions
                            </a>
                        </div>

                        {/* 5 Questions */}
                        <div className="glass-card p-8 text-center">
                            <div className="text-4xl mb-4">🔮</div>
                            <h3 className="font-heading text-xl font-bold text-mystic-200 mb-2">5 Questions</h3>
                            <p className="text-mystic-400 text-sm mb-6">5 réponses Oui / Non par pendule</p>
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <span className="text-mystic-500 line-through text-lg">25€</span>
                                <span className="text-4xl font-bold text-white">15€</span>
                            </div>
                            <div className="text-green-400 text-sm mb-8 font-medium">Économisez 10€</div>
                            <a href="/voyance" className="btn-mystic w-full justify-center">
                                Poser mes 5 questions
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="section-dark py-20 sm:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                            Ce que disent <span className="text-mystic-400">nos consultants</span>
                        </h2>
                        <div className="mystic-divider max-w-xs mx-auto mt-4" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="glass-card p-6">
                                <div className="flex gap-1 mb-3">
                                    {Array.from({ length: t.rating }).map((_, j) => (
                                        <span key={j} className="text-gold-400">⭐</span>
                                    ))}
                                </div>
                                <p className="text-mystic-300 text-sm leading-relaxed mb-4 italic">
                                    &ldquo;{t.text}&rdquo;
                                </p>
                                <div className="text-mystic-200 font-semibold text-sm">— {t.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 sm:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-mystic-950/50 to-[#0a0518]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-mystic-600/10 blur-[120px]" />
                <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
                    <div className="text-6xl mb-6 animate-float">🌙</div>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                        Prêt(e) à découvrir ce que les astres vous réservent ?
                    </h2>
                    <p className="text-mystic-300 text-lg mb-10">
                        Commencez par votre horoscope gratuit ou posez directement
                        votre question au pendule.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/horoscope" className="btn-mystic text-lg">
                            ♈ Horoscope du Jour
                        </a>
                        <a href="/voyance" className="btn-gold text-lg">
                            🔮 Consulter le Pendule
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
