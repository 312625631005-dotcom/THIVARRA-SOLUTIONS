import React, { useEffect, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Original THIVARA loader: kicker, three-line title and progress track.
 * Dismisses on its own so the site is never blocked by JS.
 */
export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const fade = setTimeout(() => setHidden(true), 1000);
    const remove = setTimeout(() => setGone(true), 1600);
    return () => {
      clearTimeout(fade);
      clearTimeout(remove);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      role="status"
      aria-label="Loading THIVARA Solutions"
      className={`fixed inset-0 z-[100] grid place-items-center bg-black transition-opacity duration-700 ${
        hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center px-6">
        <div className="flex items-center justify-center gap-3 mb-6 text-[11px] font-orbitron font-bold tracking-[0.35em] text-muted">
          <span className="w-2 h-2 rounded-full bg-sky shadow-[0_0_10px_2px_rgba(34,199,255,0.8)] animate-loader-pulse" />
          THIVARA SOLUTIONS
        </div>

        <div className="font-orbitron font-bold leading-tight text-[clamp(22px,5vw,42px)] tracking-wide">
          <span className="block opacity-0 animate-loader-word [animation-delay:0.05s]">Intelligence.</span>
          <span className="block grad opacity-0 animate-loader-word [animation-delay:0.18s]">Innovation.</span>
          <span className="block opacity-0 animate-loader-word [animation-delay:0.31s]">Impact.</span>
        </div>

        <div className="mx-auto mt-8 h-[2px] w-[min(320px,70vw)] overflow-hidden rounded bg-white/10">
          <span className="block h-full w-full origin-left scale-x-0 bg-gradient-to-r from-blue via-sky to-silver animate-loader-progress" />
        </div>
      </div>
    </div>
  );
}
