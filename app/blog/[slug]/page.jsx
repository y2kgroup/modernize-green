import Link from 'next/link';
import { notFound } from 'next/navigation';
import site from '@/site.config.json';

export function generateStaticParams() {
  return (site.posts || []).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = (site.posts || []).find((p) => p.slug === params.slug);
  return { title: post?.title ?? 'Post' };
}

export default function BlogPost({ params }) {
  const post = (site.posts || []).find((p) => p.slug === params.slug);
  if (!post) return notFound();
  const paragraphs = (post.body || post.excerpt || '').split('\n\n').filter(Boolean);

  return (
    <article>
      <section className="bg-brand-dark text-white">
        <div className="container-narrow py-16 md:py-24">
          <Link href="/blog" className="text-sm text-white/60 hover:text-white">← All posts</Link>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
            {post.title}
          </h1>
          <div className="mt-4 text-white/60 text-sm">
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>
      </section>

      {post.image && (
        <div className="container-narrow -mt-12 md:-mt-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt="" className="aspect-[16/8] w-full object-cover rounded-2xl shadow-xl" />
        </div>
      )}

      <section className="py-16 md:py-20">
        <div className="container-narrow max-w-3xl space-y-5 p-lead">
          {paragraphs.length > 0 ? (
            paragraphs.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p>{post.excerpt}</p>
          )}
        </div>
      </section>
    </article>
  );
}
