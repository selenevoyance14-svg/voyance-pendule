// Galerie des pierres — données curées pour la page /pierres
// Chaque pierre pointe vers sa fiche complète existante dans le blog.
// `colors` = dégradé représentant la vraie couleur de la pierre (visuel Pinterest).

export interface Pierre {
    nom: string;
    slug: string;        // slug de la fiche blog existante
    vertu: string;       // accroche en une ligne
    chakra: string;
    colors: [string, string];
}

export interface IntentionGroupe {
    id: string;          // ancre URL
    emoji: string;
    titre: string;       // ex: "Pour l'amour"
    sousTitre: string;   // recherche type Pinterest
    pierres: Pierre[];
}

export const galeriePierres: IntentionGroupe[] = [
    {
        id: "amour",
        emoji: "💖",
        titre: "Amour & cœur",
        sousTitre: "Ouvrir le cœur, s'aimer, guérir d'une blessure",
        pierres: [
            { nom: "Quartz rose", slug: "quartz-rose-pierre-amour-coeur", vertu: "La pierre de l'amour de soi et de la tendresse.", chakra: "Cœur", colors: ["#f9c9d6", "#e88aa6"] },
            { nom: "Rhodonite", slug: "rhodonite-pierre-guerison-coeur-guide", vertu: "Répare les cœurs blessés et aide à pardonner.", chakra: "Cœur", colors: ["#e8889e", "#2e2530"] },
            { nom: "Aventurine verte", slug: "aventurine-verte-pierre-chance-coeur-guide", vertu: "Apaise le cœur et attire les belles opportunités.", chakra: "Cœur", colors: ["#7bbf8a", "#3a7d54"] },
        ],
    },
    {
        id: "protection",
        emoji: "🛡️",
        titre: "Protection",
        sousTitre: "Se protéger des énergies et des ondes négatives",
        pierres: [
            { nom: "Œil de tigre", slug: "oeil-de-tigre-pierre-protection-confiance-guide", vertu: "Le bouclier qui renvoie les énergies négatives.", chakra: "Racine", colors: ["#c8922e", "#6b4a1a"] },
            { nom: "Tourmaline noire", slug: "tourmaline-noire-protection-ondes-guide", vertu: "Absorbe les ondes et les énergies lourdes.", chakra: "Racine", colors: ["#3a3a3a", "#141414"] },
            { nom: "Obsidienne noire", slug: "obsidienne-noire-bouclier-protection", vertu: "Le bouclier énergétique le plus puissant.", chakra: "Racine", colors: ["#2a2a36", "#0a0a0e"] },
            { nom: "Turquoise", slug: "turquoise-pierre-protection-voyage-guide", vertu: "Le talisman protecteur des voyageurs.", chakra: "Gorge", colors: ["#4cc3c3", "#2a8a9a"] },
            { nom: "Shungite", slug: "shungite-protection-ondes-eau-guide-achat", vertu: "Protège des ondes et purifie l'eau.", chakra: "Racine", colors: ["#3a3a3a", "#222"] },
            { nom: "Labradorite", slug: "labradorite-pierre-protection-guide-achat", vertu: "Le bouclier du voyant, reflets bleu-vert.", chakra: "Troisième œil", colors: ["#4a6b8a", "#243a4a"] },
        ],
    },
    {
        id: "abondance",
        emoji: "✨",
        titre: "Abondance & chance",
        sousTitre: "Attirer la prospérité, la réussite et la chance",
        pierres: [
            { nom: "Citrine", slug: "citrine-pierre-abondance-prosperite-guide", vertu: "Le soleil minéral de la prospérité et de la joie.", chakra: "Plexus solaire", colors: ["#f5c542", "#e09a1a"] },
            { nom: "Pyrite", slug: "pyrite-pierre-abondance-confiance-guide", vertu: "L'or des fous qui attire l'abondance.", chakra: "Plexus solaire", colors: ["#c9a227", "#8a6a1a"] },
            { nom: "Jade", slug: "jade-pierre-porte-bonheur-prosperite-guide-achat", vertu: "La pierre porte-bonheur de la prospérité.", chakra: "Cœur", colors: ["#6abf8a", "#3a8a5a"] },
        ],
    },
    {
        id: "calme",
        emoji: "🧘",
        titre: "Calme & sommeil",
        sousTitre: "Apaiser le mental, mieux dormir, lâcher prise",
        pierres: [
            { nom: "Améthyste", slug: "amethyste-pierre-sagesse-spirituelle", vertu: "Apaise le mental et favorise un sommeil serein.", chakra: "Troisième œil", colors: ["#9b6bbf", "#6a3a8a"] },
            { nom: "Howlite", slug: "howlite-pierre-calme-sommeil-guide", vertu: "Calme l'esprit agité pour des nuits paisibles.", chakra: "Couronne", colors: ["#e8e8ec", "#b8b8c0"] },
            { nom: "Aigue-marine", slug: "aigue-marine-pierre-apaisement-lacher-prise-guide", vertu: "Invite au lâcher-prise et à la fluidité.", chakra: "Gorge", colors: ["#9bd6e0", "#5aa8c0"] },
        ],
    },
    {
        id: "intuition",
        emoji: "🔮",
        titre: "Intuition & expression",
        sousTitre: "Développer son intuition et oser s'exprimer",
        pierres: [
            { nom: "Lapis-lazuli", slug: "lapis-lazuli-pierre-communication-troisieme-oeil-guide", vertu: "Ouvre l'intuition et libère la parole juste.", chakra: "Troisième œil", colors: ["#2a4a9a", "#16265e"] },
            { nom: "Sodalite", slug: "sodalite-pierre-clarte-mentale-expression-guide", vertu: "Éclaircit l'esprit et soutient l'expression sincère.", chakra: "Gorge", colors: ["#3a5a9a", "#243a6a"] },
            { nom: "Fluorine", slug: "fluorine-pierre-concentration-clarte-guide", vertu: "Clarifie les idées et aide à se concentrer.", chakra: "Troisième œil", colors: ["#8abf9a", "#9b6bbf"] },
        ],
    },
    {
        id: "energie",
        emoji: "🔥",
        titre: "Énergie & ancrage",
        sousTitre: "Retrouver vitalité, courage et stabilité",
        pierres: [
            { nom: "Cornaline", slug: "cornaline-pierre-vitalite-creativite-guide", vertu: "Réveille l'élan, le courage et la créativité.", chakra: "Sacré", colors: ["#e08a3a", "#c0531a"] },
            { nom: "Grenat", slug: "grenat-pierre-passion-energie-ancrage-guide", vertu: "Ravive l'énergie vitale, la passion et l'ancrage.", chakra: "Racine", colors: ["#9a2a3a", "#5e1622"] },
        ],
    },
    {
        id: "purification",
        emoji: "🌙",
        titre: "Purification",
        sousTitre: "Nettoyer et recharger ses pierres et son espace",
        pierres: [
            { nom: "Sélénite", slug: "selenite-purifier-recharger-pierres-guide", vertu: "Purifie et recharge toutes vos autres pierres.", chakra: "Couronne", colors: ["#f0f0f5", "#d2d2e2"] },
        ],
    },
];

export const totalPierres = galeriePierres.reduce((n, g) => n + g.pierres.length, 0);
