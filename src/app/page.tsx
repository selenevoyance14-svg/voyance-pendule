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
    { name: "Sophie M.", text: "Le tirage de cartes m'a donné une réponse claire à une question que je me posais depuis des mois. Impressionnant !", rating: 5 },
    { name: "Laurent D.", text: "Le pendule gratuit est étonnamment juste. Je reviens chaque semaine pour me guider.", rating: 5 },
    { name: "Marie C.", text: "L'horoscope est très juste et les messages des anges sont toujours réconfortants. Merci Sélène !", rating: 5 },
];

export default function Home() {
    return (
        <>
            {/* HERO */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-mystic-600/10 blur-[120px]" />
                <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-gold-600/5 blur-[100px]" />

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-mystic-950/50 border border-mystic-700/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
                        <span className="animate-twinkle">✨</span>
                        <span className="text-mystic-300 text-sm font-medium">Voyance &amp; Guidance Spirituelle — 100% Gratuit</span>
                    </div>

                    <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-mystic-300 via-mystic-400 to-gold-400 bg-clip-text text-transparent">
                            Révélez votre
                        </span>
                        <br />
                        <span className="text-white text-glow">Destinée</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-mystic-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Tirage de cartes, pendule Oui/Non, horoscope, messages angéliques —
                        tous nos outils de guidance sont gratuits. Laissez les astres éclairer votre chemin.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/tirage" className="btn-gold text-lg">
                            🃏 Tirage de Cartes
                        </a>
                        <a href="/pendule-gratuit" className="btn-mystic text-lg">
                            🔮 Pendule Gratuit
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

            {/* SERVICES — 4 outils gratuits */}
            <section className="section-purple py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                            Nos Outils <span className="text-gold-500">Gratuits</span>
                        </h2>
                        <p className="text-mystic-400 max-w-lg mx-auto">
                            Quatre outils de guidance spirituelle à votre disposition, sans inscription ni paiement.
                        </p>
                        <div className="mystic-divider max-w-xs mx-auto mt-4" />
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <a href="/tirage" className="gold-card p-8 text-center block">
                            <div className="text-5xl mb-6">🃏</div>
                            <h3 className="font-heading text-xl font-bold text-gold-400 mb-3">Tirage de Cartes</h3>
                            <p className="text-mystic-400 text-sm leading-relaxed mb-4">
                                Tirez 1, 3 ou 5 cartes et découvrez les messages que l&apos;univers vous envoie.
                            </p>
                            <span className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                                ✨ GRATUIT
                            </span>
                        </a>

                        <a href="/pendule-gratuit" className="glass-card p-8 text-center block">
                            <div className="text-5xl mb-6 animate-float">🔮</div>
                            <h3 className="font-heading text-xl font-bold text-mystic-200 mb-3">Pendule Oui/Non</h3>
                            <p className="text-mystic-400 text-sm leading-relaxed mb-4">
                                Posez votre question et laissez le pendule vous répondre par Oui ou Non instantanément.
                            </p>
                            <span className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                                ✨ GRATUIT
                            </span>
                        </a>

                        <a href="/horoscope" className="glass-card p-8 text-center block">
                            <div className="text-5xl mb-6">♈</div>
                            <h3 className="font-heading text-xl font-bold text-mystic-200 mb-3">Horoscope du Jour</h3>
                            <p className="text-mystic-400 text-sm leading-relaxed mb-4">
                                Découvrez votre horoscope quotidien pour les 12 signes du zodiaque.
                            </p>
                            <span className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                                ✨ GRATUIT
                            </span>
                        </a>

                        <a href="/message-ange" className="glass-card p-8 text-center block">
                            <div className="text-5xl mb-6">👼</div>
                            <h3 className="font-heading text-xl font-bold text-mystic-200 mb-3">Message Angélique</h3>
                            <p className="text-mystic-400 text-sm leading-relaxed mb-4">
                                Recevez un message personnalisé de votre ange gardien pour éclairer votre journée.
                            </p>
                            <span className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                                ✨ GRATUIT
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

            {/* TESTIMONIALS */}
            <section className="section-purple py-20 sm:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                            Ce que disent <span className="text-mystic-400">nos visiteurs</span>
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
                        Tous nos outils sont gratuits et accessibles instantanément.
                        Choisissez celui qui vous attire le plus.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/tirage" className="btn-gold text-lg">
                            🃏 Tirage de Cartes
                        </a>
                        <a href="/pendule-gratuit" className="btn-mystic text-lg">
                            🔮 Pendule Gratuit
                        </a>
                        <a href="/message-ange" className="btn-mystic text-lg">
                            👼 Message Angélique
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
