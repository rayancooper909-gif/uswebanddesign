import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { SEOHead } from '@/components/SEOHead';
import { blogPosts } from '@/data/blogs';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

const categoryColors: Record<string, string> = {
  'Web Strategy': 'bg-blue-50 text-blue-700 border-blue-200',
  'SEO': 'bg-green-50 text-green-700 border-green-200',
  'Web Design': 'bg-purple-50 text-purple-700 border-purple-200',
  'Branding': 'bg-orange-50 text-orange-700 border-orange-200',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEOHead
        title="Blog — Web Design, SEO & Digital Marketing Tips | US Web and Design"
        description="Expert tips on web design, local SEO, branding, and digital marketing to help your business grow online. Updated regularly by the US Web and Design team."
        canonical="https://uswebanddesign.com/blog"
      />
      <Navigation />

      <section className="pt-32 pb-16 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block rounded-full border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground/80 mb-5">
            Resources & Insights
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-5">
            The <span className="text-primary">Growth Blog</span>
          </h1>
          <p className="text-foreground/65 text-lg max-w-2xl mx-auto">
            Practical advice on web design, SEO, and digital marketing — written for business owners, not developers.
          </p>
        </motion.div>
      </section>

      <section className="pb-24 px-4">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="premium-panel rounded-3xl overflow-hidden flex flex-col group"
              >
                {/* Category color bar */}
                <div className="h-1.5 bg-primary w-full" />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${categoryColors[post.category] ?? 'bg-secondary text-foreground/70 border-border'}`}>
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-foreground/50">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold leading-snug mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-foreground/60 text-sm leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <span className="text-xs text-foreground/45">{post.date}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-2 transition-all"
                    >
                      Read post <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
