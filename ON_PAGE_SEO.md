# Universal On-Page SEO Implementation Standard

> **Purpose:** A framework-agnostic, repository-ready standard for planning, building, auditing, and maintaining search-friendly webpages.
>
> **Applies to:** Static sites, WordPress, Next.js, React, Vue, Nuxt, SvelteKit, ecommerce stores, SaaS sites, local-business sites, directories, blogs, tools, calculators, portfolios, and documentation sites.
>
> **Last reviewed:** July 14, 2026

---

## 1. How to Use This File

Use this document as the default SEO acceptance standard for every public page.

When implementing it in an existing repository:

1. Inspect the framework, routing, metadata system, rendering mode, site configuration, sitemap, robots rules, structured data, analytics, and existing SEO components before changing code.
2. Reuse and improve the current architecture instead of creating duplicate metadata systems.
3. Centralize site-wide values such as site name, canonical origin, default description, default social image, organization details, author details, locale, and contact information.
4. Preserve working URLs unless a change is necessary. When a public URL changes, add a direct permanent redirect from the old URL to the most relevant new URL.
5. Never add `noindex`, block crawling, remove canonical tags, or exclude a useful public page from the sitemap without a clear page-level reason.
6. Do not weaken design, accessibility, usability, security, analytics, or application functionality while implementing SEO.
7. Apply the universal rules first, then the relevant page-type module.
8. Run the release checklist before deployment and verify the rendered production HTML after deployment.

### Priority Levels

- **P0 — Blocking:** The page should not be released until fixed.
- **P1 — Required:** Implement for every relevant indexable page.
- **P2 — Recommended:** Implement unless the page or platform provides a valid reason not to.
- **P3 — Optional:** Use when it materially improves the page or search appearance.

---

## 2. Core Principles

### 2.1 Help the User First

- Answer the page's main question or satisfy its primary task early.
- Match the real search intent: informational, navigational, commercial, transactional, local, or mixed.
- Create the page for an identifiable audience and purpose, not merely to capture search traffic.
- Make the result complete enough that the user does not need to repeat the same search.
- Keep the page focused. Do not combine unrelated intents simply to target more keywords.

### 2.2 Be Accurate, Original, and Useful

- Verify factual claims against reliable sources.
- Add original value through first-hand experience, expert analysis, examples, calculations, data, comparisons, screenshots, testing, templates, or tools.
- Do not publish lightly reworded competitor content or generic summaries that add no value.
- Do not invent statistics, quotations, credentials, reviews, test results, dates, or sources.
- Do not change a visible or structured-data update date unless the main content was meaningfully updated.
- For health, finance, legal, safety, civic, and other high-impact topics, use qualified review and especially strong sourcing.

### 2.3 Optimize Topics, Not Repetition

- Define one primary topic and intent for each indexable page.
- Use the main query naturally in important locations when it fits.
- Cover closely related entities, attributes, questions, comparisons, and subtopics needed to satisfy the intent.
- Use synonyms and natural language instead of repeating an exact phrase mechanically.
- Never set a keyword-density target.
- Never add hidden, tiny, off-screen, or visually disguised keyword text.

### 2.4 Make Important Content Easy to Find and Parse

- Put meaningful content in crawlable HTML.
- Use semantic page structure and descriptive links.
- Ensure the mobile version contains the same primary content, metadata, structured data, and important links as desktop.
- Avoid making essential content available only after an interaction, login, client-side error-prone request, or unsupported script execution.

### 2.5 Treat AI Search as an Extension of Good SEO

- Do not create a separate layer of gimmicks for AI visibility.
- Use clear headings, direct answers, well-scoped sections, accurate facts, descriptive links, useful tables, and machine-readable structured data.
- Make claims easy to attribute by showing authorship, dates, sources, methodology, and organizational identity where relevant.
- A page must still be crawlable, indexable, useful, and eligible for normal search results.

---

## 3. Page Planning Requirements

Before creating or substantially rewriting an indexable page, define:

```md
Primary page purpose:
Target audience:
Primary search intent:
Primary topic/query:
Important secondary topics:
User's main question or task:
Unique value this page provides:
Desired next action:
Page type:
Canonical URL:
Indexing decision:
Evidence or sources required:
Relevant internal pages to link from:
Relevant internal pages to link to:
Required structured data type:
```

### P0 Planning Checks

- [ ] The page has a clear purpose distinct from existing pages.
- [ ] It does not substantially duplicate another indexable URL.
- [ ] The proposed content can satisfy the identified intent.
- [ ] The site has a credible reason to publish the page.
- [ ] The page will provide real standalone value.

### Keyword and SERP Research

Research is required for pages intended to gain search traffic.

- Identify the vocabulary real users use.
- Review current search results to understand dominant intent, content format, depth, freshness, SERP features, and unanswered needs.
- Review competing pages for coverage gaps, not for text to imitate.
- Note whether users expect a tool, product page, local page, guide, comparison, table, video, images, calculator, definition, or quick answer.
- Map one primary intent to one primary page whenever practical.
- Prevent keyword cannibalization by merging, differentiating, redirecting, or re-targeting overlapping pages.

---

## 4. Crawlability, Indexability, and HTTP Requirements

### P0 Requirements

- [ ] The canonical page returns a successful `200` HTTP status.
- [ ] The page is accessible without authentication if it is intended for public search.
- [ ] The page is not accidentally blocked in `robots.txt`.
- [ ] The page does not contain an unintended `noindex` directive.
- [ ] Required CSS, JavaScript, images, and API resources are crawlable where blocking them would prevent correct rendering.
- [ ] Important content is present in the rendered HTML and does not depend on a failed client-only request.
- [ ] Soft-404 pages are not returned as successful indexable pages.
- [ ] Removed pages return an appropriate `404` or `410`, or redirect to a genuinely equivalent replacement.

