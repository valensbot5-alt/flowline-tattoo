import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/FAQ";
import { STUDIO, SERVICES, FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Usluge i cijene",
  description: `Usluge i okvirne cijene tetoviranja u ${STUDIO.name}. Custom dizajn, cover-up, popravak. Besplatna konzultacija. ${STUDIO.city}.`,
};

function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Usluge() {
  return (
    <>
      <FAQSchema />

      {/* Hero */}
      <section className="bg-primary px-4 pt-24 pb-12 sm:px-6 lg:px-8 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-secondary">
            Naše usluge
          </p>
          <h1 className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            Usluge i cijene
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-foreground/70">
            Svaka tetovaža je jedinstvena. Cijene ovise o veličini, složenosti i poziciji.
            Kontaktiraj nas za točnu procjenu.
          </p>
        </div>
      </section>

      {/* Usluge */}
      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between rounded-sm border border-white/5 bg-primary p-6 lg:p-8"
              >
                <div>
                  <h2 className="font-sans text-xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-sans text-lg font-bold text-secondary">
                    {service.price}
                  </span>
                  <Button href="/booking" className="!px-4 !py-2 !text-sm !min-h-[40px]">
                    Rezerviraj
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Što je uključeno */}
      <section className="bg-light-bg px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Što je uključeno u cijenu" light />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Besplatna konzultacija",
              "Originalan dizajn",
              "Revizije dizajna",
              "Upute za njegu",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-sm bg-white p-4">
                <svg className="h-5 w-5 shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-light-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Česta pitanja" subtitle="Sve što trebaš znati prije tetoviranja" />
          <FAQ items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-2xl font-bold text-foreground lg:text-3xl">
            Imaš ideju? Razgovarajmo.
          </h2>
          <p className="mt-3 text-foreground/70">
            Besplatna konzultacija za sve nove klijente.
          </p>
          <div className="mt-6">
            <Button href="/booking">Rezerviraj besplatnu konzultaciju</Button>
          </div>
        </div>
      </section>
    </>
  );
}
