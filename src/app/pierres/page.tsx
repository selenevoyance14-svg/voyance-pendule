import type { Metadata } from "next";
import { galeriePierres, totalPierres } from "@/data/pierres";

export const metadata: Metadata = {
    title: "Pierres et leurs vertus : la galerie complète — Sélène Voyance",
    description:
        "Découvrez les pierres et cristaux classés par intention : amour, protection, abondance, sommeil, intuition. Vertus, chakra et guide d'achat pour chaque pierre.",
};

export default function PierresPage() {
    return (
        <div className="min-h-screen bg-[#2a1a3a] pt-24 pb-20">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
                    Les pierres et leurs <span className="text-gold-400">vertus</span>
                </h1>
                <p className="text-mystic-400 max-w-2xl mx-auto text-lg">
                    {totalPierres} pierres et cristaux classés par intention. Choisissez ce que vous
                    recherchez — amour, protection, abondance, sérénité — et trouvez la pierre faite pour vous.
                </p>
                <div className="mystic-divider max-w-xs mx-auto mt-8" />
            </div>

            {/* Sommaire par intention */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="flex flex-wrap justify-center gap-3">
                    {galeriePierres.map((g) => (
                        <a
                            key={g.id}
                            href={`#${g.id}`}
                            className="text-sm text-mystic-200 bg-mystic-900/40 border border-mystic-700/30 hover:border-gold-500/50 hover:text-gold-400 px-4 py-2 rounded-full transition-colors"
                        >
                            <span className="mr-1.5">{g.emoji}</span>
                            {g.titre}
                        </a>
                    ))}
                </div>
            </div>

            {/* Sections par intention */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                {galeriePierres.map((g, groupIndex) => (
                    <section key={g.id} id={g.id} className="scroll-mt-24">
                        <div className="mb-8">
                            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                                <span className="mr-2">{g.emoji}</span>
                                {g.titre}
                            </h2>
                            <p className="text-mystic-400 mt-2">{g.sousTitre}</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {g.pierres.map((p, pierreIndex) => {
                                const positions = ["8% 8%", "50% 6%", "92% 8%", "12% 48%", "50% 48%", "90% 48%", "10% 92%", "50% 92%", "90% 92%"];
                                const imagePosition = positions[(groupIndex * 3 + pierreIndex) % positions.length];

                                return (
                                <a
                                    key={p.slug}
                                    href={`/blog/${p.slug}`}
                                    className="glass-card group flex flex-col overflow-hidden hover:border-gold-500/50 transition-all duration-300"
                                >
                                    {/* Photographie minérale avec une teinte propre à la pierre */}
                                    <div
                                        className="aspect-square relative flex items-end p-4 overflow-hidden"
                                        role="img"
                                        aria-label={`${p.nom}, pierre naturelle`}
                                        style={{
                                            backgroundImage: `linear-gradient(160deg, ${p.colors[0]}33, ${p.colors[1]}88), url("/images/pierres/collection-cristaux-selene.png")`,
                                            backgroundSize: "220%",
                                            backgroundPosition: imagePosition,
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/10 transition-colors group-hover:from-black/65" />
                                        <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-wide uppercase text-white/90 bg-black/25 backdrop-blur-sm px-2 py-1 rounded-full">
                                            {p.chakra}
                                        </span>
                                        <h3 className="relative font-heading text-lg font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                                            {p.nom}
                                        </h3>
                                    </div>

                                    <div className="p-4 flex flex-col flex-grow">
                                        <p className="text-mystic-300 text-sm leading-relaxed flex-grow">
                                            {p.vertu}
                                        </p>
                                        <div className="mt-4 flex items-center text-gold-400 text-sm font-semibold gap-2">
                                            Découvrir
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>
                                </a>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>

            {/* CTA vers les outils + consultation */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <div className="glass-card text-center p-10">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                        Une pierre vous attire ? Posez votre question au <span className="text-gold-400">pendule</span>
                    </h2>
                    <p className="text-mystic-400 max-w-xl mx-auto mb-8">
                        Hésitation, choix du cœur, doute du moment… Laissez le pendule vous répondre
                        Oui ou Non, puis complétez votre réflexion avec un tirage de cartes gratuit.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/pendule-gratuit"
                            className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-mystic-950 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition"
                        >
                            Consulter le pendule gratuit
                        </a>
                        <a
                            href="/tirage"
                            className="inline-block border border-gold-500/50 text-gold-400 px-8 py-3 rounded-full font-semibold hover:bg-gold-500/10 transition"
                        >
                            Tirage de cartes gratuit
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
