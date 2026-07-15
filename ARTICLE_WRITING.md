# Universal Article Writing and Editorial SEO Standard

> **Purpose:** A framework-agnostic, repository-ready standard for researching, planning, writing, editing, publishing, and maintaining useful articles that satisfy readers, support topical authority, and follow strong content, on-page SEO, and technical SEO practices.
>
> **Applies to:** Blogs, educational websites, tools and calculators, SaaS sites, ecommerce stores, local-business websites, service websites, publishers, documentation sites, niche websites, affiliate-free informational resources, and multilingual content projects.
>
> **Use with:** `ON_PAGE_SEO.md` and `TECHNICAL_SEO.md`. This file governs article research, editorial quality, content structure, originality, sourcing, media, metadata, and publishing workflow. The other files remain authoritative for broader page-level and technical implementation requirements.
>
> **Last reviewed:** July 14, 2026

---

## 1. How to Use This File

Use this document whenever creating, rewriting, expanding, consolidating, refreshing, or quality-checking an article.

Apply the rules directly to the final publish-ready article. Do not return this checklist as commentary instead of doing the work. Do not add explanatory notes inside the article unless those notes genuinely help the reader.

Before writing:

1. Inspect the website, repository, content system, existing article library, categories, tools, important landing pages, and internal-link architecture.
2. Identify the target audience, primary search intent, main query, supporting subtopics, required evidence, and unique value the article will provide.
3. Check whether an existing page already targets the same or substantially similar intent.
4. Review the current search-results landscape and authoritative sources when the article is intended to attract organic search traffic.
5. Decide the most useful article format and length from the topic rather than from a fixed template.
6. Plan internal links, external evidence, images, metadata, structured data, and technical publishing requirements before drafting.
7. Write the article for people first, then verify that search engines can clearly understand and access it.
8. Run every applicable pre-publication check before deployment.

### Priority Levels

- **P0 — Blocking:** Do not publish until fixed. Includes invented facts, plagiarism, wrong search intent, duplicated target intent, broken rendering, accidental `noindex`, or misleading claims.
- **P1 — Required:** Apply to every relevant article.
- **P2 — Recommended:** Apply unless the topic, format, or platform provides a clear reason not to.
- **P3 — Conditional:** Use when it materially improves comprehension, evidence, discoverability, accessibility, or maintenance.

---

## 2. Editorial Objectives

Every article should accomplish all of the following:

1. Answer a real reader question, task, comparison, concern, or decision.
2. Deliver the core answer early without forcing the reader through a long preamble.
3. Match the dominant search intent and expected content format.
4. Provide original value rather than merely rephrasing information already available elsewhere.
5. Be accurate, current where necessary, transparent, and properly attributed.
6. Be easy to scan while remaining complete and logically connected.
7. Use keywords and entities naturally without keyword stuffing.
8. Fit clearly within the website's existing topic architecture.
9. Link readers to useful related pages and trustworthy evidence.
10. Be technically indexable, accessible, mobile-friendly, and maintainable.
11. Remain enjoyable to read without sacrificing factual precision.
12. Give the reader a satisfying endpoint rather than ending with filler.

An article is not successful merely because it is long, contains a target keyword, passes a grammar checker, or receives an SEO score. It must genuinely solve the intended reader's problem.

---

## 3. Non-Negotiable Content Principles

### 3.1 Answer First, Explain After

- State the answer, conclusion, definition, recommendation criteria, or main steps near the beginning.
- Do not open with generic history, obvious statements, or several paragraphs describing why the topic matters.
- Preserve necessary nuance. A direct answer may be conditional when the facts require conditions.
- After the answer, explain the reasoning, steps, examples, limitations, alternatives, and supporting evidence.
- For complex topics, use a concise answer summary followed by a deeper explanation.

Good opening pattern:

```md
[Direct answer in one or two short paragraphs.]

[Important condition, exception, or context.]

## How it works
...
```

Avoid:

```md
In today's fast-paced digital world, many people are asking...
Since the beginning of time...
Whether you are a beginner or an expert...
In this comprehensive guide, we will dive deep into...
```

### 3.2 Match Real Search Intent

Determine what the reader actually wants to:

- know;
- define;
- calculate;
- fix;
- compare;
- choose;
- verify;
- complete;
- avoid;
- understand;
- plan;
- buy or evaluate, when the article supports a commercial decision without becoming promotional.

Classify the dominant intent:

- **Informational:** explanation, guide, definition, tutorial, troubleshooting, research.
- **Comparative:** differences, alternatives, advantages, disadvantages, decision criteria.
- **Commercial investigation:** features, suitability, pricing factors, reviews, product or service evaluation.
- **Transactional support:** setup, use, download, booking, purchase preparation, configuration.
- **Local:** location-specific rules, costs, services, processes, or recommendations.
- **Navigational:** helping users find a particular page, tool, organization, or resource.
- **Mixed:** multiple closely connected needs that can be satisfied without diluting the page.

Do not force unrelated intents into one article. Create separate pages when users need distinctly different outcomes.

### 3.3 Write for Readers First

- Use natural wording that a knowledgeable person would use with another person.
- Prefer clarity over clever keyword placement.
- Include SEO elements only when they improve meaning, discovery, structure, or accessibility.
- Do not repeat the exact keyword merely to make an optimization tool turn green.
- Do not sacrifice accuracy, grammar, or readability for search-engine assumptions.
- Do not publish text that sounds like it was assembled from keyword variations.

### 3.4 Remain Informational, Balanced, and Non-Promotional

Unless the page is explicitly intended as branded marketing copy:

- avoid sales language;
- avoid unsupported superiority claims;
- avoid excessive calls to action;
- avoid artificial urgency;
- avoid affiliate-style filler;
- avoid repeated product or brand mentions that add no informational value;
- state advantages, disadvantages, tradeoffs, and limitations fairly;
- explain when a tool, product, method, or recommendation is unsuitable.

The article may naturally link to a relevant site tool or service, but the editorial answer must remain useful even if the reader does not convert.

---

## 4. Required Pre-Writing Discovery

Before drafting or substantially rewriting an article, complete the following repository and website review.

### 4.1 Inspect the Existing Website

Review:

- homepage purpose and target intent;
- primary tools, calculators, products, or services;
- category and topic-hub pages;
- existing articles and their primary topics;
- URL conventions;
- metadata implementation;
- author and reviewer information;
- current internal-link patterns;
- media conventions;
- structured-data components;
- article templates;
- sitemap and indexing behavior;
- brand voice and audience;
- dates and freshness conventions;
- existing sources or editorial policies.

Do not create a second content, metadata, schema, or author system when the repository already has one that can be reused or improved.

### 4.2 Article Brief

