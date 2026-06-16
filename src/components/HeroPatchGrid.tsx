import { motion, useReducedMotion } from 'framer-motion';
import ufo from '@/assets/decor/patch-grid/ufo.png';
import cassette from '@/assets/decor/patch-grid/cassette.png';
import mountain from '@/assets/decor/patch-grid/mountain.png';

const tiles = [ufo, cassette, mountain];

function Tile({ src, rotate = 0, scale = 1 }: { src: string; rotate?: number; scale?: number }) {
  return (
    <div className="relative rounded-3xl bg-background/60 border border-border shadow-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-gold-light/10 opacity-70" />
      <motion.img
        src={src}
        alt=""
        aria-hidden="true"
        className="relative z-10 w-full h-full object-cover opacity-[0.95]"
        style={{ rotate, scale }}
        loading="lazy"
        draggable={false}
      />
    </div>
  );
}

export function HeroPatchGrid({
  className,
  direction = 'down',
}: {
  className?: string;
  direction?: 'up' | 'down';
}) {
  const reduceMotion = useReducedMotion();

  // Keep the 2-column vibe, but bias the early tiles so all 3 images
  // show up immediately (instead of looking like only 1-2 assets repeat).
  const sequence = [ufo, cassette, mountain, ufo, ...tiles, ...tiles, ...tiles];

  const baseGrid = (
    <div className="grid grid-cols-2 gap-4">
      {Array.from({ length: 10 }).map((_, i) => {
        const src = sequence[i % sequence.length];
        const rotate = i % 2 === 0 ? -2 : 2;
        const scale = i % 3 === 0 ? 1.04 : 1;
        return (
          <div key={i} className="aspect-[4/5]">
            <Tile src={src} rotate={rotate} scale={scale} />
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={['pointer-events-none select-none absolute inset-0 overflow-hidden', className ?? ''].join(' ')}>
      {/* soft wash so the grid feels editorial */}
      <div className="absolute -inset-16 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl opacity-60" />
      <div className="absolute -inset-16 bg-gradient-radial from-gold-light/10 via-transparent to-transparent blur-3xl opacity-50" />

      {/* column wrapper */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: 0.18,
          filter: 'saturate(0.9) contrast(1.05)',
          maskImage: 'radial-gradient(closest-side, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'radial-gradient(closest-side, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)',
        }}
        animate={
          reduceMotion
            ? undefined
            : direction === 'down'
              ? { y: ['-18%', '0%'] }
              : { y: ['0%', '-18%'] }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 18,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }
        }
      >
        {/* duplicate grid to avoid gaps */}
        <div className="absolute inset-0 px-4 py-10">{baseGrid}</div>
        <div className="absolute inset-0 px-4 py-10 translate-y-[55%]">{baseGrid}</div>
      </motion.div>

      {/* grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}

