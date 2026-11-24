import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 backdrop-blur-md relative">
      <div className="wrap">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-orbitron font-semibold text-muted tracking-widest">© 2026 THIVARA Solutions</span>
          </div>
          <span className="text-sm italic text-muted">Intelligence. Innovation. Impact.</span>
          <div className="flex gap-6 text-sm text-muted">
            <a href="https://wa.me/919445982865" target="_blank" rel="noopener noreferrer" className="hover:text-sky transition-colors">WhatsApp</a>
            <a href="mailto:thivarasolutions@gmail.com" className="hover:text-sky transition-colors">Email</a>
            <a href="https://www.instagram.com/thivarasolutions" target="_blank" rel="noopener noreferrer" className="hover:text-sky transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}