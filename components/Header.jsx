'use client';

import Link from 'next/link';
import { useState } from 'react';
import site from '@/site.config.json';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { logo, logoAlt, name } = site.site;
  const { primary, cta } = site.nav;

  return (
    <header className="sticky top-0 z-40 bg-brand-dark text-white shadow-md">
      <div className="container-narrow flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" aria-label={name}>
          {logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logo} alt={logoAlt} className="h-10 w-auto" />
          ) : (
            <span className="text-lg font-bold">{name}</span>
          )}
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {primary.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className="text-sm font-medium text-white/90 hover:text-white transition"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full pt-3 hidden group-hover:block">
                  <div className="min-w-[220px] rounded-lg bg-white text-brand-dark shadow-xl ring-1 ring-black/5 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm hover:bg-brand-accent/10 hover:text-brand-accent"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          {cta && (
            <Link href={cta.href} className="btn-primary !py-2 !px-5 text-sm">
              {cta.label}
            </Link>
          )}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2"
          aria-label="Menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-brand-dark">
          <div className="container-narrow py-4 flex flex-col gap-1">
            {primary.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-medium"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 border-l border-white/10 ml-2 my-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-sm text-white/70"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {cta && (
              <Link
                href={cta.href}
                onClick={() => setOpen(false)}
                className="btn-primary mt-3 self-start"
              >
                {cta.label}
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
