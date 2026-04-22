import Link from 'next/link';
import { notFound } from 'next/navigation';
import site from '@/site.config.json';
import CTABand from '@/components/CTABand';

export function generateStaticParams() {
  return site.sections.services.items.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const item = site.sections.services.items.find((s) => s.slug === params.slug);
  return { title: item?.title ?? 'Solution' };
}

export default function SolutionPage({ params }) {
  const item = site.sections.services.items.find((s) => s.slug === params.slug);
  if (!item) return notFound();
  const detail = site.services?.[params.slug] || {};
  const paragraphs = detail.body?.split('\n\n').filter(Boolean) || [
    `Learn more about our ${item.title.toLowerCase()} services. This is a placeholder — the extracted content from the WordPress site will appear here once imported.`,
  ];
  const benefits = detail.benefits || [];

  return (
    <>
      <section className="relative bg-brand-dark text-white overflow-hidden">
        {item.image && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('${item.image}')` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 to-brand-dark/90" />
        <div className="relative container-narrow py-20 md:py-28">
          <div className="eyebrow text-brand-accent mb-4">Solutions</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            {item.title}
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">{item.short}</p>
          <Link href="/contact" className="btn-primary mt-8">Get a Free Estimate</Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-narrow grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3 space-y-5 p-lead">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <aside className="md:col-span-2">
            {benefits.length > 0 && (
              <div className="rounded-2xl bg-neutral-50 border border-black/5 p-6">
                <div className="eyebrow mb-3">Key benefits</div>
                <ul className="space-y-3 text-sm text-brand-ink/80">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-brand-accent font-bold">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-6 rounded-2xl bg-brand-dark text-white p-6">
              <div className="text-sm text-white/70">Ready to get started?</div>
              <div className="text-xl font-semibold mt-1">Free estimate, no pressure.</div>
              <Link href="/contact" className="btn-primary mt-4 !bg-brand-accent">Contact Us</Link>
            </div>
          </aside>
        </div>
      </section>

      <CTABand data={site.sections.cta} />
    </>
  );
}