### Indexing Rules

Use `index` for useful, canonical, public pages that provide unique value.

Consider `noindex` for pages such as:

- Private account, cart, checkout, internal search, staging, preview, test, or admin pages.
- Thin filter combinations or generated URLs with no independent search value.
- Duplicate utility states that should remain available to users but not appear in search.
- Temporary campaign variants when a canonical consolidation is not appropriate.

Do not use `robots.txt` as a substitute for `noindex`. A crawler must be able to access a page to see its `noindex` directive.

### Redirect Rules

- Use server-side `301` or `308` redirects for permanent URL changes.
- Redirect directly to the final destination; avoid chains and loops.
- Redirect to the closest equivalent page, not automatically to the homepage.
- Update internal links, canonicals, hreflang annotations, structured data, and sitemaps to the final URL.
- Do not redirect irrelevant expired pages merely to retain signals.

---

## 5. URL Standards

### P1 Requirements

- [ ] Use one stable preferred URL for each piece of content.
- [ ] Use lowercase URLs unless the platform has a valid case-sensitive requirement.
- [ ] Use readable, descriptive words.
- [ ] Separate words with hyphens.
- [ ] Keep the path as simple as the information architecture allows.
- [ ] Avoid unnecessary parameters, session IDs, tracking IDs, and duplicate route variants.
- [ ] Avoid dates in evergreen URLs unless the date is essential to the content type.
- [ ] Avoid changing established URLs merely to make them slightly shorter.

### Good Examples

```text
https://example.com/guides/on-page-seo/
https://example.com/products/blue-running-shoes/
https://example.com/calculators/mortgage-payment/
https://example.com/locations/austin-roof-repair/
```

### Poor Examples

```text
https://example.com/page?id=82736&session=abc
https://example.com/Best_On_Page_SEO_Tips_2026_FINAL/
https://example.com/blog/seo/on-page-seo-on-page-seo-guide/
```

---

## 6. Canonical URL Requirements

### P0/P1 Requirements

- [ ] Every indexable page has one absolute canonical URL.
- [ ] The preferred page normally uses a self-referencing canonical.
- [ ] Duplicate or near-duplicate variants point to the preferred canonical when consolidation is appropriate.
- [ ] Internal links point to canonical URLs.
- [ ] XML sitemaps contain canonical URLs only.
- [ ] Canonical URLs return `200`, are indexable, and are not blocked.
- [ ] Canonicals are consistent across HTML, HTTP headers, sitemaps, hreflang, redirects, and structured data.
- [ ] Client-side JavaScript does not overwrite a correct server-rendered canonical.

### Do Not

- Canonicalize unrelated pages to a stronger page.
- Use a URL fragment as the canonical.
- Canonicalize all paginated pages to page one when the later pages contain distinct items users need.
- Combine `noindex` and canonical as a routine duplicate-management strategy.
- Put noncanonical tracking or filter URLs in the XML sitemap.

---

## 7. Title Element

Each indexable page must have a unique, accurate `<title>` element.

### P1 Requirements

- [ ] Describes the page clearly and specifically.
- [ ] Reflects the visible main heading and actual content.
- [ ] Includes the primary topic naturally, preferably near the beginning when readable.
- [ ] Differentiates the page from other pages on the site.
- [ ] Uses the brand name only when useful and avoids repetitive boilerplate.
- [ ] Avoids keyword lists, exaggerated claims, all caps, and misleading clickbait.
- [ ] Remains understandable when truncated in a search result.

### Length Guidance

Google does not set a fixed character limit. Search results truncate titles according to device width. Use roughly 50–60 characters only as an editorial guardrail, not as a ranking rule. A longer title is acceptable when every word is useful.

### Patterns

```text
Primary Topic: Specific Benefit or Detail | Brand
Product Name – Key Attribute | Brand
Service in Location | Brand
Tool Name – Free Online Calculator | Brand
Article Question Answered Clearly | Brand
```

Avoid automatically appending the same long suffix to every page.

---

## 8. Meta Description

Every important indexable page should have a unique, useful meta description.

### P1 Requirements

- [ ] Accurately summarizes the page.
- [ ] Explains what the user can learn, compare, calculate, buy, or do.
- [ ] Matches the page's search intent.
- [ ] Includes the primary topic naturally when useful.
- [ ] Uses concrete details instead of generic marketing language.
- [ ] Does not repeat the title word for word.
- [ ] Does not include claims unsupported by the page.

Google may generate a different snippet from page content. There is no fixed official character limit. Keep the description concise and complete; test likely display on mobile and desktop rather than treating a character count as a hard rule.

### Avoid

```text
Welcome to our website. We offer the best solutions. Click here to learn more.
keyword one, keyword two, keyword three, cheap keyword, best keyword
```

---

## 9. Main Heading and Semantic Structure

### P1 Requirements

- [ ] Use one clearly dominant page heading, normally an `<h1>`.
- [ ] The H1 accurately states the page's subject or task.
- [ ] The H1 and title are aligned but do not need to be identical.
- [ ] Use H2 sections for major subtopics and H3 sections within an H2 where needed.
- [ ] Do not choose heading levels for visual size alone.
- [ ] Do not use headings for navigation labels, card titles, or decorative text when normal elements are more appropriate.
- [ ] Do not skip levels without a structural reason.
- [ ] Make section headings descriptive enough to understand out of context.

### Recommended Page Outline

```html
<main>
  <article>
    <h1>Clear Main Page Topic</h1>
    <p>Direct answer or value statement.</p>

    <h2>Major Subtopic</h2>
    <p>...</p>

    <h3>Supporting Detail</h3>
    <p>...</p>
  </article>
</main>
```

