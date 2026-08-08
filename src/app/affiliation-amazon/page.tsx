import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Affiliation Amazon — Sélène Voyance",
    description: "Informations sur les liens affiliés Amazon présents sur Sélène Voyance.",
    alternates: { canonical: "/affiliation-amazon" },
};

export default function AffiliationAmazonPage() {
    return (
        <div className="min-h-screen bg-[#2a1a3a] pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <h1 className="font-heading text-3xl font-bold text-white mb-8">
                    Affiliation <span className="text-gold-400">Amazon</span>
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
                </div>
            </div>
        </div>
    );
}
