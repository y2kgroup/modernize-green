import site from '@/site.config.json';
import CTABand from '@/components/CTABand';

export const metadata = { title: 'About' };

export default function AboutPage() {
  const { about } = site;
  const team = [
    { name: "Luca Vard", role: "Senior Executive" },
    { name: "Agnes Southern", role: "Head Marketing" },
    { name: "Adam Smith", role: "Project Manager" }
  ];

  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="container-narrow py-20 md:py-28">
          <div className="eyebrow mb-4 text-brand-accent">About us</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            EMPOWERING SUSTAINABLE ENERGY SOLUTIONS
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Who we are</h2>
            <p className="p-lead text-brand-ink/80">
              With a combined experience of over 30 years, we are proud to offer a complete array of services, including solar panels, HVAC systems, impact windows and doors, roofing, and landscaping. Our company prides itself on providing quality products and services that help you save money on your utility bills while making our planet a better place.
            </p>
            <p className="p-lead text-brand-ink/80 mt-4">
              We offer both commercial and residential services with an emphasis on renewable energy solutions. Whether you need a new HVAC system or want to make some updates around your home, we've got you covered.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">What we do</h2>
            <p className="p-lead text-brand-ink/80">
              With our experienced construction team, we offer top-tier home renovation services tailored to your personal needs from start-to-finish while utilizing green energy.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Choose Us</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-brand-accent mr-3">✓</span>
                <span className="text-brand-ink/80">Expedited time frames</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent mr-3">✓</span>
                <span className="text-brand-ink/80">Finance programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent mr-3">✓</span>
                <span className="text-brand-ink/80">Professional and certified</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent mr-3">✓</span>
                <span className="text-brand-ink/80">Clean and organized</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-6">MEET THE TEAM</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-neutral-200 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-brand-dark">{member.name}</h3>
                  <p className="text-sm text-brand-ink/60">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand data={site.sections.cta} />
    </>
  );
}
