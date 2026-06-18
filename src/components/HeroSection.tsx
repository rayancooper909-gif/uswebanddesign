import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { KineticTicker } from '@/components/KineticTicker';
import { useToast } from '@/hooks/use-toast';
import heroPoster from '@/assets/hero/Screenshot 2026-04-26 202016.png';

type ReviewBrand = 'Google Reviews' | 'Yelp' | 'Trustpilot';

const heroServices = [
  'Web Development',
  'Logo Design',
  'Branding',
  'Business Cards',
  'Online Store',
  'SEO',
  'PPC / Ads',
  'Social Media Marketing',
  'Domain & Hosting',
  'Combo Plan',
  'Other',
];

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/rayancooper909@gmail.com';

function useCountUp(end: number, duration: number = 1200, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

function BrandMark({ brand }: { brand: ReviewBrand }) {
  if (brand === 'Google Reviews') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          d="M12 10.2v3.9h5.45c-.25 1.27-1.46 3.72-5.45 3.72-3.28 0-5.95-2.72-5.95-6.07 0-3.35 2.67-6.07 5.95-6.07 1.87 0 3.12.8 3.83 1.49l2.61-2.58C16.83 3.62 14.62 2.5 12 2.5 6.97 2.5 2.9 6.65 2.9 11.75S6.97 21 12 21c6.96 0 8.67-4.93 8.67-7.42 0-.5-.06-.88-.13-1.26H12z"
          fill="#4285F4"
        />
        <path
          d="M4.35 7.63l3.2 2.35C8.42 8.2 10.08 7 12 7c1.87 0 3.12.8 3.83 1.49l2.61-2.58C16.83 3.62 14.62 2.5 12 2.5c-3.5 0-6.52 2.01-7.65 5.13z"
          fill="#EA4335"
          opacity="0.9"
        />
        <path
          d="M12 21c2.56 0 4.71-.85 6.28-2.31l-2.9-2.25c-.78.54-1.83 1.1-3.38 1.1-2.64 0-4.87-1.8-5.67-4.28l-3.17 2.44C4.28 18.92 7.8 21 12 21z"
          fill="#34A853"
          opacity="0.9"
        />
        <path
          d="M6.33 13.26c-.2-.62-.32-1.28-.32-1.97 0-.68.12-1.35.32-1.97L3.16 6.88C2.68 7.88 2.4 8.99 2.4 10.18c0 1.2.28 2.3.76 3.3l3.17-2.22z"
          fill="#FBBC05"
          opacity="0.9"
        />
      </svg>
    );
  }

  if (brand === 'Yelp') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          fill="#D32323"
          d="M12.64 2.27c-.63-.25-1.35.1-1.52.76l-1.3 5.1c-.15.6.17 1.21.74 1.42l3.43 1.23c.67.24 1.4-.16 1.55-.84l1.13-5.1c.14-.64-.22-1.27-.84-1.51L12.64 2.27zm-5.9 6.86c-.57-.35-1.34-.17-1.69.4l-2.8 4.55c-.33.53-.18 1.22.34 1.56l3.11 2.04c.55.36 1.3.2 1.64-.36l2.86-4.64c.33-.54.15-1.24-.4-1.57L6.74 9.13zm12.23 0-2.92 1.92c-.55.36-.73 1.06-.4 1.6l2.86 4.63c.34.55 1.09.71 1.64.35l3.1-2.03c.52-.34.67-1.03.34-1.57l-2.79-4.54c-.35-.57-1.12-.75-1.69-.4zM12 13.67c-.64 0-1.16.52-1.16 1.16v5.4c0 .65.52 1.17 1.16 1.17h3.78c.64 0 1.16-.52 1.16-1.16v-3.78c0-.64-.52-1.16-1.16-1.16H12z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="#00B67A"
        d="M12 2.6l2.86 5.79 6.4.93-4.63 4.51 1.09 6.37L12 17.72 6.28 20.2l1.09-6.37L2.74 9.32l6.4-.93L12 2.6z"
      />
      <path
        fill="#005128"
        d="M12 17.72l4.63-3.38-1.09 6.37L12 17.72z"
        opacity="0.85"
      />
    </svg>
  );
}

function starsColor(brand: ReviewBrand): string {
  if (brand === 'Yelp') return '#D32323';
  if (brand === 'Trustpilot') return '#00B67A';
  return '#F4B400';
}

