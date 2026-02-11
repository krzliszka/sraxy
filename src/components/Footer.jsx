import { Link } from 'react-router-dom';
import { Bird, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-4 bg-cream border-t border-chocolate/10">
      <div className="max-w-4xl mx-auto">
        {/* Birds decoration */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Bird className="w-8 h-8 text-chocolate/60 -scale-x-100" />
          <Heart className="w-6 h-6 text-cranberry fill-cranberry" />
          <Bird className="w-8 h-8 text-chocolate/60" />
        </div>

        {/* Names */}
        <p className="font-handwriting text-3xl sm:text-4xl text-cranberry mb-2 text-center">
          Paula & Artur
        </p>
        <p className="font-serif text-graphite/60 text-center mb-8">
          11 kwietnia 2026
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Link to="/" className="font-serif text-sm text-graphite/60 hover:text-cranberry transition-colors">
            Strona główna
          </Link>
          <Link to="/nasza-historia" className="font-serif text-sm text-graphite/60 hover:text-cranberry transition-colors">
            Nasza historia
          </Link>
          <Link to="/szczegoly" className="font-serif text-sm text-graphite/60 hover:text-cranberry transition-colors">
            Szczegóły
          </Link>
          <Link to="/rsvp" className="font-serif text-sm text-graphite/60 hover:text-cranberry transition-colors">
            RSVP
          </Link>
          <Link to="/zaproszenie" className="font-serif text-sm text-graphite/60 hover:text-cranberry transition-colors">
            Zaproszenie
          </Link>
        </div>

        {/* Decorative wave */}
        <div className="flex justify-center mb-6">
          <svg className="w-24 h-6 text-chocolate/20" viewBox="0 0 100 20">
            <path
              d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Copyright */}
        <p className="text-sm text-graphite/40 font-serif text-center">
          © 2026 Paula & Artur • Made with love
        </p>
      </div>
    </footer>
  );
}
