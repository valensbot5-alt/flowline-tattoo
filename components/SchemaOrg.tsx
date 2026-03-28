import { STUDIO } from "@/lib/constants";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    name: STUDIO.name,
    description: STUDIO.description,
    url: "https://inkstudio.hr",
    telephone: STUDIO.phone,
    email: STUDIO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ilica 100",
      addressLocality: STUDIO.city,
      postalCode: "10000",
      addressCountry: "HR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "15:00",
      },
    ],
    priceRange: "€€",
    image: "https://inkstudio.hr/images/hero.jpg",
    sameAs: [STUDIO.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
