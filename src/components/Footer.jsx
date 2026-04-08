import { Heart } from 'lucide-react';

/* Two magpie-style birds (SVG) referencing the invitation */
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
      {/* body */}
      <ellipse cx="24" cy="28" rx="10" ry="7" />
      {/* head */}
      <circle cx="14" cy="20" r="5" />
      {/* beak */}
      <path d="M9 20 L6 19" />
      {/* eye */}
      <circle cx="12.5" cy="19" r="0.8" fill="currentColor" />
      {/* tail */}
      <path d="M34 28 Q40 24 42 18" />
      {/* wing */}
      <path d="M20 24 Q24 20 28 24" />
      {/* legs */}
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

  return (
    <footer className="py-16 px-4 bg-cream border-t border-chocolate/10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Birds + heart */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Magpie flip />
          <Heart className="w-6 h-6 text-cranberry fill-cranberry" />
          <Magpie />
        </div>

        <p className="font-hand text-4xl text-cranberry mb-2">Do zobaczenia!</p>
        <p className="font-hand text-2xl text-chocolate">Paula & Artur</p>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 mb-6">
          {['home', 'historia', 'szczegoly', 'prezenty', 'galeria'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollTo(e, id)}
              className="font-serif text-sm text-graphite/50 hover:text-cranberry transition-colors capitalize"
            >
              {id === 'home' ? 'Start' : id === 'szczegoly' ? 'Szczegoly' : id}
            </a>
          ))}
        </div>

        {/* Wave decoration */}
        <svg className="w-24 h-6 mx-auto text-chocolate/20 mb-6" viewBox="0 0 100 20">
          <path d="M0 10 Q12.5 0,25 10 T50 10 T75 10 T100 10" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>

        <p className="text-sm text-graphite/40 font-serif">&copy; 2026 Paula & Artur &middot; Made with love</p>
      </div>
    </footer>
  );
}
