// ╔══════════════════════════════════════════════════════════════════════════╗
// ║                     HOW TO ADD A NEW BLOG POST                          ║
// ╠══════════════════════════════════════════════════════════════════════════╣
// ║                                                                          ║
// ║  STEP 1 — Create a new file inside:  src/data/posts/                    ║
// ║           Name it after your post slug, e.g:                            ║
// ║           my-new-post-title.ts                                           ║
// ║                                                                          ║
// ║  STEP 2 — Copy the template below into that new file                    ║
// ║                                                                          ║
// ║  STEP 3 — Come back to THIS file and add two lines:                     ║
// ║           Line A (import):  import myPost from './posts/my-new-post-title';
// ║           Line B (list):    myPost,   ← inside the blogPosts array      ║
// ║                                                                          ║
// ║  STEP 4 — Commit to GitHub → Vercel auto-deploys in ~30 seconds         ║
// ║                                                                          ║
// ╠══════════════════════════════════════════════════════════════════════════╣
// ║  TEMPLATE — copy this into your new .ts file                            ║
// ╠══════════════════════════════════════════════════════════════════════════╣
//
//  import type { BlogPost } from '../blogs';
//
//  const post: BlogPost = {
//    slug:     'my-new-post-title',
//    title:    'My Full Blog Post Title',
//    excerpt:  'One or two sentences shown on the blog listing page.',
//    date:     'June 16, 2026',
//    category: 'Web Design',
//    readTime: '4 min read',
//    image:    '/blog-images/my-new-post-title.jpg',   ← OPTIONAL: delete line if no image
//    content: `
//
// ## First Heading
//
// Write your article here like you would in Word.
//
// ## Another Heading
//
// - Bullet point one
// - Bullet point two
//
// **This text will be bold.**
//
// [Link text here](/contact)
//
//    `.trim(),
//  };
//
//  export default post;
//
// ╠══════════════════════════════════════════════════════════════════════════╣
// ║  HOW TO ADD AN IMAGE                                                    ║
// ║  1. Upload your image to GitHub: go to public/blog-images/ →           ║
// ║     click "Add file" → "Upload files" → drag your image in             ║
// ║  2. Name the image the same as your slug, e.g: my-post-title.jpg       ║
// ║  3. Set image: '/blog-images/my-post-title.jpg' in your post file      ║
// ║  Best image size: 1200 x 630 pixels, JPG format, under 300KB           ║
// ╠══════════════════════════════════════════════════════════════════════════╣
// ║  CATEGORIES you can use:                                                ║
// ║  'Web Design'  |  'SEO'  |  'Web Strategy'  |  'Branding'              ║
// ╚══════════════════════════════════════════════════════════════════════════╝

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
  image?: string;   // optional — path like /blog-images/my-post.jpg
  author?: string;
}

// ─── STEP 3A: Add your import here ───────────────────────────────────────────
import post1 from './posts/how-to-get-more-leads-from-your-website';
import post2 from './posts/why-local-seo-matters-for-small-business';
import post3 from './posts/what-makes-a-website-look-professional';
// import myNewPost from './posts/my-new-post-title';   ← example


// ─── STEP 3B: Add your post to the list here (newest first) ──────────────────
export const blogPosts: BlogPost[] = [
  post1,
  post2,
  post3,
  // myNewPost,   ← example
];
