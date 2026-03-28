import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = bookingSchema.parse(body);

    // TODO: Integriraj email servis (Resend, Nodemailer, itd.)
    // Za sada samo logiramo podatke
    console.log("Nova booking rezervacija:", data);

    // Ovdje dodaj slanje emaila:
    // await sendEmail({
    //   to: STUDIO.email,
    //   subject: `Nova rezervacija: ${data.name}`,
    //   ...
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ error: "Neispravni podaci" }, { status: 400 });
    }
    return NextResponse.json({ error: "Greška servera" }, { status: 500 });
  }
}
