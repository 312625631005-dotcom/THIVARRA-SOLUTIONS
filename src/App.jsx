import React from 'react';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Why from './components/Why';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-clip selection:bg-blue selection:text-white">
      <Loader />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Why />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;