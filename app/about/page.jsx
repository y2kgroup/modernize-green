import site from '@/site.config.json';
import CTABand from '@/components/CTABand';

export const metadata = { title: 'About' };

export default function AboutPage() {
  const { about } = site;
  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="container-narrow py-20 md:py-28">
          <div className="eyebrow mb-4 text-brand-accent">About us</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            {about.headline}
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">{about.lead}</p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-narrow grid gap-12 md:grid-cols-5 items-start">
          <div className="md:col-span-3 p-lead">
            {about.body}
          </div>
          <div className="md:col-span-2 grid gap-5">
            {about.values.map((v) => (
              <div key={v.title} className="rounded-xl border border-black/5 bg-neutral-50 p-6">
                <h3 className="font-semibold text-brand-dark">{v.title}</h3>
                <p className="mt-2 text-sm text-brand-ink/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand data={site.sections.cta} />
    </>
  );
}
