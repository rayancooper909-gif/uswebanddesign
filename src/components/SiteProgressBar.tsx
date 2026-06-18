import { motion, useScroll, useSpring } from 'framer-motion';

export function SiteProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-primary via-gold-light to-primary shadow-[0_0_12px_hsla(352,78%,46%,0.35)] will-change-transform pointer-events-none"
      style={{ scaleX }}
    />
  );
}
