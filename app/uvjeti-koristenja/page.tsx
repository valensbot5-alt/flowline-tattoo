import type { Metadata } from "next";
import { STUDIO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Uvjeti korištenja",
  description: `Uvjeti korištenja web stranice tattoo studija ${STUDIO.name}.`,
};

export default function UvjetiKoristenja() {
  return (
    <section className="bg-background px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-sans text-3xl font-bold text-foreground lg:text-4xl">
          Uvjeti korištenja
        </h1>
        <p className="mt-2 text-sm text-foreground/50">
          Posljednje ažuriranje: 28. ožujka 2026.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/80">
          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">1. Opće odredbe</h2>
            <p className="mt-2">
              Korištenjem web stranice {STUDIO.name} (u daljnjem tekstu: &quot;Stranica&quot;)
              prihvaćate ove Uvjete korištenja. Ako se ne slažete s uvjetima, molimo vas da
              ne koristite Stranicu.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">2. Vlasnik stranice</h2>
            <p className="mt-2">
              {STUDIO.name}<br />
              {STUDIO.address}<br />
              E-mail: {STUDIO.email}<br />
              Telefon: {STUDIO.phone}
            </p>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">3. Usluge</h2>
            <p className="mt-2">
              Stranica pruža informacije o uslugama tattoo studija {STUDIO.name}, uključujući
              galeriju radova, cjenik, sustav rezervacija i kontakt informacije. Sadržaj na Stranici
              služi u informativne svrhe i ne predstavlja obvezujuću ponudu.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">4. Rezervacije</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Rezervacija termina putem Stranice predstavlja upit, ne garanciju termina.</li>
              <li>Potvrdu termina šaljemo putem e-maila ili telefonski.</li>
              <li>Otkazivanje termina moguće je najkasnije 24 sata prije dogovorenog termina.</li>
              <li>Konačna cijena dogovara se na konzultaciji i može se razlikovati od okvirnih cijena na Stranici.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">5. Intelektualno vlasništvo</h2>
            <p className="mt-2">
              Sav sadržaj na Stranici (tekstovi, slike, dizajni, logotipi) vlasništvo je {STUDIO.name}
              i zaštićen je autorskim pravom. Zabranjeno je kopiranje, reprodukcija ili distribucija
              sadržaja bez pisanog odobrenja.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">6. Fotografije radova</h2>
            <p className="mt-2">
              Fotografije tetovaža objavljene na Stranici i društvenim mrežama koriste se uz
              suglasnost klijenata. {STUDIO.name} zadržava pravo korištenja fotografija vlastitih
              radova u promotivne svrhe, osim ako klijent izričito zatraži drugačije.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">7. Dobna granica</h2>
            <p className="mt-2">
              Usluge tetoviranja dostupne su isključivo osobama starijim od 18 godina.
              Pri dolasku na termin potrebno je predočiti osobnu iskaznicu ili putovnicu.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">8. Zdravstveni uvjeti</h2>
            <p className="mt-2">
              Klijent je dužan obavijestiti artista o svim zdravstvenim stanjima koja mogu utjecati
              na proces tetoviranja (alergije, kožne bolesti, trudnoća, lijekovi koji utječu na
              zgrušavanje krvi). Studio zadržava pravo odbiti uslugu ako procijeni da postoji
              zdravstveni rizik.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">9. Odgovornost</h2>
            <p className="mt-2">
              {STUDIO.name} ulaže sve napore da informacije na Stranici budu točne i ažurne,
              ali ne preuzima odgovornost za eventualne pogreške ili propuste. Korištenje Stranice
              je na vlastitu odgovornost korisnika.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-lg font-bold text-foreground">10. Mjerodavno pravo</h2>
            <p className="mt-2">
              Na ove Uvjete korištenja primjenjuje se pravo Republike Hrvatske.
              Za sve sporove nadležan je sud u Zagrebu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
