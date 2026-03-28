import type { Metadata } from "next";
import { STUDIO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politika kolačića",
  description: `Politika kolačića web stranice ${STUDIO.name}. Saznajte koje kolačiće koristimo i zašto.`,
};

export default function Kolacici() {
  return (
    <section className="bg-background px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-sans text-3xl font-bold text-foreground lg:text-4xl">
          Politika kolačića
        </h1>
        <p className="mt-2 text-sm text-foreground/50">
          Posljednje ažuriranje: 28. ožujka 2026.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/80">
          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">1. Što su kolačići</h2>
            <p className="mt-2">
              Kolačići (cookies) su male tekstualne datoteke koje se pohranjuju na vašem uređaju
              kada posjetite web stranicu. Služe za pamćenje vaših postavki, poboljšanje korisničkog
              iskustva i analizu prometa.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">2. Koje kolačiće koristimo</h2>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 pr-4 font-sans font-bold text-foreground">Kolačić</th>
                    <th className="py-3 pr-4 font-sans font-bold text-foreground">Vrsta</th>
                    <th className="py-3 pr-4 font-sans font-bold text-foreground">Trajanje</th>
                    <th className="py-3 font-sans font-bold text-foreground">Svrha</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-3 pr-4 font-mono text-xs">cookies-accepted</td>
                    <td className="py-3 pr-4">Nužni</td>
                    <td className="py-3 pr-4">Trajno</td>
                    <td className="py-3">Pamti vaš izbor kolačića</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-xs">_ga</td>
                    <td className="py-3 pr-4">Analitički</td>
                    <td className="py-3 pr-4">2 godine</td>
                    <td className="py-3">Google Analytics — razlikuje korisnike</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-xs">_ga_*</td>
                    <td className="py-3 pr-4">Analitički</td>
                    <td className="py-3 pr-4">2 godine</td>
                    <td className="py-3">Google Analytics 4 — stanje sesije</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-xs">_gid</td>
                    <td className="py-3 pr-4">Analitički</td>
                    <td className="py-3 pr-4">24 sata</td>
                    <td className="py-3">Google Analytics — razlikuje korisnike</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">3. Kategorije kolačića</h2>

            <div className="mt-4 space-y-4">
              <div className="rounded-sm border border-white/10 p-4">
                <h3 className="font-sans font-bold text-foreground">Nužni kolačići</h3>
                <p className="mt-1">
                  Potrebni za osnovno funkcioniranje stranice. Ne možete ih isključiti jer bi
                  stranica bez njih prestala ispravno raditi.
                </p>
              </div>

              <div className="rounded-sm border border-white/10 p-4">
                <h3 className="font-sans font-bold text-foreground">Analitički kolačići</h3>
                <p className="mt-1">
                  Pomažu nam razumjeti kako posjetitelji koriste stranicu. Podaci su anonimizirani
                  i koristimo ih isključivo za poboljšanje korisničkog iskustva.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">4. Upravljanje kolačićima</h2>
            <p className="mt-2">
              Prilikom prvog posjeta stranici prikazat će vam se obavijest o kolačićima.
              Možete prihvatiti sve kolačiće ili samo nužne.
            </p>
            <p className="mt-2">
              Također možete upravljati kolačićima putem postavki vašeg preglednika:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Chrome: Postavke &rarr; Privatnost i sigurnost &rarr; Kolačići</li>
              <li>Firefox: Postavke &rarr; Privatnost i sigurnost &rarr; Kolačići</li>
              <li>Safari: Preferences &rarr; Privacy &rarr; Cookies</li>
              <li>Edge: Postavke &rarr; Kolačići i dozvole web-mjesta</li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">5. Treće strane</h2>
            <p className="mt-2">
              Kolačiće trećih strana postavljaju vanjski servisi koje koristimo (Google Analytics).
              Njihova uporaba regulirana je politikama privatnosti tih servisa:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  Google politika privatnosti
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">6. Kontakt</h2>
            <p className="mt-2">
              Za pitanja o kolačićima kontaktirajte nas na{" "}
              <a href={`mailto:${STUDIO.email}`} className="text-secondary hover:underline">
                {STUDIO.email}
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
