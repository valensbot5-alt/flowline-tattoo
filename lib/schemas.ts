import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, "Ime je obavezno"),
  email: z.string().email("Neispravan email"),
  phone: z.string().min(6, "Telefon je obavezan"),
  date: z.string().min(1, "Odaberi željeni datum"),
  type: z.enum(["custom", "coverup", "popravak", "konzultacija"], {
    message: "Odaberi tip tetovaže",
  }),
  size: z.enum(["mala", "srednja", "velika"], {
    message: "Odaberi veličinu",
  }),
  position: z.string().min(1, "Navedi poziciju na tijelu"),
  message: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Ime je obavezno"),
  email: z.string().email("Neispravan email"),
  message: z.string().min(10, "Poruka mora imati barem 10 znakova"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
