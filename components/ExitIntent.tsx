"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function ExitIntent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Samo desktop
    if (window.innerWidth < 1024) return;

    let triggered = false;

    function handleMouseLeave(e: MouseEvent) {
      if (triggered) return;
      if (e.clientY <= 0) {
        // Provjeri sessionStorage da ne pokazujemo svaki put
        if (sessionStorage.getItem("exit-intent-shown")) return;
        triggered = true;
        sessionStorage.setItem("exit-intent-shown", "1");
        setShow(true);
      }
    }

    // Delay 5s prije aktivacije
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative mx-4 max-w-md rounded-sm border border-white/10 bg-primary p-8 text-center">
        <button
          type="button"
          onClick={() => setShow(false)}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-foreground/50 transition-colors hover:text-foreground"
          aria-label="Zatvori"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
          <svg className="h-8 w-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        <h3 className="font-sans text-xl font-bold text-foreground">
          Odlaziš?
        </h3>
        <p className="mt-2 text-sm text-foreground/70">
          Rezerviraj besplatnu konzultaciju i razgovarajmo o tvojoj ideji. Bez obaveza.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/booking"
            onClick={() => setShow(false)}
            className="rounded-sm bg-secondary px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-accent"
          >
            Rezerviraj besplatnu konzultaciju
          </Link>
          <button
            type="button"
            onClick={() => setShow(false)}
            className="text-sm text-foreground/50 transition-colors hover:text-foreground"
          >
            Ne hvala, samo gledam
          </button>
        </div>
      </div>
    </div>
  );
}
