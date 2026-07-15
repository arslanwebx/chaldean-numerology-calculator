import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { publishedPosts } from "@/content/posts";

const sitePages = ["/", "/blog/", "/about/", "/author/arslan-ejaz/", "/contact/", "/privacy-policy/", "/terms-and-conditions/", "/disclaimer/", "/cookie-policy/", "/editorial-policy/", "/accessibility/"] as const;

export const sitemapPaths: readonly string[] = [...sitePages, ...publishedPosts.map((post) => post.href)];

export default function sitemap(): MetadataRoute.Sitemap {
  const postDates = new Map(publishedPosts.map((post) => [post.href, post.modified ?? post.published]));
  return sitemapPaths.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: new Date(postDates.get(path) ?? (path === "/blog/" ? "2026-07-15" : "2026-07-11")),
    changeFrequency: path === "/" || path === "/blog/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path.includes("policy") || path.includes("terms") || path.includes("accessibility") ? 0.7 : 0.8,
  }));
}
