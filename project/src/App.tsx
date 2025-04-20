import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'BuildRight Construction | Building Excellence';
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;