import type { Metadata } from "next";
import { STUDIO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description: `Politika privatnosti tattoo studija ${STUDIO.name}. Saznajte kako prikupljamo, koristimo i štitimo vaše osobne podatke.`,
};

export default function PolitikaPrivatnosti() {
  return (
    <section className="bg-background px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-sans text-3xl font-bold text-foreground lg:text-4xl">
          Politika privatnosti
        </h1>
        <p className="mt-2 text-sm text-foreground/50">
          Posljednje ažuriranje: 28. ožujka 2026.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/80">
          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">1. Voditelj obrade podataka</h2>
            <p className="mt-2">
              {STUDIO.name}, {STUDIO.address}<br />
              E-mail: {STUDIO.email}<br />
              Telefon: {STUDIO.phone}
            </p>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">2. Koje podatke prikupljamo</h2>
            <p className="mt-2">Prikupljamo sljedeće kategorije osobnih podataka:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li><strong>Kontaktni podaci</strong> — ime, e-mail adresa, broj telefona (kad nas kontaktirate ili rezervirate termin)</li>
              <li><strong>Podaci o rezervaciji</strong> — željeni datum, stil tetovaže, opis ideje</li>
              <li><strong>Podaci o komunikaciji</strong> — poruke koje nam šaljete putem kontakt forme, WhatsAppa ili e-maila</li>
              <li><strong>Tehnički podaci</strong> — IP adresa, vrsta preglednika, operativni sustav (automatski putem Google Analyticsa)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">3. Pravni temelj i svrha obrade</h2>
            <p className="mt-2">Vaše podatke obrađujemo na temelju:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li><strong>Privola (čl. 6. st. 1. (a) GDPR)</strong> — za marketing komunikaciju i analitičke kolačiće</li>
              <li><strong>Izvršenje ugovora (čl. 6. st. 1. (b) GDPR)</strong> — za obradu rezervacija i pružanje usluga</li>
              <li><strong>Legitimni interes (čl. 6. st. 1. (f) GDPR)</strong> — za poboljšanje web stranice i korisničkog iskustva</li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">4. Koliko dugo čuvamo podatke</h2>
            <p className="mt-2">
              Osobne podatke čuvamo samo onoliko koliko je potrebno za ispunjenje svrhe obrade.
              Kontaktne podatke vezane uz rezervacije čuvamo do 2 godine od posljednjeg kontakta.
              Podatke prikupljene putem kolačića čuvamo u skladu s politikom kolačića.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">5. Dijeljenje podataka s trećim stranama</h2>
            <p className="mt-2">Vaše podatke ne prodajemo niti dijelimo u marketinške svrhe. Koristimo sljedeće vanjske usluge:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li><strong>Google Analytics 4</strong> — analitika prometa (anonimizirana IP adresa)</li>
              <li><strong>Google Tag Manager</strong> — upravljanje skriptama</li>
              <li><strong>Instagram (Meta)</strong> — prikaz sadržaja s društvenih mreža</li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">6. Vaša prava</h2>
            <p className="mt-2">Prema GDPR-u imate pravo na:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Pristup vašim osobnim podacima</li>
              <li>Ispravak netočnih podataka</li>
              <li>Brisanje podataka (&quot;pravo na zaborav&quot;)</li>
              <li>Ograničenje obrade</li>
              <li>Prenosivost podataka</li>
              <li>Prigovor na obradu</li>
              <li>Povlačenje privole u bilo kojem trenutku</li>
            </ul>
            <p className="mt-2">
              Za ostvarivanje svojih prava kontaktirajte nas na{" "}
              <a href={`mailto:${STUDIO.email}`} className="text-secondary hover:underline">{STUDIO.email}</a>.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">7. Nadzorno tijelo</h2>
            <p className="mt-2">
              Ako smatrate da obrada vaših podataka krši GDPR, imate pravo podnijeti pritužbu
              Agenciji za zaštitu osobnih podataka (AZOP), Selska cesta 136, 10000 Zagreb,{" "}
              <a href="https://azop.hr" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">azop.hr</a>.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">8. Sigurnost podataka</h2>
            <p className="mt-2">
              Primjenjujemo odgovarajuće tehničke i organizacijske mjere za zaštitu vaših osobnih podataka
              od neovlaštenog pristupa, gubitka ili zlouporabe, uključujući SSL enkripciju i siguran hosting.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">9. Promjene politike</h2>
            <p className="mt-2">
              Ovu politiku privatnosti možemo povremeno ažurirati. Datum posljednjeg ažuriranja
              naveden je na vrhu stranice. Preporučujemo povremenu provjeru ove stranice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
