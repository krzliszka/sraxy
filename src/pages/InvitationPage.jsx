import { Heart, Church, Wine, Phone, MapPin, Clock, Calendar, Utensils, Car, Gift, X } from 'lucide-react';

function DetailCard({ icon, title, children }) {
  return (
    <div className="bg-cream rounded-2xl p-6 sm:p-8 border border-chocolate/10 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex-shrink-0 rounded-full bg-sage/25 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="font-serif text-lg text-graphite font-medium mb-1">{title}</h3>
          <div className="font-serif text-graphite/70 leading-relaxed text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function InvitationPage() {
  const goHome = () => {
    window.location.href = '/sraxy/#/';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream">
      <button
        onClick={goHome}
        className="fixed top-6 right-6 z-50 w-10 h-10 flex items-center justify-center bg-cranberry/90 hover:bg-cranberry text-cream rounded-full transition-colors shadow-lg"
        title="Zamknij zaproszenie"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 stripe-pattern overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-sage via-cranberry to-sage opacity-50" />
        {['top-8 left-8 border-t-2 border-l-2 rounded-tl-lg',
          'top-8 right-8 border-t-2 border-r-2 rounded-tr-lg',
          'bottom-8 left-8 border-b-2 border-l-2 rounded-bl-lg',
          'bottom-8 right-8 border-b-2 border-r-2 rounded-br-lg',
        ].map((cls) => (
          <div key={cls} className={`absolute w-14 h-14 border-chocolate/25 ${cls}`} />
        ))}

        <div className="text-center z-10 max-w-2xl mx-auto animate-fade-in">
          <p className="text-chocolate/60 text-sm tracking-[0.3em] uppercase font-serif mb-6">Zaproszenie</p>
          <h1 className="font-hand text-6xl sm:text-7xl md:text-8xl text-cranberry mb-4 text-shadow">Paula & Artur</h1>
          <div className="flex items-center justify-center gap-4 my-6">
            <span className="w-14 h-px bg-chocolate/30" />
            <Heart className="w-6 h-6 text-cranberry fill-cranberry" />
            <span className="w-14 h-px bg-chocolate/30" />
          </div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-graphite tracking-wide">11.04.2026</p>
          </div>
          <p className="text-lg sm:text-xl text-graphite/80 font-serif italic leading-relaxed px-4">
            Mamy zaszczyt i ogromną radość<br />zaprosić Was na nasz ślub!
          </p>
          <svg className="w-28 h-6 mx-auto text-chocolate/25 mt-10" viewBox="0 0 100 20">
            <path d="M0 10 Q12.5 0,25 10 T50 10 T75 10 T100 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-chocolate/25 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-chocolate/30 rounded-full" />
          </div>
        </div>
      </section>

      {/* Ceremonia */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-hand text-4xl sm:text-5xl text-cranberry mb-8">Ceremonia</h2>
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage/25 flex items-center justify-center">
            <Church className="w-8 h-8 text-chocolate" />
          </div>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-chocolate/70" />
            <p className="text-2xl font-serif text-graphite">15:30</p>
          </div>
          <h3 className="text-xl font-serif text-graphite font-medium mb-1">Kościół Wniebowzięcia NMP w Jaćmierzu</h3>
          <div className="flex items-center justify-center gap-2 text-graphite/60 mb-6">
            <MapPin className="w-4 h-4" />
            <p className="font-serif text-sm">ul. Parkowa 12, Jaćmierz</p>
          </div>
          <a href="https://maps.google.com/?q=Ko%C5%9Bci%C3%B3%C5%82+Wniebowzi%C4%99cia+NMP+Ja%C4%87mierz" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cream border-2 border-chocolate/20 rounded-full text-chocolate hover:bg-chocolate/5 transition-colors font-serif text-sm">
            <MapPin className="w-4 h-4" /> Zobacz na mapie
          </a>
          <div className="section-divider mt-12" />
        </div>
      </section>

      {/* Wesele */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-hand text-4xl sm:text-5xl text-cranberry mb-8">Wesele</h2>
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage/25 flex items-center justify-center">
            <Wine className="w-8 h-8 text-chocolate" />
          </div>
          <h3 className="text-xl font-serif text-graphite font-medium mb-1">Dwór Wola Sękowa</h3>
          <div className="flex items-center justify-center gap-2 text-graphite/60 mb-4">
            <MapPin className="w-4 h-4" />
            <p className="font-serif text-sm">Nowotaniec 106, Nowotaniec</p>
          </div>
          <p className="font-serif text-graphite/70 italic mb-6">Po ceremonii zapraszamy na wspólne celebrowanie.</p>
          <a href="https://maps.google.com/?q=Dw%C3%B3r+Wola+S%C4%99kowa+Nowotaniec" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cream border-2 border-chocolate/20 rounded-full text-chocolate hover:bg-chocolate/5 transition-colors font-serif text-sm">
            <MapPin className="w-4 h-4" /> Zobacz na mapie
          </a>
          <div className="section-divider mt-12" />
        </div>
      </section>

      {/* RSVP */}
      <section className="py-16 px-4 bg-sage/25">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-hand text-4xl sm:text-5xl text-cranberry mb-4">Potwierdzenie</h2>
          <p className="font-serif text-graphite/70 mb-2">Prosimy o potwierdzenie przybycia</p>
          <p className="font-serif text-graphite font-medium mb-8">do dnia 01.03.2026 r.</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { name: 'Paula', phone: '504-444-866', tel: '+48504444866' },
              { name: 'Artur', phone: '792-512-711', tel: '+48792512711' },
            ].map((c) => (
              <a key={c.name} href={`tel:${c.tel}`}
                className="group flex flex-col items-center gap-2 p-6 bg-cream rounded-2xl shadow-sm hover:shadow-md transition-all border border-chocolate/10">
                <div className="w-12 h-12 rounded-full bg-cranberry/10 flex items-center justify-center group-hover:bg-cranberry/20 transition-colors">
                  <Phone className="w-5 h-5 text-cranberry" />
                </div>
                <p className="font-hand text-2xl text-cranberry">{c.name}</p>
                <p className="font-serif text-lg text-graphite">{c.phone}</p>
              </a>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3">
            <Heart className="w-4 h-4 text-cranberry/40 fill-cranberry/40" />
            <Heart className="w-5 h-5 text-cranberry fill-cranberry" />
            <Heart className="w-4 h-4 text-cranberry/40 fill-cranberry/40" />
          </div>
        </div>
      </section>

      {/* Informacje dodatkowe */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-hand text-4xl sm:text-5xl text-cranberry mb-10 text-center">Informacje dodatkowe</h2>
          <div className="space-y-6">
            <DetailCard icon={<Utensils className="w-6 h-6 text-chocolate" />} title="Dieta">
              Aby każdy mógł uczestniczyć bez przeszkód, prosimy o informację o ewentualnych szczególnych wymaganiach dietetycznych do 01.03.2026.
            </DetailCard>
            <DetailCard icon={<Car className="w-6 h-6 text-chocolate" />} title="Transport">
              Chcemy, żeby każdy dotarł i wrócił bezpiecznie, więc dajcie znać, jak planujecie podróż!
            </DetailCard>
            <div className="bg-sage/15 rounded-2xl p-6 sm:p-8 border border-sage/25">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-cream flex items-center justify-center">
                  <Gift className="w-6 h-6 text-chocolate" />
                </div>
                <div>
                  <h3 className="font-hand text-2xl sm:text-3xl text-cranberry mb-2">Sroki już ćwierkają...</h3>
                  <p className="font-serif text-graphite/80 leading-relaxed text-sm">
                    Najpiękniejszym prezentem będzie Wasza obecność – a jeśli chcecie dorzucić coś od siebie, zamiast kwiatów, które szybko więdną, ucieszy nas butelka wina albo coś stworzonego Waszymi rękami.
                  </p>
                  <p className="font-serif text-graphite/80 leading-relaxed text-sm mt-2">
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
          <div className="flex items-center justify-center gap-6 mb-6">
            <Heart className="w-5 h-5 text-cranberry/40 fill-cranberry/40" />
            <Heart className="w-6 h-6 text-cranberry fill-cranberry" />
            <Heart className="w-5 h-5 text-cranberry/40 fill-cranberry/40" />
          </div>
          <p className="font-hand text-3xl sm:text-4xl text-cranberry mb-2">Do zobaczenia!</p>
          <p className="font-hand text-2xl text-chocolate">Paula & Artur</p>
          <div className="mt-8">
            <button onClick={goHome}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cranberry text-cream font-serif rounded-full hover:bg-cranberry/90 transition-colors text-sm">
              Wróć do strony głównej
            </button>
          </div>
          <p className="mt-8 text-xs text-graphite/30 font-serif">© 2026 Paula & Artur</p>
        </div>
      </footer>
    </div>
  );
}
