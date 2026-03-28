import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { STUDIO, STYLES, TESTIMONIALS } from "@/lib/constants";
import { BLOG_POSTS, formatDate } from "@/lib/blog";
import { ParallaxDivider } from "@/components/ParallaxDivider";
import { FeatureReveal } from "@/components/FeatureReveal";

const FEATURED_WORKS = [
  { src: "/images/gallery/tattoo-12.jpg", alt: "Realistic tigar portret na bedru" },
  { src: "/images/gallery/tattoo-6.jpg", alt: "Realistic samuraj lubanja na practice skinu" },
  { src: "/images/gallery/tattoo-2.jpg", alt: "Fineline lettering — No Rain No Flowers s cvijećem" },
  { src: "/images/gallery/tattoo-1.jpg", alt: "Neo traditional dizajn — lubanja, zmija i cvijeće" },
  { src: "/images/gallery/tattoo-9.jpg", alt: "Realistic lav portret na practice skinu" },
  { src: "/images/gallery/tattoo-11.jpg", alt: "Fineline leptiri s mjesecom i srcem — matching tattoo" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-background pt-16 lg:min-h-screen lg:pt-20">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-background to-primary" />

        {/* Radial glow accents */}
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/5 blur-[100px]" />

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #D4A853 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Diagonal lines */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 60px, #D4A853 60px, #D4A853 61px)",
          }}
        />

        {/* Corner accent lines */}
        <div className="absolute top-0 left-0 h-48 w-[1px] bg-gradient-to-b from-secondary/40 to-transparent lg:h-72" />
        <div className="absolute top-0 left-0 h-[1px] w-48 bg-gradient-to-r from-secondary/40 to-transparent lg:w-72" />
        <div className="absolute bottom-0 right-0 h-48 w-[1px] bg-gradient-to-t from-secondary/40 to-transparent lg:h-72" />
        <div className="absolute bottom-0 right-0 h-[1px] w-48 bg-gradient-to-l from-secondary/40 to-transparent lg:w-72" />

        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 right-[15%] hidden h-24 w-24 rotate-45 border border-secondary/10 lg:block" />
        <div className="absolute bottom-1/3 left-[10%] hidden h-16 w-16 rotate-12 border border-secondary/8 rounded-full lg:block" />
        <div className="absolute top-[20%] right-[30%] hidden h-3 w-3 rounded-full bg-secondary/20 lg:block" />
        <div className="absolute bottom-[25%] left-[25%] hidden h-2 w-2 rounded-full bg-secondary/15 lg:block" />

        {/* Horizontal accent line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 bg-gradient-to-r from-transparent via-secondary/10 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* Text — lijevo */}
          <div className="text-center lg:text-left">
            <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-secondary">
              Tattoo Studio {STUDIO.city}
            </p>
            <h1 className="animate-gold-pulse mt-4 font-sans text-4xl font-bold leading-tight tracking-tight text-secondary sm:text-5xl lg:text-7xl">
              {STUDIO.tagline}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/70 lg:mx-0 lg:text-lg">
              {STUDIO.description}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button href="/booking">Rezerviraj termin</Button>
              <Button href="/galerija" variant="outline">Pogledaj radove</Button>
            </div>
          </div>

          {/* Video — desno */}
          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10 sm:aspect-[4/4] lg:aspect-[4/3]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster="/images/video-poster.jpg"
                className="h-full w-full object-cover"
              >
                <source src="/videos/showreel.mp4" type="video/mp4" />
              </video>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-secondary/10 rounded-sm pointer-events-none" />
            </div>
            {/* Glow behind video */}
            <div className="absolute -inset-4 -z-10 rounded-sm bg-secondary/5 blur-2xl" />
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Counter */}
      <section className="border-y border-white/5 bg-primary px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <AnimatedCounter />
        </div>
      </section>

      {/* Zašto Flow Line */}
      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <SectionHeading
              title="Zašto Flow Line"
              subtitle="Ono što nas razlikuje od ostalih"
            />
          </AnimateOnScroll>
          <FeatureReveal />
        </div>
      </section>

      <ParallaxDivider variant="ink" height={180} />

      {/* Istaknuti radovi */}
      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <SectionHeading
              title="Istaknuti radovi"
              subtitle="Svaki rad je jedinstven, prilagođen klijentu"
            />
          </AnimateOnScroll>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
            {FEATURED_WORKS.map((work, i) => (
              <AnimateOnScroll key={work.src} delay={i * 100}>
                <div className="group relative aspect-square overflow-hidden rounded-sm bg-primary">
                  <Image
                    src={work.src}
                    alt={work.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-secondary/0 transition-colors group-hover:bg-secondary/20" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/galerija" variant="outline">Pogledaj cijelu galeriju</Button>
          </div>
        </div>
      </section>

      <ParallaxDivider variant="lines" height={150} />

      {/* Stilovi */}
      <section className="bg-light-bg px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <SectionHeading title="Stilovi" subtitle="Pokrivamo širok raspon stilova" light />
          </AnimateOnScroll>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {STYLES.map((style, i) => (
              <AnimateOnScroll key={style.id} delay={i * 80}>
                <Link
                  href={`/stilovi/${style.id}`}
                  className="group block rounded-sm border border-light-text/10 bg-white p-4 text-center transition-all hover:border-secondary hover:shadow-lg lg:p-6"
                >
                  <h3 className="font-sans text-sm font-bold text-light-text transition-colors group-hover:text-secondary lg:text-base">
                    {style.label}
                  </h3>
                  <p className="mt-2 text-xs text-light-text/60 lg:text-sm">{style.description}</p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <SectionHeading title="Što klijenti kažu" subtitle="Recenzije zadovoljnih klijenata" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <AnimateOnScroll key={testimonial.name} delay={i * 150}>
                <div className="rounded-sm border border-white/5 bg-primary p-6 lg:p-8">
                  <div className="flex gap-1 text-secondary">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <svg key={j} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <p className="mt-4 font-sans text-sm font-bold text-secondary">
                    {testimonial.name}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <ParallaxDivider variant="smoke" height={160} />

      {/* Blog */}
      <section className="bg-primary px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <SectionHeading title="Iz bloga" subtitle="Savjeti, trendovi i inspiracija" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 150}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-sm border border-white/5 bg-background p-6 transition-all hover:border-secondary/30"
                >
                  <span className="text-xs text-secondary">{post.category}</span>
                  <h3 className="mt-2 font-sans text-lg font-bold text-foreground transition-colors group-hover:text-secondary">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/60 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-foreground/40">
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readTime} čitanja</span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/blog" variant="outline">Svi članci</Button>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <SectionHeading
              title="@flowlinehr"
              subtitle="Prati nas na Instagramu za najnovije radove"
            />
          </AnimateOnScroll>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6 lg:gap-3">
            {[
              { src: "/images/gallery/tattoo-12.jpg", alt: "Realistic tigar" },
              { src: "/images/gallery/tattoo-6.jpg", alt: "Samuraj lubanja" },
              { src: "/images/gallery/tattoo-9.jpg", alt: "Realistic lav" },
              { src: "/images/gallery/tattoo-2.jpg", alt: "Fineline lettering" },
              { src: "/images/gallery/tattoo-11.jpg", alt: "Leptiri matching" },
              { src: "/images/gallery/tattoo-4.jpg", alt: "Blackwork cartoon" },
            ].map((item, i) => (
              <AnimateOnScroll key={item.src} delay={i * 80}>
                <a
                  href={STUDIO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-square overflow-hidden rounded-sm bg-primary"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/50">
                    <svg
                      className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={STUDIO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm border border-white/10 px-6 py-3 text-sm font-medium text-foreground/70 transition-colors hover:border-secondary hover:text-secondary"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Prati @flowlinehr
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <AnimateOnScroll>
        <section className="bg-primary px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Spreman za novu tetovažu?
            </h2>
            <p className="mt-4 text-base text-foreground/70 lg:text-lg">
              Rezerviraj besplatnu konzultaciju i razgovarajmo o tvojoj ideji.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/booking">Rezerviraj termin</Button>
              <a
                href={`tel:${STUDIO.phone.replace(/\s/g, "")}`}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 text-base font-medium text-secondary transition-colors hover:text-accent"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {STUDIO.phone}
              </a>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
