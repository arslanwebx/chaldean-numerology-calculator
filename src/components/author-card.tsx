import { JsonLd } from "./json-ld";
import Link from "next/link";

export function AuthorCard() {
  const bio = "Arslan Ejaz founded ChaldeanNumerology.online to make name-number calculations transparent, privacy-conscious, and easier to examine. As content editor, he documents the exact method behind each result, reviews historical and technical sources, and keeps interpretive traditions clearly separated from scientific or professional claims.";
  return <><JsonLd data={{ "@context": "https://schema.org", "@type": "Person", name: "Arslan Ejaz", url: "/author/arslan-ejaz/", jobTitle: "Founder and Content Editor", worksFor: { "@type": "Organization", name: "ChaldeanNumerology.online" } }} /><aside className="author-card" aria-labelledby="author-name"><Link className="author-mark" href="/author/arslan-ejaz/" aria-label="Read Arslan Ejaz's author profile">AE</Link><div><p className="eyebrow">Written and reviewed by</p><h2 id="author-name"><Link href="/author/arslan-ejaz/">Arslan Ejaz</Link></h2><p className="author-title">Founder and Content Editor at ChaldeanNumerology.online</p><p>{bio}</p><Link className="author-profile-link" href="/author/arslan-ejaz/">View author profile <span aria-hidden="true">→</span></Link></div></aside></>;
}
