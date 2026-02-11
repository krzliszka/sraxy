import { useState } from 'react';
import { Camera, Heart, Sparkles, X, ChevronLeft, ChevronRight, Upload } from 'lucide-react';

// Placeholder photos - replace with real ones
const photos = [
  { id: 1, src: '/photos/photo1.jpg', alt: 'Nasze zdjęcie 1' },
  { id: 2, src: '/photos/photo2.jpg', alt: 'Nasze zdjęcie 2' },
  { id: 3, src: '/photos/photo3.jpg', alt: 'Nasze zdjęcie 3' },
  { id: 4, src: '/photos/photo4.jpg', alt: 'Nasze zdjęcie 4' },
  { id: 5, src: '/photos/photo5.jpg', alt: 'Nasze zdjęcie 5' },
  { id: 6, src: '/photos/photo6.jpg', alt: 'Nasze zdjęcie 6' },
];

export default function GalleryPage() {
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
    <div>
      {/* Hero */}
      <section className="py-20 px-4 bg-sage/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-chocolate/50" />
            <span className="text-chocolate/70 text-sm tracking-[0.3em] uppercase font-serif">
              Wspomnienia
            </span>
            <Sparkles className="w-4 h-4 text-chocolate/50" />
          </div>
          
          <h1 className="font-handwriting text-5xl sm:text-6xl md:text-7xl text-cranberry mb-6">
            Galeria
          </h1>
          
          <p className="font-serif text-xl text-graphite/80 leading-relaxed max-w-2xl mx-auto">
            Chwile, które chcemy z Wami dzielić.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {photos.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((photo) => (
                <button
                  key={photo.id}
                  onClick={() => openLightbox(photo)}
                  className="group relative aspect-square bg-sage/20 rounded-2xl overflow-hidden border border-chocolate/10 hover:border-cranberry/30 transition-colors"
                >
                  {/* Placeholder - replace with real images */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-12 h-12 text-chocolate/30 mx-auto mb-2" />
                      <p className="font-serif text-sm text-chocolate/40">Zdjęcie {photo.id}</p>
                    </div>
                  </div>
                  
                  {/* Uncomment when you have real photos:
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
      </section>

      {/* Upload CTA */}
      <section className="py-16 px-4 bg-sage/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-handwriting text-4xl text-cranberry mb-4">
            Podzielcie się z nami
          </h2>
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
      </section>

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
    </div>
  );
}
