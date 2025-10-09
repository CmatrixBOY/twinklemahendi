import Navigation from '@/react-app/components/Navigation';
import FloatingParticles from '@/react-app/components/FloatingParticles';
import Hero from '@/react-app/components/Hero';
import Gallery from '@/react-app/components/Gallery';
import Testimonials from '@/react-app/components/Testimonials';
import FAQ from '@/react-app/components/FAQ';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';
import LanguageSelector from '@/react-app/components/LanguageSelector';
import WhatsAppButton from '@/react-app/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <FloatingParticles />
      <LanguageSelector />
      <Navigation />
      <main>
        <Hero />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
