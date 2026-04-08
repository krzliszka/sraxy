import { useState } from 'react';
import { Camera, Heart, X, ChevronLeft, ChevronRight, Upload, ExternalLink } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

/*
 * Photo upload strategy:
 * Option A (recommended): Google Forms with file upload -> Google Drive folder
 *   - Create a Google Form with a "File upload" question
 *   - Set it to accept images only
 *   - Responses auto-save to a Google Drive folder
 *   - Link to the form below
 *
 * Option B: Direct Google Drive upload via Google Apps Script
 *   - Requires a deployed Apps Script that accepts file uploads
 *   - More complex but allows in-page upload UI
 *
 * Option C: Third-party (e.g., Uploadcare, Cloudinary)
 *   - Polished UX but adds a dependency
 *
 * Current implementation: Links to a Google Form (simplest, most reliable).
 */

const GOOGLE_FORM_URL = ''; // Paste your Google Form URL here

const PHOTOS = [
  { id: 1, src: '/photos/1.jpg', alt: 'Paula i Artur - zdjecie 1' },
  { id: 2, src: '/photos/2.jpg', alt: 'Paula i Artur - zdjecie 2' },
  { id: 3, src: '/photos/3.jpg', alt: 'Paula i Artur - zdjecie 3' },
  { id: 4, src: '/photos/4.jpg', alt: 'Paula i Artur - zdjecie 4' },
  { id: 5, src: '/photos/5.jpg', alt: 'Paula i Artur - zdjecie 5' },
  { id: 6, src: '/photos/6.jpg', alt: 'Paula i Artur - zdjecie 6' },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null);

  const go = (dir) => {
    const idx = PHOTOS.findIndex((p) => p.id === lightbox.id);
    const next = (idx + dir + PHOTOS.length) % PHOTOS.length;
    setLightbox(PHOTOS[next]);
  };

  return (
    <section id="galeria" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="Wspomnienia" title="Galeria" subtitle="Chwile, ktore chcemy z Wami dzielic." />

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {PHOTOS.map((photo) => (
            <button
              key={photo.id}
              onClick={() => setLightbox(photo)}
              className="group relative aspect-square bg-sage/15 rounded-2xl overflow-hidden border border-chocolate/10 hover:border-cranberry/30 transition-colors"
            >
              {/* Placeholder (remove once real photos are added) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-10 h-10 text-chocolate/20 mx-auto mb-2" />
                  <p className="font-serif text-xs text-chocolate/30">Zdjecie {photo.id}</p>
                </div>
              </div>

              {/* Uncomment when real photos exist:
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              */}

              <div className="absolute inset-0 bg-cranberry/0 group-hover:bg-cranberry/10 transition-colors flex items-center justify-center">
                <Heart className="w-8 h-8 text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>

        {/* Upload CTA */}
        <div className="max-w-2xl mx-auto text-center bg-sage/15 rounded-3xl p-8">
          <h3 className="font-hand text-4xl text-cranberry mb-4">Podzielcie sie z nami</h3>
          <p className="font-serif text-graphite/60 mb-6">
            Po slubie chetnie zobaczymy Wasze zdjecia z tego dnia!
          </p>

          {GOOGLE_FORM_URL ? (
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cranberry text-cream font-serif text-lg rounded-full hover:bg-cranberry/90 transition-colors shadow-lg"
            >
              <Upload className="w-5 h-5" />
              Przeslij zdjecia
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <div className="bg-cream rounded-2xl p-8 border-2 border-dashed border-chocolate/20">
              <Upload className="w-10 h-10 text-chocolate/30 mx-auto mb-3" />
              <p className="font-serif text-graphite/50 text-sm mb-2">
                Funkcja przesylania zdjec bedzie dostepna po slubie
              </p>
              <p className="font-serif text-xs text-graphite/30">#PaulaIArtur2026</p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-graphite/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 p-2 text-cream/70 hover:text-cream">
            <X className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); go(-1); }} className="absolute left-4 p-2 text-cream/70 hover:text-cream">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); go(1); }} className="absolute right-4 p-2 text-cream/70 hover:text-cream">
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="bg-sage/20 rounded-2xl p-16 text-center" onClick={(e) => e.stopPropagation()}>
            <Camera className="w-16 h-16 text-cream/25 mx-auto mb-3" />
            <p className="font-serif text-cream/40">Zdjecie {lightbox.id}</p>
          </div>
        </div>
      )}
    </section>
  );
}