Create a short brief before writing:

```md
Working title:
Primary topic/query:
Primary search intent:
Secondary intents, if any:
Target audience:
Reader's main question:
Desired reader outcome:
Article type:
Proposed canonical URL:
Existing page overlap:
Unique value:
Required sections:
Optional sections:
Key entities and terminology:
Important facts requiring verification:
Primary authoritative sources:
Internal pages to link to:
Pages that should link to this article:
Required images or diagrams:
Structured-data type:
Freshness or review requirements:
Potential safety, legal, medical, or financial concerns:
```

### 4.3 Content Inventory and Cannibalization Check

Search the website and repository for:

- the exact target query;
- close keyword variants;
- synonyms;
- similar headings;
- related title tags;
- pages answering the same user question;
- tools targeting the same task;
- old, thin, or outdated versions of the subject.

For every overlapping page, decide whether to:

1. keep it because the intent is distinct;
2. differentiate the new article more clearly;
3. update the existing page instead of creating a new one;
4. consolidate multiple weak pages into one stronger page;
5. redirect an obsolete URL after consolidation;
6. use a hub-and-spoke relationship with clearly separated purposes.

### P0 Cannibalization Rules

- [ ] One primary intent should have one clear primary URL whenever practical.
- [ ] Do not publish a new article that substantially duplicates an existing page.
- [ ] Do not create city, product, or keyword-variant pages by changing only a few words.
- [ ] Do not target the homepage and an article at the same exact intent without a deliberate distinction.
- [ ] Do not change an established article's target keyword casually if it already earns relevant traffic or links.

---

## 5. Topic and Search Research

### 5.1 Research Goals

Research must determine:

- what readers are asking;
- what information they need first;
- which facts are stable and which are time-sensitive;
- which content format best satisfies the query;
- which subtopics are necessary for complete coverage;
- which competing pages leave important gaps;
- which claims require primary-source support;
- which examples, calculations, visuals, or demonstrations would add original value;
- whether the topic falls into a high-impact category requiring stronger review.

### 5.2 Search-Results Review

For search-focused articles, review the current result landscape for:

- dominant intent;
- common article formats;
- result freshness;
- result types such as tools, videos, local packs, product results, images, forums, or definitions;
- questions users repeatedly ask;
- terminology used by authoritative sources;
- content gaps and weak explanations;
- conflicting claims that require resolution;
- country, state, city, language, or device context;
- whether the reader expects current prices, laws, schedules, specifications, or statistics.

Competitor pages are useful for understanding expectations and gaps. They are not sources to paraphrase section by section.

### 5.3 Source Hierarchy

Prefer sources in this order when available:

1. Official laws, regulations, government agencies, standards bodies, and public records.
2. Original research papers, datasets, patents, specifications, technical documentation, and product documentation.
3. Recognized professional organizations, universities, hospitals, research institutions, and industry authorities.
4. Direct statements from the relevant company, manufacturer, platform, or organization.
5. High-quality journalism and established specialist publications.
6. Expert commentary with identifiable credentials and transparent methodology.
7. Community reports, forums, or user-generated sources only for clearly labeled experience-based context.

Do not rely on low-quality summaries when the original source is available.

### 5.4 Fact Verification

- Verify important claims using current authoritative evidence.
- Cross-check consequential facts when one source could be incomplete, outdated, biased, or ambiguous.
- Record publication date, effective date, geographic scope, version, and update date when relevant.
- Distinguish between facts, estimates, expert judgment, opinion, and examples.
- Never invent statistics, quotations, research findings, test results, prices, credentials, dates, or expert opinions.
- Do not convert a correlation into causation.
- Do not present a single anecdote as a general rule.
- Do not cite a source for a claim it does not support.
- Do not cite a search-results snippet without checking the underlying source.
- When reliable sources disagree, explain the disagreement rather than hiding it.
- Clearly label approximations, assumptions, and ranges.

### 5.5 Time-Sensitive Topics

Current verification is mandatory for content involving:

- laws and regulations;
- government programs;
- tax rules;
- medical guidance;
- financial products or markets;
- prices and fees;
- software versions and platform features;
- product specifications;
- business leadership;
- schedules and availability;
- sports, entertainment, and news;
- travel requirements;
- safety standards;
- public policies;
- statistics and market data.

Use exact dates where relative wording such as “today,” “currently,” or “recently” could become ambiguous.

### 5.6 Originality and Attribution

- Create original organization, explanations, examples, comparisons, analysis, and wording.
- Do not rewrite a competing article paragraph by paragraph.
- Do not copy headings in the same sequence unless the sequence is inherently required by the task.
- Cite and link to the original creator or authoritative source of a fact, dataset, framework, quotation, image, or methodology.
- Use quotations sparingly and only when the exact wording is important.
- Add original value beyond summarizing cited material.
- Preserve proof of permission or licensing for third-party media.
- Avoid publishing multiple near-identical articles generated from one template.

The Google patent `US8707459B2`, “Determination of originality of content,” may be reviewed as background on originality and authorized versions. Do not mention the patent in the final article merely because this workflow references it. A patent is not proof that a particular mechanism is currently used in ranking, and it must not be represented as such.

---

## 6. Keyword and Entity Strategy

### 6.1 Primary Query

Assign one primary topic or query to the article.

Use it naturally where appropriate in:

- the SEO title;
- the H1;
- the opening section;
- at least one relevant heading when natural;
- the body;
- the URL slug for a new page;
- image filename or alt text only when it accurately describes the image;
- the meta description.

These are placement opportunities, not mechanical repetition requirements.

### 6.2 Related Language

Include useful related:

- synonyms;
- entities;
- attributes;
- components;
- processes;
- comparison factors;
- common problems;
- questions;
- abbreviations and full forms;
- local terminology;
- units and measurements;
- alternative names;
- prerequisite concepts;
- downstream decisions.

Use them because the topic requires them, not to meet a term-count target.

### 6.3 Prohibited Keyword Practices

Never:

- target keyword density percentages;
- repeat the exact phrase unnaturally;
- create awkward headings solely for keyword placement;
- list city or product names with no useful local or product-specific content;
- hide keywords in CSS, alt text, comments, or off-screen elements;
- add irrelevant questions because a keyword tool suggested them;
- use misleading titles that target broader intent than the article fulfills;
- create multiple pages for singular, plural, reordered, or trivial variants of the same intent.

---

## 7. Choosing the Right Article Format

Select structure from the reader's task.

### 7.1 Common Formats

