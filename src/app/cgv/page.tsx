import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conditions Générales de Vente — Sélène Voyance",
    description: "Conditions générales de vente du site voyance-pendule.fr — consultation pendule personnalisée, outils gratuits et boutique.",
};

export default function CGV() {
    return (
        <div className="min-h-screen bg-[#2a1a3a] pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <h1 className="font-heading text-3xl font-bold text-white mb-8">
                    Conditions Générales de <span className="text-gold-400">Vente</span>
                </h1>

                <div className="space-y-8 text-mystic-400 text-sm leading-relaxed">
                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">1. Objet</h2>
                        <p>
                            Les présentes Conditions Générales de Vente (CGV) régissent l&apos;utilisation
                            du site <strong className="text-mystic-300">voyance-pendule.fr</strong> et la vente
                            des prestations de consultation par pendule personnalisée, édité par
                            <strong className="text-mystic-300"> Sélène Voyance</strong> (entrepreneur individuel,
                            SIRET : 10133158500014).
                        </p>
                        <p className="mt-2">
                            L&apos;utilisation du site et toute commande impliquent l&apos;acceptation pleine
                            et entière des présentes CGV.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">2. Services proposés</h2>
                        <p className="mb-2"><strong className="text-mystic-300">Outils gratuits</strong> (sans inscription) :</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Pendule Oui/Non en ligne</li>
                            <li>Tirage de cartes</li>
                            <li>Horoscope du jour des 12 signes</li>
                            <li>Messages des anges gardiens</li>
                        </ul>
                        <p className="mt-3 mb-2"><strong className="text-mystic-300">Service payant</strong> :</p>
                        <p>
                            Consultation par pendule personnalisée, accessible depuis la page
                            <a href="/consultation" className="text-gold-400 hover:text-gold-300 transition mx-1">/consultation</a>.
                            Le client choisit une formule, formule ses questions, paie en ligne et reçoit son tirage
                            personnalisé par email dans un délai indicatif de 30 minutes.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">3. Tarifs</h2>
                        <p className="mb-2">Les tarifs des consultations sont les suivants (TVA non applicable, art. 293 B du CGI) :</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong className="text-mystic-300">Question Unique</strong> — 1 question : <strong className="text-mystic-300">2 €</strong></li>
                            <li><strong className="text-mystic-300">Tirage Approfondi</strong> — 3 questions : <strong className="text-mystic-300">5 €</strong></li>
                            <li><strong className="text-mystic-300">Tirage Complet</strong> — 5 questions + synthèse : <strong className="text-mystic-300">7 €</strong></li>
                        </ul>
                        <p className="mt-2">
                            Les prix sont indiqués en euros, toutes taxes comprises. Sélène Voyance se réserve le droit
                            de modifier ses tarifs à tout moment, étant entendu que le tarif applicable est celui en
                            vigueur au moment de la commande.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">4. Modalités de paiement</h2>
                        <p>
                            Le paiement s&apos;effectue exclusivement en ligne, par <strong className="text-mystic-300">PayPal</strong>
                            (carte bancaire ou compte PayPal). Le paiement est sécurisé par PayPal — les données bancaires du
                            client ne transitent jamais par les serveurs de Sélène Voyance.
                        </p>
                        <p className="mt-2">
                            Le tirage est généré et programmé pour envoi par email immédiatement après confirmation du
                            paiement. Une facture peut être obtenue sur simple demande à
                            <a href="mailto:contact@voyance-pendule.fr" className="text-gold-400 hover:text-gold-300 transition ml-1">contact@voyance-pendule.fr</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">5. Nature du service — Oracle numérique</h2>
                        <p>
                            Le client reconnaît et accepte expressément que le tirage du pendule est rédigé par un
                            <strong className="text-mystic-300"> oracle numérique nommé Sélène</strong>, basé sur une
                            intelligence artificielle inspirée de la tradition divinatoire de la radiesthésie.
                            Il ne s&apos;agit pas d&apos;une prestation réalisée par un médium ou une personne physique
                            spécifiquement dédiée.
                        </p>
                        <p className="mt-2">
                            Les consultations sont fournies à titre de
                            <strong className="text-mystic-300"> divertissement et de réflexion personnelle</strong>.
                            Elles ne constituent en aucun cas un avis médical, juridique, financier ou tout autre conseil
                            professionnel. Le client est seul responsable des décisions qu&apos;il prend à la suite d&apos;une consultation.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">6. Droit de rétractation</h2>
                        <p>
                            Conformément à l&apos;article L221-28 du Code de la consommation, le droit de rétractation
                            ne peut être exercé pour les contrats de fourniture d&apos;un contenu numérique non fourni
                            sur un support matériel dont l&apos;exécution a commencé avec l&apos;accord préalable
                            exprès du consommateur, qui a expressément renoncé à son droit de rétractation.
                        </p>
                        <p className="mt-2">
                            En validant son paiement, le client consent à l&apos;exécution immédiate de la prestation
                            (génération et envoi de son tirage personnalisé) et renonce expressément à son droit de
                            rétractation.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">7. Politique de remboursement</h2>
                        <p>
                            Bien que le droit de rétractation ne s&apos;applique pas, Sélène Voyance s&apos;engage,
                            par geste commercial, à procéder à un remboursement intégral dans les cas suivants :
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Le tirage n&apos;est pas reçu par email dans un délai de 24 heures (après vérification du dossier spam)</li>
                            <li>Le tirage présente un défaut technique manifeste (texte tronqué, erreur de génération)</li>
                            <li>Demande motivée formulée dans les 14 jours suivant l&apos;achat</li>
                        </ul>
                        <p className="mt-3">
                            Le remboursement est effectué sur le compte PayPal du client dans un délai de 2 à 5 jours ouvrés
                            après acceptation de la demande, par mail à
                            <a href="mailto:contact@voyance-pendule.fr" className="text-gold-400 hover:text-gold-300 transition ml-1">contact@voyance-pendule.fr</a>.
                        </p>
                        <p className="mt-2">
                            <strong className="text-mystic-300">Frais PayPal non restitués</strong> :
                            conformément aux conditions de PayPal, les frais de gestion de la transaction
                            (environ 0,40 € par transaction) ne sont pas restitués au commerçant lors d&apos;un remboursement.
                            Le remboursement est donc effectué net de ces frais.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">8. Délai de livraison</h2>
                        <p>
                            Le tirage personnalisé est livré par email dans un délai indicatif de 30 minutes après
                            confirmation du paiement, ce délai pouvant varier selon la charge du service. En cas de
                            non-réception sous 24 heures (spams compris), le client peut écrire à
                            <a href="mailto:contact@voyance-pendule.fr" className="text-gold-400 hover:text-gold-300 transition ml-1">contact@voyance-pendule.fr</a>
                            pour un renvoi ou un remboursement (voir article 7).
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">9. Boutique et liens affiliés</h2>
                        <p>
                            Le site propose une boutique de produits spirituels (pendules, tarots, pierres, bougies, livres).
                            Ces produits sont vendus par des marchands tiers, notamment <strong className="text-mystic-300">Amazon</strong>.
                        </p>
                        <p className="mt-2">
                            En tant que partenaire Amazon, Sélène Voyance perçoit une commission sur les achats qualifiés,
                            sans surcoût pour l&apos;acheteur. Sélène Voyance n&apos;est pas vendeur de ces produits et n&apos;est
                            pas responsable de leur livraison, qualité ou service après-vente.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">10. Données personnelles</h2>
                        <p>
                            Les données personnelles collectées (prénom, email, date de naissance, questions posées)
                            sont traitées conformément à notre
                            <a href="/confidentialite" className="text-gold-400 hover:text-gold-300 transition mx-1">Politique de confidentialité</a>.
                            Elles sont utilisées exclusivement pour l&apos;exécution de la prestation et ne sont jamais
                            vendues ni partagées avec des tiers à des fins commerciales.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">11. Propriété intellectuelle</h2>
                        <p>
                            L&apos;ensemble des contenus du site voyance-pendule.fr (textes, images, graphismes, logo)
                            ainsi que les tirages générés sont protégés par le droit de la propriété intellectuelle.
                            Le client dispose d&apos;un droit d&apos;usage personnel de son tirage. Toute reproduction
                            commerciale est interdite sans autorisation écrite préalable.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">12. Responsabilité</h2>
                        <p>
                            Sélène Voyance ne saurait être tenue responsable des dommages directs ou indirects résultant
                            de l&apos;utilisation du site, des outils gratuits, des consultations payantes ou des décisions
                            prises par le client à la suite d&apos;un tirage.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">13. Droit applicable et litiges</h2>
                        <p>
                            Les présentes CGV sont soumises au droit français. En cas de litige, les parties s&apos;engagent
                            à rechercher une solution amiable avant toute action judiciaire. À défaut, le litige sera porté
                            devant les tribunaux compétents.
                        </p>
                        <p className="mt-2">
                            Conformément aux dispositions du Code de la consommation, le client peut recourir au service
                            de médiation de la consommation. Le médiateur peut être saisi via la plateforme européenne de
                            règlement des litiges en ligne :
                            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 transition ml-1">
                                ec.europa.eu/consumers/odr
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">14. Contact</h2>
                        <p>
                            Pour toute question relative aux présentes CGV ou à votre commande :<br />
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
