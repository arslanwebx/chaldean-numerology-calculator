import Link from "next/link";
import { ReactNode } from "react";
import { JsonLd } from "./json-ld";
import { breadcrumbJson } from "@/lib/metadata";
import { AuthorCard } from "./author-card";

const articleTocs: Record<string, { id: string; label: string }[]> = {
  "/chaldean-numerology-chart/": [
    { id: "chart", label: "The complete 1-to-8 chart" },
    { id: "input", label: "How names are handled" },
    { id: "examples", label: "Worked examples" },
  ],
  "/numerology-number-meanings/": [
    { id: "reading", label: "How to read a compound and root result" },
    { id: "roots", label: "Root meanings 1 through 9" },
    { id: "compounds", label: "Why compound numbers matter" },
    { id: "planets", label: "Traditional planetary associations" },
    { id: "limits", label: "Responsible interpretation" },
  ],
  "/chaldean-vs-pythagorean-numerology/": [
    { id: "compare", label: "The methods side by side" },
    { id: "answers", label: "Why calculators give different answers" },
    { id: "choose", label: "Choosing a method" },
  ],
};

export function ContentPage({ eyebrow, title, intro, path, children }: { eyebrow: string; title: string; intro: string; path: string; children: ReactNode; sections?: { id: string; label: string }[] }) {
  const tocSections = articleTocs[path] ?? [];
  return <><JsonLd data={[{ "@context": "https://schema.org", "@type": "WebPage", name: title, description: intro }, breadcrumbJson([{ name: "Home", path: "/" }, { name: title, path }])]} /><header className="page-hero"><div className="narrow"><p className="breadcrumbs"><Link href="/">Home</Link> / {title}</p><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{intro}</p>{tocSections.length > 0 && <nav className="toc" aria-label="Table of contents"><strong>Contents</strong><ol>{tocSections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.label}</a></li>)}</ol></nav>}</div></header><section className="section"><div className="narrow"><article id="content" className="prose">{children}</article></div></section></>;
}

export function CalculatorCta() { return <><aside className="cta"><h2>See the calculation for your name</h2><p>The free calculator shows every recognized letter, each word subtotal, the compound number, and the final root.</p><Link className="cta-button" href="/#calculator">Use the Chaldean calculator <span aria-hidden="true">→</span></Link></aside><AuthorCard/></>; }
