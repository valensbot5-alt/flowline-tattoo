import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { ExitIntent } from "@/components/ExitIntent";
import { SocialProof } from "@/components/SocialProof";
import { CookieBanner } from "@/components/CookieBanner";
import { LoadingScreen } from "@/components/LoadingScreen";
import { LocalBusinessSchema } from "@/components/SchemaOrg";
import { GoogleAnalytics, GoogleTagManager } from "@/components/Analytics";
import { STUDIO } from "@/lib/constants";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${STUDIO.name} — Tattoo Studio ${STUDIO.city}`,
    template: `%s | ${STUDIO.name}`,
  },
  description: STUDIO.description,
  metadataBase: new URL("https://inkstudio.hr"),
  openGraph: {
    type: "website",
    locale: "hr_HR",
    siteName: STUDIO.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LoadingScreen />
        <LocalBusinessSchema />
        <GoogleAnalytics />
        <GoogleTagManager />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyCTA />
        <ExitIntent />
        <SocialProof />
        <CookieBanner />
      </body>
    </html>
  );
}
