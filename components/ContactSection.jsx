export default function ContactSection({ data }) {
  if (!data?.enabled) return null;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            {data.headline}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {data.address && (
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Address</h3>
              <p className="text-brand-ink/80">{data.address}</p>
            </div>
          )}
          {data.phone && (
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Phone</h3>
              <a
                href={`tel:${data.phone}`}
                className="text-brand-accent hover:underline"
              >
                {data.phone}
              </a>
            </div>
          )}
          {data.hours && (
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Office Hours</h3>
              <p className="text-brand-ink/80 whitespace-pre-line">{data.hours}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
