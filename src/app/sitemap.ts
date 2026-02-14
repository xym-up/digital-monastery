import { siteConfig, categoryConfig } from "@/config/site";
import { getAllPosts } from "@/lib/content";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/${post.category}/${post.slug}`,
    lastModified: post.updatedAt || post.date,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const categoryUrls: MetadataRoute.Sitemap = Object.values(categoryConfig).map(
    (cat) => ({
      url: `${siteConfig.url}/${cat.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  return [
    {
      url: siteConfig.url,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...categoryUrls,
    ...postUrls,
  ];
}
