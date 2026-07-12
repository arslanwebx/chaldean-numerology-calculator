# Blog Authoring

The launch archive contains three canonical guides. Metadata lives in `src/content/posts.ts`; only entries with `draft: false` may be listed or added to the sitemap.

To publish a real article:

1. Write an original page under `src/app/blog/<slug>/page.tsx` with one H1, concise metadata, a canonical path, sources, and useful internal links.
2. Add typed metadata with title, description, ISO published and modified dates, author or configured publisher, slug, optional image, category, tags, and draft state.
3. Use a meaningful 1200×630 local featured image with dimensions and alt text. Decorative art should be hidden from assistive technology.
4. Add FAQ schema only if matching questions and answers are visibly present. Do not add reviews, ratings, or credentials that do not exist.
5. Add the new post to the responsive `/blog/` listing and include its canonical URL in the sitemap only after it is non-draft.
6. Run `npm run check`, review internal links, inspect mobile layout, and check the production canonical before publishing.
