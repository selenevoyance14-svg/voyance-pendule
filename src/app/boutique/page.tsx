import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Boutique Spirituelle — Selene Voyance",
    description: "Notre selection d'objets spirituels : pendules, tarots, bougies, encens, pierres et livres de voyance. Tout pour votre pratique spirituelle.",
};

const categories = [
    {
        title: "Pendules de Voyance",
        emoji: "🔮",
        items: [
            { name: "Pendule en cristal de roche", desc: "Le classique de la radiesthesie. Cristal pur, ideal pour les debutants comme les confirmes.", link: "https://www.amazon.fr/s?k=pendule+radiesthesie+cristal+roche&tag=lebrunnathali-21" },
            { name: "Pendule en amethyste", desc: "Pierre de l'intuition et de la spiritualite. Parfait pour developper vos capacites psychiques.", link: "https://www.amazon.fr/s?k=pendule+amethyste+radiesthesie&tag=lebrunnathali-21" },
            { name: "Pendule en laiton", desc: "Pendule metallique, precis et reactif. Prefere des radiesthesistes experimentes.", link: "https://www.amazon.fr/s?k=pendule+laiton+radiesthesie+professionnel&tag=lebrunnathali-21" },
            { name: "Coffret pendule + planche", desc: "Kit complet avec pendule, planche de radiesthesie et guide d'utilisation.", link: "https://www.amazon.fr/s?k=coffret+pendule+planche+radiesthesie+guide&tag=lebrunnathali-21" },
        ],
    },
    {
        title: "Tarots & Oracles",
        emoji: "🃏",
        items: [
            { name: "Tarot de Marseille", desc: "Le tarot classique par excellence. 78 cartes, symbolisme riche, tradition francaise.", link: "https://www.amazon.fr/s?k=tarot+de+marseille+jeu+cartes&tag=lebrunnathali-21" },
            { name: "Oracle de Belline", desc: "L'oracle prefere des voyants francais. 52 cartes precises et directes.", link: "https://www.amazon.fr/s?k=oracle+belline+cartes+voyance&tag=lebrunnathali-21" },
            { name: "Oracle des Anges", desc: "Messages angeliques pour une guidance douce et bienveillante au quotidien.", link: "https://www.amazon.fr/s?k=oracle+anges+gardiens+cartes&tag=lebrunnathali-21" },
            { name: "Tarot Rider-Waite", desc: "Le tarot le plus utilise dans le monde. Illustrations iconiques, ideal pour apprendre.", link: "https://www.amazon.fr/s?k=tarot+rider+waite+original&tag=lebrunnathali-21" },
            { name: "Oracle Lenormand", desc: "36 cartes, lectures precises et concretes. Tres populaire en Europe.", link: "https://www.amazon.fr/s?k=oracle+lenormand+petit+jeu+cartes&tag=lebrunnathali-21" },
        ],
    },
    {
        title: "Pierres & Cristaux",
        emoji: "💎",
        items: [
            { name: "Amethyste brute", desc: "Pierre de la sagesse et de l'intuition. Purifie l'esprit et favorise la meditation.", link: "https://www.amazon.fr/s?k=amethyste+brute+pierre+naturelle&tag=lebrunnathali-21" },
            { name: "Quartz rose", desc: "Pierre de l'amour inconditionnel. Apaise le coeur et attire les energies positives.", link: "https://www.amazon.fr/s?k=quartz+rose+pierre+naturelle+lithotherapie&tag=lebrunnathali-21" },
            { name: "Labradorite", desc: "Pierre de protection par excellence. Bouclier contre les energies negatives.", link: "https://www.amazon.fr/s?k=labradorite+pierre+protection+naturelle&tag=lebrunnathali-21" },
            { name: "Oeil de tigre", desc: "Pierre de courage et de confiance. Repousse le mauvais oeil et les pensees negatives.", link: "https://www.amazon.fr/s?k=oeil+tigre+pierre+naturelle+protection&tag=lebrunnathali-21" },
            { name: "Coffret 7 chakras", desc: "Les 7 pierres des chakras dans un coffret. Pour equilibrer vos centres energetiques.", link: "https://www.amazon.fr/s?k=coffret+pierres+7+chakras+lithotherapie&tag=lebrunnathali-21" },
        ],
    },
    {
        title: "Bougies & Encens",
        emoji: "🕯️",
        items: [
            { name: "Bougies rituelles 7 couleurs", desc: "Set de bougies pour vos rituels et meditations. Chaque couleur a sa signification.", link: "https://www.amazon.fr/s?k=bougies+rituelles+7+couleurs+meditation&tag=lebrunnathali-21" },
            { name: "Encens sauge blanche", desc: "Purification des espaces et des energies. La sauge blanche est incontournable.", link: "https://www.amazon.fr/s?k=encens+sauge+blanche+purification+naturelle&tag=lebrunnathali-21" },
            { name: "Palo Santo", desc: "Bois sacre d'Amerique du Sud. Purifie, protege et invite les energies positives.", link: "https://www.amazon.fr/s?k=palo+santo+bois+sacre+naturel&tag=lebrunnathali-21" },
            { name: "Encens oliban / frankinc.", desc: "L'encens des temples et des eglises. Eleve la vibration spirituelle de l'espace.", link: "https://www.amazon.fr/s?k=encens+oliban+frankincense+resine+naturel&tag=lebrunnathali-21" },
        ],
    },
    {
        title: "Livres Spirituels",
        emoji: "📚",
        items: [
            { name: "Le guide du pendule", desc: "Apprenez a utiliser le pendule pas a pas. Pour debutants et intermediaires.", link: "https://www.amazon.fr/s?k=guide+pendule+radiesthesie+livre+debutant&tag=lebrunnathali-21" },
            { name: "Le Tarot de Marseille pour les nuls", desc: "Apprendre le tarot simplement. Signification de chaque arcane, tirages et interpretations.", link: "https://www.amazon.fr/s?k=tarot+marseille+livre+apprendre&tag=lebrunnathali-21" },
            { name: "La Bible de la lithotherapie", desc: "Tout sur les pierres et cristaux. Proprietes, utilisations et associations.", link: "https://www.amazon.fr/s?k=bible+lithotherapie+livre+pierres+cristaux&tag=lebrunnathali-21" },
            { name: "Developper son intuition", desc: "Exercices pratiques pour developper vos capacites intuitives et psychiques.", link: "https://www.amazon.fr/s?k=developper+intuition+livre+exercices&tag=lebrunnathali-21" },
            { name: "Les anges gardiens", desc: "Decouvrez les 72 anges, leurs messages et comment communiquer avec eux.", link: "https://www.amazon.fr/s?k=anges+gardiens+livre+guide+complet&tag=lebrunnathali-21" },
        ],
    },
    {
        title: "Accessoires Spirituels",
        emoji: "✨",
        items: [
            { name: "Tapis de tirage velours", desc: "Tapis en velours pour vos tirages de cartes. Protege vos cartes et sacralise l'espace.", link: "https://www.amazon.fr/s?k=tapis+tirage+tarot+velours+noir&tag=lebrunnathali-21" },
            { name: "Attrape-reves", desc: "Filtre les mauvais reves et laisse passer les visions positives. Fait main, plumes naturelles.", link: "https://www.amazon.fr/s?k=attrape+reves+artisanal+plumes+naturelles&tag=lebrunnathali-21" },
            { name: "Boule de cristal", desc: "Pour la cristallomancie et la meditation. Quartz clair, support inclus.", link: "https://www.amazon.fr/s?k=boule+cristal+quartz+voyance+meditation&tag=lebrunnathali-21" },
            { name: "Coffret rangement tarot", desc: "Boite en bois gravee pour ranger et proteger vos jeux de tarot et oracles.", link: "https://www.amazon.fr/s?k=coffret+bois+rangement+tarot+oracle&tag=lebrunnathali-21" },
        ],
    },
];

