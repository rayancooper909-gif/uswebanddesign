import { lazy, Suspense } from 'react';
import { Navigation } from '@/components/Navigation';
import { ServicesSection } from '@/components/ServicesSection';
import { BookingForm } from '@/components/BookingForm';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

const whyUs = [
  'Transparent pricing with no hidden fees',
  'Dedicated project manager from day one',
  'Mobile-first, SEO-ready builds on every project',
  'Fast turnaround — most projects launch in 2–4 weeks',
  'Ongoing support and maintenance available',
  'Real results tracked with clear reporting',
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero banner */}
      <section className="pt-32 pb-16 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block rounded-full border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground/80 mb-5">
            What We Do
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-5">
            Services Built to <span className="text-primary">Drive Results</span>
          </h1>
          <p className="text-foreground/65 text-lg max-w-2xl mx-auto">
            From strategy to launch and beyond — every service we offer is designed to grow your business online.
          </p>
        </motion.div>
      </section>

      {/* Image strip */}
      <section className="relative h-56 md:h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80&auto=format&fit=crop"
          alt="Digital marketing and web design workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/65 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-xl md:text-2xl font-display font-bold text-foreground">
              Strategy. Design. Results.
            </p>
            <p className="text-foreground/65 mt-1 text-sm md:text-base">Every service is built to grow your business online</p>
          </div>
        </div>
      </section>

      {/* Existing Services section */}
      <ServicesSection />

      {/* Why choose us */}
      <section className="py-20 bg-secondary/20">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">Why Work With Us?</h2>
            <p className="text-foreground/65 text-base md:text-lg">We've refined our process over hundreds of projects so yours runs smoothly.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyUs.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3 premium-panel rounded-2xl p-5"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <BookingForm
        heading="Ready to Get Started?"
        subheading="Pick the service you need and let's build something great together. Free consultation, no strings attached."
      />

      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
