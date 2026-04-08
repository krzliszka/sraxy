import { useState } from 'react';
import { Heart, Send, CheckCircle, AlertCircle, Users, Utensils, Car, MessageSquare } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxHY10zozTET3XKisDLQ28VyIIAZCNNuJrmlapAij2BaRb_8Fvp9tybLE3OVN98o4o9/exec';

const INITIAL = { name: '', email: '', phone: '', guests: '1', attending: '', diet: '', transport: '', comments: '' };

export default function RSVPSection() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.attending) {
      setStatus('error');
      setErrorMsg('Prosz\u0119 wype\u0142ni\u0107 wymagane pola (imi\u0119 i nazwisko oraz potwierdzenie obecno\u015bci).');
      return;
    }
    setStatus('loading');
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() }),
      });
      setStatus('success');
      setForm(INITIAL);
    } catch {
      setStatus('error');
      setErrorMsg('Wyst\u0105pi\u0142 b\u0142\u0105d. Spr\u00f3buj ponownie lub skontaktuj si\u0119 z nami telefonicznie.');
    }
  };

  const inputCls =
    'w-full px-4 py-3 rounded-xl border border-chocolate/20 bg-cream font-serif text-graphite focus:outline-none focus:border-cranberry focus:ring-2 focus:ring-cranberry/20 transition-colors';

  return (
    <section id="rsvp" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          tag="Potwierd\u017a obecno\u015b\u0107"
          title="RSVP"
          subtitle={
            <>
              Prosimy o potwierdzenie przybycia do dnia{' '}
              <span className="text-cranberry font-medium">1 marca 2026</span>
            </>
          }
        />

        <div className="max-w-2xl mx-auto mb-16">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sage/30 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-sage" />
              </div>
              <h3 className="font-hand text-4xl text-cranberry mb-3">Dzi\u0119kujemy!</h3>
              <p className="font-serif text-lg text-graphite/70">Twoje potwierdzenie zosta\u0142o wys\u0142ane.</p>
              <p className="font-serif text-graphite/50 mt-1">Do zobaczenia na naszym \u015blubie!</p>
              <div className="flex items-center justify-center gap-3 mt-8">
                <Heart className="w-4 h-4 text-cranberry/40 fill-cranberry/40" />
                <Heart className="w-6 h-6 text-cranberry fill-cranberry" />
                <Heart className="w-4 h-4 text-cranberry/40 fill-cranberry/40" />
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-6">
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="font-serif text-red-700 text-sm">{errorMsg}</p>
                </div>
              )}

              <div>
                <label className="block font-serif text-graphite font-medium mb-1.5 text-sm">Imi\u0119 i nazwisko *</label>
                <input type="text" name="name" value={form.name} onChange={set} required className={inputCls} placeholder="Jan Kowalski" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-serif text-graphite font-medium mb-1.5 text-sm">Email</label>
                  <input type="email" name="email" value={form.email} onChange={set} className={inputCls} placeholder="jan@example.com" />
                </div>
                <div>
                  <label className="block font-serif text-graphite font-medium mb-1.5 text-sm">Telefon</label>
                  <input type="tel" name="phone" value={form.phone} onChange={set} className={inputCls} placeholder="123-456-789" />
                </div>
              </div>

              <div>
                <label className="block font-serif text-graphite font-medium mb-3 text-sm">Czy we\u017amiesz udzia\u0142? *</label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { val: 'yes', label: 'Tak, z przyjemno\u015bci\u0105!', color: 'cranberry' },
                    { val: 'no', label: 'Niestety, nie dam rady', color: 'chocolate' },
                  ].map((opt) => (
                    <label
                      key={opt.val}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        form.attending === opt.val
                          ? `border-${opt.color} bg-${opt.color}/5`
                          : 'border-chocolate/15 hover:border-chocolate/30'
                      }`}
                    >
                      <input type="radio" name="attending" value={opt.val} checked={form.attending === opt.val} onChange={set} className="sr-only" />
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${form.attending === opt.val ? `border-${opt.color}` : 'border-chocolate/30'}`}>
                        {form.attending === opt.val && <div className={`w-3 h-3 rounded-full bg-${opt.color}`} />}
                      </div>
                      <span className="font-serif text-graphite">{opt.label}</span>
                      {opt.val === 'yes' && (
                        <Heart className={`w-4 h-4 ml-auto ${form.attending === 'yes' ? 'text-cranberry fill-cranberry' : 'text-chocolate/20'}`} />
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {form.attending === 'yes' && (
                <>
                  <div>
                    <label className="block font-serif text-graphite font-medium mb-1.5 text-sm">
                      <Users className="w-4 h-4 inline mr-1.5" />Liczba os\u00f3b
                    </label>
                    <select name="guests" value={form.guests} onChange={set} className={inputCls}>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? 'osoba' : n < 5 ? 'osoby' : 'os\u00f3b'}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-serif text-graphite font-medium mb-1.5 text-sm">
                      <Utensils className="w-4 h-4 inline mr-1.5" />Wymagania dietetyczne
                    </label>
                    <textarea name="diet" value={form.diet} onChange={set} rows={2} className={`${inputCls} resize-none`} placeholder="Wegetaria\u0144skie, wega\u0144skie, bezglutenowe, alergie\u2026" />
                  </div>
                  <div>
                    <label className="block font-serif text-graphite font-medium mb-1.5 text-sm">
                      <Car className="w-4 h-4 inline mr-1.5" />Transport
                    </label>
                    <select name="transport" value={form.transport} onChange={set} className={inputCls}>
                      <option value="">Wybierz opcj\u0119\u2026</option>
                      <option value="own">Przyjad\u0119 w\u0142asnym transportem</option>
                      <option value="need">Potrzebuj\u0119 pomocy z transportem</option>
                      <option value="carpool">Ch\u0119tnie zabior\u0119 kogo\u015b po drodze</option>
                    </select>
                  </div>
                </>
              )}

              <div>
                <label className="block font-serif text-graphite font-medium mb-1.5 text-sm">
                  <MessageSquare className="w-4 h-4 inline mr-1.5" />Uwagi lub \u017cyczenia
                </label>
                <textarea name="comments" value={form.comments} onChange={set} rows={3} className={`${inputCls} resize-none`} placeholder="Cokolwiek chcesz nam przekaza\u0107\u2026" />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-cranberry text-cream font-serif text-lg rounded-full hover:bg-cranberry/90 transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                    Wysy\u0142anie\u2026
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Wy\u015blij potwierdzenie
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="max-w-xl mx-auto text-center bg-sage/15 rounded-3xl p-8">
          <h3 className="font-hand text-3xl text-cranberry mb-3">Wolisz zadzwoni\u0107?</h3>
          <p className="font-serif text-graphite/60 mb-6 text-sm">Mo\u017cesz te\u017c potwierdzi\u0107 obecno\u015b\u0107 telefonicznie:</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {[
              { name: 'Paula', phone: '504-444-866', tel: '+48504444866' },
              { name: 'Artur', phone: '792-512-711', tel: '+48792512711' },
            ].map((c) => (
              <a
                key={c.name}
                href={`tel:${c.tel}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cream border-2 border-chocolate/20 rounded-full text-chocolate hover:bg-chocolate/5 transition-colors font-serif"
              >
                {c.name}: {c.phone}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