- Direct-answer explainer
- Step-by-step tutorial
- Troubleshooting guide
- Comparison
- Buyer's or decision guide
- Definition and examples
- Cost or pricing guide
- Checklist
- Research summary
- Case study
- Frequently asked questions resource
- Local or jurisdiction-specific guide
- Product, menu item, feature, or specification explainer
- Calculator or tool support guide
- Glossary entry
- News or update analysis
- Opinion or expert commentary, clearly labeled

### 7.2 Format Requirements

- A tutorial should provide ordered, executable steps.
- A comparison should define criteria and show meaningful differences.
- A pricing article should explain date, location, inclusions, exclusions, and variability.
- A troubleshooting article should begin with likely causes or quickest checks.
- A definition article should define the term immediately and show examples.
- A local article should include genuine local rules, context, or data.
- A tool guide should explain inputs, outputs, limitations, privacy, and common errors.
- A research summary should explain methodology and uncertainty.
- A high-impact recommendation should explain when professional advice is needed.

Do not use the same article template for every topic.

---

## 8. Article Structure and Information Order

### 8.1 One Clear H1

- Use one visible H1 for the main article title.
- Make it specific, descriptive, and aligned with intent.
- Do not use the logo, site name, or decorative text as a second H1.
- Avoid title formats that promise more than the article delivers.

### 8.2 Logical Heading Hierarchy

- Use H2 for major sections.
- Use H3 for subsections belonging to the preceding H2.
- Use H4 only when the depth is genuinely necessary.
- Do not skip heading levels merely for visual styling.
- Do not turn every short paragraph into a heading.
- Do not use headings for unrelated fragments.
- Keep headings informative enough to make the article understandable when scanned.

### 8.3 Opening Section

The opening should usually contain:

1. the main answer;
2. the most important condition or qualification;
3. the practical value of the article;
4. an optional brief roadmap only when the topic is complex.

Do not add a generic table of contents to every article. Add one when length and section depth make navigation genuinely useful.

### 8.4 Main Body

Arrange information in the order readers need it:

- answer before background;
- common or critical steps before rare edge cases;
- prerequisites before execution;
- decision criteria before recommendations;
- explanation before exceptions when needed;
- essential warnings near the relevant action, not buried at the end.

### 8.5 Conclusion

A conclusion should do one useful job:

- summarize the decision;
- restate the practical answer;
- provide a final checklist;
- explain the next logical step;
- clarify the most important limitation;
- direct the reader to a genuinely relevant tool or deeper guide.

Do not repeat the introduction in different words. Do not use generic endings such as “Now you know everything you need to know.”

---

## 9. Readability and Style Standard

### 9.1 Paragraphs

- Keep paragraphs short, normally no more than three visual lines in the target layout.
- A paragraph may be longer when breaking it would damage meaning, but long blocks should be uncommon.
- Keep one clear idea per paragraph.
- Use transitions that follow the logic of the subject rather than canned phrases.

### 9.2 Sentences

- Prefer active voice when the actor matters.
- Vary sentence length naturally.
- Use plain language before specialist language.
- Define technical terms on first use.
- Remove throat-clearing, repetition, and vague qualifiers.
- Avoid long dashes. Use periods, commas, parentheses, or colons where appropriate.
- Avoid robotic patterns such as repeated “Moreover,” “Furthermore,” and “Additionally.”
- Avoid excessive rhetorical questions.
- Avoid inflated phrases when a simple verb works.

### 9.3 Lists

Use bullets when they make parallel information easier to scan.

Use numbered lists for:

- ordered steps;
- ranked choices;
- sequences;
- procedures where order matters.

Do not turn every section into bullets. Connective prose is often necessary for explanation and nuance.

### 9.4 Tables

Use a table only when it makes comparison, data, prices, features, requirements, or choices easier to understand.

Every table should:

- have a clear purpose;
- use descriptive headers;
- remain readable on mobile;
- include units and dates where relevant;
- avoid excessive columns;
- not repeat the surrounding text word for word;
- include a brief interpretation when the data could be misunderstood.

Do not use a table merely to appear comprehensive.

### 9.5 Selective Emphasis

- Bold only the phrases readers may need to identify quickly.
- Do not bold entire paragraphs.
- Do not bold every keyword occurrence.
- Use italics sparingly for titles, terms, or subtle emphasis.
- Do not rely on styling alone to communicate meaning.

### 9.6 Interesting and Enjoyable Writing

Keep factual content engaging through:

- relatable examples;
- useful mini-scenarios;
- clear cause-and-effect explanations;
- varied sentence structure;
- smooth transitions;
- concise storytelling where it adds understanding;
- occasional respectful humor when appropriate for the audience and subject.

Humor must never:

- trivialize injury, illness, financial loss, legal problems, grief, discrimination, safety, or other serious subjects;
- distract from the answer;
- become sarcastic toward the reader;
- replace evidence;
- reduce professionalism.

---

## 10. Depth, Length, and Completeness

### 10.1 No Universal Word Count

Choose length according to:

- complexity;
- reader knowledge;
- number of steps;
- evidence requirements;
- expected format;
- competing interpretations;
- safety considerations;
- need for examples, tables, calculations, or images;
- whether the article supports a tool or broader topic hub.

A short article can be complete. A long article can still be thin.

### 10.2 Complete but Lean

Include what the reader needs to:

- understand the answer;
- act correctly;
- compare options;
- avoid common mistakes;
- recognize limitations;
- know when the answer changes;
- find deeper information when necessary.

Remove:

- duplicated explanations;
- generic history unrelated to the decision;
- definitions the audience already knows unless clarification is needed;
- empty introductions;
- multiple sections making the same point;
- irrelevant keyword-driven questions;
- conclusions that restate every heading;
- filler examples;
- fake quotes;
- unsupported predictions.

### 10.3 Useful Supporting Elements

Add when relevant:

- worked examples;
- calculations;
- comparisons;
- checklists;
- common mistakes;
- limitations;
- warnings;
- decision trees;
- expert tips grounded in evidence or genuine experience;
- screenshots;
- diagrams;
- templates;
- downloadable resources;
- troubleshooting steps;
- jurisdiction or version notes.

Do not add every element to every article.

---

## 11. Accuracy, Trust, and E-E-A-T Signals

### 11.1 Accuracy Requirements

- Use specific wording rather than broad unsupported claims.
- Include dates, versions, units, locations, and conditions where they affect accuracy.
- Explain uncertainty instead of hiding it.
- Separate typical ranges from guaranteed outcomes.
- Do not imply first-hand testing unless testing was actually performed.
- Do not call an author an expert without support.
- Do not invent reviewers, credentials, organizations, or editorial processes.
- Correct errors promptly and transparently where appropriate.

### 11.2 Experience

Demonstrate real experience only when available through:

- original photographs;
- screenshots;
- test methodology;
- real calculations;
- case studies;
- observed limitations;
- before-and-after results;
- practical details unlikely to come from superficial summaries.

