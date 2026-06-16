import { Globe2, Layers3, Rocket } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

const aboutHighlights = [
  {
    icon: Layers3,
    title: 'Strategy + Design + Development',
    description: 'We align every project around business goals, then turn strategy into polished design and clean build execution.',
  },
  {
    icon: Rocket,
    title: 'Launches Built for Growth',
    description: 'From landing pages to full websites, we deliver conversion-focused experiences that support long-term scale.',
  },
  {
    icon: Globe2,
    title: 'End-to-End Digital Support',
    description: 'Content structure, technical setup, SEO-ready foundations, and post-launch optimization come together in one team.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-gray/50 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <Reveal
              as="span"
              variant="zoom"
              delay={0.02}
              className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-gold-light/10 text-sm font-medium text-foreground mb-4 border border-primary/20"
            >About Us</Reveal>
            <Reveal
              as="h2"
              variant="up"
              delay={0.08}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-5 md:mb-6"
            >
              Building Digital Experiences
              <br />
              <span className="bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent">That Move Businesses Forward</span>
            </Reveal>
            <Reveal
              as="p"
              variant="up"
              delay={0.14}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              We are a full-service digital agency helping brands stand out online with high-performing
              websites, clear messaging, and intentional user journeys. Whether you are launching a new
              brand or improving an existing site, we combine strategy, design, and development to create
              digital experiences that look great and drive measurable results.
            </Reveal>
          </div>

          <Reveal as="div" variant="up" delay={0.12} className="max-w-3xl mx-auto">
            <div className="mt-6 md:mt-8 space-y-4 md:space-y-5">
              {aboutHighlights.map((value) => (
                <div key={value.title} className="flex items-start gap-3 md:gap-4">
                  <value.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base md:text-lg font-display font-semibold">{value.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-6 md:mt-8 grid grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto">
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-display font-bold text-primary">120+</p>
              <p className="text-xs text-muted-foreground mt-1">Projects delivered</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-display font-bold text-primary">98%</p>
              <p className="text-xs text-muted-foreground mt-1">Client satisfaction</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
