"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookies-accepted")) {
      setShow(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookies-accepted", "1");
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-primary/95 backdrop-blur-sm lg:bottom-4 lg:left-4 lg:right-auto lg:max-w-md lg:rounded-sm lg:border">
      <div className="px-4 py-4 lg:p-5">
        <p className="text-sm text-foreground/80">
          Koristimo kolačiće za poboljšanje korisničkog iskustva i analitiku prometa.{" "}
          <Link href="/kolacici" className="text-secondary underline hover:text-accent">
            Saznaj više
          </Link>
        </p>
        <div className="mt-3 flex gap-3">
          <button
            type="button"
            onClick={accept}
            className="rounded-sm bg-secondary px-5 py-2 text-sm font-bold text-primary transition-colors hover:bg-accent min-h-[44px]"
          >
            Prihvaćam
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-sm px-4 py-2 text-sm text-foreground/60 transition-colors hover:text-foreground min-h-[44px]"
          >
            Samo nužni
          </button>
        </div>
      </div>
    </div>
  );
}
