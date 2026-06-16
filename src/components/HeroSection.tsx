import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { KineticTicker } from '@/components/KineticTicker';

type ReviewBrand = 'Google Reviews' | 'Yelp' | 'Trustpilot';

const heroImgModules = import.meta.glob('../assets/hero/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}', {
  eager: true,
  import: 'default',
});

const heroImages = Object.values(heroImgModules) as string[];

function useCountUp(end: number, duration: number = 1200, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

function BrandMark({ brand }: { brand: ReviewBrand }) {
  if (brand === 'Google Reviews') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          d="M12 10.2v3.9h5.45c-.25 1.27-1.46 3.72-5.45 3.72-3.28 0-5.95-2.72-5.95-6.07 0-3.35 2.67-6.07 5.95-6.07 1.87 0 3.12.8 3.83 1.49l2.61-2.58C16.83 3.62 14.62 2.5 12 2.5 6.97 2.5 2.9 6.65 2.9 11.75S6.97 21 12 21c6.96 0 8.67-4.93 8.67-7.42 0-.5-.06-.88-.13-1.26H12z"
          fill="#4285F4"
        />
        <path
          d="M4.35 7.63l3.2 2.35C8.42 8.2 10.08 7 12 7c1.87 0 3.12.8 3.83 1.49l2.61-2.58C16.83 3.62 14.62 2.5 12 2.5c-3.5 0-6.52 2.01-7.65 5.13z"
          fill="#EA4335"
          opacity="0.9"
        />
        <path
          d="M12 21c2.56 0 4.71-.85 6.28-2.31l-2.9-2.25c-.78.54-1.83 1.1-3.38 1.1-2.64 0-4.87-1.8-5.67-4.28l-3.17 2.44C4.28 18.92 7.8 21 12 21z"
          fill="#34A853"
          opacity="0.9"
        />
        <path
          d="M6.33 13.26c-.2-.62-.32-1.28-.32-1.97 0-.68.12-1.35.32-1.97L3.16 6.88C2.68 7.88 2.4 8.99 2.4 10.18c0 1.2.28 2.3.76 3.3l3.17-2.22z"
          fill="#FBBC05"
          opacity="0.9"
        />
      </svg>
    );
  }

  if (brand === 'Yelp') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          fill="#D32323"
          d="M12.64 2.27c-.63-.25-1.35.1-1.52.76l-1.3 5.1c-.15.6.17 1.21.74 1.42l3.43 1.23c.67.24 1.4-.16 1.55-.84l1.13-5.1c.14-.64-.22-1.27-.84-1.51L12.64 2.27zm-5.9 6.86c-.57-.35-1.34-.17-1.69.4l-2.8 4.55c-.33.53-.18 1.22.34 1.56l3.11 2.04c.55.36 1.3.2 1.64-.36l2.86-4.64c.33-.54.15-1.24-.4-1.57L6.74 9.13zm12.23 0-2.92 1.92c-.55.36-.73 1.06-.4 1.6l2.86 4.63c.34.55 1.09.71 1.64.35l3.1-2.03c.52-.34.67-1.03.34-1.57l-2.79-4.54c-.35-.57-1.12-.75-1.69-.4zM12 13.67c-.64 0-1.16.52-1.16 1.16v5.4c0 .65.52 1.17 1.16 1.17h3.78c.64 0 1.16-.52 1.16-1.16v-3.78c0-.64-.52-1.16-1.16-1.16H12z"
        />
      </svg>
    );
  }

  // Trustpilot
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="#00B67A"
        d="M12 2.6l2.86 5.79 6.4.93-4.63 4.51 1.09 6.37L12 17.72 6.28 20.2l1.09-6.37L2.74 9.32l6.4-.93L12 2.6z"
      />
      <path
        fill="#005128"
        d="M12 17.72l4.63-3.38-1.09 6.37L12 17.72z"
        opacity="0.85"
      />
    </svg>
  );
}

function starsColor(brand: ReviewBrand): string {
  if (brand === 'Yelp') return '#D32323';
  if (brand === 'Trustpilot') return '#00B67A';
  return '#F4B400'; // Google-ish yellow
}

function Stars({ value, color }: { value: number; color: string }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  const total = 5;
  const stars = Array.from({ length: total }).map((_, i) => {
    const filled = i < full;
    const half = !filled && hasHalf && i === full;
    return (
      <span key={i} aria-hidden="true" className="text-[11px] leading-none">
        {filled ? '★' : half ? '⯪' : '☆'}
      </span>
    );
  });

  return (
    <span className="inline-flex items-center gap-0.5" style={{ color }}>
      {stars}
    </span>
  );
}

