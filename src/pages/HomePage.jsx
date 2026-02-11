import { Link } from 'react-router-dom';
import { Heart, Calendar, MapPin, Clock, ArrowRight, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 stripe-pattern overflow-hidden">
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
            <Link
              to="/rsvp"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cranberry text-cream font-serif text-lg rounded-full hover:bg-cranberry/90 transition-colors shadow-lg"
            >
              Potwierdź obecność
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/szczegoly"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cream border-2 border-chocolate/30 text-chocolate font-serif text-lg rounded-full hover:bg-chocolate/10 transition-colors"
            >
              Zobacz szczegóły
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-chocolate/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-chocolate/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 px-4 bg-sage/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-handwriting text-4xl sm:text-5xl text-cranberry text-center mb-12">
            Zapraszamy Was
          </h2>
          
          <p className="font-serif text-xl text-graphite/80 text-center leading-relaxed max-w-2xl mx-auto mb-12">
            Z ogromną radością chcemy podzielić się z Wami tym wyjątkowym dniem. 
            Wasze towarzystwo uczyni naszą uroczystość jeszcze bardziej niezapomnianą.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Ceremony Card */}
            <div className="bg-cream rounded-2xl p-8 shadow-sm border border-chocolate/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-chocolate" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-graphite font-medium">Ceremonia</h3>
                  <p className="font-serif text-graphite/60">godz. 15:30</p>
                </div>
              </div>
              <p className="font-serif text-graphite/80">
                Kościół Wniebowzięcia NMP w Jaćmierzu
              </p>
            </div>

            {/* Reception Card */}
            <div className="bg-cream rounded-2xl p-8 shadow-sm border border-chocolate/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-chocolate" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-graphite font-medium">Wesele</h3>
                  <p className="font-serif text-graphite/60">po ceremonii</p>
                </div>
              </div>
              <p className="font-serif text-graphite/80">
                Dwór Wola Sękowa
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/szczegoly"
              className="inline-flex items-center gap-2 font-serif text-cranberry hover:text-cranberry/80 transition-colors"
            >
              Zobacz więcej szczegółów
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <CountdownSection />
    </div>
  );
}

function CountdownSection() {
  const weddingDate = new Date('2026-04-11T15:30:00');
  const now = new Date();
  const diff = weddingDate.getTime() - now.getTime();
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-handwriting text-4xl sm:text-5xl text-cranberry mb-8">
          Do ślubu pozostało
        </h2>
        
        <div className="flex justify-center gap-4 sm:gap-8">
          <div className="bg-sage/20 rounded-2xl p-6 sm:p-8 min-w-[100px]">
            <p className="font-serif text-4xl sm:text-5xl text-cranberry font-medium">{days}</p>
            <p className="font-serif text-graphite/60 mt-1">dni</p>
          </div>
          <div className="bg-sage/20 rounded-2xl p-6 sm:p-8 min-w-[100px]">
            <p className="font-serif text-4xl sm:text-5xl text-cranberry font-medium">{hours}</p>
            <p className="font-serif text-graphite/60 mt-1">godzin</p>
          </div>
          <div className="bg-sage/20 rounded-2xl p-6 sm:p-8 min-w-[100px]">
            <p className="font-serif text-4xl sm:text-5xl text-cranberry font-medium">{minutes}</p>
            <p className="font-serif text-graphite/60 mt-1">minut</p>
          </div>
        </div>
      </div>
    </section>
  );
}
