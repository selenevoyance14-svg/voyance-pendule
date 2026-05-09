"use client";

import { useEffect, useState } from "react";

const messages = [
    "L'univers vous écoute aujourd'hui",
    "Une rencontre va éclairer votre journée",
    "Faites confiance à votre intuition profonde",
    "Les énergies sont propices aux nouveaux départs",
    "Une réponse va se manifester d'elle-même",
    "Lâchez prise, l'univers s'occupe du reste",
    "Votre lumière intérieure brille particulièrement fort",
    "Un message important vous attend",
    "C'est un jour pour célébrer vos victoires",
    "Vos guides veillent sur chacun de vos pas",
    "L'amour cherche à entrer dans votre vie",
    "Une porte se ferme, une autre s'ouvre",
    "Aujourd'hui, écoutez les signes de l'univers",
    "Votre énergie attire l'abondance",
    "Un cycle s'achève pour laisser place à un nouveau",
    "La synchronicité est avec vous",
    "Vos rêves sont plus proches que vous ne pensez",
    "Une vérité va vous être révélée",
    "Les étoiles s'alignent en votre faveur",
    "C'est le moment de faire confiance à votre voie",
    "Votre cœur connaît déjà la réponse",
    "L'univers vous prépare une belle surprise",
    "Aujourd'hui, soyez doux avec vous-même",
    "Une bénédiction vous attend dans l'inattendu",
    "Vos ancêtres vous protègent et vous guident",
    "Une intuition forte va vous orienter",
    "Le chemin se dévoile à mesure que vous avancez",
    "Votre lumière inspire ceux qui vous entourent",
    "Un signe va vous confirmer votre direction",
    "Aujourd'hui, l'amour-propre est sacré",
    "Une protection invisible vous accompagne",
];

const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

export default function EnergieDuJour() {
    const [data, setData] = useState<{ message: string; date: string } | null>(null);

    useEffect(() => {
        const now = new Date();
        const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000);
        const message = messages[dayOfYear % messages.length];
        const date = `${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]}`;
        setData({ message, date });
    }, []);

    if (!data) {
        return <div className="h-24" aria-hidden="true" />;
    }

    return (
        <div className="mx-auto max-w-2xl mt-12 mb-2 animate-fadeIn">
            <div className="relative bg-gradient-to-r from-mystic-950/60 via-mystic-900/40 to-mystic-950/60 border border-gold-500/30 rounded-2xl px-6 py-5 backdrop-blur-md">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-600 text-mystic-950 text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full shadow-lg">
                    ✨ Énergie du jour
                </div>
                <p className="text-mystic-300 text-xs uppercase tracking-widest text-center mb-2 mt-1">
                    {data.date}
                </p>
                <p className="font-heading text-lg sm:text-xl text-white text-center italic leading-relaxed">
                    « {data.message} »
                </p>
            </div>
        </div>
    );
}
