import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import Faq from '@/components/Faq';
import FinalCta from '@/components/FinalCta';
import FloatingWhatsapp from '@/components/FloatingWhatsapp';

export default function App() {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <FloatingWhatsapp />
    </div>
  );
}
