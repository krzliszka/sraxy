import { useState } from 'react';
import { Heart, Send, CheckCircle, AlertCircle, Sparkles, Users, Utensils, Car, MessageSquare } from 'lucide-react';

// Google Apps Script URL - You need to create one and paste here
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxHY10zozTET3XKisDLQ28VyIIAZCNNuJrmlapAij2BaRb_8Fvp9tybLE3OVN98o4o9/exec';

export default function RSVPPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    attending: '',
    diet: '',
    transport: '',
    comments: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.attending) {
      setStatus('error');
      setErrorMessage('Proszę wypełnić wymagane pola (imię i nazwisko oraz potwierdzenie obecności).');
      return;
    }

    setStatus('loading');

    try {
      // Send to Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      // With no-cors, we can't read the response, so we assume success
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '1',
        attending: '',
        diet: '',
        transport: '',
        comments: '',
      });
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage('Wystąpił błąd. Spróbuj ponownie lub skontaktuj się z nami telefonicznie.');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 bg-sage/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-chocolate/50" />
            <span className="text-chocolate/70 text-sm tracking-[0.3em] uppercase font-serif">
              Potwierdź obecność
            </span>
            <Sparkles className="w-4 h-4 text-chocolate/50" />
          </div>
          
          <h1 className="font-handwriting text-5xl sm:text-6xl md:text-7xl text-cranberry mb-6">
            RSVP
          </h1>
          
          <p className="font-serif text-xl text-graphite/80 leading-relaxed max-w-2xl mx-auto">
            Prosimy o potwierdzenie przybycia do dnia{' '}
            <span className="font-medium text-cranberry">1 marca 2026</span>
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          {status === 'success' ? (
            <SuccessMessage />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Error Message */}
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="font-serif text-red-700">{errorMessage}</p>
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block font-serif text-graphite font-medium mb-2">
                  Imię i nazwisko *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-chocolate/20 bg-cream font-serif text-graphite focus:outline-none focus:border-cranberry focus:ring-2 focus:ring-cranberry/20 transition-colors"
                  placeholder="Jan Kowalski"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-serif text-graphite font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-chocolate/20 bg-cream font-serif text-graphite focus:outline-none focus:border-cranberry focus:ring-2 focus:ring-cranberry/20 transition-colors"
                    placeholder="jan@example.com"
                  />
                </div>
                <div>
                  <label className="block font-serif text-graphite font-medium mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-chocolate/20 bg-cream font-serif text-graphite focus:outline-none focus:border-cranberry focus:ring-2 focus:ring-cranberry/20 transition-colors"
                    placeholder="123-456-789"
                  />
                </div>
              </div>

              {/* Attending */}
              <div>
                <label className="block font-serif text-graphite font-medium mb-4">
                  Czy weźmiesz udział w naszym ślubie? *
                </label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.attending === 'yes'
                        ? 'border-cranberry bg-cranberry/5'
                        : 'border-chocolate/20 hover:border-chocolate/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={formData.attending === 'yes'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.attending === 'yes' ? 'border-cranberry' : 'border-chocolate/30'
                    }`}>
                      {formData.attending === 'yes' && (
                        <div className="w-3 h-3 rounded-full bg-cranberry" />
                      )}
                    </div>
                    <span className="font-serif text-graphite">Tak, z przyjemnością!</span>
                    <Heart className={`w-5 h-5 ml-auto ${
                      formData.attending === 'yes' ? 'text-cranberry fill-cranberry' : 'text-chocolate/30'
                    }`} />
                  </label>

                  <label
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.attending === 'no'
                        ? 'border-chocolate bg-chocolate/5'
                        : 'border-chocolate/20 hover:border-chocolate/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formData.attending === 'no'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.attending === 'no' ? 'border-chocolate' : 'border-chocolate/30'
                    }`}>
                      {formData.attending === 'no' && (
                        <div className="w-3 h-3 rounded-full bg-chocolate" />
                      )}
                    </div>
                    <span className="font-serif text-graphite">Niestety, nie dam rady</span>
                  </label>
                </div>
              </div>

              {/* Additional fields - only show if attending */}
              {formData.attending === 'yes' && (
                <>
                  {/* Number of guests */}
                  <div>
                    <label className="block font-serif text-graphite font-medium mb-2">
                      <Users className="w-4 h-4 inline mr-2" />
                      Liczba osób
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-chocolate/20 bg-cream font-serif text-graphite focus:outline-none focus:border-cranberry focus:ring-2 focus:ring-cranberry/20 transition-colors"
                    >
                      <option value="1">1 osoba</option>
                      <option value="2">2 osoby</option>
                      <option value="3">3 osoby</option>
                      <option value="4">4 osoby</option>
                      <option value="5">5 osób</option>
                    </select>
                  </div>

                  {/* Diet */}
                  <div>
                    <label className="block font-serif text-graphite font-medium mb-2">
                      <Utensils className="w-4 h-4 inline mr-2" />
                      Wymagania dietetyczne
                    </label>
                    <textarea
                      name="diet"
                      value={formData.diet}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border border-chocolate/20 bg-cream font-serif text-graphite focus:outline-none focus:border-cranberry focus:ring-2 focus:ring-cranberry/20 transition-colors resize-none"
                      placeholder="Wegetariańskie, wegańskie, bezglutenowe, alergie..."
                    />
                  </div>

                  {/* Transport */}
                  <div>
                    <label className="block font-serif text-graphite font-medium mb-2">
                      <Car className="w-4 h-4 inline mr-2" />
                      Transport
                    </label>
                    <select
                      name="transport"
                      value={formData.transport}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-chocolate/20 bg-cream font-serif text-graphite focus:outline-none focus:border-cranberry focus:ring-2 focus:ring-cranberry/20 transition-colors"
                    >
                      <option value="">Wybierz opcję...</option>
                      <option value="own">Przyjadę własnym transportem</option>
                      <option value="need">Potrzebuję pomocy z transportem</option>
                      <option value="carpool">Chętnie zabiorę kogoś po drodze</option>
                    </select>
                  </div>
                </>
              )}

              {/* Comments */}
              <div>
                <label className="block font-serif text-graphite font-medium mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Uwagi lub życzenia
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-chocolate/20 bg-cream font-serif text-graphite focus:outline-none focus:border-cranberry focus:ring-2 focus:ring-cranberry/20 transition-colors resize-none"
                  placeholder="Cokolwiek chcesz nam przekazać..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-cranberry text-cream font-serif text-lg rounded-full hover:bg-cranberry/90 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Wyślij potwierdzenie
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Alternative */}
      <section className="py-16 px-4 bg-sage/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-handwriting text-3xl text-cranberry mb-4">
            Wolisz zadzwonić?
          </h2>
          <p className="font-serif text-graphite/70 mb-6">
            Możesz też potwierdzić obecność telefonicznie:
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

function SuccessMessage() {
  return (
    <div className="text-center py-12">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sage/30 flex items-center justify-center">
        <CheckCircle className="w-10 h-10 text-sage" />
      </div>
      <h2 className="font-handwriting text-4xl text-cranberry mb-4">
        Dziękujemy!
      </h2>
      <p className="font-serif text-xl text-graphite/80 mb-2">
        Twoje potwierdzenie zostało wysłane.
      </p>
      <p className="font-serif text-graphite/60">
        Do zobaczenia na naszym ślubie!
      </p>
      
      <div className="flex items-center justify-center gap-3 mt-8">
        <Heart className="w-4 h-4 text-cranberry/50 fill-cranberry/50" />
        <Heart className="w-6 h-6 text-cranberry fill-cranberry" />
        <Heart className="w-4 h-4 text-cranberry/50 fill-cranberry/50" />
      </div>
    </div>
  );
}
