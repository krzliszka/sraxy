import { Heart } from 'lucide-react';

function Magpie({ flip }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={`w-10 h-10 text-chocolate/50 ${flip ? '-scale-x-100' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="24" cy="28" rx="10" ry="7" />
      <circle cx="14" cy="20" r="5" />
      <path d="M9 20 L6 19" />
      <circle cx="12.5" cy="19" r="0.8" fill="currentColor" />
      <path d="M34 28 Q40 24 42 18" />
      <path d="M20 24 Q24 20 28 24" />
      <path d="M20 35 L18 40 M24 35 L24 40" />
    </svg>
  );
}

export default function Footer() {
  const scrollTo = (e, hash) => {
    e.preventDefault();
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { id: 'home', label: 'Start' },
    { id: 'historia', label: 'Nasza historia' },
    { id: 'szczegoly', label: 'Szczeg\u00f3\u0142y' },
    { id: 'prezenty', label: 'Prezenty' },
    { id: 'galeria', label: 'Galeria' },
  ];

  return (
    <footer className="py-16 px-4 bg-cream border-t border-chocolate/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Magpie flip />
          <Heart className="w-6 h-6 text-cranberry fill-cranberry" />
          <Magpie />
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

        <p className="text-sm text-graphite/40 font-serif">&copy; 2026 Paula & Artur &middot; Made with love</p>
      </div>
    </footer>
  );
}