A site logo or brand name should not compete visually with the page's main heading.

---

## 10. Content Quality Standard

### 10.1 Answer First

- Provide the essential answer, result, definition, recommendation, or action near the beginning.
- Follow with reasoning, steps, context, evidence, limitations, and examples.
- Do not force users through a long generic introduction before addressing their need.

### 10.2 Satisfy the Full Intent

Include only the sections necessary to complete the task, which may include:

- Definitions and plain-language explanations.
- Steps or instructions.
- Examples and worked calculations.
- Comparisons and decision criteria.
- Requirements, limitations, costs, or eligibility.
- Common mistakes and how to avoid them.
- Troubleshooting when problems are predictable.
- Clear next steps.

### 10.3 Demonstrate Experience and Trust

Use relevant trust signals, not decorative E-E-A-T claims.

- Name the real author or responsible organization.
- Link author names to useful profile pages when authorship matters.
- State credentials, role, direct experience, methodology, testing process, or review process where relevant.
- Cite primary and authoritative sources close to claims.
- Show publication and meaningful update dates on time-sensitive content.
- Provide clear About, Contact, Editorial Policy, Privacy, Terms, and relevant disclosure pages.
- Correct errors transparently.
- Distinguish facts, estimates, opinions, and assumptions.

### 10.4 Factual and Editorial Rules

- Verify names, numbers, dates, prices, laws, specifications, and quotations.
- Prefer primary sources: official documentation, laws, government data, original research, manufacturer documentation, and direct datasets.
- Use secondary expert sources for interpretation and comparison.
- Avoid unsupported superlatives such as “best,” “most accurate,” or “guaranteed.”
- Label estimates and explain the assumptions or methodology.
- Include important limitations that could change a user's decision.
- Do not add a fake author, reviewer, address, award, testimonial, or experience claim.

### 10.5 Readability

- Use natural language and active voice.
- Keep paragraphs focused and reasonably short.
- Use lists only when they improve scanning.
- Use tables for genuine comparison or structured data, not as decoration.
- Explain technical terms on first use.
- Use bold text selectively for key takeaways, not entire paragraphs.
- Add a table of contents only when the page is long enough to benefit.
- Ensure anchor links work and use stable section IDs.

### 10.6 No Arbitrary Word Count

Write enough to satisfy the intent completely and no more. Do not pad a page to meet a word-count target.

---

## 11. Keyword and Topical Placement

### P1 Guidelines

Use the primary topic naturally in relevant locations:

- Title element.
- Visible H1.
- URL slug when creating a new URL.
- Opening content where it reads naturally.
- One or more descriptive subheadings when relevant.
- Image alt text only when the image itself depicts the topic.
- Internal anchor text where it accurately describes the destination.
- Meta description when useful.

Also cover:

- Important synonyms and terminology.
- Related entities, attributes, components, and use cases.
- Questions users must answer to complete the task.
- Relevant comparisons, alternatives, and edge cases.

### Prohibited Practices

- Exact-match repetition for density.
- Multiple near-identical headings targeting keyword variations.
- Keyword lists in footers or sidebars.
- City or service-name swapping that creates thin doorway pages.
- Hidden SEO paragraphs.
- Unnatural internal anchors repeated site-wide.

---

## 12. Internal Linking

Internal links help users navigate, distribute discovery paths, and clarify relationships among pages.

### P1 Requirements

- [ ] Every important indexable page is reachable through normal crawlable links.
- [ ] New pages receive links from relevant existing pages.
- [ ] Each page links to useful supporting or parent pages where appropriate.
- [ ] Use standard `<a href="...">` links for important navigation.
- [ ] Anchor text describes the destination.
- [ ] Links are placed where users are likely to need them.
- [ ] Internal links point to final canonical URLs and do not pass through redirects.
- [ ] Broken links are fixed before release.
- [ ] Orphan pages are identified and resolved.

### Anchor Text Examples

Good:

```html
<a href="/guides/image-seo/">image SEO best practices</a>
```

Weak:

```html
<a href="/guides/image-seo/">click here</a>
```

Avoid forcing an exact-match keyword into every anchor. Use natural, varied, accurate language.

### Architecture Guidance

- Keep important pages within a sensible click path from the homepage or a strong hub page.
- Use hub-and-cluster relationships where topics have multiple supporting pages.
- Provide breadcrumbs on hierarchical sites.
- Link from high-traffic evergreen pages to relevant new content when useful.
- Do not create massive blocks of context-free footer links.

---

## 13. External Links and Citations

### P1/P2 Requirements

- Link to reliable external sources when they substantiate claims or help the user.
- Prefer the original source of a fact.
- Use descriptive anchor text.
- Ensure cited pages actually support the nearby statement.
- Periodically check important external links for changes or removal.
- Open links in the same tab by default unless product requirements call for a new tab.
- If using `target="_blank"`, include the appropriate security relationship such as `rel="noopener"` where the framework does not handle it.

### Link Qualification

- Normal editorial links do not require `nofollow`.
- Use `rel="sponsored"` for paid, sponsored, or compensated links.
- Use `rel="ugc"` for untrusted user-generated links.
- Use `rel="nofollow"` when the relationship cannot be expressed better or when you do not want to associate the site with the destination.

Do not sell followed links or hide sponsored relationships.

---

## 14. Image SEO

### P1 Requirements

