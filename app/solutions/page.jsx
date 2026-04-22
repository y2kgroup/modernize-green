import site from '@/site.config.json';
import ServicesGrid from '@/components/ServicesGrid';
import CTABand from '@/components/CTABand';

export const metadata = { title: 'Solutions' };

export default function SolutionsPage() {
  const services = [
    {
      title: "Solar Panels",
      description: "Modernize Green Solutions provides solar panels for sale and installation. We work with customers to determine the best options. Offering turnkey solutions from concept to completion.",
      slug: "solar-panels"
    },
    {
      title: "HVAC",
      description: "We are a premier provider of home comfort systems. Our team provides new HVAC systems powered by energy-efficient technology, and we ensure quality service for all our residential and commercial customers.",
      slug: "hvac"
    },
    {
      title: "Windows",
      description: "Our products are sustainable, innovative and effective in order to help people save energy, improve efficiency, and realize their environmental goals. We are dedicated to creating products that better the environment for current and future generations.",
      slug: "windows"
    },
    {
      title: "Roofing",
      description: "Our services cover everything from roofing to solar panel installation. We always deliver quality results. Competitive price, Quality workmanship, and Certifications of all materials and applications applied.",
      slug: "roofing"
    },
    {
      title: "Landscaping",
      description: "It's time to give your property a complete makeover. Add turf grass to your existing concrete or upgrade to complete paver walkways, patios, and pathways with our professional landscaping experience.",
      slug: "landscaping"
    }
  ];

  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="container-narrow py-20 md:py-28">
          <div className="eyebrow mb-4 text-brand-accent">Solutions</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Making renewable energy a reality
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.slug} className="bg-white rounded-xl p-8 shadow-sm border border-black/5">
                <h2 className="text-2xl font-bold text-brand-dark mb-4">{service.title}</h2>
                <p className="text-brand-ink/80 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid data={site.sections.services} />
      <CTABand data={site.sections.cta} />
    </>
  );
}
