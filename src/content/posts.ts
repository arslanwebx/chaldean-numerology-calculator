export type BlogPostMeta = { slug:string;title:string;description:string;published:string;modified?:string;author?:string;featuredImage?:string;category?:string;tags?:string[];draft:boolean };
export const posts: readonly BlogPostMeta[] = [];
export const publishedPosts = posts.filter((post) => !post.draft);
