"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { STUDIO } from "@/lib/constants";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY > 600);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-primary/95 backdrop-blur-sm transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <a
          href={`tel:${STUDIO.phone.replace(/\s/g, "")}`}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-background text-secondary"
          aria-label="Nazovi"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
        <Link
          href="/booking"
          className="flex h-12 flex-1 items-center justify-center rounded-sm bg-secondary text-sm font-bold text-primary transition-colors hover:bg-accent"
        >
          Rezerviraj termin
        </Link>
      </div>
    </div>
  );
}
