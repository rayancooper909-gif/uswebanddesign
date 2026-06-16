import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarCheck, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const services = [
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

interface BookingFormProps {
  heading?: string;
  subheading?: string;
}

export function BookingForm({
  heading = 'Book a Free Consultation',
  subheading = "Tell us about your project and we'll get back to you within 24 hours with a custom plan.",
}: BookingFormProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const set = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.service) {
      toast({ title: 'Please fill in all required fields.', variant: 'destructive' });
      return;
    }

    setLoading(true);

    try {
      let delivered = false;

      // Primary: send email via FormSubmit
      try {
        const res = await fetch(FORMSUBMIT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone || 'Not provided',
            service: form.service,
            message: form.message || 'No message provided',
            _subject: `New Booking Request: ${form.service} — ${form.name}`,
            _captcha: 'false',
          }),
        });
        if (res.ok) delivered = true;
      } catch {
        // fall through to Supabase
      }

      // Fallback: save to Supabase so no lead is ever lost
      if (!delivered) {
        await supabase.from('contact_submissions').insert({
          name: form.name,
          email: form.email,
          phone: form.phone || null,
          message: `[Booking — ${form.service}] ${form.message}`,
        });
      }

      toast({
        title: "Booking request received!",
        description: "We'll reach out within 24 hours to confirm your free consultation.",
      });

      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      toast({ title: 'Something went wrong. Please try again.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container-custom max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground/75 mb-4">
            <CalendarCheck className="w-4 h-4 text-primary" />
            Free Consultation
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">{heading}</h2>
          <p className="text-foreground/65 text-base md:text-lg max-w-xl mx-auto">{subheading}</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="premium-panel rounded-3xl p-8 md:p-10 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="bf-name">Full Name <span className="text-primary">*</span></Label>
              <Input id="bf-name" placeholder="Jane Smith" value={form.name} onChange={set('name')} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bf-email">Email Address <span className="text-primary">*</span></Label>
              <Input id="bf-email" type="email" placeholder="jane@company.com" value={form.email} onChange={set('email')} required />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="bf-phone">Phone Number</Label>
              <Input id="bf-phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={set('phone')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bf-service">Service Interested In <span className="text-primary">*</span></Label>
              <Select value={form.service} onValueChange={v => setForm(p => ({ ...p, service: v }))}>
                <SelectTrigger id="bf-service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map(s => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bf-message">Tell Us About Your Project</Label>
            <Textarea
              id="bf-message"
              placeholder="Describe your goals, timeline, or any specific requirements..."
              rows={5}
              value={form.message}
              onChange={set('message')}
            />
          </div>

          <Button type="submit" variant="gold" size="lg" className="w-full gap-2" disabled={loading}>
            {loading ? 'Sending…' : <><Send className="w-4 h-4" /> Book My Free Consultation</>}
          </Button>

          <p className="text-center text-xs text-foreground/50">
            No commitment required. We'll respond within 24 hours.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
