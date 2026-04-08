import { Wine, Heart, HandHeart, PiggyBank, Gift } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const IDEAS = [
  {
    icon: Wine,
    title: 'Butelka wina',
    desc: 'Dobre wino zawsze sie przyda - na rocznice, romantyczny wieczor lub po prostu na wspomnienie tego dnia.',
  },
  {
    icon: HandHeart,
    title: 'Cos z serca',
    desc: 'Rzeczy stworzone Waszymi rekami maja dla nas szczegolna wartosc - to wklad Waszego czasu i milosci.',
  },
  {
    icon: PiggyBank,
    title: 'Na przyszlosc',
    desc: 'Symboliczny wklad w nasza wspolna przyszlosc bedzie dla nas szczegolnie milym gestem.',
  },
];

export default function GiftsSection() {
  return (
    <section id="prezenty" className="py-20 px-4 bg-sage/15 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          tag="Prezenty"
          title="Sroki juz cwierkaja..."
          subtitle="Wasze pytania o prezenty nie umknely naszej uwadze."
        />

        {/* Main message */}
        <div className="bg-cream rounded-3xl p-8 sm:p-12 shadow-sm border border-chocolate/10 text-center mb-14">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-sage/25 flex items-center justify-center">
            <Heart className="w-10 h-10 text-cranberry fill-cranberry" />
          </div>
          <p className="font-serif text-xl sm:text-2xl text-graphite leading-relaxed mb-6">
            Najpiekniejszym prezentem bedzie{' '}
            <span className="text-cranberry font-medium">Wasza obecnosc</span> &ndash;
            to ona sprawi, ze ten dzien bedzie naprawde wyjatkowy.
          </p>
          <div className="w-16 h-px bg-chocolate/20 mx-auto my-8" />
          <p className="font-serif text-lg text-graphite/70 leading-relaxed">
            A jesli chcecie dorzucic cos od siebie, zamiast kwiatow, ktore szybko wiedna,
            ucieszy nas butelka wina albo cos stworzonego Waszymi rekami.
          </p>
        </div>

        {/* Idea cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {IDEAS.map((item) => (
            <div key={item.title} className="bg-cream rounded-2xl p-8 text-center border border-sage/30">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-sage/25 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-chocolate" />
              </div>
              <h3 className="font-hand text-2xl text-cranberry mb-3">{item.title}</h3>
              <p className="font-serif text-graphite/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing note */}
        <div className="text-center">
          <Gift className="w-8 h-8 text-chocolate/30 mx-auto mb-4" />
          <p className="font-serif text-lg text-graphite/60 italic max-w-xl mx-auto">
            Pamietajcie jednak, ze Wasza obecnosc jest dla nas najwazniejsza.
            Chcemy dzielic ten dzien z ludzmi, ktorych kochamy.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <Heart className="w-4 h-4 text-cranberry/40 fill-cranberry/40" />
            <Heart className="w-5 h-5 text-cranberry fill-cranberry" />
            <Heart className="w-4 h-4 text-cranberry/40 fill-cranberry/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