export default function BoutiquePage() {
    return (
        <>
            {/* HEADER */}
            <section className="py-16 sm:py-24 text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-mystic-600/10 blur-[120px]" />
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <div className="text-6xl mb-6">🛍️</div>
                    <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                        Boutique <span className="text-gold-400">Spirituelle</span>
                    </h1>
                    <p className="text-mystic-300 max-w-lg mx-auto">
                        Notre selection d&apos;objets pour votre pratique spirituelle.
                        Pendules, tarots, pierres, bougies et livres — tout ce dont vous avez besoin.
                    </p>
                    <div className="mystic-divider max-w-xs mx-auto mt-6" />
                    <p className="text-mystic-500 text-xs mt-4 italic">
                        En tant que partenaire Amazon, nous percevons une commission sur les achats qualifies, sans surcout pour vous.
                    </p>
                </div>
            </section>

            {/* CATEGORIES */}
            {categories.map((cat, ci) => (
                <section key={ci} className={`py-16 sm:py-20 ${ci % 2 === 0 ? "section-purple" : "section-dark"}`}>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div className="text-5xl mb-4">{cat.emoji}</div>
                            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                                {cat.title}
                            </h2>
                            <div className="mystic-divider max-w-xs mx-auto mt-4" />
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {cat.items.map((item, ii) => (
                                <div key={ii} className="glass-card p-6 flex flex-col">
                                    <h3 className="font-heading text-lg font-bold text-mystic-200 mb-2">
                                        {item.name}
                                    </h3>
                                    <p className="text-mystic-400 text-sm leading-relaxed mb-4 flex-1">
                                        {item.desc}
                                    </p>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer sponsored"
                                        className="btn-gold text-sm py-2 px-5 justify-center w-full"
                                    >
                                        Voir sur Amazon
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-mystic-950/50 to-[#0a0518]" />
                <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
                    <div className="text-5xl mb-6">🌙</div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                        Envie de tester vos nouveaux outils ?
                    </h2>
                    <p className="text-mystic-300 mb-8">
                        Utilisez nos outils de guidance gratuits avec vos pierres et votre pendule.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/tirage" className="btn-gold">
                            🃏 Tirage de Cartes
                        </a>
                        <a href="/pendule-gratuit" className="btn-mystic">
                            🔮 Pendule Gratuit
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
