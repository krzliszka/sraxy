import { Sparkles } from 'lucide-react';
import InteractiveSeatingPlan from '../components/InteractiveSeatingPlan';

export default function SeatingPage() {
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
          <InteractiveSeatingPlan />

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
