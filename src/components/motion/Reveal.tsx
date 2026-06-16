import type { ElementType, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { revealVariants, viewportOnce, type RevealVariant } from '@/lib/motion';

type AsTag = ElementType;

type RevealProps<T extends AsTag> = {
  as?: T;
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  viewport?: HTMLMotionProps<'div'>['viewport'];
} & Omit<HTMLMotionProps<'div'>, 'children'>;

const tagToMotion = {
  div: motion.div,
  section: motion.section,
  header: motion.header,
  main: motion.main,
  article: motion.article,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  ul: motion.ul,
  li: motion.li,
  a: motion.a,
  button: motion.button,
} as const;

export function Reveal<T extends AsTag = 'div'>({
  as,
  children,
  variant = 'up',
  delay = 0,
  viewport = viewportOnce,
  transition,
  ...rest
}: RevealProps<T>) {
  const reduceMotion = useReducedMotion();
  const Tag = (tagToMotion[(as ?? 'div') as keyof typeof tagToMotion] ?? motion.div) as typeof motion.div;

  return (
    <Tag
      variants={revealVariants(variant, !!reduceMotion)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ ...(transition ?? {}), delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

