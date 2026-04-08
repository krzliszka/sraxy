import { useState, useRef } from 'react';
import { Camera, Heart, X, ChevronLeft, ChevronRight, Upload, Image, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

/*
 * Photo upload via Google Apps Script -> Google Drive
 *
 * Deploy an Apps Script web app with doPost(e) that:
 *   1. Receives base64 image data + guest name
 *   2. Creates a file in a shared Google Drive folder
 *   3. Returns { success: true }
 *
 * Example Apps Script code:
 *
 * function doPost(e) {
 *   var data = JSON.parse(e.postData.contents);
 *   var folder = DriveApp.getFolderById('YOUR_FOLDER_ID');
 *   var blob = Utilities.newBlob(
 *     Utilities.base64Decode(data.image),
 *     data.mimeType,
 *     data.fileName
 *   );
 *   folder.createFile(blob);
 *   return ContentService.createTextOutput(
 *     JSON.stringify({ success: true })
 *   ).setMimeType(ContentService.MimeType.JSON);
 * }
 */

// Paste your deployed Google Apps Script URL here:
const UPLOAD_SCRIPT_URL = '';

const PHOTOS = [
  { id: 1, src: '/photos/1.jpg', alt: 'Paula i Artur \u2013 zdj\u0119cie 1' },
  { id: 2, src: '/photos/2.jpg', alt: 'Paula i Artur \u2013 zdj\u0119cie 2' },
  { id: 3, src: '/photos/3.jpg', alt: 'Paula i Artur \u2013 zdj\u0119cie 3' },
  { id: 4, src: '/photos/4.jpg', alt: 'Paula i Artur \u2013 zdj\u0119cie 4' },
  { id: 5, src: '/photos/5.jpg', alt: 'Paula i Artur \u2013 zdj\u0119cie 5' },
  { id: 6, src: '/photos/6.jpg', alt: 'Paula i Artur \u2013 zdj\u0119cie 6' },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('idle'); // idle | uploading | success | error
  const [uploadCount, setUploadCount] = useState(0);
  const fileRef = useRef(null);

  const go = (dir) => {
    const idx = PHOTOS.findIndex((p) => p.id === lightbox.id);
    const next = (idx + dir + PHOTOS.length) % PHOTOS.length;
    setLightbox(PHOTOS[next]);
  };

  const handleUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    setUploadStatus('uploading');
    setUploadCount(files.length);

    try {
      for (const file of files) {
        const reader = new FileReader();
        const base64 = await new Promise((resolve, reject) => {
          reader.onload = () => resolve(reader.result.split(',')[1]);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

        await fetch(UPLOAD_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            image: base64,
            mimeType: file.type,
            fileName: `wedding_${Date.now()}_${file.name}`,
          }),
        });
      }
      setUploadStatus('success');
    } catch {
      setUploadStatus('error');
    }

    // Reset file input
    if (fileRef.current) fileRef.current.value = '';
  };

  return (
    <section id="galeria" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Wspomnienia"
          title="Galeria"
          subtitle="Chwile, kt\u00f3re chcemy z Wami dzieli\u0107."
        />

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {PHOTOS.map((photo) => (
            <button
              key={photo.id}
              onClick={() => setLightbox(photo)}
              className="group relative aspect-square bg-sage/15 rounded-2xl overflow-hidden border border-chocolate/10 hover:border-cranberry/30 transition-colors"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-10 h-10 text-chocolate/20 mx-auto mb-2" />
                  <p className="font-serif text-xs text-chocolate/30">Zdj\u0119cie {photo.id}</p>
                </div>
              </div>
              {/*
                Uncomment when real photos exist:
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              */}
              <div className="absolute inset-0 bg-cranberry/0 group-hover:bg-cranberry/10 transition-colors flex items-center justify-center">
                <Heart className="w-8 h-8 text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>

        {/* ============ BIG UPLOAD CTA ============ */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-sage/15 rounded-3xl p-8 sm:p-12 text-center border-2 border-sage/25">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cranberry/10 flex items-center justify-center">
              <Camera className="w-10 h-10 text-cranberry" />
            </div>

            <h3 className="font-hand text-4xl sm:text-5xl text-cranberry mb-4">
              Podzielcie si\u0119 z nami!
            </h3>
            <p className="font-serif text-lg text-graphite/70 mb-8 max-w-md mx-auto">
              Macie zdj\u0119cia z naszego \u015blubu? Prze\u015blijcie je \u2013 ch\u0119tnie zobaczymy ten dzie\u0144 Waszymi oczami!
            </p>

            {uploadStatus === 'success' ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-sage">
                  <CheckCircle className="w-8 h-8" />
                  <span className="font-serif text-xl font-medium">Dzi\u0119kujemy!</span>
                </div>
                <p className="font-serif text-graphite/60">
                  {uploadCount > 1
                    ? `Przes\u0142ano ${uploadCount} zdj\u0119\u0107. Dzi\u0119kujemy!`
                    : 'Zdj\u0119cie zosta\u0142o przes\u0142ane. Dzi\u0119kujemy!'}
                </p>
                <button
                  onClick={() => setUploadStatus('idle')}
                  className="font-serif text-cranberry underline underline-offset-4 hover:text-cranberry/70 transition-colors"
                >
                  Wy\u015blij wi\u0119cej
                </button>
              </div>
            ) : uploadStatus === 'error' ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-red-500">
                  <AlertCircle className="w-8 h-8" />
                  <span className="font-serif text-lg">Wyst\u0105pi\u0142 b\u0142\u0105d</span>
                </div>
                <p className="font-serif text-graphite/60 text-sm">Spr\u00f3buj ponownie lub wy\u015blij zdj\u0119cia na nasz numer.</p>
                <button
                  onClick={() => setUploadStatus('idle')}
                  className="font-serif text-cranberry underline underline-offset-4 hover:text-cranberry/70 transition-colors"
                >
                  Spr\u00f3buj ponownie
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Hidden file input */}
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleUpload}
                  className="hidden"
                  id="photo-upload"
                />

                {UPLOAD_SCRIPT_URL ? (
                  <label
                    htmlFor="photo-upload"
                    className={`
                      inline-flex items-center justify-center gap-3 px-10 py-5
                      bg-cranberry text-cream font-serif text-xl rounded-full
                      hover:bg-cranberry/90 transition-all shadow-lg hover:shadow-xl
                      cursor-pointer active:scale-95
                      ${uploadStatus === 'uploading' ? 'opacity-60 pointer-events-none' : ''}
                    `}
                  >
                    {uploadStatus === 'uploading' ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Wysy\u0142anie {uploadCount} zdj\u0119\u0107...
                      </>
                    ) : (
                      <>
                        <Upload className="w-6 h-6" />
                        Prze\u015blij zdj\u0119cia
                      </>
                    )}
                  </label>
                ) : (
                  <div className="bg-cream rounded-2xl p-8 border-2 border-dashed border-chocolate/20">
                    <Upload className="w-10 h-10 text-chocolate/30 mx-auto mb-3" />
                    <p className="font-serif text-graphite/50 text-sm mb-2">
                      Funkcja przesy\u0142ania zdj\u0119\u0107 b\u0119dzie dost\u0119pna po \u015blubie
                    </p>
                    <p className="font-serif text-xs text-graphite/30">#PaulaIArtur2026</p>
                  </div>
                )}

                <p className="font-serif text-graphite/40 text-sm">
                  Mo\u017cesz wybra\u0107 wiele zdj\u0119\u0107 naraz &middot; Akceptujemy JPG, PNG, HEIC
                </p>
              </div>
            )}
          </div>
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
            <p className="font-serif text-cream/40">Zdj\u0119cie {lightbox.id}</p>
          </div>
        </div>
      )}
    </section>
  );
}
