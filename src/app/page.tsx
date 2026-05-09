import { DailyEnergyCard } from "./components/MoonPhase";

const zodiacSigns: { name: string; dates: string; sigil: React.ReactNode }[] = [
    {
        name: "Bélier", dates: "21 mars · 19 avril",
        sigil: <path d="M18 18 q-2 12 6 18 M42 18 q2 12 -6 18 M18 18 q12 -8 24 0" />,
    },
    {
        name: "Taureau", dates: "20 avril · 20 mai",
        sigil: <><circle cx="30" cy="36" r="10" /><path d="M14 18 q8 8 16 8 q8 0 16 -8" /></>,
    },
    {
        name: "Gémeaux", dates: "21 mai · 20 juin",
        sigil: <path d="M16 16 v28 M28 14 v32 M32 14 v32 M44 16 v28 M16 16 q14 -4 28 0 M16 44 q14 4 28 0" />,
    },
    {
        name: "Cancer", dates: "21 juin · 22 juillet",
        sigil: <><circle cx="20" cy="22" r="5" /><circle cx="40" cy="38" r="5" /><path d="M14 24 q-2 -16 18 -10 M46 36 q2 16 -18 10" /></>,
    },
    {
        name: "Lion", dates: "23 juillet · 22 août",
        sigil: <><circle cx="22" cy="36" r="6" /><path d="M22 30 q-2 -12 8 -16 q12 -2 14 10 q0 8 -8 14" /></>,
    },
    {
        name: "Vierge", dates: "23 août · 22 sept.",
        sigil: <path d="M14 16 v28 M14 16 q4 8 6 18 M20 16 q4 8 6 18 M26 16 q4 8 6 18 M32 16 v28 M32 44 q8 -2 10 -10 q2 -8 -4 -10 q-4 0 -6 4" />,
    },
    {
        name: "Balance", dates: "23 sept. · 22 oct.",
        sigil: <><path d="M14 38 h32 M14 44 h32" /><path d="M22 38 q-2 -12 8 -12 q10 0 8 12" /></>,
    },
    {
        name: "Scorpion", dates: "23 oct. · 21 nov.",
        sigil: <><path d="M12 18 v22 M12 18 q4 6 6 18 M18 18 q4 6 6 18 M24 18 q4 6 6 18 M30 18 v26 q0 4 6 4 q8 0 8 -8 v-4" /><path d="M44 30 l4 -4 M44 30 l4 4" /></>,
    },
    {
        name: "Sagittaire", dates: "22 nov. · 21 déc.",
        sigil: <><path d="M14 46 L46 14" /><path d="M46 14 L36 14 M46 14 L46 24" /><path d="M22 38 L34 26" /></>,
    },
    {
        name: "Capricorne", dates: "22 déc. · 19 janv.",
        sigil: <><path d="M14 18 q4 8 6 18 M20 18 q4 8 6 18 M26 18 q4 8 6 18 M32 36 q4 -2 6 0 q2 4 -2 6 q-4 -2 -2 -6 z" /><circle cx="42" cy="42" r="4" /></>,
    },
    {
        name: "Verseau", dates: "20 janv. · 18 fév.",
        sigil: <><path d="M12 26 q4 -6 8 0 q4 6 8 0 q4 -6 8 0 q4 6 8 0" /><path d="M12 36 q4 -6 8 0 q4 6 8 0 q4 -6 8 0 q4 6 8 0" /></>,
    },
    {
        name: "Poissons", dates: "19 fév. · 20 mars",
        sigil: <><path d="M14 14 q-4 16 0 32 M46 14 q4 16 0 32" /><path d="M14 30 h32" /></>,
    },
];

const Check = () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 8 L6 12 L13 4" />
    </svg>
);

