import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
    title: "Voyance Pendule — Horoscope Gratuit, Anges Gardiens & Consultation | voyance-pendule.fr",
    description: "Tirage de cartes gratuit, pendule Oui/Non, horoscope du jour et messages de vos anges gardiens. Tous nos outils de guidance spirituelle sont gratuits.",
    keywords: "voyance, horoscope gratuit, anges gardiens, pendule, voyance en ligne, horoscope du jour, voyance pendule, spiritualité",
    metadataBase: new URL("https://voyance-pendule.fr"),
    alternates: {
        canonical: "https://voyance-pendule.fr",
    },
    icons: {
        icon: "/favicon.svg",
    },
    openGraph: {
        title: "Voyance Pendule — Horoscope Gratuit & Consultation par Pendule",
        description: "Tirage de cartes gratuit, pendule Oui/Non, horoscope et messages angeliques. Outils de guidance spirituelle gratuits.",
        type: "website",
        locale: "fr_FR",
        url: "https://voyance-pendule.fr",
        siteName: "Sélène Voyance",
    },
    twitter: {
        card: "summary",
        title: "Voyance Pendule — Horoscope Gratuit & Consultation par Pendule",
        description: "Tirage de cartes gratuit, pendule Oui/Non, horoscope et messages angeliques. Outils de guidance spirituelle gratuits.",
    },
    verification: {
        google: "lI35foz6lGbGxl_FL28T3AVoEX-gj2deFpvSpVpLsVo",
    },
    other: {
        "google-adsense-account": "ca-pub-5064203547863113",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <head>
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5064203547863113"
                    crossOrigin="anonymous"
                    strategy="afterInteractive"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: "Sélène Voyance",
                            url: "https://voyance-pendule.fr",
                            description: "Voyance par pendule, horoscope gratuit, tirage de cartes et messages angéliques.",
                            publisher: {
                                "@type": "Organization",
                                name: "Sélène Voyance",
                                url: "https://voyance-pendule.fr",
                            },
                        }),
                    }}
                />
            </head>
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
                                <a href="/tirage" className="text-mystic-200 hover:text-gold-400 transition font-medium">
                                    🃏 Cartes
                                </a>
                                <a href="/pendule-gratuit" className="text-mystic-200 hover:text-gold-400 transition font-medium">
                                    🔮 Pendule
                                </a>
                                <a href="/horoscope" className="text-mystic-200 hover:text-gold-400 transition font-medium">
                                    ♈ Horoscope
                                </a>
                                <a href="/message-ange" className="text-mystic-200 hover:text-gold-400 transition font-medium">
                                    👼 Anges
                                </a>
                                <a href="/blog" className="text-mystic-200 hover:text-gold-400 transition font-medium">
                                    📝 Blog
                                </a>
                                <a href="/boutique" className="btn-gold text-sm py-2 px-5">
                                    🛍️ Boutique
                                </a>
                            </div>
                            {/* Mobile menu */}
                            <div className="md:hidden flex items-center gap-3">
                                <a href="/tirage" className="text-mystic-300 text-sm">🃏</a>
                                <a href="/pendule-gratuit" className="text-mystic-300 text-sm">🔮</a>
                                <a href="/horoscope" className="text-mystic-300 text-sm">♈</a>
                                <a href="/message-ange" className="text-mystic-300 text-sm">👼</a>
                                <a href="/boutique" className="text-mystic-300 text-sm">🛍️</a>
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
                                    <li><a href="/tirage" className="hover:text-gold-400 transition">🃏 Tirage de Cartes</a></li>
                                    <li><a href="/pendule-gratuit" className="hover:text-gold-400 transition">🔮 Pendule Gratuit</a></li>
                                    <li><a href="/horoscope" className="hover:text-gold-400 transition">♈ Horoscope</a></li>
                                    <li><a href="/message-ange" className="hover:text-gold-400 transition">👼 Message Angélique</a></li>
                                    <li><a href="/boutique" className="hover:text-gold-400 transition">🛍️ Boutique</a></li>
                                    <li><a href="/qui-suis-je" className="hover:text-gold-400 transition">🌙 Qui suis-je ?</a></li>
                                    <li><a href="/faq" className="hover:text-gold-400 transition">❓ FAQ</a></li>
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
                                    Nos outils de guidance sont gratuits et à usage de divertissement.
                                    Ils ne remplacent pas un avis médical ou professionnel.
                                </p>
                            </div>
                        </div>
                        <div className="mystic-divider mt-10 mb-6" />
                        <p className="text-center text-xs text-mystic-600">
                            © 2026 Sélène Voyance. Tous droits réservés. | Tous nos outils sont gratuits ✨
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
