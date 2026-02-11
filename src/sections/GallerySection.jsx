import { useState } from 'react';
import { Camera, Heart, Sparkles, X, ChevronLeft, ChevronRight, Upload } from 'lucide-react';

// Placeholder photos - INSTRUKCJA:
// 1. Dodaj zdjęcia do folderu public/photos/ (np. 1.jpg, 2.jpg, 3.jpg)
// 2. Zaktualizuj tę tablicę swoimi zdjęciami:
const photos = [
  { id: 1, src: '/photos/1.jpg', alt: 'Paula i Artur - zdjęcie 1' },
  { id: 2, src: '/photos/2.jpg', alt: 'Paula i Artur - zdjęcie 2' },
  { id: 3, src: '/photos/3.jpg', alt: 'Paula i Artur - zdjęcie 3' },
  { id: 4, src: '/photos/4.jpg', alt: 'Paula i Artur - zdjęcie 4' },
  { id: 5, src: '/photos/5.jpg', alt: 'Paula i Artur - zdjęcie 5' },
  { id: 6, src: '/photos/6.jpg', alt: 'Paula i Artur - zdjęcie 6' },
];
// 3. Odkomentuj tag <img> poniżej (linia ~85)
// 4. Zakomentuj lub usuń placeholder div

export default function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openLightbox = (photo) => setSelectedPhoto(photo);
  const closeLightbox = () => setSelectedPhoto(null);

  const goToPrevious = () => {
    const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
    const previousIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    setSelectedPhoto(photos[previousIndex]);
  };

  const goToNext = () => {
    const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    setSelectedPhoto(photos[nextIndex]);
  };

  return (
    <section id="galeria" className="py-20 px-4 scroll-mt-20">
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-chocolate/50" />
          <span className="text-chocolate/70 text-sm tracking-[0.3em] uppercase font-serif">
            Wspomnienia
          </span>
          <Sparkles className="w-4 h-4 text-chocolate/50" />
        </div>
        
        <h2 className="font-handwriting text-5xl sm:text-6xl md:text-7xl text-cranberry mb-6">
          Galeria
        </h2>
        
        <p className="font-serif text-xl text-graphite/80 leading-relaxed max-w-2xl mx-auto">
          Chwile, które chcemy z Wami dzielić.
        </p>
      </div>
          {photos.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((photo) => (
                <button
                  key={LACEHOLDER - Pokaże się dopóki nie dodasz prawdziwych zdjęć */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-12 h-12 text-chocolate/30 mx-auto mb-2" />
                      <p className="font-serif text-sm text-chocolate/40">Zdjęcie {photo.id}</p>
                      <p className="font-serif text-xs text-chocolate/30 mt-1 px-4">Dodaj {photo.src}</p>
                    </div>
                  </div>
                  
                  {/* ODKOMENTUJ to gdy dodasz zdjęcia do public/photos/:
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => e.target.style.display = 'none'}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  */}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-cranberry/0 group-hover:bg-cranberry/10 transition-colors flex items-center justify-center">
                    <Heart className="w-8 h-8 text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-chocolate/30 mx-auto mb-4" />
              <p className="font-serif text-xl text-graphite/60">
                Zdjęcia już niedługo...
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Upload CTA */}
      <div className="max-w-2xl mx-auto text-center bg-sage/20 rounded-3xl p-8">
        <h3 className="font-handwriting text-4xl text-cranberry mb-4">
          Podzielcie się z nami
        </h3>
        <p className="font-serif text-graphite/70 mb-8">
          Po ślubie chętnie zobaczymy Wasze zdjęcia z tego dnia!
          Możecie je przesłać tutaj lub oznaczyć nas w social mediach.
        </p>
        
        <div className="bg-cream rounded-2xl p-8 border-2 border-dashed border-chocolate/30">
          <Upload className="w-12 h-12 text-chocolate/40 mx-auto mb-4" />
          <p className="font-serif text-graphite/60 mb-4">
            Funkcja przesyłania zdjęć będzie dostępna po ślubie
          </p>
          <p className="font-serif text-sm text-graphite/40">
            #PaulaIArtur2026
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-graphite/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-cream/70 hover:text-cream transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={goToPrevious}
            className="absolute left-4 p-2 text-cream/70 hover:text-cream transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 p-2 text-cream/70 hover:text-cream transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <div className="max-w-4xl max-h-[80vh] flex items-center justify-center">
            {/* Placeholder */}
            <div className="bg-sage/20 rounded-2xl p-20 text-center">
              <Camera className="w-20 h-20 text-cream/30 mx-auto mb-4" />
              <p className="font-serif text-cream/50">Zdjęcie {selectedPhoto.id}</p>
            </div>
            
            {/* Uncomment for real images:
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            */}
          </div>
        </div>
      )}
    </section>
  );
}
