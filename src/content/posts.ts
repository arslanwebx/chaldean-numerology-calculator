export type BlogPostMeta = { slug:string;title:string;description:string;published:string;modified?:string;author?:string;featuredImage?:string;category?:string;tags?:string[];draft:boolean };
export const posts: readonly BlogPostMeta[] = [
  {slug:"chaldean-numerology-chart",title:"The Complete Chaldean Numerology Chart",description:"Letter values and calculation rules.",published:"2026-07-11",author:"Arslan Ejaz",category:"Method",tags:["chart","name number"],draft:false},
  {slug:"numerology-number-meanings",title:"Chaldean Number Meanings from 1 to 9",description:"Balanced root and compound interpretations.",published:"2026-07-11",author:"Arslan Ejaz",category:"Meanings",tags:["root numbers","compound numbers"],draft:false},
  {slug:"chaldean-vs-pythagorean-numerology",title:"Chaldean vs Pythagorean Numerology",description:"A transparent comparison of two methods.",published:"2026-07-11",author:"Arslan Ejaz",category:"Comparison",tags:["Chaldean","Pythagorean"],draft:false},
];
export const publishedPosts = posts.filter((post) => !post.draft);
