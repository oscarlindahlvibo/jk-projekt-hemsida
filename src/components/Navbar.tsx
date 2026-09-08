import { useEffect, useState } from 'react';
import { Menu, X, Truck } from 'lucide-react';

const navLinks = [
  { href: '#tjanster', label: 'Tjänster' },
  { href: '#om-oss', label: 'Om oss' },
  { href: '#projekt', label: 'Projekt' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-md backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <a href="#hem" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 shadow-lg shadow-brand-500/30">
            <Truck className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-display text-lg font-bold ${scrolled ? 'text-navy-950' : 'text-white'}`}>
              JK Projektlogistik
            </span>
            <span className={`text-xs font-medium ${scrolled ? 'text-brand-600' : 'text-brand-300'}`}>
              AB · Åseda
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-navy-700 hover:text-brand-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#kontakt" className="btn-primary">
            Få offert
          </a>
        </div>

        <button
          className={`md:hidden ${scrolled ? 'text-navy-950' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meny"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-20 bg-white shadow-lg md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-navy-700 hover:bg-brand-50 hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-2"
            >
              Få offert
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
