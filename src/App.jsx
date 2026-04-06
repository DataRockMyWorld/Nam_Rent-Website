import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import TrustSection from './components/TrustSection';
import About       from './components/About';
import Services    from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Benefits    from './components/Benefits';
import CtaSection  from './components/CtaSection';
import Contact     from './components/Contact';
import Footer      from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <About />
        <Services />
        <WhyChooseUs />
        <Benefits />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