- [ ] Use images that materially support the page.
- [ ] Use standard HTML `<img>` or `<picture>` elements for images that search engines should discover.
- [ ] Provide a valid fallback `src` when using `srcset` or `<picture>`.
- [ ] Use descriptive, stable filenames.
- [ ] Write concise alt text that describes the image's content and purpose.
- [ ] Use empty `alt=""` for purely decorative images.
- [ ] Do not stuff keywords into alt text.
- [ ] Place important images near relevant text.
- [ ] Set intrinsic `width` and `height` or reserve aspect-ratio space to reduce layout shift.
- [ ] Serve responsive sizes.
- [ ] Compress images without visibly damaging quality.
- [ ] Use modern supported formats such as WebP or AVIF where appropriate, with fallbacks when needed.
- [ ] Lazy-load below-the-fold images, but do not lazy-load the likely LCP image.
- [ ] Ensure indexable image URLs are not blocked.

### Alt Text Examples

Good:

```html
<img src="blue-running-shoe-side.webp"
     alt="Side view of the blue trail running shoe showing its lugged sole">
```

Decorative:

```html
<img src="purple-divider.svg" alt="">
```

Poor:

```html
<img src="IMG_8273.jpg"
     alt="best blue shoes cheap blue shoes running shoes blue shoe sale">
```

### Social and Discover Images

For important shareable pages:

- Use a clear, relevant social preview image.
- Avoid tiny text and crowded layouts.
- Keep the principal subject visible when cropped.
- Use high-resolution images for article and Discover eligibility where relevant.
- Keep image URLs stable.

---

## 15. Video and Embedded Media

Apply when video or interactive media is a meaningful part of the page.

- Provide descriptive visible text around the media.
- Include a useful title, description, thumbnail, and transcript or equivalent text when practical.
- Avoid making the page's only useful information inaccessible inside a video.
- Do not autoplay intrusive audio.
- Reserve dimensions to prevent layout shift.
- Lazy-load heavy embeds where possible.
- Use `VideoObject` structured data only when the marked video is visible and the properties are accurate.
- Ensure thumbnail and video URLs can be crawled when search visibility is desired.

---

## 16. Structured Data

Structured data should describe visible page content accurately. It does not replace useful content and does not guarantee a rich result.

### P1/P2 Requirements

- [ ] Use JSON-LD unless the platform has a justified alternative.
- [ ] Use the most specific valid type supported for the page.
- [ ] Include all required properties and useful recommended properties.
- [ ] Match visible names, prices, ratings, dates, availability, authors, images, and other claims exactly.
- [ ] Do not mark up hidden, misleading, fabricated, or irrelevant information.
- [ ] Use absolute canonical URLs.
- [ ] Validate with Google's Rich Results Test when the type is supported.
- [ ] Validate general Schema.org syntax with Schema Markup Validator.
- [ ] Monitor Search Console enhancement reports after deployment.

### Recommended Site-Level Types

| Page | Typical Schema |
|---|---|
| Homepage | `Organization` or the most accurate subtype, plus `WebSite` |
| Hierarchical internal pages | `BreadcrumbList` |
| Blog or editorial article | `Article`, `BlogPosting`, or `NewsArticle` |
| Product page | `Product` and applicable offer/merchant properties |
| Local business page | Specific `LocalBusiness` subtype |
| Recipe | `Recipe` |
| Software/tool page | `SoftwareApplication` or another accurate supported type when applicable |
| Video page | `VideoObject` |
| Event page | `Event` |
| Job page | `JobPosting` |
| Course page | Supported course types where applicable |

### Important Limitations

- Do not add schema merely because a type exists on Schema.org; confirm it accurately describes the page and, when rich-result eligibility is the goal, that Google currently supports it.
- Do not use self-serving review markup for a business or organization to manufacture stars.
- FAQ content may still be useful to users, but FAQ rich results are generally limited to well-known authoritative government and health sites. Do not promise FAQ rich results to ordinary sites.
- Avoid unsupported or deprecated rich-result strategies.

### Generic Article JSON-LD Example

Replace all placeholders with real visible values.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.com/guides/example-article/"
  },
  "headline": "Example Article Headline",
  "description": "Accurate summary of the article.",
  "image": [
    "https://example.com/images/example-article-1200x675.jpg"
  ],
  "datePublished": "2026-07-01T09:00:00+00:00",
  "dateModified": "2026-07-10T12:30:00+00:00",
  "author": {
    "@type": "Person",
    "name": "Real Author Name",
    "url": "https://example.com/authors/real-author/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Example Brand",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/images/logo.png"
    }
  }
}
</script>
```

---

## 17. Essential Head Metadata Template

Adapt this to the framework's official metadata API. Do not inject duplicate tags.

```html
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Specific Page Title | Brand</title>
  <meta name="description" content="Accurate, page-specific description.">
  <link rel="canonical" href="https://example.com/canonical-page/">

  <!-- Usually omit robots when normal index/follow behavior is intended. -->
  <meta name="robots" content="index,follow,max-image-preview:large">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Specific Page Title">
  <meta property="og:description" content="Accurate social description.">
  <meta property="og:url" content="https://example.com/canonical-page/">
  <meta property="og:image" content="https://example.com/images/social-preview.jpg">
  <meta property="og:site_name" content="Brand">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Specific Page Title">
  <meta name="twitter:description" content="Accurate social description.">
  <meta name="twitter:image" content="https://example.com/images/social-preview.jpg">

  <link rel="icon" href="/favicon.ico" sizes="any">
