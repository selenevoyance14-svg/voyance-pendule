import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de Confidentialité — Sélène Voyance",
    description: "Politique de confidentialité et protection des données personnelles — voyance-pendule.fr",
};

export default function Confidentialite() {
    return (
        <div className="min-h-screen bg-[#0a0520] pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <h1 className="font-heading text-3xl font-bold text-white mb-8">
                    Politique de <span className="text-gold-400">Confidentialité</span>
                </h1>

                <div className="space-y-8 text-mystic-400 text-sm leading-relaxed">
                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">1. Introduction</h2>
                        <p>
                            La présente Politique de Confidentialité décrit comment <strong className="text-mystic-300">Sélène Voyance</strong>
                            collecte, utilise et protège les données personnelles des utilisateurs du site
                            <strong className="text-mystic-300"> voyance-pendule.fr</strong>, conformément au Règlement Général
                            sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">2. Responsable du traitement</h2>
                        <p>
                            Le responsable du traitement des données personnelles est :<br />
                            <strong className="text-mystic-300">Sélène Voyance — Nathalie</strong><br />
                            Email : <a href="mailto:bonsplansmania@gmail.com" className="text-gold-400 hover:text-gold-300 transition">contact@voyance-pendule.fr</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">3. Données collectées</h2>
                        <p>Nous collectons les données suivantes dans le cadre de nos prestations :</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong className="text-mystic-300">Nom et prénom</strong> — pour identifier le client</li>
                            <li><strong className="text-mystic-300">Adresse email</strong> — pour envoyer les réponses aux questions</li>
                            <li><strong className="text-mystic-300">Questions posées</strong> — pour fournir la prestation de voyance</li>
                            <li><strong className="text-mystic-300">Données de paiement</strong> — traitées exclusivement par Stripe (nous n&apos;y avons pas accès)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">4. Finalité du traitement</h2>
                        <p>Les données personnelles sont collectées pour les finalités suivantes :</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Exécution des prestations de voyance commandées</li>
                            <li>Envoi des réponses aux questions du client par email</li>
                            <li>Gestion des paiements et des remboursements</li>
                            <li>Communication avec le client concernant sa commande</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">5. Base légale du traitement</h2>
                        <p>
                            Le traitement des données personnelles repose sur l&apos;exécution du contrat
                            (la prestation de voyance commandée par le client) conformément à l&apos;article 6.1.b du RGPD.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">6. Durée de conservation</h2>
                        <p>
                            Les données personnelles sont conservées pendant une durée de
                            <strong className="text-mystic-300"> 12 mois</strong> à compter de la commande,
                            sauf obligation légale de conservation plus longue (notamment les données de facturation
                            conservées pendant 10 ans conformément aux obligations comptables).
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">7. Partage des données</h2>
                        <p>
                            Vos données personnelles ne sont jamais vendues ni partagées avec des tiers à des fins
                            commerciales. Elles sont uniquement transmises à :
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong className="text-mystic-300">Stripe</strong> — pour le traitement sécurisé des paiements</li>
                            <li><strong className="text-mystic-300">Vercel</strong> — pour l&apos;hébergement du site web</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">8. Sécurité des données</h2>
                        <p>
                            Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour
                            protéger vos données personnelles contre tout accès non autorisé, modification,
                            divulgation ou destruction. Les paiements sont sécurisés par le protocole SSL et
                            traités par Stripe, certifié PCI DSS.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">9. Vos droits</h2>
                        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong className="text-mystic-300">Droit d&apos;accès</strong> — obtenir une copie de vos données personnelles</li>
                            <li><strong className="text-mystic-300">Droit de rectification</strong> — corriger vos données inexactes</li>
                            <li><strong className="text-mystic-300">Droit à l&apos;effacement</strong> — demander la suppression de vos données</li>
                            <li><strong className="text-mystic-300">Droit à la portabilité</strong> — recevoir vos données dans un format structuré</li>
                            <li><strong className="text-mystic-300">Droit d&apos;opposition</strong> — vous opposer au traitement de vos données</li>
                            <li><strong className="text-mystic-300">Droit à la limitation</strong> — limiter le traitement de vos données</li>
                        </ul>
                        <p className="mt-3">
                            Pour exercer ces droits, contactez-nous à :
                            <a href="mailto:bonsplansmania@gmail.com" className="text-gold-400 hover:text-gold-300 transition ml-1">contact@voyance-pendule.fr</a>
                        </p>
                        <p className="mt-2">
                            Vous avez également le droit de déposer une réclamation auprès de la
                            <strong className="text-mystic-300"> CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés) :
                            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 transition ml-1">www.cnil.fr</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">10. Cookies</h2>
                        <p>
                            Le site voyance-pendule.fr utilise uniquement des cookies techniques nécessaires
                            au bon fonctionnement du site. Aucun cookie publicitaire ou de pistage n&apos;est utilisé.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">11. Modifications</h2>
                        <p>
                            Sélène Voyance se réserve le droit de modifier la présente Politique de Confidentialité
                            à tout moment. Les modifications seront publiées sur cette page avec la date de mise à jour.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">12. Contact</h2>
                        <p>
                            Pour toute question relative à cette politique de confidentialité :<br />
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
