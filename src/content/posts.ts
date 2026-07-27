export type BlogPostMeta = {
  slug: string;
  href: string;
  title: string;
  description: string;
  published: string;
  modified?: string;
  author: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  mark?: string;
  category: string;
  tags: string[];
  draft: boolean;
};

export const posts: readonly BlogPostMeta[] = [
  {
    slug: "how-to-calculate-name-number-chaldean-numerology",
    href: "/blog/how-to-calculate-name-number-chaldean-numerology/",
    title: "How to Calculate a Name Number in Chaldean Numerology",
    description: "Learn how to calculate a name number in Chaldean numerology using the 1-to-8 letter chart, compound total, root number, and clear worked examples.",
    published: "2026-07-27",
    author: "Arslan Ejaz",
    featuredImage: "/images/blog/calculate-name-number-chaldean-numerology-featured.webp",
    featuredImageAlt: "Open notebook with letter tiles, counting counters, and a visual name-number calculation",
    category: "Calculation guide",
    tags: ["name number", "calculation method", "Chaldean numerology"],
    draft: false,
  },
  {
    slug: "chaldean-numerology-for-beginners",
    href: "/blog/chaldean-numerology-for-beginners/",
    title: "Chaldean Numerology for Beginners",
    description: "A clear starting guide to the letter chart, name and birth numbers, compound totals, root meanings, and responsible interpretation.",
    published: "2026-07-15",
    author: "Arslan Ejaz",
    featuredImage: "/images/blog/chaldean-numerology-for-beginners.webp",
    featuredImageAlt: "Open learning notebook, alphabet tiles, and eight counting tokens arranged on an ivory surface",
    category: "Beginner guide",
    tags: ["beginners", "Chaldean numerology", "name number"],
    draft: false,
  },
  {
    slug: "how-does-chaldean-numerology-work",
    href: "/blog/how-does-chaldean-numerology-work/",
    title: "How Does Chaldean Numerology Work?",
    description: "Follow the exact process for assigning letter values, adding a compound total, reducing a root, and calculating optional date numbers.",
    published: "2026-07-15",
    author: "Arslan Ejaz",
    featuredImage: "/images/blog/how-chaldean-numerology-works.webp",
    featuredImageAlt: "A left-to-right diagram showing grouped values becoming a compound and then one root token",
    category: "Method",
    tags: ["calculation method", "compound number", "root number"],
    draft: false,
  },
  {
    slug: "chaldean-numerology-chart",
    href: "/chaldean-numerology-chart/",
    title: "The Complete Chaldean Numerology Chart",
    description: "Learn every 1-to-8 letter group, how names are normalized, and how to verify a name total.",
    published: "2026-07-11",
    author: "Arslan Ejaz",
    mark: "A–Z",
    category: "Method",
    tags: ["chart", "name number"],
    draft: false,
  },
  {
    slug: "numerology-number-meanings",
    href: "/numerology-number-meanings/",
    title: "Chaldean Number Meanings from 1 to 9",
    description: "Explore balanced root themes, strengths, growth areas, and the role of compound numbers.",
    published: "2026-07-11",
    author: "Arslan Ejaz",
    mark: "1–9",
    category: "Meanings",
    tags: ["root numbers", "compound numbers"],
    draft: false,
  },
  {
    slug: "chaldean-vs-pythagorean-numerology",
    href: "/chaldean-vs-pythagorean-numerology/",
    title: "Chaldean vs Pythagorean Numerology",
    description: "Compare the two letter charts, their treatment of 9, compounds, master numbers, and name conventions.",
    published: "2026-07-11",
    author: "Arslan Ejaz",
    mark: "C / P",
    category: "Comparison",
    tags: ["Chaldean", "Pythagorean"],
    draft: false,
  },
];

export const publishedPosts = posts.filter((post) => !post.draft);
