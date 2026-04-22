import site from '@/site.config.json';
import Hero from '@/components/Hero';
import IntroBand from '@/components/IntroBand';
import ServicesGrid from '@/components/ServicesGrid';
import CTABand from '@/components/CTABand';
import BlogTeaser from '@/components/BlogTeaser';

export default function HomePage() {
  return (
    <>
      <Hero data={site.sections.hero} />
      <IntroBand data={site.sections.intro} />
      <ServicesGrid data={site.sections.services} />
      <BlogTeaser data={site.sections.blogTeaser} posts={site.posts} />
      <CTABand data={site.sections.cta} />
    </>
  );
}
