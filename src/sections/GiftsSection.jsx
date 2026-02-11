import { Gift, Wine, Heart, Sparkles, HandHeart, PiggyBank } from 'lucide-react';

export default function GiftsSection() {
  return (
    <section id="prezenty" className="py-20 px-4 bg-sage/20 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-chocolate/50" />
            <span className="text-chocolate/70 text-sm tracking-[0.3em] uppercase font-serif">
              Prezenty
            </span>
            <Sparkles className="w-4 h-4 text-chocolate/50" />
          </div>
          
          <h2 className="font-handwriting text-5xl sm:text-6xl md:text-7xl text-cranberry mb-6">
            Sroki już ćwierkają...
          </h2>
          
          <p className="font-serif text-xl text-graphite/80 leading-relaxed max-w-2xl mx-auto">
            Wasze pytania o prezenty nie umknęły naszej uwadze.
          </p>
        </div>
          <div className="bg-cream rounded-3xl p-8 sm:p-12 shadow-sm border border-chocolate/10 text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-sage/30 flex items-center justify-center">
              <Heart className="w-10 h-10 text-cranberry fill-cranberry" />
            </div>
            
            <p className="font-serif text-xl sm:text-2xl text-graphite leading-relaxed mb-6">
              Najpiękniejszym prezentem będzie <span className="text-cranberry font-medium">Wasza obecność</span> – 
              to ona sprawi, że ten dzień będzie naprawdę wyjątkowy.
            </p>
            
            <div className="w-16 h-px bg-chocolate/20 mx-auto my-8" />
            
            <p className="font-serif text-lg text-graphite/80 leading-relaxed">
              A jeśli chcecie dorzucić coś od siebie, zamiast kwiatów, które szybko więdną, 
              ucieszy nas butelka wina albo coś stworzonego Waszymi rękami.
            </p>
          </div>
        </div>

        {/* Gift Ideas */}
        <div className="mb-12">
          <h3 className="font-handwriting text-4xl text-cranberry text-center mb-12">
            Jeśli jednak chcecie...
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Wine */}
            <div className="bg-cream rounded-2xl p-8 text-center border border-sage/30">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage/30 flex items-center justify-center">
                <Wine className="w-8 h-8 text-chocolate" />
              </div>
              <h3 className="font-handwriting text-2xl text-cranberry mb-3">
                Butelka wina
              </h3>
              <p className="font-serif text-graphite/70">
                Dobre wino zawsze się przyda – na rocznicę, romantyczny wieczór 
                lub po prostu na wspomnienie tego dnia.
              </p>
            </div>

            {/* Handmade */}
            <div className="bg-cream rounded-2xl p-8 text-center border border-sage/30">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage/30 flex items-center justify-center">
                <HandHeart className="w-8 h-8 text-chocolate" />
              </div>
              <h3 className="font-handwriting text-2xl text-cranberry mb-3">
                Coś z serca
              </h3>
              <p className="font-serif text-graphite/70">
                Rzeczy stworzone Waszymi rękami mają dla nas szczególną wartość – 
                to wkład Waszego czasu i miłości.
              </p>
            </div>

            {/* Money */}
            <div className="bg-cream rounded-2xl p-8 text-center border border-sage/30">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage/30 flex items-center justify-center">
                <PiggyBank className="w-8 h-8 text-chocolate" />
              </div>
              <h3 className="font-handwriting text-2xl text-cranberry mb-3">
                Na przyszłość
              </h3>
              <p className="font-serif text-graphite/70">
                Symboliczny wkład w naszą wspólną przyszłość będzie dla nas 
                szczególnie miłym gestem.
              </p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Gift className="w-8 h-8 text-chocolate/40" />
          </div>
          
          <p className="font-serif text-lg text-graphite/70 italic">
            Pamiętajcie jednak, że Wasza obecność jest dla nas najważniejsza. 
            Chcemy dzielić ten dzień z ludźmi, których kochamy – i to właśnie jest 
            dla nas największy prezent.
          </p>
          
          <div className="flex items-center justify-center gap-3 mt-8">
            <Heart className="w-4 h-4 text-cranberry/50 fill-cranberry/50" />
            <Heart className="w-5 h-5 text-cranberry fill-cranberry" />
            <Heart className="w-4 h-4 text-cranberry/50 fill-cranberry/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
