import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import SeatExplainerSection from './components/SeatExplainerSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PricingSection />
      <SeatExplainerSection />
      <Footer />
    </div>
  );
}
