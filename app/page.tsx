import Container from '@/components/Container';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { Metadata } from 'next';
import { Globe, Share2, Palette, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Websites and social that drive{' '}
              <span className="bg-gradient-to-r from-[#FF5A3C] to-[#E44F35] bg-clip-text text-transparent">
                measurable growth
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-10 leading-relaxed">
              Nextlite ships fast, conversion-focused websites, social media
              growth, and on-brand design—so you get more leads and sales with
              less guesswork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Book a strategy call
              </Button>
              <Button href="/services" variant="outline" size="lg">
                See services
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Results at a Glance */}
      <Section className="py-16 border-y border-neutral-200">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { metric: '2.5x', label: 'Average ROI' },
              { metric: '< 3s', label: 'Load time' },
              { metric: '90+', label: 'Lighthouse score' },
              { metric: '48hrs', label: 'First draft' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#FF5A3C] mb-2">
                  {item.metric}
                </p>
                <p className="text-sm text-neutral-600">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Services built for growth
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Fixed scopes, transparent pricing, predictable timelines—no
              surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Globe className="w-10 h-10" />,
                title: 'Websites',
                description:
                  'Fast, conversion-focused sites built with modern tech. Launch-ready in weeks.',
              },
              {
                icon: <Share2 className="w-10 h-10" />,
                title: 'Social Media',
                description:
                  'Content, strategy, and growth tactics that turn followers into customers.',
              },
              {
                icon: <Palette className="w-10 h-10" />,
                title: 'Design',
                description:
                  'Brand identity, UI/UX, and marketing collateral that feels premium.',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#FF5A3C] transition-all duration-300 group"
              >
                <div className="text-[#FF5A3C] mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/services" size="lg">
              View all services
            </Button>
          </div>
        </Container>
      </Section>

      {/* Testimonial */}
      <Section className="py-20 bg-neutral-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 md:p-16 rounded-2xl shadow-sm text-center">
              <p className="text-2xl md:text-3xl text-neutral-800 mb-8 leading-relaxed italic">
                "Nextlite rebuilt our website in 3 weeks and it's converting 2x
                better than our old site. The team nailed our brand voice and
                delivered exactly what we needed."
              </p>
              <div>
                <p className="font-bold text-lg text-neutral-900">Priya S.</p>
                <p className="text-neutral-600">Founder at GrowthLab</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-br from-[#FF5A3C] to-[#E44F35] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to grow faster?
            </h2>
            <p className="text-xl mb-8 opacity-95 leading-relaxed">
              Book a free 30-minute strategy call. We'll audit your current
              setup and show you exactly how to get more leads.
            </p>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-[#FF5A3C] hover:bg-neutral-50"
            >
              Book your call now
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
