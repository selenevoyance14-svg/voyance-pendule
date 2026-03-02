import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales — Sélène Voyance",
    description: "Mentions légales du site voyance-pendule.fr — Sélène Voyance",
};

export default function MentionsLegales() {
    return (
        <div className="min-h-screen bg-[#0a0520] pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <h1 className="font-heading text-3xl font-bold text-white mb-8">
                    Mentions <span className="text-gold-400">Légales</span>
                </h1>

                <div className="space-y-8 text-mystic-400 text-sm leading-relaxed">
                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">1. Éditeur du site</h2>
                        <p>
                            Le site <strong className="text-mystic-300">voyance-pendule.fr</strong> est édité par :<br />
                            <strong className="text-mystic-300">Sélène Voyance</strong><br />
                            Entrepreneur individuel<br />
                            Email : <a href="mailto:bonsplansmania@gmail.com" className="text-gold-400 hover:text-gold-300 transition">contact@voyance-pendule.fr</a><br />
                            SIRET : 10133158500014<br />
                            Directrice de la publication : Nathalie
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">2. Hébergement</h2>
                        <p>
                            Le site est hébergé par :<br />
                            <strong className="text-mystic-300">Vercel Inc.</strong><br />
                            440 N Barranca Ave #4133<br />
                            Covina, CA 91723, États-Unis<br />
                            Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 transition">vercel.com</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">3. Propriété intellectuelle</h2>
                        <p>
                            L&apos;ensemble des contenus présents sur le site voyance-pendule.fr (textes, images, graphismes, logo, icônes, etc.)
                            est protégé par les lois relatives à la propriété intellectuelle. Toute reproduction, représentation,
                            modification, publication ou adaptation de tout ou partie de ces éléments, quel que soit le moyen
                            ou le procédé utilisé, est interdite sans l&apos;autorisation écrite préalable de Sélène Voyance.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">4. Protection des données personnelles</h2>
                        <p>
                            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés,
                            vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition
                            concernant vos données personnelles.
                        </p>
                        <p className="mt-2">
                            Pour exercer ces droits, contactez-nous à :
                            <a href="mailto:bonsplansmania@gmail.com" className="text-gold-400 hover:text-gold-300 transition ml-1">contact@voyance-pendule.fr</a>
                        </p>
                        <p className="mt-2">
                            Pour plus de détails, consultez notre <a href="/confidentialite" className="text-gold-400 hover:text-gold-300 transition">Politique de confidentialité</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">5. Cookies</h2>
                        <p>
                            Le site voyance-pendule.fr peut utiliser des cookies à des fins de statistiques et d&apos;amélioration
                            de l&apos;expérience utilisateur. L&apos;utilisateur peut désactiver les cookies dans les paramètres
                            de son navigateur.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">6. Limitation de responsabilité</h2>
                        <p>
                            Les consultations de voyance proposées sur ce site sont à titre de divertissement et de
                            développement personnel. Elles ne se substituent en aucun cas à un avis médical, juridique,
                            financier ou tout autre conseil professionnel. Sélène Voyance ne saurait être tenue responsable
                            des décisions prises par les utilisateurs à la suite d&apos;une consultation.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">7. Contact</h2>
                        <p>
                            Pour toute question concernant le site ou ces mentions légales, vous pouvez nous contacter à :<br />
                            <a href="mailto:bonsplansmania@gmail.com" className="text-gold-400 hover:text-gold-300 transition">contact@voyance-pendule.fr</a>
                        </p>
                    </section>

                    <p className="text-mystic-600 text-xs mt-8">
                        Dernière mise à jour : Février 2026
                    </p>
                </div>
            </div>
        </div>
    );
}
