import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Questions Fréquentes (FAQ) — Sélène Voyance",
    description: "Réponses à vos questions sur la voyance par pendule, les consultations, le tarot, l'horoscope et les outils de guidance gratuits de voyance-pendule.fr.",
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
        category: "Les Consultations Payantes",
        questions: [
            {
                q: "Comment se déroule une consultation par pendule ?",
                a: "Vous choisissez votre formule (1 question à 5 euros, 3 questions à 10 euros, ou 5 questions à 15 euros), vous rédigez vos questions dans le formulaire et vous procédez au paiement sécurisé par carte bancaire via Stripe. Sélène consulte ensuite le pendule pour chacune de vos questions et vous envoie les réponses détaillées par email dans un délai de 30 minutes.",
            },
            {
                q: "Quels types de questions puis-je poser ?",
                a: "Vous pouvez poser des questions sur l'amour, le travail, la famille, les projets, les décisions à prendre ou tout autre sujet qui vous préoccupe. Les questions en format Oui/Non fonctionnent le mieux avec le pendule. Par exemple : \"Est-ce que mon projet professionnel va aboutir ?\", \"Est-ce que je vais retrouver l'amour cette année ?\". Évitez les questions sur la santé ou les diagnostics médicaux.",
            },
            {
                q: "Le paiement est-il sécurisé ?",
                a: "Oui, tous les paiements sont traités par Stripe, une plateforme de paiement certifiée PCI DSS (le plus haut niveau de sécurité dans l'industrie du paiement). Nous n'avons jamais accès à vos coordonnées bancaires. Stripe accepte Visa, Mastercard et American Express.",
            },
            {
                q: "Puis-je me faire rembourser ?",
                a: "Les consultations étant des prestations de services numériques exécutées immédiatement, le droit de rétractation ne s'applique pas (article L221-28 du Code de la consommation). Cependant, en cas de problème technique empêchant la délivrance de la prestation, un remboursement intégral sera effectué. Contactez-nous à contact@voyance-pendule.fr.",
            },
        ],
    },
    {
        category: "Les Outils Gratuits",
        questions: [
            {
                q: "Les outils de guidance sont-ils vraiment gratuits ?",
                a: "Oui, tous nos outils de guidance sont 100% gratuits et accessibles sans inscription : le tirage de cartes, le pendule Oui/Non en ligne, l'horoscope du jour pour les 12 signes du zodiaque et les messages de vos anges gardiens. Aucun paiement ni engagement n'est demandé pour utiliser ces services.",
            },
            {
                q: "Comment fonctionne le tirage de cartes gratuit ?",
                a: "Notre tirage de cartes en ligne vous permet de tirer 1, 3 ou 5 cartes. Concentrez-vous sur votre question, cliquez pour mélanger les cartes et sélectionnez celles qui vous attirent. Chaque carte tirée est accompagnée de son interprétation détaillée. C'est un outil de réflexion et d'introspection, à utiliser aussi souvent que vous le souhaitez.",
            },
            {
                q: "L'horoscope est-il mis à jour chaque jour ?",
                a: "Oui, l'horoscope est actualisé quotidiennement pour chacun des 12 signes du zodiaque. Il couvre les domaines Amour, Travail, Santé et Finances. C'est un outil de guidance générale basé sur votre signe solaire — pour une lecture plus personnalisée, une consultation par pendule prend en compte votre situation individuelle.",
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
    return (
        <div className="min-h-screen bg-[#0a0520] pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">❓</div>
                    <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                        Questions <span className="text-gold-400">Fréquentes</span>
                    </h1>
                    <p className="text-mystic-300 max-w-xl mx-auto">
                        Retrouvez les réponses aux questions les plus posées sur la voyance par pendule,
                        nos consultations, les outils gratuits et la boutique spirituelle.
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
                    <a href="mailto:bonsplansmania@gmail.com" className="text-gold-400 hover:text-gold-300 transition font-medium">
                        contact@voyance-pendule.fr
                    </a>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <a href="/pendule-gratuit" className="btn-gold">
                            🔮 Essayer le Pendule Gratuit
                        </a>
                        <a href="/voyance" className="btn-mystic">
                            ✨ Consultation Personnalisée
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
