import { lazy, Suspense } from 'react';
import { Navigation } from '@/components/Navigation';
import { BookingForm } from '@/components/BookingForm';
import { motion } from 'framer-motion';

const PortfolioSection = lazy(() =>
  import('@/components/PortfolioSection').then((m) => ({ default: m.PortfolioSection }))
);
const SocialProofSection = lazy(() =>
  import('@/components/SocialProofSection').then((m) => ({ default: m.SocialProofSection }))
);
const Footer = lazy(() => import('@/components/Footer').then((m) => ({ default: m.Footer })));

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero banner */}
      <section className="pt-32 pb-16 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block rounded-full border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground/80 mb-5">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-5">
            Projects We're <span className="text-primary">Proud Of</span>
          </h1>
          <p className="text-foreground/65 text-lg max-w-2xl mx-auto">
            Every piece in our portfolio represents a real business goal achieved — from brand launches to conversion-focused redesigns.
          </p>
        </motion.div>
      </section>

      <main>
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <SocialProofSection />
          <PortfolioSection />
        </Suspense>
      </main>

      <section className="py-18 md:py-24 px-4">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Portfolio Work That Supports Search Visibility</h2>
              <p className="text-foreground/65 leading-relaxed">
                A portfolio page can help with Google indexing when it includes context about the type of work, the industries served, and the result the project was meant to achieve. We use that approach so your work is easier to understand for both people and search engines.
              </p>
              <p className="text-foreground/65 leading-relaxed">
                This gives your website more relevant terms around design projects, branding, conversion-focused redesigns, and custom website builds, instead of relying on images alone.
              </p>
            </div>
            <div className="premium-panel rounded-3xl p-6 space-y-3">
              <h3 className="font-display font-semibold text-xl">Portfolio Story Angles</h3>
              <ul className="space-y-2 text-foreground/70 text-sm leading-relaxed">
                <li>• Before and after redesigns</li>
                <li>• Industry-specific web projects</li>
                <li>• Ecommerce and lead generation builds</li>
                <li>• Branding, layout, and conversion improvements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <BookingForm
        heading="Love What You See?"
        subheading="Let's create something just as impressive for your brand. Book a free consultation to get started."
        eyebrow="Portfolio & Case Studies"
        contentTitle="Portfolio Content That Builds Trust and Search Relevance"
        contentBody="A strong portfolio page does more than show visuals. It gives Google and visitors more context around the industries you serve, the problems you solve, and the results your design work is meant to create."
        contentPoints={['Case study copy', 'Portfolio SEO', 'Industry examples', 'Before and after', 'Conversion results', 'Creative direction']}
      />

      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Portfolio;
