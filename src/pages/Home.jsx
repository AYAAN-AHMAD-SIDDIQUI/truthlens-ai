import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import LiveDemo from "../components/LiveDemo";
import Stats from "../components/Stats";
import TrustSection from "../components/TrustSection";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import BackgroundEffects from "../components/BackgroundEffects";
import MouseGlow from "../components/MouseGlow";

function Home() {
  return (
    <>
      <BackgroundEffects />
      <MouseGlow />

      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <LiveDemo />
      <Stats />
      <TrustSection />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;