import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const NAV_SECTIONS = [
  { to: '#home', label: 'Start' },
  { to: '#historia', label: 'Nasza historia' },
  { to: '#szczegoly', label: 'Szczeg\u00f3\u0142y' },
  { to: '#prezenty', label: 'Prezenty' },
  { to: '#galeria', label: 'Galeria' },
  { to: '#stoliki', label: 'Stoliki' },
];

const NAV_PAGES = [
  { to: '/zaproszenie', label: 'Zaproszenie' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const scrollTo = (e, hash) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(hash.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = NAV_SECTIONS.map((l) => l.to.replace('#', ''));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= window.scrollY + 120) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = (isActive) =>
    `font-serif text-sm tracking-wide transition-colors hover:text-cranberry ${
      isActive ? 'text-cranberry font-semibold' : 'text-graphite/70'
    }`;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-sm border-b border-chocolate/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-cranberry fill-cranberry" />
          <span className="font-hand text-2xl text-cranberry">P & A</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_SECTIONS.map((link) => (
            <a
              key={link.to}
              href={link.to}
              onClick={(e) => scrollTo(e, link.to)}
              className={linkClass(active === link.to.replace('#', ''))}
            >
              {link.label}
            </a>
          ))}
          {NAV_PAGES.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={linkClass(location.pathname === link.to)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-graphite hover:text-cranberry transition-colors"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream/98 backdrop-blur-md border-t border-chocolate/10 px-4 py-6 space-y-4">
          {NAV_SECTIONS.map((link) => (
            <a
              key={link.to}
              href={link.to}
              onClick={(e) => scrollTo(e, link.to)}
              className={`block font-serif text-lg py-1 ${linkClass(active === link.to.replace('#', ''))}`}
            >
              {link.label}
            </a>
          ))}
          {NAV_PAGES.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block font-serif text-lg py-1 ${linkClass(location.pathname === link.to)}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
