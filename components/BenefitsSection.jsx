export default function BenefitsSection({ data }) {
  if (!data?.enabled) return null;

  return (
    <section className="py-16 md:py-20 bg-brand-dark text-white">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-10 items-center">
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
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wide mb-4">
              {data.headline}
            </h3>
            <ul className="space-y-3">
              {data.benefits?.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-brand-accent mr-3 mt-1">•</span>
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
