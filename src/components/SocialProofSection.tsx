import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { RevealStagger } from '@/components/motion/RevealStagger';
import { staggerItem } from '@/lib/motion';

const stats = [
  {
    number: 5000,
    suffix: '+',
    label: 'Designs Delivered',
    accent: true,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    number: 500,
    suffix: '+',
    label: 'Embroidery Shops Trust Us',
    accent: false,
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    number: 99,
    suffix: '%',
    label: 'On-Time Delivery',
    accent: false,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    number: 4,
    suffix: 'hrs',
    label: 'Average Turnaround',
    accent: true,
    gradient: 'from-rose-500 to-pink-500',
  },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

function StatItem({
  stat,
  index,
  isInView,
  reduceMotion,
}: {
  stat: (typeof stats)[0];
  index: number;
  isInView: boolean;
  reduceMotion: boolean;
}) {
  const count = useCountUp(stat.number, 2000, isInView);

  return (
    <motion.div
      variants={staggerItem(reduceMotion)}
      whileHover={{ scale: 1.05, y: -5 }}
      className="text-center group"
    >
      <div className="relative inline-block">
        {/* Gradient accent lines */}
        <motion.div 
          className={`absolute -top-3 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100`}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.p 
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {count.toLocaleString()}{stat.suffix}
        </motion.p>
        
        <motion.div 
          className={`absolute -bottom-3 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100`}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <motion.p 
        className="text-sm md:text-base text-muted-foreground mt-4 group-hover:text-foreground transition-colors"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      >
        {stat.label}
      </motion.p>
    </motion.div>
  );
}

export function SocialProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Gradient border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      <div className="container-custom relative z-10">
        <RevealStagger
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          stagger={reduceMotion ? 0 : 0.14}
          delayChildren={reduceMotion ? 0 : 0.05}
        >
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              stat={stat}
              index={index}
              isInView={isInView}
              reduceMotion={!!reduceMotion}
            />
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
