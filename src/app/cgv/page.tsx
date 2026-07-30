import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conditions d’utilisation — Sélène Voyance",
    description: "Conditions d’utilisation des outils gratuits et contenus de voyance-pendule.fr.",
    robots: { index: false, follow: true },
};

const sections = [
    {
        title: "1. Objet du site",
        body: "voyance-pendule.fr propose gratuitement des outils numériques de guidance, des contenus éditoriaux et une sélection de produits spirituels. Aucun service de voyance individuel n’est vendu directement sur le site.",
    },
    {
        title: "2. Usage des outils",
        body: "Le pendule, les tirages, l’horoscope et les messages angéliques sont proposés à des fins de divertissement, d’introspection et de développement personnel. Leurs résultats ne sont ni des certitudes ni des conseils professionnels.",
    },
    {
        title: "3. Libre arbitre et responsabilité",
        body: "Chaque visiteur reste pleinement responsable de ses choix. Les contenus ne remplacent jamais un avis médical, psychologique, juridique ou financier. En cas de difficulté ou de décision importante, consultez un professionnel qualifié.",
    },
    {
        title: "4. Boutique et affiliation",
        body: "La boutique présente des recommandations proposées par des marchands tiers, notamment Amazon. En tant que Partenaire Amazon, le site réalise un bénéfice sur les achats remplissant les conditions requises, sans surcoût pour l’utilisateur. Prix, disponibilité, livraison et service après-vente relèvent du marchand concerné.",
    },
    {
        title: "5. Propriété intellectuelle",
        body: "Les textes, interfaces, illustrations et éléments originaux du site sont protégés. Toute reproduction substantielle sans autorisation préalable est interdite. Les marques et visuels de tiers restent la propriété de leurs détenteurs.",
    },
    {
        title: "6. Évolution du service",
        body: "Les outils et contenus peuvent être modifiés, interrompus ou enrichis à tout moment afin d’améliorer le site. L’accès gratuit n’emporte aucune garantie de disponibilité permanente.",
    },
];

export default function ConditionsUtilisation() {
    return (
        <main className="min-h-screen bg-[#2a1a3a] pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <header className="text-center mb-12">
                    <div className="text-5xl mb-4">📜</div>
                    <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                        Conditions <span className="text-gold-400">d’utilisation</span>
                    </h1>
                    <p className="text-mystic-400 mt-5">Dernière mise à jour : 30 juillet 2026</p>
                </header>
                <div className="glass-card p-6 sm:p-10 space-y-8 text-mystic-400 leading-relaxed">
                    {sections.map((section) => (
                        <section key={section.title}>
                            <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">{section.title}</h2>
                            <p>{section.body}</p>
                        </section>
                    ))}
                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">7. Contact</h2>
                        <p>
                            Pour toute question, écrivez à{" "}
                            <a className="text-gold-400 hover:text-gold-300" href="mailto:contact@voyance-pendule.fr">
                                contact@voyance-pendule.fr
                            </a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
