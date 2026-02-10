import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import MarketOpportunity from '@/components/MarketOpportunity';
import BusinessModel from '@/components/BusinessModel';
import Roadmap from '@/components/Roadmap';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <MarketOpportunity />
      <BusinessModel />
      <Roadmap />
      <CTA />
      <Footer />
    </main>
  );
}
