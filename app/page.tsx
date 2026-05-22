import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Philosophy from '@/components/sections/Philosophy';
import CaseStudies from '@/components/sections/CaseStudies';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Philosophy />
      <CaseStudies />
      <Experience />
      <Contact />
    </main>
  );
}
