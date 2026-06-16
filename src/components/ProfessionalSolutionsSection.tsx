import { motion, useReducedMotion } from 'framer-motion';
import {
  BadgePercent,
  Clock3,
  HandCoins,
  KeyRound,
  ReceiptText,
  UserCheck,
} from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { RevealStagger } from '@/components/motion/RevealStagger';
import { staggerItem } from '@/lib/motion';

const solutionItems = [
  {
    icon: BadgePercent,
    title: '100% Satisfaction Guarantee',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Project Manager',
  },
  {
    icon: KeyRound,
    title: '100% Ownership Rights',
  },
  {
    icon: HandCoins,
    title: 'Money Back Guarantee',
  },
  {
    icon: ReceiptText,
    title: 'Transparent Pricing',
  },
  {
    icon: Clock3,
    title: 'Fast Turnaround',
  },
];

export function ProfessionalSolutionsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="professional-solutions" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="container-custom relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <Reveal
            as="h2"
            variant="up"
            delay={0.08}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight uppercase"
          >
            The Most Professional Solutions
          </Reveal>
          <Reveal
            as="p"
            variant="up"
            delay={0.14}
            className="mt-4 text-muted-foreground max-w-3xl mx-auto leading-relaxed text-sm md:text-base"
          >
            Whether you need a website, logo, branding, or marketing support, we deliver business
            solutions with clear process, clear pricing, and complete ownership.
          </Reveal>
        </div>

        <RevealStagger
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-7"
          stagger={reduceMotion ? 0 : 0.1}
          delayChildren={reduceMotion ? 0 : 0.08}
        >
          {solutionItems.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem(!!reduceMotion)}
              whileHover={{ y: -2 }}
              className="group relative text-center"
            >
              <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-sm sm:text-base md:text-lg font-display font-semibold leading-snug">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
