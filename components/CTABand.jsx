import Link from 'next/link';

export default function CTABand({ data }) {
  if (!data?.enabled) return null;
  return (
    <section className="py-20 md:py-24 bg-brand-dark text-white">
      <div className="container-narrow text-center">
        <h2 className="h-section text-white">{data.headline}</h2>
        {data.subheadline && (
          <p className="mt-4 text-white/70 max-w-xl mx-auto">{data.subheadline}</p>
        )}
        {data.button && (
          <Link href={data.button.href} className="btn-primary mt-8">
            {data.button.label}
          </Link>
        )}
      </div>
    </section>
  );
}
