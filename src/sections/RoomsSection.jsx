import { useState } from 'react';
import { BedDouble, Users, Search, DoorOpen, ChevronUp, ZoomIn, X, MapPin, Heart } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

/*
 * Room data – "extra" guests are on dostawka (extra beds).
 * All names are listed in the card and in the detail panel.
 */

const ROOMS = [
  {
    id: '1', floor: 'left', row: 3, highlight: true,
    guests: ['Artur Sroka', 'Paula Ajersch-Sroka'],
    extra: [],
  },
  {
    id: '2', floor: 'left', row: 2,
    guests: ['Janusz Ajersch', 'Magdalena Ajersch'],
    extra: [],
  },
  {
    id: '3', floor: 'left', row: 1,
    guests: ['Miłosz Wrzesień', 'Julia Starostka'],
    extra: ['Jakub Ajersch', 'Gabriela Jarosz'],
  },
  {
    id: '4', floor: 'right', row: 1,
    guests: ['Zofia Sitek', 'Katarzyna Sitek'],
    extra: ['Janusz Sroka', 'Maria Sroka', 'Katarzyna Sroka'],
  },
  {
    id: '5', floor: 'right', row: 2,
    guests: ['Oliwia Szkraba', 'Patrycja Synowiec', 'Daniel Gucwa'],
    extra: [],
  },
  {
    id: '6', floor: 'right', row: 3,
    guests: ['Bartłomiej Serafinowski', 'Michał Rozmund', 'Krzysztof Liszka'],
    extra: [],
  },
  {
    id: '7', floor: 'right', row: 4,
    guests: ['Joanna Sobieraj', 'Jakub Krajmas'],
    extra: ['Jolanta Styś', 'Michał Styś'],
  },
  {
    id: '8', floor: 'left', row: 4,
    guests: ['Błażej Sikończyk', 'Barbara Malinowska'],
    extra: ['Arkadiusz Kogut', 'Justyna Pleskacz'],
  },
];

const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

