import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

const BASE_URL = "https://voyance-pendule.fr";

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = [
        { url: BASE_URL, changeFrequency: "weekly" as const, priority: 1 },
        { url: `${BASE_URL}/tirage`, changeFrequency: "daily" as const, priority: 0.9 },
        { url: `${BASE_URL}/pendule-gratuit`, changeFrequency: "daily" as const, priority: 0.9 },
        { url: `${BASE_URL}/horoscope`, changeFrequency: "daily" as const, priority: 0.9 },
        { url: `${BASE_URL}/message-ange`, changeFrequency: "daily" as const, priority: 0.8 },
        { url: `${BASE_URL}/anges`, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE_URL}/voyance`, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE_URL}/boutique`, changeFrequency: "weekly" as const, priority: 0.7 },
        { url: `${BASE_URL}/qui-suis-je`, changeFrequency: "monthly" as const, priority: 0.6 },
        { url: `${BASE_URL}/faq`, changeFrequency: "monthly" as const, priority: 0.6 },
        { url: `${BASE_URL}/blog`, changeFrequency: "weekly" as const, priority: 0.8 },
        { url: `${BASE_URL}/mentions-legales`, changeFrequency: "yearly" as const, priority: 0.2 },
        { url: `${BASE_URL}/cgv`, changeFrequency: "yearly" as const, priority: 0.2 },
        { url: `${BASE_URL}/confidentialite`, changeFrequency: "yearly" as const, priority: 0.2 },
    ];

    const blogPages = blogPosts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...pages, ...blogPages];
}
