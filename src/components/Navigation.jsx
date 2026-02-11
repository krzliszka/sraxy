import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const navLinks = [
  { to: 'home', label: 'Strona główna' },
  { to: 'historia', label: 'Nasza historia' },
  { to: 'szczegoly', label: 'Szczegóły' },
  { to: 'rsvp', label: 'RSVP' },
  { to: 'prezenty', label: 'Prezenty' },
  { to: 'galeria', label: 'Galeria' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-chocolate/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2"
          >
            <Heart className="w-5 h-5 text-cranberry fill-cranberry" />
            <span className="font-handwriting text-2xl text-cranberry">P & A</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => scrollToSection(link.to)}
                className="font-serif text-sm tracking-wide transition-colors hover:text-cranberry text-graphite/70"
              >
                {link.label}
              </button>
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
                <button
                  key={link.to}
                  onClick={() => scrollToSection(link.to)}
                  className="font-serif text-lg py-2 transition-colors hover:text-cranberry text-graphite/70 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
