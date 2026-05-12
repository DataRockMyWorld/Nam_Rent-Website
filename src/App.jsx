import Navbar           from './components/Navbar';
import Hero             from './components/Hero';
import TrustSection     from './components/TrustSection';
import ServiceOptions   from './components/ServiceOptions';
import HowItWorks       from './components/HowItWorks';
import ServiceForm      from './components/ServiceForm';
import About            from './components/About';
import Services         from './components/Services';
import CorporateClients from './components/CorporateClients';
import Clients          from './components/Clients';
import CtaSection       from './components/CtaSection';
import Contact          from './components/Contact';
import Footer           from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <ServiceOptions />
        <HowItWorks />
        <ServiceForm />
        <About />
        <Services />
        <CorporateClients />
        <Clients />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
