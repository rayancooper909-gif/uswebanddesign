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

      <BookingForm
        heading="Love What You See?"
        subheading="Let's create something just as impressive for your brand. Book a free consultation to get started."
      />

      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Portfolio;
