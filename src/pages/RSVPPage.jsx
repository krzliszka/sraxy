import { useState } from 'react';
import { MapPin, Sparkles, Users } from 'lucide-react';

// Sample data - will be replaced with real guest data
const TABLES = [
  {
    id: 1,
    guests: [
      'PAULA',
      'SRAX',
      'Piotr Nowak',
      'Anna Nowak',
      'Tomasz Lewandowski',
    ],
  },
  {
    id: 2,
    guests: [
      'Krzysztof Walczak',
      'Paula Walczak',
      'Andrzej Duda',
      'Agnieszka Duda',
      'Michał Szpaderski',
    ],
  },
  {
    id: 3,
    guests: [
      'Robert Biedroń',
      'Joanna Biedroń',
      'Paweł Tanajno',
      'Ewa Tanajno',
      'Rafał Sonik',
    ],
  },
  {
    id: 4,
    guests: [
      'Dorota Szelągowska',
      'Zbigniew Szelągowski',
      'Bogdan Borusewicz',
      'Czesława Borusewicz',
      'Lech Kaczyński',
    ],
  },
  {
    id: 5,
    guests: [
      'Jarosław Kaczyński',
      'Grażyna Kaczyńska',
      'Donald Tusk',
      'Małgorzata Tusk',
      'Bronisław Komorowski',
    ],
  },
];

export default function SeatingPage() {
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 bg-sage/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-chocolate/50" />
            <span className="text-chocolate/70 text-sm tracking-[0.3em] uppercase font-serif">
              Rozkład
            </span>
            <Sparkles className="w-4 h-4 text-chocolate/50" />
          </div>

          <h1 className="font-handwriting text-5xl sm:text-6xl md:text-7xl text-cranberry mb-6">
            Stoły
          </h1>

          <p className="font-serif text-xl text-graphite/80 leading-relaxed max-w-2xl mx-auto">
            Tutaj znajdziesz swoje miejsce przy stole
          </p>
        </div>
      </section>

      {/* Seating Information */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Tables Grid */}
            <div>
              <h2 className="font-serif text-2xl text-graphite font-medium mb-8">
                <Users className="w-6 h-6 inline mr-3" />
                Twój stolik
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {TABLES.map((table) => (
                  <button
                    key={table.id}
                    onClick={() =>
                      setSelectedTable(
                        selectedTable?.id === table.id ? null : table
                      )
                    }
                    className={`p-6 rounded-2xl border-2 transition-all transform hover:scale-105 ${
                      selectedTable?.id === table.id
                        ? 'border-cranberry bg-cranberry/5 shadow-lg'
                        : 'border-chocolate/20 hover:border-chocolate/40 bg-cream'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-serif text-4xl font-bold text-cranberry mb-2">
                        {table.id}
                      </div>
                      <div className="font-serif text-sm text-graphite/70">
                        {table.guests.length} osób
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Table Details */}
            <div>
              <h2 className="font-serif text-2xl text-graphite font-medium mb-8">
                <MapPin className="w-6 h-6 inline mr-3" />
                Goście przy stole
              </h2>

              {selectedTable ? (
                <div className="bg-sage/10 rounded-2xl p-8 border-2 border-sage/30">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-cranberry text-cream px-6 py-3 rounded-full font-serif font-bold text-lg mb-4">
                      Stół {selectedTable.id}
                    </div>
                    <p className="text-graphite/70 font-serif">
                      {selectedTable.guests.length} gości
                    </p>
                  </div>

                  <div className="space-y-3">
                    {selectedTable.guests.map((guest, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-cream rounded-lg border border-chocolate/10"
                      >
                        <div className="w-8 h-8 rounded-full bg-cranberry/20 flex items-center justify-center font-serif text-sm text-cranberry font-medium">
                          {idx + 1}
                        </div>
                        <span className="font-serif text-graphite">{guest}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-cranberry/10 rounded-xl border border-cranberry/20">
                    <p className="font-serif text-sm text-graphite/70">
                      💡 Wskazówka: Możesz wydrukować te informacje dla wygody
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-sage/10 rounded-2xl p-12 text-center border-2 border-sage/30">
                  <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-sage" />
                  </div>
                  <p className="font-serif text-graphite/70">
                    Kliknij na numer stołu, aby zobaczyć listę gości
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-16 p-8 bg-cream rounded-2xl border-2 border-chocolate/10">
            <h3 className="font-serif text-lg text-graphite font-medium mb-4">
              Informacje praktyczne
            </h3>
            <ul className="space-y-3 font-serif text-graphite/80">
              <li className="flex items-start gap-3">
                <span className="text-cranberry font-bold mt-0.5">•</span>
                <span>Stoły są prostokątne z miejscami dla ok. 50 gości</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cranberry font-bold mt-0.5">•</span>
                <span>Twoje miejsce jest zarezerwowane - przyjedź 30 minut przed ceremonią</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cranberry font-bold mt-0.5">•</span>
                <span>W razie pytań - zadzwoń do nas!</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-sage/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-handwriting text-3xl text-cranberry mb-4">
            Pytania?
          </h2>
          <p className="font-serif text-graphite/70 mb-6">
            Skontaktuj się z nami:
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+48504444866"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cream border-2 border-chocolate/30 rounded-full text-chocolate hover:bg-chocolate/10 transition-colors font-serif"
            >
              Paula: 504-444-866
            </a>
            <a
              href="tel:+48792512711"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cream border-2 border-chocolate/30 rounded-full text-chocolate hover:bg-chocolate/10 transition-colors font-serif"
            >
              Artur: 792-512-711
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
