export default function CommunitySection({ data }) {
  if (!data?.enabled) return null;

  return (
    <section className="py-16 md:py-20 bg-neutral-50">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              {data.headline}
            </h3>
            <p className="text-brand-ink/80 leading-relaxed">
              {data.description}
            </p>
          </div>
          {data.image && (
            <div className="order-first md:order-last">
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={data.image}
                alt={data.headline}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
