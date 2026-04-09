import { Church, Wine, MapPin, Clock, Calendar, Car, ExternalLink, Heart } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const VENUES = [
  {
    icon: Church,
    title: 'Ceremonia',
    time: '15:30',
    place: 'Kościół Wniebowzięcia NMP',
    location: 'w Jaćmierzu',
    address: 'ul. Parkowa 12, Jaćmierz',
    mapQuery: 'Ko%C5%9Bci%C3%B3%C5%82+Wniebowzi%C4%99cia+NMP+Ja%C4%87mierz',
  },
  {
    icon: Wine,
    title: 'Wesele',
    time: 'po ceremonii',
    place: 'Dwór Wola Sękowa',
    location: 'elegancja w sercu natury',
    address: 'Nowotaniec 106, Nowotaniec',
    mapQuery: 'Dw%C3%B3r+Wola+S%C4%99kowa+Nowotaniec',
  },
];

const SCHEDULE = [
  { time: '15:30', title: 'Ceremonia ślubna', desc: 'Kościół Wniebowzięcia NMP w Jaćmierzu' },
  { time: '17:00', title: 'Przyjazd gości', desc: 'Powitanie w Dworze Wola Sękowa' },
  { time: '17:30', title: 'Toast weselny', desc: 'Oficjalne rozpoczęcie przyjęcia' },
  { time: '18:00', title: 'Obiad weselny', desc: 'Uczta dla wszystkich gości' },
  { time: '21:00', title: 'Pierwszy taniec', desc: 'Czas na parkiet!' },
  { time: '00:00', title: 'Oczepiny', desc: 'Tradycja musi być!' },
  { time: '??:??', title: 'Zabawa do białego rana', desc: 'Bawmy się!', highlight: true },
];

export default function DetailsSection() {
  return (
    <section id="szczegoly" className="py-20 px-4 bg-sage/15 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          // tag="Informacje"
          title="Detale"
          subtitle="Wszystko, co musicie wiedzieć o naszym wielkim dniu."
        />

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-cranberry/10 rounded-full">
            <Calendar className="w-5 h-5 text-cranberry" />
            <span className="font-serif text-xl sm:text-2xl text-cranberry font-medium">
              Sobota, 11 kwietnia 2026
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {VENUES.map((v) => (
            <div key={v.title} className="bg-cream rounded-3xl p-8 shadow-sm border border-chocolate/10 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sage/25 flex items-center justify-center">
                <v.icon className="w-10 h-10 text-chocolate" />
              </div>
              <h3 className="font-hand text-4xl text-cranberry mb-4">{v.title}</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-chocolate/70" />
                  <span className="font-serif text-xl text-graphite">{v.time}</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-graphite font-medium">{v.place}</h4>
                  <p className="font-serif text-graphite/50 text-sm">{v.location}</p>
                </div>
                <div className="flex items-center justify-center gap-2 text-graphite/50">
                  <MapPin className="w-4 h-4" />
                  <span className="font-serif text-sm">{v.address}</span>
                </div>
                <a
                  href={`https://maps.google.com/?q=${v.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 bg-sage/25 rounded-full text-chocolate text-sm hover:bg-sage/40 transition-colors font-serif"
                >
                  <MapPin className="w-4 h-4" />
                  Otwórz mapę
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
{/* 
        <div className="max-w-2xl mx-auto bg-cream rounded-3xl p-8 sm:p-12 shadow-sm border border-chocolate/5 mb-16">
          <h3 className="font-hand text-4xl text-cranberry text-center mb-10">Plan dnia</h3>
          <div className="space-y-5">
            {SCHEDULE.map((s, i) => (
              <div
                key={i}
                className={`flex gap-4 ${s.highlight ? 'bg-cranberry/10 -mx-4 px-4 py-3 rounded-xl' : ''}`}
              >
                <div className="w-16 flex-shrink-0 text-right">
                  <span className={`font-serif text-lg ${s.highlight ? 'text-cranberry font-semibold' : 'text-chocolate'}`}>
                    {s.time}
                  </span>
                </div>
                <div className="w-px bg-chocolate/15 flex-shrink-0" />
                <div>
                  <h4 className={`font-serif text-lg font-medium ${s.highlight ? 'text-cranberry' : 'text-graphite'}`}>
                    {s.title}
                  </h4>
                  <p className="font-serif text-graphite/50 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="max-w-3xl mx-auto bg-cream rounded-2xl p-8 border border-chocolate/10 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-sage/25 flex items-center justify-center">
              <Car className="w-6 h-6 text-chocolate" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-graphite font-medium mb-1">Transport</h3>
              <p className="font-serif text-graphite/70 leading-relaxed">
                Chcemy, żeby każdy dotarł i wrócił bezpiecznie, więc dajcie nam znać, jak planujecie podróż!
                Jeśli potrzebujecie pomocy z transportem lub chcecie się zorganizować z innymi gośćmi, skontaktujcie się z nami.
              </p>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="mt-10 text-center bg-sage/15 rounded-2xl p-8">
          <h3 className="font-hand text-3xl text-cranberry mb-3">Pytania?</h3>
          <p className="font-serif text-graphite/60 text-sm mb-5">Skontaktuj się z nami:</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {[
              { name: 'Paula', phone: '504-444-866', tel: '+48504444866' },
              { name: 'Artur', phone: '792-512-711', tel: '+48792512711' },
            ].map((c) => (
              <a
                key={c.name}
                href={`tel:${c.tel}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cream border-2 border-chocolate/20 rounded-full text-chocolate hover:bg-chocolate/5 transition-colors font-serif text-sm"
              >
                {c.name}: {c.phone}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 mt-10">
            <Heart className="w-4 h-4 text-cranberry/30 fill-cranberry/30" />
            <Heart className="w-5 h-5 text-cranberry/50 fill-cranberry/50" />
            <Heart className="w-4 h-4 text-cranberry/30 fill-cranberry/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
