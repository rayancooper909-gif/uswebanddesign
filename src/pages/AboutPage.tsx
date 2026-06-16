import { lazy, Suspense } from 'react';
import { Navigation } from '@/components/Navigation';
import { AboutSection } from '@/components/AboutSection';
import { BookingForm } from '@/components/BookingForm';
import { motion } from 'framer-motion';
import { Users, Award, Clock, HeartHandshake } from 'lucide-react';

const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

const stats = [
  { icon: Users, value: '200+', label: 'Clients Served' },
  { icon: Award, value: '5.0★', label: 'Average Rating' },
  { icon: Clock, value: '5+ Yrs', label: 'In Business' },
  { icon: HeartHandshake, value: '98%', label: 'Retention Rate' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero banner */}
      <section className="pt-32 pb-16 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block rounded-full border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground/80 mb-5">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-5">
            The Team Behind <span className="text-primary">Your Growth</span>
          </h1>
          <p className="text-foreground/65 text-lg max-w-2xl mx-auto">
            US Web and Design is a full-service digital agency built to help businesses attract attention, build trust, and convert visitors into customers.
          </p>
        </motion.div>
      </section>

      {/* Stats row */}
      <section className="py-10 border-y border-border bg-secondary/30">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <Icon className="w-6 h-6 text-primary" />
              <span className="text-3xl font-display font-bold">{value}</span>
              <span className="text-sm text-foreground/60">{label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Existing About section */}
      <AboutSection />

      {/* Our story */}
      <section className="py-20 bg-secondary/20">
        <div className="container-custom max-w-3xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-5">Our Story</h2>
            <p className="text-foreground/65 text-base md:text-lg leading-relaxed mb-4">
              We started US Web and Design because we saw too many small and medium businesses get left behind — stuck with outdated sites, unclear branding, and agencies that over-promised and underdelivered.
            </p>
            <p className="text-foreground/65 text-base md:text-lg leading-relaxed mb-4">
              Our approach is different. We treat every client like a partner. We listen first, build second, and stay with you long after launch to make sure your investment keeps paying off.
            </p>
            <p className="text-foreground/65 text-base md:text-lg leading-relaxed">
              From solo entrepreneurs to established brands, we've helped hundreds of businesses look their best online and turn clicks into customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking form */}
      <BookingForm
        heading="Start a Conversation"
        subheading="We'd love to learn about your business and show you what's possible. Book a free, no-pressure call."
      />

      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
