import React, { Suspense, lazy, useEffect, useState } from 'react';

const Logo3D = lazy(() => import('../three/Logo3D'));
const Particles = lazy(() => import('../three/Particles'));

const typeWords = ['WEB / AI / IT / IOT', 'SMART TECHNOLOGY', 'RELIABLE SERVICE'];

const logoFallback = (
  <div className="w-full h-[420px] sm:h-[480px] lg:h-[clamp(420px,56vh,600px)] flex items-center justify-center">
    <img
      src="/logo.webp"
      alt="THIVARA Solutions"
      className="w-[82%] max-w-[520px] drop-shadow-[0_0_40px_rgba(34,199,255,0.35)]"
      width="800"
      height="800"
    />
  </div>
);

export default function Hero() {
  const [text, setText] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(typeWords[0]);
      return;
    }

    let timer;
    const state = { word: 0, char: 0, deleting: false };

    const tick = () => {
      const word = typeWords[state.word];
      if (!state.deleting) {
        if (state.char < word.length) {
          state.char += 1;
          setText(word.slice(0, state.char));
          timer = setTimeout(tick, 70);
        } else {
          state.deleting = true;
          timer = setTimeout(tick, 1500);
        }
      } else if (state.char > 0) {
        state.char -= 1;
        setText(word.slice(0, state.char));
        timer = setTimeout(tick, 30);
      } else {
        state.deleting = false;
        state.word = (state.word + 1) % typeWords.length;
        timer = setTimeout(tick, 300);
      }
    };

    timer = setTimeout(tick, 70);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <Suspense fallback={null}>
        <Particles className="inset-0 pointer-events-none" />
      </Suspense>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-80px)]">
        <div className="flex-1 max-w-[600px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-blue to-sky rounded-full" />
            <span className="text-sky font-semibold tracking-wide uppercase text-xs">Software & IT Solutions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 tracking-tight text-balance">
            <span className="block">Intelligence.</span>
            <span className="block grad">Innovation.</span>
            <span className="block">Impact.</span>
          </h1>
          <div className="mb-4 text-sky font-orbitron font-semibold text-sm tracking-widest min-h-[24px]" aria-hidden="true">
            {text}_
          </div>
          <p className="text-lg md:text-xl italic font-medium text-slate-300 mb-10 leading-relaxed max-w-lg">
            THIVARA Solutions builds websites, AI tools and smart systems, and keeps your computers and
            networks running, for shops, colleges and startups.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn-primary flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              BOOK DOORSTEP SUPPORT
            </a>
            <a href="#services" className="btn-outline flex items-center gap-2">
              OUR SERVICES
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-400 font-medium">
            <span className="text-sky">⌖</span> IT support at your home or office, with remote support also available. Visits are confirmed based on your location and technician availability.
          </p>
        </div>

        <div className="flex-1 w-full relative flex items-center justify-center order-first lg:order-last">
          <Suspense fallback={logoFallback}>
            <Logo3D className="relative z-10" />
          </Suspense>
          <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-3/4 bg-blue/20 blur-[90px] rounded-full -z-10 animate-pulse pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
