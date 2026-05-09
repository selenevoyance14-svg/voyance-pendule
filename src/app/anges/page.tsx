import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Anges Gardiens — Découvrez votre Ange Protecteur | Sélène Voyance",
    description: "Trouvez votre ange gardien selon votre date de naissance. Messages angéliques, prières et guidance spirituelle gratuite.",
};

const angels = [
    {
        name: "Vehuiah",
        dates: "21-25 mars",
        quality: "Volonté et nouveaux commencements",
        message: "Je vous donne la force d'entreprendre de nouveaux projets. Faites le premier pas avec confiance, je suis là pour vous soutenir dans vos initiatives.",
        prayer: "Ange Vehuiah, donne-moi le courage de commencer ce que je reporte depuis trop longtemps. Guide mes premiers pas sur ce nouveau chemin.",
        color: "Rouge",
        pierre: "Rubis",
    },
    {
        name: "Jeliel",
        dates: "26-30 mars",
        quality: "Amour et sagesse",
        message: "L'amour est la clé de tout. Je vous aide à ouvrir votre cœur et à trouver la paix dans vos relations. La sagesse vient de l'intérieur.",
        prayer: "Ange Jeliel, aide-moi à trouver l'harmonie dans mes relations et à exprimer mon amour avec sincérité et douceur.",
        color: "Rose",
        pierre: "Quartz rose",
    },
    {
        name: "Sitael",
        dates: "31 mars - 4 avril",
        quality: "Construction et responsabilité",
        message: "Je vous aide à bâtir des fondations solides dans tous les domaines de votre vie. La stabilité est à portée de main.",
        prayer: "Ange Sitael, guide-moi dans la construction de ma vie. Aide-moi à assumer mes responsabilités avec grâce.",
        color: "Brun doré",
        pierre: "Œil de tigre",
    },
    {
        name: "Elemiah",
        dates: "5-9 avril",
        quality: "Puissance divine et réparation",
        message: "Les blessures du passé peuvent être guéries. Je vous aide à réparer ce qui a été brisé et à retrouver votre pouvoir intérieur.",
        prayer: "Ange Elemiah, répare les fissures de mon cœur et de mon âme. Redonne-moi la force que j'ai perdue en chemin.",
        color: "Bleu profond",
        pierre: "Lapis-lazuli",
    },
    {
        name: "Mahasiah",
        dates: "10-14 avril",
        quality: "Paix et harmonie",
        message: "La paix intérieure est le plus grand des trésors. Elle rayonne autour de vous et transforme votre réalité. Respirez, tout va bien.",
        prayer: "Ange Mahasiah, apporte la paix dans mon cœur et dans mon foyer. Que chaque jour soit une opportunité d'harmonie.",
        color: "Blanc",
        pierre: "Pierre de lune",
    },
    {
        name: "Lelahel",
        dates: "15-20 avril",
        quality: "Lumière et guérison",
        message: "La lumière divine coule à travers vous. Je vous aide à guérir votre corps, votre esprit et votre âme. La santé est votre droit divin.",
        prayer: "Ange Lelahel, envoie ta lumière guérisseuse sur moi et sur ceux que j'aime. Illumine les zones d'ombre de ma vie.",
        color: "Vert émeraude",
        pierre: "Émeraude",
    },
    {
        name: "Achaiah",
        dates: "21-25 avril",
        quality: "Patience et découverte",
        message: "Les plus belles choses prennent du temps. Je vous aide à cultiver la patience et à découvrir les merveilles cachées de votre existence.",
        prayer: "Ange Achaiah, enseigne-moi la patience divine. Aide-moi à apprécier le voyage autant que la destination.",
        color: "Turquoise",
        pierre: "Turquoise",
    },
    {
        name: "Cahetel",
        dates: "26-30 avril",
        quality: "Bénédiction et récolte",
        message: "Le temps de la récolte approche. Tout ce que vous avez semé avec amour va porter ses fruits. Préparez-vous à recevoir l'abondance.",
        prayer: "Ange Cahetel, bénis mes efforts et mes récoltes. Que l'abondance coule dans ma vie comme une rivière inépuisable.",
        color: "Or",
        pierre: "Citrine",
    },
];

