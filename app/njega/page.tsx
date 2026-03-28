import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { STUDIO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Njega tetovaže — Upute za cijeljenje",
  description: `Kompletne upute za njegu nove tetovaže. Dan po dan vodič za prvih 30 dana. ${STUDIO.name}, ${STUDIO.city}.`,
};

const PHASES = [
  {
    phase: "Dan 1 — 3",
    title: "Svježa tetovaža",
    color: "bg-red-500/20 text-red-400",
    steps: [
      "Zaštitnu foliju skini nakon 2 — 4 sata (ili prema uputama)",
      "Nježno operi mlakom vodom i blagim sapunom bez mirisa",
      "Tapkaj čistim papirnatim ručnikom — nikad ne trljaj",
      "Nанеsi tanak sloj kreme za cijeljenje (Bepanthen, Hustle Butter ili preporučenu)",
      "Peri i nanosi kremu 2 — 3 puta dnevno",
    ],
    avoid: [
      "Ne diraj tetovažu prljavim rukama",
      "Ne omataj ponovo u foliju osim ako artist nije drugačije rekao",
      "Ne izlažij direktnom suncu",
    ],
  },
  {
    phase: "Dan 4 — 7",
    title: "Početak ljuštenja",
    color: "bg-yellow-500/20 text-yellow-400",
    steps: [
      "Tetovaža će početi svrbjeti i ljuštiti se — to je normalno",
      "Nastavi s pranjem i kremom 2 — 3 puta dnevno",
      "Koristi kremu bez mirisa za hidrataciju",
    ],
    avoid: [
      "Ne čeprkaj i ne skidaj kožicu koja se ljušti",
      "Ne češi tetovažu — tapkaj dlanom ako svrbi",
      "Ne nosi tijesnu odjeću preko tetovaže",
    ],
  },
  {
    phase: "Dan 8 — 14",
    title: "Aktivno cijeljenje",
    color: "bg-blue-500/20 text-blue-400",
    steps: [
      "Ljuštenje se smiruje, koža može izgledati mutno ili mliječno",
      "Nastavi hidratizirati 2 puta dnevno",
      "Tetovaža će izgledati blijeđe nego konačni rezultat — to je normalno",
    ],
    avoid: [
      "Ne namakaj tetovažu (bazeni, kade, more)",
      "Ne izlažij suncu bez zaštite",
      "Ne vježbaj intenzivno ako je tetovaža na mjestu koje se rasteže",
    ],
  },
  {
    phase: "Dan 15 — 30",
    title: "Završno cijeljenje",
    color: "bg-green-500/20 text-green-400",
    steps: [
      "Površinski sloj je zacijelio, ali dublja koža još se oporavlja",
      "Nastavi hidratizirati jednom dnevno",
      "Boje i linije će se potpuno iskristalizirati nakon 4 — 6 tjedana",
    ],
    avoid: [
      "Ne izlažij direktnom suncu bez SPF 50+",
      "Ne namakaj dulje od 10 minuta",
    ],
  },
];

const LONG_TERM_TIPS = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Zaštita od sunca",
    desc: "Uvijek nаноsi SPF 50+ na tetovažu kad se izlažeš suncu. UV zrake su neprijatelj broj jedan — blijede boje i razaraju linije.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Hidratacija",
    desc: "Redovito hidratizirana koža znači življe boje i oštrije linije. Koristi kremu bez mirisa svaki dan.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Touch-up",
    desc: "Ako nakon potpunog cijeljenja primijetiš da su neka mjesta izblijedjela, javi se za besplatan touch-up u roku 3 mjeseca.",
  },
];

