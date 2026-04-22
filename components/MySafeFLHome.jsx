import Link from 'next/link';

export default function MySafeFLHome({ data }) {
  if (!data?.enabled) return null;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-narrow">
        <div className="bg-neutral-50 rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {data.logo && (
              <div className="flex-shrink-0">
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={data.logo}
                  alt="My Safe FL Home"
                  className="h-20 w-auto"
                />
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {data.headline}
              </h3>
              <p className="text-brand-ink/80 leading-relaxed mb-4">
                {data.description}
              </p>
              <ul className="space-y-2 text-sm text-brand-ink/80 mb-4">
                {data.highlights?.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-accent mr-2">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                {data.primaryButton && (
                  <Link href={data.primaryButton.href} className="btn-primary">
                    {data.primaryButton.label}
                  </Link>
                )}
                {data.secondaryButton && (
                  <Link
                    href={data.secondaryButton.href}
                    className="btn-ghost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.secondaryButton.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
