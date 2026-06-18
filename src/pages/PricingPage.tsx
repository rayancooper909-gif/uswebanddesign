import { lazy, Suspense } from 'react';
import { Navigation } from '@/components/Navigation';
import { PricingSection } from '@/components/PricingSection';
import { BookingForm } from '@/components/BookingForm';
import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCw, Headphones } from 'lucide-react';

const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

const guarantees = [
  {
    icon: ShieldCheck,
    title: 'Satisfaction Guaranteed',
    desc: "If you're not happy with the first round of designs, we revise until you are — at no extra charge.",
  },
  {
    icon: RefreshCw,
    title: 'Unlimited Revisions',
    desc: 'We refine every detail until it matches your vision. Your approval is the only finish line that matters.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    desc: "After launch, our team is on standby for updates, fixes, and questions. You're never left on your own.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero banner */}
      <section className="pt-32 pb-16 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block rounded-full border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground/80 mb-5">
            Transparent Pricing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-5">
            Simple Plans, <span className="text-primary">Real Value</span>
          </h1>
          <p className="text-foreground/65 text-lg max-w-2xl mx-auto">
            No hidden fees, no surprises. Every plan is built around delivering measurable results for your business.
          </p>
        </motion.div>
      </section>

      {/* Existing Pricing section */}
      <PricingSection />

      {/* Image strip */}
      <section className="relative h-56 md:h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1400&q=80&auto=format&fit=crop"
          alt="Transparent and honest pricing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/65 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-xl md:text-2xl font-display font-bold text-foreground">No Surprises. Just Results.</p>
            <p className="text-foreground/65 mt-1 text-sm md:text-base">Every dollar you invest is tracked and reported</p>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-secondary/20">
        <div className="container-custom max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">Our Guarantees</h2>
            <p className="text-foreground/65 text-base md:text-lg">We stand behind every project we deliver.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="premium-panel rounded-3xl p-8 text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-foreground/65 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 px-4">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Pricing Pages With Real Buying Intent in Mind</h2>
              <p className="text-foreground/65 leading-relaxed">
                A pricing page should do more than list numbers. It should answer the questions people ask before they buy, including what is included, how long the project takes, and what kind of support is available after launch.
              </p>
              <p className="text-foreground/65 leading-relaxed">
                We help shape pricing content around real search phrases like web design pricing, monthly SEO packages, and website maintenance plans so your site can attract visitors who are already comparing options.
              </p>
            </div>
            <div className="premium-panel rounded-3xl p-6 space-y-3">
              <h3 className="font-display font-semibold text-xl">Pricing Topics We Cover</h3>
              <ul className="space-y-2 text-foreground/70 text-sm leading-relaxed">
                <li>• Custom quotes for design and development</li>
                <li>• SEO and marketing retainers</li>
                <li>• Support, revisions, and maintenance</li>
                <li>• Project scope, timelines, and deliverables</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking form */}
      <BookingForm
        heading="Get a Custom Quote"
        subheading="Not sure which plan fits? Book a free call and we'll recommend the best option for your budget and goals."
        eyebrow="Pricing & Quotes"
        contentTitle="Pricing Pages That Answer Cost Questions Up Front"
        contentBody="People often search for web design pricing, SEO packages, and ongoing support before they contact a business. We help shape that intent into useful copy so visitors understand your offer faster and keep moving toward a quote."
        contentPoints={['Web design pricing', 'SEO packages', 'Maintenance plans', 'Ongoing support', 'Custom quotes', 'Transparent costs']}
      />

      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
