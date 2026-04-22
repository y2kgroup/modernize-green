import Link from 'next/link';

export default function ServiceIcons({ data }) {
  if (!data?.enabled) return null;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-narrow">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 flex items-center justify-center mb-4">
                {item.icon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold text-brand-dark group-hover:text-brand-accent transition">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-brand-ink/70 leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