export default function Home() {
    return (
        <>
            {/* HERO */}
            <section className="sv-hero">
                <div className="sv-container">
                    <div className="sv-hero-grid">
                        <div>
                            <span className="sv-eyebrow">Voyance &amp; guidance spirituelle</span>
                            <h1>Révélez<br /><span className="sv-accent">votre Destinée</span></h1>
                            <p className="sv-lede">
                                Tirage de cartes, pendule, horoscope et messages angéliques — quatre outils gratuits
                                pour écouter ce que l&apos;univers a à vous dire. Et au-delà, recevez votre tirage personnalisé,
                                écrit par Sélène, livré sous 30 minutes.
                            </p>
                            <div className="sv-hero-actions">
                                <a className="sv-btn-primary" href="/consultation">
                                    Recevoir mon tirage
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                                    </svg>
                                </a>
                                <a className="sv-btn-ghost" href="/pendule-gratuit">Essayer le pendule</a>
                            </div>
                        </div>

                        {/* Pendulum scene */}
                        <div className="sv-hero-scene">
                            <svg className="sv-scene" viewBox="0 0 400 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <radialGradient id="auraGrad" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" stopColor="#c4a5ff" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="#c4a5ff" stopOpacity="0" />
                                    </radialGradient>
                                    <linearGradient id="crystalGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#f3d27a" />
                                        <stop offset="50%" stopColor="#e9b949" />
                                        <stop offset="100%" stopColor="#8a6020" />
                                    </linearGradient>
                                    <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#c4a5ff" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#c4a5ff" stopOpacity="0.05" />
                                    </linearGradient>
                                </defs>
                                <circle cx="200" cy="280" r="160" fill="url(#auraGrad)" />
                                <g className="sv-float">
                                    <circle cx="200" cy="280" r="130" stroke="url(#ringGrad)" strokeWidth="0.8" fill="none" strokeDasharray="2 6" />
                                    <circle cx="200" cy="280" r="100" stroke="url(#ringGrad)" strokeWidth="0.6" fill="none" />
                                    <circle cx="200" cy="280" r="70" stroke="rgba(233,185,73,0.3)" strokeWidth="0.5" fill="none" />
                                    <g stroke="rgba(233,185,73,0.6)" strokeWidth="1">
                                        <line x1="200" y1="150" x2="200" y2="160" />
                                        <line x1="265" y1="170" x2="261" y2="178" />
                                        <line x1="313" y1="215" x2="305" y2="220" />
                                        <line x1="330" y1="280" x2="320" y2="280" />
                                        <line x1="313" y1="345" x2="305" y2="340" />
                                        <line x1="265" y1="390" x2="261" y2="382" />
                                        <line x1="200" y1="410" x2="200" y2="400" />
                                        <line x1="135" y1="390" x2="139" y2="382" />
                                        <line x1="87" y1="345" x2="95" y2="340" />
                                        <line x1="70" y1="280" x2="80" y2="280" />
                                        <line x1="87" y1="215" x2="95" y2="220" />
                                        <line x1="135" y1="170" x2="139" y2="178" />
                                    </g>
                                </g>
                                <circle cx="200" cy="40" r="3" fill="#e9b949" />
                                <g className="sv-pendulum-arm">
                                    <line x1="200" y1="40" x2="200" y2="220" stroke="#9d92c2" strokeWidth="0.8" strokeDasharray="1 3" />
                                    <g transform="translate(200 232)">
                                        <path d="M0 -16 L12 0 L0 32 L-12 0 Z" fill="url(#crystalGrad)" opacity="0.95" />
                                        <path d="M0 -16 L12 0 L0 0 Z" fill="#fff" fillOpacity="0.25" />
                                        <path d="M0 -16 L0 32" stroke="#f3d27a" strokeWidth="0.5" opacity="0.8" />
                                        <circle cx="0" cy="-20" r="2" fill="#f3d27a" />
                                    </g>
                                </g>
                                <g fill="#f3d27a">
                                    <circle cx="120" cy="200" r="1.5" className="sv-twinkle-1" />
                                    <circle cx="290" cy="180" r="1" className="sv-twinkle-2" />
                                    <circle cx="320" cy="320" r="1.2" className="sv-twinkle-3" />
                                    <circle cx="80" cy="320" r="1" className="sv-twinkle-1" />
                                    <circle cx="200" cy="100" r="0.8" className="sv-twinkle-3" />
                                </g>
                                <g fill="#c4a5ff" opacity="0.8">
                                    <path d="M310 130 l1 4 l4 1 l-4 1 l-1 4 l-1 -4 l-4 -1 l4 -1 z" />
                                    <path d="M90 250 l0.7 3 l3 0.7 l-3 0.7 l-0.7 3 l-0.7 -3 l-3 -0.7 l3 -0.7 z" />
                                    <path d="M340 260 l0.5 2 l2 0.5 l-2 0.5 l-0.5 2 l-0.5 -2 l-2 -0.5 l2 -0.5 z" />
                                </g>
                            </svg>
                        </div>
                    </div>

                    <DailyEnergyCard />
                </div>
            </section>

            {/* TOOLS */}
            <section className="sv-section" id="tools">
                <div className="sv-container">
                    <div className="sv-section-head">
                        <span className="sv-eyebrow">Sans inscription, sans paiement</span>
                        <h2>Quatre outils <em>gratuits</em></h2>
                        <p className="sv-lede">Pour vos questions du quotidien, laissez-vous guider par les outils que Sélène a affinés au fil des années.</p>
                    </div>

                    <div className="sv-tools-grid">
                        {/* Tirage cartes */}
                        <a className="sv-tool-card" href="/tirage">
                            <svg className="sv-illu" viewBox="0 0 100 100" fill="none">
                                <defs>
                                    <linearGradient id="cardA" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#2a1f60" />
                                        <stop offset="100%" stopColor="#1a1340" />
                                    </linearGradient>
                                </defs>
                                <rect x="22" y="22" width="36" height="56" rx="3" fill="url(#cardA)" stroke="#e9b949" strokeWidth="0.8" transform="rotate(-12 40 50)" />
                                <rect x="42" y="20" width="38" height="58" rx="3" fill="#1a1340" stroke="#e9b949" strokeWidth="1" transform="rotate(8 60 50)" />
                                <g transform="rotate(8 60 50)">
                                    <circle cx="61" cy="40" r="6" fill="none" stroke="#e9b949" strokeWidth="0.8" />
                                    <path d="M55 50 L61 38 L67 50 Z" fill="none" stroke="#e9b949" strokeWidth="0.8" />
                                    <path d="M55 60 H67" stroke="#e9b949" strokeWidth="0.8" />
                                    <circle cx="61" cy="68" r="2" fill="#e9b949" />
                                </g>
                                <path d="M88 30 l1 3 l3 1 l-3 1 l-1 3 l-1 -3 l-3 -1 l3 -1 z" fill="#c4a5ff" />
                                <path d="M14 60 l0.7 2 l2 0.7 l-2 0.7 l-0.7 2 l-0.7 -2 l-2 -0.7 l2 -0.7 z" fill="#c4a5ff" />
                            </svg>
                            <h3>Tirage de Cartes</h3>
                            <p>Tirez 1, 3 ou 5 cartes et découvrez les messages que l&apos;univers vous envoie.</p>
                            <span className="sv-badge">Gratuit</span>
                        </a>

                        {/* Pendule */}
                        <a className="sv-tool-card" href="/pendule-gratuit">
                            <svg className="sv-illu" viewBox="0 0 100 100" fill="none">
                                <defs>
                                    <linearGradient id="penC" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#f3d27a" />
                                        <stop offset="100%" stopColor="#8a6020" />
                                    </linearGradient>
                                </defs>
                                <circle cx="50" cy="14" r="2.5" fill="#e9b949" />
                                <g className="sv-pendulum-arm" style={{ transformOrigin: "50% 12%" }}>
                                    <line x1="50" y1="14" x2="50" y2="58" stroke="#9d92c2" strokeWidth="0.8" strokeDasharray="1 2" />
                                    <g transform="translate(50 66)">
                                        <path d="M0 -8 L7 0 L0 22 L-7 0 Z" fill="url(#penC)" />
                                        <path d="M0 -8 L7 0 L0 0 Z" fill="#fff" fillOpacity="0.3" />
                                        <path d="M0 -8 L0 22" stroke="#f3d27a" strokeWidth="0.4" opacity="0.7" />
                                    </g>
                                </g>
                                <path d="M30 60 q20 -10 40 0" stroke="#c4a5ff" strokeWidth="0.5" strokeDasharray="1 3" fill="none" opacity="0.6" />
                            </svg>
                            <h3>Pendule Oui/Non</h3>
                            <p>Posez votre question. Le pendule oscille et vous répond en quelques secondes.</p>
                            <span className="sv-badge">Gratuit</span>
                        </a>

                        {/* Horoscope */}
                        <a className="sv-tool-card" href="/horoscope">
                            <svg className="sv-illu" viewBox="0 0 100 100" fill="none">
                                <circle cx="50" cy="50" r="38" stroke="#e9b949" strokeWidth="0.6" fill="none" />
                                <circle cx="50" cy="50" r="30" stroke="#c4a5ff" strokeWidth="0.4" fill="none" />
                                <circle cx="50" cy="50" r="20" stroke="#e9b949" strokeWidth="0.4" fill="none" strokeDasharray="1 2" />
                                <g stroke="#e9b949" strokeWidth="0.6">
                                    <line x1="50" y1="12" x2="50" y2="18" />
                                    <line x1="69" y1="17" x2="66" y2="22" />
                                    <line x1="83" y1="31" x2="78" y2="34" />
                                    <line x1="88" y1="50" x2="82" y2="50" />
                                    <line x1="83" y1="69" x2="78" y2="66" />
                                    <line x1="69" y1="83" x2="66" y2="78" />
                                    <line x1="50" y1="88" x2="50" y2="82" />
                                    <line x1="31" y1="83" x2="34" y2="78" />
                                    <line x1="17" y1="69" x2="22" y2="66" />
                                    <line x1="12" y1="50" x2="18" y2="50" />
                                    <line x1="17" y1="31" x2="22" y2="34" />
                                    <line x1="31" y1="17" x2="34" y2="22" />
                                </g>
                                <circle cx="50" cy="50" r="6" fill="#e9b949" />
                                <g stroke="#e9b949" strokeWidth="0.8">
                                    <line x1="50" y1="42" x2="50" y2="40" />
                                    <line x1="58" y1="50" x2="60" y2="50" />
                                    <line x1="50" y1="58" x2="50" y2="60" />
                                    <line x1="42" y1="50" x2="40" y2="50" />
                                </g>
                            </svg>
                            <h3>Horoscope du Jour</h3>
                            <p>Votre guidance quotidienne, signe par signe — concise, juste, sans charabia.</p>
                            <span className="sv-badge">Gratuit</span>
                        </a>

                        {/* Anges */}
                        <a className="sv-tool-card" href="/message-ange">
                            <svg className="sv-illu" viewBox="0 0 100 100" fill="none">
                                <defs>
                                    <radialGradient id="halo" cx="50%" cy="50%">
                                        <stop offset="0%" stopColor="#f3d27a" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#f3d27a" stopOpacity="0" />
                                    </radialGradient>
                                </defs>
                                <circle cx="50" cy="50" r="40" fill="url(#halo)" />
                                <path d="M50 50 c-8 -10 -22 -12 -32 -6 c8 4 14 12 14 20 c4 -6 12 -10 18 -14 z" fill="#c4a5ff" opacity="0.85" />
                                <path d="M50 50 c8 -10 22 -12 32 -6 c-8 4 -14 12 -14 20 c-4 -6 -12 -10 -18 -14 z" fill="#c4a5ff" opacity="0.85" />
                                <g stroke="#1a1340" strokeWidth="0.4" fill="none" opacity="0.5">
                                    <path d="M30 50 q5 -2 10 -4" />
                                    <path d="M70 50 q-5 -2 -10 -4" />
                                </g>
                                <circle cx="50" cy="48" r="4" fill="#fbe9b6" />
                                <circle cx="50" cy="48" r="8" fill="none" stroke="#e9b949" strokeWidth="0.4" opacity="0.6" />
                                <ellipse cx="50" cy="34" rx="9" ry="2.5" fill="none" stroke="#f3d27a" strokeWidth="1" />
                            </svg>
                            <h3>Message Angélique</h3>
                            <p>Recevez un message personnalisé de votre ange gardien pour éclairer votre journée.</p>
                            <span className="sv-badge">Gratuit</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* SÉLÈNE PERSONA */}
            <section className="sv-selene">
                <div className="sv-container">
                    <div className="sv-selene-grid">
                        <div className="sv-selene-portrait">
                            <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
                                <defs>
                                    <linearGradient id="portraitBg" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#2a1f60" />
                                        <stop offset="100%" stopColor="#0a0820" />
                                    </linearGradient>
                                    <radialGradient id="halo2" cx="50%" cy="35%" r="35%">
                                        <stop offset="0%" stopColor="#f3d27a" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="#f3d27a" stopOpacity="0" />
                                    </radialGradient>
                                    <linearGradient id="hairG" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#1a1030" />
                                        <stop offset="100%" stopColor="#080418" />
                                    </linearGradient>
                                    <linearGradient id="skinG" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#f0d4b8" />
                                        <stop offset="100%" stopColor="#c79a78" />
                                    </linearGradient>
                                    <linearGradient id="robeG" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#5d3fb0" />
                                        <stop offset="100%" stopColor="#1a1340" />
                                    </linearGradient>
                                </defs>
                                <rect width="400" height="500" fill="url(#portraitBg)" />
                                <g fill="#f3d27a" opacity="0.7">
                                    <circle cx="60" cy="80" r="1" />
                                    <circle cx="320" cy="60" r="1.2" />
                                    <circle cx="350" cy="180" r="0.8" />
                                    <circle cx="40" cy="220" r="1" />
                                    <circle cx="370" cy="320" r="0.9" />
                                    <circle cx="30" cy="400" r="0.7" />
                                </g>
                                <path d="M340 100 a40 40 0 0 1 0 80 a26 40 0 0 0 0 -80" fill="#e9b949" opacity="0.25" />
                                <circle cx="340" cy="140" r="40" fill="none" stroke="#e9b949" strokeWidth="0.5" opacity="0.4" />
                                <circle cx="200" cy="180" r="100" fill="url(#halo2)" />
                                <path d="M80 500 L120 360 Q200 320 280 360 L320 500 Z" fill="url(#robeG)" />
                                <path d="M120 360 Q200 380 280 360 L290 410 Q200 430 110 410 Z" fill="#e9b949" opacity="0.15" />
                                <g stroke="#e9b949" strokeWidth="0.6" fill="none" opacity="0.6">
                                    <path d="M150 380 q50 10 100 0" />
                                    <path d="M155 410 q45 8 90 0" />
                                </g>
                                <path d="M180 290 L180 340 Q200 350 220 340 L220 290 Z" fill="url(#skinG)" />
                                <ellipse cx="200" cy="220" rx="62" ry="78" fill="url(#skinG)" />
                                <path d="M138 220 Q120 140 200 110 Q280 140 262 220 Q260 270 250 290 L260 340 Q200 320 140 340 L150 290 Q140 270 138 220 Z" fill="url(#hairG)" />
                                <path d="M150 180 Q160 240 150 290 L140 280 Q132 220 150 180 Z" fill="url(#hairG)" />
                                <path d="M250 180 Q240 240 250 290 L260 280 Q268 220 250 180 Z" fill="url(#hairG)" />
                                <path d="M148 180 Q165 145 200 140 Q235 145 252 180 Q260 200 252 220 Q200 200 148 220 Q140 200 148 180 Z" fill="url(#hairG)" />
                                <path d="M170 215 q8 -5 18 0" stroke="#1a0f3a" strokeWidth="2" fill="none" strokeLinecap="round" />
                                <path d="M212 215 q8 -5 18 0" stroke="#1a0f3a" strokeWidth="2" fill="none" strokeLinecap="round" />
                                <path d="M170 200 q9 -2 18 0" stroke="#1a0f3a" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
                                <path d="M212 200 q9 -2 18 0" stroke="#1a0f3a" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
                                <path d="M198 230 q-2 12 0 22 q4 2 8 0" stroke="#a87e5e" strokeWidth="0.8" fill="none" strokeLinecap="round" />
                                <path d="M188 270 q12 4 24 0" stroke="#a85a6e" strokeWidth="2" fill="none" strokeLinecap="round" />
                                <path d="M188 273 q12 6 24 0" stroke="#7a3a4e" strokeWidth="0.8" fill="none" opacity="0.5" />
                                <circle cx="200" cy="195" r="3" fill="#e9b949" />
                                <circle cx="200" cy="195" r="6" fill="none" stroke="#e9b949" strokeWidth="0.4" opacity="0.5" />
                                <circle cx="138" cy="240" r="2" fill="#f3d27a" />
                                <circle cx="262" cy="240" r="2" fill="#f3d27a" />
                                <line x1="200" y1="340" x2="200" y2="380" stroke="#f3d27a" strokeWidth="0.6" />
                                <path d="M200 380 L208 388 L200 408 L192 388 Z" fill="#e9b949" />
                            </svg>
                            <div className="sv-frame" />
                        </div>

                        <div className="sv-selene-content">
                            <span className="sv-eyebrow">À l&apos;origine du site</span>
                            <h2>Sélène, votre <em>guide</em> spirituelle</h2>
                            <p>Passionnée de voyance et de radiesthésie depuis plus de quinze ans, Sélène a fondé voyance-pendule.fr pour offrir une guidance <em>accessible</em>, sans charabia, sans pression. Tarot, pendule, anges gardiens, cycles lunaires — autant d&apos;outils qui éclairent, sans jamais figer l&apos;avenir.</p>
                            <p>Chaque tirage est <em>composé pour vous</em>, à partir de votre prénom, votre date de naissance et la question que vous avez posée. Pas de réponses recyclées : votre lecture est unique.</p>

                            <div className="sv-selene-stats">
                                <div className="sv-stat">
                                    <div className="sv-num">15 ans</div>
                                    <div className="sv-lbl">de pratique</div>
                                </div>
                                <div className="sv-stat">
                                    <div className="sv-num">30 min</div>
                                    <div className="sv-lbl">délai annoncé</div>
                                </div>
                                <div className="sv-stat">
                                    <div className="sv-num">5,90€</div>
                                    <div className="sv-lbl">à partir de</div>
                                </div>
                            </div>

                            <div className="sv-signature">
                                <svg viewBox="0 0 200 60" fill="none">
                                    <path d="M10 40 Q20 10 35 30 Q45 50 55 25 Q65 10 70 35 Q75 50 85 25 M90 35 Q100 15 110 35 M115 30 L115 45 M125 25 Q140 5 150 30 Q155 45 170 20 Q180 10 185 35"
                                        stroke="#f3d27a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                                    <path d="M55 45 Q90 55 145 50" stroke="#f3d27a" strokeWidth="0.6" fill="none" opacity="0.5" />
                                </svg>
                                <div className="sv-who">
                                    <strong>Sélène</strong>
                                    Voyante &amp; radiesthésiste
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONSULTATION */}
            <section id="consultation" className="sv-consultation">
                <div className="sv-container">
                    <div className="sv-section-head">
                        <span className="sv-eyebrow">Consultation personnalisée par email</span>
                        <h2>Votre tirage <em>écrit pour vous</em></h2>
                        <p className="sv-lede">Au-delà des outils gratuits, recevez une lecture profonde, personnelle, livrée par email sous 30 minutes. Choisissez la formule qui vous correspond.</p>
                    </div>

                    <div className="sv-pricing">
                        {/* Q1 */}
                        <a className="sv-plan" href="/consultation?plan=q1" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                            <svg className="sv-tier-icon" viewBox="0 0 56 56" fill="none">
                                <circle cx="28" cy="28" r="22" stroke="#c4a5ff" strokeWidth="1" fill="none" />
                                <path d="M28 14 L28 42 M14 28 L42 28" stroke="#c4a5ff" strokeWidth="0.8" />
                                <circle cx="28" cy="28" r="4" fill="#c4a5ff" />
                            </svg>
                            <div className="sv-plan-name">Question Unique</div>
                            <div className="sv-plan-tag">Une réponse claire et juste</div>
                            <div className="sv-plan-price">
                                <span className="sv-amt">5,90</span><span className="sv-cur">€</span>
                                <span className="sv-unit">/tirage</span>
                            </div>
                            <ul>
                                <li><Check /> 1 question précise</li>
                                <li><Check /> Réponse écrite ~250 mots</li>
                                <li><Check /> Livraison sous 30 minutes</li>
                                <li><Check /> Confidentialité totale</li>
                            </ul>
                            <span className="sv-plan-cta">Choisir cette formule</span>
                        </a>

                        {/* Q3 — featured */}
                        <a className="sv-plan sv-featured" href="/consultation?plan=q3" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                            <span className="sv-plan-badge">★ Le plus choisi</span>
                            <svg className="sv-tier-icon" viewBox="0 0 56 56" fill="none">
                                <defs>
                                    <linearGradient id="tierG" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#f3d27a" />
                                        <stop offset="100%" stopColor="#b8893d" />
                                    </linearGradient>
                                </defs>
                                <circle cx="28" cy="28" r="22" stroke="url(#tierG)" strokeWidth="1.2" fill="none" />
                                <path d="M28 28 m-12 0 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0" stroke="url(#tierG)" strokeWidth="0.8" fill="none" />
                                <path d="M28 8 L31 22 L45 28 L31 34 L28 48 L25 34 L11 28 L25 22 Z" fill="url(#tierG)" opacity="0.9" />
                            </svg>
                            <div className="sv-plan-name">Tirage Approfondi</div>
                            <div className="sv-plan-tag">Trois questions, une vision d&apos;ensemble</div>
                            <div className="sv-plan-price">
                                <span className="sv-amt">11,90</span><span className="sv-cur">€</span>
                                <span className="sv-unit">/tirage</span>
                            </div>
                            <ul>
                                <li><Check /> 3 questions explorées</li>
                                <li><Check /> Réponse ~600 mots</li>
                                <li><Check /> Mise en lien des réponses</li>
                                <li><Check /> Carte du jour offerte</li>
                                <li><Check /> Livraison sous 30 minutes</li>
                            </ul>
                            <span className="sv-plan-cta">Choisir cette formule</span>
                        </a>

                        {/* Q5 */}
                        <a className="sv-plan" href="/consultation?plan=q5" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                            <svg className="sv-tier-icon" viewBox="0 0 56 56" fill="none">
                                <circle cx="28" cy="28" r="22" stroke="#f3d27a" strokeWidth="1" fill="none" />
                                <path d="M28 8 L33 22 L48 23 L36 33 L40 48 L28 39 L16 48 L20 33 L8 23 L23 22 Z"
                                    fill="none" stroke="#f3d27a" strokeWidth="1" />
                                <circle cx="28" cy="28" r="3" fill="#f3d27a" />
                            </svg>
                            <div className="sv-plan-name">Tirage Complet</div>
                            <div className="sv-plan-tag">Cinq questions + synthèse de votre cycle</div>
                            <div className="sv-plan-price">
                                <span className="sv-amt">19,90</span><span className="sv-cur">€</span>
                                <span className="sv-unit">/tirage</span>
                            </div>
                            <ul>
                                <li><Check /> 5 questions explorées</li>
                                <li><Check /> Synthèse globale détaillée</li>
                                <li><Check /> Réponse ~1 200 mots</li>
                                <li><Check /> Conseils sur 3 mois à venir</li>
                                <li><Check /> Question de relance offerte</li>
                            </ul>
                            <span className="sv-plan-cta">Choisir cette formule</span>
                        </a>
                    </div>

                    <div className="sv-guarantees">
                        <div className="sv-guarantee">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <path d="M12 2 L20 6 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V6 Z" />
                                <path d="M9 12 L11 14 L15 10" />
                            </svg>
                            Paiement sécurisé PayPal
                        </div>
                        <div className="sv-guarantee">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 7 V12 L15 14" />
                            </svg>
                            Livraison sous 30 minutes
                        </div>
                        <div className="sv-guarantee">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <rect x="5" y="11" width="14" height="10" rx="1" />
                                <path d="M8 11 V7 a4 4 0 0 1 8 0 V11" />
                            </svg>
                            100% confidentiel
                        </div>
                        <div className="sv-guarantee">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <path d="M12 3 L4 7 V12 C4 17 8 21 12 22 C16 21 20 17 20 12 V7 Z" />
                            </svg>
                            Satisfait ou remboursé
                        </div>
                    </div>

                    {/* How it works */}
                    <div className="sv-how">
                        <div className="sv-step">
                            <div className="sv-step-num">I</div>
                            <h4>Vous posez votre question</h4>
                            <p>Une, trois ou cinq selon la formule. En français simple, comme à une amie de confiance.</p>
                        </div>
                        <div className="sv-step">
                            <div className="sv-step-num">II</div>
                            <h4>Sélène compose votre tirage</h4>
                            <p>Votre prénom, votre date de naissance, vos questions précises — tout est pris en compte pour une lecture unique.</p>
                        </div>
                        <div className="sv-step">
                            <div className="sv-step-num">III</div>
                            <h4>Vous recevez votre tirage</h4>
                            <p>Par email sous 30 minutes. Une lecture écrite, personnelle, à relire autant que vous voulez.</p>
                        </div>
                    </div>

                    {/* Example */}
                    <div className="sv-example">
                        <div className="sv-example-text">
                            <span className="sv-eyebrow">Exemple de tirage reçu</span>
                            <h3>Ce que vous trouverez <em>dans votre email</em></h3>
                            <p>Pas de phrases creuses, pas de génériques. Sélène écrit en s&apos;adressant à vous, en reprenant votre question mot pour mot.</p>
                            <ul className="sv-example-list">
                                <li><Check /> Reprise précise de votre question</li>
                                <li><Check /> Lecture du pendule, mouvement par mouvement</li>
                                <li><Check /> Conseils concrets pour les jours qui viennent</li>
                                <li><Check /> Mention de la phase de lune en cours</li>
                            </ul>
                        </div>
                        <div className="sv-email-mock">
                            <div className="sv-email-head">
                                <div className="sv-dots"><div className="sv-dot" /><div className="sv-dot" /><div className="sv-dot" /></div>
                                <span className="sv-from">De Sélène · pour vous, ce soir</span>
                            </div>
                            <div className="sv-email-body">
                                <p className="sv-greet">Chère Camille,</p>
                                <p>Avant toute chose, merci pour votre confiance. J&apos;ai pris le temps de poser le pendule sur votre prénom, et la première chose qu&apos;il m&apos;a dite, c&apos;est que vous savez déjà beaucoup de choses — vous cherchez plus une confirmation qu&apos;une réponse.</p>
                                <div className="sv-qsep">✦ « Vais-je retrouver un travail qui me correspond ? » ✦</div>
                                <p>Le pendule a hésité quelques instants avant de tourner clairement dans le sens des aiguilles d&apos;une montre — un Oui, mais pas un Oui rapide. Il y a une étape intermédiaire : un poste qui n&apos;est pas le bon, mais qui vous ouvrira la porte du suivant. Avant la fin de l&apos;automne, je vois une rencontre…</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ZODIAC */}
            <section id="zodiac" className="sv-zodiac">
                <div className="sv-container">
                    <div className="sv-section-head">
                        <span className="sv-eyebrow">Votre signe astrologique</span>
                        <h2>Sous quelle <em>étoile</em> êtes-vous né ?</h2>
                        <p className="sv-lede">Cliquez sur votre signe pour découvrir votre horoscope du jour, votre élément, et votre carte de la semaine.</p>
                    </div>

                    <div className="sv-zodiac-wheel">
                        {zodiacSigns.map((z) => (
                            <a key={z.name} className="sv-zodiac-card" href="/horoscope">
                                <svg className="sv-sigil" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    {z.sigil}
                                </svg>
                                <span className="sv-name">{z.name}</span>
                                <span className="sv-dates">{z.dates}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ENGAGEMENTS */}
            <section className="sv-testimonials">
                <div className="sv-container">
                    <div className="sv-section-head">
                        <span className="sv-eyebrow">Notre approche</span>
                        <h2>Pourquoi <em>nous faire confiance</em></h2>
                        <p className="sv-lede">Voyance-pendule.fr a été lancé pour offrir une guidance accessible, claire et bienveillante. Voici les engagements qui nous tiennent à cœur.</p>
                    </div>

                    <div className="sv-testi-grid">
                        <div className="sv-testi">
                            <div className="sv-testi-head">
                                <div className="sv-avatar sv-a1">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                        <path d="M12 3 L4 7 V12 C4 17 8 21 12 22 C16 21 20 17 20 12 V7 Z" />
                                        <path d="M9 12 L11 14 L15 10" />
                                    </svg>
                                </div>
                                <div className="sv-testi-id">
                                    <div className="sv-name">Personnalisé</div>
                                    <div className="sv-meta">Pas un tirage standard</div>
                                </div>
                            </div>
                            <p className="sv-testi-quote">« Chaque tirage est composé à partir de <em>votre prénom, votre date de naissance et vos questions précises</em>. Aucun copier-coller, aucune réponse réutilisée. »</p>
                            <div className="sv-testi-foot">
                                <span className="sv-pill">Promesse n°1</span>
                            </div>
                        </div>

                        <div className="sv-testi">
                            <div className="sv-testi-head">
                                <div className="sv-avatar sv-a2">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                        <rect x="5" y="11" width="14" height="10" rx="1" />
                                        <path d="M8 11 V7 a4 4 0 0 1 8 0 V11" />
                                    </svg>
                                </div>
                                <div className="sv-testi-id">
                                    <div className="sv-name">Confidentiel</div>
                                    <div className="sv-meta">Vos questions, vos secrets</div>
                                </div>
                            </div>
                            <p className="sv-testi-quote">« Vos questions et votre email ne sont <em>jamais partagés</em> ni réutilisés à des fins marketing. Une fois le tirage envoyé, vos données sont effacées. »</p>
                            <div className="sv-testi-foot">
                                <span className="sv-pill">Promesse n°2</span>
                            </div>
                        </div>

                        <div className="sv-testi">
                            <div className="sv-testi-head">
                                <div className="sv-avatar sv-a3">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                        <circle cx="12" cy="12" r="9" />
                                        <path d="M12 7 V12 L15 14" />
                                    </svg>
                                </div>
                                <div className="sv-testi-id">
                                    <div className="sv-name">Sous 30 minutes</div>
                                    <div className="sv-meta">Pas de longue attente</div>
                                </div>
                            </div>
                            <p className="sv-testi-quote">« Votre tirage est livré <em>par email sous 30 minutes</em> après le paiement. Vous n&apos;attendez pas des jours pour avoir vos réponses. »</p>
                            <div className="sv-testi-foot">
                                <span className="sv-pill">Promesse n°3</span>
                            </div>
                        </div>
                    </div>

                    <div className="sv-trust-row">
                        <div><div className="sv-num">5,90€</div><div className="sv-lbl">à partir de</div></div>
                        <div><div className="sv-num">30 min</div><div className="sv-lbl">délai annoncé</div></div>
                        <div><div className="sv-num">100%</div><div className="sv-lbl">personnalisé</div></div>
                        <div><div className="sv-num">Satisfait</div><div className="sv-lbl">ou remboursé</div></div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="sv-final-cta">
                <div className="sv-container">
                    <svg className="sv-moon-big" viewBox="0 0 120 120">
                        <defs>
                            <radialGradient id="finalMoon" cx="35%" cy="35%">
                                <stop offset="0%" stopColor="#fbe9b6" />
                                <stop offset="100%" stopColor="#b8893d" />
                            </radialGradient>
                            <radialGradient id="moonHalo" cx="50%" cy="50%">
                                <stop offset="0%" stopColor="#f3d27a" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#f3d27a" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        <circle cx="60" cy="60" r="58" fill="url(#moonHalo)" />
                        <path d="M75 25 a40 40 0 0 1 0 70 a26 40 0 0 0 0 -70" fill="url(#finalMoon)" />
                        <circle cx="82" cy="48" r="2.5" fill="#b8893d" opacity="0.5" />
                        <circle cx="86" cy="68" r="2" fill="#b8893d" opacity="0.4" />
                        <circle cx="78" cy="78" r="1.5" fill="#b8893d" opacity="0.5" />
                    </svg>
                    <h2>Prête à entendre <em>ce que l&apos;univers</em> vous murmure ?</h2>
                    <p className="sv-lede">Commencez par un outil gratuit. Quand vous serez prête, Sélène sera là.</p>
                    <div className="sv-actions">
                        <a className="sv-btn-primary" href="/consultation">Recevoir mon tirage personnalisé</a>
                        <a className="sv-btn-ghost" href="/pendule-gratuit">Essayer le pendule gratuit</a>
                    </div>
                </div>
            </section>
        </>
    );
}
