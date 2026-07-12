import Link from "next/link";
import { ReactNode } from "react";
import { JsonLd } from "./json-ld";
import { breadcrumbJson } from "@/lib/metadata";
import { AuthorCard } from "./author-card";

export function ContentPage({ eyebrow, title, intro, path, children, sections = [] }: { eyebrow: string; title: string; intro: string; path: string; children: ReactNode; sections?: { id: string; label: string }[] }) {
  const tocSections = sections.length ? sections : [{ id: "content", label: "Page content" }];
  return <><JsonLd data={[{ "@context": "https://schema.org", "@type": "WebPage", name: title, description: intro }, breadcrumbJson([{ name: "Home", path: "/" }, { name: title, path }])]} /><header className="page-hero"><div className="narrow"><p className="breadcrumbs"><Link href="/">Home</Link> / {title}</p><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{intro}</p><nav className="toc" aria-label="Table of contents"><strong>On this page</strong><div>{tocSections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.label}</a>)}</div></nav></div></header><section className="section"><div className="narrow"><article id="content" className="prose">{children}</article></div></section></>;
}

export function CalculatorCta() { return <><aside className="cta"><h2>See the calculation for your name</h2><p>The free calculator shows every recognized letter, each word subtotal, the compound number, and the final root.</p><Link className="cta-button" href="/#calculator">Use the Chaldean calculator <span aria-hidden="true">→</span></Link></aside><AuthorCard/></>; }
