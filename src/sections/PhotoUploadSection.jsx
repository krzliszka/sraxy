import { useState, useRef } from 'react';
import { Camera, Upload, CheckCircle, AlertCircle, Loader2, Heart, ImagePlus } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

/*
 * ═══════════════════════════════════════════════════════════════
 *  KONFIGURACJA GOOGLE APPS SCRIPT  –  INSTRUKCJA
 * ═══════════════════════════════════════════════════════════════
 *
 *  1. Otwórz https://script.google.com i utwórz nowy projekt
 *
 *  2. Wklej poniższy kod do pliku Code.gs:
 *
 *     ─────────────────────────────────────────────────────────
 *     function doPost(e) {
 *       try {
 *         var data = JSON.parse(e.postData.contents);
 *
 *         // ID folderu na Google Drive – skopiuj z URL folderu
 *         // https://drive.google.com/drive/folders/TWOJ_FOLDER_ID
 *         var folderId = 'TWOJ_FOLDER_ID';
 *         var folder = DriveApp.getFolderById(folderId);
 *
 *         var blob = Utilities.newBlob(
 *           Utilities.base64Decode(data.image),
 *           data.mimeType || 'image/jpeg',
 *           data.fileName || 'wedding_photo_' + new Date().getTime() + '.jpg'
 *         );
 *
 *         var file = folder.createFile(blob);
 *
 *         return ContentService
 *           .createTextOutput(JSON.stringify({
 *             success: true,
 *             fileId: file.getId(),
 *             fileName: file.getName()
 *           }))
 *           .setMimeType(ContentService.MimeType.JSON);
 *
 *       } catch (error) {
 *         return ContentService
 *           .createTextOutput(JSON.stringify({
 *             success: false,
 *             error: error.toString()
 *           }))
 *           .setMimeType(ContentService.MimeType.JSON);
 *       }
 *     }
 *     ─────────────────────────────────────────────────────────
 *
 *  3. Zamień 'TWOJ_FOLDER_ID' na prawdziwy ID folderu z Google Drive
 *     (utwórz folder np. "Wesele - Zdjęcia gości" i skopiuj ID z URL)
 *
 *  4. Kliknij "Wdróż" > "Nowe wdrożenie"
 *     - Typ: "Aplikacja internetowa"
 *     - Wykonaj jako: "Ja" (Twoje konto)
 *     - Kto ma dostęp: "Wszyscy"
 *     - Kliknij "Wdróż"
 *
 *  5. Skopiuj URL wdrożenia i wklej poniżej jako UPLOAD_SCRIPT_URL
 *
 *  6. Przy pierwszym wdrożeniu Google poprosi o autoryzację –
 *     kliknij "Zaawansowane" > "Przejdź do [nazwa projektu]" > "Zezwól"
 *
 *  GOTOWE! Zdjęcia przesłane przez gości trafią do Twojego folderu.
 *
 *  LIMITY:
 *  - Max rozmiar pliku: ~50MB (limit Apps Script)
 *  - Dzienny limit: ~90 minut czasu wykonania
 *  - Dla typowych zdjęć z telefonu (3-8MB) to wystarczy na setki zdjęć
 *
 * ═══════════════════════════════════════════════════════════════
 */

// ↓↓↓ WKLEJ TUTAJ URL SWOJEGO GOOGLE APPS SCRIPT ↓↓↓
const UPLOAD_SCRIPT_URL = '';
// ↑↑↑ np. 'https://script.google.com/macros/s/AKfycb.../exec' ↑↑↑

