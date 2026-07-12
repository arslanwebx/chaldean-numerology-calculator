import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function pageMetadata(title: string, description: string, path: string, noIndex = false): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();
  return { title, description, alternates: { canonical }, robots: noIndex ? { index: false, follow: true } : undefined, openGraph: { title, description, url: canonical, siteName: siteConfig.name, type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name}, a browser-based calculation guide` }] }, twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] } };
}

export function breadcrumbJson(items: { name: string; path: string }[]) { return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: new URL(item.path, siteConfig.url).toString() })) }; }
