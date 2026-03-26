import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const navLinks = [
  { to: '#home', label: 'Start' },
  { to: '#historia', label: 'Nasza historia' },
  { to: '#szczegoly', label: 'Szczegóły' },
  { to: '#prezenty', label: 'Prezenty' },
  { to: '#galeria', label: 'Galeria' },
  { to: '/stoliki', label: 'Stoliki' },
  { to: '/zaproszenie', label: 'Zaproszenie' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // Scroll to section smoothly
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    
    const id = sectionId.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.filter(link => link.to.startsWith('#')).map(link => link.to.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-chocolate/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')} 
            className="flex items-center gap-2"
          >
            <Heart className="w-5 h-5 text-cranberry fill-cranberry" />
            <span className="font-handwriting text-2xl text-cranberry">P & A</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.to === '/zaproszenie') {
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="font-serif text-sm tracking-wide transition-colors hover:text-cranberry text-graphite/70"
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={(e) => scrollToSection(e, link.to)}
                  className={`font-serif text-sm tracking-wide transition-colors hover:text-cranberry ${
                    activeSection === link.to.replace('#', '')
                      ? 'text-cranberry font-medium'
                      : 'text-graphite/70'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
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
              {navLinks.map((link) => {
                if (link.to === '/zaproszenie') {
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="font-serif text-lg py-2 transition-colors hover:text-cranberry text-graphite/70"
                    >
                      {link.label}
                    </Link>
                  );
                }
                return (
                  <a
                    key={link.to}
                    href={link.to}
                    onClick={(e) => scrollToSection(e, link.to)}
                    className={`font-serif text-lg py-2 transition-colors hover:text-cranberry ${
                      activeSection === link.to.replace('#', '')
                        ? 'text-cranberry font-medium'
                        : 'text-graphite/70'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
