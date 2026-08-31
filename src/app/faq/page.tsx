import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Questions Fréquentes (FAQ) — Sélène Voyance",
    description: "Réponses à vos questions sur le pendule gratuit, le tarot, l'horoscope, les anges, la lithothérapie et les outils de guidance de voyance-pendule.fr.",
    alternates: { canonical: "/faq" },
};

const faqs = [
    {
        category: "Le Pendule et la Radiesthésie",
        questions: [
            {
                q: "Comment fonctionne le pendule de voyance ?",
                a: "Le pendule est un outil de radiesthésie qui capte les énergies subtiles. Suspendu à un fil, il se met en mouvement en réponse aux vibrations énergétiques : un mouvement circulaire ou linéaire correspond à une réponse positive (oui), un mouvement dans l'autre sens à une réponse négative (non). Le praticien pose des questions mentalement et interprète les oscillations du pendule. C'est un art ancestral qui demande de la pratique et de la concentration.",
            },
            {
                q: "Le pendule peut-il se tromper ?",
                a: "Le pendule est un outil, pas une vérité absolue. Sa précision dépend de l'état de concentration du praticien, de la clarté de la question posée et de l'environnement énergétique. Les réponses doivent être prises comme des éclairages et des pistes de réflexion, jamais comme des certitudes. C'est pourquoi nous recommandons de formuler des questions simples et précises en format Oui/Non.",
            },
            {
                q: "Quel pendule choisir pour débuter ?",
                a: "Pour débuter, nous recommandons un pendule en cristal de roche : il est polyvalent, neutre énergétiquement et facile à utiliser. Un coffret pendule + planche de radiesthésie est idéal pour les débutants car il fournit tout le nécessaire. Évitez les pendules trop lourds ou trop légers. Vous trouverez notre sélection dans la boutique du site.",
            },
        ],
    },
    {
        category: "Les Outils Gratuits",
        questions: [
            {
                q: "Comment se déroule la consultation par pendule gratuite ?",
                a: "Rendez-vous sur la page du pendule gratuit, rédigez votre question en format Oui/Non et lancez la consultation. Le pendule oscille et vous délivre une réponse instantanée. C'est 100 % gratuit, sans inscription ni engagement.",
            },
            {
                q: "Quels types de questions puis-je poser au pendule gratuit ?",
                a: "Vous pouvez poser des questions sur l'amour, le travail, la famille, les projets ou une décision. Les formulations simples auxquelles on peut répondre par Oui ou Non fonctionnent le mieux. Évitez les questions de santé, les diagnostics et les décisions à fort enjeu.",
            },
        ],
    },
    {
        category: "Les Autres Outils Gratuits",
        questions: [
            {
                q: "Tous les outils de guidance sont-ils gratuits ?",
                a: "Oui. Le pendule Oui/Non en ligne, le tirage de cartes, l'horoscope du jour pour les 12 signes et les messages des anges gardiens sont gratuits et accessibles sans inscription.",
            },
            {
                q: "Comment fonctionne le tirage de cartes gratuit ?",
                a: "Notre tirage de cartes en ligne vous permet de tirer 1, 3 ou 5 cartes. Concentrez-vous sur votre question, cliquez pour mélanger les cartes et sélectionnez celles qui vous attirent. Chaque carte tirée est accompagnée de son interprétation détaillée. C'est un outil de réflexion et d'introspection, à utiliser aussi souvent que vous le souhaitez.",
            },
            {
                q: "L'horoscope est-il mis à jour chaque jour ?",
                a: "Oui, l'horoscope est actualisé quotidiennement pour les 12 signes du zodiaque. Il couvre notamment l'amour, le travail, le bien-être et les finances. Cette lecture générale basée sur votre signe solaire reste un contenu de divertissement et de réflexion.",
            },
        ],
    },
    {
        category: "Le Tarot",
        questions: [
            {
                q: "Quelle est la différence entre le tarot et un oracle ?",
                a: "Le tarot (comme le Tarot de Marseille) est un système structuré de 78 cartes avec un symbolisme codifié : 22 arcanes majeurs représentant les grandes étapes de la vie et 56 arcanes mineurs. Un oracle est plus libre dans sa forme — il peut avoir n'importe quel nombre de cartes et chaque jeu a son propre thème (anges, animaux, affirmations positives). Le tarot demande un apprentissage plus approfondi, tandis que l'oracle est plus intuitif et accessible aux débutants.",
            },
            {
                q: "Faut-il un don pour lire le tarot ?",
                a: "Non, le tarot s'apprend. Bien sûr, l'intuition joue un rôle important dans l'interprétation, mais la base est un savoir qui s'acquiert avec la pratique et l'étude. Comme tout art, certains ont une sensibilité naturelle, mais n'importe qui peut apprendre à tirer les cartes et à les interpréter. La régularité de la pratique est plus importante qu'un hypothétique don inné.",
            },
        ],
    },
    {
        category: "Les Pierres et la Lithothérapie",
        questions: [
            {
                q: "Comment purifier et recharger mes pierres ?",
                a: "La plupart des pierres se purifient en les passant sous l'eau claire (sauf celles qui craignent l'eau comme la sélénite ou la malachite), en les fumant à la sauge blanche ou au Palo Santo, ou en les déposant sur un amas de quartz. Pour le rechargement, la lumière de la pleine lune convient à presque toutes les pierres. L'améthyste et le quartz rose préfèrent la lune plutôt que le soleil qui peut altérer leur couleur.",
            },
            {
                q: "Les pierres ont-elles réellement des propriétés ?",
                a: "La lithothérapie est une pratique ancestrale fondée sur la conviction que les cristaux émettent des vibrations qui interagissent avec notre champ énergétique. De nombreux témoignages attestent de bienfaits ressentis (apaisement, protection, clarté mentale). Toutefois, la lithothérapie ne remplace en aucun cas un avis médical et ne constitue pas un traitement. C'est une pratique complémentaire de bien-être.",
            },
        ],
    },
    {
        category: "La Boutique",
        questions: [
            {
                q: "Les produits de la boutique sont-ils vendus par Sélène Voyance ?",
                a: "Non. Notre boutique est une sélection de recommandations. Les produits sont vendus par des marchands tiers, principalement via Amazon. En cliquant sur un lien de la boutique, vous êtes redirigé vers Amazon où vous effectuez votre achat. En tant que partenaire Amazon, nous percevons une commission sur les achats qualifiés, sans aucun surcoût pour vous.",
            },
            {
                q: "Comment sont sélectionnés les produits recommandés ?",
                a: "Chaque produit est sélectionné en fonction de sa qualité, de sa pertinence pour la pratique spirituelle et des avis des utilisateurs. Nous privilégions des produits authentiques et bien notés. La boutique couvre les essentiels : pendules, tarots, oracles, pierres, bougies, encens, livres et accessoires de voyance.",
            },
        ],
    },
];

