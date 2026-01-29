import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TopStores from '@/components/sections/TopStores';
import HowItWorks from '@/components/sections/HowItWorks';
import PlatformHighlights from '@/components/sections/PlatformHighlights';
import WhoIsThisFor from '@/components/sections/WhoIsThisFor';
import FAQs from '@/components/sections/FAQs';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      <Header />

      <div className="pt-4 md:pt-6">
        <Hero />
        <TopStores />
        <HowItWorks />
        <PlatformHighlights />
        <WhoIsThisFor /> 
        <FAQs />
        <CTA />
      </div>

      <Footer />
    </main>
  );
}