const FAQ_AFTERCARE = [
  {
    q: "Kada mogu ići na sunce nakon tetoviranja?",
    a: "Minimalno 3 — 4 tjedna izbjegavaj direktno sunce. Nakon toga uvijek nаноsi SPF 50+ zaštitu na tetovažu.",
  },
  {
    q: "Mogu li vježbati s novom tetovažom?",
    a: "Laganu aktivnost možeš nastaviti nakon 2 — 3 dana, ali izbjegavaj znoj i trenje na tetoviranom području prvih 7 — 10 dana.",
  },
  {
    q: "Kada mogu ići u bazen ili more?",
    a: "Čekaj minimalno 3 — 4 tjedna. Klor i morska sol mogu oštetiti svježu tetovažu i uzrokovati infekciju.",
  },
  {
    q: "Je li normalno da tetovaža svrbi?",
    a: "Da, svrbež je normalan dio cijeljenja. Nikad ne češi — tapkaj dlanom ili nанеsi tanak sloj kreme.",
  },
  {
    q: "Koju kremu koristiti?",
    a: "Preporučujemo Bepanthen, Hustle Butter ili bilo koju kremu bez mirisa i alkohola. Izbjegavaj Vazelinu u velikim količinama.",
  },
];

export default function Njega() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary px-4 pt-24 pb-12 sm:px-6 lg:px-8 lg:pt-32 lg:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-secondary">
              Aftercare
            </p>
            <h1 className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
              Njega tetovaže
            </h1>
            <p className="mt-4 text-base text-foreground/70 lg:text-lg">
              Pravilna njega je jednako važna kao i sam rad. Prati ove upute
              da tvoja tetovaža zacijeli savršeno i zadrži kvalitetu godinama.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Faze cijeljenja */}
      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <SectionHeading
              title="Prvih 30 dana"
              subtitle="Korak po korak vodič za cijeljenje"
            />
          </AnimateOnScroll>

          <div className="space-y-8">
            {PHASES.map((phase, i) => (
              <AnimateOnScroll key={phase.phase} delay={i * 100}>
                <div className="rounded-sm border border-white/5 bg-primary p-6 lg:p-8">
                  <div className="flex items-center gap-3">
                    <span className={`rounded-sm px-3 py-1 text-xs font-bold ${phase.color}`}>
                      {phase.phase}
                    </span>
                    <h2 className="font-sans text-lg font-bold text-foreground">
                      {phase.title}
                    </h2>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Što raditi */}
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-bold text-green-400">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Radi
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {phase.steps.map((step) => (
                          <li key={step} className="flex gap-2 text-sm text-foreground/70">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400/50" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Što izbjegavati */}
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-bold text-red-400">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Izbjegavaj
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {phase.avoid.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-foreground/70">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/50" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Dugoročna njega */}
      <section className="bg-primary px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <SectionHeading title="Dugoročna njega" subtitle="Kako zadržati tetovažu kao novu" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {LONG_TERM_TIPS.map((tip, i) => (
              <AnimateOnScroll key={tip.title} delay={i * 100}>
                <div className="rounded-sm border border-white/5 bg-background p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    {tip.icon}
                  </div>
                  <h3 className="mt-4 font-sans text-base font-bold text-foreground">
                    {tip.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{tip.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <SectionHeading title="Česta pitanja o njezi" />
          </AnimateOnScroll>
          <div className="space-y-4">
            {FAQ_AFTERCARE.map((item, i) => (
              <AnimateOnScroll key={item.q} delay={i * 80}>
                <div className="rounded-sm border border-white/5 bg-primary p-5 lg:p-6">
                  <h3 className="font-sans text-base font-bold text-foreground">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{item.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Schema.org FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_AFTERCARE.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />

      {/* CTA */}
      <AnimateOnScroll>
        <section className="bg-primary px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-sans text-2xl font-bold text-foreground lg:text-3xl">
              Imaš pitanje o njezi?
            </h2>
            <p className="mt-3 text-foreground/70">
              Javi se bilo kad — tu smo za tebe i nakon tetoviranja.
            </p>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/kontakt">Kontaktiraj nas</Button>
              <a
                href={`https://wa.me/${STUDIO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm border border-white/10 px-6 text-sm font-medium text-foreground/70 transition-colors hover:border-secondary hover:text-secondary"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.7-6.414-1.9l-.45-.3-3.084 1.034 1.034-3.084-.3-.45A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