export default function RoomsSection() {
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState('');
  const [showPlan, setShowPlan] = useState(false);

  const selected = ROOMS.find((r) => r.id === selectedId) || null;

  const foundRoom = (() => {
    const q = norm(query);
    if (q.length < 2) return null;
    return ROOMS.find((r) =>
      r.guests.some((g) => norm(g).includes(q)) ||
      r.extra.some((g) => norm(g).includes(q))
    ) || null;
  })();

  const active = foundRoom || selected;

  const toggle = (id) => setSelectedId((p) => (p === id ? null : id));

  const leftRooms = ROOMS.filter((r) => r.floor === 'left').sort((a, b) => a.row - b.row);
  const rightRooms = ROOMS.filter((r) => r.floor === 'right').sort((a, b) => a.row - b.row);
  const maxRows = Math.max(leftRooms.length, rightRooms.length);

  return (
    <section id="pokoje" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="Pokoje"
          subtitle="Rozkład pokoi dla nocujących gości"
        />

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="w-5 h-5 text-graphite/30 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="wyszukaj siebie"
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-chocolate/15 focus:border-cranberry/40 outline-none bg-cream font-serif"
            />
          </div>
          {query.length >= 2 && foundRoom && (
            <p className="mt-2 font-serif text-sm text-graphite/60 text-center">
              Jesteś w <span className="text-cranberry font-medium">pokoju {foundRoom.id}</span>
            </p>
          )}
          {query.length >= 2 && !foundRoom && (
            <p className="mt-2 font-serif text-sm text-graphite/60 text-center">
              Brak wyniku. Sprawdź pisownię lub skontaktuj się z nami.
            </p>
          )}
        </div>

        {/* Floor plan */}
        <div className="mb-12">
          <div className="text-center mb-6">
            {/* <span className="inline-block px-4 py-1.5 bg-chocolate/10 rounded-full font-serif text-xs text-chocolate/60 uppercase tracking-widest">
              Korytarz · Piętro
            </span> */}
          </div>

          <div className="space-y-3">
            {Array.from({ length: maxRows }, (_, rowIdx) => {
              const left = leftRooms[rowIdx];
              const right = rightRooms[rowIdx];
              return (
                <div key={rowIdx} className="grid grid-cols-[1fr_auto_1fr] gap-2 sm:gap-4 items-stretch">
                  {left ? (
                    <RoomCard room={left} isActive={active?.id === left.id} onClick={() => toggle(left.id)} align="right" />
                  ) : <div />}

                  <div className="w-3 sm:w-4 bg-chocolate/8 rounded-full flex-shrink-0" />

                  {right ? (
                    <RoomCard room={right} isActive={active?.id === right.id} onClick={() => toggle(right.id)} align="left" />
                  ) : <div />}
                </div>
              );
            })}
          </div>

          {/* <div className="text-center mt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-chocolate/8 rounded-full font-serif text-[10px] text-chocolate/50 uppercase tracking-wider">
              <ChevronUp className="w-3 h-3" /> schody
            </span>
          </div> */}
        </div>

        {/* Selected room detail */}
        {active && (
          <div className="max-w-lg mx-auto bg-cream rounded-2xl p-6 border-2 border-sage/25 shadow-sm mb-12">
            <div className="text-center mb-4">
              <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full font-serif font-bold text-base bg-cranberry text-cream`}>
                <BedDouble className="w-4 h-4" />
                Pokój {active.id}
                {active.highlight && <span className="text-cream/70 font-normal text-sm">· Para Młoda</span>}
              </div>
            </div>

            {/* Main guests */}
            <div className="space-y-2 mb-3">
              <p className="font-serif text-xs text-graphite/40 uppercase tracking-wider text-center">Goście</p>
              {active.guests.map((g) => (
                <div key={g} className="flex items-center gap-2.5 p-2.5 bg-sage/10 rounded-lg border border-sage/20">
                  <div className="w-6 h-6 rounded-full bg-cranberry/15 flex items-center justify-center flex-shrink-0">
                    <Users className="w-3 h-3 text-cranberry" />
                  </div>
                  <span className="font-serif text-graphite text-sm">{g}</span>
                </div>
              ))}
            </div>

            {/* Dostawka guests */}
            {active.extra.length > 0 && (
              <div className="space-y-2">
                {/* <p className="font-serif text-xs text-graphite/40 uppercase tracking-wider text-center mt-4">Dostawka</p> */}
                {active.extra.map((g) => (
                  <div key={g} className="flex items-center gap-2.5 p-2.5 bg-chocolate/5 rounded-lg border border-chocolate/10">
                    <div className="w-6 h-6 rounded-full bg-chocolate/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-3 h-3 text-chocolate" />
                    </div>
                    <span className="font-serif text-graphite/70 text-sm">{g}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Info */}
        {/* <div className="max-w-lg mx-auto p-6 bg-cream rounded-2xl border border-chocolate/10">
          <h3 className="font-serif text-base text-graphite font-medium mb-2">Informacje o noclegach</h3>
          <ul className="space-y-1.5 font-serif text-graphite/70 text-sm">
            {[
              'Pokoje dostępne od godz. 16:00 w dniu wesela',
              'Wymeldowanie do godz. 11:00 następnego dnia',
              'Dostawki oznaczają dodatkowe łóżka w pokoju',
              'W razie pytań – skontaktujcie się z nami!',
            ].map((txt) => (
              <li key={txt} className="flex items-start gap-2">
                <span className="text-cranberry font-bold mt-0.5">•</span>
                <span>{txt}</span>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Floor plan button – image hidden, only shown in lightbox */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowPlan(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-cream border-2 border-chocolate/20 rounded-full text-chocolate hover:bg-chocolate/5 hover:border-chocolate/30 transition-colors font-serif text-sm"
          >
            <MapPin className="w-4 h-4" />
            Zobacz plan piętra
          </button>
        </div>
        <div className="flex items-center justify-center gap-3 mt-10">
          <Heart className="w-4 h-4 text-cranberry/30 fill-cranberry/30" />
          <Heart className="w-5 h-5 text-cranberry/50 fill-cranberry/50" />
          <Heart className="w-4 h-4 text-cranberry/30 fill-cranberry/30" />
        </div>
      </div>

      {/* Lightbox for full plan */}
      {showPlan && (
        <div
          className="fixed inset-0 z-50 bg-graphite/95 flex items-center justify-center p-4"
          onClick={() => setShowPlan(false)}
        >
          <button
            onClick={() => setShowPlan(false)}
            className="absolute top-4 right-4 p-2 text-cream/70 hover:text-cream transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src="public/pok.jpg"
            alt="Plan pokoi – Dwór Wola Sękowa"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          
        </div>
        
        
      )}
    </section>
  );
}

function RoomCard({ room, isActive, onClick, align }) {
  const isCouple = room.highlight;
  const allGuests = [...room.guests, ...room.extra];

  return (
    <button
      onClick={onClick}
      className={`
        p-3 sm:p-4 rounded-2xl border-2 transition-all duration-200
        ${align === 'right' ? 'text-right' : 'text-left'}
        ${isActive
          ? 'border-cranberry bg-cranberry/10 shadow-md scale-[1.02]'
          : isCouple
            ? 'border-cranberry/30 bg-cranberry/5 hover:bg-cranberry/10 hover:scale-[1.01]'
            : 'border-chocolate/15 bg-cream hover:border-cranberry/30 hover:scale-[1.01]'
        }
      `}
    >
      {/* Room label */}
      <div className={`flex items-center gap-2 mb-1.5 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
        <DoorOpen className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-cranberry' : isCouple ? 'text-cranberry/60' : 'text-chocolate/40'}`} />
        <span className={`font-serif text-sm font-semibold ${isActive || isCouple ? 'text-cranberry' : 'text-graphite'}`}>
          {isCouple ? 'Para Młoda' : `Pokój ${room.id}`}
        </span>
      </div>

      {/* All guest names */}
      <div className={`space-y-0.5 ${align === 'right' ? 'text-right' : 'text-left'}`}>
        {room.guests.map((g) => (
          <p key={g} className="font-serif text-xs sm:text-sm text-graphite/70 truncate">{g}</p>
        ))}
        {room.extra.length > 0 && (
          <>
            {/* <p className={`font-serif text-[10px] text-chocolate/40 ${align === 'right' ? 'text-right' : 'text-left'} mt-1`}>
              dostawka:
            </p> */}
            {room.extra.map((g) => (
              <p key={g} className="font-serif text-xs sm:text-sm text-graphite/50 truncate italic">{g}</p>
            ))}
          </>
        )}
      </div>
      
    </button>
  );
}
