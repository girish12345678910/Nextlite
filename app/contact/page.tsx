import Container from '@/components/Container';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { Mail, MessageCircle, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Nextlite. Book a strategy call.',
};

export default function ContactPage() {
  return (
    <>
      <Section className="pt-24 pb-16 bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's build something great
            </h1>
            <p className="text-xl text-neutral-600">
              Book a free 30-minute strategy call. We typically respond within
              24 hours.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#FF5A3C] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:hello@nextlite.agency"
                        className="text-neutral-600 hover:text-[#FF5A3C] transition-colors"
                      >
                        nextlite555@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-[#FF5A3C] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-[#FF5A3C] transition-colors"
                      >
                        +91 8767316983
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#FF5A3C] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Book a call</p>
                      <a
                        href="https://calendly.com/nextlite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-[#FF5A3C] transition-colors"
                      >
                        Schedule on Calendly
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFF1ED] p-6 rounded-xl border border-[#FF5A3C]/20">
                <h3 className="font-bold mb-2">Response time</h3>
                <p className="text-sm text-neutral-700">
                  We respond to all inquiries within 24 hours on business days.
                  Urgent? Use WhatsApp or book directly.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
