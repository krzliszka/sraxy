import { useMemo, useState } from 'react';
import { MapPin, Search, Users, Music2 } from 'lucide-react';

const TABLES = [
  {
    id: '1',
    x: 16,
    y: 20,
    zone: 'Lewa sala',
    guests: ['PAULA', 'SRAX', 'Piotr Nowak', 'Anna Nowak', 'Tomasz Lewandowski'],
  },
  {
    id: '2',
    x: 38,
    y: 20,
    zone: 'Lewa sala',
    guests: ['Krzysztof Walczak', 'Paula Walczak', 'Andrzej Duda', 'Agnieszka Duda', 'Michał Szpaderski'],
  },
  {
    id: '3',
    x: 62,
    y: 20,
    zone: 'Prawa sala',
    guests: ['Robert Biedroń', 'Joanna Biedroń', 'Paweł Tanajno', 'Ewa Tanajno', 'Rafał Sonik'],
  },
  {
    id: '4',
    x: 84,
    y: 20,
    zone: 'Prawa sala',
    guests: ['Dorota Szelągowska', 'Zbigniew Szelągowski', 'Bogdan Borusewicz', 'Czesława Borusewicz', 'Lech Kaczyński'],
  },
  {
    id: '5',
    x: 26,
    y: 72,
    zone: 'Lewa sala',
    guests: ['Jarosław Kaczyński', 'Grażyna Kaczyńska', 'Donald Tusk', 'Małgorzata Tusk', 'Bronisław Komorowski'],
  },
  {
    id: '6',
    x: 74,
    y: 72,
    zone: 'Prawa sala',
    guests: ['Zofia Mazur', 'Jakub Mazur', 'Marek Grzelak', 'Natalia Grzelak', 'Maja Wrona'],
  },
];

const normalize = (value) => value.toLowerCase().trim();

export default function InteractiveSeatingPlan() {
  const [selectedTableId, setSelectedTableId] = useState(null);
  const [guestQuery, setGuestQuery] = useState('');

  const selectedTable = TABLES.find((table) => table.id === selectedTableId) || null;

  const foundGuestTable = useMemo(() => {
    const query = normalize(guestQuery);
    if (!query) return null;

    return (
      TABLES.find((table) =>
        table.guests.some((guest) => normalize(guest).includes(query))
      ) || null
    );
  }, [guestQuery]);

  const activeTable = foundGuestTable || selectedTable;

  return (
    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h3 className="font-serif text-2xl text-graphite font-medium">
            <MapPin className="w-6 h-6 inline mr-3" />
            Mapa sali
          </h3>
          <span className="text-xs font-serif uppercase tracking-[0.2em] text-graphite/60">
            Kliknij stół, aby zobaczyć gości
          </span>
        </div>

        <div className="relative aspect-[4/3] bg-cream rounded-3xl border-2 border-chocolate/20 p-4 sm:p-6 overflow-hidden shadow-sm">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-sage/30 rounded-full border border-sage/40 text-xs sm:text-sm font-serif text-graphite/80 flex items-center gap-2">
            <Music2 className="w-4 h-4" />
            DJ / Zespół
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[46%] h-[36%] rounded-2xl border-2 border-cranberry/30 bg-cranberry/5 flex items-center justify-center text-center px-4">
            <div>
              <p className="font-serif text-sm uppercase tracking-[0.25em] text-cranberry/70">Parkiet</p>
              <p className="font-handwriting text-3xl text-cranberry">Do tańca</p>
            </div>
          </div>

          {TABLES.map((table) => {
            const isSelected = activeTable?.id === table.id;

            return (
              <button
                key={table.id}
                onClick={() => setSelectedTableId((prev) => (prev === table.id ? null : table.id))}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 transition-all duration-200 flex flex-col items-center justify-center shadow-sm ${
                  isSelected
                    ? 'border-cranberry bg-cranberry text-cream scale-110 shadow-lg'
                    : 'border-chocolate/30 bg-cream hover:border-cranberry/70 hover:scale-105 text-graphite'
                }`}
                style={{ left: `${table.x}%`, top: `${table.y}%` }}
                aria-label={`Wybierz stół ${table.id}`}
              >
                <span className="font-serif text-lg sm:text-xl leading-none">{table.id}</span>
                <span className={`text-[10px] sm:text-xs ${isSelected ? 'text-cream/90' : 'text-graphite/60'}`}>
                  {table.guests.length} os.
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm font-serif text-graphite/70">
          <div className="p-3 rounded-xl bg-sage/10 border border-sage/20">Wejście: dolna część sali</div>
          <div className="p-3 rounded-xl bg-sage/10 border border-sage/20">Stół pary młodej: przy parkiecie</div>
          <div className="p-3 rounded-xl bg-sage/10 border border-sage/20">Obsługa pomoże wskazać miejsce</div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-serif text-2xl text-graphite font-medium mb-4">
            <Users className="w-6 h-6 inline mr-3" />
            Wyszukaj siebie
          </h3>

          <div className="relative">
            <Search className="w-5 h-5 text-graphite/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              value={guestQuery}
              onChange={(e) => setGuestQuery(e.target.value)}
              placeholder="Np. Jan Kowalski"
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-chocolate/20 focus:border-cranberry/40 outline-none bg-cream font-serif"
            />
          </div>

          {guestQuery && foundGuestTable && (
            <p className="mt-3 font-serif text-sm text-graphite/70">
              Znaleziono przy <span className="text-cranberry font-medium">stole {foundGuestTable.id}</span> ({foundGuestTable.zone}).
            </p>
          )}

          {guestQuery && !foundGuestTable && (
            <p className="mt-3 font-serif text-sm text-graphite/70">
              Brak wyniku. Sprawdź pisownię lub skontaktuj się z nami.
            </p>
          )}
        </div>

        {activeTable ? (
          <div className="bg-sage/10 rounded-2xl p-6 border-2 border-sage/30">
            <div className="text-center mb-5">
              <div className="inline-block bg-cranberry text-cream px-6 py-3 rounded-full font-serif font-bold text-lg mb-2">
                Stół {activeTable.id}
              </div>
              <p className="text-graphite/70 font-serif text-sm">{activeTable.zone} • {activeTable.guests.length} gości</p>
            </div>

            <div className="space-y-2.5">
              {activeTable.guests.map((guest, idx) => (
                <button
                  key={guest}
                  onClick={() => setGuestQuery(guest)}
                  className="w-full text-left flex items-center gap-3 p-3 bg-cream rounded-lg border border-chocolate/10 hover:border-cranberry/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-cranberry/20 flex items-center justify-center font-serif text-sm text-cranberry font-medium">
                    {idx + 1}
                  </div>
                  <span className="font-serif text-graphite">{guest}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-sage/10 rounded-2xl p-8 text-center border-2 border-sage/30">
            <p className="font-serif text-graphite/70">
              Wybierz stół na mapie lub wpisz nazwisko, aby zobaczyć rozkład miejsc.
            </p>
          </div>
        )}

        <div className="p-4 bg-cranberry/10 rounded-xl border border-cranberry/20">
          <p className="font-serif text-sm text-graphite/70">
            💡 Podpowiedź: kliknięcie nazwiska automatycznie ułatwia ponowne wyszukanie miejsca.
          </p>
        </div>
      </div>
    </div>
  );
}