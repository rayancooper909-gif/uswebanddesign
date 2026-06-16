import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { CursorTracker } from '@/components/CursorTracker';

// Lazy load below-the-fold components to reduce initial bundle size
const AboutSection = lazy(() => import('@/components/AboutSection').then(m => ({ default: m.AboutSection })));
const ProfessionalSolutionsSection = lazy(() => import('@/components/ProfessionalSolutionsSection').then(m => ({ default: m.ProfessionalSolutionsSection })));
const ServicesSection = lazy(() => import('@/components/ServicesSection').then(m => ({ default: m.ServicesSection })));
const InteractiveExperienceSection = lazy(() => import('@/components/InteractiveExperienceSection').then(m => ({ default: m.InteractiveExperienceSection })));
const PricingSection = lazy(() => import('@/components/PricingSection').then(m => ({ default: m.PricingSection })));
const PortfolioSection = lazy(() => import('@/components/PortfolioSection').then(m => ({ default: m.PortfolioSection })));
const FAQSection = lazy(() => import('@/components/FAQSection').then(m => ({ default: m.FAQSection })));
const ContactSection = lazy(() => import('@/components/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

const SectionDivider = () => (
  <div className="container-custom py-4">
    <div className="relative h-px overflow-hidden bg-border/55">
      <motion.div
        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-primary/65 to-transparent"
        animate={{ x: ['-120%', '320%'] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden cursor-none">
      <CursorTracker />
      <Navigation />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <InteractiveExperienceSection />
          <SectionDivider />
          <AboutSection />
          <SectionDivider />
          <ProfessionalSolutionsSection />
          <SectionDivider />
          <ServicesSection />
          <SectionDivider />
          <PortfolioSection limit={15} />
          <SectionDivider />
          <PricingSection />
          <SectionDivider />
          <ContactSection />
          <SectionDivider />
          <FAQSection />
        </Suspense>
      </main>
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
