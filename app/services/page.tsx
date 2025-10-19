import Container from '@/components/Container';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { Metadata } from 'next';
import { Globe, Share2, Palette, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Websites, social media marketing, and design services from Nextlite.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Websites',
      description:
        'Conversion-focused websites that turn visitors into customers. Built with modern tech, optimized for speed and SEO.',
      tiers: [
        {
          name: 'Starter',
          price: '₹75K',
          duration: '2 weeks',
          features: [
            'Up to 5 pages',
            'Mobile responsive',
            'SEO basics',
            'Contact form',
            '2 revision rounds',
            '30-day support',
          ],
        },
        {
          name: 'Growth',
          price: '₹1.5L',
          duration: '4 weeks',
          features: [
            'Up to 10 pages',
            'Custom design',
            'Advanced SEO',
            'CMS integration',
            'Analytics setup',
            '60-day support',
          ],
          recommended: true,
        },
        {
          name: 'Scale',
          price: '₹3L+',
          duration: '6-8 weeks',
          features: [
            'Unlimited pages',
            'Custom features',
            'E-commerce ready',
            'API integrations',
            'Advanced animations',
            '90-day support + SLA',
          ],
        },
      ],
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: 'Social Media Marketing',
      description:
        'Strategy, content, and growth tactics that build your audience and drive sales.',
      tiers: [
        {
          name: 'Starter',
          price: '₹30K/mo',
          duration: 'Monthly',
          features: [
            '12 posts/month',
            '1 platform',
            'Content calendar',
            'Basic analytics',
            '1 strategy session',
          ],
        },
        {
          name: 'Growth',
          price: '₹60K/mo',
          duration: 'Monthly',
          features: [
            '20 posts/month',
            '2 platforms',
            'Community management',
            'Ad campaign setup',
            'Weekly reporting',
          ],
          recommended: true,
        },
        {
          name: 'Scale',
          price: '₹1.2L/mo',
          duration: 'Monthly',
          features: [
            '30+ posts/month',
            '3+ platforms',
            'Influencer outreach',
            'Ad optimization',
            'Video production',
          ],
        },
      ],
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Design',
      description:
        'Brand identity, UI/UX, and marketing collateral that feels premium and human.',
      tiers: [
        {
          name: 'Starter',
          price: '₹50K',
          duration: '1-2 weeks',
          features: [
            'Logo design',
            'Color palette',
            'Typography',
            'Brand guidelines',
            '2 revision rounds',
          ],
        },
        {
          name: 'Growth',
          price: '₹1.2L',
          duration: '3-4 weeks',
          features: [
            'Full brand identity',
            'UI/UX for 5 pages',
            'Marketing collateral',
            'Icon set',
            '3 revision rounds',
          ],
          recommended: true,
        },
        {
          name: 'Scale',
          price: '₹2.5L+',
          duration: '4-6 weeks',
          features: [
            'Complete brand system',
            'UI/UX for full product',
            'Design system',
            'Motion guidelines',
            'Unlimited revisions',
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Section className="pt-24 pb-16 bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Services built for growth
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Productized offerings with fixed scopes, transparent pricing, and
              predictable timelines.
            </p>
          </div>
        </Container>
      </Section>

      {services.map((service, idx) => (
        <Section
          key={idx}
          className={`py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
        >
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FFF1ED] text-[#FF5A3C] mb-6">
                  {service.icon}
                </div>
                <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  {service.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {service.tiers.map((tier, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl p-8 ${
                      tier.recommended
                        ? 'bg-[#FFF1ED] border-2 border-[#FF5A3C] relative'
                        : 'bg-white border border-neutral-200'
                    }`}
                  >
                    {tier.recommended && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF5A3C] text-white text-xs font-bold px-4 py-1 rounded-full">
                        RECOMMENDED
                      </span>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      {tier.duration}
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{tier.price}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <Check className="w-5 h-5 text-[#FF5A3C] flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" className="w-full">
                      Get started
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <Section className="py-20 bg-gradient-to-br from-[#FF5A3C] to-[#E44F35] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Not sure which tier fits?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Book a free call and we'll recommend the best package for your
              goals and budget.
            </p>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-[#FF5A3C] hover:bg-neutral-50"
            >
              Book a strategy call
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
