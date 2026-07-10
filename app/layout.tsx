import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import {
  SITE_URL,
  SITE_NAME,
  PHONE_E164,
  ADDRESS,
  EMAIL,
  INSTAGRAM_URL,
  CITIES_SERVED,
} from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Advogados em Lages - SC | Ferri, Maines & Fernandes",
    template: "%s | FMF Advogados",
  },
  description:
    "Escritório de advocacia em Lages - SC com sócios com até 30 anos de atuação em Direito Trabalhista Patronal, Médico, de Família, Contratos e Militar. (49) 3222-8979.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: SITE_NAME,
    title: "Advogados em Lages - SC | Ferri, Maines & Fernandes",
    description:
      "Escritório de advocacia em Lages - SC: Direito Trabalhista Patronal, Médico, Família e Divórcio, Contratos, Empresarial e Militar.",
    images: [
      {
        url: "/escritorio.jpg",
        width: 1200,
        height: 630,
        alt: "Escritório Ferri, Maines & Fernandes em Lages - SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    description:
      "Escritório de advocacia em Lages - SC com atuação em Direito Trabalhista Patronal, Direito Médico, Direito de Família e Divórcio, Contratos, Direito Empresarial e Direito Militar.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/escritorio.jpg`,
    telephone: PHONE_E164,
    email: EMAIL,
    slogan: "Advocacia em Lages, Santa Catarina",
    knowsLanguage: "pt-BR",
    hasMap:
      "https://maps.google.com/?q=R.+Em%C3%ADliano+Ramos,+490,+Centro,+Lages,+SC",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.postalCode,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.8166,
      longitude: -50.3261,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "14:00",
        closes: "18:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+5549984123389",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
    sameAs: [INSTAGRAM_URL],
    areaServed: [
      ...CITIES_SERVED.map((city) => ({
        "@type": "City",
        name: city,
        addressRegion: "SC",
        addressCountry: "BR",
      })),
      { "@type": "State", name: "Santa Catarina", addressCountry: "BR" },
    ],
    serviceType: [
      "Direito Trabalhista Patronal",
      "Direito Médico",
      "Direito de Família",
      "Divórcio",
      "Contratos e Direito Civil",
      "Direito Empresarial",
      "Direito Militar",
    ],
    employee: [
      {
        "@type": "Person",
        name: "Janaina Ferri Maines",
        honorificPrefix: "Dra.",
        jobTitle: "Advogada",
        knowsAbout: ["Direito Trabalhista Patronal", "Direito Empresarial"],
      },
      {
        "@type": "Person",
        name: "Rafael Maines",
        honorificPrefix: "Dr.",
        jobTitle: "Advogado",
        knowsAbout: [
          "Direito Médico",
          "Direito Civil",
          "Contratos",
          "Direito Militar",
        ],
      },
      {
        "@type": "Person",
        name: "Roberta Costa Fernandes",
        honorificPrefix: "Dra.",
        jobTitle: "Advogada",
        knowsAbout: ["Direito de Família", "Divórcio", "Direito Militar"],
      },
    ],
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
