import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { STUDIO, PROCESS_STEPS, STYLES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "O meni",
  description: `Upoznaj artista iza ${STUDIO.name}. Iskustvo, stilovi i proces rada. Tattoo artist ${STUDIO.city}.`,
};

export default function OMeni() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary px-4 pt-24 pb-12 sm:px-6 lg:px-8 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Artist slika s zlatnom sjenom */}
            <AnimateOnScroll>
              <div className="relative flex items-center justify-center">
                {/* Zlatna sjena iza — 3D efekt, pulsira */}
                <div className="absolute top-1/2 left-1/2 h-[85%] w-[70%] rounded-full bg-secondary/20 blur-[60px] animate-glow-pulse" />
                <div className="absolute top-[60%] left-1/2 h-[40%] w-[55%] bg-secondary/15 blur-[80px] rounded-full animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
                <div className="absolute top-[30%] left-1/2 h-[30%] w-[40%] bg-secondary/10 blur-[50px] rounded-full animate-glow-pulse" style={{ animationDelay: "1s" }} />

                {/* Slika — pulsira */}
                <div className="relative z-10 aspect-[3/4] w-full max-w-md overflow-hidden animate-artist-pulse">
                  <Image
                    src="/images/artist.png"
                    alt="Flow Line tattoo artist — Fran"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Zlatna linija ispod */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-48 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
              </div>
            </AnimateOnScroll>

            {/* Bio */}
            <AnimateOnScroll delay={200}>
              <div>
                <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-secondary">
                  Tattoo artist
                </p>
                <h1 className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
                  Filip Hršak
                </h1>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
                  <p>
                    Prije nego što sam prvi put uzeo tattoo mašinu u ruke, crtao sam
                    sprejom po zidovima. Breakdance me kao klinca uvukao u urbanu
                    kulturu, a grafiti su bili moj prvi jezik — sirovi, glasni i puni
                    energije. Tamo sam naučio što znači linija, forma i ritam u crtežu.
                  </p>
                  <p>
                    Taj isti osjećaj danas prenosim na kožu. Dvije godine profesionalno
                    tetoviram, a moj fokus su fine line i realizam. Volim preciznost
                    tanke linije jednako koliko i dubinu realističnog portreta — jer
                    oboje zahtijevaju istu stvar: strpljenje i potpunu posvećenost
                    svakom detalju.
                  </p>
                  <p>
                    Ne radim tetovaže s predloška. Svaki dizajn nastaje u razgovoru
                    s tobom, od nule, jer vjerujem da tetovaža mora biti jednako
                    jedinstvena kao i osoba koja je nosi. Tvoja priča, moj rukopis.
                  </p>
                </div>
                <div className="mt-8">
                  <Button href="/booking">Rezerviraj konzultaciju</Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Stilovi */}
      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <SectionHeading title="Stilovi i specijalizacije" />
          </AnimateOnScroll>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {STYLES.map((style, i) => (
              <AnimateOnScroll key={style.id} delay={i * 80}>
                <div className="rounded-sm border border-white/5 bg-primary p-5 lg:p-6">
                  <h3 className="font-sans text-base font-bold text-secondary">
                    {style.label}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70">{style.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Proces rada */}
      <section className="bg-light-bg px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <SectionHeading title="Kako radim" subtitle="Od ideje do gotove tetovaže u 4 koraka" light />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <AnimateOnScroll key={step.step} delay={i * 100}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary">
                    {step.step}
                  </div>
                  <h3 className="mt-4 font-sans text-lg font-bold text-light-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-light-text/70">{step.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Certifikati */}
      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <SectionHeading title="Higijena i sigurnost" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { title: "Sterilna oprema", desc: "Sve igle su jednokratne, oprema se sterilizira nakon svakog klijenta" },
              { title: "Licencirani studio", desc: "Studio posjeduje sve potrebne dozvole i certifikate" },
              { title: "Premium tinte", desc: "Koristimo isključivo certificirane, EU odobrene tinte" },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 100}>
                <div className="rounded-sm border border-white/5 bg-primary p-5">
                  <h3 className="font-sans text-sm font-bold text-secondary">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/70">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
