import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./selene.css";
import { MoonPhasePill } from "./components/MoonPhase";

export const metadata: Metadata = {
    title: "Voyance Pendule — Tirage Personnalisé par Email & Outils Gratuits | voyance-pendule.fr",
    description: "Tirage du pendule personnalisé par email à partir de 2€ (livré sous 30 min). Plus pendule Oui/Non, horoscope, anges gardiens — gratuits.",
    keywords: "voyance pendule, tirage pendule personnalisé, consultation pendule, voyance par email, horoscope gratuit, anges gardiens, spiritualité",
    metadataBase: new URL("https://voyance-pendule.fr"),
    alternates: {
        canonical: "https://voyance-pendule.fr",
    },
    icons: {
        icon: "/favicon.svg",
    },
    openGraph: {
        title: "Voyance Pendule — Horoscope Gratuit & Consultation par Pendule",
        description: "Tirage de cartes gratuit, pendule Oui/Non, horoscope et messages angéliques. Outils de guidance spirituelle gratuits.",
        type: "website",
        locale: "fr_FR",
        url: "https://voyance-pendule.fr",
        siteName: "Sélène Voyance",
    },
    twitter: {
        card: "summary",
        title: "Voyance Pendule — Horoscope Gratuit & Consultation par Pendule",
        description: "Tirage de cartes gratuit, pendule Oui/Non, horoscope et messages angéliques. Outils de guidance spirituelle gratuits.",
    },
    verification: {
        google: "lI35foz6lGbGxl_FL28T3AVoEX-gj2deFpvSpVpLsVo",
    },
    other: {
        "google-adsense-account": "ca-pub-5064203547863113",
    },
};

