import { useMemo, useState, useRef, useEffect } from 'react';
import { Search, Users, MapPin } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

/*
 * Venue layout based on Dw\u00f3r Wola S\u0119kowa floor plan.
 *
 * Layout zones (approximate positions as % of floor plan container):
 *  - Main hall (left half): 4 tables + couple's table (2-M\u0141ODZI)
 *  - Dance floor (center)
 *  - Right wing: chillout zone + mini bar
 *  - Top: sweet table + rustic table
 *  - Bottom: main entrance
 */

const TABLES = [
  {
    id: '1',
    label: 'St\u00f3\u0142 1',
    seats: 10,
    x: 13, y: 25,
    zone: 'Sala g\u0142\u00f3wna',
    guests: ['Go\u015b\u0107 1-1', 'Go\u015b\u0107 1-2', 'Go\u015b\u0107 1-3', 'Go\u015b\u0107 1-4', 'Go\u015b\u0107 1-5', 'Go\u015b\u0107 1-6', 'Go\u015b\u0107 1-7', 'Go\u015b\u0107 1-8', 'Go\u015b\u0107 1-9', 'Go\u015b\u0107 1-10'],
    shape: 'rect',
  },
  {
    id: 'M',
    label: 'Para M\u0142oda',
    seats: 2,
    x: 13, y: 48,
    zone: 'Sala g\u0142\u00f3wna',
    guests: ['Paula', 'Artur'],
    shape: 'rect',
    highlight: true,
  },
  {
    id: '2',
    label: 'St\u00f3\u0142 2',
    seats: 10,
    x: 13, y: 70,
    zone: 'Sala g\u0142\u00f3wna',
    guests: ['Go\u015b\u0107 2-1', 'Go\u015b\u0107 2-2', 'Go\u015b\u0107 2-3', 'Go\u015b\u0107 2-4', 'Go\u015b\u0107 2-5', 'Go\u015b\u0107 2-6', 'Go\u015b\u0107 2-7', 'Go\u015b\u0107 2-8', 'Go\u015b\u0107 2-9', 'Go\u015b\u0107 2-10'],
    shape: 'rect',
  },
  {
    id: '3',
    label: 'St\u00f3\u0142 3',
    seats: 14,
    x: 30, y: 25,
    zone: 'Sala g\u0142\u00f3wna',
    guests: ['Go\u015b\u0107 3-1', 'Go\u015b\u0107 3-2', 'Go\u015b\u0107 3-3', 'Go\u015b\u0107 3-4', 'Go\u015b\u0107 3-5', 'Go\u015b\u0107 3-6', 'Go\u015b\u0107 3-7', 'Go\u015b\u0107 3-8', 'Go\u015b\u0107 3-9', 'Go\u015b\u0107 3-10', 'Go\u015b\u0107 3-11', 'Go\u015b\u0107 3-12', 'Go\u015b\u0107 3-13', 'Go\u015b\u0107 3-14'],
    shape: 'rect',
  },
  {
    id: '4',
    label: 'St\u00f3\u0142 4',
    seats: 10,
    x: 30, y: 70,
    zone: 'Sala g\u0142\u00f3wna',
    guests: ['Go\u015b\u0107 4-1', 'Go\u015b\u0107 4-2', 'Go\u015b\u0107 4-3', 'Go\u015b\u0107 4-4', 'Go\u015b\u0107 4-5', 'Go\u015b\u0107 4-6', 'Go\u015b\u0107 4-7', 'Go\u015b\u0107 4-8', 'Go\u015b\u0107 4-9', 'Go\u015b\u0107 4-10'],
    shape: 'rect',
  },
  {
    id: '5',
    label: 'St\u00f3\u0142 5',
    seats: 15,
    x: 52, y: 30,
    zone: 'Przy parkiecie',
    guests: ['Go\u015b\u0107 5-1', 'Go\u015b\u0107 5-2', 'Go\u015b\u0107 5-3', 'Go\u015b\u0107 5-4', 'Go\u015b\u0107 5-5', 'Go\u015b\u0107 5-6', 'Go\u015b\u0107 5-7', 'Go\u015b\u0107 5-8', 'Go\u015b\u0107 5-9', 'Go\u015b\u0107 5-10', 'Go\u015b\u0107 5-11', 'Go\u015b\u0107 5-12', 'Go\u015b\u0107 5-13', 'Go\u015b\u0107 5-14', 'Go\u015b\u0107 5-15'],
    shape: 'rect',
  },
  {
    id: '6',
    label: 'St\u00f3\u0142 6',
    seats: 10,
    x: 82, y: 22,
    zone: 'Strefa chillout',
    guests: ['Go\u015b\u0107 6-1', 'Go\u015b\u0107 6-2', 'Go\u015b\u0107 6-3', 'Go\u015b\u0107 6-4', 'Go\u015b\u0107 6-5', 'Go\u015b\u0107 6-6', 'Go\u015b\u0107 6-7', 'Go\u015b\u0107 6-8', 'Go\u015b\u0107 6-9', 'Go\u015b\u0107 6-10'],
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
    <section id="stoliki" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Rozk\u0142ad"
          title="Stoliki"
          subtitle="Znajd\u017a swoje miejsce przy stole"
        />

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
          {/* ============ FLOOR PLAN ============ */}
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h3 className="font-serif text-lg text-graphite font-medium">
                <MapPin className="w-5 h-5 inline mr-2" />Mapa sali
              </h3>
              <span className="text-xs font-serif text-graphite/40 uppercase tracking-widest">
                Kliknij st\u00f3\u0142, aby zobaczy\u0107 go\u015bci
              </span>
            </div>

            <div className="relative bg-cream rounded-3xl border-2 border-chocolate/15 overflow-hidden shadow-sm" style={{ aspectRatio: '5/3.5' }}>
              {/* === ZONES === */}

              {/* Main hall outline (left) */}
              <div className="absolute border-2 border-chocolate/10 rounded-2xl bg-cream/50"
                style={{ left: '2%', top: '8%', width: '43%', height: '84%' }} />

              {/* Dance floor (center) */}
              <div className="absolute rounded-2xl border-2 border-cranberry/20 bg-cranberry/5 flex items-center justify-center"
                style={{ left: '42%', top: '35%', width: '22%', height: '40%' }}>
                <div className="text-center">
                  <p className="font-serif text-[10px] sm:text-xs uppercase tracking-widest text-cranberry/50">Parkiet</p>
                  <p className="font-hand text-lg sm:text-2xl text-cranberry">Do ta\u0144ca</p>
                </div>
              </div>

              {/* Right wing - Chillout */}
              <div className="absolute border-2 border-sage/30 rounded-2xl bg-sage/10"
                style={{ left: '68%', top: '8%', width: '30%', height: '84%' }}>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center">
                  <p className="font-serif text-[10px] sm:text-xs text-sage/80 uppercase tracking-wider">Chillout zone</p>
                  <p className="font-serif text-[9px] text-graphite/30">le\u017caki</p>
                </div>
              </div>

              {/* Mini bar (top right) */}
              <div className="absolute bg-chocolate/10 rounded-lg flex items-center justify-center"
                style={{ left: '84%', top: '10%', width: '12%', height: '10%' }}>
                <span className="font-serif text-[9px] sm:text-[10px] text-chocolate/50 text-center leading-tight">Mini<br/>bar</span>
              </div>

              {/* Sweet table (top left) */}
              <div className="absolute bg-cranberry/8 rounded-lg flex items-center justify-center border border-cranberry/15"
                style={{ left: '3%', top: '1%', width: '16%', height: '7%' }}>
                <span className="font-serif text-[9px] sm:text-[10px] text-cranberry/60 text-center leading-tight">S\u0142odki<br/>st\u00f3\u0142</span>
              </div>

              {/* Rustic table (top center-left) */}
              <div className="absolute bg-chocolate/8 rounded-lg flex items-center justify-center border border-chocolate/15"
                style={{ left: '22%', top: '1%', width: '18%', height: '7%' }}>
                <span className="font-serif text-[9px] sm:text-[10px] text-chocolate/60 text-center leading-tight">Wiejski<br/>st\u00f3\u0142</span>
              </div>

              {/* Main entrance (bottom) */}
              <div className="absolute flex items-center justify-center"
                style={{ left: '55%', bottom: '1%', width: '18%', height: '6%' }}>
                <span className="font-serif text-[9px] sm:text-[10px] text-graphite/40 uppercase tracking-wider">Wej\u015bcie</span>
              </div>

              {/* Main entrance 2 (bottom left) */}
              <div className="absolute flex items-center justify-center"
                style={{ left: '10%', bottom: '1%', width: '24%', height: '6%' }}>
                <span className="font-serif text-[9px] sm:text-[10px] text-graphite/40 uppercase tracking-wider">Wej\u015bcie g\u0142\u00f3wne</span>
              </div>

              {/* === TABLE BUTTONS === */}
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
                      {isCouple ? 'M\u0141' : t.id}
                    </span>
                    <span className={`text-[8px] sm:text-[10px] ${isActive ? 'text-cream/80' : isCouple ? 'text-cranberry/60' : 'text-graphite/40'}`}>
                      {t.seats} os.
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-serif text-graphite/50">
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 rounded border-2 border-cranberry/40 bg-cranberry/10" />
                <span>Para M\u0142oda</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 rounded border-2 border-chocolate/20 bg-cream" />
                <span>Sto\u0142y go\u015bci</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 rounded border-2 border-cranberry/20 bg-cranberry/5" />
                <span>Parkiet</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 rounded border-2 border-sage/30 bg-sage/10" />
                <span>Chillout</span>
              </div>
            </div>
          </div>

          {/* ============ SEARCH + GUEST LIST ============ */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-lg text-graphite font-medium mb-4">
                <Users className="w-5 h-5 inline mr-2" />Wyszukaj siebie
              </h3>
              <div className="relative">
                <Search className="w-5 h-5 text-graphite/30 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Np. Jan Kowalski"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-chocolate/15 focus:border-cranberry/40 outline-none bg-cream font-serif"
                />
              </div>
              {query.length >= 2 && found && (
                <p className="mt-2 font-serif text-sm text-graphite/60">
                  Znaleziono przy <span className="text-cranberry font-medium">{found.label}</span> ({found.zone}).
                </p>
              )}
              {query.length >= 2 && !found && (
                <p className="mt-2 font-serif text-sm text-graphite/60">
                  Brak wyniku. Sprawd\u017a pisowni\u0119 lub skontaktuj si\u0119 z nami.
                </p>
              )}
            </div>

            {active ? (
              <div className="bg-sage/10 rounded-2xl p-5 border-2 border-sage/25">
                <div className="text-center mb-4">
                  <div className={`inline-block px-5 py-2 rounded-full font-serif font-bold text-base mb-1 ${active.highlight ? 'bg-cranberry text-cream' : 'bg-cranberry text-cream'}`}>
                    {active.label}
                  </div>
                  <p className="text-graphite/50 font-serif text-sm">{active.zone} &middot; {active.seats} miejsc</p>
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
                  Wybierz st\u00f3\u0142 na mapie lub wpisz nazwisko, aby zobaczy\u0107 rozk\u0142ad miejsc.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Practical info */}
        <div className="mt-14 p-8 bg-cream rounded-2xl border border-chocolate/10">
          <h3 className="font-serif text-lg text-graphite font-medium mb-3">Informacje praktyczne</h3>
          <ul className="space-y-2 font-serif text-graphite/70 text-sm">
            {[
              'Sto\u0142y s\u0105 prostokatne z miejscami dla ok. 50 go\u015bci',
              'Twoje miejsce jest zarezerwowane \u2013 przyjed\u017a 30 minut przed ceremoni\u0105',
              'S\u0142odki st\u00f3\u0142 i wiejski st\u00f3\u0142 dost\u0119pne dla wszystkich',
              'Strefa chillout z le\u017cakami \u2013 idealna na przerw\u0119 od ta\u0144ca',
              'W razie pyta\u0144 \u2013 zadzwo\u0144 do nas!',
            ].map((txt) => (
              <li key={txt} className="flex items-start gap-3">
                <span className="text-cranberry font-bold mt-0.5">&bull;</span>
                <span>{txt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="mt-10 text-center bg-sage/15 rounded-2xl p-8">
          <h3 className="font-hand text-3xl text-cranberry mb-3">Pytania?</h3>
          <p className="font-serif text-graphite/60 text-sm mb-5">Skontaktuj si\u0119 z nami:</p>
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
        </div>
      </div>
    </section>
  );
}
