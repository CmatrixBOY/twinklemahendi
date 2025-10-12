import Navigation from '@/react-app/components/Navigation';
import FloatingParticles from '@/react-app/components/FloatingParticles';
import Hero from '@/react-app/components/Hero';
import Gallery from '@/react-app/components/Gallery';
// import Testimonials from '@/react-app/components/Testimonials';
import FAQ from '@/react-app/components/FAQ';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';
import LanguageSelector from '@/react-app/components/LanguageSelector';
import WhatsAppButton from '@/react-app/components/WhatsAppButton';
import ScrollToTop from '@/react-app/components/ScrollToTop';

export default function Home() {
  return (
    <div className="">
      <FloatingParticles />
      <LanguageSelector />
      <Navigation />
      <main>
        <div className='pt-[10px] md:pt-24 lg:pt-24'>
          <Hero />
        </div>
        <Gallery />
        {/* <Testimonials /> */}
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <div className="fixed bottom-20 right-5 z-50 flex flex-col gap-4">
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </div>
  );
}
