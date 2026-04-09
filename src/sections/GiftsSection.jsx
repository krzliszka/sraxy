import { Wine, Heart, HandHeart, PiggyBank, Gift } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const IDEAS = [
  {
    icon: Wine,
    title: 'Butelka wina',
    // desc: 'Dobre wino zawsze się przyda – na rocznicę, romantyczny wieczór lub po prostu na wspomnienie tego dnia.',
  },
  {
    icon: HandHeart,
    title: 'Coś od serca',
    // desc: 'Rzeczy stworzone Waszymi rękami mają dla nas szczególną wartość – to wkład Waszego czasu i miłości.',
  },
  {
    icon: PiggyBank,
    title: 'Na przyszłość',
    // desc: 'Symboliczny wkład w naszą wspólną przyszłość będzie dla nas szczególnie miłym gestem.',
  },
];

export default function GiftsSection() {
  return (
    <section id="prezenty" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          // tag="Prezenty"
          title="Sroki już ćwierkają..."
          subtitle="Wasze pytania o prezenty nie umknęły naszej uwadze."
        />

        <div className="bg-cream rounded-3xl p-8 sm:p-12 shadow-sm border border-chocolate/10 text-center mb-14">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-sage/25 flex items-center justify-center">
            <Heart className="w-10 h-10 text-cranberry fill-cranberry" />
          </div>
          <p className="font-serif text-xl sm:text-2xl text-graphite leading-relaxed mb-6">
            Najpiękniejszym prezentem będzie{' '}
            <span className="text-cranberry font-medium">Wasza obecność</span> –
            to ona sprawi, że ten dzień będzie naprawdę wyjątkowy.
          </p>
          <div className="w-16 h-px bg-chocolate/20 mx-auto my-8" />
          <p className="font-serif text-lg text-graphite/70 leading-relaxed">
            A jeśli chcecie dorzucić coś od siebie, zamiast kwiatów, które szybko więdną,
            ucieszy nas butelka wina albo coś stworzonego Waszymi rękami.
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
          {/* <Gift className="w-8 h-8 text-chocolate/30 mx-auto mb-4" />
          <p className="font-serif text-lg text-graphite/60 italic max-w-xl mx-auto">
            Pamiętajcie jednak, że Wasza obecność jest dla nas najważniejsza.
            Chcemy dzielić ten dzień z ludźmi, których kochamy.
          </p> */}
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
