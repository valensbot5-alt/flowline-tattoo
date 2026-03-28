import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoogleMap } from "@/components/GoogleMap";
import { ContactForm } from "@/components/ContactForm";
import { STUDIO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktiraj ${STUDIO.name}. Adresa: ${STUDIO.address}. Telefon: ${STUDIO.phone}. Radno vrijeme i lokacija.`,
};

export default function Kontakt() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary px-4 pt-24 pb-12 sm:px-6 lg:px-8 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-secondary">
            Kontakt
          </p>
          <h1 className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            Posjeti nas
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-foreground/70">
            Dođi na besplatnu konzultaciju ili nas kontaktiraj online.
          </p>
        </div>
      </section>

      {/* Info + Forma */}
      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Kontakt info */}
            <div>
              <h2 className="font-sans text-2xl font-bold text-foreground">Kontakt informacije</h2>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-primary">
                    <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-foreground">Adresa</h3>
                    <a href={STUDIO.maps.link} target="_blank" rel="noopener noreferrer" className="mt-1 text-sm text-foreground/70 transition-colors hover:text-secondary">
                      {STUDIO.address}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-primary">
                    <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-foreground">Telefon</h3>
                    <a href={`tel:${STUDIO.phone.replace(/\s/g, "")}`} className="mt-1 text-sm text-foreground/70 transition-colors hover:text-secondary">
                      {STUDIO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-primary">
                    <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-foreground">Email</h3>
                    <a href={`mailto:${STUDIO.email}`} className="mt-1 text-sm text-foreground/70 transition-colors hover:text-secondary">
                      {STUDIO.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-primary">
                    <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-foreground">Radno vrijeme</h3>
                    <div className="mt-1 space-y-1 text-sm text-foreground/70">
                      <p>{STUDIO.workingHours.allDays}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kontakt forma */}
            <div>
              <h2 className="font-sans text-2xl font-bold text-foreground">Pošalji poruku</h2>
              <p className="mt-2 text-sm text-foreground/70">Odgovaramo u roku 24 sata.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-primary px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Kako do nas" />
          <GoogleMap />
        </div>
      </section>
    </>
  );
}
