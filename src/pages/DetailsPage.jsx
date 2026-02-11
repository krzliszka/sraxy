import { Church, Wine, MapPin, Clock, Calendar, Car, Sparkles, ExternalLink } from 'lucide-react';

export default function DetailsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 bg-sage/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-chocolate/50" />
            <span className="text-chocolate/70 text-sm tracking-[0.3em] uppercase font-serif">
              Informacje
            </span>
            <Sparkles className="w-4 h-4 text-chocolate/50" />
          </div>
          
          <h1 className="font-handwriting text-5xl sm:text-6xl md:text-7xl text-cranberry mb-6">
            Szczegóły
          </h1>
          
          <p className="font-serif text-xl text-graphite/80 leading-relaxed max-w-2xl mx-auto">
            Wszystko, co musicie wiedzieć o naszym wielkim dniu.
          </p>
        </div>
      </section>

      {/* Date Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-cranberry/10 rounded-full mb-4">
            <Calendar className="w-6 h-6 text-cranberry" />
            <span className="font-serif text-2xl text-cranberry font-medium">
              Sobota, 11 kwietnia 2026
            </span>
          </div>
        </div>
      </section>

      {/* Ceremony & Reception */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceremony */}
            <div className="bg-cream rounded-3xl p-8 shadow-sm border border-chocolate/10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sage/30 flex items-center justify-center">
                <Church className="w-10 h-10 text-chocolate" />
              </div>
              
              <h2 className="font-handwriting text-4xl text-cranberry text-center mb-4">
                Ceremonia
              </h2>
              
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-chocolate" />
                  <span className="font-serif text-xl text-graphite">15:30</span>
                </div>
                
                <div>
                  <h3 className="font-serif text-lg text-graphite font-medium mb-1">
                    Kościół Wniebowzięcia NMP
                  </h3>
                  <p className="font-serif text-graphite/60">w Jaćmierzu</p>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-graphite/60">
                  <MapPin className="w-4 h-4" />
                  <span className="font-serif">ul. Parkowa 12, Jaćmierz</span>
                </div>
                
                <a
                  href="https://maps.google.com/?q=Kościół+Wniebowzięcia+NMP+Jaćmierz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-sage/30 rounded-full text-chocolate hover:bg-sage/50 transition-colors font-serif"
                >
                  <MapPin className="w-4 h-4" />
                  Otwórz mapę
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Reception */}
            <div className="bg-cream rounded-3xl p-8 shadow-sm border border-chocolate/10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sage/30 flex items-center justify-center">
                <Wine className="w-10 h-10 text-chocolate" />
              </div>
              
              <h2 className="font-handwriting text-4xl text-cranberry text-center mb-4">
                Wesele
              </h2>
              
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-chocolate" />
                  <span className="font-serif text-xl text-graphite">po ceremonii</span>
                </div>
                
                <div>
                  <h3 className="font-serif text-lg text-graphite font-medium mb-1">
                    Dwór Wola Sękowa
                  </h3>
                  <p className="font-serif text-graphite/60">elegancja w sercu natury</p>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-graphite/60">
                  <MapPin className="w-4 h-4" />
                  <span className="font-serif">Nowotaniec 106, Nowotaniec</span>
                </div>
                
                <a
                  href="https://maps.google.com/?q=Dwór+Wola+Sękowa+Nowotaniec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-sage/30 rounded-full text-chocolate hover:bg-sage/50 transition-colors font-serif"
                >
                  <MapPin className="w-4 h-4" />
                  Otwórz mapę
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 px-4 bg-sage/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-handwriting text-4xl text-cranberry text-center mb-12">
            Plan dnia
          </h2>
          
          <div className="space-y-6">
            <ScheduleItem time="15:30" title="Ceremonia ślubna" description="Kościół Wniebowzięcia NMP w Jaćmierzu" />
            <ScheduleItem time="17:00" title="Przyjazd gości" description="Powitanie w Dworze Wola Sękowa" />
            <ScheduleItem time="17:30" title="Toast weselny" description="Oficjalne rozpoczęcie przyjęcia" />
            <ScheduleItem time="18:00" title="Obiad weselny" description="Uczta dla wszystkich gości" />
            <ScheduleItem time="21:00" title="Pierwszy taniec" description="Czas na parkiet!" />
            <ScheduleItem time="00:00" title="Oczepiny" description="Tradycja musi być!" />
            <ScheduleItem time="??:??" title="Zabawa do białego rana" description="Bawmy się!" highlight />
          </div>
        </div>
      </section>

      {/* Transport */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-handwriting text-4xl text-cranberry text-center mb-8">
            Transport
          </h2>
          
          <div className="bg-cream rounded-2xl p-8 border border-chocolate/10 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-sage/30 flex items-center justify-center">
                <Car className="w-6 h-6 text-chocolate" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-graphite font-medium mb-2">
                  Jak dojechać?
                </h3>
                <p className="font-serif text-graphite/80 leading-relaxed mb-4">
                  Chcemy, żeby każdy dotarł i wrócił bezpiecznie, więc dajcie nam znać, jak planujecie podróż!
                </p>
                <p className="font-serif text-graphite/80 leading-relaxed">
                  Jeśli potrzebujecie pomocy z transportem lub chcecie się zorganizować 
                  z innymi gośćmi, skontaktujcie się z nami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-sage/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-handwriting text-4xl text-cranberry text-center mb-8">
            Lokalizacja
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream rounded-2xl overflow-hidden shadow-sm border border-chocolate/10">
              <div className="aspect-video bg-sage/30 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.5!2d22.0!3d49.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDM2JzAwLjAiTiAyMsKwMDAnMDAuMCJF!5e0!3m2!1spl!2spl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '200px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa - Kościół"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-serif text-graphite font-medium">Ceremonia</p>
                <p className="font-serif text-graphite/60 text-sm">Kościół w Jaćmierzu</p>
              </div>
            </div>

            <div className="bg-cream rounded-2xl overflow-hidden shadow-sm border border-chocolate/10">
              <div className="aspect-video bg-sage/30 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.5!2d22.1!3d49.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDM2JzAwLjAiTiAyMsKwMDYnMDAuMCJF!5e0!3m2!1spl!2spl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '200px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa - Wesele"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-serif text-graphite font-medium">Wesele</p>
                <p className="font-serif text-graphite/60 text-sm">Dwór Wola Sękowa</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ScheduleItem({ time, title, description, highlight }) {
  return (
    <div className={`flex gap-4 ${highlight ? 'bg-cranberry/10 -mx-4 px-4 py-4 rounded-xl' : ''}`}>
      <div className="w-20 flex-shrink-0 text-right">
        <span className={`font-serif text-lg ${highlight ? 'text-cranberry font-medium' : 'text-chocolate'}`}>
          {time}
        </span>
      </div>
      <div className="w-px bg-chocolate/20" />
      <div>
        <h3 className={`font-serif text-lg ${highlight ? 'text-cranberry' : 'text-graphite'} font-medium`}>
          {title}
        </h3>
        <p className="font-serif text-graphite/60">{description}</p>
      </div>
    </div>
  );
}