export default function PhotoUploadSection() {
  const [status, setStatus] = useState('idle'); // idle | uploading | success | error
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const fileRef = useRef(null);

  const handleFiles = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    setStatus('uploading');
    setProgress({ current: 0, total: files.length });

    let successCount = 0;

    for (let i = 0; i < files.length; i++) {
      try {
        const file = files[i];
        setProgress({ current: i + 1, total: files.length });

        // Read file as base64
        const base64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result.split(',')[1]);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

        // Send to Google Apps Script
        await fetch(UPLOAD_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            image: base64,
            mimeType: file.type,
            fileName: `wesele_${Date.now()}_${file.name}`,
          }),
        });

        successCount++;
      } catch (err) {
        console.error('Upload error:', err);
      }
    }

    setStatus(successCount > 0 ? 'success' : 'error');
    if (fileRef.current) fileRef.current.value = '';
  };

  const reset = () => {
    setStatus('idle');
    setProgress({ current: 0, total: 0 });
  };

  return (
    <section id="zdjecia" className="py-20 px-4 bg-sage/15 scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          title="Podzielcie się z nami!"
          subtitle="Macie zdjęcia z naszego ślubu? Prześlijcie je – chętnie zobaczymy ten dzień Waszymi oczami!"
        />

        <div className="bg-cream rounded-3xl p-8 sm:p-12 text-center border-2 border-chocolate/10 shadow-sm">
          {/* Icon */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-cranberry/10 flex items-center justify-center">
            <Camera className="w-12 h-12 text-cranberry" />
          </div>

          {/* Hidden file input */}
          <input
            ref={fileRef}
            type="file"
            accept="image/*,video/*"
            multiple
            capture="environment"
            onChange={handleFiles}
            className="hidden"
            id="photo-upload-input"
          />

          {status === 'idle' && (
            <>
              {UPLOAD_SCRIPT_URL ? (
                <div className="space-y-6">
                  {/* Big upload button */}
                  <label
                    htmlFor="photo-upload-input"
                    className="
                      inline-flex items-center justify-center gap-3
                      px-12 py-5 w-full sm:w-auto
                      bg-cranberry text-cream font-serif text-xl
                      rounded-full cursor-pointer
                      hover:bg-cranberry/90 active:scale-[0.98]
                      transition-all shadow-lg hover:shadow-xl
                    "
                  >
                    <ImagePlus className="w-7 h-7" />
                    Prześlij zdjęcia
                  </label>

                  <p className="font-serif text-graphite/40 text-sm">
                    Możesz wybrać wiele zdjęć naraz · JPG, PNG, HEIC
                  </p>
                </div>
              ) : (
                /* Placeholder when script URL is not configured */
                <div className="space-y-4">
                  <div className="p-8 border-2 border-dashed border-chocolate/20 rounded-2xl">
                    <Upload className="w-10 h-10 text-chocolate/25 mx-auto mb-3" />
                    <p className="font-serif text-graphite/50 text-sm">
                      Funkcja przesyłania zdjęć będzie dostępna w dniu ślubu
                    </p>
                  </div>
                  <p className="font-serif text-xs text-graphite/30">#PaulaIArtur2026</p>
                </div>
              )}
            </>
          )}

          {status === 'uploading' && (
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3">
                <Loader2 className="w-8 h-8 text-cranberry animate-spin" />
                <span className="font-serif text-xl text-graphite">
                  Wysyłanie {progress.current}/{progress.total}…
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-chocolate/10 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-cranberry h-full rounded-full transition-all duration-300"
                  style={{ width: `${(progress.current / progress.total) * 100}%` }}
                />
              </div>

              <p className="font-serif text-graphite/50 text-sm">
                Proszę nie zamykać strony…
              </p>
            </div>
          )}

          {status === 'success' && (
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3 text-sage">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-hand text-4xl text-cranberry">Dziękujemy!</h3>
              <p className="font-serif text-graphite/60 text-lg">
                {progress.total === 1
                  ? 'Zdjęcie zostało przesłane.'
                  : `Przesłano ${progress.total} zdjęć.`}
              </p>

              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-8 py-3 bg-cranberry/10 text-cranberry font-serif rounded-full hover:bg-cranberry/20 transition-colors"
              >
                <ImagePlus className="w-5 h-5" />
                Wyślij więcej
              </button>
            </div>
          )}

          {status === 'error' && (
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3 text-red-500">
                <AlertCircle className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-xl text-graphite font-medium">Wystąpił błąd</h3>
              <p className="font-serif text-graphite/60 text-sm">
                Spróbuj ponownie lub wyślij zdjęcia bezpośrednio na nasz numer.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cranberry text-cream font-serif rounded-full hover:bg-cranberry/90 transition-colors"
                >
                  Spróbuj ponownie
                </button>
                <a
                  href="tel:+48504444866"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cream border-2 border-chocolate/20 text-chocolate font-serif rounded-full hover:bg-chocolate/5 transition-colors"
                >
                  Zadzwoń do Pauli
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Hearts decoration */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <Heart className="w-4 h-4 text-cranberry/30 fill-cranberry/30" />
          <Heart className="w-5 h-5 text-cranberry/50 fill-cranberry/50" />
          <Heart className="w-4 h-4 text-cranberry/30 fill-cranberry/30" />
        </div>
      </div>
    </section>
  );
}
