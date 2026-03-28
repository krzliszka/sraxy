import { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Clock, ArrowRight, Sparkles, Church, Wine, Car, Gift, HandHeart, PiggyBank, Camera, Upload, Send, CheckCircle, AlertCircle, Users, Utensils, MessageSquare, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SeatingSection from '../sections/SeatingSection';

// Google Apps Script URL - podmień na swój URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxHY10zozTET3XKisDLQ28VyIIAZCNNuJrmlapAij2BaRb_8Fvp9tybLE3OVN98o4o9/exec';

// Timeline data
const timeline = [
  { year: '2018', title: 'Pierwsze spotkanie', description: 'Tutaj możecie opisać jak się poznaliście...', side: 'left' },
  { year: '2019', title: 'Pierwsza randka', description: 'Opowiedzcie o waszej pierwszej randce...', side: 'right' },
  { year: '2021', title: 'Wspólne mieszkanie', description: 'Kiedy zamieszkaliście razem...', side: 'left' },
  { year: '2024', title: 'Zaręczyny', description: 'Opowiedzcie o zaręczynach...', side: 'right' },
  { year: '2026', title: 'Ślub!', description: 'I wreszcie nadszedł ten wyczekiwany dzień...', side: 'left', highlight: true },
];

// Gallery photos
const photos = [
  { id: 1, src: '/photos/1.jpg', alt: 'Paula i Artur - zdjęcie 1' },
  { id: 2, src: '/photos/2.jpg', alt: 'Paula i Artur - zdjęcie 2' },
  { id: 3, src: '/photos/3.jpg', alt: 'Paula i Artur - zdjęcie 3' },
  { id: 4, src: '/photos/4.jpg', alt: 'Paula i Artur - zdjęcie 4' },
  { id: 5, src: '/photos/5.jpg', alt: 'Paula i Artur - zdjęcie 5' },
  { id: 6, src: '/photos/6.jpg', alt: 'Paula i Artur - zdjęcie 6' },
];

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("wedding_auth") === "11042026") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "11042026") {
      localStorage.setItem("wedding_auth", "11042026");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Niepoprawne hasło. Spróbuj ponownie.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream stripe-pattern">
        <section className="relative flex flex-col items-center justify-center px-4 py-20 w-full max-w-md">
          <div className="text-center z-10 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-chocolate/50" />
              <span className="text-chocolate/70 text-sm tracking-[0.3em] uppercase font-serif">Pobieramy się</span>
              <Sparkles className="w-4 h-4 text-chocolate/50" />
            </div>
            <h1 className="font-handwriting text-6xl sm:text-7xl md:text-8xl text-cranberry mb-4">Paula & Artur</h1>
            <form onSubmit={handleLogin} className="flex flex-col items-center gap-4 mt-8">
              <input
                type="password"
                className="px-6 py-3 rounded-full border-2 border-chocolate/20 text-center text-lg font-serif focus:outline-none focus:border-chocolate/60 bg-cream text-chocolate shadow"
                placeholder="Hasło dostępu"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoFocus
              />
              <button
                type="submit"
                className="px-8 py-3 bg-cranberry text-cream font-serif text-lg rounded-full hover:bg-cranberry/90 transition-colors shadow-lg"
              >
                Wejdź
              </button>
              {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
            </form>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <HeroSection />

      {/* Countdown Section */}
      <CountdownSection />

      {/* Story Section */}
      <StorySection />

      {/* Details Section */}
      <DetailsSection />

      {/* Gifts Section */}
      <GiftsSection />

      {/* Seating Section */}
      <SeatingSection />

      {/* Gallery Section */}
      <GallerySection />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 stripe-pattern overflow-hidden scroll-mt-16">
      <div className="absolute top-24 left-8 w-16 h-16 border-t-2 border-l-2 border-chocolate/30 rounded-tl-lg hidden sm:block" />
      <div className="absolute top-24 right-8 w-16 h-16 border-t-2 border-r-2 border-chocolate/30 rounded-tr-lg hidden sm:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-chocolate/30 rounded-bl-lg hidden sm:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-chocolate/30 rounded-br-lg hidden sm:block" />

      <div className="text-center z-10 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-chocolate/50" />
          <span className="text-chocolate/70 text-sm tracking-[0.3em] uppercase font-serif">Pobieramy się</span>
          <Sparkles className="w-4 h-4 text-chocolate/50" />
        </div>

        <h1 className="font-handwriting text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-cranberry mb-4">
          Paula & Artur
        </h1>

        <div className="flex items-center justify-center gap-4 my-8">
          <div className="w-20 h-px bg-chocolate/30" />
          <Heart className="w-8 h-8 text-cranberry fill-cranberry animate-pulse" />
          <div className="w-20 h-px bg-chocolate/30" />
        </div>

        <div className="flex items-center justify-center gap-3 mb-6">
          <Calendar className="w-6 h-6 text-chocolate" />
          <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-graphite tracking-wide">11.04.2026</p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-10 text-graphite/60">
          <MapPin className="w-4 h-4" />
          <p className="font-serif">Jaćmierz • Nowotaniec</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cranberry text-cream font-serif text-lg rounded-full hover:bg-cranberry/90 transition-colors shadow-lg"
          >
            Potwierdź obecność
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => document.getElementById('szczegoly')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cream border-2 border-chocolate/30 text-chocolate font-serif text-lg rounded-full hover:bg-chocolate/10 transition-colors"
          >
            Zobacz szczegóły
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

function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const weddingDate = new Date('2026-04-11T15:30:00');
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();
      
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-sage/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-handwriting text-4xl sm:text-5xl text-cranberry mb-8">Do ślubu pozostało</h2>
        <div className="flex justify-center gap-4 sm:gap-8">
          {[
            { value: timeLeft.days, label: 'dni' },
            { value: timeLeft.hours, label: 'godzin' },
            { value: timeLeft.minutes, label: 'minut' },
          ].map((item, i) => (
            <div key={i} className="bg-cream rounded-2xl p-6 sm:p-8 min-w-[100px] shadow-sm">
              <p className="font-serif text-4xl sm:text-5xl text-cranberry font-medium">{item.value}</p>
              <p className="font-serif text-graphite/60 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="historia" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-chocolate/50" />
            <span className="text-chocolate/70 text-sm tracking-[0.3em] uppercase font-serif">O nas</span>
            <Sparkles className="w-4 h-4 text-chocolate/50" />
          </div>
          <h2 className="font-handwriting text-5xl sm:text-6xl text-cranberry mb-6">Nasza Historia</h2>
          <p className="font-serif text-xl text-graphite/80 leading-relaxed max-w-2xl mx-auto">
            Każda wielka historia miłosna ma swój początek. Oto nasza...
          </p>
        </div>

        {/* About Us */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {[
            { name: 'Paula', initial: 'P', desc: 'Tu możecie dodać krótki opis o Pauli - jej pasje, zainteresowania, czym się zajmuje...' },
            { name: 'Artur', initial: 'A', desc: 'Tu możecie dodać krótki opis o Arturze - jego pasje, zainteresowania, czym się zajmuje...' },
          ].map((person) => (
            <div key={person.name} className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-sage/30 flex items-center justify-center border-4 border-cream shadow-lg">
                <span className="font-handwriting text-6xl text-cranberry">{person.initial}</span>
              </div>
              <h3 className="font-handwriting text-4xl text-cranberry mb-2">{person.name}</h3>
              <p className="font-serif text-graphite/70 leading-relaxed">{person.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-cream rounded-3xl p-8 sm:p-12">
          <h3 className="font-handwriting text-4xl text-cranberry text-center mb-12">Nasza podróż</h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-chocolate/20 -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-cream rounded-full border-2 border-chocolate/30 flex items-center justify-center hidden md:flex z-10">
                    <Heart className={`w-5 h-5 ${item.highlight ? 'text-cranberry fill-cranberry' : 'text-chocolate/50'}`} />
                  </div>
                  <div className={`md:w-1/2 ${item.side === 'right' ? 'md:ml-auto md:pl-12' : 'md:pr-12'}`}>
                    <div className={`bg-sage/20 rounded-2xl p-6 border ${item.highlight ? 'border-cranberry/30 bg-cranberry/5' : 'border-sage/30'}`}>
                      <span className={`font-serif text-sm ${item.highlight ? 'text-cranberry' : 'text-chocolate/60'}`}>{item.year}</span>
                      <h4 className={`font-handwriting text-2xl ${item.highlight ? 'text-cranberry' : 'text-graphite'} mt-1 mb-2`}>{item.title}</h4>
                      <p className="font-serif text-graphite/70">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-16">
          <svg className="w-12 h-12 mx-auto text-cranberry/30 mb-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p className="font-serif text-2xl sm:text-3xl text-graphite/80 italic leading-relaxed mb-6 max-w-3xl mx-auto">
            "Miłość nie polega na tym, żeby patrzeć na siebie nawzajem, lecz żeby patrzeć razem w tym samym kierunku."
          </p>
          <p className="font-serif text-graphite/50">— Antoine de Saint-Exupéry</p>
        </div>
      </div>
    </section>
  );
}

function DetailsSection() {
  return (
    <section id="szczegoly" className="py-20 px-4 bg-sage/20 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-chocolate/50" />
            <span className="text-chocolate/70 text-sm tracking-[0.3em] uppercase font-serif">Informacje</span>
            <Sparkles className="w-4 h-4 text-chocolate/50" />
          </div>
          <h2 className="font-handwriting text-5xl sm:text-6xl text-cranberry mb-6">Szczegóły</h2>
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-cranberry/10 rounded-full">
            <Calendar className="w-6 h-6 text-cranberry" />
            <span className="font-serif text-2xl text-cranberry font-medium">Sobota, 11 kwietnia 2026</span>
          </div>
        </div>

        {/* Ceremony & Reception */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: Church, title: 'Ceremonia', time: '15:30', place: 'Kościół Wniebowzięcia NMP', location: 'w Jaćmierzu', address: 'Jaćmierz', mapQuery: 'Kościół+Wniebowzięcia+NMP+Jaćmierz' },
            { icon: Wine, title: 'Wesele', time: 'po ceremonii', place: 'Dwór Wola Sękowa', location: 'elegancja w sercu natury', address: 'Nowotaniec 106, Nowotaniec', mapQuery: 'Dwór+Wola+Sękowa+Nowotaniec' },
          ].map((item) => (
            <div key={item.title} className="bg-cream rounded-3xl p-8 shadow-sm border border-chocolate/10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sage/30 flex items-center justify-center">
                <item.icon className="w-10 h-10 text-chocolate" />
              </div>
              <h3 className="font-handwriting text-4xl text-cranberry text-center mb-4">{item.title}</h3>
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-chocolate" />
                  <span className="font-serif text-xl text-graphite">{item.time}</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-graphite font-medium mb-1">{item.place}</h4>
                  <p className="font-serif text-graphite/60">{item.location}</p>
                </div>
                <div className="flex items-center justify-center gap-2 text-graphite/60">
                  <MapPin className="w-4 h-4" />
                  <span className="font-serif">{item.address}</span>
                </div>
                <a
                  href={`https://maps.google.com/?q=${item.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-sage/30 rounded-full text-chocolate hover:bg-sage/50 transition-colors font-serif"
                >
                  <MapPin className="w-4 h-4" />
                  Otwórz mapę
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <div className="bg-cream rounded-3xl p-8 sm:p-12 mb-16">
          <h3 className="font-handwriting text-4xl text-cranberry text-center mb-12">Plan dnia</h3>
          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              { time: '15:30', title: 'Ceremonia ślubna', desc: 'Kościół Wniebowzięcia NMP w Jaćmierzu' },
              { time: '17:00', title: 'Przyjazd gości', desc: 'Powitanie w Dworze Wola Sękowa' },
              { time: '17:30', title: 'Toast weselny', desc: 'Oficjalne rozpoczęcie przyjęcia' },
              { time: '18:00', title: 'Obiad weselny', desc: 'Uczta dla wszystkich gości' },
              { time: '21:00', title: 'Pierwszy taniec', desc: 'Czas na parkiet!' },
              { time: '00:00', title: 'Oczepiny', desc: 'Tradycja musi być!' },
              { time: '??:??', title: 'Zabawa do białego rana', desc: 'Bawmy się!', highlight: true },
            ].map((item, i) => (
              <div key={i} className={`flex gap-4 ${item.highlight ? 'bg-cranberry/10 -mx-4 px-4 py-4 rounded-xl' : ''}`}>
                <div className="w-20 flex-shrink-0 text-right">
                  <span className={`font-serif text-lg ${item.highlight ? 'text-cranberry font-medium' : 'text-chocolate'}`}>{item.time}</span>
                </div>
                <div className="w-px bg-chocolate/20" />
                <div>
                  <h4 className={`font-serif text-lg ${item.highlight ? 'text-cranberry' : 'text-graphite'} font-medium`}>{item.title}</h4>
                  <p className="font-serif text-graphite/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transport */}
        <div className="bg-cream rounded-2xl p-8 border border-chocolate/10 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-sage/30 flex items-center justify-center">
              <Car className="w-6 h-6 text-chocolate" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-graphite font-medium mb-2">Jak dojechać?</h3>
              <p className="font-serif text-graphite/80 leading-relaxed mb-4">
                Chcemy, żeby każdy dotarł i wrócił bezpiecznie, więc dajcie nam znać, jak planujecie podróż!
              </p>
              <p className="font-serif text-graphite/80 leading-relaxed">
                Jeśli potrzebujecie pomocy z transportem lub chcecie się zorganizować z innymi gośćmi, skontaktujcie się z nami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GiftsSection() {
  return (
    <section id="prezenty" className="py-20 px-4 bg-sage/20 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-chocolate/50" />
            <span className="text-chocolate/70 text-sm tracking-[0.3em] uppercase font-serif">Prezenty</span>
            <Sparkles className="w-4 h-4 text-chocolate/50" />
          </div>
          <h2 className="font-handwriting text-5xl sm:text-6xl text-cranberry mb-6">Sroki już ćwierkają...</h2>
        </div>

        <div className="bg-cream rounded-3xl p-8 sm:p-12 shadow-sm border border-chocolate/10 text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-sage/30 flex items-center justify-center">
            <Heart className="w-10 h-10 text-cranberry fill-cranberry" />
          </div>
          <p className="font-serif text-xl sm:text-2xl text-graphite leading-relaxed mb-6">
            Najpiękniejszym prezentem będzie <span className="text-cranberry font-medium">Wasza obecność</span> – to ona sprawi, że ten dzień będzie naprawdę wyjątkowy.
          </p>
          <div className="w-16 h-px bg-chocolate/20 mx-auto my-8" />
          <p className="font-serif text-lg text-graphite/80 leading-relaxed">
            A jeśli chcecie dorzucić coś od siebie, zamiast kwiatów, które szybko więdną, ucieszy nas butelka wina albo coś stworzonego Waszymi rękami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Wine, title: 'Butelka wina', desc: 'Dobre wino zawsze się przyda – na rocznicę, romantyczny wieczór lub po prostu na wspomnienie tego dnia.' },
            { icon: HandHeart, title: 'Coś z serca', desc: 'Rzeczy stworzone Waszymi rękami mają dla nas szczególną wartość – to wkład Waszego czasu i miłości.' },
            { icon: PiggyBank, title: 'Na przyszłość', desc: 'Symboliczny wkład w naszą wspólną przyszłość będzie dla nas szczególnie miłym gestem.' },
          ].map((item) => (
            <div key={item.title} className="bg-cream rounded-2xl p-8 text-center border border-sage/30">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage/30 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-chocolate" />
              </div>
              <h3 className="font-handwriting text-2xl text-cranberry mb-3">{item.title}</h3>
              <p className="font-serif text-graphite/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="galeria" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-chocolate/50" />
            <span className="text-chocolate/70 text-sm tracking-[0.3em] uppercase font-serif">Wspomnienia</span>
            <Sparkles className="w-4 h-4 text-chocolate/50" />
          </div>
          <h2 className="font-handwriting text-5xl sm:text-6xl text-cranberry mb-6">Galeria</h2>
          <p className="font-serif text-xl text-graphite/80 leading-relaxed max-w-2xl mx-auto">
            Chwile, które chcemy z Wami dzielić.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {photos.map((photo) => (
            <button key={photo.id} onClick={() => setSelectedPhoto(photo)}
              className="group relative aspect-square bg-sage/20 rounded-2xl overflow-hidden border border-chocolate/10 hover:border-cranberry/30 transition-colors">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-12 h-12 text-chocolate/30 mx-auto mb-2" />
                  <p className="font-serif text-sm text-chocolate/40">Zdjęcie {photo.id}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-cranberry/0 group-hover:bg-cranberry/10 transition-colors flex items-center justify-center">
                <Heart className="w-8 h-8 text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>

        {/* Upload CTA */}
        <div className="max-w-2xl mx-auto text-center bg-sage/20 rounded-3xl p-8">
          <h3 className="font-handwriting text-4xl text-cranberry mb-4">Podzielcie się z nami</h3>
          <p className="font-serif text-graphite/70 mb-8">Po ślubie chętnie zobaczymy Wasze zdjęcia z tego dnia!</p>
          <div className="bg-cream rounded-2xl p-8 border-2 border-dashed border-chocolate/30">
            <Upload className="w-12 h-12 text-chocolate/40 mx-auto mb-4" />
            <p className="font-serif text-graphite/60 mb-4">Tu bedzie jakies okienko/przycisk, który otworzy od razu aparat w telefonie. 
            QR na lustrze bedzie prowadzil do tej klasy, wiec zeskanowanie bedzie otwieralo najpierw strone - potem aparat
            (to jeszcze trzeba przetestowac) czy nie lepiej po prostu kliknac przesylanie zdj z galerii i moze nikt nie wysle kotka </p>
            <p className="font-serif text-sm text-graphite/40">#GrzegorzBraun2025</p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-graphite/95 flex items-center justify-center p-4">
          <button onClick={() => setSelectedPhoto(null)} className="absolute top-4 right-4 p-2 text-cream/70 hover:text-cream transition-colors">
            <X className="w-8 h-8" />
          </button>
          <button onClick={() => {
            const idx = photos.findIndex(p => p.id === selectedPhoto.id);
            setSelectedPhoto(photos[idx === 0 ? photos.length - 1 : idx - 1]);
          }} className="absolute left-4 p-2 text-cream/70 hover:text-cream transition-colors">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={() => {
            const idx = photos.findIndex(p => p.id === selectedPhoto.id);
            setSelectedPhoto(photos[idx === photos.length - 1 ? 0 : idx + 1]);
          }} className="absolute right-4 p-2 text-cream/70 hover:text-cream transition-colors">
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="bg-sage/20 rounded-2xl p-20 text-center">
            <Camera className="w-20 h-20 text-cream/30 mx-auto mb-4" />
            <p className="font-serif text-cream/50">Zdjęcie {selectedPhoto.id}</p>
          </div>
        </div>
      )}
    </section>
  );
}
