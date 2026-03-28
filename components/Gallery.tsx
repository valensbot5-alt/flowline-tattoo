"use client";

import { useState } from "react";
import Image from "next/image";
import { STYLES } from "@/lib/constants";
import { Lightbox } from "@/components/Lightbox";

const GALLERY_ITEMS = [
  { id: 1, src: "/images/gallery/tattoo-1.jpg", style: "neo-traditional", alt: "Neo traditional dizajn — lubanja, zmija i cvijeće" },
  { id: 2, src: "/images/gallery/tattoo-2.jpg", style: "fineline", alt: "Fineline lettering — No Rain No Flowers s cvijećem" },
  { id: 3, src: "/images/gallery/tattoo-3.jpg", style: "blackwork", alt: "Custom bodež s okom — skica i practice skin" },
  { id: 4, src: "/images/gallery/tattoo-4.jpg", style: "blackwork", alt: "Blackwork cartoon ruka s tattoo mašinom" },
  { id: 5, src: "/images/gallery/tattoo-5.jpg", style: "realistic", alt: "Realistic flash sheet — lav, bodež, dijamant, kolibri" },
  { id: 6, src: "/images/gallery/tattoo-6.jpg", style: "realistic", alt: "Realistic samuraj lubanja na practice skinu" },
  { id: 7, src: "/images/gallery/tattoo-7.jpg", style: "realistic", alt: "Realistic samuraj lubanja — drugi kut" },
  { id: 8, src: "/images/gallery/tattoo-8.jpg", style: "realistic", alt: "Flash sheet — dijamant, kolibri, šah figura, bodež" },
  { id: 9, src: "/images/gallery/tattoo-9.jpg", style: "realistic", alt: "Realistic lav portret na practice skinu" },
  { id: 10, src: "/images/gallery/tattoo-10.jpg", style: "blackwork", alt: "Blackwork linework — Davidov pogled, dizajn i tetovaža" },
  { id: 11, src: "/images/gallery/tattoo-11.jpg", style: "fineline", alt: "Fineline leptiri s mjesecom i srcem — matching tattoo" },
  { id: 12, src: "/images/gallery/tattoo-12.jpg", style: "realistic", alt: "Realistic tigar portret na bedru" },
];

export function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.style === filter);

  return (
    <>
      {/* Filter */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`rounded-sm px-4 py-2 text-sm font-medium transition-colors min-h-[44px] ${
            filter === "all"
              ? "bg-secondary text-primary"
              : "border border-white/10 text-foreground/70 hover:text-secondary"
          }`}
        >
          Svi
        </button>
        {STYLES.map((style) => (
          <button
            key={style.id}
            type="button"
            onClick={() => setFilter(style.id)}
            className={`rounded-sm px-4 py-2 text-sm font-medium transition-colors min-h-[44px] ${
              filter === style.id
                ? "bg-secondary text-primary"
                : "border border-white/10 text-foreground/70 hover:text-secondary"
            }`}
          >
            {style.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-sm bg-primary focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading={index < 4 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-secondary/0 transition-colors group-hover:bg-secondary/20" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-xs font-medium text-white">
                {STYLES.find((s) => s.id === item.style)?.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-foreground/50">
          Nema radova za odabrani stil. Probaj drugi filter.
        </p>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
