import { motion } from 'framer-motion';

const items = [
  'Conversion UX',
  'Premium Motion',
  'Lead Generation',
  'SEO Foundation',
  'Mobile-First Polish',
  'Speed + Clarity',
];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const list = [...items, ...items];
  return (
    <div className="ticker-row relative overflow-hidden">
      <motion.div
        className="flex min-w-max gap-3 py-2"
        animate={reverse ? { x: ['-50%', '0%'] } : { x: ['0%', '-50%'] }}
        transition={{ duration: 260, repeat: Infinity, ease: 'linear' }}
      >
        {list.map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="ticker-chip inline-flex items-center rounded-full border border-foreground/15 bg-background/80 px-3 py-1 text-[11px] font-medium text-foreground/75 md:text-xs"
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
    <div className="kinetic-ticker mt-8 md:mt-10 rounded-2xl border border-foreground/10 bg-background/55 backdrop-blur-sm p-3 md:p-4">
      <Row items={items} />
    </div>
  );
}
