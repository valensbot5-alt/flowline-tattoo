"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, type BookingFormData } from "@/lib/schemas";

const TYPE_OPTIONS = [
  { value: "custom", label: "Custom dizajn" },
  { value: "coverup", label: "Cover-up" },
  { value: "popravak", label: "Popravak" },
  { value: "konzultacija", label: "Konzultacija" },
] as const;

const SIZE_OPTIONS = [
  { value: "mala", label: "Mala (do 10 cm)" },
  { value: "srednja", label: "Srednja (10-20 cm)" },
  { value: "velika", label: "Velika (20+ cm)" },
] as const;

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  async function onSubmit(data: BookingFormData) {
    setStatus("sending");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-secondary/30 bg-secondary/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
          <svg className="h-8 w-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-sans text-xl font-bold text-secondary">Zahtjev poslan!</h3>
        <p className="mt-2 text-sm text-foreground/70">
          Kontaktirat ćemo te u roku 24 sata za potvrdu termina.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-sm border border-secondary px-6 py-2 text-sm font-medium text-secondary transition-colors hover:bg-secondary hover:text-primary min-h-[44px]"
        >
          Pošalji novi zahtjev
        </button>
      </div>
    );
  }

  const inputClass =
    "mt-1 block w-full rounded-sm border border-white/10 bg-primary px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="booking-name" className="block text-sm font-medium text-foreground">
            Ime i prezime *
          </label>
          <input type="text" id="booking-name" {...register("name")} className={inputClass} placeholder="Tvoje ime" />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="booking-email" className="block text-sm font-medium text-foreground">
            Email *
          </label>
          <input type="email" id="booking-email" {...register("email")} className={inputClass} placeholder="tvoj@email.com" />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="booking-phone" className="block text-sm font-medium text-foreground">
            Telefon *
          </label>
          <input type="tel" id="booking-phone" {...register("phone")} className={inputClass} placeholder="+385 99 123 4567" />
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="booking-date" className="block text-sm font-medium text-foreground">
            Željeni datum *
          </label>
          <input type="date" id="booking-date" {...register("date")} className={inputClass} min={new Date().toISOString().split("T")[0]} />
          {errors.date && <p className="mt-1 text-xs text-red-400">{errors.date.message}</p>}
        </div>

        <div>
          <label htmlFor="booking-type" className="block text-sm font-medium text-foreground">
            Tip tetovaže *
          </label>
          <select id="booking-type" {...register("type")} className={inputClass}>
            <option value="">Odaberi...</option>
            {TYPE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          {errors.type && <p className="mt-1 text-xs text-red-400">{errors.type.message}</p>}
        </div>

        <div>
          <label htmlFor="booking-size" className="block text-sm font-medium text-foreground">
            Veličina *
          </label>
          <select id="booking-size" {...register("size")} className={inputClass}>
            <option value="">Odaberi...</option>
            {SIZE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          {errors.size && <p className="mt-1 text-xs text-red-400">{errors.size.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="booking-position" className="block text-sm font-medium text-foreground">
          Pozicija na tijelu *
        </label>
        <input type="text" id="booking-position" {...register("position")} className={inputClass} placeholder="npr. unutarnji dio podlaktice" />
        {errors.position && <p className="mt-1 text-xs text-red-400">{errors.position.message}</p>}
      </div>

      <div>
        <label htmlFor="booking-message" className="block text-sm font-medium text-foreground">
          Dodatna poruka
        </label>
        <textarea id="booking-message" {...register("message")} rows={4} className={`${inputClass} resize-none`} placeholder="Opiši svoju ideju, stil, referentne slike..." />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-sm bg-secondary px-6 py-3 text-base font-bold text-primary transition-colors hover:bg-accent disabled:opacity-50 min-h-[48px]"
      >
        {status === "sending" ? "Slanje..." : "Rezerviraj termin"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Greška pri slanju. Pokušaj ponovo ili nas kontaktiraj telefonom.
        </p>
      )}
    </form>
  );
}
