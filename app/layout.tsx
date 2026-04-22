import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ferri, Maines & Fernandes | Escritório de Advocacia",
  description:
    "Escritório de advocacia com mais de uma década de atuação, especializado em Direito Médico, Direito Militar, Direito Trabalhista e Direito Civil.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Ferri, Maines & Fernandes",
    "description": "Escritório de advocacia com mais de uma década de atuação em Direito Médico, Militar, Trabalhista e Civil, com atendimento estratégico e personalizado.",
    "url": "https://www.ferrimainesefernandes.com",
    "logo": "https://www.ferrimainesefernandes.com/logo.png",
    "image": "https://www.ferrimainesefernandes.com/hero-home.jpg",
    "telephone": "+554932228979",
    "email": "advogadosfmf@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Emíliano Ramos, 490",
      "addressLocality": "Lages",
      "addressRegion": "SC",
      "postalCode": "88502-216",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.8166,
      "longitude": -50.3261
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "14:00",
        "closes": "18:00"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+554998412-3389",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://www.instagram.com/fmfadvogadoss/"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Lages",
      "addressRegion": "SC",
      "addressCountry": "BR"
    },
    "serviceType": [
      "Direito Médico",
      "Direito Militar",
      "Direito Trabalhista",
      "Direito Civil"
    ],
    "employee": [
      {
        "@type": "Person",
        "name": "Janaina Ferri Maines",
        "honorificPrefix": "Dra.",
        "jobTitle": "Advogada",
        "knowsAbout": "Direito Trabalhista Patronal"
      },
      {
        "@type": "Person",
        "name": "Rafael Maines",
        "honorificPrefix": "Dr.",
        "jobTitle": "Advogado",
        "knowsAbout": ["Direito Médico", "Direito Civil"]
      },
      {
        "@type": "Person",
        "name": "Roberta Costa Fernandes",
        "honorificPrefix": "Dra.",
        "jobTitle": "Advogada",
        "knowsAbout": ["Direito de Família", "Direito Civil", "Direito Penal", "Direito Militar"]
      }
    ]
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
