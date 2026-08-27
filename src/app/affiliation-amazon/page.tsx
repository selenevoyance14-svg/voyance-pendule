import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Affiliations et publicité — Sélène Voyance",
    description: "Informations sur les liens affiliés Amazon et MonSiteVoyance présents sur Sélène Voyance.",
    alternates: { canonical: "/affiliation-amazon" },
};

export default function AffiliationAmazonPage() {
    return (
        <div className="min-h-screen bg-[#2a1a3a] pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <h1 className="font-heading text-3xl font-bold text-white mb-8">
                    Affiliations &amp; <span className="text-gold-400">publicité</span>
                </h1>
                <div className="space-y-6 text-mystic-400 text-sm leading-relaxed">
                    <p className="text-mystic-200 font-semibold">
                        En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.
                    </p>
                    <p>
                        Certains liens vers Amazon présents dans la boutique et les articles sont des liens affiliés.
                        Si vous effectuez un achat après avoir suivi l&apos;un de ces liens, Sélène Voyance peut recevoir
                        une commission, sans surcoût pour vous.
                    </p>
                    <p>
                        Le site ne vend pas directement ces produits et n&apos;affiche pas leurs prix. Les informations
                        concernant le prix, la disponibilité, la livraison, les retours et le service après-vente sont
                        celles indiquées sur Amazon au moment de votre visite.
                    </p>
                    <p>
                        Les recommandations sont sélectionnées pour leur rapport avec la radiesthésie, la cartomancie
                        et les pratiques spirituelles. La présence d&apos;un lien affilié ne constitue pas une garantie
                        concernant un produit ou un vendeur.
                    </p>
                    <h2 className="font-heading text-2xl font-semibold text-white pt-5">MonSiteVoyance</h2>
                    <p>
                        Les encarts identifiés « Publicité · Lien affilié MonSiteVoyance » redirigent vers un service
                        tiers de consultations payantes par chat ou téléphone. Une inscription ou une consultation
                        effectuée après ce clic peut rémunérer Sélène Voyance, sans surcoût ajouté par notre site.
                    </p>
                    <p>
                        Les profils, avis, taux de satisfaction, disponibilités, offres et tarifs proviennent de
                        MonSiteVoyance. Ils peuvent évoluer à tout moment et doivent être vérifiés sur le site partenaire
                        avant toute inscription ou consultation. Sélène ne réalise pas ces consultations et ne garantit
                        aucun résultat.
                    </p>
                    <p>
                        Les outils de pendule, cartes, horoscope et messages angéliques proposés directement par Sélène
                        restent gratuits. Les consultations du partenaire sont facultatives et clairement séparées.
                    </p>
                </div>
            </div>
        </div>
    );
}
