import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Voyance Pendule — Horoscope Gratuit, Anges Gardiens & Consultation | voyance-pendule.fr",
    description: "Découvrez votre horoscope gratuit, les messages de vos anges gardiens, et consultez Sélène pour une voyance par pendule. Réponses précises par Oui ou Non.",
    keywords: "voyance, horoscope gratuit, anges gardiens, pendule, voyance en ligne, horoscope du jour, voyance pendule, spiritualité",
    openGraph: {
        title: "Voyance Pendule — Horoscope Gratuit & Consultation par Pendule",
        description: "Horoscope gratuit, messages angéliques et voyance par pendule. Réponses précises par Oui ou Non à partir de 5€.",
        type: "website",
        locale: "fr_FR",
        url: "https://voyance-pendule.fr",
    },
    verification: {
        google: "lI35foz6lGbGxl_FL28T3AVoEX-gj2deFpvSpVpLsVo",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className="antialiased">
                <div className="stars-bg" />

                {/* NAVBAR */}
                <nav className="fixed top-0 w-full z-50 bg-[#0a0518]/80 backdrop-blur-xl border-b border-mystic-700/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16 sm:h-20">
                            <a href="/" className="flex items-center gap-2 sm:gap-3 group">
                                <span className="text-3xl sm:text-4xl group-hover:animate-spin-slow transition-transform">🌙</span>
                                <div>
                                    <span className="font-heading text-lg sm:text-2xl font-bold bg-gradient-to-r from-mystic-400 to-gold-500 bg-clip-text text-transparent">
                                        Sélène
                                    </span>
                                    <span className="font-heading text-lg sm:text-2xl font-light text-mystic-300 ml-1 sm:ml-2">
                                        Voyance
                                    </span>
                                </div>
                            </a>
                            <div className="hidden md:flex items-center gap-8">
                                <a href="/horoscope" className="text-mystic-200 hover:text-gold-400 transition font-medium">
                                    ♈ Horoscope
                                </a>
                                <a href="/blog" className="text-mystic-200 hover:text-gold-400 transition font-medium">
                                    📝 Blog
                                </a>
                                <a href="/anges" className="text-mystic-200 hover:text-gold-400 transition font-medium">
                                    👼 Anges
                                </a>
                                <a href="/voyance" className="btn-gold text-sm py-2 px-5">
                                    🔮 Consultation
                                </a>
                            </div>
                            {/* Mobile menu */}
                            <div className="md:hidden flex items-center gap-3">
                                <a href="/horoscope" className="text-mystic-300 text-sm">Horoscope</a>
                                <a href="/blog" className="text-mystic-300 text-sm">Blog</a>
                                <a href="/voyance" className="btn-gold text-xs py-1.5 px-3">🔮 Consulter</a>
                            </div>
                        </div>
                    </div>
                </nav>

                <main className="relative z-10 pt-16 sm:pt-20">
                    {children}
                </main>

                {/* FOOTER */}
                <footer className="relative z-10 border-t border-mystic-800/30 bg-[#070312]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                        <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-2xl">🌙</span>
                                    <span className="font-heading text-xl font-bold text-mystic-300">Sélène Voyance</span>
                                </div>
                                <p className="text-mystic-400 text-sm leading-relaxed">
                                    Votre guide spirituel en ligne. Horoscope gratuit, messages angéliques
                                    et consultations de voyance par pendule.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-heading text-gold-500 font-semibold mb-4">Navigation</h4>
                                <ul className="space-y-2 text-sm text-mystic-400">
                                    <li><a href="/" className="hover:text-gold-400 transition">✨ Accueil</a></li>
                                    <li><a href="/horoscope" className="hover:text-gold-400 transition">♈ Horoscope Gratuit</a></li>
                                    <li><a href="/anges" className="hover:text-gold-400 transition">👼 Anges Gardiens</a></li>
                                    <li><a href="/voyance" className="hover:text-gold-400 transition">🔮 Voyance Pendule</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-heading text-gold-500 font-semibold mb-4">Légal</h4>
                                <ul className="space-y-2 text-sm text-mystic-400">
                                    <li><a href="/mentions-legales" className="hover:text-gold-400 transition">Mentions Légales</a></li>
                                    <li><a href="/cgv" className="hover:text-gold-400 transition">CGV</a></li>
                                    <li><a href="/confidentialite" className="hover:text-gold-400 transition">Politique de confidentialité</a></li>
                                </ul>
                                <p className="mt-4 text-xs text-mystic-600">
                                    La voyance ne se substitue pas à un avis médical ou professionnel.
                                </p>
                                <p className="mt-3 text-xs text-mystic-600">
                                    🛡️ Garantie sérénité : remboursement intégral sous 7 jours si vous n&apos;êtes pas satisfait(e).
                                </p>
                            </div>
                        </div>
                        <div className="mystic-divider mt-10 mb-6" />
                        <p className="text-center text-xs text-mystic-600">
                            © 2026 Sélène Voyance. Tous droits réservés. | Paiement sécurisé par Stripe 🔒
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
