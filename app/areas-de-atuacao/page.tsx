import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { areas } from "@/lib/areas";
import { SITE_URL, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Áreas de Atuação | Advogados em Lages - SC",
  description:
    "Direito Trabalhista Patronal, Médico, Família e Divórcio, Contratos, Empresarial e Militar. Veja como o Ferri, Maines & Fernandes atende Lages e a região serrana de SC.",
  alternates: {
    canonical: "/areas-de-atuacao",
  },
  openGraph: {
    title: "Áreas de Atuação | Advogados em Lages - SC",
    description:
      "Direito Trabalhista Patronal, Médico, Família e Divórcio, Contratos, Empresarial e Militar em Lages - SC.",
    url: "/areas-de-atuacao",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Áreas de Atuação",
      item: `${SITE_URL}/areas-de-atuacao`,
    },
  ],
};

export default function AreasDeAtuacaoPage() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="relative h-[300px] w-full overflow-hidden">
        <Image
          src="/hero-sobre.jpg"
          alt="Áreas de atuação do escritório de advocacia Ferri, Maines & Fernandes em Lages - SC"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="mb-4 animate-fade-in-up text-4xl font-bold tracking-tight sm:text-5xl">
            Áreas de Atuação
          </h1>
          <p className="max-w-2xl animate-fade-in-up text-lg delay-100">
            Advocacia em Lages - SC nas áreas em que nossos sócios têm décadas
            de experiência prática
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Atuamos nas áreas em que nossos sócios têm décadas de experiência
              prática no foro de Lages e nos tribunais de Santa Catarina.
              Escolha a área abaixo para entender como podemos ajudar no seu
              caso.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas-de-atuacao/${area.slug}`}
                className="group"
              >
                <Card className="h-full border-border/70 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="flex h-full flex-col p-6">
                    <h2 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
                      {area.nome}
                    </h2>
                    <p className="mb-4 flex-1 leading-relaxed text-muted-foreground">
                      {area.cardDescription}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Saiba mais{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Não encontrou a sua situação?
            </h2>
            <p className="mb-8 text-lg">
              Descreva o seu caso e indicamos o caminho jurídico adequado, com
              transparência desde a primeira conversa.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-green-500 text-white hover:bg-green-600"
              >
                <a
                  href={whatsappUrl(
                    "Olá, gostaria de orientação sobre qual área do direito se aplica ao meu caso."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contato">Enviar Mensagem</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
