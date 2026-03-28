import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // TODO: Integriraj email servis
    console.log("Nova kontakt poruka:", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ error: "Neispravni podaci" }, { status: 400 });
    }
    return NextResponse.json({ error: "Greška servera" }, { status: 500 });
  }
}
