import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/motion/Reveal';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

const categories = ['Website', 'Logo', 'Branding'] as const;

type Category = (typeof categories)[number];

const embroideryImgs = import.meta.glob(
  '../assets/portfolio/embroidery/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}',
  {
  eager: true,
  import: 'default',
  }
);
const vectorImgs = import.meta.glob(
  '../assets/portfolio/vector/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}',
  {
  eager: true,
  import: 'default',
  }
);
const patchesImgs = import.meta.glob(
  '../assets/portfolio/patches/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}',
  {
  eager: true,
  import: 'default',
  }
);

function toItems(
  map: Record<string, unknown>,
  category: Category,
  startId: number
): Array<{ id: number; title: string; category: Category; image: string }> {
  const entries = Object.entries(map).sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }));

  return entries.map(([path, src], i) => {
    const filename = path.split('/').pop() ?? path;
    const rawTitle = filename.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim();
    const hideTitle =
      /^img\s*\d+$/i.test(rawTitle) ||
      /^img\s*\d+$/i.test(rawTitle.replace(/\s+/g, '')) ||
      /^img\s*\d+$/i.test(rawTitle.replace(/\s+/g, '').replace(/^img/, 'img ')) ||
      /^img\s*\d+$/i.test(rawTitle.replace(/^img\s*/i, 'img ')) ||
      /^img\s*\d+$/i.test(rawTitle.replace(/^IMG\s*/i, 'img ')) ||
      /^img\s*\d+$/i.test(rawTitle.replace(/^IMG/i, 'img')) ||
      /^img\s*\d+$/i.test(rawTitle.replace(/^IMG /i, 'img ')) ||
      /^img\s*\d+$/i.test(rawTitle.replace(/^IMG_/i, 'img ')) ||
      /^img\s*\d+$/i.test(rawTitle.replace(/^IMG-/i, 'img ')) ||
      /^img\s*\d+$/i.test(rawTitle.replace(/^IMG/i, 'img').replace(/\s+/g, ' ')) ||
      /^img\s*\d+$/i.test(rawTitle.replace(/^IMG/i, 'img').replace(/_/g, ' ')) ||
      /^asset\s*\d+$/i.test(rawTitle) ||
      /^port\s*\d+/i.test(rawTitle);

    const title = hideTitle ? `${category} ${i + 1}` : rawTitle;

    return {
      id: startId + i,
      title,
      category,
      image: src as string,
    };
  });
}

const portfolioItems = [
  ...toItems(embroideryImgs, 'Website', 1),
  ...toItems(vectorImgs, 'Logo', 1000),
  ...toItems(patchesImgs, 'Branding', 2000),
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.82, y: 26, rotateZ: -2, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateZ: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

type PortfolioSectionProps = {
  limit?: number;
  seeMoreTo?: string;
};

export function PortfolioSection({ limit, seeMoreTo = '/portfolio' }: PortfolioSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<Category>('Website');
  const reduceMotion = useReducedMotion();
  const hasEntered = isInView; // once:true, so it stays true after first enter
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[number] | null>(null);

  const filteredItems = portfolioItems.filter((item) => item.category === activeCategory);

  const visibleItems =
    typeof limit === 'number'
      ? filteredItems.slice(0, limit)
      : filteredItems;
  const hasMore = typeof limit === 'number' && filteredItems.length > limit;

  const openItem = (item: (typeof portfolioItems)[number]) => {
    setSelectedItem(item);
    setLightboxOpen(true);
  };

  return (
    <section id="portfolio" className="section-padding section-blue-depth relative overflow-hidden">
      {/* Background */}
      <div className="section-blue-layer absolute inset-0" />
      
      <div className="container-custom relative z-10">
        <Dialog
          open={lightboxOpen}
          onOpenChange={(open) => {
            setLightboxOpen(open);
            if (!open) {
              setSelectedItem(null);
            }
          }}
        >
          <DialogContent
            className="max-w-[96vw] sm:max-w-[94vw] md:max-w-[1180px] max-h-[92vh] p-0 overflow-hidden border-border/70 bg-[#05070a]"
            aria-label="Portfolio image preview"
          >
            {selectedItem && (
              <div className="relative flex max-h-[92vh] items-center justify-center overflow-auto bg-[#05070a] p-2 sm:p-4">
                <DialogTitle className="sr-only">
                  {selectedItem.title || `${selectedItem.category} portfolio image`}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Full-size portfolio preview for the selected image.
                </DialogDescription>

                <img
                  src={selectedItem.image}
                  alt={selectedItem.title || `${selectedItem.category} design`}
                  className="block max-h-[88vh] w-auto max-w-full select-none object-contain"
                  loading="eager"
                  draggable={false}
                />
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Section Header */}
        <div ref={ref} className="text-center mb-10 md:mb-12">
          <Reveal
            as="span"
            variant="zoom"
            delay={0.02}
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-gold-light/10 text-sm font-medium text-foreground mb-4 border border-primary/20"
          >
            Portfolio
          </Reveal>
          <Reveal as="h2" variant="up" delay={0.08} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-3 md:mb-4">
            Our Recent Work
          </Reveal>
          <Reveal as="p" variant="up" delay={0.14} className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Explore websites, logos, and branding work crafted with crisp detail and production-ready polish.
          </Reveal>
        </div>

        {/* Filter Tabs */}
        <Reveal
          as="div"
          variant="up"
          delay={0.16}
          className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`min-h-10 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-foreground to-charcoal-light text-background shadow-lg'
                  : 'bg-background text-[#102033] hover:bg-background/90 hover:text-[#102033] border border-background/30 shadow-sm'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </Reveal>

        {/* Portfolio Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={gridVariants}
          initial={reduceMotion ? false : hasEntered ? 'hidden' : 'hidden'}
          animate={reduceMotion ? undefined : hasEntered ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleItems.map((item) => (
              <motion.div
                key={`${activeCategory}-${item.id}`}
                layout
                variants={reduceMotion ? undefined : itemVariants}
                initial={reduceMotion ? { opacity: 1 } : 'hidden'}
                animate={reduceMotion ? { opacity: 1 } : 'visible'}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 8, transition: { duration: 0.15 } }}
                whileHover={{ y: -8 }}
                transition={reduceMotion ? { duration: 0 } : undefined}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg border border-border/70 bg-background p-3 shadow-sm transition-colors duration-300 hover:border-primary/40 hover:shadow-xl"
                role="button"
                tabIndex={0}
                aria-label={`Open ${item.category} image`}
                onClick={() => openItem(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openItem(item);
                  }
                }}
              >
                {/* Image */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className={`relative z-10 h-full w-full bg-muted/10 ${
                    item.category === 'Website'
                      ? 'object-cover object-top'
                      : 'rounded-md object-contain object-center'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                />

                {/* Muted Overlay */}
                <div className="absolute inset-0 bg-muted/0 group-hover:bg-muted/20 transition-colors duration-300" />

                {/* Border glow */}
                <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-transparent transition-colors duration-300 group-hover:border-primary/20" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <div className="mt-8 md:mt-10 flex justify-center">
            <Link
              to={seeMoreTo}
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 bg-gradient-to-r from-foreground to-charcoal-light text-background shadow-lg hover:shadow-xl"
            >
              See more
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
