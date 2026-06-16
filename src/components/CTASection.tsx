import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { HeroPatchGrid } from './HeroPatchGrid';

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground via-charcoal to-foreground" />

          {/* Hero-style patch wall (subtle) */}
          <div
            className="absolute inset-0 opacity-[0.55]"
            style={{
              maskImage: 'radial-gradient(closest-side, rgba(0,0,0,1) 42%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'radial-gradient(closest-side, rgba(0,0,0,1) 42%, rgba(0,0,0,0) 100%)',
            }}
            aria-hidden="true"
          >
            <div className="hidden md:block absolute -left-[6%] top-0 h-full w-[46%] rotate-[-2deg]">
              <HeroPatchGrid direction="up" />
            </div>
            <div className="hidden md:block absolute -right-[6%] top-0 h-full w-[46%] rotate-[2deg]">
              <HeroPatchGrid direction="down" />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-gold-light/15 via-transparent to-transparent rounded-full blur-3xl" />

          {/* Readability overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/75 via-foreground/65 to-foreground/80" />
          
          {/* Content */}
          <div className="relative z-10 py-16 md:py-24 px-8 md:px-16 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-background mb-6"
            >
              Ready to Transform Your{' '}
              <span className="text-primary">Workflow?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-background/70 text-lg mb-8 max-w-xl mx-auto"
            >
              Join 500+ embroidery shops that trust Bold Digitizing for precision digitizing. 
              Get your first design in hours, not days.
            </motion.p>
            
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:bg-gold-dark hover:shadow-gold group"
            >
              Request a Quote
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
