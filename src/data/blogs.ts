// ═══════════════════════════════════════════════════════════════════
//  HOW TO ADD A BLOG POST  —  3 steps, takes about 2 minutes
// ═══════════════════════════════════════════════════════════════════
//
//  STEP 1 — Copy this block and paste it right after the line below
//           that says "PASTE NEW POSTS HERE"
//
//  {
//    slug:  'your-post-title',       ← becomes the URL: yoursite.com/blog/your-post-title
//    title: 'Your Post Title',       ← the big heading
//    date:  'June 16, 2026',         ← any date format works
//    content: `
//
// Paste your article text here.
// Just write normally — paragraphs, bullet points, anything.
//
// To make a heading, put ## before it:
// ## My Section Title
//
// To make text bold, wrap it: **like this**
//
// To add a bullet list:
// - Item one
// - Item two
//
//    `.trim(),
//  },
//
//  STEP 2 — Save & commit on GitHub
//  STEP 3 — Vercel deploys in ~30 seconds. Done ✅
//
// ═══════════════════════════════════════════════════════════════════

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  image?: string;
  author?: string;
}

export const blogPosts: BlogPost[] = [

// ↓↓↓ PASTE NEW POSTS HERE (newest at the top) ↓↓↓


// ↑↑↑ END OF NEW POSTS ↑↑↑

  {
    slug:  'how-to-get-more-leads-from-your-website',
    title: 'How to Get More Leads From Your Website in 2025',
    date:  'June 10, 2025',
    category: 'Web Strategy',
    readTime: '6 min read',
    excerpt: 'Your website should be your best salesperson. Here are the exact changes that turn visitors into leads — without spending more on ads.',
    content: `
## The Problem Most Business Websites Have

Most business websites are digital brochures — they look decent, but they don't actively convert visitors into leads. If your site isn't generating consistent inquiries, the issue usually isn't traffic. It's conversion.

Here's what actually moves the needle.

## 1. Put Your CTA Above the Fold

Your call-to-action — whether it's "Get a Free Quote," "Book a Call," or "Contact Us" — needs to be visible without scrolling. Visitors decide within 3–5 seconds whether to stay or leave.

**Action:** Make your primary button prominent and use action words like "Get Started" instead of "Submit."

## 2. Use Social Proof Immediately

Logos of clients you've worked with, star ratings from Google or Yelp, and short testimonials near the top of the page dramatically increase trust.

**Action:** Add 3–5 review badges or a client strip within the first screen.

## 3. Simplify Your Contact Form

Long forms kill conversions. Ask for only what you absolutely need — name, email, and one qualifying question.

**Action:** Cut your form to 3–4 fields maximum. Add a note like "We respond within 24 hours."

## 4. Speed is a Conversion Factor

A 1-second delay in page load can reduce conversions by 7%.

**Action:** Compress images and check your score on [PageSpeed Insights](https://pagespeed.web.dev).

---

At **US Web and Design**, every website we build is conversion-optimized from day one. [Book a free audit](/contact).
    `.trim(),
  },

  {
    slug:  'why-local-seo-matters-for-small-business',
    title: 'Why Local SEO Is the Highest-ROI Marketing for Small Businesses',
    date:  'May 28, 2025',
    category: 'SEO',
    readTime: '5 min read',
    excerpt: 'Paid ads stop the moment you stop paying. Local SEO builds a traffic asset that works for you 24/7 — here is how to start.',
    content: `
## What Is Local SEO and Why Does It Matter?

Local SEO is the process of optimizing your online presence so that people in your city find your business when they search for services you offer — things like "web designer near me."

Unlike paid ads, local SEO builds compounding visibility. Once you rank, you rank without ongoing ad spend.

## The Google Business Profile — Start Here

Your Google Business Profile is the single most important local SEO asset you own.

**Key steps:**
- Claim and fully complete your profile (hours, photos, description, services)
- Get consistent 5-star reviews and respond to all of them
- Post updates weekly (promotions, blog snippets, new work)

## On-Page Local Signals

Your website needs to tell Google what you do AND where you do it.

**Include on your homepage and service pages:**
- Your city and state in the page title
- A local address or service area in the footer
- Location-specific content: "Serving businesses in [City] since [year]"

---

We build local SEO foundations into every website we launch. [Book a free strategy call](/contact).
    `.trim(),
  },

  {
    slug:  'what-makes-a-website-look-professional',
    title: 'What Actually Makes a Website Look Professional in 2025',
    date:  'May 14, 2025',
    category: 'Web Design',
    readTime: '4 min read',
    excerpt: 'It is not about having the fanciest animations. Here are the real design decisions that separate amateur sites from ones that win clients.',
    content: `
## The Gap Between "Nice-Looking" and "Professional"

Many business owners think a professional website just means a clean layout. But visitors judge credibility in milliseconds, and specific design decisions make the difference.

## 1. Consistent Typography

A professional site uses no more than 2 typefaces. Inconsistent fonts are the #1 giveaway of a DIY site.

## 2. White Space Is Not Wasted Space

Cramming content wall-to-wall feels cheap. Premium brands use generous padding and margins.

## 3. Real Photography

Stock photos of smiling people in suits destroy trust. Use real photos of your team and your work.

## 4. Mobile-First, Always

Over 60% of web traffic is on mobile. A site that requires pinching and zooming signals that the business doesn't pay attention to detail.

## 5. Fast Load Time

A beautiful site that takes 6 seconds to load will be abandoned.

---

**US Web and Design** applies all of these principles to every project. [Get a free consultation](/contact).
    `.trim(),
  },

];
