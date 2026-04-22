import site from '@/site.config.json';
import ServicesGrid from '@/components/ServicesGrid';
import CTABand from '@/components/CTABand';

export const metadata = { title: 'Solutions' };

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="container-narrow py-20 md:py-28">
          <div className="eyebrow mb-4 text-brand-accent">Solutions</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Everything your home needs to go green.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            From solar to insulation, one trusted team handles every upgrade — design, permits, installation, and support.
          </p>
        </div>
      </section>

      <ServicesGrid data={site.sections.services} />
      <CTABand data={site.sections.cta} />
    </>
  );
}
