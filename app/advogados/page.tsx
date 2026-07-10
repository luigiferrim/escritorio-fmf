import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageCircle,
  Briefcase,
  Calendar,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import { SITE_URL, SITE_NAME, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nossos Advogados em Lages - SC",
  description:
    "Conheça os advogados do Ferri, Maines & Fernandes em Lages: Janaina Ferri Maines (Trabalhista Patronal), Rafael Maines (Direito Médico) e Roberta Costa Fernandes (Família e Militar).",
  alternates: {
    canonical: "/advogados",
  },
  openGraph: {
    title: "Nossos Advogados em Lages - SC",
    description:
      "Três sócios fundadores com mais de 75 anos de advocacia somados em Lages - SC.",
    url: "/advogados",
  },
};

const advogados = [
  {
    id: 1,
    nome: "Dra. Janaina Ferri Maines",
    foto: "/janaina.jpg",
    alt: "Dra. Janaina Ferri Maines, advogada trabalhista patronal em Lages - SC",
    cargo: "Sócia Fundadora",
    area: "Direito Trabalhista Patronal",
    areaLink: "/areas-de-atuacao/direito-trabalhista-patronal",
    areaLinkLabel: "Direito Trabalhista Patronal",
    experiencia: 25,
    bio: "Advogada com 25 anos de atuação, Janaina Ferri Maines é sócia fundadora do escritório Ferri, Maines & Fernandes Advogados Associados. Especialista em Direito do Trabalho com foco na atuação patronal, tem vasta experiência na assessoria jurídica preventiva e contenciosa para empresas de diversos setores. Foi Vice-Presidente da OAB Subseção de Lages no triênio 2013-2015 e Conselheira Estadual da OAB/SC no período de 2019-2021. Reconhecida pela sua postura ética, técnica e estratégica, dedica-se à promoção de soluções jurídicas eficientes para empregadores. Atende empresas de Lages e da região serrana que buscam assessoria trabalhista preventiva e defesa em reclamatórias.",
    oab: "OAB/SC 14.868",
    whatsapp: "5549984123137",
    knowsAbout: ["Direito Trabalhista Patronal", "Direito Empresarial"],
  },
  {
    id: 2,
    nome: "Dr. Rafael Maines",
    foto: "/rafael.jpg",
    alt: "Dr. Rafael Maines, advogado especialista em direito médico em Lages - SC",
    cargo: "Sócio Fundador",
    area: "Direito Médico e Civil",
    areaLink: "/areas-de-atuacao/direito-medico",
    areaLinkLabel: "Direito Médico",
    experiencia: 30,
    bio: "Advogado com mais de três décadas de experiência, Rafael Maines é sócio fundador do Ferri, Maines & Fernandes Advogados Associados. Graduado pela Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS) e pela UNIPLAC, construiu uma carreira sólida nas áreas do Direito Civil e Direito Médico. Atua há mais de 20 anos na defesa de médicos, profissionais da saúde e clínicas, com amplo reconhecimento pela excelência técnica e comprometimento com a ética profissional. Referência em direito médico na serra catarinense, atende profissionais da saúde de Lages e de todo o estado.",
    oab: "OAB/SC 9.118",
    whatsapp: "5549984123389",
    knowsAbout: ["Direito Médico", "Direito Civil", "Contratos"],
  },
  {
    id: 3,
    nome: "Dra. Roberta Costa Fernandes",
    foto: "/roberta.jpg",
    alt: "Dra. Roberta Costa Fernandes, advogada de família em Lages - SC",
    cargo: "Sócia Fundadora",
    area: "Direito de Família, Sucessões, Civil, Militar e Penal",
    areaLink: "/areas-de-atuacao/direito-de-familia",
    areaLinkLabel: "Direito de Família",
    experiencia: 25,
    bio: "Sócia fundadora do escritório Ferri, Maines & Fernandes Advogados Associados, Roberta Dalva Costa Vergutz Fernandes é advogada desde 1999, com ênfase em Direito de Família, Sucessões e Direito Civil. Também atua com excelência nas áreas de Direito Militar e Penal. Possui especialização em Direito Penal e é reconhecida pela abordagem humanizada e estratégica em causas complexas. Atende famílias de Lages em divórcios, guarda, pensão e inventários, além de militares em processos disciplinares.",
    oab: "OAB/SC 14.869",
    whatsapp: "5549984123271",
    knowsAbout: [
      "Direito de Família",
      "Divórcio",
      "Sucessões",
      "Direito Militar",
      "Direito Penal",
    ],
  },
];

