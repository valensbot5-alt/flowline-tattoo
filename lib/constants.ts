export const STUDIO = {
  name: "FLOW LINE",
  tagline: "Umjetnost na koži",
  description: "Profesionalni tattoo studio specijaliziran za sve stilove tetoviranja. Svaki rad je jedinstven, prilagođen tebi.",
  phone: "+385 95 534 5885",
  email: "info@inkstudio.hr",
  whatsapp: "385955345885",
  instagram: "https://instagram.com/flowlinehr",
  address: "Vladimira Varičaka 7, 10000 Zagreb",
  city: "Zagreb",
  workingHours: {
    allDays: "Pon - Ned: Po dogovoru",
  },
  maps: {
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.0!2d15.9274!3d45.7953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6f1c5eb4e4b%3A0x0!2sVladimira+Vari%C4%8Daka+7%2C+Zagreb!5e0!3m2!1shr!2shr",
    link: "https://maps.google.com/?q=Vladimira+Varičaka+7+Zagreb",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Početna" },
  { href: "/galerija", label: "Galerija" },
  { href: "/o-meni", label: "O meni" },
  { href: "/usluge", label: "Usluge" },
  { href: "/njega", label: "Njega" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const STYLES = [
  { id: "realistic", label: "Realistic", description: "Fotorealistični portreti, životinje i priroda" },
  { id: "traditional", label: "Traditional", description: "Klasične bold linije i vivid boje" },
  { id: "neo-traditional", label: "Neo Traditional", description: "Moderan twist na klasičnom stilu" },
  { id: "fineline", label: "Fineline", description: "Tanke linije, minimalan dizajn" },
  { id: "blackwork", label: "Blackwork", description: "Geometrija, dotwork, ornamentalni" },
  { id: "watercolor", label: "Watercolor", description: "Akvarelni efekti i meke prijelaze boja" },
] as const;

export const SERVICES = [
  {
    title: "Custom dizajn",
    description: "Potpuno originalan dizajn napravljen prema tvojoj ideji. Svaki rad je jedinstven.",
    price: "od 100 €",
  },
  {
    title: "Cover-up",
    description: "Prekrij staru tetovažu novim dizajnom. Besplatna konzultacija za procjenu mogućnosti.",
    price: "od 150 €",
  },
  {
    title: "Popravak",
    description: "Osvježi izblijedjelu ili oštećenu tetovažu. Vrati je u prvobitno stanje.",
    price: "od 80 €",
  },
  {
    title: "Konzultacija",
    description: "Besplatan razgovor o tvojoj ideji, veličini, poziciji i cijelom procesu.",
    price: "Besplatno",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Ana M.",
    text: "Profesionalan pristup od prve konzultacije do završnog rada. Rezultat je bolji nego što sam zamislila!",
    rating: 5,
  },
  {
    name: "Marko K.",
    text: "Treća tetovaža kod istog artista. Svaki put savršenstvo. Ne mijenjam studio.",
    rating: 5,
  },
  {
    name: "Ivana P.",
    text: "Čist studio, sterilna oprema, opuštena atmosfera. Cover-up ispao fantastično.",
    rating: 5,
  },
] as const;

export const PROCESS_STEPS = [
  { step: 1, title: "Konzultacija", description: "Razgovaramo o tvojoj ideji, poziciji, veličini i stilu." },
  { step: 2, title: "Dizajn", description: "Kreiram unikatan dizajn prema dogovoru. Revizije uključene." },
  { step: 3, title: "Tetovaža", description: "Profesionalan rad u sterilnom okruženju uz maksimalnu udobnost." },
  { step: 4, title: "Njega", description: "Detaljne upute za njegu kako bi tetovaža izgledala savršeno." },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Koliko košta tetovaža?",
    answer: "Cijena ovisi o veličini, složenosti dizajna i poziciji na tijelu. Custom dizajn počinje od 100 €. Kontaktiraj nas za besplatnu procjenu.",
  },
  {
    question: "Boli li tetoviranje?",
    answer: "Razina boli varira ovisno o poziciji na tijelu i osobnoj toleranciji. Većina klijenata opisuje osjećaj kao lagano peckanje. Radimo sve da ti proces bude što ugodniji.",
  },
  {
    question: "Kako se pripremiti za tetoviranje?",
    answer: "Dobro se naspavaj, pojedi obrok prije dolaska, izbjegavaj alkohol 24 sata prije i donesi udobnu odjeću koja omogućava pristup mjestu tetoviranja.",
  },
  {
    question: "Koliko traje cijeljenje?",
    answer: "Površinsko cijeljenje traje 2-3 tjedna, a potpuno cijeljenje kože 4-6 tjedana. Dobit ćeš detaljne upute za njegu.",
  },
  {
    question: "Mogu li donijeti svoj dizajn?",
    answer: "Apsolutno! Možeš donijeti gotov dizajn, skicu, referentne slike ili samo ideju. Zajedno ćemo doći do savršenog rezultata.",
  },
] as const;
