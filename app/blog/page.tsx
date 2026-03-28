import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS, formatDate } from "@/lib/blog";
import { STUDIO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description: `Savjeti, trendovi i edukacija o tetoviranju. Blog ${STUDIO.name} tattoo studija ${STUDIO.city}.`,
};

export default function Blog() {
  return (
    <>
      <section className="bg-primary px-4 pt-24 pb-12 sm:px-6 lg:px-8 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-secondary">
            Blog
          </p>
          <h1 className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            Savjeti i inspiracija
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-foreground/70">
            Edukativni članci o tetoviranju, njezi i aktualnim trendovima.
          </p>
        </div>
      </section>

      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-sm border border-white/5 bg-primary p-6 transition-all hover:border-secondary/30 lg:p-8"
              >
                <div className="flex items-center gap-3 text-xs text-foreground/50">
                  <span className="rounded-sm bg-secondary/10 px-2 py-1 font-medium text-secondary">
                    {post.category}
                  </span>
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readTime} čitanja</span>
                </div>
                <h2 className="mt-4 font-sans text-xl font-bold text-foreground transition-colors group-hover:text-secondary">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-secondary">
                  Čitaj više →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-2xl font-bold text-foreground lg:text-3xl">
            Imaš pitanje?
          </h2>
          <p className="mt-3 text-foreground/70">
            Kontaktiraj nas ili rezerviraj besplatnu konzultaciju.
          </p>
          <div className="mt-6">
            <Button href="/booking">Rezerviraj konzultaciju</Button>
          </div>
        </div>
      </section>
    </>
  );
}
