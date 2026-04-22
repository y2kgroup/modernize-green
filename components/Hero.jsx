import Link from 'next/link';

export default function Hero({ data }) {
  if (!data?.enabled) return null;
  return (
    <section className="relative bg-brand-dark text-white overflow-hidden">
      {data.backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('${data.backgroundImage}')` }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(31,33,28,0.4) 0%, rgba(31,33,28,0.85) 85%)',
        }}
      />
      <div className="relative container-narrow py-28 md:py-36 lg:py-44">
        {data.eyebrow && (
          <div className="eyebrow mb-5">{data.eyebrow}</div>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
          {data.headline}
        </h1>
        {data.subheadline && (
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            {data.subheadline}
          </p>
        )}
        <div className="mt-10 flex flex-wrap gap-4">
          {data.cta && (
            <Link href={data.cta.href} className="btn-primary">
              {data.cta.label}
            </Link>
          )}
          {data.ctaSecondary && (
            <Link href={data.ctaSecondary.href} className="btn-secondary">
              {data.ctaSecondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
