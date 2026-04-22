"use client";

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

export default function AdvogadosPage() {
  const advogados = [
    {
      id: 1,
      nome: "Dra. Janaina Ferri Maines",
      foto: "/janaina.jpg",
      cargo: "Sócia Fundadora",
      area: "Direito Trabalhista Patronal",
      experiencia: 25,
      bio: "Advogada com 25 anos de atuação, Janaina Ferri Maines é sócia fundadora do escritório Ferri, Maines & Fernandes Advogados Associados. Especialista em Direito do Trabalho com foco na atuação patronal, tem vasta experiência na assessoria jurídica preventiva e contenciosa para empresas de diversos setores. Foi Vice-Presidente da OAB – Subseção de Lages no triênio 2013-2015 e Conselheira Estadual da OAB/SC no período de 2019-2021. Reconhecida pela sua postura ética, técnica e estratégica, dedica-se à promoção de soluções jurídicas eficientes para empregadores.",
      oab: "OAB/SC 14.868",
      whatsapp: "5549984123137",
    },
    {
      id: 2,
      nome: "Dr. Rafael Maines",
      foto: "/rafael.jpg",
      cargo: "Sócio Fundador",
      area: "Direito Médico e Civil",
      experiencia: 30,
      bio: "Advogado com mais de três décadas de experiência, Rafael Maines é sócio fundador do Ferri, Maines & Fernandes Advogados Associados. Graduado pela Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS) e pela UNIPLAC, construiu uma carreira sólida nas áreas do Direito Civil e Direito Médico. Atua há mais de 20 anos na defesa de médicos, profissionais da saúde e clínicas, com amplo reconhecimento pela excelência técnica e comprometimento com a ética profissional.",
      oab: "OAB/SC 9.118",
      whatsapp: "5549984123389",
    },
    {
      id: 3,
      nome: "Dra. Roberta Costa Fernandes",
      foto: "/roberta.jpg",
      cargo: "Sócia Fundadora",
      area: "Direito de Família, Sucessões, Civil, Militar e Penal",
      experiencia: 25,
      bio: "Sócia fundadora do escritório Ferri, Maines & Fernandes Advogados Associados, Roberta Dalva Costa Vergutz Fernandes é advogada desde 1999, com ênfase em Direito de Família, Sucessões e Direito Civil. Também atua com excelência nas áreas de Direito Militar e Penal. Possui especialização em Direito Penal e é reconhecida pela abordagem humanizada e estratégica em causas complexas. Sua trajetória é marcada pelo comprometimento com a justiça e pela busca constante por soluções jurídicas eficazes e responsáveis.",
      oab: "OAB/SC 14.869",
      whatsapp: "5549984123271",
    },
  ];

  const openWhatsApp = (number: string) => {
    const url = `https://wa.me/${number}`;
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div className="flex flex-col">
      <section className="relative h-[380px] w-full overflow-hidden">
        <Image
          src="/hero-sobre.jpg"
          alt="Advogados Associados"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="mb-4 animate-fade-in-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Advogados Associados
          </h1>
          <p className="max-w-2xl animate-fade-in-up text-lg delay-100">
            Conheça nossa equipe de profissionais altamente qualificados
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
                      alt={advogado.nome}
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

                  <Button
                    size="lg"
                    className="gap-2 bg-green-500 hover:bg-green-600"
                    onClick={() => openWhatsApp(advogado.whatsapp)}
                  >
                    <MessageCircle size={18} />
                    Fale conosco no WhatsApp
                  </Button>
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
              Precisa de Assessoria Jurídica?
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
