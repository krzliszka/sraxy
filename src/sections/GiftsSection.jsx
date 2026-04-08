import { Wine, Heart, HandHeart, PiggyBank, Gift } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const IDEAS = [
  {
    icon: Wine,
    title: 'Butelka wina',
    desc: 'Dobre wino zawsze si\u0119 przyda \u2013 na rocznic\u0119, romantyczny wiecz\u00f3r lub po prostu na wspomnienie tego dnia.',
  },
  {
    icon: HandHeart,
    title: 'Co\u015b z serca',
    desc: 'Rzeczy stworzone Waszymi r\u0119kami maj\u0105 dla nas szczeg\u00f3ln\u0105 warto\u015b\u0107 \u2013 to wk\u0142ad Waszego czasu i mi\u0142o\u015bci.',
  },
  {
    icon: PiggyBank,
    title: 'Na przysz\u0142o\u015b\u0107',
    desc: 'Symboliczny wk\u0142ad w nasz\u0105 wsp\u00f3ln\u0105 przysz\u0142o\u015b\u0107 b\u0119dzie dla nas szczeg\u00f3lnie mi\u0142ym gestem.',
  },
];

export default function GiftsSection() {
  return (
    <section id="prezenty" className="py-20 px-4 bg-sage/15 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          tag="Prezenty"
          title="Sroki ju\u017c \u0107wierkaj\u0105..."
          subtitle="Wasze pytania o prezenty nie umkn\u0119\u0142y naszej uwadze."
        />

        <div className="bg-cream rounded-3xl p-8 sm:p-12 shadow-sm border border-chocolate/10 text-center mb-14">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-sage/25 flex items-center justify-center">
            <Heart className="w-10 h-10 text-cranberry fill-cranberry" />
          </div>
          <p className="font-serif text-xl sm:text-2xl text-graphite leading-relaxed mb-6">
            Najpi\u0119kniejszym prezentem b\u0119dzie{' '}
            <span className="text-cranberry font-medium">Wasza obecno\u015b\u0107</span> &ndash;
            to ona sprawi, \u017ce ten dzie\u0144 b\u0119dzie naprawd\u0119 wyj\u0105tkowy.
          </p>
          <div className="w-16 h-px bg-chocolate/20 mx-auto my-8" />
          <p className="font-serif text-lg text-graphite/70 leading-relaxed">
            A je\u015bli chcecie dorzuci\u0107 co\u015b od siebie, zamiast kwiat\u00f3w, kt\u00f3re szybko wi\u0119dn\u0105,
            ucieszy nas butelka wina albo co\u015b stworzonego Waszymi r\u0119kami.
          </p>
        </div>

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

        <div className="text-center">
          <Gift className="w-8 h-8 text-chocolate/30 mx-auto mb-4" />
          <p className="font-serif text-lg text-graphite/60 italic max-w-xl mx-auto">
            Pami\u0119tajcie jednak, \u017ce Wasza obecno\u015b\u0107 jest dla nas najwa\u017cniejsza.
            Chcemy dzieli\u0107 ten dzie\u0144 z lud\u017ami, kt\u00f3rych kochamy.
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
