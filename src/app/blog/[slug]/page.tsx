import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

type Props = {
    params: { slug: string };
};

export function generateStaticParams() {
    return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) return { title: "Article non trouvé" };

    const url = `https://voyance-pendule.fr/blog/${post.slug}`;

    return {
        title: `${post.title} — Sélène Voyance`,
        description: post.excerpt,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            locale: "fr_FR",
            url,
            siteName: "Sélène Voyance",
            publishedTime: post.date,
            authors: ["Sélène"],
        },
        twitter: {
            card: "summary",
            title: post.title,
            description: post.excerpt,
        },
    };
}

function getRelatedPosts(currentSlug: string, category: string) {
    return blogPosts
        .filter((p) => p.slug !== currentSlug && p.category === category)
        .slice(0, 3);
}

export default function BlogPostPage({ params }: Props) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(post.slug, post.category);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        author: {
            "@type": "Person",
            name: "Sélène",
        },
        publisher: {
            "@type": "Organization",
            name: "Sélène Voyance",
            url: "https://voyance-pendule.fr",
        },
        datePublished: post.date,
        mainEntityOfPage: `https://voyance-pendule.fr/blog/${post.slug}`,
    };

    return (
        <div className="min-h-screen bg-[#0a0518] pt-24 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <article className="max-w-4xl mx-auto px-4 sm:px-6">
                {/* Back to blog */}
                <a href="/blog" className="inline-flex items-center gap-2 text-mystic-500 hover:text-gold-400 text-sm mb-12 transition-colors">
                    <span>←</span> Retour au blog
                </a>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-bold tracking-widest uppercase text-gold-500 bg-gold-500/10 px-3 py-1 rounded">
                            {post.category}
                        </span>
                        <span className="text-xs text-mystic-500">
                            Publié le {post.date}
                        </span>
                    </div>

                    <h1 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 border-y border-mystic-800/50 py-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-mystic-600 to-gold-600 flex items-center justify-center text-xl shadow-lg">
                            🌙
                        </div>
                        <div>
                            <div className="text-mystic-200 font-bold text-sm">Par Sélène</div>
                            <div className="text-mystic-500 text-xs">Guidance Spirituelle</div>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div
                    className="prose prose-invert prose-mystic max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Related Articles */}
                {relatedPosts.length > 0 && (
                    <div className="mt-20 border-t border-mystic-800/50 pt-12">
                        <h2 className="font-heading text-2xl font-bold text-white mb-8">
                            Articles similaires
                        </h2>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {relatedPosts.map((related) => (
                                <a
                                    key={related.slug}
                                    href={`/blog/${related.slug}`}
                                    className="glass-card p-5 group hover:border-mystic-500/50 transition-all duration-300 block"
                                >
                                    <div className="h-24 mb-3 overflow-hidden rounded">
                                        <img src={related.image} alt={related.title} className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-gold-500 bg-gold-500/10 px-2 py-0.5 rounded">
                                        {related.category}
                                    </span>
                                    <h3 className="font-heading text-sm font-bold text-white mt-2 mb-2 group-hover:text-gold-400 transition-colors leading-snug">
                                        {related.title}
                                    </h3>
                                    <span className="text-gold-400 text-xs font-semibold">
                                        Lire →
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* Footer CTA */}
                <div className="mt-16 border-t border-mystic-800/50 pt-16 text-center">
                    <h2 className="font-heading text-2xl font-bold text-white mb-6">
                        Envie d&apos;en savoir plus sur votre avenir ?
                    </h2>
                    <p className="text-mystic-400 mb-10 max-w-lg mx-auto">
                        Je réalise pour vous une consultation personnalisée par pendule
                        pour répondre à vos questions les plus pressantes.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/voyance" className="btn-gold">
                            🔮 Consulter le Pendule
                        </a>
                        <a href="/horoscope" className="btn-mystic">
                            ♈ Horoscope Gratuit
                        </a>
                    </div>
                </div>
            </article>
        </div>
    );
}
