import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conditions Générales de Vente — Sélène Voyance",
    description: "Conditions générales de vente du site voyance-pendule.fr — consultations de voyance par pendule, tarifs et modalités.",
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
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">1. Objet</h2>
                        <p>
                            Les présentes Conditions Générales de Vente (CGV) régissent les prestations de voyance
                            par pendule proposées sur le site <strong className="text-mystic-300">voyance-pendule.fr</strong>,
                            édité par <strong className="text-mystic-300">Sélène Voyance</strong> (entrepreneur individuel, SIRET : 10133158500014).
                        </p>
                        <p className="mt-2">
                            Toute commande passée sur le site implique l&apos;acceptation pleine et entière des présentes CGV.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">2. Prestations proposées</h2>
                        <p>
                            Sélène Voyance propose des consultations de voyance par pendule, effectuées à distance.
                            Le client soumet ses questions via le formulaire en ligne et reçoit les réponses par email
                            dans un délai de 30 minutes après confirmation du paiement.
                        </p>
                        <p className="mt-2">Les formules proposées sont les suivantes :</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong className="text-mystic-300">1 question</strong> — 5,00 euros</li>
                            <li><strong className="text-mystic-300">3 questions</strong> — 10,00 euros</li>
                            <li><strong className="text-mystic-300">5 questions</strong> — 15,00 euros</li>
                        </ul>
                        <p className="mt-2">
                            Le site propose également des outils de guidance gratuits (tirage de cartes, pendule Oui/Non,
                            horoscope, messages angéliques) accessibles sans inscription ni paiement.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">3. Commande et paiement</h2>
                        <p>
                            Le client choisit sa formule, remplit le formulaire avec ses questions et procède au paiement
                            en ligne via la plateforme sécurisée <strong className="text-mystic-300">Stripe</strong>.
                            Les paiements sont effectués par carte bancaire (Visa, Mastercard, American Express).
                        </p>
                        <p className="mt-2">
                            La commande est considérée comme validée après confirmation du paiement par Stripe.
                            Un email de confirmation est envoyé au client.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">4. Livraison de la prestation</h2>
                        <p>
                            Les réponses aux questions sont envoyées par email à l&apos;adresse fournie par le client,
                            dans un délai indicatif de <strong className="text-mystic-300">30 minutes</strong> après
                            la confirmation du paiement. Ce délai peut varier en fonction de l&apos;affluence.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">5. Droit de rétractation</h2>
                        <p>
                            Conformément à l&apos;article L221-28 du Code de la consommation, le droit de rétractation
                            ne s&apos;applique pas aux prestations de services pleinement exécutées avant la fin du délai
                            de rétractation, avec l&apos;accord préalable du consommateur.
                        </p>
                        <p className="mt-2">
                            En validant sa commande, le client accepte que la prestation soit exécutée immédiatement
                            et renonce expressément à son droit de rétractation.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">6. Boutique et liens affiliés</h2>
                        <p>
                            Le site propose une boutique contenant des recommandations de produits spirituels
                            (pendules, tarots, pierres, bougies, livres). Ces produits sont vendus par des marchands tiers,
                            notamment via <strong className="text-mystic-300">Amazon</strong>.
                        </p>
                        <p className="mt-2">
                            En tant que partenaire Amazon, Sélène Voyance perçoit une commission sur les achats qualifiés
                            effectués via les liens présents sur le site, sans surcoût pour l&apos;acheteur.
                            Sélène Voyance n&apos;est pas le vendeur de ces produits et n&apos;est pas responsable
                            de leur livraison, qualité ou service après-vente.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">7. Nature des consultations</h2>
                        <p>
                            Les consultations de voyance proposées sur ce site sont à titre de
                            <strong className="text-mystic-300"> divertissement et de développement personnel</strong>.
                            Elles ne constituent en aucun cas un avis médical, juridique, financier ou tout autre
                            conseil professionnel.
                        </p>
                        <p className="mt-2">
                            Le client est seul responsable des décisions qu&apos;il prend à la suite d&apos;une consultation.
                            Sélène Voyance décline toute responsabilité quant aux conséquences de l&apos;interprétation
                            des messages reçus.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">8. Responsabilité</h2>
                        <p>
                            Sélène Voyance s&apos;engage à fournir la prestation commandée dans les meilleurs délais.
                            En cas de problème technique empêchant la délivrance de la prestation, le client sera
                            contacté par email et un remboursement intégral sera effectué.
                        </p>
                        <p className="mt-2">
                            Sélène Voyance ne saurait être tenue responsable des dommages directs ou indirects
                            résultant de l&apos;utilisation du site ou des prestations fournies.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">9. Protection des données</h2>
                        <p>
                            Les données personnelles collectées dans le cadre des commandes sont traitées conformément
                            à notre <a href="/confidentialite" className="text-gold-400 hover:text-gold-300 transition">Politique de confidentialité</a>.
                            Elles sont utilisées exclusivement pour l&apos;exécution de la prestation et ne sont jamais
                            vendues ni partagées avec des tiers à des fins commerciales.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">10. Propriété intellectuelle</h2>
                        <p>
                            L&apos;ensemble des contenus du site voyance-pendule.fr (textes, images, graphismes, logo)
                            est protégé par le droit de la propriété intellectuelle. Toute reproduction est interdite
                            sans autorisation écrite préalable.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">11. Droit applicable et litiges</h2>
                        <p>
                            Les présentes CGV sont soumises au droit français. En cas de litige, les parties
                            s&apos;engagent à rechercher une solution amiable avant toute action judiciaire.
                            À défaut, le litige sera porté devant les tribunaux compétents.
                        </p>
                        <p className="mt-2">
                            Conformément aux dispositions du Code de la consommation, le client peut recourir
                            au service de médiation de la consommation. Le médiateur peut être saisi via
                            la plateforme européenne de règlement des litiges en ligne :
                            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 transition ml-1">
                                ec.europa.eu/consumers/odr
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-lg font-semibold text-mystic-200 mb-3">12. Contact</h2>
                        <p>
                            Pour toute question relative aux présentes CGV :<br />
                            <a href="mailto:bonsplansmania@gmail.com" className="text-gold-400 hover:text-gold-300 transition">contact@voyance-pendule.fr</a>
                        </p>
                    </section>

                    <p className="text-mystic-600 text-xs mt-8">
                        Dernière mise à jour : Avril 2026
                    </p>
                </div>
            </div>
        </div>
    );
}
