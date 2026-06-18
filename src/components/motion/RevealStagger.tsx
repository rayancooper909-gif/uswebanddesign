import * as React from 'react';
import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { staggerContainer, viewportOnce } from '@/lib/motion';

type RevealStaggerProps = {
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
  viewport?: HTMLMotionProps<'div'>['viewport'];
} & Omit<HTMLMotionProps<'div'>, 'children'>;

export const RevealStagger = React.forwardRef<HTMLDivElement, RevealStaggerProps>(function RevealStagger(
  { children, stagger = 0.06, delayChildren = 0.02, viewport = viewportOnce, ...rest },
  ref
) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer(!!reduceMotion, stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      {...rest}
    >
      {children}
    </motion.div>
  );
});

