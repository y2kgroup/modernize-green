import Link from 'next/link';
import site from '@/site.config.json';

export default function Footer() {
  const { primary } = site.nav;
  const { tagline, copyright, socials } = site.footer;

  return (
    <footer className="bg-brand-dark text-white/80 mt-24">
      <div className="container-narrow py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="text-white text-xl font-semibold">{site.site.name}</div>
          <p className="mt-3 text-sm text-white/60 max-w-xs">{tagline}</p>
        </div>
        <div>
          <div className="text-white text-sm font-semibold uppercase tracking-wider mb-3">Navigate</div>
          <ul className="space-y-2">
            {primary.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-white/70 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-white text-sm font-semibold uppercase tracking-wider mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-white/70">
            {site.contact.email && <li>{site.contact.email}</li>}
            {site.contact.phone && <li>{site.contact.phone}</li>}
            {site.contact.hours && <li>{site.contact.hours}</li>}
          </ul>
          {socials && socials.length > 0 && (
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="text-white/60 hover:text-white text-sm">
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-narrow py-5 text-xs text-white/50">
          {copyright}
        </div>
      </div>
    </footer>
  );
}
