import { useMemo, useState } from 'react';
import { Search, Users, MapPin, Heart } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const TABLES = [
  {
    id: '3', label: 'Stół 3', seats: 10, x: 13, y: 25, zone: 'Sala główna',
    guests: ['Joanna Sobieraj', 'Jakub Krajmas', 'Jolanta Styś', 'Michał Styś', 'Ola Kościelna', 'Ernest Łuczak', 'Julia Starostka', 'Miłosz Wrzesień', 'Gabriela Jarosz', 'Jakub Ajersch'],
    shape: 'rect',
  },
  {
    id: 'M', label: 'Para Młoda', seats: 2, x: 13, y: 48,
    guests: ['Paula', 'Artur'],
    shape: 'rect', highlight: true,
  },
  {
    id: '2', label: 'Stół 2', seats: 10, x: 13, y: 70, zone: 'Sala główna',
    guests: ['Barbara Malinowska', 'Błażej Sikończyk', 'Justyna Pleskacz', 'Arek Kogut', 'Krzysiek Liszka', 'Michał Rozmund', 'Bartłomiej Serafinowski', 'Oliwia Szkraba', 'Patrycja Synowiec', 'Daniel Gucwa'],
    shape: 'rect',
  },
  {
    id: '4', label: 'Stół 4', seats: 15, x: 34, y: 25, zone: 'Sala główna',
    guests: ['Maria Sroka', 'Janusz Sroka', 'Kasia Sroka', 'Agnieszka Rumak', 'Bartosz Rumak', 'Amadeusz Rumak', 'Oktawia Rumak', 'Andrzej Sroka', 'Beata Sroka', 'Michał Sroka', 'Tomasz Sroka', 'Katarzyna Sitek', 'Zofia Sitek', 'Piotr Staryszak', 'Jakub Ochoński'],
    shape: 'rect',
  },
  {
    id: '1', label: 'Stół 1', seats: 8, x: 34, y: 70, zone: 'Sala główna',
    guests: ['Magdalena Ajersch', 'Janusz Ajersch', 'Małgorzata Bułatek', 'Halina Walas', 'Wojciech Borciuch', 'Joanna Drozd', 'Oskar Mazgaj', 'Katarzyna Thorpe'],
    shape: 'rect',
  },
];

const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

