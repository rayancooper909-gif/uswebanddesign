import { motion, useReducedMotion } from 'framer-motion';
import {
  BadgeDollarSign,
  BadgeHelp,
  Megaphone,
  MonitorSmartphone,
  Palette,
  Search,
  ShoppingCart,
  Signature,
} from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { RevealStagger } from '@/components/motion/RevealStagger';
import { staggerItem } from '@/lib/motion';

const serviceTags = [
  'Web Development',
  'Logo Design',
  'Business Cards',
  'Branding',
  'Web Content',
  'Online Store',
  'SMM',
  'SEO',
  'PPC',
];

const services = [
  {
    title: 'Web Development',
    subtitle: 'Modern, responsive websites built for speed and conversions.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Logo Design',
    subtitle: 'Distinctive logo systems that make your brand recognizable.',
    icon: Signature,
  },
  {
    title: 'Business Cards',
    subtitle: 'Premium card layouts that reflect your brand quality.',
    icon: BadgeDollarSign,
  },
  {
    title: 'Branding',
    subtitle: 'Consistent visual identity across digital and print touchpoints.',
    icon: Palette,
  },
  {
    title: 'Web Content',
    subtitle: 'Clear, persuasive messaging written for users and search.',
    icon: BadgeHelp,
  },
  {
    title: 'Online Store',
    subtitle: 'Sales-focused eCommerce stores with smooth buying flow.',
    icon: ShoppingCart,
  },
  {
    title: 'SMM & PPC',
    subtitle: 'Performance marketing campaigns that generate quality leads.',
    icon: Megaphone,
  },
  {
    title: 'SEO',
    subtitle: 'Technical and on-page optimization for long-term growth.',
    icon: Search,
  },
];

export function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-light-gray/40 to-background" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <Reveal
            as="span"
            variant="zoom"
            delay={0.02}
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-gold-light/10 text-sm font-medium text-foreground mb-4 border border-primary/20"
          >
            Our Services
          </Reveal>
          <Reveal
            as="h2"
            variant="up"
            delay={0.08}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight"
          >
            Solutions for Every Growth Stage
          </Reveal>
        </div>

        <Reveal as="div" variant="up" delay={0.12} className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10">
          {serviceTags.map((tag) => (
            <span
              key={tag}
              className="px-3 sm:px-4 py-1 text-[11px] sm:text-xs md:text-sm font-medium border border-primary/30 bg-card/70 text-foreground/85"
            >
              {tag}
            </span>
          ))}
        </Reveal>

        <RevealStagger
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
          stagger={reduceMotion ? 0 : 0.1}
          delayChildren={reduceMotion ? 0 : 0.05}
        >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={staggerItem(!!reduceMotion)}
                whileHover={{ y: -6 }}
                className="premium-panel relative h-full rounded-2xl p-4 sm:p-5 md:p-6 overflow-hidden"
              >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-white/10 to-accent/6" />
              <div className="relative z-10">
                <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl border border-primary/25 bg-background/70 flex items-center justify-center mb-3 sm:mb-4">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-display font-semibold leading-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

