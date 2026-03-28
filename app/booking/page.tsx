import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { STUDIO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Rezerviraj termin",
  description: `Rezerviraj termin za tetoviranje u ${STUDIO.name}. Online booking, besplatna konzultacija. ${STUDIO.city}.`,
};

export default function Booking() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary px-4 pt-24 pb-12 sm:px-6 lg:px-8 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-secondary">
            Booking
          </p>
          <h1 className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            Rezerviraj termin
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-foreground/70">
            Popuni formu ispod i javit ćemo ti se u roku 24 sata za potvrdu termina.
          </p>
        </div>
      </section>

      {/* Forma */}
      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl">
          <BookingForm />
        </div>
      </section>

      {/* Info */}
      <section className="bg-primary px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Brz odgovor",
                desc: "Odgovaramo na sve upite u roku 24 sata",
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Besplatna konzultacija",
                desc: "Razgovor o ideji, poziciji i cijeni bez obaveza",
              },
              {
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                title: "100% zadovoljstvo",
                desc: "Radimo dok nisi potpuno zadovoljan rezultatom",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <svg className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="mt-3 font-sans text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
