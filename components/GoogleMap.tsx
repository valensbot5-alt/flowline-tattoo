"use client";

import { useEffect, useRef, useState } from "react";
import { STUDIO } from "@/lib/constants";

export function GoogleMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="aspect-video w-full overflow-hidden rounded-sm bg-primary">
      {isVisible ? (
        <iframe
          src={STUDIO.maps.embed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${STUDIO.name} lokacija na Google Maps`}
        />
      ) : (
        <div className="flex h-full items-center justify-center text-foreground/30">
          <span className="text-sm">Učitavanje karte...</span>
        </div>
      )}
    </div>
  );
}
