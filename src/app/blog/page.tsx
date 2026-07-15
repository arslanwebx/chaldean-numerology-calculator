import Image from "next/image";
import Link from "next/link";
import { ContentPage } from "@/components/page";
import { publishedPosts } from "@/content/posts";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Chaldean Numerology Guides and Articles",
  "Read practical guides to Chaldean numerology for beginners, calculation rules, the letter chart, number meanings, and method differences.",
  "/blog/",
);

export default function Page() {
  return <ContentPage title="Chaldean Numerology Guides" intro="Explore practical, source-aware guides that show the arithmetic, explain where traditions differ, and keep interpretation separate from scientific claims." path="/blog/" sections={[{ id: "latest-guides", label: "Latest guides" }]}>
    <h2 id="latest-guides">Latest guides</h2>
    <div className="blog-grid">{publishedPosts.map((post) => <article className="blog-card" key={post.href}>
      {post.featuredImage && post.featuredImageAlt
        ? <Image className="blog-card-image" src={post.featuredImage} alt={post.featuredImageAlt} width={1200} height={630} sizes="(max-width: 600px) calc(100vw - 2rem), (max-width: 800px) 50vw, 33vw" />
        : <div className="blog-card-visual" aria-hidden="true">{post.mark}</div>}
      <div className="blog-card-body">
        <p className="blog-meta">{post.category} · By {post.author}</p>
        <h2><Link href={post.href}>{post.title}</Link></h2>
        <p>{post.description}</p>
        <p className="post-link"><Link href={post.href}>Read the complete guide <span aria-hidden="true">→</span></Link></p>
      </div>
    </article>)}</div>
  </ContentPage>;
}
