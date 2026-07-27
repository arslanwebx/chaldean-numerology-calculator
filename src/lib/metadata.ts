import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function pageMetadata(title: string, description: string, path: string, noIndex = false): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();
  return { title, description, authors: [{ name: "Arslan Ejaz" }], creator: "Arslan Ejaz", publisher: siteConfig.publisher, alternates: { canonical }, robots: noIndex ? { index: false, follow: true } : undefined, openGraph: { title, description, url: canonical, siteName: siteConfig.name, locale: "en_US", type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name}, a browser-based calculation guide` }] }, twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] } };
}

export function articleMetadata({ title, description, path, image, imageAlt, imageWidth = 1200, imageHeight = 630, published, modified = published }: { title: string; description: string; path: string; image: string; imageAlt: string; imageWidth?: number; imageHeight?: number; published: string; modified?: string }): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();
  return {
    title,
    description,
    authors: [{ name: "Arslan Ejaz", url: "/author/arslan-ejaz/" }],
    creator: "Arslan Ejaz",
    publisher: siteConfig.publisher,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "article",
      publishedTime: published,
      modifiedTime: modified,
      authors: ["Arslan Ejaz"],
      images: [{ url: image, width: imageWidth, height: imageHeight, alt: imageAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export function articleJson({ title, description, path, image, published, modified = published }: { title: string; description: string; path: string; image: string; published: string; modified?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [new URL(image, siteConfig.url).toString()],
    datePublished: published,
    dateModified: modified,
    author: { "@type": "Person", name: "Arslan Ejaz", url: new URL("/author/arslan-ejaz/", siteConfig.url).toString() },
    publisher: { "@type": "Person", name: siteConfig.publisher },
    mainEntityOfPage: { "@type": "WebPage", "@id": new URL(path, siteConfig.url).toString() },
  };
}

export function faqJson(faqs: readonly { question: string; answer: string }[]) {
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
}

export function breadcrumbJson(items: { name: string; path: string }[]) { return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: new URL(item.path, siteConfig.url).toString() })) }; }