function Stars({ value, color }: { value: number; color: string }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  const total = 5;
  const stars = Array.from({ length: total }).map((_, i) => {
    const filled = i < full;
    const half = !filled && hasHalf && i === full;
    return (
      <span key={i} aria-hidden="true" className="text-[11px] leading-none">
        {filled ? '★' : half ? '⯪' : '☆'}
      </span>
    );
  });

  return (
    <span className="inline-flex items-center gap-0.5" style={{ color }}>
      {stars}
    </span>
  );
}

function SocialBadge({
  brand,
  rating,
  reviews,
  reviewsSuffix = '+',
}: {
  brand: ReviewBrand;
  rating: number;
  reviews: number;
  reviewsSuffix?: string;
}) {
  const count = useCountUp(reviews, 1200, true);
  return (
    <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-medium text-[#111827] shadow-sm sm:flex-nowrap sm:justify-start sm:text-xs">
      <BrandMark brand={brand} />
      <span className="whitespace-nowrap">{brand}</span>
      <span className="mx-1 h-3 w-px bg-black/15" aria-hidden="true" />
      <Stars value={rating} color={starsColor(brand)} />
      <span className="text-[11px] font-semibold">{rating.toFixed(1)}</span>
      <span className="text-[11px] text-black/60 tabular-nums">
        {count.toLocaleString()}
        {reviewsSuffix} reviews
      </span>
    </div>
  );
}

function HeroBookingForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [optIn, setOptIn] = useState(false);
  const [optInError, setOptInError] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
  });

  const set = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.service) {
      toast({ title: 'Please fill in your name, email, and service.', variant: 'destructive' });
      return;
    }

    if (!optIn) {
      setOptInError(true);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          service: form.service,
          message: 'Submitted from homepage hero form.',
          _subject: `Hero Booking Request: ${form.service} - ${form.name}`,
          _captcha: 'false',
        }),
      });

      if (!res.ok) throw new Error('Failed to send');

      toast({
        title: 'Booking request received!',
        description: "We'll reach out within 24 hours to confirm your consultation.",
      });

      setForm({ name: '', email: '', phone: '', service: '' });
      setOptIn(false);
    } catch {
      toast({ title: 'Something went wrong. Please try again.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65, delay: 0.45 }}
      className="mx-auto w-full max-w-[640px] rounded-[1.35rem] border border-white/70 bg-white/95 p-5 text-left text-foreground shadow-2xl backdrop-blur-xl sm:p-6 md:p-7 lg:ml-auto"
    >
      <div className="mb-4 flex justify-center">
        <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground shadow-sm">
          30% Off
        </span>
      </div>
      <h2 className="mb-5 text-center font-display text-4xl font-extrabold leading-none tracking-normal text-primary sm:text-5xl">
        Book Now
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          aria-label="Full Name"
          placeholder="Full Name"
          value={form.name}
          onChange={set('name')}
          required
          className="h-12 rounded border-border bg-white text-base shadow-none focus-visible:ring-primary/35"
        />
        <Input
          aria-label="Email Address"
          type="email"
          placeholder="Enter Your Email"
          value={form.email}
          onChange={set('email')}
          required
          className="h-12 rounded border-border bg-white text-base shadow-none focus-visible:ring-primary/35"
        />
      </div>

      <Select value={form.service} onValueChange={value => setForm(prev => ({ ...prev, service: value }))}>
        <SelectTrigger
          aria-label="Select Services"
          className="mt-4 h-12 rounded border-border bg-white text-base shadow-none focus:ring-primary/35"
        >
          <SelectValue placeholder="Select Services" />
        </SelectTrigger>
        <SelectContent>
          {heroServices.map(service => (
            <SelectItem key={service} value={service}>
              {service}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        aria-label="Phone Number"
        type="tel"
        placeholder="Phone"
        value={form.phone}
        onChange={set('phone')}
        className="mt-4 h-12 rounded border-border bg-white text-base shadow-none focus-visible:ring-primary/35"
      />

      <div className="mt-4 space-y-2">
        <div className="flex items-start gap-3">
          <Checkbox
            id="hero-opt-in"
            checked={optIn}
            onCheckedChange={checked => {
              setOptIn(!!checked);
              if (checked) setOptInError(false);
            }}
            className="mt-1 shrink-0 border-muted-foreground/40 bg-white data-[state=checked]:border-primary data-[state=checked]:bg-primary"
          />
          <label htmlFor="hero-opt-in" className="cursor-pointer text-sm leading-relaxed text-foreground/82">
            * I agree to receive communications by text messages regarding updates on project status,
            meeting reminders, marketing, and general communication related to the projects from US Web
            and Design about my inquiry. You may opt out by replying STOP or reply HELP for more
            information. Message frequency varies. Message and data rates may apply. You may review our{' '}
            <Link to="/privacy-policy" className="font-medium text-primary hover:underline">
              Privacy Policy
            </Link>{' '}
            to learn how your data is used.
          </label>
        </div>
        {optInError && <p className="pl-8 text-sm font-medium text-destructive">Please agree to receive communications to proceed.</p>}
      </div>

      <Button
        type="submit"
        variant="default"
        size="lg"
        disabled={loading}
        className="mt-5 h-14 w-full rounded-full bg-primary text-base font-bold text-primary-foreground hover:bg-primary/90"
      >
        {loading ? 'Submitting...' : 'Submit'}
      </Button>
    </motion.form>
  );
}

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section id="home" className="relative flex min-h-[88svh] items-center justify-center overflow-hidden pt-24 md:min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-[5px] brightness-80 contrast-95 saturate-90"
          style={{ backgroundImage: `url(${heroPoster})` }}
          aria-hidden="true"
        />
        {!shouldReduceMotion && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPoster}
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-[5px] brightness-80 contrast-95 saturate-90"
            aria-hidden="true"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
      </div>

      <div className="container-custom relative z-10 my-4 w-full">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.72fr)] xl:gap-12">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-5 sm:mb-6"
          >
            <span className="inline-block rounded-full border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground/80 sm:text-sm">
              Full-Service Digital Agency
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-5 text-4xl font-display font-bold leading-[1.02] tracking-tight text-white sm:text-5xl md:mb-6 md:text-5xl lg:text-6xl xl:text-7xl [text-shadow:0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Premium Websites That
            <br />
            <span className="text-primary">Convert</span> and Scale
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mb-7 max-w-2xl rounded-xl border border-white/10 bg-background/5 px-4 py-3 text-base leading-relaxed text-white shadow-lg backdrop-blur-sm sm:text-lg md:mb-8 md:text-xl lg:mx-0 [text-shadow:0_2px_10px_rgba(0,0,0,0.28)]"
          >
            Web design, branding, and marketing systems built to attract attention and turn it into leads.
            Launch with confidence, backed by strategy, clean builds, and ongoing support.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.47 }}
            className="mx-auto mb-8 max-w-2xl space-y-2 text-left text-sm font-medium text-white sm:text-base lg:mx-0"
          >
            <li>✓ Custom-built websites that engage and convert.</li>
            <li>✓ Choose the services that fit your brand best.</li>
            <li>✓ Transparent pricing with no hidden fees.</li>
            <li>✓ Satisfaction-focused support from start to launch.</li>
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 lg:justify-start"
          >
            <Button variant="gold" size="xl" className="group w-full sm:w-auto" asChild>
              <a href="#pricing">
                Get Pricing
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="xl" className="group w-full sm:w-auto" asChild>
              <a href="#portfolio">
                <Play className="w-4 h-4" />
                View Portfolio
              </a>
            </Button>
          </motion.div>

          {/* Social proof badges */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="mt-8 flex flex-col items-stretch justify-center gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 lg:justify-start"
          >
            <div className="flex justify-center sm:block">
              <SocialBadge brand="Google Reviews" rating={5.0} reviews={200} reviewsSuffix="+" />
            </div>
            <div className="flex justify-center sm:block">
              <SocialBadge brand="Yelp" rating={5.0} reviews={120} reviewsSuffix="+" />
            </div>
            <div className="flex justify-center sm:block">
              <SocialBadge brand="Trustpilot" rating={5.0} reviews={160} reviewsSuffix="+" />
            </div>
          </motion.div>

          <KineticTicker />
          </div>

          <div className="hidden lg:block">
            <HeroBookingForm />
          </div>
        </div>

        <div className="mt-10 lg:hidden">
          <HeroBookingForm />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
