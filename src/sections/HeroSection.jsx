import { Heart, Calendar, MapPin } from 'lucide-react';
import CupidPup from '../components/CupidPup';

export default function HeroSection() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 stripe-pattern overflow-hidden scroll-mt-16"
    >
      {/* Decorative corners */}
      {['top-20 left-6 border-t-2 border-l-2 rounded-tl-lg',
        'top-20 right-6 border-t-2 border-r-2 rounded-tr-lg',
        'bottom-6 left-6 border-b-2 border-l-2 rounded-bl-lg',
        'bottom-6 right-6 border-b-2 border-r-2 rounded-br-lg',
      ].map((cls) => (
        <div key={cls} className={`absolute w-14 h-14 border-chocolate/20 hidden sm:block ${cls}`} />
      ))}

      {/* Cupid pups decoration - flanking the hero */}
      <div className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 opacity-[0.08] hidden lg:block">
        <CupidPup flip className="w-40 h-40" />
      </div>
      <div className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 opacity-[0.08] hidden lg:block">
        <CupidPup className="w-40 h-40" />
      </div>

      <div className="text-center z-10 max-w-3xl mx-auto animate-fade-in">
        <p className="text-chocolate/60 text-sm tracking-[0.3em] uppercase font-serif mb-6">
          Pobieramy się
        </p>

        <h1 className="font-hand text-7xl sm:text-8xl md:text-9xl text-cranberry mb-2 text-shadow">
          Paula & Artur
        </h1>

        <div className="flex items-center justify-center gap-4 my-8">
          <span className="w-16 h-px bg-chocolate/30" />
          <Heart className="w-8 h-8 text-cranberry fill-cranberry animate-pulse-slow" />
          <span className="w-16 h-px bg-chocolate/30" />
        </div>

        <div className="flex items-center justify-center gap-3 mb-4">
          <Calendar className="w-5 h-5 text-chocolate" />
          <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-graphite tracking-wide">
            11.04.2026
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-10 text-graphite/50">
          <MapPin className="w-4 h-4" />
          <p className="font-serif">Jaćmierz • Nowotaniec</p>
        </div>

        <p className="font-serif text-lg sm:text-xl text-graphite/80 italic leading-relaxed max-w-xl mx-auto mb-12">
          Mamy zaszczyt i ogromną radość zaprosić Was na nasz ślub!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('szczegoly')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cranberry text-cream font-serif text-lg rounded-full hover:bg-cranberry/90 transition-colors shadow-lg"
          >
            Sprawdź detale
          </button>
          <button
            onClick={() => scrollTo('stoliki')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cream border-2 border-chocolate/30 text-chocolate font-serif text-lg rounded-full hover:bg-chocolate/5 transition-colors"
          >
            Znajdź swój stolik
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-chocolate/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-chocolate/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