function BrandMark() {
    return (
        <svg className="sv-brand-mark" viewBox="0 0 40 40" fill="none">
            <defs>
                <linearGradient id="brandMoonG" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f3d27a" />
                    <stop offset="100%" stopColor="#b8893d" />
                </linearGradient>
            </defs>
            <path d="M28 6c-9 1.5-14 8-14 14s5 12.5 14 14c-7-2-12-7-12-14s5-12 12-14z" fill="url(#brandMoonG)" />
            <circle cx="32" cy="10" r="0.8" fill="#f3d27a" />
            <circle cx="34" cy="28" r="0.6" fill="#f3d27a" />
        </svg>
    );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
            <body className="sv-root antialiased">
                <div className="sv-bg-celestial" aria-hidden="true" />
                <svg className="sv-bg-stars" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <defs>
                        <radialGradient id="starGrad">
                            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <g fill="url(#starGrad)">
                        <circle cx="120" cy="80" r="1" className="sv-twinkle-1" />
                        <circle cx="280" cy="220" r="0.8" />
                        <circle cx="420" cy="120" r="1.2" className="sv-twinkle-2" />
                        <circle cx="610" cy="340" r="0.7" />
                        <circle cx="780" cy="180" r="1" className="sv-twinkle-3" />
                        <circle cx="920" cy="60" r="0.9" />
                        <circle cx="1080" cy="280" r="1.1" className="sv-twinkle-1" />
                        <circle cx="1240" cy="140" r="0.8" className="sv-twinkle-2" />
                        <circle cx="1380" cy="320" r="1" />
                        <circle cx="60" cy="450" r="0.9" className="sv-twinkle-3" />
                        <circle cx="200" cy="600" r="1.2" className="sv-twinkle-1" />
                        <circle cx="340" cy="780" r="0.7" />
                        <circle cx="500" cy="520" r="1" />
                        <circle cx="680" cy="700" r="0.8" className="sv-twinkle-2" />
                        <circle cx="850" cy="500" r="1.3" className="sv-twinkle-3" />
                        <circle cx="1000" cy="640" r="0.9" />
                        <circle cx="1180" cy="480" r="1" className="sv-twinkle-1" />
                        <circle cx="1320" cy="720" r="0.8" className="sv-twinkle-2" />
                        <circle cx="180" cy="380" r="0.6" />
                        <circle cx="540" cy="260" r="0.6" className="sv-twinkle-3" />
                        <circle cx="900" cy="380" r="0.7" />
                        <circle cx="1100" cy="180" r="0.6" className="sv-twinkle-1" />
                    </g>
                </svg>

                {/* HEADER */}
                <header className="sv-header">
                    <div className="sv-nav">
                        <a className="sv-brand" href="/">
                            <BrandMark />
                            <span className="sv-brand-name">Sélène <em>Voyance</em></span>
                        </a>
                        <nav className="sv-nav-links">
                            <a className="sv-nav-link" href="/tirage">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                                    <rect x="6" y="3" width="9" height="14" rx="1.5" transform="rotate(-8 10 10)" />
                                    <rect x="9" y="6" width="9" height="14" rx="1.5" transform="rotate(8 13 13)" />
                                </svg>
                                Cartes
                            </a>
                            <a className="sv-nav-link" href="/pendule-gratuit">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                                    <line x1="12" y1="2" x2="12" y2="14" />
                                    <path d="M9 14 L12 21 L15 14 Z" fill="currentColor" fillOpacity="0.2" />
                                    <circle cx="12" cy="2" r="1" fill="currentColor" />
                                </svg>
                                Pendule
                            </a>
                            <a className="sv-nav-link" href="/horoscope">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M12 3 v18 M3 12 h18 M5.6 5.6 l12.8 12.8 M5.6 18.4 l12.8 -12.8" />
                                </svg>
                                Horoscope
                            </a>
                            <a className="sv-nav-link" href="/message-ange">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                                    <circle cx="12" cy="7" r="3" />
                                    <path d="M5 20 c0-4 3-7 7-7 s7 3 7 7" />
                                    <path d="M5 13 c-2 1-3 3-3 5 M19 13 c2 1 3 3 3 5" strokeDasharray="2 2" />
                                </svg>
                                Anges
                            </a>
                            <a className="sv-nav-link" href="/blog">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                                    <path d="M5 3 h11 l4 4 v14 H5 z" />
                                    <path d="M16 3 v4 h4" />
                                    <path d="M8 12 h8 M8 16 h6" />
                                </svg>
                                Blog
                            </a>
                        </nav>
                        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                            <MoonPhasePill />
                            <a className="sv-nav-cta" href="/consultation">
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M11 2c-3 0-5 2-5 5 0 1 0 2 1 3 -2 0-4 1-4 4h12c0-3-2-4-4-4 1-1 1-2 1-3 0-3-2-5-1-5z" />
                                </svg>
                                Consultation
                            </a>
                        </div>
                    </div>
                </header>

                <main>{children}</main>

                {/* FOOTER */}
                <footer className="sv-footer">
                    <div className="sv-container">
                        <div className="sv-foot-grid">
                            <div>
                                <div className="sv-brand" style={{ marginBottom: 16 }}>
                                    <BrandMark />
                                    <span className="sv-brand-name">Sélène <em>Voyance</em></span>
                                </div>
                                <p>Votre guide spirituel en ligne. Quatre outils gratuits + des consultations personnalisées par pendule, livrées sous 30 minutes.</p>
                            </div>
                            <div>
                                <h5>Outils gratuits</h5>
                                <ul>
                                    <li><a href="/tirage">Tirage de cartes</a></li>
                                    <li><a href="/pendule-gratuit">Pendule Oui/Non</a></li>
                                    <li><a href="/horoscope">Horoscope du jour</a></li>
                                    <li><a href="/message-ange">Message angélique</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Consultation</h5>
                                <ul>
                                    <li><a href="/consultation?plan=q1">Question unique · 2€</a></li>
                                    <li><a href="/consultation?plan=q3">Tirage approfondi · 5€</a></li>
                                    <li><a href="/consultation?plan=q5">Tirage complet · 7€</a></li>
                                    <li><a href="/faq">FAQ</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Sélène</h5>
                                <ul>
                                    <li><a href="/qui-suis-je">Qui suis-je ?</a></li>
                                    <li><a href="/blog">Le blog</a></li>
                                    <li><a href="/boutique">Boutique</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                    <li><a href="/mentions-legales">Mentions légales</a></li>
                                    <li><a href="/cgv">CGV</a></li>
                                    <li><a href="/confidentialite">Confidentialité</a></li>
                                </ul>
                            </div>
                        </div>
                        <p className="sv-foot-disclaimer">
                            Nos outils gratuits et notre consultation personnalisée sont à usage de divertissement et de réflexion.
                            Ils ne remplacent pas un avis médical, juridique ou professionnel.
                        </p>
                        <div className="sv-foot-bottom">
                            <span>© 2026 Sélène Voyance. Tous droits réservés.</span>
                            <span>Fait avec amour à Lyon ✦</span>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
