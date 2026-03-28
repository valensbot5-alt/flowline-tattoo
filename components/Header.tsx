"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, STUDIO } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="font-sans text-xl font-bold tracking-wider text-secondary">
            {STUDIO.name}
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  pathname === link.href ? "text-secondary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="rounded-sm bg-secondary px-5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-accent"
            >
              Rezerviraj termin
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-12 h-12 gap-1.5"
            aria-label={isOpen ? "Zatvori izbornik" : "Otvori izbornik"}
            aria-expanded={isOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors hover:text-secondary ${
                  pathname === link.href ? "text-secondary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-sm bg-secondary px-5 py-3 text-center text-base font-bold text-primary transition-colors hover:bg-accent"
            >
              Rezerviraj termin
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