Do not simulate experience.

### 11.3 Expertise

Show expertise through:

- accurate terminology;
- clear explanations;
- strong source selection;
- correct calculations;
- awareness of edge cases;
- appropriate cautions;
- author or reviewer credentials where genuine and relevant.

### 11.4 Authoritativeness

Support authority with:

- a clear topical focus;
- consistent high-quality coverage;
- original resources;
- citations from recognized sources;
- transparent authorship;
- sensible internal linking;
- editorial standards;
- corrections and update processes.

### 11.5 Trust

Every article should make it easy to understand:

- who wrote or reviewed it;
- when it was published or materially updated;
- which site or organization is responsible;
- how important claims were sourced;
- whether the content contains assumptions, sponsorship, affiliate relationships, or conflicts;
- how readers can report an error;
- whether professional advice may be necessary.

### 11.6 High-Impact Topics

For health, legal, financial, safety, civic, or other high-impact topics:

- use primary and recognized authoritative sources;
- avoid personalized diagnosis or guaranteed outcomes;
- include relevant jurisdiction and date;
- have a qualified reviewer where feasible;
- explain when a licensed professional is needed;
- distinguish education from professional advice;
- review more frequently;
- avoid casual humor that could undermine seriousness.

---

## 12. External Sources and Citations

### 12.1 Default Standard

Support important claims with approximately two to three natural external links to trustworthy sources when that number fits the topic. Use more when the article contains many consequential or disputed claims. Use fewer when one primary source fully supports a narrow factual subject.

Quality matters more than a fixed number.

### 12.2 Link Placement

- Link the source at the point where it supports the claim.
- Use descriptive anchor text.
- Avoid a detached source dump when inline attribution is clearer.
- A references section may be added for research-heavy content, but it should not replace useful inline attribution.
- Link to the original source rather than a secondary article that cites it.
- Do not attach one source to an entire paragraph containing unrelated claims.

### 12.3 Source Integrity

Before publishing, confirm that:

- the URL works;
- the page supports the stated claim;
- the information is current enough;
- the source is authoritative for that subject;
- the anchor text describes the destination;
- quotations are exact and within fair-use and licensing limits;
- paywalled or inaccessible sources are not the only support for essential reader instructions when an accessible source exists.

### 12.4 External Link Attributes

Use ordinary followed links for genuine editorial citations.

Use appropriate attributes when required:

- `rel="sponsored"` for paid or compensated links;
- `rel="ugc"` for user-generated links where applicable;
- `nofollow` only when there is a specific reason not to endorse or pass normal link signals.

Do not automatically add `nofollow` to all external sources.

---

## 13. Internal Linking Standard

### 13.1 Internal Link Goals

Internal links should help readers and search engines:

- discover related content;
- understand topic relationships;
- reach important tools or category pages;
- move from broad explanation to detailed guidance;
- resolve the next likely question;
- find the primary page for a topic.

### 13.2 Requirements

- Link naturally from relevant context.
- Use descriptive anchor text.
- Link to the best canonical destination.
- Prefer links that provide immediate next-step value.
- Avoid repeating the same destination unnecessarily.
- Verify that every link resolves without a redirect chain or error where practical.
- Update older relevant articles to link to the new article after publication.
- Include important articles in topic hubs or category navigation when appropriate.

### 13.3 Avoid

- “click here” anchors without context;
- exact-match anchor text in every link;
- forced links to unrelated commercial pages;
- large blocks of repetitive keyword links;
- linking every occurrence of a term;
- orphan articles;
- multiple internal URLs for the same canonical content;
- links hidden behind non-crawlable interactions when ordinary HTML links are practical.

### 13.4 Suggested Link Map

For each article, consider:

```md
Links from this article to:
- One relevant primary tool, product, or service page
- One broader category or topic hub
- Two to five closely related guides, when useful
- One prerequisite or glossary resource, when needed

Links to this article from:
- Its category or hub page
- Older related articles
- Relevant tool result or help pages
- The homepage or navigation only if strategically important
```

Do not add links merely to reach a quota.

---

## 14. SEO Title, H1, Meta Description, and URL

### 14.1 SEO Title

Create a unique title element that:

- accurately describes the article;
- matches the primary intent;
- includes the primary query naturally when useful;
- distinguishes the page from other site pages;
- avoids repetition, boilerplate, and clickbait;
- communicates a meaningful benefit or scope;
- remains understandable when displayed without surrounding context.

Do not treat a fixed character count as a Google rule. Write for clarity and likely display constraints, then review how the title appears across devices.

### 14.2 H1

The H1 may match the title element when that is best for clarity, but it does not have to be identical.

The H1 should:

- be visible;
- describe the article accurately;
- be unique within the page;
- use natural language;
- not be stuffed with variants.

### 14.3 Meta Description

Write a unique meta description that:

- summarizes the page accurately;
- reflects the search intent;
- includes the primary topic naturally when useful;
- explains what the reader will gain;
- avoids unsupported claims and fake urgency;
- does not duplicate another page's description.

Search engines may generate a different snippet. The meta description is a strong recommendation, not guaranteed display text.

### 14.4 URL Slug

For a new article:

- use a short, readable slug;
- use lowercase where the platform permits;
- separate words consistently, usually with hyphens;
- include the central topic when natural;
- remove dates unless the date is permanently fundamental to the page;
- avoid IDs, tracking parameters, and unnecessary folders;
- avoid stop-word removal when it harms clarity;
- follow the site's established URL policy.

For an existing article:

- preserve the URL unless a change provides a meaningful benefit;
- do not change URLs merely to add a keyword;
- if a change is necessary, add a direct 301 or 308 permanent redirect;
- update internal links, canonical tags, sitemap entries, hreflang, and structured data;
- avoid redirect chains.

### 14.5 Output Separation

When delivering article content for manual publishing, provide the following separately unless the repository's content format requires front matter:

```md
SEO title:
Meta description:
Suggested URL slug:
H1:
```

Do not repeat these fields inside the article body unless the publishing format requires them.

---

## 15. Featured and In-Content Images

### 15.1 Image Planning

Create or select images only when they improve:

- explanation;
- identification;
- comparison;
- trust;
- visual interest;
- step-by-step guidance;
- social sharing;
- understanding of data or spatial relationships.

Default goal:

- one unique featured image;
- two to three original in-content images when they genuinely help.

This is not a rigid quota. A narrow article may need only one image. A visual tutorial may need more.

### 15.2 Originality and Rights

- Prefer original photos, diagrams, charts, screenshots, or commissioned/generated visuals.
- Confirm rights for every third-party image.
- Do not remove watermarks.
- Do not imply that a generated image is a photograph of a real event.
- Label illustrative images when confusion is possible.
- Do not use deceptive before-and-after imagery.

