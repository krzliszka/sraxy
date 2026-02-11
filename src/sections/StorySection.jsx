import { Heart, Sparkles } from 'lucide-react';

const timeline = [
  {
    year: '2018',
    title: 'Pierwsze spotkanie',
    description: 'Tutaj możecie opisać jak się poznaliście...',
    side: 'left',
  },
  {
    year: '2019',
    title: 'Pierwsza randka',
    description: 'Opowiedzcie o waszej pierwszej randce...',
    side: 'right',
  },
  {
    year: '2021',
    title: 'Wspólne mieszkanie',
    description: 'Kiedy zamieszkaliście razem...',
    side: 'left',
  },
  {
    year: '2024',
    title: 'Zaręczyny',
    description: 'Opowiedzcie o zaręczynach...',
    side: 'right',
  },
  {
    year: '2026',
    title: 'Ślub!',
    description: 'I wreszcie nadszedł ten wyczekiwany dzień...',
    side: 'left',
    highlight: true,
  },
];

export default function StorySection() {
  return (
    <section id="historia" className="py-20 px-4 scroll-mt-20">
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-chocolate/50" />
          <span className="text-chocolate/70 text-sm tracking-[0.3em] uppercase font-serif">
            O nas
          </span>
          <Sparkles className="w-4 h-4 text-chocolate/50" />
        </div>
        
        <h2 className="font-handwriting text-5xl sm:text-6xl md:text-7xl text-cranberry mb-6">
          Nasza Historia
        </h2>
        
        <p className="font-serif text-xl text-graphite/80 leading-relaxed max-w-2xl mx-auto">
          Każda wielka historia miłosna ma swój początek. 
          Oto nasza...
        </p>
      </div>

      {/* About Us */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Paula */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-sage/30 flex items-center justify-center border-4 border-cream shadow-lg">
              <span className="font-handwriting text-6xl text-cranberry">P</span>
            </div>
            <h3 className="font-handwriting text-4xl text-cranberry mb-2">Paula</h3>
            <p className="font-serif text-graphite/70 leading-relaxed">
              Tu możecie dodać krótki opis o Pauli - jej pasje, zainteresowania, 
              czym się zajmuje...
            </p>
          </div>

          {/* Artur */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-sage/30 flex items-center justify-center border-4 border-cream shadow-lg">
              <span className="font-handwriting text-6xl text-cranberry">A</span>
            </div>
            <h3 className="font-handwriting text-4xl text-cranberry mb-2">Artur</h3>
            <p className="font-serif text-graphite/70 leading-relaxed">
              Tu możecie dodać krótki opis o Arturze - jego pasje, zainteresowania, 
              czym się zajmuje...
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto bg-cream rounded-3xl p-8 sm:p-12 shadow-sm">
        <h3 className="font-handwriting text-4xl sm:text-5xl text-cranberry text-center mb-16">
          Nasza podróż
        </h3>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-chocolate/20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                {/* Center heart */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-cream rounded-full border-2 border-chocolate/30 flex items-center justify-center hidden md:flex z-10">
                  <Heart className={`w-5 h-5 ${item.highlight ? 'text-cranberry fill-cranberry' : 'text-chocolate/50'}`} />
                </div>

                <div className={`md:w-1/2 ${item.side === 'right' ? 'md:ml-auto md:pl-12' : 'md:pr-12'}`}>
                  <div className={`bg-sage/20 rounded-2xl p-6 border ${item.highlight ? 'border-cranberry/30 bg-cranberry/5' : 'border-sage/30'}`}>
                    <span className={`font-serif text-sm ${item.highlight ? 'text-cranberry' : 'text-chocolate/60'}`}>
                      {item.year}
                    </span>
                    <h4 className={`font-handwriting text-2xl ${item.highlight ? 'text-cranberry' : 'text-graphite'} mt-1 mb-2`}>
                      {item.title}
                    </h4>
                    <p className="font-serif text-graphite/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="max-w-3xl mx-auto text-center mt-20">
        <svg className="w-12 h-12 mx-auto text-cranberry/30 mb-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
        <p className="font-serif text-2xl sm:text-3xl text-graphite/80 italic leading-relaxed mb-6">
          "Miłość nie polega na tym, żeby patrzeć na siebie nawzajem, 
          lecz żeby patrzeć razem w tym samym kierunku."
        </p>
        <p className="font-serif text-graphite/50">
          — Antoine de Saint-Exupéry
        </p>
      </div>
    </section>
  );
}
