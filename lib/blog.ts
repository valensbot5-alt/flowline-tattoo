export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "kako-se-pripremiti-za-prvu-tetovazu",
    title: "Kako se pripremiti za prvu tetovažu",
    excerpt: "Sve što trebaš znati prije prvog posjeta tattoo studiju. Od odabira dizajna do njege nakon tetoviranja.",
    date: "2026-03-15",
    readTime: "5 min",
    category: "Savjeti",
  },
  {
    slug: "cover-up-tetovaze-vodic",
    title: "Cover-up tetovaže: Kompletni vodič",
    excerpt: "Imaš staru tetovažu koju bi mijenjao? Saznaj sve o procesu, mogućnostima i ograničenjima cover-up tetovaža.",
    date: "2026-03-01",
    readTime: "7 min",
    category: "Edukacija",
  },
  {
    slug: "njega-tetovaze-prvih-30-dana",
    title: "Njega tetovaže: Prvih 30 dana",
    excerpt: "Detaljne upute za njegu nove tetovaže. Što raditi, a što izbjegavati za savršeno cijeljenje.",
    date: "2026-02-15",
    readTime: "4 min",
    category: "Njega",
  },
  {
    slug: "trendovi-u-tetoviranju-2026",
    title: "Trendovi u tetoviranju 2026",
    excerpt: "Od minimalizma do hiperrealizma. Pogledaj koji stilovi dominiraju ove godine.",
    date: "2026-01-20",
    readTime: "6 min",
    category: "Trendovi",
  },
];

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("hr-HR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
