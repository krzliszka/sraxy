import { Sparkles } from 'lucide-react';

export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="text-center mb-14">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-chocolate/60 text-xs tracking-[0.3em] uppercase font-serif">
          {tag}
        </span>
      </div>
      <h2 className="font-hand text-5xl sm:text-6xl md:text-7xl text-cranberry mb-4">{title}</h2>
      {subtitle && (
        <p className="font-serif text-lg sm:text-xl text-graphite/70 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
