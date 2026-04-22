import site from '@/site.config.json';
import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
  const { contact } = site;

  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="container-narrow py-20 md:py-28">
          <div className="eyebrow mb-4 text-brand-accent">Contact</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            {contact.headline}
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">{contact.lead}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-narrow grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <ContactForm endpoint={contact.formEndpoint} />
          </div>
          <aside className="md:col-span-2 space-y-5">
            {contact.email && (
              <div>
                <div className="text-sm uppercase tracking-wider text-brand-ink/50">Email</div>
                <a href={`mailto:${contact.email}`} className="text-lg font-semibold hover:text-brand-accent">
                  {contact.email}
                </a>
              </div>
            )}
            {contact.phone && (
              <div>
                <div className="text-sm uppercase tracking-wider text-brand-ink/50">Phone</div>
                <a href={`tel:${contact.phone}`} className="text-lg font-semibold hover:text-brand-accent">
                  {contact.phone}
                </a>
              </div>
            )}
            {contact.address && (
              <div>
                <div className="text-sm uppercase tracking-wider text-brand-ink/50">Address</div>
                <div className="text-lg font-semibold">{contact.address}</div>
              </div>
            )}
            {contact.hours && (
              <div>
                <div className="text-sm uppercase tracking-wider text-brand-ink/50">Hours</div>
                <div className="text-lg font-semibold">{contact.hours}</div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
