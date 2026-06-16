import { lazy, Suspense } from 'react';
import { Navigation } from '@/components/Navigation';
import { CursorTracker } from '@/components/CursorTracker';

const PortfolioSection = lazy(() =>
  import('@/components/PortfolioSection').then((m) => ({ default: m.PortfolioSection }))
);
const SocialProofSection = lazy(() =>
  import('@/components/SocialProofSection').then((m) => ({ default: m.SocialProofSection }))
);
const Footer = lazy(() => import('@/components/Footer').then((m) => ({ default: m.Footer })));

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden cursor-none">
      <CursorTracker />
      <Navigation />

      <main>
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <SocialProofSection />
          <PortfolioSection />
        </Suspense>
      </main>

      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Portfolio;

