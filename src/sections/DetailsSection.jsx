import { Church, Wine, MapPin, Clock, Calendar, Car, ExternalLink } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const VENUES = [
  {
    icon: Church,
    title: 'Ceremonia',
    time: '15:30',
    place: 'Ko\u015bci\u00f3\u0142 Wniebowzi\u0119cia NMP',
    location: 'w Ja\u0107mierzu',
    address: 'ul. Parkowa 12, Ja\u0107mierz',
    mapQuery: 'Ko%C5%9Bci%C3%B3%C5%82+Wniebowzi%C4%99cia+NMP+Ja%C4%87mierz',
  },
  {
    icon: Wine,
    title: 'Wesele',
    time: 'po ceremonii',
    place: 'Dw\u00f3r Wola S\u0119kowa',
    location: 'elegancja w sercu natury',
    address: 'Nowotaniec 106, Nowotaniec',
    mapQuery: 'Dw%C3%B3r+Wola+S%C4%99kowa+Nowotaniec',
  },
];

const SCHEDULE = [
  { time: '15:30', title: 'Ceremonia \u015blubna', desc: 'Ko\u015bci\u00f3\u0142 Wniebowzi\u0119cia NMP w Ja\u0107mierzu' },
  { time: '17:00', title: 'Przyjazd go\u015bci', desc: 'Powitanie w Dworze Wola S\u0119kowa' },
  { time: '17:30', title: 'Toast weselny', desc: 'Oficjalne rozpocz\u0119cie przyj\u0119cia' },
  { time: '18:00', title: 'Obiad weselny', desc: 'Uczta dla wszystkich go\u015bci' },
  { time: '21:00', title: 'Pierwszy taniec', desc: 'Czas na parkiet!' },
  { time: '00:00', title: 'Oczepiny', desc: 'Tradycja musi by\u0107!' },
  { time: '??:??', title: 'Zabawa do bia\u0142ego rana', desc: 'Bawmy si\u0119!', highlight: true },
];

export default function DetailsSection() {
  return (
    <section id="szczegoly" className="py-20 px-4 bg-sage/15 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Informacje"
          title="Szczeg\u00f3\u0142y"
          subtitle="Wszystko, co musicie wiedzie\u0107 o naszym wielkim dniu."
        />

        {/* Date badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-cranberry/10 rounded-full">
            <Calendar className="w-5 h-5 text-cranberry" />
            <span className="font-serif text-xl sm:text-2xl text-cranberry font-medium">
              Sobota, 11 kwietnia 2026
            </span>
          </div>
        </div>

        {/* Venue cards */}
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
                  Otw\u00f3rz map\u0119
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Day schedule */}
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
        </div>

        {/* Transport note */}
        <div className="max-w-3xl mx-auto bg-cream rounded-2xl p-8 border border-chocolate/10 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-sage/25 flex items-center justify-center">
              <Car className="w-6 h-6 text-chocolate" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-graphite font-medium mb-1">Transport</h3>
              <p className="font-serif text-graphite/70 leading-relaxed">
                Chcemy, \u017ceby ka\u017cdy dotar\u0142 i wr\u00f3ci\u0142 bezpiecznie, wi\u0119c dajcie nam zna\u0107, jak planujecie podr\u00f3\u017c!
                Je\u015bli potrzebujecie pomocy z transportem lub chcecie si\u0119 zorganizowa\u0107 z innymi go\u015b\u0107mi, skontaktujcie si\u0119 z nami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