### 15.3 Technical Optimization

For each image:

- choose dimensions appropriate to its rendered size;
- compress without visibly damaging important detail;
- use an efficient format supported by the platform;
- include intrinsic width and height;
- use responsive image delivery where available;
- lazy-load below-the-fold images;
- avoid lazy-loading the primary above-the-fold image when it harms LCP;
- use a descriptive filename;
- prevent layout shifts;
- ensure images remain legible on mobile;
- avoid embedding important article text only inside an image.

### 15.4 Alt Text

Write alt text that communicates the image's purpose to someone who cannot see it.

- Describe meaningful content concisely.
- Include the target keyword only if it genuinely describes the image.
- Use empty alt text for purely decorative images.
- Do not start every alt text with “image of.”
- Do not stuff filenames or alt text with keyword variants.
- Do not duplicate a nearby caption word for word unless necessary.

### 15.5 Captions and Credits

- Add a caption when it adds context, interpretation, date, units, source, or attribution.
- Credit third-party visuals according to their license.
- Link to the original data source for charts based on external datasets.

---

## 16. FAQ Section and FAQ Structured Data

### 16.1 Visible FAQ Content

Add a FAQ section when readers have genuine follow-up questions that are not already answered clearly in the main body.

FAQ questions should:

- reflect real user concerns;
- extend rather than repeat the article;
- be specific;
- receive direct, complete answers;
- avoid keyword-variant duplication;
- not be invented solely to add schema.

A FAQ section is not mandatory when it would add no value.

### 16.2 FAQ JSON-LD

When FAQ schema is implemented:

- use valid `FAQPage` JSON-LD;
- include only questions and answers visible on the page;
- keep the wording semantically and factually identical to the visible FAQ;
- update or remove the schema when visible FAQs change;
- do not mark up user-submitted answers as publisher-controlled FAQ content;
- do not use FAQ schema for advertising;
- validate the output;
- do not promise a rich result.

Google currently limits FAQ rich-result display primarily to well-known, authoritative government and health websites. Valid markup may still be used where appropriate, but it must not be added merely in expectation of enhanced search display.

### 16.3 Generic FAQ JSON-LD Pattern

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Visible FAQ question?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The same answer that is visibly available to readers on the page."
      }
    }
  ]
}
</script>
```

Escape generated content correctly and never insert untrusted raw HTML into JSON-LD.

---

## 17. Article Structured Data

Use structured data that matches the visible article and page type.

Common types include:

- `Article`;
- `BlogPosting`;
- `NewsArticle` when the content and publisher meet the definition;
- `HowTo` only where supported and semantically correct, without assuming a Google rich result;
- `Recipe` for genuine recipes;
- `Review` only for eligible, authentic reviews;
- page-type-specific markup covered by the site's structured-data architecture.

### 17.1 Required Integrity

- Markup must describe visible content.
- Dates must be accurate.
- `dateModified` should change only after a meaningful content update.
- Author identity must be real and consistent.
- Images must be accessible and relevant.
- Canonical URLs in markup must match the page's preferred URL.
- Publisher and organization data must use the site's centralized configuration.
- Do not create fake ratings, reviews, credentials, awards, or entities.
- Validate syntax and feature-specific eligibility.

### 17.2 Generic BlogPosting Pattern

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Visible article headline",
  "description": "Accurate article summary",
  "image": [
    "https://example.com/images/article-featured-image.jpg"
  ],
  "datePublished": "2026-07-14",
  "dateModified": "2026-07-14",
  "author": {
    "@type": "Person",
    "name": "Real Author Name",
    "url": "https://example.com/authors/real-author"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Site Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.com/blog/article-slug/"
  }
}
</script>
```

Adapt the template to the actual repository. Do not hardcode example values.

---

## 18. Technical Publishing Requirements

Every public article intended for search must satisfy the relevant rules in `TECHNICAL_SEO.md`.

### P0 Requirements

- [ ] Returns a valid `200` response when the article exists.
- [ ] Is not accidentally blocked by `robots.txt`.
- [ ] Does not contain an unintended `noindex` directive.
- [ ] Has a self-referencing canonical or approved canonical destination.
- [ ] Uses the production origin, not localhost, preview, or staging URLs.
- [ ] Renders meaningful article content in crawlable HTML.
- [ ] Does not require login or a client-side interaction to expose the primary content.
- [ ] Is usable on mobile.
- [ ] Contains no broken critical resources.
- [ ] Is included in the appropriate XML sitemap when indexable.
- [ ] Does not create duplicate parameter, print, AMP, tag, or pagination URLs without deliberate handling.

### P1 Requirements

- [ ] Metadata is unique and server-rendered where applicable.
- [ ] Heading hierarchy is valid.
- [ ] Important internal links are ordinary crawlable links.
- [ ] Images have correct dimensions and alternatives.
- [ ] Structured data is valid and content-matched.
- [ ] Open Graph and social metadata use correct absolute URLs.
- [ ] Article dates are accurate.
- [ ] Breadcrumbs reflect the actual hierarchy when used.
- [ ] No internal link points to a broken URL or unnecessary redirect chain.
- [ ] The article is accessible by keyboard and assistive technology.

### Performance

- Keep article templates lightweight.
- Avoid loading large client-side libraries for static text.
- Optimize the featured image because it may become the Largest Contentful Paint element.
- Reserve media dimensions to prevent layout shift.
- Defer nonessential scripts.
- Avoid excessive ad, widget, popup, and embed weight.
- Test real mobile performance, not only local desktop rendering.

---

## 19. Accessibility Requirements

Accessible content is a publishing requirement, not an optional SEO tactic.

- Use semantic headings in order.
- Provide meaningful alt text.
- Ensure links make sense from context.
- Do not communicate instructions through color alone.
- Maintain sufficient color contrast.
- Ensure tables use headers correctly.
- Add captions or transcripts for important audio and video.
- Avoid autoplaying disruptive media.
- Ensure accordions and tabs are keyboard accessible.
- Make focus visible.
- Avoid text embedded only in images.
- Use descriptive labels for forms and interactive tools.
- Preserve zoom and responsive reflow.

---

## 20. Article-Type Modules

Apply the relevant module in addition to universal rules.

### 20.1 How-To and Tutorial Articles

Include:

- prerequisites;
- tools or materials;
- expected result;
- ordered steps;
- screenshots or diagrams where needed;
- common failure points;
- verification that the task succeeded;
- safety warnings near the relevant step;
- alternatives when a step differs by platform or version.

Do not hide the actual steps beneath a long introduction.

