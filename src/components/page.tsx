import Link from "next/link";
import { ReactNode } from "react";
import { JsonLd } from "./json-ld";
import { breadcrumbJson } from "@/lib/metadata";

export function ContentPage({ eyebrow, title, intro, path, children, sections = [] }: { eyebrow: string; title: string; intro: string; path: string; children: ReactNode; sections?: { id: string; label: string }[] }) {
  return <><JsonLd data={[{ "@context": "https://schema.org", "@type": "WebPage", name: title, description: intro }, breadcrumbJson([{ name: "Home", path: "/" }, { name: title, path }])]} /><header className="page-hero"><div className="narrow"><p className="breadcrumbs"><Link href="/">Home</Link> / {title}</p><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{intro}</p></div></header><section className="section"><div className={sections.length ? "container content-layout" : "narrow"}><article className="prose">{children}</article>{sections.length > 0 && <aside className="aside" aria-label="On this page"><strong>On this page</strong>{sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.label}</a>)}</aside>}</div></section></>;
}

export function CalculatorCta() { return <aside className="cta"><h2>See the calculation for your name</h2><p>The free calculator shows every recognized letter, each word subtotal, the compound number, and the final root.</p><Link href="/#calculator">Use the Chaldean calculator</Link></aside>; }