const personsJsonLd = {
  "@context": "https://schema.org",
  "@graph": advogados.map((advogado) => ({
    "@type": "Person",
    name: advogado.nome.replace(/^Dra?\.\s/, ""),
    honorificPrefix: advogado.nome.startsWith("Dra.") ? "Dra." : "Dr.",
    jobTitle: "Advogado(a)",
    description: `${advogado.cargo} do ${SITE_NAME}, com atuação em ${advogado.area}.`,
    image: `${SITE_URL}${advogado.foto}`,
    url: `${SITE_URL}/advogados`,
    telephone: `+${advogado.whatsapp}`,
    knowsAbout: advogado.knowsAbout,
    memberOf: {
      "@type": "Organization",
      name: `Ordem dos Advogados do Brasil, Seccional de Santa Catarina (${advogado.oab})`,
    },
    worksFor: {
      "@type": "Attorney",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
    },
  })),
};

export default function AdvogadosPage() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personsJsonLd) }}
      />

      <section className="relative h-[380px] w-full overflow-hidden">
        <Image
          src="/hero-sobre.jpg"
          alt="Advogados do escritório Ferri, Maines & Fernandes em Lages - SC"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="mb-4 animate-fade-in-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Advogados em Lages
          </h1>
          <p className="max-w-2xl animate-fade-in-up text-lg delay-100">
            Três sócios fundadores, mais de 75 anos de advocacia somados e
            atuação direta em cada caso
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {advogados.map((advogado, idx) => (
              <div
                key={advogado.id}
                className={`grid gap-8 rounded-3xl border border-border/70 bg-white p-6 shadow-sm md:grid-cols-5 md:items-center md:p-8 ${
                  idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="md:col-span-2">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border/70 shadow-sm">
                    <Image
                      src={advogado.foto || "/placeholder.svg"}
                      alt={advogado.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                </div>

                <div className="md:col-span-3">
                  <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                    {advogado.cargo}
                  </span>
                  <h2 className="mb-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">
                    {advogado.nome}
                  </h2>
                  <p className="mb-6 text-lg text-muted-foreground">
                    {advogado.area}
                  </p>

                  <div className="mb-6 grid gap-3 sm:grid-cols-3">
                    <Card className="border-border/70 bg-slate-50">
                      <CardContent className="flex items-start gap-3 p-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                          <Briefcase size={16} />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Área
                          </p>
                          <p className="text-sm font-medium text-primary">
                            {advogado.area.split(",")[0]}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-border/70 bg-slate-50">
                      <CardContent className="flex items-start gap-3 p-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                          <Calendar size={16} />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Experiência
                          </p>
                          <p className="text-sm font-medium text-primary">
                            {advogado.experiencia} anos
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-border/70 bg-slate-50">
                      <CardContent className="flex items-start gap-3 p-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                          <BadgeCheck size={16} />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Registro
                          </p>
                          <p className="text-sm font-medium text-primary">
                            {advogado.oab}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mb-6 rounded-2xl bg-slate-50 p-5">
                    <h3 className="mb-2 text-xl font-bold text-primary">
                      Biografia
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {advogado.bio}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      asChild
                      size="lg"
                      className="gap-2 bg-green-500 hover:bg-green-600"
                    >
                      <a
                        href={whatsappUrl(
                          `Olá, gostaria de uma consulta com ${advogado.nome}.`,
                          advogado.whatsapp
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle size={18} />
                        Fale conosco no WhatsApp
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="gap-2">
                      <Link href={advogado.areaLink}>
                        Ver área: {advogado.areaLinkLabel}
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wash py-20">
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
              Precisa de Assessoria Jurídica em Lages?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Nossa equipe está pronta para atender às suas necessidades
              jurídicas com excelência e dedicação.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link href="/contato">
                Solicite seu atendimento <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