### 20.2 Troubleshooting Articles

Start with:

- the most likely causes;
- the quickest safe checks;
- signs that distinguish one cause from another.

Then provide:

- fixes from lowest risk to highest risk;
- platform or model differences;
- what not to do;
- when to stop and seek professional help;
- prevention where useful.

Do not guarantee that one fix solves every case.

### 20.3 Comparison Articles

Define comparison criteria before declaring a winner.

Cover:

- who each option suits;
- meaningful similarities;
- important differences;
- limitations;
- current price or version date when relevant;
- a side-by-side table if it helps;
- decision scenarios;
- evidence or testing methodology.

Avoid declaring one option “best” for everyone.

### 20.4 Cost and Pricing Articles

Include:

- date and geographic scope;
- currency;
- typical range;
- what is included;
- labor, material, tax, delivery, or fee assumptions;
- factors that raise or lower cost;
- sample calculations;
- difference between estimate and quote;
- source or methodology;
- update schedule.

Do not present a national average as a precise local quote.

### 20.5 Product, Menu Item, or Specification Articles

Include:

- verified current specifications;
- variant differences;
- serving size or measurement basis;
- official source date;
- practical interpretation;
- limitations and substitutions;
- clear distinction between official data and calculated estimates.

Avoid copying manufacturer text.

### 20.6 Tool and Calculator Support Articles

Explain:

- what the tool does;
- required inputs;
- how results are calculated at an understandable level;
- assumptions;
- privacy behavior;
- limitations;
- error states;
- examples;
- how to interpret outputs;
- when results should be independently verified.

Link to the tool naturally near the point where it helps.

### 20.7 Local and Jurisdiction-Specific Articles

Include genuinely local:

- laws;
- agencies;
- rates;
- processes;
- contact methods;
- geographic conditions;
- dates;
- exceptions;
- terminology.

Do not generate location pages by changing only the place name.

### 20.8 Research or Data Articles

Include:

- research question;
- dataset or sample;
- collection date;
- methodology;
- definitions;
- limitations;
- calculations;
- results;
- interpretation;
- downloadable data when appropriate;
- source and license information.

Do not cherry-pick findings or hide inconvenient limitations.

### 20.9 News and Update Articles

Include:

- what happened;
- event date, not only publication date;
- who is affected;
- confirmed facts;
- uncertain or developing details;
- primary statements and documents;
- what changes next;
- update notes when facts evolve.

Do not present speculation as confirmed news.

### 20.10 Evergreen Guides

- Avoid unnecessary years in permanent URLs.
- Show a visible reviewed or updated date when appropriate.
- Schedule review according to change risk.
- Update facts, screenshots, links, and recommendations meaningfully.
- Do not change the date without meaningful revision.

---

## 21. Writing with AI Assistance

AI may assist research organization, outlining, drafting, editing, summarization, schema generation, and QA. It must not replace editorial responsibility.

### Required Safeguards

- Verify every consequential fact.
- Open and review cited sources.
- Remove invented details and fabricated citations.
- Rewrite generic or repetitive sections.
- Check that examples are logically and mathematically correct.
- Ensure the article reflects the site's real tools, features, prices, policies, authors, and technical behavior.
- Check for duplicated phrasing across site articles.
- Preserve a human editorial decision for intent, scope, structure, sourcing, and final approval.
- Do not claim first-hand experience that did not occur.
- Do not mass-publish lightly reviewed content.

### Prohibited AI Behaviors

- inventing statistics, quotes, experts, tests, or sources;
- fabricating personal experience;
- creating fake reviews;
- copying competitor organization and wording;
- generating hundreds of near-identical location or keyword pages;
- hiding uncertainty;
- adding citations that do not support claims;
- changing dates to make old content appear fresh;
- inserting irrelevant entities for supposed semantic optimization.

---

## 22. Structural Uniqueness Across the Website

Every article should feel written specifically for its topic.

Vary naturally:

- opening style;
- order of major sections;
- depth of background;
- placement of examples;
- table usage;
- number and type of lists;
- comparison format;
- troubleshooting flow;
- FAQ selection;
- conclusion style;
- media type;
- callout format.

Do not vary structure randomly. Let the reader's task determine the structure.

### Template Repetition Audit

Flag a content set when multiple articles share:

- the same introduction with swapped keywords;
- identical H2 sequences;
- the same number and order of examples;
- repeated conclusions;
- identical FAQ patterns;
- the same table with only names or numbers changed;
- generic “expert tips” with no topic-specific value;
- near-identical sentence rhythms and transitions.

Fix the underlying template and improve affected articles rather than applying superficial synonyms.

---

## 23. Editing Workflow

### Pass 1: Intent and Usefulness

Check:

- Does the article answer the main question early?
- Does it fulfill the intended task?
- Is any major reader need missing?
- Is any section off-topic?
- Is the article substantially better than a generic summary?

### Pass 2: Accuracy and Evidence

Check:

- Are all important facts verified?
- Are dates, units, versions, and locations clear?
- Do citations support the claims?
- Are assumptions labeled?
- Are examples and calculations correct?
- Are disagreements represented fairly?

### Pass 3: Structure

Check:

- Is the information in the right order?
- Is there one H1?
- Are H2 and H3 levels logical?
- Are sections balanced?
- Should any repeated sections be merged?
- Does the conclusion add value?

### Pass 4: Language and Readability

Check:

- Are paragraphs short?
- Is the wording natural?
- Is active voice used where helpful?
- Are technical terms explained?
- Are robotic transitions removed?
- Are long dashes removed?
- Is humor appropriate and limited?
- Are bullets and tables used only where useful?

### Pass 5: SEO and Linking

Check:

- Is the primary query used naturally?
- Is the metadata unique?
- Is the URL appropriate?
- Are related topics covered without stuffing?
- Are internal links relevant and descriptive?
- Are external citations authoritative?
- Is cannibalization avoided?

### Pass 6: Media and Accessibility

Check:

- Do images improve the article?
- Are files optimized?
- Are filenames and alt text accurate?
- Are dimensions reserved?
- Are tables mobile-friendly?
- Are video captions or transcripts available?
- Is the article usable with assistive technology?

### Pass 7: Technical Publishing

Check:

- Is the canonical correct?
- Is the article indexable?
- Is it in the sitemap?
- Does it return `200`?
- Is the rendered HTML complete?
- Is structured data valid and content-matched?
- Are all links working?
- Does the page work on mobile?

### Pass 8: Final Human Review

Read the article from beginning to end as the intended reader.

Confirm:

- it sounds human;
- it is not boring or repetitive;
- it does not make unsupported promises;
- the answer remains clear without SEO annotations;
- it can be published without editor notes or placeholders.

