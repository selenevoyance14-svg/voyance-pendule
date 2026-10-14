import type { Metadata } from "next";
import Image from "next/image";
import products from "@/data/products.json";

export const metadata: Metadata = {
    title: "Pendules, tarots et accessoires : sélection spirituelle | Sélène",
    description: "30 références de pendules, tarots, oracles, livres et accessoires. Photos, liens directs et conseils pour comparer avant de choisir.",
    alternates: { canonical: "/boutique" },
};

const categories = [
    { id: "pendules", title: "Pendules de radiesthésie", emoji: "🔮", intro: "Comparez la prise en main, la forme et le matériau annoncé. Un pendule est un support de pratique symbolique ; son prix ou sa matière ne garantissent pas une réponse fiable." },
    { id: "cartes", title: "Tarots et oracles", emoji: "🃏", intro: "Choisissez des illustrations qui vous plaisent et un livret dans une langue que vous lisez. Consultez le contenu exact de l’édition : certains résultats de recherche sont des livres, d’autres des coffrets." },
    { id: "accessoires", title: "Tapis et pochettes", emoji: "✨", intro: "Des accessoires pour poser et ranger vos cartes. Mesurez votre jeu avant de choisir une pochette et vérifiez les dimensions du tapis." },
    { id: "livres", title: "Livres et planches", emoji: "📚", intro: "Comparez la langue, le format et le sommaire. Une collection de cadrans n’est pas nécessairement un manuel d’apprentissage : les deux usages sont différents." },
    { id: "pierres", title: "Bijoux et objets en pierre", emoji: "💎", intro: "Des objets décoratifs à choisir pour leur aspect et leur taille. Les propriétés énergétiques associées aux pierres relèvent de croyances et ne constituent pas une efficacité médicale démontrée." },
];
const availableProducts = products.filter(product => product.active);

export default function BoutiquePage() {
    return (
        <>
            <section className="pt-28 pb-12 sm:pt-32 text-center relative overflow-hidden">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="text-5xl mb-6" aria-hidden="true">🛍️</div>
                    <p className="text-gold-400 uppercase tracking-widest text-sm mb-3">La sélection de Sélène</p>
                    <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Pendules, cartes et <span className="text-gold-400">accessoires</span></h1>
                    <p className="text-mystic-300">{availableProducts.length} références pour découvrir une pratique symbolique, comparer les formats et trouver un objet qui vous plaît. Chaque fiche mène directement au produit chez le vendeur.</p>
                    <p className="text-mystic-400 text-sm mt-5">Références et disponibilité vérifiées le 14 octobre 2026. Le prix, les variantes, le vendeur et la disponibilité peuvent changer : vérifiez-les sur Amazon avant l’achat.</p>
                    <p className="text-mystic-400 text-xs mt-4">En tant que Partenaire Amazon, Sélène réalise un bénéfice sur les achats remplissant les conditions requises. <a href="/affiliation-amazon" className="underline">Notre politique d’affiliation</a>.</p>
                    <nav aria-label="Catégories de la boutique" className="flex flex-wrap justify-center gap-2 mt-8">{categories.map(category => <a key={category.id} href={`#${category.id}`} className="rounded-full border border-mystic-700 px-4 py-2 text-sm text-mystic-200 hover:border-gold-400">{category.emoji} {category.title}</a>)}</nav>
                </div>
            </section>
            <section className="max-w-6xl mx-auto px-4 pb-12" aria-labelledby="bien-choisir">
                <div className="glass-card p-6 sm:p-8">
                    <h2 id="bien-choisir" className="font-heading text-2xl text-white mb-5">Avant de choisir</h2>
                    <div className="grid sm:grid-cols-3 gap-6 text-sm text-mystic-300">
                        <div><h3 className="text-gold-400 font-semibold mb-2">Commencer simplement</h3><p>Un seul jeu ou un pendule suffit pour découvrir l’exercice. Vous pouvez aussi essayer nos outils gratuits avant d’acheter du matériel.</p></div>
                        <div><h3 className="text-gold-400 font-semibold mb-2">Lire la fiche exacte</h3><p>Dimensions, langue, matériaux, édition et contenu du coffret : vérifiez les caractéristiques de la variante sélectionnée.</p></div>
                        <div><h3 className="text-gold-400 font-semibold mb-2">Comparer le coût total</h3><p>Regardez le prix final, la livraison et les retours. Nous ne publions pas de notes clients ou de réductions non vérifiées.</p></div>
                    </div>
                </div>
            </section>
            {categories.map((category, index) => (
                <section id={category.id} key={category.id} className={`py-12 scroll-mt-24 ${index % 2 === 0 ? "section-purple" : "section-dark"}`}>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-8"><h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">{category.emoji} {category.title}</h2><p className="text-mystic-300 text-sm leading-relaxed max-w-2xl mx-auto">{category.intro}</p></div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {availableProducts.filter(product => product.category === category.id).map(product => (
                                <article key={product.asin} className="glass-card overflow-hidden flex flex-col" data-product-asin={product.asin}>
                                    <div className="relative h-56 bg-white"><Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-5" /></div>
                                    <div className="p-6 flex flex-col flex-1"><h3 className="font-heading text-lg font-bold text-mystic-200 mb-3 break-words">{product.name}</h3><p className="text-mystic-300 text-sm leading-relaxed mb-5 flex-1">{product.description}</p><a href={product.url} target="_blank" rel="noopener noreferrer sponsored nofollow" className="btn-gold text-sm py-3 px-5 justify-center w-full" aria-label={`Voir sur Amazon : ${product.name}`}>Voir le produit sur Amazon ↗</a></div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="font-heading text-2xl text-white mb-6">Des guides pour comparer</h2>
                <div className="grid sm:grid-cols-3 gap-5">
                    <a href="/blog/choisir-pendule-materiau-forme-budget" className="glass-card p-6"><h3 className="font-semibold text-gold-400 mb-2">Choisir un premier pendule</h3><p className="text-mystic-300 text-sm">Forme, chaîne, matériau et budget : les critères pratiques.</p></a>
                    <a href="/blog/tarot-oracle-verifier-coffret-avant-achat" className="glass-card p-6"><h3 className="font-semibold text-gold-400 mb-2">Comparer un tarot ou un oracle</h3><p className="text-mystic-300 text-sm">Vérifier l’édition, la langue et les accessoires inclus.</p></a>
                    <a href="/pendule-gratuit" className="glass-card p-6"><h3 className="font-semibold text-gold-400 mb-2">Essayer le pendule gratuit</h3><p className="text-mystic-300 text-sm">Un exercice de réflexion accessible sans matériel ni achat.</p></a>
                </div>
            </section>
        </>
    );
}
