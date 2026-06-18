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
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
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
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop"
                alt="US Web and Design team collaborating"
                className="rounded-3xl w-full h-80 md:h-96 object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-2xl px-5 py-3 text-sm font-semibold shadow-lg">
                200+ Happy Clients
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual strip */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80&auto=format&fit=crop"
          alt="Modern agency workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Built on Trust. Proven by Results.
            </p>
            <p className="text-foreground/70 mt-2 text-base md:text-lg">5+ years serving businesses across the US</p>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 px-4">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">About US Web and Design</h2>
              <p className="text-foreground/65 leading-relaxed">
                US Web and Design is a web design company focused on building websites that are easy to find, easy to trust, and easy to contact. We work on business websites, local landing pages, SEO-friendly service pages, and brand-focused redesigns for companies that want more from their online presence.
              </p>
              <p className="text-foreground/65 leading-relaxed">
                Our process combines design, copy, and search intent so your pages can support Google indexing while still feeling natural for real visitors. That means stronger relevance for searches like web design services, branding support, and local business websites.
              </p>
            </div>
            <div className="premium-panel rounded-3xl p-6 space-y-3">
              <h3 className="font-display font-semibold text-xl">What We Build</h3>
              <ul className="space-y-2 text-foreground/70 text-sm leading-relaxed">
                <li>• Website redesigns for growing businesses</li>
                <li>• Local SEO pages for city and service terms</li>
                <li>• Conversion-focused landing pages and quote pages</li>
                <li>• Brand identity and content structure for better trust</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking form */}
      <BookingForm
        heading="Start a Conversation"
        subheading="We'd love to learn about your business and show you what's possible. Book a free, no-pressure call."
        eyebrow="About Our Agency"
        contentTitle="A Web Design Partner Focused on Real Search Demand"
        contentBody="US Web and Design helps businesses build pages that answer real search intent. That means clearer service pages, better local visibility, stronger brand trust, and more opportunities for customers to contact you."
        contentPoints={['About page SEO', 'Service pages', 'Brand messaging', 'Local visibility', 'Website refresh', 'Lead capture']}
      />

      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
