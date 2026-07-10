import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { areas, getArea } from "@/lib/areas";
import {
  SITE_URL,
  SITE_NAME,
  PHONE_E164,
  ADDRESS,
  whatsappUrl,
} from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: {
      canonical: `/areas-de-atuacao/${area.slug}`,
    },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `/areas-de-atuacao/${area.slug}`,
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const pageUrl = `${SITE_URL}/areas-de-atuacao/${area.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: area.h1,
    serviceType: area.nome,
    description: area.metaDescription,
    url: pageUrl,
    provider: {
      "@type": "Attorney",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      telephone: PHONE_E164,
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.state,
        postalCode: ADDRESS.postalCode,
        addressCountry: "BR",
      },
    },
    areaServed: [
      { "@type": "City", name: "Lages" },
      { "@type": "State", name: "Santa Catarina" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Áreas de Atuação",
        item: `${SITE_URL}/areas-de-atuacao`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.nome,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="relative h-[320px] w-full overflow-hidden">
        <Image
          src="/hero-sobre.jpg"
          alt={`${area.nome} em Lages - SC, escritório Ferri, Maines & Fernandes`}
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="mb-4 animate-fade-in-up text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {area.h1}
          </h1>
          <p className="max-w-2xl animate-fade-in-up text-lg delay-100">
            {area.heroSub}
          </p>
        </div>
      </section>

      <nav
        aria-label="Breadcrumb"
        className="border-b border-border/70 bg-white"
      >
        <div className="container mx-auto flex items-center gap-1 px-4 py-3 text-sm text-muted-foreground md:px-6">
          <Link href="/" className="transition-colors hover:text-primary">
            Início
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link
            href="/areas-de-atuacao"
            className="transition-colors hover:text-primary"
          >
            Áreas de Atuação
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="font-medium text-primary">{area.nome}</span>
        </div>
      </nav>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            {area.intro.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            <div className="flex flex-col justify-center gap-3 pt-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2 bg-green-500 hover:bg-green-600">
                <a
                  href={whatsappUrl(area.cta.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contato">Agendar Consulta</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {area.sections.map((section, sectionIndex) => (
        <section
          key={section.h2}
          className={`py-16 ${sectionIndex % 2 === 0 ? "section-wash" : ""}`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {section.h2}
            </h2>
            {section.paragraphs ? (
              <div className="mx-auto max-w-3xl space-y-4">
                {section.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-lg leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}
            {section.items ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {section.items.map((item) => (
                  <Card
                    key={item.h3}
                    className="border-border/70 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <h3 className="mb-3 text-xl font-bold">{item.h3}</h3>
                      <p className="leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ))}

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <div className="mx-auto max-w-3xl space-y-3">
            {area.faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-border/70 bg-white p-5 transition-all open:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-primary transition-transform group-open:rotate-45">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1v12M1 7h12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {area.related.length > 0 ? (
        <section className="section-wash py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-6 text-center text-2xl font-bold tracking-tight">
              Veja também
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {area.related.map((related) => (
                <Button key={related.slug} asChild variant="outline">
                  <Link
                    href={`/areas-de-atuacao/${related.slug}`}
                    className="inline-flex items-center gap-2"
                  >
                    {related.label} <ArrowRight size={14} />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {area.cta.title}
            </h2>
            <p className="mb-8 text-lg">{area.cta.text}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-green-500 text-white hover:bg-green-600"
              >
                <a
                  href={whatsappUrl(area.cta.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} />
                  Chamar no WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contato">Agendar uma Consulta</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
