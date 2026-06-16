import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { RevealStagger } from '@/components/motion/RevealStagger';
import { staggerItem } from '@/lib/motion';

type ReviewPlatform = 'Google Reviews' | 'Yelp' | 'Trustpilot';

const testimonials = [
  {
    platform: 'Google Reviews' as const,
    quote: "Bold Digitizing has transformed our workflow. Their 3-4 hour turnaround means we never miss a deadline. The quality is consistently flawless.",
    author: 'Sarah Mitchell',
    title: 'Owner, ThreadWorks Embroidery',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
  {
    platform: 'Yelp' as const,
    quote: "After trying five different digitizing services, we finally found one that understands embroidery. Their files run perfectly on all our machines.",
    author: 'Michael Chen',
    title: 'Production Manager, Elite Stitches',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
  {
    platform: 'Trustpilot' as const,
    quote: "The retainer plan is incredible value. Having a dedicated digitizer who knows our style has saved us countless hours of back-and-forth.",
    author: 'Jennifer Rodriguez',
    title: 'CEO, Custom Caps Co.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
  {
    platform: 'Google Reviews' as const,
    quote: 'Clean files, fast delivery, and the stitching is smooth every time. Exactly what we needed.',
    author: 'David Parker',
    title: 'Shop Manager, Lone Star Embroidery',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
  {
    platform: 'Yelp' as const,
    quote: 'Great communication and quality. Revisions were quick and the final file ran perfectly on our machines.',
    author: 'Aisha Khan',
    title: 'Owner, Stitch & Co.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
  {
    platform: 'Trustpilot' as const,
    quote: 'Consistent results and super reliable turnaround. We’ve been sending everything here lately.',
    author: 'Carlos Rivera',
    title: 'Production Lead, CapWorks',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
];

function platformStarColor(platform: ReviewPlatform): string {
  if (platform === 'Yelp') return '#D32323';
  if (platform === 'Trustpilot') return '#00B67A';
  return '#F4B400';
}

function PlatformBadge({ platform }: { platform: ReviewPlatform }) {
  return (
    <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-medium text-[#111827] shadow-sm sm:text-xs">
      <span aria-hidden="true" className="grid h-4 w-4 place-items-center rounded-full bg-white border border-black/10">
        {platform === 'Google Reviews' ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              d="M12 10.2v3.9h5.45c-.25 1.27-1.46 3.72-5.45 3.72-3.28 0-5.95-2.72-5.95-6.07 0-3.35 2.67-6.07 5.95-6.07 1.87 0 3.12.8 3.83 1.49l2.61-2.58C16.83 3.62 14.62 2.5 12 2.5 6.97 2.5 2.9 6.65 2.9 11.75S6.97 21 12 21c6.96 0 8.67-4.93 8.67-7.42 0-.5-.06-.88-.13-1.26H12z"
              fill="#4285F4"
            />
            <path
              d="M4.35 7.63l3.2 2.35C8.42 8.2 10.08 7 12 7c1.87 0 3.12.8 3.83 1.49l2.61-2.58C16.83 3.62 14.62 2.5 12 2.5c-3.5 0-6.52 2.01-7.65 5.13z"
              fill="#EA4335"
              opacity="0.9"
            />
            <path
              d="M12 21c2.56 0 4.71-.85 6.28-2.31l-2.9-2.25c-.78.54-1.83 1.1-3.38 1.1-2.64 0-4.87-1.8-5.67-4.28l-3.17 2.44C4.28 18.92 7.8 21 12 21z"
              fill="#34A853"
              opacity="0.9"
            />
            <path
              d="M6.33 13.26c-.2-.62-.32-1.28-.32-1.97 0-.68.12-1.35.32-1.97L3.16 6.88C2.68 7.88 2.4 8.99 2.4 10.18c0 1.2.28 2.3.76 3.3l3.17-2.22z"
              fill="#FBBC05"
              opacity="0.9"
            />
          </svg>
        ) : platform === 'Yelp' ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              fill="#D32323"
              d="M12.64 2.27c-.63-.25-1.35.1-1.52.76l-1.3 5.1c-.15.6.17 1.21.74 1.42l3.43 1.23c.67.24 1.4-.16 1.55-.84l1.13-5.1c.14-.64-.22-1.27-.84-1.51L12.64 2.27zm-5.9 6.86c-.57-.35-1.34-.17-1.69.4l-2.8 4.55c-.33.53-.18 1.22.34 1.56l3.11 2.04c.55.36 1.3.2 1.64-.36l2.86-4.64c.33-.54.15-1.24-.4-1.57L6.74 9.13zm12.23 0-2.92 1.92c-.55.36-.73 1.06-.4 1.6l2.86 4.63c.34.55 1.09.71 1.64.35l3.1-2.03c.52-.34.67-1.03.34-1.57l-2.79-4.54c-.35-.57-1.12-.75-1.69-.4zM12 13.67c-.64 0-1.16.52-1.16 1.16v5.4c0 .65.52 1.17 1.16 1.17h3.78c.64 0 1.16-.52 1.16-1.16v-3.78c0-.64-.52-1.16-1.16-1.16H12z"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              fill="#00B67A"
              d="M12 2.6l2.86 5.79 6.4.93-4.63 4.51 1.09 6.37L12 17.72 6.28 20.2l1.09-6.37L2.74 9.32l6.4-.93L12 2.6z"
            />
            <path
              fill="#005128"
              d="M12 17.72l4.63-3.38-1.09 6.37L12 17.72z"
              opacity="0.85"
            />
          </svg>
        )}
      </span>
      <span className="truncate">{platform}</span>
    </div>
  );
}

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-light-gray/20 to-background" />
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-primary/5 via-transparent to-transparent blur-3xl sm:h-[1000px] sm:w-[1000px]" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div ref={ref} className="mb-12 text-center sm:mb-16">
          <Reveal
            as="span"
            variant="zoom"
            delay={0.02}
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-gold-light/10 text-sm font-medium text-foreground mb-4 border border-primary/20"
          >
            Testimonials
          </Reveal>
          <Reveal as="h2" variant="up" delay={0.08} className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Trusted by Shop Owners
          </Reveal>
        </div>

        {/* Testimonials Grid */}
        <RevealStagger
          className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          stagger={reduceMotion ? 0 : 0.14}
          delayChildren={reduceMotion ? 0 : 0.06}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={staggerItem(!!reduceMotion)}
              whileHover={reduceMotion ? undefined : { y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="rounded-2xl border border-black/10 bg-white/95 p-5 shadow-sm sm:p-7">
                <div className="relative z-10">
                  {/* Header (native-style) */}
                  <div className="mb-4 flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="h-11 w-11 rounded-full object-cover border border-black/10"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <p className="font-display font-semibold text-[#111827] leading-tight truncate">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-black/55 leading-tight truncate">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>

                    <div className="max-w-full self-start">
                      <PlatformBadge platform={testimonial.platform} />
                    </div>
                  </div>

                  {/* Rating row */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.35 + i * 0.06 }}
                        >
                          <Star
                            className="w-4 h-4"
                            style={{
                              fill: platformStarColor(testimonial.platform),
                              color: platformStarColor(testimonial.platform),
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                    <span className="text-xs text-black/50">Verified review</span>
                  </div>

                  {/* Review text */}
                  <p className="text-sm leading-relaxed text-black/70 sm:text-base">
                    {testimonial.quote}
                  </p>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                style={{ boxShadow: '0 20px 60px -28px rgba(0,0,0,0.25)' }}
              />
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
