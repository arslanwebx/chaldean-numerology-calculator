import Link from "next/link";
import { ContentPage } from "@/components/page";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Arslan Ejaz, Founder and Content Editor",
  "Learn about Arslan Ejaz, founder and content editor at ChaldeanNumerology.online, his editorial approach, methodology, and published guides.",
  "/author/arslan-ejaz/",
);

const articles = [
  ["The Complete Chaldean Numerology Chart", "/chaldean-numerology-chart/", "A transparent reference for letter values, normalization, punctuation, and worked name calculations."],
  ["Chaldean Number Meanings from 1 to 9", "/numerology-number-meanings/", "A balanced guide to roots, compounds, reflection prompts, and traditional planetary associations."],
  ["Chaldean vs Pythagorean Numerology", "/chaldean-vs-pythagorean-numerology/", "A method-by-method comparison explaining why calculators can return different results."],
] as const;

export default function AuthorPage() {
  return <><JsonLd data={{ "@context": "https://schema.org", "@type": "ProfilePage", mainEntity: { "@type": "Person", name: "Arslan Ejaz", jobTitle: "Founder and Content Editor", email: "admin@chaldeannumerology.online", worksFor: { "@type": "Organization", name: "ChaldeanNumerology.online", url: "https://chaldeannumerology.online" } } }} /><ContentPage eyebrow="Author and editor" title="Arslan Ejaz" intro="Founder and Content Editor at ChaldeanNumerology.online, focused on transparent calculation methods, responsible interpretation, and privacy-conscious educational tools." path="/author/arslan-ejaz/">
    <div className="author-profile-intro"><div className="author-profile-mark" aria-hidden="true">AE</div><div><h2>About Arslan</h2><p>Arslan Ejaz founded ChaldeanNumerology.online to make traditional name-number calculations easier to inspect and understand. He writes and reviews the site's educational content, documents the arithmetic behind every calculator result, and keeps historical or esoteric interpretations clearly separated from scientific, medical, legal, and financial claims.</p></div></div>
    <h2>Editorial approach</h2>
    <p>Arslan prioritizes clarity over mystery. Each guide identifies the chart and reduction rules it uses, explains where terminology differs among schools, and preserves compound totals so readers can verify the result. Sources are reviewed for their actual role, whether historical, encyclopedic, technical, or policy-related, and public explanations are written in original language.</p>
    <h2>Areas of focus</h2>
    <ul><li>Chaldean letter mapping and transparent name calculations</li><li>Compound and root-number interpretation with non-deterministic language</li><li>Differences between Chaldean, Cheiro-style, Pythagorean, and modern practices</li><li>Privacy-first calculator design, accessibility, and responsible content standards</li></ul>
    <h2>Published guides</h2>
    <div className="author-articles">{articles.map(([title, href, description]) => <article key={href}><h3><Link href={href}>{title}</Link></h3><p>{description}</p><Link href={href}>Read guide <span aria-hidden="true">→</span></Link></article>)}</div>
    <h2>Contact and corrections</h2>
    <p>For corrections, methodology questions, or accessibility feedback, email <a href="mailto:admin@chaldeannumerology.online">admin@chaldeannumerology.online</a> or use the <Link href="/contact/">contact form</Link>. Please do not send birth dates, calculator results, or sensitive personal information.</p>
  </ContentPage></>;
}
