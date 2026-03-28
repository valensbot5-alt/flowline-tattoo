import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Gallery } from "@/components/Gallery";
import { BeforeAfter } from "@/components/BeforeAfter";
import { STUDIO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Galerija",
  description: `Galerija radova ${STUDIO.name}. Pogledaj tattoo portfolio — realistic, traditional, fineline, blackwork i više. ${STUDIO.city}.`,
};

export default function Galerija() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary px-4 pt-24 pb-12 sm:px-6 lg:px-8 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-secondary">
            Portfolio
          </p>
          <h1 className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            Galerija radova
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-foreground/70">
            Svaki rad je jedinstven. Filtriraj po stilu i pronađi inspiraciju za svoju tetovažu.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Gallery />
        </div>
      </section>

      {/* Before/After */}
      <section className="bg-primary px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <SectionHeading title="Prije i poslije" subtitle="Pogledaj transformacije" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimateOnScroll>
              <BeforeAfter />
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <BeforeAfter beforeLabel="Stara tetovaža" afterLabel="Cover-up" />
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <BeforeAfter beforeLabel="Skica" afterLabel="Gotov rad" />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-2xl font-bold text-foreground lg:text-3xl">
            Sviđa ti se što vidiš?
          </h2>
          <p className="mt-3 text-foreground/70">
            Rezerviraj termin i kreiraj svoju jedinstvenu tetovažu.
          </p>
          <div className="mt-6">
            <Button href="/booking">Rezerviraj termin</Button>
          </div>
        </div>
      </section>
    </>
  );
}
