import Link from 'next/link';
import Icon from './Icon';

export default function ServicesGrid({ data }) {
  if (!data?.enabled) return null;
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <div className="eyebrow mb-3">What we do</div>
          <h2 className="h-section">{data.headline}</h2>
          {data.subheadline && (
            <p className="mt-4 p-lead">{data.subheadline}</p>
          )}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <Link
              key={item.slug}
              href={`/solutions/${item.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-brand-surface p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-accent mb-5">
                <Icon name={item.icon} />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-ink/70 leading-relaxed">{item.short}</p>
              <div className="mt-5 text-sm font-semibold text-brand-accent group-hover:underline">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
