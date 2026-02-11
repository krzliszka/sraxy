import { Heart, Calendar, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 stripe-pattern overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-24 left-8 w-16 h-16 border-t-2 border-l-2 border-chocolate/30 rounded-tl-lg hidden sm:block" />
      <div className="absolute top-24 right-8 w-16 h-16 border-t-2 border-r-2 border-chocolate/30 rounded-tr-lg hidden sm:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-chocolate/30 rounded-bl-lg hidden sm:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-chocolate/30 rounded-br-lg hidden sm:block" />

      {/* Content */}
      <div className="text-center z-10 max-w-3xl mx-auto">
        {/* Small decorative element */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-chocolate/50" />
          <span className="text-chocolate/70 text-sm tracking-[0.3em] uppercase font-serif">
            Pobieramy się
          </span>
          <Sparkles className="w-4 h-4 text-chocolate/50" />
        </div>

        {/* Names */}
        <h1 className="font-handwriting text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-cranberry mb-4 text-shadow">
          Paula & Artur
        </h1>

        {/* Heart divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="w-20 h-px bg-chocolate/30" />
          <Heart className="w-8 h-8 text-cranberry fill-cranberry animate-pulse" />
          <div className="w-20 h-px bg-chocolate/30" />
        </div>

        {/* Date */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Calendar className="w-6 h-6 text-chocolate" />
          <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-graphite tracking-wide">
            11.04.2026
          </p>
        </div>

        {/* Location hint */}
        <div className="flex items-center justify-center gap-2 mb-10 text-graphite/60">
          <MapPin className="w-4 h-4" />
          <p className="font-serif">Jaćmierz • Nowotaniec</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('rsvp')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cranberry text-cream font-serif text-lg rounded-full hover:bg-cranberry/90 transition-colors shadow-lg"
          >
            Potwierdź obecność
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollToSection('szczegoly')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cream border-2 border-chocolate/30 text-chocolate font-serif text-lg rounded-full hover:bg-chocolate/10 transition-colors"
          >
            Zobacz szczegóły
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-chocolate/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-chocolate/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
