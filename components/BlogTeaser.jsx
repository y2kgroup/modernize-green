import Link from 'next/link';

export default function BlogTeaser({ data, posts = [] }) {
  if (!data?.enabled) return null;
  const latest = posts.slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="container-narrow">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div className="max-w-xl">
            <div className="eyebrow mb-3">From the blog</div>
            <h2 className="h-section">{data.headline}</h2>
            {data.subheadline && (
              <p className="mt-4 p-lead">{data.subheadline}</p>
            )}
          </div>
          <Link href="/blog" className="btn-ghost">View all posts</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {latest.map((post) => (
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
                <h3 className="mt-2 text-lg font-semibold group-hover:text-brand-accent">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="mt-2 text-sm text-brand-ink/70 line-clamp-3">{post.excerpt}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
