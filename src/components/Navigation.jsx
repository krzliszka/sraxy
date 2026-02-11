import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Strona główna' },
  { to: '/nasza-historia', label: 'Nasza historia' },
  { to: '/szczegoly', label: 'Szczegóły' },
  { to: '/rsvp', label: 'RSVP' },
  { to: '/prezenty', label: 'Prezenty' },
  { to: '/galeria', label: 'Galeria' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-chocolate/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-cranberry fill-cranberry" />
            <span className="font-handwriting text-2xl text-cranberry">P & A</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-serif text-sm tracking-wide transition-colors hover:text-cranberry ${
                  location.pathname === link.to
                    ? 'text-cranberry font-medium'
                    : 'text-graphite/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-graphite hover:text-cranberry transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-chocolate/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`font-serif text-lg py-2 transition-colors hover:text-cranberry ${
                    location.pathname === link.to
                      ? 'text-cranberry font-medium'
                      : 'text-graphite/70'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