function SocialBadge({
  brand,
  rating,
  reviews,
  reviewsSuffix = '+',
}: {
  brand: ReviewBrand;
  rating: number;
  reviews: number;
  reviewsSuffix?: string;
}) {
  const count = useCountUp(reviews, 1200, true);
  return (
    <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-medium text-[#111827] shadow-sm sm:flex-nowrap sm:justify-start sm:text-xs">
      <BrandMark brand={brand} />
      <span className="whitespace-nowrap">{brand}</span>
      <span className="mx-1 h-3 w-px bg-black/15" aria-hidden="true" />
      <Stars value={rating} color={starsColor(brand)} />
      <span className="text-[11px] font-semibold">{rating.toFixed(1)}</span>
      <span className="text-[11px] text-black/60 tabular-nums">
        {count.toLocaleString()}
        {reviewsSuffix} reviews
      </span>
    </div>
  );
}

export function HeroSection() {
  const isMobile = useIsMobile();
  const tiles = useMemo(() => {
    if (!heroImages.length) return [] as string[];
    if (isMobile) return heroImages.slice(0, 12) as string[];
    return [...heroImages, ...heroImages] as string[];
  }, [isMobile]);

  return (
    <section id="home" className="relative flex min-h-[88svh] md:min-h-screen items-center justify-center overflow-hidden pt-24">
      {/* Collage background (patch-wall style) */}
      <div className="absolute inset-0 overflow-hidden">
        {tiles.length > 0 ? (
          <>
            <motion.div
              className="absolute left-[-12%] top-[2%] h-[88%] w-[124%] rotate-[-2deg] opacity-[0.62] md:left-[-18%] md:top-[-14%] md:h-[128%] md:w-[64%] md:rotate-[-6deg] md:opacity-[0.85]"
              animate={isMobile ? undefined : { y: [0, -220, 0, 220, 0] }}
              transition={isMobile ? undefined : { duration: 120, repeat: Infinity, ease: 'linear' }}
              aria-hidden="true"
            >
              <div className="grid grid-cols-3 gap-2 md:gap-3" style={{ filter: 'blur(3px)' }}>
                {tiles.map((src, i) => (
                  <div key={`l-${i}`} className="overflow-hidden rounded-2xl border border-white/10 bg-black/10 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)]">
                    <img src={src} alt="" className="h-full w-full aspect-square object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="hidden md:block absolute -right-[18%] top-[-16%] h-[132%] w-[64%] rotate-[6deg] opacity-[0.85]"
              animate={{ y: [0, 220, 0, -220, 0] }}
              transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
              aria-hidden="true"
            >
              <div className="grid grid-cols-3 gap-3" style={{ filter: 'blur(3px)' }}>
                {tiles.map((src, i) => (
                  <div key={`r-${i}`} className="overflow-hidden rounded-2xl border border-white/10 bg-black/10 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)]">
                    <img src={src} alt="" className="h-full w-full aspect-square object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-light-gray/30" aria-hidden="true" />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/92 via-background/89 to-background/95 md:from-background/90 md:via-background/87 md:to-background/94" />
      <div className="absolute inset-0 bg-background/76 md:bg-background/68" />

      <div className="container-custom relative z-10 my-4 w-full">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tagline */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="mb-5 sm:mb-6">
            <span className="inline-block rounded-full border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground/80 sm:text-sm">
              Full-Service Digital Agency
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="mb-5 text-4xl font-display font-bold leading-[1.02] tracking-tight sm:text-5xl md:mb-6 md:text-5xl lg:text-6xl xl:text-7xl [text-shadow:0_2px_12px_rgba(0,0,0,0.35)]">
            Premium Websites That
            <br />
            <span className="text-primary">Convert</span> and Scale
          </motion.h1>

          {/* Subheadline */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="mx-auto mb-8 max-w-2xl rounded-xl border border-white/25 bg-background/55 backdrop-blur-md px-4 py-3 text-base leading-relaxed text-foreground sm:text-lg md:mb-10 md:text-xl [text-shadow:0_2px_10px_rgba(0,0,0,0.28)] shadow-lg">
            Web design, branding, and marketing systems built to attract attention and turn it into leads.
            Launch with confidence, backed by strategy, clean builds, and ongoing support.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }} className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button variant="gold" size="xl" className="group w-full sm:w-auto" asChild>
              <a href="#pricing">
                Get Pricing
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="xl" className="group w-full sm:w-auto" asChild>
              <a href="#portfolio">
              <Play className="w-4 h-4" />
              View Portfolio
              </a>
            </Button>
          </motion.div>

          {/* Social proof badges */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="mt-8 flex flex-col items-stretch justify-center gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
          >
            <div className="flex justify-center sm:block">
              <SocialBadge brand="Google Reviews" rating={5.0} reviews={200} reviewsSuffix="+" />
            </div>
            <div className="flex justify-center sm:block">
              <SocialBadge brand="Yelp" rating={5.0} reviews={120} reviewsSuffix="+" />
            </div>
            <div className="flex justify-center sm:block">
              <SocialBadge brand="Trustpilot" rating={5.0} reviews={160} reviewsSuffix="+" />
            </div>
          </motion.div>

          <KineticTicker />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
