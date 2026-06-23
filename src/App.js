import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WheelSection from './components/WheelSection';
import Owner from './components/Owner';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';

function App() {
  return (
    <div className="app">
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <Services />
      <WheelSection />
      <Owner />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
