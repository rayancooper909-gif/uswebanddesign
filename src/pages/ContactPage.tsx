import { lazy, Suspense } from 'react';
import { Navigation } from '@/components/Navigation';
import { ContactSection } from '@/components/ContactSection';
import { motion } from 'framer-motion';
import { Clock, Mail, Phone, MapPin } from 'lucide-react';

const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

const faqs = [
  {
    q: 'How quickly can you start on my project?',
    a: 'We typically onboard new clients within 2–3 business days. Urgent projects can often be fast-tracked — just mention it when you reach out.',
  },
  {
    q: 'Do you work with businesses outside the US?',
    a: 'Absolutely. We work with clients across the US, Canada, and internationally. All communication is done remotely via email, video calls, and project dashboards.',
  },
  {
    q: "What's included in a free consultation?",
    a: "We'll review your current online presence, listen to your goals, and outline a custom strategy — completely free, no commitment required.",
  },
  {
    q: 'How long does a typical website project take?',
    a: 'Most websites launch within 2–4 weeks. Larger projects with e-commerce, custom features, or extensive content may take 4–8 weeks.',
  },
];

const contactDetails = [
  { icon: Mail, label: 'Email Us', value: 'hello@uswebanddesign.com' },
  { icon: Phone, label: 'Call Us', value: '+1 (800) 000-0000' },
  { icon: MapPin, label: 'Location', value: 'United States — Remote Friendly' },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri, 9am–6pm PST' },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero banner */}
      <section className="pt-32 pb-16 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block rounded-full border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground/80 mb-5">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-5">
            Let's <span className="text-primary">Talk Business</span>
          </h1>
          <p className="text-foreground/65 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to explore the possibilities? We're here to help — reach out and we'll respond within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* Contact details */}
      <section className="py-10 border-y border-border bg-secondary/30">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {contactDetails.map(({ icon: Icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <Icon className="w-5 h-5 text-primary" />
              <span className="text-xs font-medium text-foreground/50 uppercase tracking-wider">{label}</span>
              <span className="text-sm font-semibold text-foreground">{value}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Existing contact / form section */}
      <ContactSection />

      {/* FAQ */}
      <section className="py-20 bg-secondary/20">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">Common Questions</h2>
            <p className="text-foreground/65">Quick answers before you reach out.</p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="premium-panel rounded-2xl p-6 space-y-2"
              >
                <h3 className="font-bold text-foreground">{q}</h3>
                <p className="text-foreground/65 text-sm leading-relaxed">{a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