---

## 24. Pre-Publication Checklist

### Research and Intent

- [ ] Target audience is defined.
- [ ] Primary search intent is clear.
- [ ] Existing pages were reviewed.
- [ ] Cannibalization was checked.
- [ ] Current search results were reviewed when appropriate.
- [ ] Authoritative sources were collected.
- [ ] Important facts were verified.
- [ ] Unique value is evident.

### Content Quality

- [ ] Main answer appears early.
- [ ] Article is informational and balanced.
- [ ] No filler remains.
- [ ] Topic is covered completely enough for the intent.
- [ ] Technical terms are explained.
- [ ] Examples are accurate and useful.
- [ ] Limitations and common mistakes are included where relevant.
- [ ] No statistic, quote, claim, or expert opinion was invented.
- [ ] Article provides original wording, organization, or analysis.
- [ ] Tone is engaging without sacrificing accuracy.

### Structure and Readability

- [ ] One clear H1 is used.
- [ ] H2 and H3 hierarchy is logical.
- [ ] Paragraphs are normally no more than three visual lines.
- [ ] Lists improve readability.
- [ ] Tables are necessary and mobile-friendly.
- [ ] Bold text is selective.
- [ ] Robotic transitions are removed.
- [ ] Long dashes are removed.
- [ ] Grammar, punctuation, and spelling are correct.
- [ ] Conclusion provides a useful endpoint.

### Keywords and Metadata

- [ ] Primary query is used naturally.
- [ ] Related entities and subtopics are naturally covered.
- [ ] No keyword stuffing exists.
- [ ] SEO title is unique and accurate.
- [ ] Meta description is unique and accurate.
- [ ] H1 matches page intent.
- [ ] New URL slug is short and readable.
- [ ] Existing published URL was preserved unless change was necessary.
- [ ] Required redirects were added and tested.

### Links and Sources

- [ ] Internal links are relevant.
- [ ] Anchor text is descriptive.
- [ ] Older relevant content will link to the new article.
- [ ] Important claims have authoritative support.
- [ ] External links resolve correctly.
- [ ] Source anchors are placed near supported claims.
- [ ] Paid or user-generated links use appropriate attributes.
- [ ] No broken links remain.

### Images and Media

- [ ] Featured image is unique and relevant.
- [ ] In-content images are included only where useful.
- [ ] Image rights are confirmed.
- [ ] Files are compressed and correctly sized.
- [ ] Filenames are descriptive.
- [ ] Alt text communicates purpose.
- [ ] Width and height are specified.
- [ ] Responsive behavior is correct.
- [ ] Important text is not available only inside images.
- [ ] Captions, credits, and source notes are included where needed.

### FAQ and Structured Data

- [ ] FAQs are genuine and non-repetitive.
- [ ] Visible answers are complete.
- [ ] FAQ schema is used only when appropriate.
- [ ] FAQ schema matches visible content exactly.
- [ ] Article schema matches the visible page.
- [ ] Author, dates, image, publisher, and canonical are accurate.
- [ ] Structured data validates.
- [ ] No rich-result appearance is promised.

### Technical SEO

- [ ] Page returns `200`.
- [ ] Canonical is correct.
- [ ] Page is not accidentally `noindex`.
- [ ] `robots.txt` does not block required crawling.
- [ ] Page is included in the correct sitemap.
- [ ] Production URLs are used everywhere.
- [ ] Main content exists in rendered HTML.
- [ ] Mobile layout works.
- [ ] Performance is acceptable.
- [ ] Accessibility checks pass.
- [ ] Analytics and consent behavior remain functional.

### Originality and Final QA

- [ ] Plagiarism and excessive similarity were checked.
- [ ] Repeated site-wide template patterns were checked.
- [ ] Claims were rechecked against sources.
- [ ] Calculations were independently verified.
- [ ] Placeholders and editor notes were removed.
- [ ] Article was read end to end by a human.
- [ ] Final content is publish-ready.

---

## 25. Post-Publication Workflow

After deployment:

1. Open the production URL.
2. Verify the status code, canonical, robots directives, metadata, headings, article dates, internal links, images, and structured data.
3. Test the mobile page and key interactions.
4. Confirm the URL appears in the sitemap.
5. Inspect the rendered page using the relevant search-console tools when necessary.
6. Add links from existing relevant pages.
7. Monitor indexing, impressions, clicks, query match, engagement, and user feedback.
8. Fix misleading titles, weak introductions, missing sections, or technical errors based on evidence.
9. Do not rewrite solely because rankings fluctuate briefly.
10. Record material changes and review dates.

### Early Performance Review

Evaluate whether:

- queries match the intended topic;
- the title and snippet set correct expectations;
- users reach the direct answer quickly;
- important sections are being used;
- the article competes with another site page;
- new related questions deserve a separate article or an update;
- outdated facts require revision.

---

## 26. Content Refresh and Maintenance

### 26.1 Review Frequency

Set a review schedule based on change risk:

- **Very high change:** news, prices, laws, markets, software releases, schedules. Review as events require.
- **High change:** products, platform features, local processes, statistics. Review every one to three months where appropriate.
- **Moderate change:** industry practices, comparisons, recommendations. Review every six to twelve months.
- **Low change:** stable concepts and historical explanations. Review when evidence, links, or user needs change.

These are editorial defaults, not mandatory calendar intervals.

### 26.2 Meaningful Updates

A meaningful update may include:

- replacing outdated facts;
- adding new official guidance;
- correcting errors;
- improving examples;
- updating screenshots;
- revising steps after a product change;
- adding important limitations;
- consolidating overlapping content;
- improving internal links;
- updating metadata to reflect the article accurately.

Do not change `dateModified` merely for:

- punctuation edits;
- adding a link with no substantive change;
- changing a few synonyms;
- automated date refreshes;
- trying to appear newer in search.

### 26.3 Consolidation and Removal

When an article is obsolete, thin, duplicated, or no longer useful:

- improve it;
- merge it into a stronger relevant page;
- redirect it to a close replacement;
- preserve it for historical value with clear context;
- remove it with an appropriate status when no replacement exists.

Do not redirect unrelated removed pages to the homepage.

---

## 27. Repository Architecture Recommendations

Where the framework permits, centralize reusable article data and validation.

Suggested concepts:

```text
site configuration
author records
reviewer records
article metadata schema
canonical URL builder
Open Graph builder
Article JSON-LD builder
FAQ JSON-LD builder
breadcrumb builder
image metadata helper
sitemap generator
redirect map
content-lint rules
broken-link checker
structured-data validation
related-content mapping
```

### Suggested Article Front Matter

Adapt fields to the platform:

