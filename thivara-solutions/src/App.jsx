import React, { Suspense, lazy } from 'react';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Why = lazy(() => import('./components/Why'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen relative overflow-x-clip selection:bg-blue selection:text-white">
      <Loader />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Services />
        <Portfolio />
        <Why />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
