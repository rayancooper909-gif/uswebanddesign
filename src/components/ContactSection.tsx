import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { Reveal } from '@/components/motion/Reveal';
import { RevealStagger } from '@/components/motion/RevealStagger';
import { staggerItem } from '@/lib/motion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const serviceOptions = [
  'Web Development',
  'Logo Design',
  'Business Cards',
  'Branding',
  'Web Content',
  'Online Store',
  'Domain & Hosting',
  'SMM',
  'SEO',
  'PPC',
  'Combo Plan',
] as const;

type ServiceOption = (typeof serviceOptions)[number];

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email').max(255, 'Email must be less than 255 characters'),
  service: z.enum(serviceOptions, { message: 'Please select a service' }),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message must be less than 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/rayancooper909@gmail.com';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: 'Web Development',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value as ServiceOption }));
    if (errors.service) setErrors(prev => ({ ...prev, service: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      setIsSubmitting(true);

      const response = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: validatedData.name,
          email: validatedData.email,
          service: validatedData.service,
          message: validatedData.message,
          _subject: `Website Inquiry: ${validatedData.service}`,
          _captcha: 'false',
        }),
      });

      if (!response.ok) throw new Error('Failed to send');

      toast({
        title: "Message sent!",
        description: "Thanks, we received your request and will reply soon.",
      });

      setFormData({ name: '', email: '', service: 'Web Development', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Submission failed",
          description: "Could not send your message right now. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />
      
      <div className="container-custom relative z-10">
        <div ref={ref} className="text-center mb-12 md:mb-16">
          <Reveal
            as="span"
            variant="zoom"
            delay={0.02}
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-gold-light/10 text-sm font-medium text-foreground mb-4 border border-primary/20"
          >
            Contact Us
          </Reveal>
          <Reveal as="h2" variant="up" delay={0.08} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-3 md:mb-4">
            Get in Touch
          </Reveal>
          <Reveal as="p" variant="up" delay={0.14} className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind? Send us a message and we'll get back to you within 24 hours.
          </Reveal>
        </div>

        <RevealStagger
          className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto"
          stagger={reduceMotion ? 0 : 0.12}
          delayChildren={reduceMotion ? 0 : 0.08}
        >
          {/* Contact Info */}
          <motion.div variants={staggerItem(!!reduceMotion)} className="space-y-6 md:space-y-8">
            <div className="space-y-5 md:space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1 text-base">Email Us</h3>
                  <a href="mailto:rayancooper909@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    rayancooper909@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1 text-base">Call Us</h3>
                  <a href="tel:+14699607558" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 469 960 7558
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1 text-base">Location</h3>
                  <p className="text-muted-foreground">Breaswood, Texas</p>
                </div>
              </div>
            </div>

            <div className="card-shade p-5 sm:p-6">
              <h3 className="font-display font-semibold text-foreground mb-3 text-base">Business Hours</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span>Monday - Friday</span>
                  <span className="sm:text-right">8:00 AM - 8:00 PM EST</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span>Saturday</span>
                  <span className="sm:text-right">9:00 AM - 5:00 PM EST</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span>Sunday</span>
                  <span className="sm:text-right">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={staggerItem(!!reduceMotion)}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-foreground/15 bg-background/95 shadow-xl backdrop-blur-sm space-y-5 sm:space-y-6 p-5 sm:p-6 md:p-8"
            >
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`bg-background border-foreground/20 placeholder:text-foreground/45 focus-visible:ring-primary/35 ${errors.name ? 'border-destructive' : ''}`}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`bg-background border-foreground/20 placeholder:text-foreground/45 focus-visible:ring-primary/35 ${errors.email ? 'border-destructive' : ''}`}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground font-medium">Service *</Label>
                <Select value={formData.service} onValueChange={handleServiceChange}>
                  <SelectTrigger className={`bg-background border-foreground/20 text-foreground focus:ring-primary/35 ${errors.service ? 'border-destructive' : ''}`}>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-foreground/15">
                    {serviceOptions.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-sm text-destructive">{errors.service}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className={`bg-background border-foreground/20 placeholder:text-foreground/45 focus-visible:ring-primary/35 ${errors.message ? 'border-destructive' : ''}`}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>
        </RevealStagger>
      </div>
    </section>
  );
}
