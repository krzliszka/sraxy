import { Heart } from 'lucide-react';
import CupidPup from './CupidPup';

export default function Footer() {
  const scrollTo = (e, hash) => {
    e.preventDefault();
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { id: 'home', label: 'Start' },
    { id: 'historia', label: 'Nasza historia' },
    { id: 'szczegoly', label: 'Detale' },
    { id: 'prezenty', label: 'Prezenty' },
  ];

  return (
    <footer className="py-16 px-4 bg-cream border-t border-chocolate/10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Winged dogs (cupid pups) + heart */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <CupidPup flip className="w-16 h-16 text-chocolate/40" />
          <Heart className="w-6 h-6 text-cranberry fill-cranberry" />
          <CupidPup className="w-16 h-16 text-chocolate/40" />
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
        </div>

        <svg className="w-24 h-6 mx-auto text-chocolate/20 mb-6" viewBox="0 0 100 20">
          <path d="M0 10 Q12.5 0,25 10 T50 10 T75 10 T100 10" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>

        <p className="text-sm text-graphite/40 font-serif">© 2026 Paula & Artur · Made with love</p>
      </div>
    </footer>
  );
}