```yaml
---
title: "Visible H1"
seoTitle: "Unique search title"
description: "Accurate meta description"
slug: "short-readable-slug"
datePublished: "2026-07-14"
dateModified: "2026-07-14"
author: "author-id"
reviewer: "reviewer-id"
category: "category-id"
tags:
  - "useful-topic-tag"
featuredImage:
  src: "/images/article-name.jpg"
  alt: "Accurate description of the image"
canonical: "https://example.com/blog/short-readable-slug/"
index: true
faqSchema: true
sources:
  - "https://authoritative-source.example/document"
---
```

Do not expose internal planning keywords or editorial notes in public metadata.

---

## 28. Automated Quality Checks

Automate what can be tested reliably, but do not replace human editorial review.

### Useful Automated Checks

- duplicate title elements;
- duplicate meta descriptions;
- missing H1;
- multiple H1 elements;
- invalid heading jumps;
- missing or empty required metadata;
- malformed canonical URLs;
- non-production origins;
- broken internal links;
- redirect chains;
- missing image dimensions;
- missing alt attributes;
- invalid JSON-LD syntax;
- article dates in invalid formats;
- sitemap omissions;
- accidental `noindex`;
- spelling and grammar warnings;
- excessive repeated phrases;
- very long paragraphs;
- prohibited placeholder text;
- orphan pages;
- duplicate or near-duplicate article files.

### Human Checks Still Required

Automation cannot reliably determine:

- whether intent is satisfied;
- whether claims are true;
- whether sources are authoritative;
- whether an example is genuinely useful;
- whether humor is appropriate;
- whether the article is original in substance;
- whether keyword use sounds natural;
- whether advice could cause harm;
- whether a page competes with another intent;
- whether the article is interesting to read.

---

## 29. Prohibited Publishing Practices

Do not publish content that:

- plagiarizes or lightly rewrites another page;
- invents facts, sources, quotations, statistics, reviews, or credentials;
- targets search traffic without a useful audience purpose;
- repeats keywords mechanically;
- creates doorway pages for trivial location or keyword variations;
- hides text or links;
- uses deceptive titles or metadata;
- adds irrelevant sections for word count;
- presents affiliate or promotional copy as neutral analysis;
- claims an update without meaningful revision;
- uses fake authors or reviewers;
- marks invisible content in structured data;
- publishes private, copyrighted, or personal information without authorization;
- gives unsafe instructions without necessary warnings;
- presents estimates as guarantees;
- treats a patent as proof of an active ranking system;
- publishes unreviewed AI output at scale;
- blocks a useful article from indexing accidentally;
- changes a valuable URL without redirects;
- provides a source list that does not support the article's claims.

---

## 30. Definition of Done

An article is complete only when:

1. Its primary audience and intent are clear.
2. It answers the reader's main question early.
3. It offers original, useful, accurate, and properly sourced information.
4. It does not substantially duplicate or cannibalize another page.
5. Its structure is specific to the topic.
6. Its paragraphs, headings, lists, tables, and media are easy to use.
7. Its keywords and entities appear naturally.
8. Its title, description, H1, URL, and internal links are accurate and unique.
9. Its visible FAQ and structured data match, when used.
10. Its authorship, dates, and claims are honest.
11. Its images are relevant, optimized, accessible, and legally usable.
12. It passes grammar, originality, factual, accessibility, and technical checks.
13. It is crawlable, indexable, canonicalized, mobile-friendly, and included in the sitemap when intended for search.
14. It has been reviewed as a finished reader experience, not merely as text in an editor.
15. It can be published without placeholders, notes, unsupported claims, or known defects.

---

## 31. Codex Implementation Directive

Use the following directive when asking Codex or another repository agent to create or improve articles:

```md
Read and follow ARTICLE_WRITING.md, ON_PAGE_SEO.md, and TECHNICAL_SEO.md before making changes.

First inspect the repository, current website structure, article system, existing pages, metadata utilities, author data, internal links, sitemap, robots rules, structured-data implementation, and relevant content. Identify the article's primary intent and check for duplication or keyword cannibalization before writing.

Research important facts using current authoritative sources. Never invent statistics, quotations, examples, sources, credentials, prices, specifications, or expert opinions. Do not copy or closely rewrite competing articles. Create original, topic-specific structure and useful explanations.

Write the final publish-ready article directly in the repository's existing format. Answer the main question early. Use natural expert language, active voice, short paragraphs of normally no more than three visual lines, logical H2/H3 hierarchy, useful examples, and tables or lists only when they improve comprehension. Avoid filler, sales language, keyword stuffing, robotic transitions, and long dashes.

Use the primary query naturally in the SEO title, H1, introduction, a relevant heading, metadata, and body where appropriate. Add relevant internal links and authoritative external citations. Create or integrate optimized original images only where they improve the article. Add genuine FAQs and matching FAQ JSON-LD only when useful and supported by the site's schema architecture.

Preserve existing public URLs unless a change is necessary. If changing one, add and test a direct permanent redirect. Ensure the final page is indexable, canonicalized, present in the sitemap, mobile-friendly, accessible, free of broken links, and valid in rendered production HTML.

Before finishing, run the applicable checks from all three SEO standards. Verify facts, citations, calculations, metadata, heading hierarchy, originality, links, schema, image optimization, mobile rendering, and technical indexability. Do not merely report recommendations when the repository permits implementation. Make the safe, necessary changes and summarize exactly what was changed and what could not be verified.
```

---

## 32. Compact Publish-Ready Article Request Template

```md
Create or improve the following article and implement it directly in the website repository.

Topic:
Primary keyword:
Search intent:
Target audience:
Country or region:
Required facts or data:
Preferred internal links:
Required article format:
Special image requirements:

Follow ARTICLE_WRITING.md, ON_PAGE_SEO.md, and TECHNICAL_SEO.md completely. Inspect existing content first, prevent cannibalization, research current authoritative sources, produce original publish-ready content, and implement all relevant metadata, links, images, schema, and technical checks.
```

---

## 33. Reference Guidance

Use these resources as supporting guidance and verify them again when standards or search features may have changed:

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Influencing title links](https://developers.google.com/search/docs/appearance/title-link)
- [Meta description and snippet guidance](https://developers.google.com/search/docs/appearance/snippet)
- [Google Images SEO best practices](https://developers.google.com/search/docs/appearance/google-images)
- [Structured data introduction](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [General structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Structured data feature gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- [AI features and websites](https://developers.google.com/search/docs/appearance/ai-features)
- [Optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [US8707459B2: Determination of originality of content](https://patents.google.com/patent/US8707459B2/en)

Search documentation, feature eligibility, and platform behavior change. Recheck current primary-source guidance during periodic review rather than treating this file as permanently static.
