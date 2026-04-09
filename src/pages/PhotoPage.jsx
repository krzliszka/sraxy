import { Heart, X } from 'lucide-react';
import PhotoUploadSection from '../sections/PhotoUploadSection';

export default function PhotoPage() {
  const goHome = () => {
    window.location.href = '/#/';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Close button */}
      <button
        onClick={goHome}
        className="fixed top-6 right-6 z-50 w-10 h-10 flex items-center justify-center bg-cranberry/90 hover:bg-cranberry text-cream rounded-full transition-colors shadow-lg"
        title="Wróć do strony głównej"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Header */}
      <div className="pt-16 pb-4 px-4 text-center">
        <p className="font-hand text-3xl text-cranberry mb-1">Paula & Artur</p>
        <p className="font-serif text-sm text-graphite/50">11.04.2026</p>
      </div>

      {/* Photo upload section */}
      <div className="flex-1">
        <PhotoUploadSection />
      </div>

      {/* Mini footer */}
      <footer className="py-8 px-4 text-center border-t border-chocolate/10">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Heart className="w-4 h-4 text-cranberry/30 fill-cranberry/30" />
          <Heart className="w-5 h-5 text-cranberry/50 fill-cranberry/50" />
          <Heart className="w-4 h-4 text-cranberry/30 fill-cranberry/30" />
        </div>
        <button
          onClick={goHome}
          className="font-serif text-sm text-graphite/40 hover:text-cranberry transition-colors"
        >
          Wróć do strony głównej
        </button>
      </footer>
    </div>
  );
}
