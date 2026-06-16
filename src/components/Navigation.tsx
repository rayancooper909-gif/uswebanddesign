import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import usaLogo from '@/assets/brand/WEB AND DESIGN 01.jpg';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="relative z-50 px-3 sm:px-4 md:px-8 py-3 sm:py-4 my-[2px]"
    >
      <nav className={`container-custom mx-auto flex items-center justify-between rounded-3xl px-4 sm:px-6 py-3 transition-all duration-300 premium-panel ${isScrolled ? 'bg-background/95 shadow-xl' : 'bg-background/80'}`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={usaLogo}
            alt="US Web and Design"
            className="h-10 sm:h-11 w-auto object-contain"
            loading="eager"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.href}
              className={`relative text-[0.9rem] font-semibold tracking-[0.01em] transition-colors duration-300 ${isActive(link.href) ? 'text-foreground' : 'text-foreground/75 hover:text-foreground'}`}
            >
              {link.name}
              {isActive(link.href) && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="nav" size="nav" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden min-h-11 min-w-11 p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 mx-4 rounded-2xl bg-background/95 backdrop-blur-md shadow-xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-lg font-semibold tracking-[0.01em] transition-colors ${isActive(link.href) ? 'text-foreground' : 'text-foreground/75 hover:text-foreground'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="gold" size="lg" className="mt-4 w-full" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