</head>
```

Open Graph and social card metadata mainly control sharing presentation; they should not be represented as direct ranking factors.

---

## 18. Mobile, Accessibility, and Page Experience

### P0/P1 Mobile Requirements

- [ ] Responsive layout works on common mobile widths.
- [ ] Mobile contains the same primary content and links as desktop.
- [ ] Buttons and links are easy to tap.
- [ ] Text is readable without zooming.
- [ ] No horizontal scrolling for normal content.
- [ ] Sticky banners, ads, cookie notices, and popups do not obscure the main content.
- [ ] Navigation and important functionality work with touch and keyboard.

### Accessibility Requirements

- Use semantic landmarks such as `header`, `nav`, `main`, `article`, `aside`, and `footer` appropriately.
- Associate labels with form controls.
- Provide useful validation and error messages.
- Maintain visible keyboard focus.
- Ensure adequate text/background contrast.
- Do not rely on color alone to communicate meaning.
- Give interactive controls accessible names.
- Use real buttons for actions and links for navigation.
- Set the correct document language.
- Provide captions or transcripts for important media when practical.

Accessibility should be treated as a user requirement even when a specific item is not a direct ranking signal.

### Core Web Vitals Targets

Evaluate real-user performance at the 75th percentile for mobile and desktop where data is available.

| Metric | Good Target |
|---|---:|
| Largest Contentful Paint (LCP) | `≤ 2.5 seconds` |
| Interaction to Next Paint (INP) | `≤ 200 ms` |
| Cumulative Layout Shift (CLS) | `≤ 0.1` |

### Performance Actions

- Optimize the LCP resource and discover it early.
- Avoid unnecessarily large client-side JavaScript bundles.
- Defer noncritical scripts.
- Use server rendering or static generation for public content when appropriate.
- Cache immutable assets with long-lived headers.
- Compress text assets.
- Preload only genuinely critical resources.
- Use efficient fonts and avoid excessive font variants.
- Reserve space for images, ads, embeds, and dynamic components.
- Break up long main-thread tasks.
- Reduce third-party scripts and audit their cost.
- Do not sacrifice content or functionality solely to chase a perfect lab score.

---

## 19. JavaScript and Rendering Requirements

Apply to React, Next.js, Vue, Nuxt, Angular, SvelteKit, and other JavaScript-driven sites.

### P0/P1 Requirements

- [ ] Public page content is available in server-rendered, statically generated, or reliably rendered HTML.
- [ ] Each route can output route-specific title, description, canonical, robots directives, social metadata, and structured data.
- [ ] Metadata is not the same client-side placeholder on every route.
- [ ] Important links use real anchors with resolvable `href` values.
- [ ] Client-side navigation does not prevent direct URL loading.
- [ ] Refreshing a deep route returns the correct page instead of a server 404.
- [ ] Canonical and hreflang tags are stable in source/rendered HTML.
- [ ] Content does not disappear for crawlers because of user-agent checks, viewport checks, consent bugs, or hydration failures.
- [ ] Loading and error states do not become indexable substitutes for the real page.

### Progressive Enhancement

Where practical, the page should retain its central informational value even if nonessential JavaScript fails. Interactive tools may require JavaScript, but explanatory content, labels, examples, and internal links should remain accessible.

---

## 20. XML Sitemap

### P1 Requirements

- [ ] Generate an XML sitemap automatically where practical.
- [ ] Include canonical, indexable, successful URLs only.
- [ ] Exclude redirects, errors, `noindex` pages, duplicate parameters, private routes, and staging URLs.
- [ ] Use the production canonical hostname and protocol consistently.
- [ ] Add accurate `lastmod` values only for meaningful page changes.
- [ ] Split large sitemaps and use a sitemap index when limits require it.
- [ ] Reference the sitemap in `robots.txt`.
- [ ] Submit and monitor it in Google Search Console and relevant webmaster tools.

Example:

```text
Sitemap: https://example.com/sitemap.xml
```

Do not update every URL's `lastmod` on every build unless every page was significantly changed.

---

## 21. Robots.txt

### P1 Requirements

- Keep the file simple and intentional.
- Allow crawling of public content and assets needed to render it.
- Block crawler traps or private technical areas only when appropriate.
- Do not block a page that must be crawled to process a canonical, redirect context, or `noindex` directive.
- Never expose confidential paths and assume robots exclusion makes them private.
- Reference the canonical sitemap location.
- Test production rules after deployment.

Example baseline:

```text
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
```

Add disallow rules only for specific, understood reasons.

---

## 22. International and Multilingual SEO

Apply only when the site has language or regional variants.

### P1 Requirements

- [ ] Use a separate crawlable URL for each language/region version.
- [ ] Translate the full user experience, including navigation, headings, metadata, content, images where needed, and structured data.
- [ ] Set an accurate HTML `lang` attribute.
- [ ] Implement reciprocal `hreflang` annotations.
- [ ] Include a self-referencing hreflang entry.
- [ ] Use valid language and optional region codes.
- [ ] Use `x-default` when an appropriate neutral selector or fallback exists.
- [ ] Canonicalize each localized page to the correct same-language canonical.
- [ ] Do not automatically redirect all users based only on IP or browser language in a way that prevents access to other versions.
- [ ] Provide visible language switching links.

Example:

```html
<link rel="alternate" hreflang="en" href="https://example.com/en/page/">
<link rel="alternate" hreflang="tr" href="https://example.com/tr/page/">
<link rel="alternate" hreflang="pt-BR" href="https://example.com/pt-br/page/">
<link rel="alternate" hreflang="x-default" href="https://example.com/language-selector/">
```

---

## 23. Dates, Authors, and Freshness

### Articles and Time-Sensitive Pages

- Show a visible publication date when relevant.
- Show a visible “Last updated” date only after meaningful changes.
- Use consistent ISO 8601 values in structured data.
- Include timezone information for date-time values.
- Keep visible dates, structured data, and sitemap dates consistent.
- Do not automatically change article dates on every deployment.
- Maintain the original publication date after an update.
- Describe material updates when useful to readers.

### Author Requirements

- Use a real person or responsible organization.
- Link to a substantive author page when individual expertise matters.
- Include accurate author identity in structured data.
- List all authors who are visibly credited.
- Do not use generic fake identities created only to appear trustworthy.

---

## 24. Page-Type Modules

Apply the universal requirements plus the relevant module below.

### 24.1 Homepage

- Clearly state what the site, business, product, or tool does.
- Use a specific H1, not vague wording such as “Welcome.”
- Link to the most important categories, services, products, tools, or resources.
- Establish the brand/entity with consistent name, logo, contact, and organization details.
- Use `Organization` or the most accurate subtype and `WebSite` structured data where appropriate.
- Avoid turning the homepage into a list of every target keyword.

### 24.2 Blog or Editorial Article

- Answer the main query early.
- Show real author, publication date, and meaningful updated date.
- Cite sources close to factual claims.
- Add original examples, analysis, testing, images, or data.
- Link to related guides and relevant hub pages.
- Use `Article`, `BlogPosting`, or `NewsArticle` structured data.
- Use a representative, crawlable article image.
- Avoid repeated article templates that make every post structurally identical.

### 24.3 Product Page

- Use a unique product title and description.
- Include actual specifications, variants, price, availability, shipping, returns, and compatibility where applicable.
- Use original or useful images with descriptive alt text.
- Include authentic reviews and questions only when available.
- Handle unavailable products deliberately: retain useful pages, suggest alternatives, or retire them based on demand and replacement status.
- Use valid `Product` and offer/merchant structured data that matches visible information.
- Do not copy manufacturer text without adding useful value.

### 24.4 Category or Collection Page

- Provide a clear category heading and useful introduction.
- Make products/items crawlable through HTML links.
- Offer filters for users without generating unlimited indexable combinations.
- Add unique category guidance, selection criteria, or comparison value.
- Handle pagination consistently.
- Avoid indexable empty categories.
- Use self-canonical pages unless a genuine duplicate exists.

### 24.5 Service Page

- Define the service, audience, process, deliverables, limitations, and next step.
- Include evidence such as real projects, methodology, qualifications, or service-specific FAQs.
- Link to closely related services and supporting guides.
- Avoid near-duplicate service pages made by swapping one keyword.
- Use accurate service/business structured data where supported and relevant.

### 24.6 Local Landing Page

- Provide real location-specific value: service area, address where applicable, local process, staff, regulations, examples, directions, availability, and contact details.
- Keep business name, address, and phone consistent where they are publicly used.
- Embed or link useful map/location information where appropriate.
- Use a specific `LocalBusiness` subtype when accurate.
- Do not mass-produce thin city pages with only place names changed.

### 24.7 Tool or Calculator Page

- Place the functioning tool near the top.
- Explain inputs, outputs, assumptions, formulas, limitations, privacy, and examples.
- Provide crawlable explanatory content even if the tool requires JavaScript.
- Use clear form labels, validation, and units.
- Make generated results understandable and shareable where appropriate.
- Do not claim precision beyond the data or method.
- Link to supporting guides and related tools.
- Use an accurate software/application schema type only when it genuinely applies.

### 24.8 SaaS or Feature Page

- State the problem solved and user outcome clearly.
- Show how the feature works with concrete steps or screenshots.
- Explain integrations, requirements, limitations, security, and pricing context where relevant.
- Differentiate each feature page from the main product page.
- Link features into coherent use-case and documentation clusters.

### 24.9 Comparison Page

- Define the comparison criteria and audience.
- Use current, sourced facts.
- Disclose affiliations and methodology.
- Compare strengths, weaknesses, ideal use cases, costs, and limitations fairly.
- Avoid declaring a winner without explaining the criteria.
- Update when product details change.

### 24.10 About, Contact, and Trust Pages

- Use real organization and contact information.
- Explain ownership, purpose, expertise, editorial process, and corrections where relevant.
- Make contact methods functional.
- Keep these pages indexable when they provide public trust value.
- Do not add thin, duplicated legal or trust pages merely to appear compliant.

---

## 25. Duplicate Content, Filters, Pagination, and Site Search

### Duplicate Content

- Choose a preferred URL.
- Consolidate signals with redirects or canonicals when pages are true duplicates.
- Rewrite pages that need independent value.
- Avoid publishing print, tracking, uppercase, trailing-slash, protocol, hostname, or parameter duplicates.

### Faceted Navigation and Filters

- Decide which filter combinations have real search demand and standalone value.
- Keep valuable combinations crawlable, indexable, unique, internally linked, and included in sitemaps.
- Prevent unlimited low-value combinations from becoming crawlable/indexable.
- Use consistent parameter ordering.
- Avoid crawl traps created by calendars, sort orders, session states, and endless filter combinations.

### Pagination

- Give each page a unique crawlable URL.
- Use crawlable next/previous links.
- Allow each page to self-canonicalize when it contains distinct items.
- Avoid infinite scroll as the only discovery method; provide paginated URLs or equivalent crawlable links.
- Keep key category context available across paginated pages when useful.

### Internal Search Results

Internal search result pages are usually not suitable for indexing unless deliberately designed as valuable landing pages. Avoid allowing unlimited user-generated search URLs into the index.

---

## 26. Search Appearance and Brand Assets

### Site Name and Identity

- Use one consistent concise site/brand name.
- Keep organization name, logo, social profiles, and contact identity consistent.
- Add accurate organization structured data on the homepage.
- Avoid multiple conflicting site names in titles, logos, headings, and structured data.

### Favicon

- Use a stable square favicon URL.
- Use at least the minimum supported size and preferably a high-quality size above `48 × 48` pixels.
- Ensure the favicon can be crawled.
- Do not change the favicon URL unnecessarily.

### Social Previews

- Provide page-specific Open Graph title, description, URL, and image for important pages.
- Use a large-image Twitter/X card when appropriate.
- Validate previews on major platforms.
- Do not let social metadata contradict the canonical page content.

---

## 27. Ads, Popups, Affiliate Content, and Monetization

- Keep the main content easy to identify and access.
- Avoid intrusive interstitials that obscure content, especially on mobile.
- Do not place so many ads above the fold that the user must search for the answer.
- Reserve ad dimensions to reduce layout shift.
- Clearly distinguish advertisements and sponsored content.
- Disclose affiliate relationships.
- Add original evaluation and value to affiliate pages; do not publish thin product summaries.
- Qualify paid links with `rel="sponsored"` or an appropriate alternative.
- Do not make navigation deceptive or use false download buttons.

---

## 28. Security and Trust Basics

- Serve the entire site over HTTPS.
- Redirect HTTP and nonpreferred hostname variants to the canonical HTTPS hostname.
- Avoid mixed content.
- Keep certificates valid.
- Protect forms and user data.
- Publish clear privacy and data-handling information when collecting information.
- For upload tools, explain what is uploaded, processed, stored, or deleted.
- Do not expose secrets, private files, staging content, or personal data to crawlers.

---

## 29. Repository Architecture Recommendations

Use the framework's conventions, but aim for one source of truth.

### Suggested Central Configuration

```ts
export const siteConfig = {
  name: "Example Brand",
  legalName: "Example Company LLC",
  url: "https://example.com",
  defaultTitle: "Example Brand",
  defaultDescription: "Clear default site description.",
  defaultOgImage: "/images/og-default.jpg",
  locale: "en_US",
  language: "en",
  logo: "/images/logo.png",
  contactEmail: "contact@example.com"
};
```

### Recommended Reusable Utilities

- Canonical URL builder.
- Route-level metadata generator.
- Robots directive helper.
- Open Graph/social metadata generator.
- Structured-data serializer with safe escaping.
- Breadcrumb generator.
- Sitemap generator.
- Robots.txt generator.
- Hreflang generator for multilingual sites.
- Image metadata helper.

### Engineering Rules

- Do not hardcode the production domain in many unrelated files.
- Do not generate duplicate `<title>`, canonical, description, or robots tags.
- Escape JSON-LD safely.
- Keep secrets out of client bundles and metadata.
- Add tests for canonical construction, metadata uniqueness, sitemap exclusions, and redirects.
- Fail builds or CI checks for critical SEO regressions where practical.

---

## 30. Automated Quality Checks

Where practical, add automated checks for:

- Missing or duplicate titles.
- Missing or duplicate meta descriptions on priority pages.
- Missing H1 or multiple visually dominant main headings.
- Broken internal links.
- Redirect chains.
- Non-200 sitemap URLs.
- Indexable pages missing canonicals.
- Canonicals pointing to redirects, errors, or `noindex` pages.
- Accidental global `noindex`.
- Production robots blocking public routes.
- Orphan pages.
- Missing image alt attributes.
- Oversized images and JavaScript bundles.
- Invalid structured data.
- Invalid hreflang pairs.
- Empty category pages.
- Staging hostnames in metadata or sitemaps.
- HTTP links on an HTTPS site.

Suggested tools may include framework tests, HTML validators, link checkers, Lighthouse, PageSpeed Insights, Search Console, Rich Results Test, Schema Markup Validator, and a crawler such as Screaming Frog or Sitebulb.

---

## 31. Pre-Publish Page Checklist

### Intent and Content

- [ ] The page has one clear primary purpose and intent.
- [ ] The main answer or task is addressed early.
- [ ] Content is accurate, original, useful, and complete.
- [ ] Important claims are supported by reliable sources.
- [ ] The page provides value beyond current competing pages.
- [ ] The writing is clear, engaging, and free of filler.
- [ ] No invented facts, credentials, reviews, or sources appear.

### Metadata and HTML

- [ ] Unique descriptive title.
- [ ] Unique useful meta description.
- [ ] Correct absolute canonical.
- [ ] Correct robots directive.
- [ ] One clear H1 and logical heading structure.
- [ ] Correct HTML language.
- [ ] Page-specific social metadata.
- [ ] Stable favicon and brand metadata where relevant.

### Links and Media

- [ ] Relevant internal links point in and out.
- [ ] No broken links or redirecting internal links.
- [ ] External claims use trustworthy sources.
- [ ] Sponsored and UGC links are qualified correctly.
- [ ] Images are relevant, compressed, responsive, and correctly described.
- [ ] LCP image is not incorrectly lazy-loaded.

### Technical

- [ ] Returns `200` on the canonical URL.
- [ ] Crawlable and indexable as intended.
- [ ] Important content appears in rendered HTML.
- [ ] Mobile experience is complete.
- [ ] Structured data is accurate and validated.
- [ ] URL appears correctly in the sitemap if indexable.
- [ ] Core Web Vitals and major accessibility issues have been reviewed.

---

## 32. Site-Wide Release Checklist

### P0

- [ ] No accidental site-wide `noindex`.
- [ ] No production-wide crawler block.
- [ ] Canonical hostname uses HTTPS and redirects correctly.
- [ ] Public routes load directly without server 404s.
- [ ] Sitemap and robots.txt are available on production.
- [ ] Staging URLs do not appear in canonical tags, hreflang, structured data, or sitemaps.
- [ ] Critical pages render useful HTML.

### P1

- [ ] Site configuration is centralized.
- [ ] Every important page has unique metadata.
- [ ] Canonicals are consistent.
- [ ] Internal navigation is crawlable.
- [ ] Important pages are not orphaned.
- [ ] Structured data matches visible content.
- [ ] Mobile content matches desktop intent and value.
- [ ] Search Console and analytics are configured where ownership allows.

### P2

- [ ] Social previews are validated.
- [ ] Core Web Vitals are within good targets or have a documented improvement plan.
- [ ] Accessibility checks are complete.
- [ ] Broken-link and metadata scans pass.
- [ ] Page-type-specific modules are implemented.

---

## 33. Post-Launch Monitoring

After launch or a major update:

1. Inspect priority URLs in Google Search Console.
2. Confirm the selected canonical matches the intended canonical.
3. Review indexing and sitemap reports.
4. Monitor enhancement and structured-data errors.
5. Track impressions, clicks, CTR, average position, conversions, and engagement by page and query.
6. Compare mobile and desktop performance.
7. Review real-user Core Web Vitals.
8. Check server logs or crawl data for traps, errors, and wasted crawling on large sites.
9. Revisit pages losing traffic for intent changes, outdated facts, SERP changes, technical regressions, or stronger competing content.
10. Update only when the page can be materially improved; do not change dates or wording merely to simulate freshness.

### Evaluation Windows

Do not judge SEO work only by immediate ranking movement. Confirm technical correctness immediately, then evaluate discovery, indexing, engagement, conversion, and search performance over an appropriate period based on crawl frequency, site authority, demand, and competition.

---

## 34. Common On-Page SEO Mistakes to Prevent

- Publishing multiple pages for the same intent without a differentiation strategy.
- Writing for a keyword instead of solving the user's problem.
- Generic intros that delay the answer.
- Repeating exact keywords unnaturally.
- Duplicate or templated titles and descriptions.
- Using “Home” or “Page” as the title/H1.
- Using headings only for font size.
- Thin city, category, tag, author, product, or AI-generated pages.
- Automatically updating all publication dates.
- Fake author or reviewer profiles.
- Unsupported schema or schema that contradicts visible content.
- Adding FAQ schema to every page expecting rich results.
- Canonicalizing unrelated content.
- Blocking an intended `noindex` URL in robots.txt.
- Putting redirects or noncanonical URLs in sitemaps.
- Relying on client-side metadata only.
- Hiding important content behind tabs that never render in HTML.
- Using CSS background images for important indexable images.
- Lazy-loading the LCP image.
- Site-wide exact-match footer links.
- No-following every external link.
- Indexing internal search and unlimited filter combinations.
- Changing established URLs without redirects.
- Creating doorway pages by swapping locations or keywords.
- Sacrificing usability for keyword placement or ad density.
- Treating a green SEO plugin score as proof that the page is useful.

---

## 35. Definition of Done

A page is SEO-ready when:

1. It has a distinct purpose and satisfies a real user intent.
2. It offers accurate, trustworthy, original value.
3. Search engines can crawl, render, understand, and index the intended canonical URL.
4. Titles, descriptions, headings, links, images, and structured data accurately represent the page.
5. The mobile experience is complete and usable.
6. Performance and accessibility have no unresolved critical issues.
7. The page is integrated into the site's information architecture.
8. The production output passes the relevant pre-publish and release checks.

SEO readiness does not guarantee rankings. It removes avoidable barriers and gives useful content the strongest technically sound presentation.

---

## 36. Primary References

This standard is an original implementation-focused synthesis. Review these sources when platform behavior, rich-result support, or search guidance changes.

### Google Search Central

- Search Essentials: https://developers.google.com/search/docs/essentials
- SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Generative AI content guidance: https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
- AI features and websites: https://developers.google.com/search/docs/appearance/ai-features
- Title links: https://developers.google.com/search/docs/appearance/title-link
- Snippets and meta descriptions: https://developers.google.com/search/docs/appearance/snippet
- Link best practices: https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- Outbound link qualification: https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links
- URL structure: https://developers.google.com/search/docs/crawling-indexing/url-structure
- Canonical URLs: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Robots meta tags: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- Blocking indexing with noindex: https://developers.google.com/search/docs/crawling-indexing/block-indexing
- Robots.txt: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Sitemaps: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Build and submit a sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Mobile-first indexing: https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing
- JavaScript SEO: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- Image SEO: https://developers.google.com/search/docs/appearance/google-images
- Structured data introduction: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Structured data policies: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Structured data gallery: https://developers.google.com/search/docs/appearance/structured-data/search-gallery
- Breadcrumb structured data: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- Article structured data: https://developers.google.com/search/docs/appearance/structured-data/article
- Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization
- Local business structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Product structured data: https://developers.google.com/search/docs/appearance/structured-data/product
- Publication dates: https://developers.google.com/search/docs/appearance/publication-dates
- Localized versions and hreflang: https://developers.google.com/search/docs/specialty/international/localized-versions
- Favicon requirements: https://developers.google.com/search/docs/appearance/favicon-in-search
- Spam policies: https://developers.google.com/search/docs/essentials/spam-policies
- FAQ and HowTo rich-result changes: https://developers.google.com/search/blog/2023/08/howto-faq-changes

### Web Performance

- Web Vitals: https://web.dev/articles/vitals

### Industry Implementation Guides

- Semrush On-Page SEO Checklist: https://www.semrush.com/blog/on-page-seo-checklist/
- Backlinko On-Page SEO Guide: https://backlinko.com/on-page-seo
- Ahrefs On-Page SEO Guide: https://ahrefs.com/seo/on-page-seo
- Ahrefs On-Page SEO Checklist: https://ahrefs.com/blog/on-page-seo-checklist/

---

## 37. Maintenance Rule

Review this file at least every six months and whenever Google changes Search Essentials, structured-data support, Core Web Vitals, mobile indexing guidance, or major search appearance features.

When updating this standard:

- Prefer official search-engine and web-platform documentation.
- Record the review date.
- Remove deprecated tactics.
- Do not convert third-party tool recommendations into false search-engine requirements.
- Preserve the distinction between mandatory technical eligibility, recommended best practice, editorial convention, and optional enhancement.
