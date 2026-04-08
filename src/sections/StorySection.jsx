import { Heart } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const TIMELINE = [
  { year: '2018', title: 'Pierwsze spotkanie', desc: 'Tutaj mozecie opisac jak sie poznaliscie...', side: 'left' },
  { year: '2019', title: 'Pierwsza randka', desc: 'Opowiedzcie o waszej pierwszej randce...', side: 'right' },
  { year: '2021', title: 'Wspolne mieszkanie', desc: 'Kiedy zamieszkaliscie razem...', side: 'left' },
  { year: '2024', title: 'Zareczyny', desc: 'Opowiedzcie o zareczynach...', side: 'right' },
  { year: '2026', title: 'Slub!', desc: 'I wreszcie nadszedl ten wyczekiwany dzien...', side: 'left', highlight: true },
];

const PEOPLE = [
  { name: 'Paula', initial: 'P', desc: 'Tu mozecie dodac krotki opis o Pauli - jej pasje, zainteresowania, czym sie zajmuje...' },
  { name: 'Artur', initial: 'A', desc: 'Tu mozecie dodac krotki opis o Arturze - jego pasje, zainteresowania, czym sie zajmuje...' },
];

export default function StorySection() {
  return (
    <section id="historia" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader tag="O nas" title="Nasza Historia" subtitle="Kazda wielka historia milosna ma swoj poczatek. Oto nasza..." />

        {/* About us cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {PEOPLE.map((p) => (
            <div key={p.name} className="text-center">
              <div className="w-44 h-44 mx-auto mb-6 rounded-full bg-sage/30 flex items-center justify-center border-4 border-cream shadow-lg">
                <span className="font-hand text-6xl text-cranberry">{p.initial}</span>
              </div>
              <h3 className="font-hand text-4xl text-cranberry mb-2">{p.name}</h3>
              <p className="font-serif text-graphite/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-cream rounded-3xl p-8 sm:p-12 shadow-sm border border-chocolate/5">
          <h3 className="font-hand text-4xl text-cranberry text-center mb-14">Nasza podroz</h3>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-chocolate/15 -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <div key={i} className="relative">
                  {/* Center heart */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-cream rounded-full border-2 border-chocolate/20 items-center justify-center hidden md:flex z-10">
                    <Heart className={`w-4 h-4 ${item.highlight ? 'text-cranberry fill-cranberry' : 'text-chocolate/40'}`} />
                  </div>

                  <div className={`md:w-1/2 ${item.side === 'right' ? 'md:ml-auto md:pl-12' : 'md:pr-12'}`}>
                    <div className={`rounded-2xl p-6 border ${item.highlight ? 'border-cranberry/30 bg-cranberry/5' : 'border-sage/30 bg-sage/10'}`}>
                      <span className={`font-serif text-sm ${item.highlight ? 'text-cranberry' : 'text-chocolate/50'}`}>{item.year}</span>
                      <h4 className={`font-hand text-2xl mt-1 mb-2 ${item.highlight ? 'text-cranberry' : 'text-graphite'}`}>{item.title}</h4>
                      <p className="font-serif text-graphite/70">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-20">
          <svg className="w-10 h-10 mx-auto text-cranberry/25 mb-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="font-serif text-2xl sm:text-3xl text-graphite/70 italic leading-relaxed mb-4 max-w-2xl mx-auto">
            &ldquo;Milosc nie polega na tym, zeby patrzec na siebie nawzajem, lecz zeby patrzec razem w tym samym kierunku.&rdquo;
          </p>
          <p className="font-serif text-graphite/40">&mdash; Antoine de Saint-Exup&eacute;ry</p>
        </div>
      </div>
    </section>
  );
}
