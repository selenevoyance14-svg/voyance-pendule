import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conditions Générales de Vente — Sélène Voyance",
    description: "Conditions générales de vente du site voyance-pendule.fr — Sélène Voyance",
};

export default function CGV() {
    return (
        <div className="min-h-screen bg-[#0a0520] pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <h1 className="font-heading text-3xl font-bold text-white mb-8">
                    Conditions Générales de <span className="text-gold-400">Vente</span>
                </h1>

                <div className="space-y-8 text-mystic-400 text-sm leading-relaxed">
                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">Article 1 — Objet</h2>
                        <p>
                            Les présentes Conditions Générales de Vente (CGV) régissent les ventes de prestations
                            de voyance par pendule proposées par <strong className="text-mystic-300">Sélène Voyance</strong> sur le site
                            <strong className="text-mystic-300"> voyance-pendule.fr</strong>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">Article 2 — Prestations et tarifs</h2>
                        <p>Sélène Voyance propose les prestations suivantes :</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong className="text-mystic-300">1 Question Oui/Non</strong> — 5,00 € TTC</li>
                            <li><strong className="text-mystic-300">3 Questions Oui/Non</strong> — 10,00 € TTC</li>
                            <li><strong className="text-mystic-300">5 Questions Oui/Non</strong> — 15,00 € TTC</li>
                        </ul>
                        <p className="mt-2">
                            Les tarifs sont indiqués en euros, toutes taxes comprises. Sélène Voyance se réserve le droit
                            de modifier ses tarifs à tout moment, les prestations étant facturées au tarif en vigueur
                            au moment de la commande.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">Article 3 — Commande</h2>
                        <p>
                            Le client passe commande en cliquant sur le bouton de paiement correspondant à la formule choisie.
                            Il est redirigé vers la plateforme de paiement sécurisée Stripe où il renseigne ses informations
                            personnelles, ses questions et ses coordonnées de paiement.
                        </p>
                        <p className="mt-2">
                            La validation du paiement constitue l&apos;acceptation des présentes CGV et forme le contrat de vente.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">Article 4 — Paiement</h2>
                        <p>
                            Le paiement est effectué en ligne par carte bancaire via la plateforme sécurisée
                            <strong className="text-mystic-300"> Stripe</strong>. Le paiement est immédiat et irrévocable.
                            Un reçu de paiement est automatiquement envoyé par email au client.
                        </p>
                        <p className="mt-2">
                            Sélène Voyance ne stocke aucune donnée bancaire. L&apos;ensemble des transactions
                            sont sécurisées et traitées par Stripe.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">Article 5 — Délai de réponse</h2>
                        <p>
                            Sélène Voyance s&apos;engage à fournir les réponses aux questions du client dans un délai
                            de <strong className="text-mystic-300">48 heures ouvrées</strong> suivant la réception du paiement.
                            Les réponses sont transmises par email à l&apos;adresse fournie lors du paiement.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">Article 6 — Garantie sérénité et remboursement</h2>
                        <p>
                            Conformément à notre <strong className="text-mystic-300">Garantie Sérénité</strong>, si le client
                            n&apos;est pas satisfait de sa consultation, il peut demander un remboursement intégral dans un
                            délai de <strong className="text-mystic-300">7 jours</strong> suivant la réception de la réponse,
                            sans justification nécessaire.
                        </p>
                        <p className="mt-2">
                            La demande de remboursement doit être adressée par email à
                            <a href="mailto:selenevoyance14@gmail.com" className="text-gold-400 hover:text-gold-300 transition ml-1">contact@voyance-pendule.fr</a>.
                            Le remboursement sera effectué sous 14 jours sur le moyen de paiement utilisé lors de la commande.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">Article 7 — Droit de rétractation</h2>
                        <p>
                            Conformément à l&apos;article L221-28 du Code de la consommation, le droit de rétractation
                            ne peut être exercé pour les prestations de services pleinement exécutées avant la fin du délai
                            de rétractation et dont l&apos;exécution a commencé avec l&apos;accord du consommateur.
                        </p>
                        <p className="mt-2">
                            Toutefois, notre Garantie Sérénité (Article 6) offre une protection supérieure au droit
                            de rétractation légal.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">Article 8 — Responsabilité</h2>
                        <p>
                            Les consultations de voyance par pendule sont proposées à titre de
                            <strong className="text-mystic-300"> divertissement et de développement personnel</strong>.
                            Elles ne se substituent en aucun cas à un avis médical, juridique, financier
                            ou tout autre conseil professionnel.
                        </p>
                        <p className="mt-2">
                            Le client reconnaît utiliser les services en pleine connaissance de cause et
                            ne saurait tenir Sélène Voyance responsable des décisions prises à la suite d&apos;une consultation.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">Article 9 — Protection des données</h2>
                        <p>
                            Les données personnelles collectées lors de la commande sont traitées conformément
                            au RGPD. Pour plus d&apos;informations, consultez notre
                            <a href="/confidentialite" className="text-gold-400 hover:text-gold-300 transition ml-1">Politique de confidentialité</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">Article 10 — Droit applicable et litiges</h2>
                        <p>
                            Les présentes CGV sont soumises au droit français.
                            En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.
                            À défaut, les tribunaux français seront seuls compétents.
                        </p>
                        <p className="mt-2">
                            Conformément à l&apos;article L612-1 du Code de la consommation, le consommateur peut recourir
                            gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">Article 11 — Contact</h2>
                        <p>
                            Pour toute question relative aux présentes CGV :<br />
                            <a href="mailto:selenevoyance14@gmail.com" className="text-gold-400 hover:text-gold-300 transition">contact@voyance-pendule.fr</a>
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
