import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Reveal } from '@/components/motion/Reveal';
import { RevealStagger } from '@/components/motion/RevealStagger';
import { staggerItem } from '@/lib/motion';

const faqs = [
  {
    question: 'How long does a typical website project take?',
    answer: 'Most standard business websites take 1-3 weeks depending on scope, content readiness, and revision rounds. Larger projects like custom portals or online stores can take longer.',
  },
  {
    question: 'Do you provide domain and hosting setup?',
    answer: 'Yes. We can handle domain connection, hosting setup, SSL, and launch configuration so your website goes live smoothly and securely.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely. We can modernize your current website with better visuals, improved structure, mobile optimization, and conversion-focused UX.',
  },
  {
    question: 'Do you include SEO in your services?',
    answer: 'Yes, we provide foundational on-page SEO with all websites, and we also offer dedicated SEO packages for ongoing growth.',
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer: 'Yes. Every project is built with responsive design so your site performs well on desktop, tablet, and mobile devices.',
  },
  {
    question: 'Can I request changes after delivery?',
    answer: 'Yes. We include revision rounds during the project, and we offer post-launch support plans for future updates and improvements.',
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-12 md:mb-16">
          <Reveal
            as="span"
            variant="zoom"
            delay={0.02}
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-gold-light/10 text-sm font-medium text-foreground mb-4 border border-primary/20"
          >
            FAQ
          </Reveal>
          <Reveal as="h2" variant="up" delay={0.08} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-3">
            Frequently Asked Questions
          </Reveal>
          <Reveal as="p" variant="up" delay={0.12} className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear answers about timelines, support, hosting, and revisions.
          </Reveal>
        </div>

        {/* FAQ Accordion */}
        <Reveal as="div" variant="up" delay={0.12} className="max-w-3xl mx-auto">
          <RevealStagger stagger={reduceMotion ? 0 : 0.1} delayChildren={reduceMotion ? 0 : 0.05}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={staggerItem(!!reduceMotion)}>
                <AccordionItem 
                  value={`item-${index}`} 
                  className="premium-panel rounded-xl px-4 sm:px-5 md:px-6 transition-colors duration-300 border-border/70"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary transition-colors py-4 sm:py-5 text-sm sm:text-base md:text-lg leading-snug">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 pb-5 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </RevealStagger>
        </Reveal>
      </div>
    </section>
  );
}
