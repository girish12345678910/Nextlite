import Container from '@/components/Container';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { Metadata } from 'next';
import { 
  GraduationCap, 
  Briefcase, 
  Code, 
  Users, 
  CheckCircle, 
  Clock,
  Calendar,
  Award,
  Download,
  BarChart3,
  Cpu,
  FileText,
  Target,
  TrendingUp,
  Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Training + Internship Program',
  description:
    "Industry-focused Training + Internship programs at Nextlite. Learn web development, data analytics, or IoT with hands-on projects and get certified.",
};

export default function ProgramPage() {
  // Replace with your actual Google Form URL
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfWW6-MeJ34cCCbflH6Pk5XVFK70unDhUTc8_RM16iEhxnrWA/viewform?usp=dialog";
  
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Industry-Focused{' '}
              <span className="bg-gradient-to-r from-[#FF5A3C] to-[#E44F35] bg-clip-text text-transparent">
                Training + Internship
              </span>{' '}
              Programs
            </h1>
            <p className="text-2xl font-semibold text-neutral-800 mb-6">
              Learn. Build. Deploy. Get Certified.
            </p>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
              At Nextlite, we offer structured Training + Internship programs designed to 
              bridge the gap between academics and industry. Our programs focus on real-world 
              skills, hands-on projects, and professional exposure to prepare students for careers in tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={GOOGLE_FORM_URL} size="lg" className="gap-2">
                <CheckCircle className="w-5 h-5" />
                Apply Now
              </Button>
              <a
  href="Training+Internship Syllabus.pdf"
  download
  className="inline-flex items-center justify-center font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 px-8 py-4 text-lg border-2 border-[#FF5A3C] text-[#FF5A3C] hover:bg-[#FFF1ED] focus:ring-[#FF5A3C] gap-2"
>
  <Download className="w-5 h-5" />
  Download Syllabus
</a>

            </div>
          </div>
        </Container>
      </Section>

      {/* Why Choose Nextlite */}
      <Section className="py-20 bg-white border-y border-neutral-200">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Makes Our Program Different?
              </h2>
              <p className="text-xl text-neutral-600">
                We don't just teach — we prepare you for real jobs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Industry-relevant curriculum',
                'Hands-on project-based learning',
                'Internship experience with real tasks',
                'Mentorship by working professionals',
                'Portfolio & GitHub profile building',
                'Internship Offer Letter & Certificate',
                'Flexible learning for students',
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-neutral-50 p-4 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-[#FF5A3C] mt-0.5 flex-shrink-0" />
                  <span className="font-medium text-neutral-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Training Domains */}
      <Section className="py-20 bg-neutral-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Training + Internship Domains
            </h2>
            <p className="text-xl text-neutral-600">Choose Your Career Track</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Web Development */}
            <div className="bg-white rounded-2xl p-8 border-2 border-neutral-200 hover:border-[#FF5A3C] transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FFF1ED] text-[#FF5A3C] mb-6">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                 Web Development Training + Internship
              </h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-sm text-neutral-700 mb-3">
                  Skills You Will Learn
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• HTML, CSS, JavaScript</li>
                  <li>• Responsive Web Design</li>
                  <li>• React.js (Frontend Development)</li>
                  <li>• Basic Backend (Node.js / Firebase)</li>
                  <li>• Hosting & Deployment (Vercel / Firebase)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-sm text-neutral-700 mb-3">
                  Internship Projects
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Business website</li>
                  <li>• Portfolio website</li>
                  <li>• Web dashboard application</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-sm text-neutral-700 mb-3">
                  Career Opportunities
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>→ Frontend Developer Intern</li>
                  <li>→ Web Developer</li>
                  <li>→ Junior Full-Stack Developer</li>
                </ul>
              </div>
            </div>

            {/* Data Analyst */}
            <div className="bg-[#FFF1ED] rounded-2xl p-8 border-2 border-[#FF5A3C] relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF5A3C] text-white text-xs font-bold px-4 py-1 rounded-full">
                HIGH DEMAND
              </span>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-[#FF5A3C] mb-6">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                 Data Analyst Training + Internship
              </h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-sm text-neutral-700 mb-3">
                  Skills You Will Learn
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Advanced MS Excel</li>
                  <li>• SQL (MySQL / PostgreSQL)</li>
                  <li>• Power BI & Data Visualization</li>
                  <li>• Business & sales analytics</li>
                  <li>• Basic Python for data analysis (optional)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-sm text-neutral-700 mb-3">
                  Internship Projects
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Sales & revenue dashboard</li>
                  <li>• Business performance analysis</li>
                  <li>• Data-driven case studies</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-sm text-neutral-700 mb-3">
                  Career Opportunities
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>→ Data Analyst</li>
                  <li>→ Business Analyst</li>
                  <li>→ Reporting Analyst</li>
                </ul>
              </div>
            </div>

            {/* IoT */}
            <div className="bg-white rounded-2xl p-8 border-2 border-neutral-200 hover:border-[#FF5A3C] transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FFF1ED] text-[#FF5A3C] mb-6">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                 IoT (Internet of Things) Training + Internship
              </h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-sm text-neutral-700 mb-3">
                  Skills You Will Learn
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Arduino / ESP32 programming</li>
                  <li>• Sensors & hardware integration</li>
                  <li>• IoT cloud platforms</li>
                  <li>• Firebase / MQTT integration</li>
                  <li>• Real-time monitoring dashboards</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-sm text-neutral-700 mb-3">
                  Internship Projects
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Smart sensor system</li>
                  <li>• IoT monitoring dashboard</li>
                  <li>• End-to-end IoT solution</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-sm text-neutral-700 mb-3">
                  Career Opportunities
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>→ IoT Intern</li>
                  <li>→ Embedded Systems Trainee</li>
                  <li>→ Smart Systems Engineer</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Program Structure */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              How the Program Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <div className="text-4xl font-bold text-[#FF5A3C] mb-4">01</div>
                <h3 className="text-xl font-bold mb-3">
                   Phase 1: Training<br/>(Weeks 1–4)
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Core concepts & tools</li>
                  <li>• Live sessions + practice tasks</li>
                </ul>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <div className="text-4xl font-bold text-[#FF5A3C] mb-4">02</div>
                <h3 className="text-xl font-bold mb-3">
                   Phase 2: Project Development<br/>(Weeks 5–8)
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Real-world projects</li>
                  <li>• Mentor guidance</li>
                  <li>• Code & documentation reviews</li>
                </ul>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <div className="text-4xl font-bold text-[#FF5A3C] mb-4">03</div>
                <h3 className="text-xl font-bold mb-3">
                   Phase 3: Internship Experience<br/>(Weeks 9–12)
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Industry-style tasks</li>
                  <li>• Performance evaluation</li>
                  <li>• Portfolio & resume support</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What You'll Receive */}
      <Section className="py-20 bg-gradient-to-br from-[#FF5A3C] to-[#E44F35] text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              What You Will Receive
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <FileText className="w-6 h-6" />, text: 'Internship Offer Letter' },
                { icon: <Award className="w-6 h-6" />, text: 'Internship Completion Certificate' },
                { icon: <Code className="w-6 h-6" />, text: 'Real-World Projects' },
                { icon: <Users className="w-6 h-6" />, text: 'Portfolio / GitHub Guidance' },
                { icon: <TrendingUp className="w-6 h-6" />, text: 'Practical Industry Exposure' },
                { icon: <Target className="w-6 h-6" />, text: 'Letter of Recommendation (Top Performers)' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <span className="font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Eligibility & Duration */}
      <Section className="py-20 bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Who Can Apply */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-200">
              <h2 className="text-3xl font-bold mb-6">Who Can Apply?</h2>
              <h3 className="text-xl font-semibold mb-4 text-[#FF5A3C]">Eligibility</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF5A3C] mt-0.5 flex-shrink-0" />
                  <span>Engineering / CS / IT students</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF5A3C] mt-0.5 flex-shrink-0" />
                  <span>Diploma students</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF5A3C] mt-0.5 flex-shrink-0" />
                  <span>Freshers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF5A3C] mt-0.5 flex-shrink-0" />
                  <span>Beginners with basic computer knowledge</span>
                </li>
              </ul>
              <p className="mt-6 font-semibold text-neutral-700">
                No prior industry experience required.
              </p>
            </div>

            {/* Duration & Fees */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <h2 className="text-3xl font-bold mb-6">Duration & Mode</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-[#FF5A3C] flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Duration</p>
                      <p className="text-neutral-600">8–12 Weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-[#FF5A3C] flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Mode</p>
                      <p className="text-neutral-600">Online / Hybrid</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-6 h-6 text-[#FF5A3C] flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Start Date</p>
                      <p className="text-neutral-600">New batches every month</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <h2 className="text-3xl font-bold mb-6">Program Fees</h2>
                <p className="text-neutral-600 mb-4">Affordable & Student-Friendly Pricing</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Single Domain Program</span>
                    <span className="text-xl font-bold text-[#FF5A3C]">₹1,500 – ₹3,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Combo Programs</span>
                    <span className="text-xl font-bold text-[#FF5A3C]">₹4,000 – ₹6,000</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 mt-4">
                  (Group & college tie-up discounts available)
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How to Apply */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Simple Application Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { num: '1', title: 'Fill the application form' },
                { num: '2', title: 'Choose your domain' },
                { num: '3', title: 'Complete enrollment' },
                { num: '4', title: 'Start your training + internship' },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF5A3C] text-white font-bold text-2xl mb-4">
                    {step.num}
                  </div>
                  <p className="font-semibold text-neutral-700">{step.title}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button href={GOOGLE_FORM_URL} size="lg" className="gap-2">
                Apply Now
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Transparency & Disclaimer */}
      <Section className="py-20 bg-neutral-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-2 border-[#FF5A3C]">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 text-[#FF5A3C] flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold mb-2">Transparency & Disclaimer</h2>
                  <p className="text-neutral-600">IMPORTANT</p>
                </div>
              </div>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF5A3C] mt-0.5 flex-shrink-0" />
                  <span>Nextlite is a registered MSME.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF5A3C] mt-0.5 flex-shrink-0" />
                  <span>
                    This is a training + internship program focused on skill development 
                    and practical exposure.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF5A3C] mt-0.5 flex-shrink-0" />
                  <span>This is not a job guarantee program.</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why This Matters */}
      <Section className="py-20 bg-gradient-to-br from-[#FF5A3C] to-[#E44F35] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why This Internship Matters</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                'Designed by industry professionals',
                'Aligned with current job market needs',
                'Helps you stand out in interviews',
                'Builds confidence through real projects',
              ].map((reason, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{reason}</span>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Button 
                href={GOOGLE_FORM_URL} 
                variant="secondary" 
                size="lg"
                className="bg-white text-[#FF5A3C] hover:bg-neutral-50 gap-2"
              >
                Apply Now - Limited Seats
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
