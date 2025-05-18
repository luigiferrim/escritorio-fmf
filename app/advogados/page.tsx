import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

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
    },
    {
      id: 3,
      nome: "Dra. Roberta Dalva Costa Vergutz Fernandes",
      foto: "/roberta.jpg",
      cargo: "Sócia Fundadora",
      area: "Direito de Família, Sucessões, Civil, Militar e Penal",
      experiencia: 25,
      bio: "Sócia fundadora do escritório Ferri, Maines & Fernandes Advogados Associados, Roberta Dalva Costa Vergutz Fernandes é advogada desde 1999, com ênfase em Direito de Família, Sucessões e Direito Civil. Também atua com excelência nas áreas de Direito Militar e Penal. Possui especialização em Direito Penal e é reconhecida pela abordagem humanizada e estratégica em causas complexas. Sua trajetória é marcada pelo comprometimento com a justiça e pela busca constante por soluções jurídicas eficazes e responsáveis.",
      oab: "OAB/SC 14.869",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full overflow-hidden">
        <Image
          src="/hero-sobre.jpg"
          alt="Advogados Associados"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Advogados Associados
          </h1>
          <p className="max-w-2xl text-lg">
            Conheça nossa equipe de profissionais altamente qualificados
          </p>
        </div>
      </section>

      {/* Advogados */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {advogados.map((advogado) => (
              <div key={advogado.id} className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-1">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={advogado.foto || "/placeholder.svg"}
                      alt={advogado.nome}
                      width={300}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h2 className="mb-2 text-3xl font-bold">{advogado.nome}</h2>
                  <p className="mb-4 text-xl text-muted-foreground">
                    {advogado.cargo} - {advogado.area}
                  </p>

                  <div className="mb-6 grid gap-4 sm:grid-cols-2">
                    <Card>
                      <CardContent className="p-4">
                        <p className="font-medium">Área de Atuação</p>
                        <p className="text-muted-foreground">{advogado.area}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="font-medium">Experiência</p>
                        <p className="text-muted-foreground">
                          {advogado.experiencia} anos
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="font-medium">Registro</p>
                        <p className="text-muted-foreground">{advogado.oab}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mb-6 space-y-4">
                    <h3 className="text-xl font-bold">Biografia</h3>
                    <p className="text-muted-foreground">{advogado.bio}</p>
                  </div>

                  <Button className="flex items-center gap-2">
                    <MessageCircle size={18} />
                    <span>Fale conosco no WhatsApp</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Precisa de Assessoria Jurídica?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Nossa equipe está pronta para atender às suas necessidades
              jurídicas com excelência e dedicação.
            </p>
            <Button asChild size="lg">
              <Link href="/contato">Agende uma Consulta</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
