export function JsonLd({ data }: { data: object | object[] }) {
  const value = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: value }} />;
}

export function serializeJsonLd(data: object): string { return JSON.stringify(data).replace(/</g, "\\u003c"); }
