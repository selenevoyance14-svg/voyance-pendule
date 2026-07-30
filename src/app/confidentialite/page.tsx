import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de confidentialité — Sélène Voyance",
    description: "Données, cookies, publicité et liens affiliés sur voyance-pendule.fr.",
    alternates: { canonical: "/confidentialite" },
};

const sections = [
    {
        title: "Données utilisées par les outils gratuits",
        text: "Le pendule, le tirage de cartes, l’horoscope et les messages des anges sont accessibles sans compte. Ils ne vous demandent ni nom, ni date de naissance, ni adresse électronique. Les questions saisies dans les outils ne sont pas envoyées pour constituer un fichier client.",
    },
    {
        title: "Données techniques",
        text: "Comme tout site web, notre hébergeur peut traiter des informations techniques nécessaires à la sécurité et au fonctionnement : adresse IP, navigateur, appareil, date, heure et pages consultées. Ces journaux techniques sont conservés pour une durée limitée.",
    },
    {
        title: "Publicité et cookies",
        text: "Le site utilise Google AdSense. Google et ses partenaires peuvent déposer des cookies ou utiliser des identifiants afin de diffuser, mesurer et personnaliser des annonces selon votre consentement et la réglementation applicable. Vous pouvez refuser les cookies non essentiels depuis le module de consentement ou les réglages de votre navigateur.",
    },
    {
        title: "Liens affiliés",
        text: "Certains liens vers Amazon sont affiliés. Lorsque vous cliquez, Amazon peut traiter des données conformément à sa propre politique de confidentialité. Nous pouvons recevoir une commission sur un achat éligible, sans surcoût pour vous.",
    },
    {
        title: "Vos droits",
        text: "Vous disposez, selon le RGPD, de droits d’accès, de rectification, d’effacement, de limitation et d’opposition concernant vos données personnelles. Vous pouvez également introduire une réclamation auprès de la CNIL.",
    },
];

export default function Confidentialite() {
    return (
        <main className="min-h-screen bg-[#2a1a3a] pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <header className="text-center mb-12">
                    <div className="text-5xl mb-4">🔐</div>
                    <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                        Politique de <span className="text-gold-400">confidentialité</span>
                    </h1>
                    <p className="text-mystic-400 mt-5">Dernière mise à jour : 30 juillet 2026</p>
                </header>
                <div className="glass-card p-6 sm:p-10 space-y-8 text-mystic-400 leading-relaxed">
                    {sections.map((section) => (
                        <section key={section.title}>
                            <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">{section.title}</h2>
                            <p>{section.text}</p>
                        </section>
                    ))}
                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">Contact</h2>
                        <p>
                            Pour exercer vos droits :{" "}
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
