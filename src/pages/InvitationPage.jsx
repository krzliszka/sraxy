import { Link } from 'react-router-dom';
import {
  Heart,
  Church,
  Wine,
  Phone,
  MapPin,
  Clock,
  Calendar,
  Utensils,
  Car,
  Gift,
  Bird,
  Sparkles,
  X,
} from 'lucide-react';

export default function InvitationPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Close Button */}
      <Link 
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed top-6 right-6 z-50 w-10 h-10 flex items-center justify-center bg-cranberry/90 hover:bg-cranberry text-cream rounded-full transition-colors shadow-lg"
        title="Zamknij zaproszenie"
      >
        <X className="w-6 h-6" />
      </Link>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 stripe-pattern overflow-hidden">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sage via-cranberry to-sage opacity-60" />
        
        {/* Decorative corners */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-chocolate/30 rounded-tl-lg" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-chocolate/30 rounded-tr-lg" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-chocolate/30 rounded-bl-lg" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-chocolate/30 rounded-br-lg" />
        
        {/* Content */}
        <div className="text-center z-10 max-w-2xl mx-auto">
          {/* Small decorative element */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-chocolate/50" />
            <span className="text-chocolate/70 text-sm tracking-[0.3em] uppercase font-serif">Zaproszenie</span>
            <Sparkles className="w-4 h-4 text-chocolate/50" />
          </div>
          
          {/* Names */}
          <h1 className="font-handwriting text-6xl sm:text-7xl md:text-8xl text-cranberry mb-4 text-shadow">
            Paula & Artur
          </h1>
          
          {/* Heart divider */}
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="w-16 h-px bg-chocolate/30" />
            <Heart className="w-6 h-6 text-cranberry fill-cranberry" />
            <div className="w-16 h-px bg-chocolate/30" />
          </div>
          
          {/* Date */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Calendar className="w-5 h-5 text-chocolate" />
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-graphite tracking-wide">
              11.04.2026
            </p>
          </div>
          
          {/* Invitation text */}
          <p className="text-lg sm:text-xl md:text-2xl text-graphite/90 font-serif italic leading-relaxed px-4">
            Mamy zaszczyt i ogromną radość
            <br />
            zaprosić Was na nasz ślub!
          </p>
          
          {/* Decorative wave */}
          <div className="mt-12">
            <svg className="w-32 h-8 mx-auto text-chocolate/30" viewBox="0 0 100 20">
              <path
                d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-chocolate/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-chocolate/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* Ceremony Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-handwriting text-4xl sm:text-5xl text-cranberry mb-8">
            Ceremonia
          </h2>
          
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage/30 flex items-center justify-center">
            <Church className="w-8 h-8 text-chocolate" />
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-chocolate" />
            <p className="text-2xl font-serif text-graphite">15:30</p>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-serif text-graphite font-medium mb-2">
            Kościół Wniebowzięcia NMP w Jaćmierzu
          </h3>
          
          <div className="flex items-center justify-center gap-2 text-graphite/70">
            <MapPin className="w-4 h-4 text-chocolate" />
            <p className="font-serif">ul. Parkowa 12, Jaćmierz</p>
          </div>
          
          <a
            href="https://maps.google.com/?q=Kościół+Wniebowzięcia+NMP+Jaćmierz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-cream border-2 border-chocolate/30 rounded-full text-chocolate hover:bg-chocolate/10 transition-colors font-serif"
          >
            <MapPin className="w-4 h-4" />
            Zobacz na mapie
          </a>
          
          <div className="section-divider mt-12" />
        </div>
      </section>

      {/* Reception Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-handwriting text-4xl sm:text-5xl text-cranberry mb-8">
            Wesele
          </h2>
          
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage/30 flex items-center justify-center">
            <Wine className="w-8 h-8 text-chocolate" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-serif text-graphite font-medium mb-2">
            Dwór Wola Sękowa
          </h3>
          
          <div className="flex items-center justify-center gap-2 text-graphite/70 mb-6">
            <MapPin className="w-4 h-4 text-chocolate" />
            <p className="font-serif">Nowotaniec 106, Nowotaniec</p>
          </div>
          
          <p className="text-lg font-serif text-graphite/80 italic">
            Po ceremonii zapraszamy na wspólne celebrowanie.
          </p>
          
          <a
            href="https://maps.google.com/?q=Dwór+Wola+Sękowa+Nowotaniec"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-cream border-2 border-chocolate/30 rounded-full text-chocolate hover:bg-chocolate/10 transition-colors font-serif"
          >
            <MapPin className="w-4 h-4" />
            Zobacz na mapie
          </a>
          
          <div className="section-divider mt-12" />
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-16 px-4 bg-sage/40">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-handwriting text-4xl sm:text-5xl text-cranberry mb-4">
            Potwierdzenie
          </h2>
          
          <p className="text-lg font-serif text-graphite/80 mb-8">
            Prosimy o potwierdzenie przybycia
            <br />
            <span className="font-medium text-graphite">do dnia 01.03.2026 r.</span>
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <a
              href="tel:+48504444866"
              className="group flex flex-col items-center gap-3 p-6 bg-cream rounded-2xl shadow-sm hover:shadow-md transition-all border border-chocolate/10"
            >
              <div className="w-12 h-12 rounded-full bg-cranberry/10 flex items-center justify-center group-hover:bg-cranberry/20 transition-colors">
                <Phone className="w-5 h-5 text-cranberry" />
              </div>
              <div>
                <p className="font-handwriting text-2xl text-cranberry">Paula</p>
                <p className="font-serif text-lg text-graphite">504-444-866</p>
              </div>
            </a>
            
            <a
              href="tel:+48792512711"
              className="group flex flex-col items-center gap-3 p-6 bg-cream rounded-2xl shadow-sm hover:shadow-md transition-all border border-chocolate/10"
            >
              <div className="w-12 h-12 rounded-full bg-cranberry/10 flex items-center justify-center group-hover:bg-cranberry/20 transition-colors">
                <Phone className="w-5 h-5 text-cranberry" />
              </div>
              <div>
                <p className="font-handwriting text-2xl text-cranberry">Artur</p>
                <p className="font-serif text-lg text-graphite">792-512-711</p>
              </div>
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <Heart className="w-4 h-4 text-cranberry/50 fill-cranberry/50" />
            <Heart className="w-5 h-5 text-cranberry fill-cranberry" />
            <Heart className="w-4 h-4 text-cranberry/50 fill-cranberry/50" />
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-handwriting text-4xl sm:text-5xl text-cranberry mb-12 text-center">
            Informacje Dodatkowe
          </h2>
          
          <div className="space-y-8">
            <DetailCard
              icon={<Utensils className="w-6 h-6 text-chocolate" />}
              title="Dieta"
              text="Aby każdy mógł ucztować bez przeszkód, prosimy o informację o ewentualnych szczególnych wymaganiach dietetycznych do 01.03.2026."
            />
            
            <DetailCard
              icon={<Car className="w-6 h-6 text-chocolate" />}
              title="Transport"
              text="Chcemy, żeby każdy dotarł i wrócił bezpiecznie, więc dajcie znać, jak planujecie podróż!"
            />
            
            <div className="bg-sage/20 rounded-2xl p-6 sm:p-8 border border-sage/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-cream flex items-center justify-center">
                  <Gift className="w-6 h-6 text-chocolate" />
                </div>
                <div>
                  <h3 className="font-handwriting text-2xl sm:text-3xl text-cranberry mb-3">
                    Sroki już ćwierkają...
                  </h3>
                  <p className="font-serif text-graphite/90 leading-relaxed">
                    Najpiękniejszym prezentem będzie Wasza obecność - a jeśli chcecie dorzucić coś od siebie, zamiast kwiatów, które szybko więdną, ucieszy nas butelka wina albo coś stworzonego Waszymi rękami.
                  </p>
                  <p className="font-serif text-graphite/90 leading-relaxed mt-3">
                    A jeśli myślicie o prezencie, symboliczny wkład w naszą wspólną przyszłość będzie dla nas szczególnie miłym gestem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-cream border-t border-chocolate/10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Bird className="w-8 h-8 text-chocolate/60 -scale-x-100" />
            <Heart className="w-6 h-6 text-cranberry fill-cranberry" />
            <Bird className="w-8 h-8 text-chocolate/60" />
          </div>
          
          <p className="font-handwriting text-3xl sm:text-4xl text-cranberry mb-2">
            Do zobaczenia!
          </p>
          <p className="font-handwriting text-2xl sm:text-3xl text-chocolate">
            Paula & Artur
          </p>
          
          <div className="mt-8">
            <svg className="w-24 h-6 mx-auto text-chocolate/20" viewBox="0 0 100 20">
              <path
                d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cranberry text-cream font-serif rounded-full hover:bg-cranberry/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Wróć do strony głównej
            </Link>
          </div>
          
          <p className="mt-8 text-sm text-graphite/40 font-serif">
            © 2026 Paula & Artur
          </p>
        </div>
      </footer>
    </div>
  );
}

function DetailCard({ icon, title, text }) {
  return (
    <div className="bg-cream rounded-2xl p-6 sm:p-8 border border-chocolate/10 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex-shrink-0 rounded-full bg-sage/30 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="font-serif text-xl text-graphite font-medium mb-2">
            {title}
          </h3>
          <p className="font-serif text-graphite/80 leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