const angelMessages = [
    {
        number: "111",
        meaning: "Nouveau départ",
        description: "Vos pensées se manifestent rapidement. Restez positif(ve) et concentré(e) sur ce que vous désirez vraiment. L'univers est aligné avec vos intentions.",
    },
    {
        number: "222",
        meaning: "Équilibre & confiance",
        description: "Tout est en train de s'arranger, même si vous ne le voyez pas encore. Ayez confiance dans le processus divin. Un équilibre se rétablit dans votre vie.",
    },
    {
        number: "333",
        meaning: "Protection divine",
        description: "Les maîtres ascensionnés sont autour de vous. Vous êtes protégé(e) et guidé(e). Demandez de l'aide, vos prières sont entendues.",
    },
    {
        number: "444",
        meaning: "Anges autour de vous",
        description: "Vos anges gardiens sont tout près, vous entourant d'amour et de protection. Vous n'êtes jamais seul(e). Ressentez leur présence bienveillante.",
    },
    {
        number: "555",
        meaning: "Grand changement",
        description: "Un changement majeur se prépare dans votre vie. Ne résistez pas, cette transformation est nécessaire pour votre évolution spirituelle.",
    },
    {
        number: "777",
        meaning: "Chance & miracles",
        description: "Vous êtes sur le bon chemin ! La chance est de votre côté. Des miracles se préparent. Restez ouvert(e) aux signes de l'univers.",
    },
    {
        number: "888",
        meaning: "Abondance",
        description: "L'abondance financière et spirituelle coule vers vous. C'est un signe que vos efforts sont récompensés. Soyez reconnaissant(e).",
    },
    {
        number: "999",
        meaning: "Fin de cycle",
        description: "Un chapitre de votre vie touche à sa fin pour qu'un nouveau puisse commencer. Lâchez prise avec amour et accueillez la transition.",
    },
];

export default function AngesPage() {
    return (
        <>
            {/* HEADER */}
            <section className="py-16 sm:py-24 text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold-600/5 blur-[100px]" />
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <div className="text-5xl mb-6 animate-float">👼</div>
                    <h1 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
                        Vos <span className="text-gold-400">Anges Gardiens</span>
                    </h1>
                    <p className="text-mystic-300 text-lg max-w-xl mx-auto">
                        Découvrez votre ange protecteur selon votre date de naissance,
                        ses messages et comment communiquer avec lui.
                    </p>
                    <div className="mystic-divider max-w-xs mx-auto mt-6" />
                </div>
            </section>

            {/* ANGEL NUMBERS */}
            <section className="pb-20 sm:pb-28">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                            Nombres <span className="text-mystic-400">Angéliques</span>
                        </h2>
                        <p className="text-mystic-400 max-w-lg mx-auto text-sm">
                            Voyez-vous souvent des nombres répétitifs ? Ce sont des messages de vos anges gardiens.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {angelMessages.map((m) => (
                            <div key={m.number} className="glass-card p-6 text-center">
                                <div className="font-heading text-3xl font-bold text-gold-400 mb-2">{m.number}</div>
                                <div className="text-mystic-200 font-semibold text-sm mb-3">{m.meaning}</div>
                                <p className="text-mystic-400 text-xs leading-relaxed">{m.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GUARDIAN ANGELS */}
            <section className="section-purple py-20 sm:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                            Trouvez votre <span className="text-gold-400">Ange Gardien</span>
                        </h2>
                        <p className="text-mystic-400 max-w-lg mx-auto text-sm">
                            Chaque ange protège une période de naissance. Découvrez le vôtre et son message pour vous.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {angels.map((a) => (
                            <div key={a.name} className="glass-card overflow-hidden">
                                <div className="flex items-center gap-4 p-6 sm:p-8 border-b border-mystic-700/20">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-500/20 to-mystic-600/20 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">👼</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-heading text-xl font-bold text-gold-400">{a.name}</h3>
                                        <p className="text-mystic-500 text-sm">{a.dates} — {a.quality}</p>
                                    </div>
                                    <div className="hidden sm:flex gap-3">
                                        <span className="text-xs bg-mystic-900/50 border border-mystic-700/30 rounded-full px-3 py-1 text-mystic-300">
                                            🎨 {a.color}
                                        </span>
                                        <span className="text-xs bg-mystic-900/50 border border-mystic-700/30 rounded-full px-3 py-1 text-mystic-300">
                                            💎 {a.pierre}
                                        </span>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-0">
                                    <div className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-mystic-700/20">
                                        <h4 className="font-heading text-xs font-bold text-gold-400 uppercase tracking-wider mb-3">💬 Message de votre ange</h4>
                                        <p className="text-mystic-300 text-sm leading-relaxed italic">&ldquo;{a.message}&rdquo;</p>
                                    </div>
                                    <div className="p-6 sm:p-8">
                                        <h4 className="font-heading text-xs font-bold text-gold-400 uppercase tracking-wider mb-3">🙏 Prière</h4>
                                        <p className="text-mystic-300 text-sm leading-relaxed">{a.prayer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-mystic-500 text-sm">
                            Liste partielle. Les 72 anges seront bientôt disponibles.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                        Besoin d&apos;une guidance plus personnelle ?
                    </h2>
                    <p className="text-mystic-400 mb-8">
                        Posez votre question au pendule et recevez une réponse claire par Oui ou Non.
                    </p>
                    <a href="/voyance" className="btn-gold text-lg">
                        🔮 Consulter le Pendule
                    </a>
                </div>
            </section>
        </>
    );
}
