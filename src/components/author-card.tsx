import { JsonLd } from "./json-ld";

export function AuthorCard() {
  const bio = "Arslan Ejaz founded ChaldeanNumerology.online to make name-number calculations transparent, privacy-conscious, and easier to examine. As content editor, he documents the exact method behind each result, reviews historical and technical sources, and keeps interpretive traditions clearly separated from scientific or professional claims.";
  return <><JsonLd data={{ "@context": "https://schema.org", "@type": "Person", name: "Arslan Ejaz", jobTitle: "Founder and Content Editor", worksFor: { "@type": "Organization", name: "ChaldeanNumerology.online" } }} /><aside className="author-card" aria-labelledby="author-name"><div className="author-mark" aria-hidden="true">AE</div><div><p className="eyebrow">Written and reviewed by</p><h2 id="author-name">Arslan Ejaz</h2><p className="author-title">Founder and Content Editor at ChaldeanNumerology.online</p><p>{bio}</p></div></aside></>;
}
