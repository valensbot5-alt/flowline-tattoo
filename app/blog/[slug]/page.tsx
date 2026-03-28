import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS, formatDate } from "@/lib/blog";
import { STUDIO } from "@/lib/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article className="bg-background px-4 pt-24 pb-12 sm:px-6 lg:px-8 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-foreground/50 transition-colors hover:text-secondary"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Povratak na blog
          </Link>

          <div className="mt-6 flex items-center gap-3 text-xs text-foreground/50">
            <span className="rounded-sm bg-secondary/10 px-2 py-1 font-medium text-secondary">
              {post.category}
            </span>
            <span>{formatDate(post.date)}</span>
            <span>{post.readTime} čitanja</span>
          </div>

          <h1 className="mt-4 font-sans text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
              FL
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{STUDIO.name} Team</p>
              <p className="text-xs text-foreground/50">Tattoo artist s 2+ godine iskustva</p>
            </div>
          </div>

          {/* Placeholder sadržaj */}
          <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/80">
            <p>{post.excerpt}</p>
            <p>
              Ovo je placeholder sadržaj za blog post. Kad bude potrebno, ovdje će doći
              stvarni sadržaj s E-E-A-T signalima, internim linkovima, slikama svakih
              300-400 riječi i FAQ sekcijom na kraju.
            </p>
            <h2 className="font-sans text-xl font-bold text-foreground">Podnaslovi idu ovako</h2>
            <p>
              Svaki blog post treba pratiti pravila iz content strategije: originalan
              uvod s podatkom, struktura prema user intentu, prirodne ključne riječi i
              engagement elementi kroz tekst.
            </p>
            <h2 className="font-sans text-xl font-bold text-foreground">Još jedan podnaslov</h2>
            <p>
              Cilj je 1500-2500 riječi za main keywords. Blog postovi su dio SEO
              strategije za privlačenje organskog prometa i pozicioniranje kao autoritet
              u industriji.
            </p>
          </div>

          {/* Autor */}
          <div className="mt-12 rounded-sm border border-white/5 bg-primary p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-lg font-bold text-secondary">
                FL
              </div>
              <div>
                <p className="font-sans text-base font-bold text-foreground">
                  {STUDIO.name} Team
                </p>
                <p className="text-sm text-foreground/60">
                  Profesionalni tattoo artist s 2+ godine iskustva. Specijalizirani za sve
                  stilove tetoviranja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-primary px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-2xl font-bold text-foreground lg:text-3xl">
            Inspirirani? Razgovarajmo.
          </h2>
          <p className="mt-3 text-foreground/70">
            Rezerviraj besplatnu konzultaciju.
          </p>
          <div className="mt-6">
            <Button href="/booking">Rezerviraj termin</Button>
          </div>
        </div>
      </section>
    </>
  );
}
