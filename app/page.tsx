import { CallToAction } from './(marketing)/components/CallToAction';
import { CollectionsSection } from './(marketing)/components/CollectionsSection';
import { DiscoverSection } from './(marketing)/components/DiscoverSection';
import { ExperienceGrid } from './(marketing)/components/ExperienceGrid';
import { Footer } from './(marketing)/components/Footer';
import { Hero } from './(marketing)/components/Hero';
import { Navbar } from './(marketing)/components/Navbar';
import { TestimonialsSection } from './(marketing)/components/TestimonialsSection';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-light/40">
      <Navbar />
      <Hero />
      <DiscoverSection />
      <CollectionsSection />
      <ExperienceGrid />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </main>
  );
}
