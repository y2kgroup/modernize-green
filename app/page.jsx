import site from '@/site.config.json';
import VideoHero from '@/components/VideoHero';
import IntroBand from '@/components/IntroBand';
import ServiceIcons from '@/components/ServiceIcons';
import ServicesGrid from '@/components/ServicesGrid';
import CommunitySection from '@/components/CommunitySection';
import MySafeFLHome from '@/components/MySafeFLHome';
import BenefitsSection from '@/components/BenefitsSection';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import CTABand from '@/components/CTABand';
import BlogTeaser from '@/components/BlogTeaser';

export default function HomePage() {
  return (
    <>
      <VideoHero data={site.sections.hero} />
      <IntroBand data={site.sections.intro} />
      <ServiceIcons data={site.sections.serviceIcons} />
      <ServicesGrid data={site.sections.services} />
      <CommunitySection data={site.sections.community} />
      <MySafeFLHome data={site.sections.mySafeFLHome} />
      <BenefitsSection data={site.sections.benefits} />
      <Testimonials data={site.sections.testimonials} />
      <ContactSection data={site.sections.contactSection} />
      <BlogTeaser data={site.sections.blogTeaser} posts={site.posts} />
      <CTABand data={site.sections.cta} />
    </>
  );
}
