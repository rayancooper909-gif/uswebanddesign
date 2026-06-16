import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: Record<string, unknown>;
}

const SITE_NAME = 'US Web and Design';
const DEFAULT_OG_IMAGE = 'https://uswebanddesign.com/og-image.jpg';

export function SEOHead({ title, description, canonical, ogImage, schema }: SEOHeadProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    const setMeta = (name: string, content: string, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    };

    // Standard meta
    setMeta('description', description);

    // Open Graph
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', SITE_NAME, 'property');
    setMeta('og:image', ogImage || DEFAULT_OG_IMAGE, 'property');

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage || DEFAULT_OG_IMAGE);

    // Canonical
    if (canonical) setLink('canonical', canonical);

    // JSON-LD schema
    if (schema) {
      let el = document.getElementById('seo-schema') as HTMLScriptElement | null;
      if (!el) {
        el = document.createElement('script');
        el.id = 'seo-schema';
        el.type = 'application/ld+json';
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(schema);
    }

    return () => {
      // cleanup is optional — next page render will overwrite
    };
  }, [fullTitle, description, canonical, ogImage, schema]);

  return null;
}
