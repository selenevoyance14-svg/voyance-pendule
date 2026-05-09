import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de Confidentialité — Sélène Voyance",
    description: "Politique de confidentialité et protection des données personnelles — voyance-pendule.fr",
};

export default function Confidentialite() {
    return (
        <div className="min-h-screen bg-[#2a1a3a] pt-24 pb-16">
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
                            Entrepreneur individuel, SIRET : 10133158500014<br />
                            Email : <a href="mailto:bonsplansmania@gmail.com" className="text-gold-400 hover:text-gold-300 transition">contact@voyance-pendule.fr</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">3. Données collectées</h2>
                        <p>Les données suivantes sont collectées dans le cadre de la consultation payante :</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong className="text-mystic-300">Prénom</strong> — pour personnaliser le tirage</li>
                            <li><strong className="text-mystic-300">Date de naissance</strong> — pour enrichir l&apos;interprétation du tirage (facultative)</li>
                            <li><strong className="text-mystic-300">Adresse email</strong> — pour envoyer le tirage et communiquer sur la commande</li>
                            <li><strong className="text-mystic-300">Questions posées</strong> — pour générer le tirage personnalisé</li>
                            <li><strong className="text-mystic-300">Identifiant de transaction PayPal</strong> — pour la traçabilité du paiement</li>
                        </ul>
                        <p className="mt-2">
                            Les outils gratuits (pendule, tirage de cartes, horoscope, anges) ne nécessitent
                            <strong className="text-mystic-300"> aucune collecte de données personnelles</strong>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">4. Finalités du traitement</h2>
                        <p>Les données personnelles sont collectées pour les finalités suivantes :</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Exécution de la prestation de consultation par pendule personnalisée</li>
                            <li>Génération du tirage par l&apos;oracle numérique Sélène</li>
                            <li>Envoi du tirage par email</li>
                            <li>Communication relative à la commande et au support client</li>
                            <li>Respect des obligations légales et comptables</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">5. Base légale du traitement</h2>
                        <p>
                            Le traitement repose sur l&apos;<strong className="text-mystic-300">exécution du contrat</strong>
                            (la prestation de consultation commandée par le client), conformément à l&apos;article 6.1.b du RGPD,
                            ainsi que sur le respect d&apos;<strong className="text-mystic-300">obligations légales</strong>
                            (notamment comptables) pour les données de facturation.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">6. Sous-traitants techniques</h2>
                        <p>
                            Pour fournir le service, certaines données peuvent être transmises aux sous-traitants suivants,
                            agissant chacun dans le strict cadre de leur mission et conformément au RGPD :
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong className="text-mystic-300">Cloudflare Pages</strong> (Cloudflare Inc., USA / Europe) — hébergement du site et des fonctions serveur</li>
                            <li><strong className="text-mystic-300">PayPal</strong> (PayPal Europe, Luxembourg) — traitement du paiement et lutte contre la fraude</li>
                            <li><strong className="text-mystic-300">Mistral AI</strong> (Mistral AI SAS, France) — modèle d&apos;intelligence artificielle utilisé pour générer le tirage personnalisé. Les questions posées sont transmises temporairement à l&apos;API Mistral pour générer la réponse, puis ne sont pas conservées par Mistral au-delà du temps de traitement</li>
                            <li><strong className="text-mystic-300">Resend</strong> (Resend Inc., USA — hébergement Europe) — envoi de l&apos;email transactionnel contenant le tirage</li>
                        </ul>
                        <p className="mt-2">
                            Ces sous-traitants sont liés par des accords de traitement de données conformes au RGPD.
                            Aucune donnée n&apos;est utilisée à des fins de profilage publicitaire ou revendue.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">7. Durée de conservation</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong className="text-mystic-300">Données de commande et tirages</strong> : 12 mois à compter de la commande</li>
                            <li><strong className="text-mystic-300">Données de facturation</strong> : 10 ans (obligation comptable)</li>
                            <li><strong className="text-mystic-300">Cookies de session</strong> : 1 heure maximum (durée de la commande en cours)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">8. Cookies</h2>
                        <p>
                            Le site utilise uniquement des cookies <strong className="text-mystic-300">techniques nécessaires</strong>
                            au fonctionnement du service de consultation :
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong className="text-mystic-300">Cookie de session</strong> (<code className="text-mystic-300">vp_session_*</code>) — chiffré et signé, posé uniquement lors d&apos;une commande, expiré au plus tard après 1 heure ou immédiatement après l&apos;envoi du tirage</li>
                        </ul>
                        <p className="mt-2">
                            Aucun cookie publicitaire ou de pistage n&apos;est utilisé. Aucun consentement préalable n&apos;est donc
                            requis (CNIL, dispense d&apos;information pour les cookies strictement nécessaires).
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">9. Sécurité des données</h2>
                        <p>
                            Les communications avec le site sont chiffrées par HTTPS. Les données bancaires ne transitent
                            jamais par les serveurs de Sélène Voyance — le paiement est intégralement géré par PayPal.
                            Le cookie de session est chiffré et signé par HMAC-SHA256.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">10. Vos droits</h2>
                        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong className="text-mystic-300">Droit d&apos;accès</strong> — obtenir une copie de vos données</li>
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
                            <strong className="text-mystic-300"> CNIL</strong> :
                            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 transition ml-1">www.cnil.fr</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">11. Modifications</h2>
                        <p>
                            Sélène Voyance se réserve le droit de modifier la présente politique. Les modifications seront
                            publiées sur cette page avec la date de mise à jour.
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
                        Dernière mise à jour : Mai 2026
                    </p>
                </div>
            </div>
        </div>
    );
}
