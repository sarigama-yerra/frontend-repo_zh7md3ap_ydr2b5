import Hero from './components/Hero';
import SmoothLogoMarquee from './components/SmoothLogoMarquee';
import Packs from './components/Packs';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0e12] text-white">
      <Hero />
      <SmoothLogoMarquee />
      <Packs />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
