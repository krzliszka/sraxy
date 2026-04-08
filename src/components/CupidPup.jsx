/**
 * Cupid Pup – winged dog with arrow, inspired by the wedding invitation motif.
 * A playful pomeranian-like dog with small angel wings and a cupid arrow.
 *
 * Props:
 *  - flip: mirror horizontally (for left-facing version)
 *  - className: additional classes (size, color)
 */
export default function CupidPup({ flip, className = '' }) {
  return (
    <svg
      viewBox="0 0 120 100"
      className={`${className} ${flip ? '-scale-x-100' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Body */}
      <ellipse cx="55" cy="62" rx="24" ry="18" />

      {/* Fluffy chest fur */}
      <path d="M35 55 Q32 50 36 46 Q40 42 38 48" />
      <path d="M37 58 Q33 54 37 50" />

      {/* Head */}
      <circle cx="32" cy="38" r="14" />

      {/* Ear left */}
      <path d="M22 30 Q16 18 24 24" />
      {/* Ear right */}
      <path d="M38 28 Q42 16 44 26" />

      {/* Eye */}
      <circle cx="28" cy="35" r="2.5" fill="currentColor" />
      {/* Eye shine */}
      <circle cx="27" cy="34" r="0.8" fill="white" stroke="none" />

      {/* Nose */}
      <ellipse cx="22" cy="40" rx="2.5" ry="2" fill="currentColor" />

      {/* Mouth / smile */}
      <path d="M22 42 Q25 46 29 43" />

      {/* Tongue */}
      <path d="M26 43 Q27 47 25 47 Q23 47 24 44" fill="currentColor" opacity="0.3" />

      {/* Fluffy tail */}
      <path d="M78 55 Q88 42 82 35 Q78 30 84 28 Q90 26 86 34" />

      {/* Front legs */}
      <path d="M40 76 L36 90 Q35 93 38 93" />
      <path d="M50 78 L48 90 Q47 93 50 93" />

      {/* Back legs */}
      <path d="M65 76 L63 90 Q62 93 65 93" />
      <path d="M72 74 L76 88 Q77 91 74 91" />

      {/* === WINGS === */}
      {/* Wing back (larger) */}
      <path
        d="M50 44 Q42 22 58 18 Q72 14 68 28 Q66 34 72 26 Q80 16 78 30 Q76 38 62 42"
        strokeWidth="1.5"
        opacity="0.5"
      />
      {/* Wing front (smaller) */}
      <path
        d="M52 48 Q48 32 60 28 Q68 26 66 34 Q64 38 70 32 Q76 26 72 38 Q70 44 60 46"
        strokeWidth="1.5"
      />

      {/* Wing feather details */}
      <path d="M58 22 Q60 26 56 30" strokeWidth="1" opacity="0.4" />
      <path d="M66 20 Q68 24 64 28" strokeWidth="1" opacity="0.4" />

      {/* === CUPID ARROW === */}
      {/* Arrow shaft */}
      <line x1="8" y1="18" x2="48" y2="52" strokeWidth="1.2" opacity="0.6" />
      {/* Arrowhead */}
      <path d="M6 16 L8 18 L4 20" strokeWidth="1.5" opacity="0.7" />
      <path d="M6 16 L10 14" strokeWidth="1.5" opacity="0.7" />
      {/* Arrow fletching */}
      <path d="M46 50 L52 48 M46 50 L48 56" strokeWidth="1.2" opacity="0.5" />

      {/* Small hearts floating */}
      <path d="M85 18 Q87 14 89 18 Q91 14 93 18 Q93 22 89 25 Q85 22 85 18" fill="currentColor" opacity="0.15" stroke="none" />
      <path d="M95 30 Q96.5 27 98 30 Q99.5 27 101 30 Q101 33 98 35 Q95 33 95 30" fill="currentColor" opacity="0.1" stroke="none" />
      <path d="M14 8 Q15.5 5 17 8 Q18.5 5 20 8 Q20 11 17 13 Q14 11 14 8" fill="currentColor" opacity="0.12" stroke="none" />
    </svg>
  );
}
