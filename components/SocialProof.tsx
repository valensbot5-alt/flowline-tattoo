"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  { name: "Ana M.", action: "je rezervirala termin", time: "prije 12 min" },
  { name: "Marko K.", action: "je završio tetovažu", time: "prije 1 sat" },
  { name: "Ivana P.", action: "je rezervirala konzultaciju", time: "prije 3 sata" },
  { name: "Luka D.", action: "je ostavio recenziju", time: "prije 5 sati" },
  { name: "Sara B.", action: "je rezervirala termin", time: "danas" },
];

export function SocialProof() {
  const [current, setCurrent] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay 10s prije prvog prikaza
    const initialDelay = setTimeout(() => {
      setCurrent(0);
      setVisible(true);
    }, 10000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (current === null) return;

    // Sakrij nakon 4s
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    // Prikaži sljedeći nakon 20s
    const nextTimer = setTimeout(() => {
      const next = (current + 1) % MESSAGES.length;
      setCurrent(next);
      setVisible(true);
    }, 20000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [current]);

  if (current === null) return null;

  const msg = MESSAGES[current];

  return (
    <div
      className={`fixed bottom-20 left-4 z-30 max-w-xs rounded-sm border border-white/10 bg-primary/95 p-3 shadow-lg backdrop-blur-sm transition-all duration-500 lg:bottom-6 ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
          {msg.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm text-foreground">
            <span className="font-bold">{msg.name}</span> {msg.action}
          </p>
          <p className="text-xs text-foreground/50">{msg.time}</p>
        </div>
      </div>
    </div>
  );
}
