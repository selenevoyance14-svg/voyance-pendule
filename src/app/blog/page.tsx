import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
    title: "Blog Spiritualité & Voyance — Sélène Voyance",
    description: "Découvrez nos articles sur la voyance, l'astrologie, les anges gardiens et la spiritualité. Des conseils pour éclairer votre chemin de vie.",
};

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[#0a0518] pt-24 pb-20">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
                    Blog <span className="text-gold-400">Spirituel</span>
                </h1>
                <p className="text-mystic-400 max-w-2xl mx-auto text-lg">
                    Articles, conseils et guidances pour approfondir votre connexion spirituelle
                    et mieux comprendre les messages de l&apos;univers.
                </p>
                <div className="mystic-divider max-w-xs mx-auto mt-8" />
            </div>

            {/* Articles Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <a
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="glass-card flex flex-col group hover:border-mystic-500/50 transition-all duration-300"
                        >
                            {/* Card Image/Icon placeholder */}
                            <div className="h-48 bg-mystic-900/50 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                                {post.image}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-gold-500 bg-gold-500/10 px-2 py-1 rounded">
                                        {post.category}
                                    </span>
                                    <span className="text-[10px] text-mystic-500">
                                        {post.date}
                                    </span>
                                </div>

                                <h2 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-mystic-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto flex items-center text-gold-400 text-sm font-semibold gap-2">
                                    Lire l&apos;article
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
