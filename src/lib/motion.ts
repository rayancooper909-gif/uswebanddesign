import type { Transition, Variants } from 'framer-motion';

export const viewportOnce = {
  once: true,
  margin: '-6% 0px -6% 0px',
} as const;

export const easeOutTransition = (opts?: Partial<Transition>): Transition => ({
  duration: 0.45,
  ease: [0.25, 0.8, 0.25, 1],
  ...opts,
});

export type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'zoom';

export function revealVariants(variant: RevealVariant, reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: easeOutTransition({ duration: 0.5 }) },
    };
  }

  const baseHidden = { opacity: 0 } as const;
  const baseVisible = { opacity: 1, transition: easeOutTransition() } as const;

  switch (variant) {
    case 'up':
      return { hidden: { ...baseHidden, y: 12 }, visible: { ...baseVisible, y: 0 } };
    case 'down':
      return { hidden: { ...baseHidden, y: -12 }, visible: { ...baseVisible, y: 0 } };
    case 'left':
      return { hidden: { ...baseHidden, x: 12 }, visible: { ...baseVisible, x: 0 } };
    case 'right':
      return { hidden: { ...baseHidden, x: -12 }, visible: { ...baseVisible, x: 0 } };
    case 'zoom':
    default:
      return { hidden: { ...baseHidden, scale: 0.98, y: 8 }, visible: { ...baseVisible, scale: 1, y: 0 } };
  }
}

export function staggerContainer(reduceMotion: boolean, stagger: number = 0.12, delayChildren: number = 0.05): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: easeOutTransition({ duration: 0.5 }) },
    };
  }
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ...easeOutTransition({ duration: 0.35 }),
        staggerChildren: Math.min(stagger, 0.06),
        delayChildren: Math.min(delayChildren, 0.02),
      },
    },
  };
}

export function staggerItem(reduceMotion: boolean): Variants {
  return revealVariants('up', reduceMotion);
}

