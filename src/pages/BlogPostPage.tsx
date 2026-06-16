import { lazy, Suspense } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { SEOHead } from '@/components/SEOHead';
import { BookingForm } from '@/components/BookingForm';
import { blogPosts } from '@/data/blogs';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Clock, Tag, User } from 'lucide-react';

const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const otherPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: post.author },
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'US Web and Design',
      url: 'https://uswebanddesign.com',
    },
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEOHead
        title={`${post.title} | US Web and Design Blog`}
        description={post.excerpt}
        canonical={`https://uswebanddesign.com/blog/${post.slug}`}
        schema={schema}
      />
      <Navigation />

      <article className="pt-32 pb-16 px-4">
        <div className="container-custom max-w-3xl mx-auto">
          {/* Back link */}
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-foreground/55 hover:text-foreground transition-colors mb-10">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </motion.div>

          {/* Meta */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium">
                <Tag className="w-3 h-3 text-primary" /> {post.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-foreground/50">
                <Clock className="w-3 h-3" /> {post.readTime}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-foreground/50">
                <User className="w-3 h-3" /> {post.author}
              </span>
              <span className="text-xs text-foreground/40">{post.date}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-foreground/65 leading-relaxed border-l-4 border-primary pl-5 mb-12">
              {post.excerpt}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none
              prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-foreground
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-foreground
              prose-p:text-foreground/70 prose-p:leading-relaxed prose-p:mb-5
              prose-strong:text-foreground prose-strong:font-semibold
              prose-li:text-foreground/70 prose-li:mb-1
              prose-ul:my-4 prose-ul:pl-5
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-hr:border-border prose-hr:my-10"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.div>
        </div>
      </article>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section className="py-16 bg-secondary/30 px-4">
          <div className="container-custom max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-bold mb-8">More from the Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map(p => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="premium-panel rounded-2xl p-6 group hover:border-primary/30 transition-colors">
                  <span className="text-xs font-medium text-primary">{p.category}</span>
                  <h3 className="text-base font-bold mt-2 mb-2 group-hover:text-primary transition-colors leading-snug">{p.title}</h3>
                  <p className="text-sm text-foreground/55 line-clamp-2">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <BookingForm
        heading="Ready to Grow Your Business Online?"
        subheading="Book a free strategy call and let's talk about what's possible for your website and SEO."
      />

      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
