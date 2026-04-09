import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
        onClick={onClose}
        aria-label="Zamknij"
      >
        <X className="w-6 h-6" />
      </button>
      <img
        src={src}
        alt={alt || ''}
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
