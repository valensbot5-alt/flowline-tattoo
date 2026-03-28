"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-secondary/30 bg-secondary/5 p-6 text-center">
        <p className="font-sans text-lg font-bold text-secondary">Poruka poslana!</p>
        <p className="mt-2 text-sm text-foreground/70">Odgovoriti ćemo ti u roku 24 sata.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-foreground">
          Ime i prezime
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          className="mt-1 block w-full rounded-sm border border-white/10 bg-primary px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          placeholder="Tvoje ime"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          className="mt-1 block w-full rounded-sm border border-white/10 bg-primary px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          placeholder="tvoj@email.com"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-foreground">
          Poruka
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="mt-1 block w-full rounded-sm border border-white/10 bg-primary px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary resize-none"
          placeholder="Napiši nam poruku..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-sm bg-secondary px-6 py-3 text-base font-bold text-primary transition-colors hover:bg-accent disabled:opacity-50 min-h-[48px]"
      >
        {status === "sending" ? "Slanje..." : "Pošalji poruku"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">Greška pri slanju. Pokušaj ponovo ili nas kontaktiraj telefonom.</p>
      )}
    </form>
  );
}
