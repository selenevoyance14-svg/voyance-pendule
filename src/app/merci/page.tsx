import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Continuer votre exploration — Sélène Voyance",
    description: "Retrouvez les outils gratuits de Sélène Voyance.",
    robots: { index: false, follow: true },
};

export default function Merci() {
    return (
        <main className="min-h-screen bg-[#2a1a3a] pt-32 pb-20">
            <div className="max-w-2xl mx-auto px-4 text-center">
                <div className="text-6xl mb-6">🌙</div>
                <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5">
                    Votre exploration continue
                </h1>
                <p className="text-mystic-300 leading-relaxed mb-10">
                    Les expériences de Sélène sont désormais entièrement gratuites et accessibles sans inscription.
                    Choisissez simplement l’outil qui vous appelle.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="/pendule-gratuit" className="btn-gold">🔮 Pendule gratuit</a>
                    <a href="/tirage" className="btn-mystic">🃏 Tirage de cartes</a>
                </div>
            </div>
        </main>
    );
}
