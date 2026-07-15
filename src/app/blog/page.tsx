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
  return <ContentPage title="Chaldean Numerology Guides" intro="Explore practical, source-aware guides that show the arithmetic, explain where traditions differ, and keep interpretation separate from scientific claims." path="/blog/" sections={[]} variant="archive">
    <div className="blog-section-heading"><div><h2 id="latest-guides">Latest guides</h2><p>Clear explanations, worked examples, and practical references.</p></div><span>{publishedPosts.length} guides</span></div>
    <div className="blog-grid">{publishedPosts.map((post) => <article className="blog-card" key={post.href}>
      <Link className="blog-card-media" href={post.href} tabIndex={-1} aria-hidden="true">
        {post.featuredImage && post.featuredImageAlt
          ? <Image className="blog-card-image" src={post.featuredImage} alt="" width={1200} height={630} sizes="(max-width: 600px) calc(100vw - 1rem), (max-width: 900px) 50vw, 360px" />
          : <div className="blog-card-visual">{post.mark}</div>}
      </Link>
      <div className="blog-card-body">
        <p className="blog-meta"><span>{post.category}</span><time dateTime={post.published}>{new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${post.published}T00:00:00Z`))}</time></p>
        <h2><Link href={post.href}>{post.title}</Link></h2>
        <p>{post.description}</p>
        <p className="post-link"><Link href={post.href}>Read guide <span aria-hidden="true">→</span></Link></p>
      </div>
    </article>)}</div>
  </ContentPage>;
}
