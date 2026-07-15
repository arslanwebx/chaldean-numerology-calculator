import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { articleJson, faqJson } from "@/lib/metadata";
import { AuthorCard } from "./author-card";
import { ContentPage } from "./page";
import { JsonLd } from "./json-ld";

type Faq = { question: string; answer: string };

export function BlogArticle({ title, description, path, published, modified = published, image, imageAlt, sections, faqs, children }: { title: string; description: string; path: string; published: string; modified?: string; image: string; imageAlt: string; sections: { id: string; label: string }[]; faqs: readonly Faq[]; children: ReactNode }) {
  const displayDate = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${published}T00:00:00Z`));
  return <>
    <JsonLd data={[articleJson({ title, description, path, image, published, modified }), faqJson(faqs)]} />
    <ContentPage title={title} intro={description} path={path} sections={sections}>
      <p className="article-details"><span>By <Link href="/author/arslan-ejaz/">Arslan Ejaz</Link></span><span>Published <time dateTime={published}>{displayDate}</time></span></p>
      <figure className="article-featured"><Image src={image} alt={imageAlt} width={1200} height={630} priority sizes="(max-width: 780px) calc(100vw - 1rem), 760px" /></figure>
      {children}
      <h2 id="faq">Frequently asked questions</h2>
      <div className="faq-list">{faqs.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      <AuthorCard />
    </ContentPage>
  </>;
}
