import type { Transition, Variants } from 'framer-motion';

export const viewportOnce = {
  once: true,
  margin: '-10% 0px -10% 0px',
} as const;

export const easeOutTransition = (opts?: Partial<Transition>): Transition => ({
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
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
      return { hidden: { ...baseHidden, y: 28, scale: 0.98 }, visible: { ...baseVisible, y: 0, scale: 1 } };
    case 'down':
      return { hidden: { ...baseHidden, y: -28, scale: 0.98 }, visible: { ...baseVisible, y: 0, scale: 1 } };
    case 'left':
      return { hidden: { ...baseHidden, x: 28, scale: 0.98 }, visible: { ...baseVisible, x: 0, scale: 1 } };
    case 'right':
      return { hidden: { ...baseHidden, x: -28, scale: 0.98 }, visible: { ...baseVisible, x: 0, scale: 1 } };
    case 'zoom':
    default:
      return { hidden: { ...baseHidden, scale: 0.92, y: 10 }, visible: { ...baseVisible, scale: 1, y: 0 } };
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
        ...easeOutTransition({ duration: 0.6 }),
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}

export function staggerItem(reduceMotion: boolean): Variants {
  return revealVariants('up', reduceMotion);
}

