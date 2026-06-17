import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">Terms &amp; Conditions</h1>
          <p className="text-muted-foreground mb-10 text-sm">Last updated: June 2025</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground/80 leading-relaxed">

            <p>These Terms of Service govern your use of our website and services operated by US Web and Design. Our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> also governs your use of our Service and explains how we collect, safeguard, and disclose information that results from your use of our web pages.</p>
            <p>Your agreement with us includes these Terms and our Privacy Policy. By using our Service, you acknowledge that you have read and understood the agreements and agree to be bound by them. If you do not agree with these Agreements, you may not use the Service. Please let us know by emailing us at <a href="mailto:rayancooper909@gmail.com" className="text-primary hover:underline">rayancooper909@gmail.com</a> so we can try to find a solution. These Terms apply to all visitors, users, and others who wish to access or use the Service.</p>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">Purchases</h2>
              <p>If you wish to purchase any product or service made available through the Service, you may be asked to supply certain information relevant to your Purchase, including but not limited to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your credit or debit card number</li>
                <li>The expiration date of your card</li>
                <li>Your billing address</li>
                <li>Your shipping information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">Content</h2>
              <p>Content found on or through this Service is the property of US Web and Design or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or personal gain, without express advance written permission from us.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">Intellectual Property</h2>
              <p>The Service and its original content, features, and functionality are and will remain the exclusive property of US Web and Design and its licensors. The Service is protected by copyright, trademark, and other laws, both domestic and international. Our trademarks may not be used in connection with any product or service without prior written consent from US Web and Design.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">Branding Policy</h2>
              <p>We reserve the right to include our branding on websites, custom websites, web apps, mobile apps, and software that we design and develop. This branding represents our work and serves as a hallmark of our craftsmanship.</p>
              <p className="mt-3">Clients may not remove or alter this branding without prior written consent from US Web and Design. Doing so without our consent will result in legal action. If a client wishes to remove the branding, they must contact the project manager or concerned person to reach a mutual agreement. This may involve compensation or alternative arrangements. This policy is non-negotiable and forms an integral part of our Terms and Conditions.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">Refund Policy</h2>

              <p>We strive to provide high-quality services to our clients. Please read our refund policy carefully before making any purchase. By engaging in business with US Web and Design, you agree to the terms outlined below.</p>

              <h3 className="font-semibold text-foreground mb-2 mt-4">1. Logo Design</h3>
              <p>We offer unlimited revisions during the initial design phase. Once the final design is approved, no refunds will be issued. In the event of any defects or errors discovered post-delivery, we will rectify them at no additional cost within 15 days.</p>

              <h3 className="font-semibold text-foreground mb-2 mt-4">2. Design and Printing (Business Cards, Flyers, Brochures, etc.)</h3>
              <p>Unlimited revisions are provided during the design process. Refunds will not be issued once the final design is approved. If there are issues with the printing material, we will replace or rectify any defects within 15 days at no additional cost.</p>

              <h3 className="font-semibold text-foreground mb-2 mt-4">3. Website Design &amp; Development</h3>
              <p>Refunds are not applicable once the website design is approved and development has commenced. Any bugs or issues identified within 30 days of the website going live will be fixed at no additional cost.</p>

              <h3 className="font-semibold text-foreground mb-2 mt-4">4. Content Creation</h3>
              <p>Refunds are not provided for content creation services once the content is delivered and approved. Any corrections to errors or defects will be addressed within 15 days.</p>

              <h3 className="font-semibold text-foreground mb-2 mt-4">5. Mobile App Development</h3>
              <p>Refunds are not available once the mobile app development project has started. We offer a 30-day warranty for any bugs or issues identified post-launch.</p>

              <h3 className="font-semibold text-foreground mb-2 mt-4">6. Marketing &amp; SEO Services</h3>
              <p>Monthly marketing and SEO services are non-refundable. Clients may cancel future services at any time. We guarantee efforts to improve search rankings that take a minimum of 3 months, but specific results cannot be guaranteed until analysis of competitors takes place.</p>

              <h3 className="font-semibold text-foreground mb-2 mt-4">7. Facebook Ads and Google Ads</h3>
              <p>Refunds are not applicable once ad campaigns have been launched. Any issues or discrepancies in performance will be addressed promptly within 15 days.</p>

              <h3 className="font-semibold text-foreground mb-2 mt-4">Disclaimer: Proofreading Approval</h3>
              <p>US Web and Design will not be responsible for any mistakes in printing services if the client approves during the proofreading phase. It is the client's responsibility to thoroughly review and approve all proofs before finalizing the printing process.</p>

              <h3 className="font-semibold text-foreground mb-2 mt-4">General Refund Policy</h3>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Clients are encouraged to communicate any dissatisfaction promptly to allow for timely resolution.</li>
                <li>Refunds will only be considered if US Web and Design fails to deliver the agreed-upon services.</li>
                <li>Any refund requests must be submitted in writing within 15 days of service delivery.</li>
                <li>Our refund policy does not cater to "change of mind." Please carefully consider your requirements before finalizing your purchase.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">Acknowledgement</h2>
              <p>By using the Service or other services provided by us, you acknowledge that:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>You have read these Terms of Service and agree to be bound by them.</li>
                <li>You understand the importance of respecting US Web and Design's intellectual property and branding policies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">Contact Us</h2>
              <p>Please send your feedback, comments, and requests for technical support to:</p>
              <ul className="mt-3 space-y-1 list-none pl-0">
                <li>Email: <a href="mailto:rayancooper909@gmail.com" className="text-primary hover:underline">rayancooper909@gmail.com</a></li>
                <li>Phone: <a href="tel:+14699607558" className="text-primary hover:underline">+1 469 960 7558</a></li>
              </ul>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