export default function SeatingSection() {
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState('');

  const selected = TABLES.find((t) => t.id === selectedId) || null;
  const found = useMemo(() => {
    const q = norm(query);
    return q.length >= 2 ? TABLES.find((t) => t.guests.some((g) => norm(g).includes(q))) || null : null;
  }, [query]);

  const active = found || selected;

  return (
    <section id="stoliki" className="py-20 px-4 bg-sage/15 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          // tag="Rozkład"
          title="Stoliki"
          subtitle="Znajdź swoje miejsce przy stole"
        />

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
          {/* Floor plan */}
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              {/* <span className="text-xs font-serif text-graphite/40 uppercase tracking-widest">
                Kliknij stół, aby zobaczyć gości
              </span> */}
            </div>

            <div className="relative bg-cream rounded-3xl border-2 border-chocolate/15 overflow-hidden shadow-sm" style={{ aspectRatio: '5/3.5' }}>
              {/* Main hall outline */}
              <div className="absolute border-2 border-chocolate/10 rounded-2xl bg-cream/50"
                style={{ left: '2%', top: '4%', width: '42%', height: '88%' }} />

              {/* Dance floor */}
              <div className="absolute rounded-2xl border-2 border-cranberry/20 bg-cranberry/5 flex items-center justify-center"
                style={{ left: '45%', top: '4%', width: '22%', height: '88%' }}>
                <div className="text-center">
                  <p className="font-serif text-[14px] sm:text-xs uppercase tracking-widest text-cranberry/50">Parkiet</p>
                  <p className="font-hand text-lg sm:text-2xl text-cranberry">Do tańca</p>
                </div>
              </div>

              {/* Right wing - Chillout */}
              <div className="absolute border-2 border-sage/30 rounded-2xl bg-sage/10"
                style={{ left: '68%', top: '4%', width: '30%', height: '88%' }}>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center">
                  {/* <p className="font-serif text-[14px] sm:text-xs text-sage/80 uppercase tracking-wider">Chillout zone</p> */}
                </div>
              </div>

              <div className="absolute bg-chocolate/10 rounded-lg flex items-center justify-center"
                style={{ left: '72%', top: '10%', width: '22%', height: '20%' }}>
                <span className="font-serif text-[9px] sm:text-[14px] text-chocolate/50 text-center leading-tight">Mini<br/>bar</span>
              </div>

              <div className="absolute bg-chocolate/10 rounded-lg flex items-center justify-center"
                style={{ left: '72%', top: '60%', width: '22%', height: '20%' }}>
                <span className="font-serif text-[9px] sm:text-[14px] text-chocolate/50 text-center leading-tight">Leżaki</span>
              </div>

              {/* Słodki stół */}
              <div className="absolute bg-cranberry/8 rounded-lg flex items-center justify-center border border-cranberry/15"
                style={{ left: '5%', top: '6%', width: '16%', height: '7%' }}>
                <span className="font-serif text-[9px] sm:text-[14px] text-cranberry/60 text-center leading-tight">Słodki<br/>stół</span>
              </div>

              {/* Wiejski stół */}
              <div className="absolute bg-chocolate/8 rounded-lg flex items-center justify-center border border-chocolate/15"
                style={{ left: '26%', top: '6%', width: '16%', height: '7%' }}>
                <span className="font-serif text-[9px] sm:text-[14px] text-chocolate/60 text-center leading-tight">Wiejski<br/>stół</span>
              </div>

              {/* Wejście */}
              {/* <div className="absolute flex items-center justify-center"
                style={{ left: '55%', bottom: '1%', width: '18%', height: '6%' }}>
                <span className="font-serif text-[9px] sm:text-[10px] text-graphite/40 uppercase tracking-wider">Wejście</span>
              </div> */}

              {/* Wejście główne */}
              <div className="absolute flex items-center justify-center"
                style={{ left: '10%', bottom: '2%', width: '24%', height: '6%' }}>
                <span className="font-serif text-[9px] sm:text-[14px] text-graphite/40 uppercase tracking-wider">Wejście główne</span>
              </div>

              {/* Table buttons */}
              {TABLES.map((t) => {
                const isActive = active?.id === t.id;
                const isCouple = t.highlight;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedId((p) => (p === t.id ? null : t.id))}
                    className={`
                      absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-200 flex flex-col items-center justify-center shadow-sm
                      ${t.shape === 'rect' ? 'rounded-xl' : 'rounded-full'}
                      ${isCouple ? 'w-16 h-10 sm:w-20 sm:h-12' : 'w-14 h-12 sm:w-16 sm:h-14'}
                      ${isActive
                        ? 'border-2 border-cranberry bg-cranberry text-cream scale-110 shadow-lg z-20'
                        : isCouple
                          ? 'border-2 border-cranberry/40 bg-cranberry/10 text-cranberry hover:bg-cranberry/20 hover:scale-105'
                          : 'border-2 border-chocolate/20 bg-cream hover:border-cranberry/50 hover:scale-105 text-graphite'
                      }
                    `}
                    style={{ left: `${t.x}%`, top: `${t.y}%` }}
                    aria-label={t.label}
                  >
                    <span className="font-serif text-xs sm:text-sm font-semibold leading-none">
                      {isCouple ? 'Para Młoda' : t.id}
                    </span>
                    <span className={`text-[8px] sm:text-[14px] ${isActive ? 'text-cream/80' : isCouple ? 'text-cranberry/60' : 'text-graphite/40'}`}>
                      {t.seats} os.
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search + Guest list */}
          <div className="space-y-6">
            <div>
              {/* <h3 className="font-serif text-lg text-graphite font-medium mb-4">
                <Users className="w-5 h-5 inline mr-2" />Wyszukaj siebie
              </h3> */}
              <div className="relative">
                <Search className="w-5 h-5 text-graphite/30 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="wyszukaj siebie"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-chocolate/15 focus:border-cranberry/40 outline-none bg-cream font-serif"
                />
              </div>
              {query.length >= 2 && found && (
                <p className="mt-2 font-serif text-sm text-graphite/60">
                  Znaleziono przy <span className="text-cranberry font-medium">{found.label}</span>.
                </p>
              )}
              {query.length >= 2 && !found && (
                <p className="mt-2 font-serif text-sm text-graphite/60">
                  Brak wyniku. Sprawdź pisownię lub skontaktuj się z nami.
                </p>
              )}
            </div>

            {active ? (
              <div className="bg-sage/10 rounded-2xl p-5 border-2 border-sage/25">
                <div className="text-center mb-4">
                  <div className="inline-block px-5 py-2 rounded-full font-serif font-bold text-base mb-1 bg-cranberry text-cream">
                    {active.label}
                  </div>
                  {/* <p className="text-graphite/50 font-serif text-sm">{active.zone} · {active.seats} miejsc</p> */}
                </div>
                <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                  {active.guests.map((g, i) => (
                    <button
                      key={g}
                      onClick={() => setQuery(g)}
                      className="w-full text-left flex items-center gap-2.5 p-2 bg-cream rounded-lg border border-chocolate/8 hover:border-cranberry/25 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-cranberry/15 flex items-center justify-center font-serif text-xs text-cranberry font-medium flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="font-serif text-graphite text-sm">{g}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-sage/10 rounded-2xl p-8 text-center border-2 border-sage/25">
                <p className="font-serif text-graphite/50 text-sm">
                  Wybierz stół na mapie lub wpisz nazwisko, aby zobaczyć rozkład miejsc.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Practical info
        <div className="mt-14 p-8 bg-cream rounded-2xl border border-chocolate/10">
          <h3 className="font-serif text-lg text-graphite font-medium mb-3">Informacje praktyczne</h3>
          <ul className="space-y-2 font-serif text-graphite/70 text-sm">
            {[
              'Stoły są prostokątne z miejscami dla ok. 50 gości',
              'Twoje miejsce jest zarezerwowane – przyjedź 30 minut przed ceremonią',
              'Słodki stół i wiejski stół dostępne dla wszystkich',
              'Strefa chillout z leżakami – idealna na przerwę od tańca',
              'W razie pytań – zadzwoń do nas!',
            ].map((txt) => (
              <li key={txt} className="flex items-start gap-3">
                <span className="text-cranberry font-bold mt-0.5">•</span>
                <span>{txt}</span>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <Heart className="w-4 h-4 text-cranberry/30 fill-cranberry/30" />
          <Heart className="w-5 h-5 text-cranberry/50 fill-cranberry/50" />
          <Heart className="w-4 h-4 text-cranberry/30 fill-cranberry/30" />
        </div>
      </div>
    </section>
  );
}
