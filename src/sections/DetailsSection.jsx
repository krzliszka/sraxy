import { Church, Wine, MapPin, Clock, Calendar, Car, Sparkles, ExternalLink } from 'lucide-react';

export default function DetailsSection() {
  return (
    <section id="szczegoly" className="py-20 px-4 bg-sage/20 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-chocolate/50" />
            <span className="text-chocolate/70 text-sm tracking-[0.3em] uppercase font-serif">
              Informacje
            </span>
            <Sparkles className="w-4 h-4 text-chocolate/50" />
          </div>
          
          <h2 className="font-handwriting text-5xl sm:text-6xl md:text-7xl text-cranberry mb-6">
            Szczegóły
          </h2>
          
          <p className="font-serif text-xl text-graphite/80 leading-relaxed">
            Wszystko, co musicie wiedzieć o naszym wielkim dniu.
          </p>
          
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-cranberry/10 rounded-full mt-8">
            <Calendar className="w-6 h-6 text-cranberry" />
            <span className="font-serif text-2xl text-cranberry font-medium">
              Sobota, 11 kwietnia 2026
            </span>
          </div>
        </div>

        {/* Ceremony & Reception */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Ceremony */}
          <div className="bg-cream rounded-3xl p-8 shadow-sm border border-chocolate/10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sage/30 flex items-center justify-center">
              <Church className="w-10 h-10 text-chocolate" />
            </div>
            
            <h3 className="font-handwriting text-4xl text-cranberry text-center mb-4">
              Ceremonia
            </h3>
            
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-chocolate" />
                <span className="font-serif text-xl text-graphite">15:30</span>
              </div>
              
              <div>
                <h4 className="font-serif text-lg text-graphite font-medium mb-1">
                  Kościół Wniebowzięcia NMP
                </h4>
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
            
            <h3 className="font-handwriting text-4xl text-cranberry text-center mb-4">
              Wesele
            </h3>
            
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-chocolate" />
                <span className="font-serif text-xl text-graphite">po ceremonii</span>
              </div>
              
              <div>
                <h4 className="font-serif text-lg text-graphite font-medium mb-1">
                  Dwór Wola Sękowa
                </h4>
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

        {/* Schedule */}
        <div className="max-w-2xl mx-auto bg-cream rounded-3xl p-8 sm:p-12 shadow-sm mb-16">
          <h3 className="font-handwriting text-4xl text-cranberry text-center mb-12">
            Plan dnia
          </h3>
          
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

        {/* Transport */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-cream rounded-2xl p-8 border border-chocolate/10 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-sage/30 flex items-center justify-center">
                <Car className="w-6 h-6 text-chocolate" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-graphite font-medium mb-2">
                  Transport
                </h3>
                <p className="font-serif text-graphite/80 leading-relaxed">
                  Chcemy, żeby każdy dotarł i wrócił bezpiecznie, więc dajcie nam znać, jak planujecie podróż!
                  Jeśli potrzebujecie pomocy z transportem lub chcecie się zorganizować z innymi gośćmi, 
                  skontaktujcie się z nami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
        <h4 className={`font-serif text-lg ${highlight ? 'text-cranberry' : 'text-graphite'} font-medium`}>
          {title}
        </h4>
        <p className="font-serif text-graphite/60">{description}</p>
      </div>
    </div>
  );
}
