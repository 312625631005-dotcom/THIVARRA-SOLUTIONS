import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Instagram } from 'lucide-react';

const links = [
  { name: 'Home', href: '#top' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Why Us', href: '#why' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-panel/90 backdrop-blur-[20px] saturate-150 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="wrap nav flex items-center justify-between">
        <a
          href="#top"
          className="brand flex items-center gap-3 text-decoration-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="mark" style={{ width: '56px', height: '43px', backgroundImage: 'var(--logo)', backgroundPosition: '-16px -10px', backgroundSize: '87px auto', backgroundRepeat: 'no-repeat', display: 'inline-block' }} role="img" aria-label="THIVARA logo" />
          <span className="font-orbitron font-bold text-lg tracking-wider">THIVARA <span className="grad">SOLUTIONS</span></span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-sky transition-colors relative group"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-sky scale-x-0 group-hover:scale-x-100 origin-bottom-left transition-transform duration-300" />
            </a>
          ))}
          <a href="https://wa.me/919445982865" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-6 py-2.5 flex items-center gap-2">
            <span className="w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span>
            WhatsApp
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-panel/95 backdrop-blur-[20px] border-b border-white/10"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-medium text-silver hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a href="https://wa.me/919445982865" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-3 text-sm text-silver hover:text-sky transition-colors">
                  <svg className="w-4 h-4 text-sky" fill="currentColor" viewBox="0 0 24 24"><path d="M20.583 1.116c-3.509 1.523-5.896 5.125-7.28 9.066-1.384-3.94-3.77-7.543-7.28-9.066C2.298 2.273 0 5.256 0 8.67c0 6.065 4.773 11.268 11.134 12.293-.105.094-.22.177-.331.248-.315.2-.676.257-1.017.181-.845-.19-1.437-1.35-1.437-2.546v-2.719c0-1.195-.013-2.297-.04-3.42-.017-.717-.237-1.406-.237-1.406s-1.007-.436-2.413-.436c-1.794 0-2.473.868-2.473 1.529 0 .989.186 2.107.21 3.177.023 1.063.265 2.045.436 3.021.138.792.491 1.352.491 1.352s1.007-.041 2.061-.041c1.507 0 1.849.937 2.245 1.485.358.492.669.945.669 1.532 0 .602-.366.985-.669 1.384-.527.696-1.459 1.145-2.448 1.145-.594 0-1.696-.326-2.312-.976-.28-.296-.393-.676-.393-.993 0-.244.105-.514.375-.803.375-.403 1.055-.757 1.997-.757 1.557 0 2.949.602 4.279.602h.04c2.312 0 4.461-1.008 6.063-2.956 1.011-1.228 1.784-2.815 2.224-4.278.393-1.328.464-2.602.464-3.807 0-1.182-.078-2.25-.237-3.217-.138-.83-.21-1.625-.21-2.502 0-1.595 1.083-2.924 3.304-3.148 1.709-.177 2.767.157 3.263.331.936.326 1.557 1.042 1.557 2.154 0 .57-.129 1.031-.129 1.457 0 .449-.066.815-.21 1.099-.177.356-.366.636-.366.847 0 .296-.039.616-.092.923-.118.636-.296 1.195-.296 1.658 0 1.826 2.167 2.868 2.167 4.218 0 3.42-2.291 6.203-5.206 7.168-.181.052-.434.078-.628.094a7 7 0 0 1-.635.078c-.805 0-1.625-.138-2.432-.393-.89-.287-1.596-.736-2.107-1.289-.602-.655-.923-1.436-.923-2.402 0-1.195.339-2.167.96-2.993.602-.805 1.468-1.37 2.535-1.71 1.26-.392 2.739-.464 4.29-.171 1.541.296 2.969.993 4.117 1.886 1.141.89 2.006 1.984 2.552 3.229.527 1.195.792 2.511.792 3.919 0 3.058-2.371 5.547-5.482 6.242-.275.066-.599.066-.911.066h-.04c-3.42 0-6.41-1.625-8.43-4.655-1.26-1.903-1.96-4.189-1.96-6.737 0-4.393 3.692-8.165 9.536-8.223 1.873-.013 3.384.158 4.722.329 2.895.366 4.803 1.466 6.119 2.627.859.776 1.485 1.747 1.824 2.902.287.96.376 2.011.376 3.177 0 3.414-2.309 6.397-5.603 7.178-2.011.464-4.105.331-5.896-.329-1.636-.602-2.969-1.529-4.021-2.636-1.011-1.064-1.726-2.362-2.107-3.842-.375-1.458-.564-3.077-.564-4.811 0-2.076 1.041-3.875 2.748-5.286 1.666-1.384 3.875-2.288 6.548-2.778 2.571-.474 5.272-.445 7.952-.078 1.778.243 3.244.749 4.407 1.467 1.064.655 1.849 1.529 2.312 2.571.436.985.537 2.091.338 3.167-.177.975-.436 1.886-.564 2.758-.177.845-.412 1.626-.412 2.353 0 1.171-.527 2.121-1.607 2.795-1.121.696-2.682 1.023-4.613 1.023-.696 0-1.417-.039-2.144-.118-1.826-.19-3.272-.82-4.396-1.626-.655-.491-1.145-1.083-1.468-1.784-.527-1.13-.602-2.413-.276-3.792.118-.489.376-.899.635-1.248.236-.356.501-.616.775-.805 1.131-.793 1.872-1.726 2.273-2.788.376-1.012.454-2.098.295-3.196-.158-1.079-.527-2.027-1.083-2.841-.491-.736-1.154-1.298-1.984-1.681-.96-.454-2.091-.676-3.376-.676-1.931 0-3.632.475-5.067 1.417-1.361.869-2.362 2.061-3.003 3.527-.594 1.357-.902 2.89-.902 4.577 0 2.891 1.301 5.457 3.297 7.46 1.923 1.93 4.38 3.282 7.097 3.977 1.121.296 2.253.331 3.405.118 2.868-.527 5.389-1.567 7.544-2.993 2.143-1.425 3.854-3.233 5.099-5.363 1.26-2.144 1.912-4.603 1.912-7.28 0-3.254-2.224-5.925-5.191-6.847-1.873-.564-3.969-.792-6.197-.474-1.529.21-2.869.696-4.021 1.289-1.436.736-2.602 1.737-3.456 2.949-.868 1.26-1.485 2.748-1.778 4.393-.339 1.666-.356 3.445-.118 5.248.21 1.595.792 2.993 1.626 4.133.82 1.118 1.849 1.984 3.042 2.589 1.237.626 2.627.956 4.158.956 1.636 0 3.236-.346 4.754-1.042 1.425-.655 2.612-1.607 3.54-2.828.878-1.177 1.476-2.658 1.658-4.278.199-1.581.147-3.236-.067-4.934z"/></svg>
                  <span>WhatsApp Support</span>
                </a>
                <a href="tel:+919384347879" className="flex items-center gap-3 py-3 text-sm text-silver hover:text-sky transition-colors">
                  <Phone className="w-4 h-4 text-sky" />
                  <span>Call: +91 93843 47879</span>
                </a>
                <a href="mailto:thivarasolutions@gmail.com" className="flex items-center gap-3 py-3 text-sm text-silver hover:text-sky transition-colors">
                  <Mail className="w-4 h-4 text-sky" />
                  <span>Email: thivarasolutions@gmail.com</span>
                </a>
                <a href="https://www.instagram.com/thivarasolutions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-3 text-sm text-silver hover:text-sky transition-colors">
                  <Instagram className="w-4 h-4 text-sky" />
                  <span>Instagram: @thivarasolutions</span>
                </a>
              </div>
              <a href="#contact" className="mt-4 block py-3 text-lg font-medium text-white bg-blue rounded-xl text-center">
                Book Doorstep Support
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}