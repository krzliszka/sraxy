import { useMemo, useState } from 'react';
import { MapPin, Search, Users, Music2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const TABLES = [
  { id: '1', x: 16, y: 20, zone: 'Lewa sala', guests: ['PAULA', 'SRAX', 'Piotr Nowak', 'Anna Nowak', 'Tomasz Lewandowski'] },
  { id: '2', x: 38, y: 20, zone: 'Lewa sala', guests: ['Krzysztof Walczak', 'Paula Walczak', 'Andrzej Duda', 'Agnieszka Duda', 'Michal Szpaderski'] },
  { id: '3', x: 62, y: 20, zone: 'Prawa sala', guests: ['Robert Biedron', 'Joanna Biedron', 'Pawel Tanajno', 'Ewa Tanajno', 'Rafal Sonik'] },
  { id: '4', x: 84, y: 20, zone: 'Prawa sala', guests: ['Dorota Szelagowska', 'Zbigniew Szelagowski', 'Bogdan Borusewicz', 'Czeslawa Borusewicz', 'Lech Kaczynski'] },
  { id: '5', x: 26, y: 72, zone: 'Lewa sala', guests: ['Jaroslaw Kaczynski', 'Grazyna Kaczynska', 'Donald Tusk', 'Malgorzata Tusk', 'Bronislaw Komorowski'] },
  { id: '6', x: 74, y: 72, zone: 'Prawa sala', guests: ['Zofia Mazur', 'Jakub Mazur', 'Marek Grzelak', 'Natalia Grzelak', 'Maja Wrona'] },
];

const norm = (s) => s.toLowerCase().trim();

export default function SeatingSection() {
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState('');

  const selected = TABLES.find((t) => t.id === selectedId) || null;
  const found = useMemo(() => {
    const q = norm(query);
    return q ? TABLES.find((t) => t.guests.some((g) => norm(g).includes(q))) || null : null;
  }, [query]);

  const active = found || selected;

  return (
    <section id="stoliki" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="Rozklad" title="Stoliki" subtitle="Tutaj znajdziesz swoje miejsce przy stole" />

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          {/* Map */}
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h3 className="font-serif text-xl text-graphite font-medium">
                <MapPin className="w-5 h-5 inline mr-2" />Mapa sali
              </h3>
              <span className="text-xs font-serif uppercase tracking-widest text-graphite/50">
                Kliknij stol
              </span>
            </div>

            <div className="relative aspect-[4/3] bg-cream rounded-3xl border-2 border-chocolate/15 p-4 sm:p-6 overflow-hidden shadow-sm">
              {/* DJ area */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-sage/25 rounded-full border border-sage/30 text-xs font-serif text-graphite/70 flex items-center gap-2">
                <Music2 className="w-3.5 h-3.5" /> DJ / Zespol
              </div>

              {/* Dance floor */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[46%] h-[36%] rounded-2xl border-2 border-cranberry/25 bg-cranberry/5 flex items-center justify-center text-center px-4">
                <div>
                  <p className="font-serif text-xs uppercase tracking-[0.2em] text-cranberry/60">Parkiet</p>
                  <p className="font-hand text-2xl text-cranberry">Do tanca</p>
                </div>
              </div>

              {/* Table buttons */}
              {TABLES.map((t) => {
                const isActive = active?.id === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedId((p) => (p === t.id ? null : t.id))}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-18 sm:h-18 rounded-full border-2 transition-all duration-200 flex flex-col items-center justify-center shadow-sm ${
                      isActive
                        ? 'border-cranberry bg-cranberry text-cream scale-110 shadow-lg'
                        : 'border-chocolate/25 bg-cream hover:border-cranberry/60 hover:scale-105 text-graphite'
                    }`}
                    style={{ left: `${t.x}%`, top: `${t.y}%` }}
                    aria-label={`Stol ${t.id}`}
                  >
                    <span className="font-serif text-lg leading-none">{t.id}</span>
                    <span className={`text-[10px] ${isActive ? 'text-cream/80' : 'text-graphite/50'}`}>{t.guests.length} os.</span>
                  </button>
                );
              })}
            </div>

            {/* Info badges */}
            <div className="grid sm:grid-cols-3 gap-2 text-xs font-serif text-graphite/60">
              {['Wejscie: dolna czesc sali', 'Stol pary mlodej: przy parkiecie', 'Obsluga pomoze wskazac miejsce'].map((txt) => (
                <div key={txt} className="p-2.5 rounded-xl bg-sage/10 border border-sage/20 text-center">{txt}</div>
              ))}
            </div>
          </div>

          {/* Search + Guest list */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl text-graphite font-medium mb-4">
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
              {query && found && (
                <p className="mt-2 font-serif text-sm text-graphite/60">
                  Znaleziono przy <span className="text-cranberry font-medium">stole {found.id}</span> ({found.zone}).
                </p>
              )}
              {query && !found && (
                <p className="mt-2 font-serif text-sm text-graphite/60">Brak wyniku. Sprawdz pisownie lub skontaktuj sie z nami.</p>
              )}
            </div>

            {active ? (
              <div className="bg-sage/10 rounded-2xl p-6 border-2 border-sage/25">
                <div className="text-center mb-5">
                  <div className="inline-block bg-cranberry text-cream px-6 py-2.5 rounded-full font-serif font-bold text-lg mb-1">
                    Stol {active.id}
                  </div>
                  <p className="text-graphite/60 font-serif text-sm">{active.zone} &middot; {active.guests.length} gosci</p>
                </div>
                <div className="space-y-2">
                  {active.guests.map((g, i) => (
                    <button
                      key={g}
                      onClick={() => setQuery(g)}
                      className="w-full text-left flex items-center gap-3 p-2.5 bg-cream rounded-lg border border-chocolate/10 hover:border-cranberry/25 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-full bg-cranberry/15 flex items-center justify-center font-serif text-sm text-cranberry font-medium">
                        {i + 1}
                      </div>
                      <span className="font-serif text-graphite text-sm">{g}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-sage/10 rounded-2xl p-8 text-center border-2 border-sage/25">
                <p className="font-serif text-graphite/60 text-sm">Wybierz stol na mapie lub wpisz nazwisko.</p>
              </div>
            )}
          </div>
        </div>

        {/* Practical info */}
        <div className="mt-14 p-8 bg-cream rounded-2xl border border-chocolate/10">
          <h3 className="font-serif text-lg text-graphite font-medium mb-3">Informacje praktyczne</h3>
          <ul className="space-y-2 font-serif text-graphite/70 text-sm">
            {[
              'Stoly sa prostokatne z miejscami dla ok. 50 gosci',
              'Twoje miejsce jest zarezerwowane - przyjedz 30 minut przed ceremonia',
              'W razie pytan - zadzwon do nas!',
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
          <p className="font-serif text-graphite/60 text-sm mb-5">Skontaktuj sie z nami:</p>
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
