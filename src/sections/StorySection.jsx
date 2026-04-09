import { useEffect, useRef, useState } from 'react';
import { Heart } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const CHAPTERS = [
  {
    // year: '2018',
    // title: 'Pierwsze spotkanie',
    desc: 'Oficjalna wersja ich poznania brzmi całkiem romantycznie, choć zaczyna się od klasycznej katastrofy logistycznej. Był listopad, jakieś święto, wszystko wyprzedane, a Paula utknęła w Rzeszowie bez najmniejszej szansy na powrót do Krakowa. Pociągi pełne, busy pełne — standard.',
    photo: '/photos/story/1.jpg',
    side: 'left',
  },
  {
    year: '2019',
    // title: 'Pierwsza randka',
    desc: 'Opowiedzcie o Waszej pierwszej randce… Dokąd poszliście? Co jedliście? Kto się spóźnił?',
    photo: '/photos/story/2.jpg',
    side: 'right',
  },
  {
    year: '2021',
    title: 'Wspólne mieszkanie',
    desc: 'Kiedy zamieszkaliście razem… Jak wyglądał pierwszy wspólny poranek? Kto gotował, a kto zmywał?',
    photo: '/photos/story/3.jpg',
    side: 'left',
  },
  {
    year: '2024',
    title: 'Zaręczyny',
    desc: 'Opowiedzcie o zaręczynach… Gdzie się to stało? Czy była niespodzianka?',
    photo: '/photos/story/4.jpg',
    side: 'right',
  },
  {
    year: '2026',
    title: 'Ślub!',
    desc: 'I wreszcie nadszedł ten wyczekiwany dzień… Cała historia doprowadziła nas tutaj – i cieszymy się, że jesteście z nami!',
    photo: '/photos/story/5.jpg',
    side: 'left',
    highlight: true,
  },
];

const PEOPLE = [
  {
    name: 'Paula',
    initial: 'P',
    desc: 'Na codzień doktorantka Biologii na Uniwersytecie Jagiellońskim. Kocha podróżować, robić zdjęcia i wykonywać rzeczy ręcznie, ale przede wszystkim kocha Artura i Megere.',
  },
  {
    name: 'Artur',
    initial: 'A',
    desc: 'Na codzień poważny inżynier konstruktor. Jego pasja to przede wszystkim spacerowanie z Megerką, jazda rowerem oraz podróże i denerwowanie Pauli.',
  },
];

function useInView(ref, threshold = 0.25) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [ref, threshold]);
  return visible;
}

function ScrollChapter({ chapter, index }) {
  const ref = useRef(null);
  const visible = useInView(ref, 0.2);
  const isRight = chapter.side === 'right';

  return (
    <div
      ref={ref}
      className={`
        flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'}
        items-center gap-8 md:gap-12
        transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
    >
      {/* Photo area */}
      <div className="w-full md:w-1/2 flex-shrink-0">
        <div
          className={`
            relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg
            border-2 ${chapter.highlight ? 'border-cranberry/30' : 'border-chocolate/10'}
            bg-sage/20
          `}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Heart className={`w-10 h-10 mx-auto mb-2 ${chapter.highlight ? 'text-cranberry fill-cranberry' : 'text-chocolate/20'}`} />
              <p className="font-serif text-sm text-chocolate/30">Zdjęcie {index + 1}</p>
              <p className="font-serif text-xs text-chocolate/20 mt-1">{chapter.photo}</p>
            </div>
          </div>
          {/*
            Uncomment when real photos exist:
            <img src={chapter.photo} alt={chapter.title} className="w-full h-full object-cover" />
          */}
        </div>
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <span
          className={`
            inline-block px-4 py-1 rounded-full font-serif text-sm mb-3
            ${chapter.highlight ? 'bg-cranberry/10 text-cranberry font-semibold' : 'bg-sage/20 text-chocolate/60'}
          `}
        >
          {chapter.year}
        </span>
        <h3
          className={`font-hand text-4xl sm:text-5xl mb-4 ${chapter.highlight ? 'text-cranberry' : 'text-graphite'}`}
        >
          {chapter.title}
        </h3>
        <p className="font-serif text-lg text-graphite/70 leading-relaxed">{chapter.desc}</p>
      </div>
    </div>
  );
}

export default function StorySection() {
  return (
    <section id="historia" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          // tag="O nas"
          title="Nasza Historia"
          // subtitle="Jak to się właściwie zaczęło?"
        />

        {/* About us cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
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

        {/* Scrollytelling timeline */}
        <div className="mb-24">
          <h3 className="font-hand text-4xl sm:text-5xl text-cranberry text-center mb-16">
            Jak to się właściwie zaczęło?
          </h3>

          <div className="space-y-20 md:space-y-28">
            {CHAPTERS.map((ch, i) => (
              <ScrollChapter key={i} chapter={ch} index={i} />
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="text-center">
          <svg className="w-10 h-10 mx-auto text-cranberry/25 mb-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="font-serif text-2xl sm:text-3xl text-graphite/70 italic leading-relaxed mb-4 max-w-2xl mx-auto">
            „Miłość nie polega na tym, żeby patrzeć na siebie nawzajem, lecz żeby patrzeć razem w tym samym kierunku."
          </p>
          <p className="font-serif text-graphite/40">— Antoine de Saint-Exupéry</p>
          <div className="flex items-center justify-center gap-3 mt-10">
            <Heart className="w-4 h-4 text-cranberry/30 fill-cranberry/30" />
            <Heart className="w-5 h-5 text-cranberry/50 fill-cranberry/50" />
            <Heart className="w-4 h-4 text-cranberry/30 fill-cranberry/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
