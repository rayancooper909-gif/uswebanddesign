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

      {/* Booking form */}
      <BookingForm
        heading="Get a Custom Quote"
        subheading="Not sure which plan fits? Book a free call and we'll recommend the best option for your budget and goals."
      />

      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
