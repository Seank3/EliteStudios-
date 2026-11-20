import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Elite Studios Kungu — Create. Produce. Entertain. | Photography, Audio & Entertainment, Kampala",
  description:
    "Elite Studios Kungu is a creative entertainment company in Kungu, Kampala, Uganda — photography, audio recording, film production, entertainment and talent. Create. Produce. Entertain.",
  keywords: [
    "photography studio Kampala", "audio recording studio Kampala", "entertainment agency Kampala",
    "music recording Uganda", "creative production Uganda", "Elite Studios Kungu",
  ],
  openGraph: {
    title: "Elite Studios Kungu — Create. Produce. Entertain.",
    description: SITE.support,
    type: "website",
    locale: "en_UG",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Elite Studios Kungu",
              description: SITE.support,
              address: { "@type": "PostalAddress", addressLocality: "Kungu, Kampala", addressCountry: "UG" },
              telephone: SITE.phone,
              email: SITE.email,
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
