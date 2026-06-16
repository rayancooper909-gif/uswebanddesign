import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import awwwardsArt from '@/assets/decor/awwwards-art.png';
import { Reveal } from '@/components/motion/Reveal';

const pricingCategories = [
  'Web Development',
  'Logo Design',
  'Business Cards',
  'Branding',
  'Web Content',
  'Online Store',
  'Domain & Hosting',
  'SMM',
  'SEO',
  'PPC',
  'Combo Plan',
] as const;

type PricingCategory = (typeof pricingCategories)[number];

type TierName = 'Basic' | 'Standard' | 'Premium';

type Plan = {
  tier: TierName;
  price: string;
  features: string[];
};

const defaultPlans: Plan[] = [
  {
    tier: 'Basic',
    price: '$400',
    features: [
      'Single web page',
      'Contact/query form',
      'Responsive layout',
      'Social media integration',
      'Google map integration',
      'Up to 3 revisions',
      '48-72 hours turnaround',
      '100% satisfaction guarantee',
    ],
  },
  {
    tier: 'Standard',
    price: '$700',
    features: [
      'Up to 7 web pages',
      '3 sliding banners',
      'Contact + quote form',
      'Social media integration',
      'Basic SEO setup',
      'Responsive layout',
      'Up to 5 revisions',
      '48-72 hours turnaround',
    ],
  },
  {
    tier: 'Premium',
    price: '$1000',
    features: [
      'Up to 12 web pages',
      'Contact + quote forms',
      'Animations and effects',
      'Newsletter setup',
      'Advanced responsive layout',
      'Unlimited revisions',
      'Basic SEO setup',
      'Priority delivery',
    ],
  },
];

export function PricingSection() {
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const isHeaderInView = useInView(headingRef, { once: true, margin: '-100px' });
  const hasCardsAppeared = useInView(cardsRef, { once: true, margin: '-80px' });

  const [activeCategory, setActiveCategory] = useState<PricingCategory>('Web Development');
  const activePlans = defaultPlans;

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-light-gray/30 to-background" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-12 md:mb-16">
          <Reveal
            as="span"
            variant="zoom"
            delay={0.02}
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-gold-light/10 text-sm font-medium text-foreground mb-4 border border-primary/20"
          >
            Pricing
          </Reveal>
          <Reveal as="h2" variant="up" delay={0.08} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-3 md:mb-4">
            Transparent Pricing by Service
          </Reveal>
          <Reveal as="p" variant="up" delay={0.14} className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Click a service category to see its Basic, Standard, and Premium package pricing.
          </Reveal>
        </div>

        <Reveal
          as="div"
          variant="up"
          delay={0.16}
          className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10"
        >
          {pricingCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`min-h-10 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-foreground to-charcoal-light text-background shadow-lg'
                  : 'bg-card text-muted-foreground hover:bg-foreground/10 border border-border'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </Reveal>

        {/* Pricing Cards (Basic / Standard / Premium) */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {activePlans.map((plan, planIndex) => (
              <motion.div
                key={`${activeCategory}-${plan.tier}`}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, y: 24, scale: 0.97, filter: 'blur(3px)' }}
                animate={
                  hasCardsAppeared
                    ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
                    : { opacity: 0, y: 24, scale: 0.97, filter: 'blur(3px)' }
                }
                exit={{ opacity: 0, y: -18, scale: 0.97, filter: 'blur(3px)' }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: planIndex * 0.06 }}
                className="group premium-panel relative rounded-2xl transition-all duration-500 overflow-hidden h-full"
              >
                {/* Awwwards corner stamp */}
                <img
                  src={awwwardsArt}
                  alt=""
                  className={[
                    'pointer-events-none select-none',
                    'absolute bottom-0 right-0',
                    'w-[56%] h-[84%] object-cover',
                    'opacity-[0.12] mix-blend-multiply',
                    'filter saturate-0 contrast-125',
                    '[mask-image:radial-gradient(closest-side,rgba(0,0,0,1)_45%,rgba(0,0,0,0)_100%)]',
                    'translate-x-[30%] translate-y-[25%]',
                  ].join(' ')}
                  loading="lazy"
                  aria-hidden="true"
                />
                {/* Subtle shine sweep on hover (all cards) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-4 sm:p-6 md:p-8 flex flex-col h-full">
                  <div className="mb-5 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-display font-bold mb-2 flex items-center gap-2">
                      {plan.tier}
                    </h3>
                    <p className="text-3xl sm:text-4xl font-display font-bold text-primary leading-none mb-3">{plan.price}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">Package for {activeCategory}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 flex-1 max-h-none sm:max-h-[260px] overflow-visible sm:overflow-y-auto pr-1">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={`${activeCategory}-${plan.tier}-${feature}`}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + featureIndex * 0.05 }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button variant="gold" size="lg" className="w-full group" asChild>
                      <a href="/#contact-form">Book Now</a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full group" asChild>
                      <a href="tel:+14699607558">Call Now</a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
