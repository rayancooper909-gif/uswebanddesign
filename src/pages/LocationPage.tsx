import { lazy, Suspense } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { SEOHead } from '@/components/SEOHead';
import { BookingForm } from '@/components/BookingForm';
import { locations } from '@/data/locations';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

const services = [
  'Custom Website Design & Development',
  'Logo Design & Brand Identity',
  'Local SEO & Google Business Profile',
  'Online Store / E-Commerce',
  'Landing Pages & Sales Funnels',
  'Social Media Marketing',
  'Pay-Per-Click (PPC) Advertising',
  'Domain & Hosting Setup',
];

const whyUs = [
  '5-star rated across Google, Yelp & Trustpilot',
  'Fast 2–4 week project turnaround',
  'No long-term contracts required',
  'Dedicated project manager on every job',
  'Mobile-first, SEO-ready on every build',
  'Post-launch support included',
];

export default function LocationPage() {
  const { location: slug } = useParams<{ location: string }>();
  const loc = locations.find(l => l.slug === slug);

  if (!loc) return <Navigate to="/" replace />;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'US Web and Design',
    description: loc.metaDescription,
    url: `https://uswebanddesign.com/web-design/${loc.slug}`,
    areaServed: {
      '@type': 'City',
      name: loc.city,
      containedInPlace: { '@type': 'State', name: loc.state },
    },
    serviceType: 'Web Design',
    priceRange: '$$',
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEOHead
        title={`${loc.headline} | US Web and Design`}
        description={loc.metaDescription}
        canonical={`https://uswebanddesign.com/web-design/${loc.slug}`}
        schema={schema}
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground/80 mb-5">
            <MapPin className="w-3.5 h-3.5 text-primary" /> {loc.city}, {loc.stateCode}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-5">
            Web Design Services in <span className="text-primary">{loc.city}</span>, {loc.stateCode}
          </h1>
          <p className="text-foreground/65 text-lg max-w-2xl mx-auto mb-8">
            {loc.intro}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="gold" size="xl" asChild>
              <a href="#booking">Get a Free Quote</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Trust bar */}
      <section className="py-8 border-y border-border bg-secondary/30">
        <div className="container-custom flex flex-wrap items-center justify-center gap-6 text-center">
          {[
            { label: '200+ Clients Served', icon: '✓' },
            { label: '5.0★ Google Rating', icon: '★' },
            { label: '5+ Years in Business', icon: '⏱' },
            { label: '2–4 Week Turnaround', icon: '⚡' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2 text-sm font-medium text-foreground/75">
              <Star className="w-4 h-4 text-primary" />
              {item.label}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="container-custom max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              What We Offer in {loc.city}
            </h2>
            <p className="text-foreground/65 text-base md:text-lg">
              Full-service digital solutions for {loc.city} businesses — all under one roof.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-3 premium-panel rounded-2xl px-5 py-4"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="font-medium text-foreground/80">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods / Area coverage */}
      <section className="py-16 bg-secondary/20 px-4">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-4">
              Serving All of {loc.city} and Surrounding Areas
            </h2>
            <p className="text-foreground/60 mb-8">
              We work with businesses throughout {loc.city}, {loc.stateCode}, including:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {loc.neighborhoods.map(n => (
                <span
                  key={n}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground/70"
                >
                  📍 {n}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 px-4">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              Why {loc.city} Businesses Choose Us
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {whyUs.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="premium-panel rounded-2xl p-5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-foreground/80">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 px-4">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Local SEO Content for {loc.city} Businesses</h2>
              <p className="text-foreground/65 leading-relaxed">
                This location page includes city and neighborhood language so it can better match searches like {loc.city} web design, {loc.city} SEO services, and local business website development. The goal is to make the page useful, specific, and easier for search engines to categorize.
              </p>
              <p className="text-foreground/65 leading-relaxed">
                We also talk about nearby areas and service types to expand relevance without sounding repetitive. That helps create a stronger local footprint across the website.
              </p>
            </div>
            <div className="premium-panel rounded-3xl p-6 space-y-3">
              <h3 className="font-display font-semibold text-xl">Location Keywords</h3>
              <ul className="space-y-2 text-foreground/70 text-sm leading-relaxed">
                <li>• {loc.city} web design services</li>
                <li>• Local SEO and Google Business Profile support</li>
                <li>• Website redesigns for small businesses</li>
                <li>• Lead generation and conversion pages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div id="booking">
        <BookingForm
          heading={`Get a Free Quote for Your ${loc.city} Business`}
          subheading={`Tell us about your project and we'll send a custom proposal within 24 hours — no commitment required.`}
          eyebrow={`${loc.city} SEO`}
          contentTitle={`Local Web Design Content for ${loc.city}, ${loc.stateCode}`}
          contentBody={`This page is built to help businesses in ${loc.city} find a web design partner with local relevance. We include service language, nearby neighborhoods, and location-specific content so your site can better match city-based searches.`}
          contentPoints={['Local SEO', `${loc.city} web design`, 'Neighborhood coverage', 'Service pages', 'Quote requests', 'Lead generation']}
        />
      </div>

      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
