"use client";

import { useEffect, useState } from "react";

type Phase = {
    label: string;
    pct: number;
    sign: string;
    energy: string;
    quote: string;
    dateStr: string;
};

const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const months = [
    "janvier", "février", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

const quotes = [
    "Lâchez prise. L'univers s'occupe du reste.",
    "Aujourd'hui, écoutez ce que votre intuition vous murmure.",
    "Une rencontre va éclairer votre journée.",
    "Faites confiance à votre voix intérieure.",
    "Une porte se ferme, une autre s'ouvre.",
    "Votre lumière inspire ceux qui vous entourent.",
    "Aujourd'hui, soyez doux avec vous-même.",
];

function getMoonInfo(d: Date) {
    const ref = new Date(2000, 0, 6).getTime();
    const diff = (d.getTime() - ref) / (1000 * 60 * 60 * 24);
    const lunar = 29.530588853;
    const phase = (diff % lunar) / lunar;
    const pct = Math.round(Math.abs(Math.cos(phase * 2 * Math.PI) - 1) * 50);
    let label: string;
    let energy: string;
    if (phase < 0.03 || phase > 0.97) { label = "Nouvelle lune"; energy = "Recommencement · Intentions"; }
    else if (phase < 0.22) { label = "Lune croissante"; energy = "Élan · Construction"; }
    else if (phase < 0.28) { label = "Premier quartier"; energy = "Action · Décision"; }
    else if (phase < 0.47) { label = "Gibbeuse croissante"; energy = "Foi · Élan"; }
    else if (phase < 0.53) { label = "Pleine lune"; energy = "Révélation · Apogée"; }
    else if (phase < 0.72) { label = "Gibbeuse décroissante"; energy = "Gratitude · Partage"; }
    else if (phase < 0.78) { label = "Dernier quartier"; energy = "Lâcher-prise · Tri"; }
    else { label = "Lune décroissante"; energy = "Repos · Intériorité"; }
    return { label, pct, energy, phase };
}

const zodiacByMonth = [
    "Capricorne", "Verseau", "Poissons", "Bélier", "Taureau", "Gémeaux",
    "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire",
];

export function MoonPhasePill() {
    const [label, setLabel] = useState("Lune Croissante");
    useEffect(() => {
        setLabel(getMoonInfo(new Date()).label);
    }, []);

    return (
        <span className="sv-moon-pill">
            <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" fill="#1d1742" stroke="#9d92c2" strokeWidth="0.5" />
                <path d="M12 3 a9 9 0 0 1 0 18 a6 9 0 0 0 0 -18" fill="#f3d27a" />
            </svg>
            <span>{label}</span>
        </span>
    );
}

export function DailyEnergyCard() {
    const [info, setInfo] = useState<Phase | null>(null);
    useEffect(() => {
        const now = new Date();
        const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000);
        const moon = getMoonInfo(now);
        const dateStr = `${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]}`;
        const sign = zodiacByMonth[now.getMonth()];
        const quote = quotes[dayOfYear % quotes.length];
        setInfo({ label: moon.label, pct: moon.pct, sign, energy: moon.energy, quote, dateStr });
    }, []);

    if (!info) return <div className="sv-daily-energy" aria-hidden="true" style={{ opacity: 0 }} />;

    return (
        <div className="sv-daily-energy">
            <svg className="sv-moon-vis" viewBox="0 0 80 80">
                <defs>
                    <radialGradient id="dailyMoon" cx="35%" cy="35%">
                        <stop offset="0%" stopColor="#fbe9b6" />
                        <stop offset="100%" stopColor="#b8893d" />
                    </radialGradient>
                </defs>
                <circle cx="40" cy="40" r="28" fill="#1d1742" />
                <path d="M40 12 a28 28 0 0 1 0 56 a18 28 0 0 0 0 -56" fill="url(#dailyMoon)" />
                <circle cx="48" cy="28" r="2" fill="#fbe9b6" opacity="0.5" />
                <circle cx="52" cy="46" r="1.5" fill="#fbe9b6" opacity="0.4" />
            </svg>
            <div>
                <div className="sv-label">Énergie du jour — {info.dateStr}</div>
                <div className="sv-quote">« {info.quote} »</div>
            </div>
            <div className="sv-meta">
                <strong>{info.label}</strong>
                en {info.sign} ✦ {info.pct}%<br />
                Énergie : {info.energy}
            </div>
        </div>
    );
}
