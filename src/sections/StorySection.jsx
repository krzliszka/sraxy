import { useEffect, useRef, useState, useCallback } from 'react';
import { Heart } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Lightbox from '../components/Lightbox';

const CHAPTERS = [
  {
    // year: '2018',
    // title: 'Pierwsze spotkanie',
    desc: 'Oficjalna wersja ich poznania brzmi całkiem romantycznie, choć zaczyna się od klasycznej katastrofy logistycznej. Był listopad, jakieś święto, wszystko wyprzedane, a Paula utknęła w Rzeszowie bez najmniejszej szansy na powrót do Krakowa. Pociągi pełne, busy pełne — standard. I wtedy przypomniała sobie słowa Arka: „Jakby co, mam kolegę, który też studiuje w Krakowie, może kiedyś Cię podrzuci".',
    photo: '/photos/story/26.PNG',
    side: 'left',
  },
  {
    // year: '2019',
    // title: 'Pierwsza randka',
    desc: 'No więc napisała. A tym kolegą okazał się Artur. Zgodził się ją zabrać, choć — jak później przyznał — nie był tym pomysłem szczególnie zachwycony. Pojechali. A właściwie: stali. Cztery godziny w korku na autostradzie, po jakimś wypadku. Cztery godziny niezręcznej ciszy. Idealny początek znajomości, prawda? Nieoficjalnie widzieli się jednak wcześniej. Kiedyś Arek odbierał od Pauli paczkę, a Artur przyjechał z nim na rowerze. Tyle że wtedy nikt nie połączył faktów — życie lubi takie małe żarty.',
    photo: '/photos/story/25.PNG',
    side: 'right',
  },
  {
    // year: '2021',
    // title: 'Wspólne mieszkanie',
    desc: 'Pierwsze wrażenia? Paula pomyślała, że Artur jest trochę dziwny, ale sympatyczny. On natomiast zwrócił na nią uwagę od razu. Coś więc musiało zaskoczyć szybciej niż ich rozmowa w samochodzie. Pierwszy ruch też należał do niego, choć w dość nieoczywistej formie. Gdy Paula zapytała, ile ma oddać za paliwo, Artur odparł, że może… pouczyć go chemii. Czy to był sprytny plan, czy czysta improwizacja — nie wiadomo. Wiadomo tylko, że zadziałało.',
    photo: '/photos/story/40.PNG',
    side: 'left',
  },
  {
    // year: '2024',
    // title: 'Zaręczyny',
    desc: 'I tak to leci już ponad siedem lat. A skoro ich historia zaczęła się od wspólnej podróży — trochę przypadkowej, trochę wymuszonej — to nic dziwnego, że z czasem podróże stały się ich znakiem rozpoznawczym. Od krótkich wypadów po Polsce, przez spontaniczne wyjazdy, aż po te większe, planowane z mapą i kubkiem kawy w ręku.',
    photo: '/photos/story/16.PNG',
    side: 'right',
  },
  {
    // year: '2026',
    // title: 'Ślub!',
    desc: 'Każda z nich zostawiła po sobie jakiś ślad: zdjęcie, wspomnienie, anegdotę, którą można opowiadać przy stole. I właśnie kilka takich momentów chcemy Wam pokazać…',
    photo: '/photos/story/31.PNG',
    side: 'left',
    // highlight: true,
  },
];

const GALLERY_PHOTOS = [
  { src: '/photos/gallery/20.PNG', alt: 'Galeria 1' },
  { src: '/photos/gallery/28.PNG', alt: 'Galeria 2' },
  { src: '/photos/gallery/32.PNG', alt: 'Galeria 3' },
  { src: '/photos/gallery/39.PNG', alt: 'Galeria 4' },
  { src: '/photos/gallery/44.PNG', alt: 'Galeria 5' },
  { src: '/photos/gallery/45.PNG', alt: 'Galeria 6' },
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

function ClickablePhoto({ src, alt, className, onOpen }) {
  return (
    <img
      src={src}
      alt={alt || ''}
      className={`${className} cursor-pointer transition-transform duration-300 hover:scale-[1.02]`}
      onClick={() => onOpen(src, alt)}
    />
  );
}

function ScrollChapter({ chapter, index, onPhotoOpen }) {
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
          <ClickablePhoto
            src={chapter.photo}
            alt={chapter.title || `Zdjęcie ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            onOpen={onPhotoOpen}
          />
        </div>
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        {/* <span
          className={`
            inline-block px-4 py-1 rounded-full font-serif text-sm mb-3
            ${chapter.highlight ? 'bg-cranberry/10 text-cranberry font-semibold' : 'bg-sage/20 text-chocolate/60'}
          `}
        >
          {chapter.year}
        </span> */}
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

function GalleryItem({ photo, onOpen }) {
  const ref = useRef(null);
  const visible = useInView(ref, 0.15);

  return (
    <div
      ref={ref}
      className={`
        overflow-hidden rounded-2xl shadow-md border border-chocolate/10 bg-sage/20
        transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <div className="relative aspect-[4/3]">
        <ClickablePhoto
          src={photo.src}
          alt={photo.alt}
          className="w-full h-full object-cover"
          onOpen={onOpen}
        />
      </div>
    </div>
  );
}

export default function StorySection() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = useCallback((src, alt) => {
    setLightbox({ src, alt });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

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
              <ScrollChapter key={i} chapter={ch} index={i} onPhotoOpen={openLightbox} />
            ))}
          </div>
        </div>

        {/* Photo gallery */}
        <div className="mb-24">
          <h3 className="font-hand text-4xl sm:text-5xl text-cranberry text-center mb-12">
            Galeria
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {GALLERY_PHOTOS.map((photo, i) => (
              <GalleryItem key={i} photo={photo} onOpen={openLightbox} />
            ))}
          </div>
        </div>
        {/* <div className="text-center">
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
        </div> */}
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />
      )}
    </section>
  );
}
