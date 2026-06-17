import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10 text-sm">Last updated: June 2025</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground/80 leading-relaxed">

            <p>Thank you for choosing US Web and Design for your design and development needs. At US Web and Design, we are committed to safeguarding your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of personal information when you use our services.</p>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <h3 className="font-semibold text-foreground mb-2">1.1 Personal Information</h3>
              <p>We may collect personal information such as your name, email address, phone number, and other contact details when you engage with our services.</p>
              <h3 className="font-semibold text-foreground mb-2 mt-4">1.2 Usage Information</h3>
              <p>We collect information about your interactions with our website, including pages visited, time spent, and other browsing activities.</p>
              <h3 className="font-semibold text-foreground mb-2 mt-4">1.3 Device Information</h3>
              <p>We may collect information about the device you use to access our services, such as the device type, operating system, and browser.</p>
              <h3 className="font-semibold text-foreground mb-2 mt-4">1.4 Cookies and Similar Technologies</h3>
              <p>We use cookies and similar technologies to enhance your experience on our website and to collect data for analytics purposes.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <h3 className="font-semibold text-foreground mb-2">2.1 Providing Services</h3>
              <p>We use your personal information to provide you with our design and development services.</p>
              <h3 className="font-semibold text-foreground mb-2 mt-4">2.2 Communication</h3>
              <p>We may use your contact information to communicate with you about our services, updates, discounts, and promotions.</p>
              <h3 className="font-semibold text-foreground mb-2 mt-4">2.3 Analytics</h3>
              <p>We analyze usage patterns to improve the functionality and user experience of our website.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">3. Information Sharing and Disclosure</h2>
              <h3 className="font-semibold text-foreground mb-2">3.1 Legal Compliance</h3>
              <p>We may disclose your information to comply with applicable laws, regulations, or legal processes.</p>
              <h3 className="font-semibold text-foreground mb-2 mt-4">3.2 Information Sharing Policy</h3>
              <p>No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
              <h3 className="font-semibold text-foreground mb-2 mt-4">3.3 Sharing Information</h3>
              <p>SMS consent or personal information is not shared with third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">4. Your Choices</h2>
              <h3 className="font-semibold text-foreground mb-2">4.1 Opt-Out</h3>
              <p>You may opt-out of receiving promotional communications from us by following the instructions provided in the communication.</p>
              <h3 className="font-semibold text-foreground mb-2 mt-4">4.2 Cookies</h3>
              <p>You can set your browser to refuse cookies, but this may affect the functionality of our website.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">5. Security</h2>
              <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">6. SMS Terms and Conditions</h2>
              <p>Upon messaging opt-in, the end user agrees to receive messages from US Web and Design regarding marketing and to communicate internally with customers regarding new and ongoing projects. This includes topics such as updates on project status, meeting reminders, and general communication related to the projects.</p>
              <p className="mt-3">End users can opt out by replying STOP or request more information by replying HELP. Message frequency varies. Message and data rates may apply.</p>
              <p className="mt-3">If you need assistance or have questions about our SMS service, reply with "HELP" to any SMS message you receive, or contact our customer support team at <a href="tel:+14699607558" className="text-primary hover:underline">+1 469 960 7558</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">7. Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
              <ul className="mt-3 space-y-1 list-none pl-0">
                <li>Email: <a href="mailto:rayancooper909@gmail.com" className="text-primary hover:underline">rayancooper909@gmail.com</a></li>
                <li>Phone: <a href="tel:+14699607558" className="text-primary hover:underline">+1 469 960 7558</a></li>
              </ul>
              <p className="mt-4">By using our services, you agree to the terms outlined in this Privacy Policy.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
