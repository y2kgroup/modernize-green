import site from '@/site.config.json';
import CTABand from '@/components/CTABand';

export const metadata = { title: 'Our Work' };

export default function WorkPage() {
  const items = site.work?.items || [];

  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="container-narrow py-20 md:py-28">
          <div className="eyebrow mb-4 text-brand-accent">Our Work</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            {site.work?.headline || 'Recent projects'}
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">{site.work?.lead}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-narrow">
          {items.length === 0 ? (
            <div className="text-center py-16 text-brand-ink/60">
              Portfolio images will appear here once imported from the WordPress site.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((it, i) => (
                <figure key={i} className="group rounded-2xl overflow-hidden bg-neutral-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={it.image}
                    alt={it.title || ''}
                    className="aspect-[4/3] w-full object-cover transition group-hover:scale-105"
                  />
                  {it.title && (
                    <figcaption className="p-5">
                      <h3 className="font-semibold">{it.title}</h3>
                      {it.description && <p className="mt-1 text-sm text-brand-ink/70">{it.description}</p>}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABand data={site.sections.cta} />
    </>
  );
}