export default function FAQ() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.flatMap((section) => section.questions).map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
    };

    return (
        <div className="min-h-screen bg-[#2a1a3a] pt-24 pb-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">❓</div>
                    <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                        Questions <span className="text-gold-400">Fréquentes</span>
                    </h1>
                    <p className="text-mystic-300 max-w-xl mx-auto">
                        Retrouvez les réponses aux questions les plus posées sur le pendule,
                        nos outils gratuits et la boutique spirituelle.
                    </p>
                    <div className="mystic-divider max-w-xs mx-auto mt-6" />
                </div>

                <div className="space-y-12">
                    {faqs.map((section, si) => (
                        <section key={si}>
                            <h2 className="font-heading text-xl font-semibold text-gold-400 mb-6">
                                {section.category}
                            </h2>
                            <div className="space-y-6">
                                {section.questions.map((faq, fi) => (
                                    <div key={fi} className="glass-card p-5 sm:p-6">
                                        <h3 className="font-heading text-base font-semibold text-white mb-3">
                                            {faq.q}
                                        </h3>
                                        <p className="text-mystic-400 text-sm leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-mystic-400 mb-4">
                        Vous avez une autre question ? Contactez-nous directement.
                    </p>
                    <a href="mailto:contact@voyance-pendule.fr" className="text-gold-400 hover:text-gold-300 transition font-medium">
                        contact@voyance-pendule.fr
                    </a>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <a href="/tirage" className="btn-gold">
                            🃏 Tirage de cartes gratuit
                        </a>
                        <a href="/pendule-gratuit" className="btn-mystic">
                            🔮 Pendule Gratuit
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
