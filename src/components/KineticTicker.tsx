import { motion } from 'framer-motion';

const topRow = [
  'Conversion UX',
  'Premium Motion',
  'Brand Story Layouts',
  'Interactive Experiences',
  'High-Performance Build',
  'Design Systems',
];

const bottomRow = [
  'Lead Generation',
  'SEO Foundation',
  'Creative Direction',
  'Awwwards-Inspired Craft',
  'Mobile-First Polish',
  'Speed + Clarity',
];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const list = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex min-w-max gap-3 py-2"
        animate={reverse ? { x: ['-50%', '0%'] } : { x: ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        {list.map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="inline-flex items-center rounded-full border border-foreground/15 bg-background/80 px-3 py-1 text-[11px] font-medium text-foreground/75 md:text-xs"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function KineticTicker() {
  return (
    <div className="mt-8 md:mt-10 rounded-2xl border border-foreground/10 bg-background/55 backdrop-blur-sm p-3 md:p-4">
      <Row items={topRow} />
      <Row items={bottomRow} reverse />
    </div>
  );
}

