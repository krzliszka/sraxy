import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import HeroSection from '../sections/HeroSection';
import CountdownSection from '../sections/CountdownSection';
import StorySection from '../sections/StorySection';
import DetailsSection from '../sections/DetailsSection';
import GiftsSection from '../sections/GiftsSection';
import SeatingSection from '../sections/SeatingSection';
import RoomsSection from '../sections/RoomsSection';
import PhotoUploadSection from '../sections/PhotoUploadSection';

const PASSWORD = 'Megera';

export default function HomePage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');

  useEffect(() => {
    if (localStorage.getItem('wedding_auth') === PASSWORD) setAuthed(true);
  }, []);

  const login = (e) => {
    e.preventDefault();
    if (pw === PASSWORD) {
      localStorage.setItem('wedding_auth', PASSWORD);
      setAuthed(true);
      setErr('');
    } else {
      setErr('Niepoprawne hasło. Spróbuj ponownie.');
    }
  };

  if (!authed) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream stripe-pattern">
        <div className="text-center px-4 w-full max-w-sm">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-chocolate/40" />
            <span className="text-chocolate/60 text-xs tracking-[0.3em] uppercase font-serif">Pobieramy się</span>
            <Sparkles className="w-4 h-4 text-chocolate/40" />
          </div>
          <h1 className="font-hand text-6xl sm:text-7xl text-cranberry mb-8">Paula & Artur</h1>
          <form onSubmit={login} className="flex flex-col items-center gap-4">
            <input
              type="password"
              className="w-full px-6 py-3 rounded-full border-2 border-chocolate/20 text-center text-lg font-serif focus:outline-none focus:border-cranberry/50 bg-cream text-chocolate shadow"
              placeholder="Hasło dostępu"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              autoFocus
            />
            <button type="submit" className="w-full px-8 py-3 bg-cranberry text-cream font-serif text-lg rounded-full hover:bg-cranberry/90 transition-colors shadow-lg">
              Wejdź
            </button>
            {err && <p className="text-red-600 text-sm font-serif">{err}</p>}
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeroSection />
      <CountdownSection />
      <StorySection />
      <DetailsSection />
      <GiftsSection />
      <SeatingSection />
      <RoomsSection />
      <PhotoUploadSection />
    </>
  );
}
