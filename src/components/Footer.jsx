import { Heart } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (e, hash) => {
    e.preventDefault();
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const links = [
    { id: 'home', label: 'Start' },
    { id: 'historia', label: 'Nasza historia' },
    { id: 'szczegoly', label: 'Detale' },
    { id: 'prezenty', label: 'Prezenty' },
    { id: 'stoliki', label: 'Stoliki' },
    { id: 'pokoje', label: 'Pokoje' },
    { id: 'zdjecia', label: 'Zdjęcia' },
  ];

  const pageLinks = [
    { to: '/zaproszenie', label: 'Zaproszenie' },
  ];

  return (
    <footer className="py-16 px-4 border-t border-chocolate/10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Winged dogs (cupid pups) facing each other */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <img src="/megera2.jpg" alt="Megerka amorek" className="w-20 h-20 object-contain" />
          <Heart className="w-5 h-5 text-cranberry fill-cranberry" />
          <img src="/megera2.jpg" alt="Megerka amorek" className="w-20 h-20 object-contain -scale-x-100" />
        </div>

        <p className="font-hand text-4xl text-cranberry mb-2">Do zobaczenia!</p>
        <p className="font-hand text-2xl text-chocolate">Paula & Artur</p>

        <div className="flex flex-wrap justify-center gap-6 mt-8 mb-6">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => scrollTo(e, l.id)}
              className="font-serif text-sm text-graphite/50 hover:text-cranberry transition-colors"
            >
              {l.label}
            </a>
          ))}
          {pageLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-serif text-sm text-graphite/50 hover:text-cranberry transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <svg className="w-24 h-6 mx-auto text-chocolate/20 mb-6" viewBox="0 0 100 20">
          <path d="M0 10 Q12.5 0,25 10 T50 10 T75 10 T100 10" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>

        <p className="text-sm text-graphite/40 font-serif">© 2026 Paula & Artur · Made with love</p>
      </div>
    </footer>
  );
}
