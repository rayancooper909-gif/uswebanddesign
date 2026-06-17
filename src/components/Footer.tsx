import { Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  company: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ],
  services: [
    { name: 'Web Development', href: '#pricing' },
    { name: 'Branding', href: '#services' },
    { name: 'SEO & Marketing', href: '#services' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* Footer Links */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-background/60 text-sm leading-relaxed mb-5 md:mb-6">
              Premium web design, branding, and digital marketing solutions for growing businesses.
            </p>
            {/* Contact Info */}
            <div className="space-y-2">
              <a href="mailto:rayancooper909@gmail.com" className="flex items-start gap-2 break-all text-sm text-background/60 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                rayancooper909@gmail.com
              </a>
              <a href="tel:+14699607558" className="flex items-start gap-2 break-all text-sm text-background/60 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +1 469 960 7558
              </a>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://instagram.com/bolddigitizing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-4 h-4 text-background/60 hover:text-primary" />
              </a>
              <a
                href="https://facebook.com/bolddigitizing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-4 h-4 text-background/60 hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} US Web and Design. All rights reserved.
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            <Link to="/privacy-policy" className="text-sm text-background/60 hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-background/60 hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
