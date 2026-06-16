import { motion, useReducedMotion } from 'framer-motion';

export function NeedleAnimation() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle geometric pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stitchPattern" patternUnits="userSpaceOnUse" width="60" height="60">
              <path
                d="M0 30h60M30 0v60"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="4 8"
              />
              <path
                d="M0 0l60 60M60 0L0 60"
                stroke="currentColor"
                strokeWidth="0.3"
                strokeDasharray="2 12"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stitchPattern)" className="text-foreground" />
        </svg>
      </div>

      {/* Animated stitch lines */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[240px] sm:w-[600px] sm:h-[400px] md:w-[800px] md:h-[500px]"
        viewBox="0 0 800 500"
        fill="none"
      >
        <defs>
          <linearGradient id="stitchGrad" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="0.22" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
            <stop offset="0.62" stopColor="hsl(var(--gold-light))" stopOpacity="0.65" />
            <stop offset="1" stopColor="hsl(var(--gold-light))" stopOpacity="0" />
          </linearGradient>
          <filter id="stitchGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="stitchGlowStrong" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* First stitch line */}
        <motion.path
          d="M100 250 Q200 200 300 250 T500 250 T700 250"
          stroke="url(#stitchGrad)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeDasharray="10 20"
          filter="url(#stitchGlowStrong)"
          initial={reduceMotion ? { opacity: 0.42 } : { strokeDashoffset: 140, opacity: 0.42 }}
          animate={
            reduceMotion
              ? undefined
              : {
                  strokeDashoffset: [140, 0, 140],
                  opacity: [0.28, 0.55, 0.28],
                }
          }
          transition={{
            duration: 5.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.6,
          }}
        />

        {/* Second stitch line */}
        <motion.path
          d="M150 300 Q250 350 350 300 T550 300 T750 300"
          stroke="url(#stitchGrad)"
          strokeWidth="2.0"
          strokeLinecap="round"
          strokeDasharray="8 16"
          filter="url(#stitchGlow)"
          initial={reduceMotion ? { opacity: 0.30 } : { strokeDashoffset: 90, opacity: 0.30 }}
          animate={
            reduceMotion
              ? undefined
              : {
                  strokeDashoffset: [90, 0, 90],
                  opacity: [0.20, 0.38, 0.20],
                }
          }
          transition={{
            duration: 6.0,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.5,
            delay: 0.6,
          }}
        />

        {/* Third stitch line (adds detail) */}
        <motion.path
          d="M90 210 Q200 140 310 210 T530 210 T740 210"
          stroke="url(#stitchGrad)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="6 14"
          filter="url(#stitchGlow)"
          initial={reduceMotion ? { opacity: 0.22 } : { strokeDashoffset: 110, opacity: 0.22 }}
          animate={
            reduceMotion
              ? undefined
              : {
                  strokeDashoffset: [110, 0, 110],
                  opacity: [0.14, 0.28, 0.14],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 7.2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'loop',
                  repeatDelay: 0.8,
                  delay: 0.2,
                }
          }
        />

        {/* Needle */}
        <motion.g
          initial={reduceMotion ? { opacity: 0.7 } : { x: 0, opacity: 0 }}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 600, 0],
                  opacity: [0, 1, 1, 0],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 5.6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.6,
                }
          }
        >
          {/* Needle glow */}
          <line
            x1="100"
            y1="240"
            x2="140"
            y2="260"
            stroke="hsl(var(--gold-light) / 0.45)"
            strokeWidth="7"
            strokeLinecap="round"
            filter="url(#stitchGlowStrong)"
          />
          <line
            x1="100"
            y1="240"
            x2="140"
            y2="260"
            stroke="hsl(var(--foreground))"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Needle eye sparkle */}
          <motion.circle
            cx="100"
            cy="240"
            r="3.8"
            fill="hsl(var(--primary))"
            filter="url(#stitchGlow)"
            animate={reduceMotion ? undefined : { r: [3.4, 4.4, 3.4], opacity: [0.7, 1, 0.7] }}
            transition={reduceMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.g>
      </svg>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-2 h-2 rounded-full bg-gold-light/40 blur-[0.5px]"
        animate={reduceMotion ? undefined : { y: [-10, 10, -10], opacity: [0.25, 0.55, 0.25] }}
        transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-32 w-3 h-3 rounded-full bg-primary/25 blur-[0.5px]"
        animate={reduceMotion ? undefined : { y: [10, -10, 10], opacity: [0.18, 0.4, 0.18] }}
        transition={reduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-32 left-24 w-2.5 h-2.5 rounded-full bg-primary/20 blur-[0.5px]"
        animate={reduceMotion ? undefined : { y: [-8, 14, -8], opacity: [0.12, 0.32, 0.12] }}
        transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
      <motion.div
        className="absolute bottom-28 right-28 w-2 h-2 rounded-full bg-gold-light/25 blur-[0.5px]"
        animate={reduceMotion ? undefined : { y: [12, -10, 12], opacity: [0.10, 0.28, 0.10] }}
        transition={reduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
    </div>
  );
}
