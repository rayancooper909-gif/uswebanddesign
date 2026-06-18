import { lazy } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { LazySection, SectionSkeleton } from '@/components/LazySection';

// Lazy load below-the-fold components to reduce initial bundle size
const AboutSection = lazy(() => import('@/components/AboutSection').then(m => ({ default: m.AboutSection })));
const ProfessionalSolutionsSection = lazy(() => import('@/components/ProfessionalSolutionsSection').then(m => ({ default: m.ProfessionalSolutionsSection })));
const ServicesSection = lazy(() => import('@/components/ServicesSection').then(m => ({ default: m.ServicesSection })));
const PricingSection = lazy(() => import('@/components/PricingSection').then(m => ({ default: m.PricingSection })));
const PortfolioSection = lazy(() => import('@/components/PortfolioSection').then(m => ({ default: m.PortfolioSection })));
const FAQSection = lazy(() => import('@/components/FAQSection').then(m => ({ default: m.FAQSection })));
const ContactSection = lazy(() => import('@/components/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

const SectionDivider = () => (
  <div className="container-custom py-5 md:py-6" aria-hidden="true">
    <div className="vibe-divider">
      <div className="vibe-divider__ticks" />
      <div className="vibe-divider__pulse" />
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <LazySection fallback={<SectionSkeleton minHeight="520px" />} minHeight="520px">
          <AboutSection />
        </LazySection>
        <LazySection fallback={<SectionSkeleton minHeight="560px" />} minHeight="560px">
          <SectionDivider />
          <ProfessionalSolutionsSection />
        </LazySection>
        <LazySection fallback={<SectionSkeleton minHeight="620px" />} minHeight="620px">
          <SectionDivider />
          <ServicesSection />
        </LazySection>
        <LazySection fallback={<SectionSkeleton minHeight="640px" />} minHeight="640px">
          <SectionDivider />
          <PortfolioSection limit={15} />
        </LazySection>
        <LazySection fallback={<SectionSkeleton minHeight="640px" />} minHeight="640px">
          <SectionDivider />
          <PricingSection />
        </LazySection>
        <LazySection fallback={<SectionSkeleton minHeight="640px" />} minHeight="640px">
          <SectionDivider />
          <ContactSection />
        </LazySection>
        <LazySection fallback={<SectionSkeleton minHeight="520px" />} minHeight="520px">
          <SectionDivider />
          <FAQSection />
        </LazySection>
      </main>
      <LazySection fallback={<SectionSkeleton minHeight="260px" />} minHeight="260px">
        <Footer />
      </LazySection>
    </div>
  );
};

export default Index;
