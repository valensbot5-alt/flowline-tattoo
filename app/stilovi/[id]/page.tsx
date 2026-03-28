import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STYLES, STUDIO, FAQ_ITEMS } from "@/lib/constants";
import { FAQ } from "@/components/FAQ";

type Props = {
  params: Promise<{ id: string }>;
};

const STYLE_CONTENT: Record<string, { intro: string; details: string[]; ideal: string }> = {
  realistic: {
    intro: "Realistične tetovaže zahtijevaju visoku razinu vještine i preciznosti. Svaki detalj je bitan — od sjenčanja do teksture.",
    details: [
      "Portreti ljudi, životinja i prirode",
      "Fotorealistično sjenčanje i detalji",
      "Crno-bijelo ili u boji",
      "Zahtijeva veću površinu za najbolji rezultat",
    ],
    ideal: "Idealno za one koji žele fotorealistični prikaz osobe, ljubimca ili scene koja im je važna.",
  },
  traditional: {
    intro: "Traditional stil ima korijen u klasičnom američkom tetoviranju. Prepoznatljiv po bold linijama, vivid bojama i ikoničnim motivima.",
    details: [
      "Debele, čiste linije",
      "Bogata paleta boja",
      "Klasični motivi: ruže, sidra, orlovi",
      "Izuzetno dugotrajne tetovaže",
    ],
    ideal: "Savršeno za ljubitelje klasičnog tattoo stila koji žele tetovažu koja će izgledati odlično i za 20 godina.",
  },
  "neo-traditional": {
    intro: "Neo-traditional uzima temelje klasičnog stila i dodaje moderan twist — složenije sjenčanje, šira paleta boja i detaljniji dizajn.",
    details: [
      "Moderna interpretacija klasike",
      "Složenije sjenčanje i gradijenti",
      "Šira paleta boja",
      "Kombinacija starih motiva s novim pristupom",
    ],
    ideal: "Za one koji vole estetiku traditionala, ali žele nešto modernije i detaljnije.",
  },
  fineline: {
    intro: "Fineline tetovaže koriste izuzetno tanke linije za stvaranje elegantnih, minimalističkih dizajnova.",
    details: [
      "Ultra tanke, precizne linije",
      "Minimalistički dizajn",
      "Geometrijski oblici i tekst",
      "Diskretne i elegantne",
    ],
    ideal: "Idealno za prvu tetovažu ili za one koji preferiraju suptilni, rafinirani izgled.",
  },
  blackwork: {
    intro: "Blackwork koristi isključivo crnu tintu za stvaranje upečatljivih geometrijskih, ornamentalnih i dotwork dizajnova.",
    details: [
      "Samo crna tinta",
      "Geometrija, mandala, ornamentalni",
      "Dotwork tehnika",
      "Bold i upečatljiv izgled",
    ],
    ideal: "Za one koji žele snažan vizualni dojam s čistom crnom estetikom.",
  },
  watercolor: {
    intro: "Watercolor tetovaže imitiraju akvarelne slike — meke prijelaze boja, prskanja i efekt nanesene boje na papir.",
    details: [
      "Meki prijelazi boja",
      "Efekt prskanja boje",
      "Kombinacija s linework elementima",
      "Živopisne, umjetničke kompozicije",
    ],
    ideal: "Savršeno za umjetničke duše koje žele tetovažu koja izgleda kao slika na koži.",
  },
};

export async function generateStaticParams() {
  return STYLES.map((style) => ({ id: style.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const style = STYLES.find((s) => s.id === id);
  if (!style) return {};

  return {
    title: `${style.label} tetovaže`,
    description: `${style.label} tetovaže u ${STUDIO.name}. ${style.description}. Pogledaj portfolio i rezerviraj termin. ${STUDIO.city}.`,
  };
}

export default async function StilPage({ params }: Props) {
  const { id } = await params;
  const style = STYLES.find((s) => s.id === id);
  if (!style) notFound();

  const content = STYLE_CONTENT[id];
  if (!content) notFound();

  const otherStyles = STYLES.filter((s) => s.id !== id);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary px-4 pt-24 pb-12 sm:px-6 lg:px-8 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Placeholder slika */}
            <div className="aspect-square overflow-hidden rounded-sm bg-background">
              <div className="flex h-full items-center justify-center text-foreground/20">
                <svg className="h-20 w-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <div>
              <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-secondary">
                Stil
              </p>
              <h1 className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
                {style.label}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                {content.intro}
              </p>
              <ul className="mt-6 space-y-3">
                {content.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-foreground/70">{detail}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-sm bg-secondary/5 p-4 text-sm text-foreground/70">
                {content.ideal}
              </p>
              <div className="mt-8">
                <Button href="/booking">Rezerviraj termin</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerija radova u ovom stilu */}
      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={`${style.label} radovi`} subtitle="Primjeri iz našeg portfolija" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-sm bg-primary">
                <div className="flex h-full items-center justify-center text-foreground/20">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-primary px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Česta pitanja" />
          <FAQ items={FAQ_ITEMS} />
        </div>
      </section>

      {/* Ostali stilovi */}
      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Pogledaj i druge stilove" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {otherStyles.map((s) => (
              <a
                key={s.id}
                href={`/stilovi/${s.id}`}
                className="rounded-sm border border-white/5 bg-primary p-4 text-center transition-all hover:border-secondary/30 lg:p-6"
              >
                <h3 className="font-sans text-sm font-bold text-secondary">{s.label}</h3>
                <p className="mt-1 text-xs text-foreground/50">{s.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
