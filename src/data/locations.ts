// ─────────────────────────────────────────────────────────────────────────────
//  LOCAL SEO LOCATIONS  —  HOW TO ADD A NEW CITY PAGE
//  1. Copy one object below and paste it into the array.
//  2. Set a unique `slug` (lowercase, hyphens). URL will be: /web-design/[slug]
//  3. Fill in city, state, headline, intro, and neighborhoods.
//  4. Save — the page is live and indexed automatically.
// ─────────────────────────────────────────────────────────────────────────────

export interface Location {
  slug: string;           // URL slug, e.g. "los-angeles"
  city: string;           // Display name, e.g. "Los Angeles"
  state: string;          // Full state name, e.g. "California"
  stateCode: string;      // Abbreviation, e.g. "CA"
  headline: string;       // Page H1 — customize per city
  intro: string;          // 2–3 sentences about serving this market
  neighborhoods: string[]; // Nearby areas / neighborhoods for additional keyword coverage
  metaDescription: string; // SEO meta description (keep under 160 chars)
}

export const locations: Location[] = [
  {
    slug: 'los-angeles',
    city: 'Los Angeles',
    state: 'California',
    stateCode: 'CA',
    headline: 'Web Design Services in Los Angeles, CA',
    intro:
      'We help Los Angeles businesses build premium websites that attract local customers and rank on Google. From Hollywood to Downtown LA, our team delivers conversion-focused design with fast turnaround.',
    neighborhoods: ['Hollywood', 'Downtown LA', 'Culver City', 'Santa Monica', 'Burbank', 'Glendale', 'Pasadena'],
    metaDescription: 'Professional web design services in Los Angeles, CA. We build fast, conversion-focused websites for LA businesses. Free consultation.',
  },
  {
    slug: 'new-york',
    city: 'New York',
    state: 'New York',
    stateCode: 'NY',
    headline: 'Web Design Services in New York, NY',
    intro:
      'New York businesses need websites that work as hard as they do. We design and build high-performance sites for NYC brands across every borough — from startups in Brooklyn to agencies in Manhattan.',
    neighborhoods: ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island', 'Long Island City', 'Flushing'],
    metaDescription: 'Professional web design services in New York City. We create fast, lead-generating websites for NYC businesses. Free consultation.',
  },
  {
    slug: 'houston',
    city: 'Houston',
    state: 'Texas',
    stateCode: 'TX',
    headline: 'Web Design Services in Houston, TX',
    intro:
      "Houston's business market is competitive — your website needs to stand out. We build modern, SEO-ready websites for Houston companies in energy, healthcare, real estate, and beyond.",
    neighborhoods: ['The Woodlands', 'Sugar Land', 'Katy', 'Pearland', 'Midtown', 'Heights', 'Galleria'],
    metaDescription: 'Expert web design services in Houston, TX. We build fast, professional websites that generate leads for Houston businesses. Free quote.',
  },
  {
    slug: 'chicago',
    city: 'Chicago',
    state: 'Illinois',
    stateCode: 'IL',
    headline: 'Web Design Services in Chicago, IL',
    intro:
      'From the Loop to Lincoln Park, Chicago businesses trust us to build websites that convert visitors into customers. We combine strategy, clean design, and technical excellence on every project.',
    neighborhoods: ['The Loop', 'Lincoln Park', 'Wicker Park', 'River North', 'Evanston', 'Oak Park', 'Naperville'],
    metaDescription: 'Web design services in Chicago, IL. We build professional, high-converting websites for Chicago businesses. Free consultation.',
  },
  {
    slug: 'miami',
    city: 'Miami',
    state: 'Florida',
    stateCode: 'FL',
    headline: 'Web Design Services in Miami, FL',
    intro:
      "Miami's fast-moving market demands a website that makes an instant impression. We design bold, mobile-first websites for Miami businesses in hospitality, real estate, retail, and professional services.",
    neighborhoods: ['Brickell', 'Wynwood', 'Coral Gables', 'Doral', 'South Beach', 'Little Havana', 'Fort Lauderdale'],
    metaDescription: 'Premium web design services in Miami, FL. We create conversion-focused websites for Miami businesses. Free consultation.',
  },
  {
    slug: 'phoenix',
    city: 'Phoenix',
    state: 'Arizona',
    stateCode: 'AZ',
    headline: 'Web Design Services in Phoenix, AZ',
    intro:
      'Phoenix is one of the fastest-growing cities in the US — and the competition online is real. We help Phoenix businesses build websites that rank locally and convert traffic into customers.',
    neighborhoods: ['Scottsdale', 'Tempe', 'Mesa', 'Chandler', 'Gilbert', 'Peoria', 'Glendale'],
    metaDescription: 'Professional web design services in Phoenix, AZ. We build fast, SEO-ready websites for Phoenix businesses. Get a free quote.',
  },
];
