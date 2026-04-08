import { useState, useEffect } from 'react';

const WEDDING = new Date('2026-04-11T15:30:00');

function calcDiff() {
  const diff = Math.max(0, WEDDING.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
  };
}

export default function CountdownSection() {
  const [t, setT] = useState(calcDiff);

  useEffect(() => {
    const id = setInterval(() => setT(calcDiff()), 60_000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { value: t.days, label: 'dni' },
    { value: t.hours, label: 'godzin' },
    { value: t.minutes, label: 'minut' },
  ];

  return (
    <section className="py-20 px-4 bg-sage/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-hand text-4xl sm:text-5xl text-cranberry mb-10">Do slubu pozostalo</h2>
        <div className="flex justify-center gap-4 sm:gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-cream rounded-2xl p-6 sm:p-8 min-w-[100px] shadow-sm border border-sage/30">
              <p className="font-serif text-4xl sm:text-5xl text-cranberry font-semibold tabular-nums">
                {item.value}
              </p>
              <p className="font-serif text-graphite/60 mt-1 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
