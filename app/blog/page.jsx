import Link from 'next/link';
import site from '@/site.config.json';

export const metadata = { title: 'Blog' };

export default function BlogIndex() {
  const posts = site.posts || [];
  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="container-narrow py-20 md:py-28">
          <div className="eyebrow mb-4 text-brand-accent">Blog</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Renewable energy insights
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Articles on solar, efficiency, and smart home upgrades.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-narrow">
          {posts.length === 0 ? (
            <div className="text-center py-16 text-brand-ink/60">No posts yet.</div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-lg transition"
                >
                  {post.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={post.image} alt="" className="aspect-[16/10] w-full object-cover" />
                  )}
                  <div className="p-6">
                    <div className="text-xs text-brand-ink/50">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold group-hover:text-brand-accent">{post.title}</h3>
                    {post.excerpt && (
                      <p className="mt-2 text-sm text-brand-ink/70 line-clamp-3">{post.excerpt}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
