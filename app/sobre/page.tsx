import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Scale, BookOpen } from "lucide-react";

export default function SobrePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full overflow-hidden">
        <Image
          src="/hero-sobre.jpg"
          alt="Sobre o escritório"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Sobre Nosso Escritório
          </h1>
          <p className="max-w-2xl text-lg">
            Conheça nossa história, valores e compromisso com a excelência
            jurídica
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight">
                Nossa História
              </h2>
              <div className="space-y-4 text-lg">
                <p>
                  Com mais de uma década de atuação, o escritório Ferri, Maines
                  & Fernandes Advogados Associados se consolidou pela excelência
                  no atendimento e pela experiência sólida em diversas áreas do
                  Direito.
                </p>
                <p>
                  Desde a sua fundação, o escritório atua nas áreas do Direito
                  Médico, Direito Militar, Direito do Trabalho e Direito Civil,
                  com um time de profissionais altamente qualificados,
                  comprometidos com a ética, a transparência e a busca pelos
                  melhores resultados.
                </p>
                <p>
                  Ao longo dos anos, construímos uma reputação de confiança,
                  oferecendo soluções jurídicas personalizadas e eficazes, tanto
                  na esfera consultiva quanto contenciosa, para pessoas físicas
                  e jurídicas.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/escritorio.jpg"
                alt="Foto da equipe no escritório"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            Missão, Visão e Valores
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="transition-all hover:shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Scale size={24} />
                </div>
                <h3 className="mb-2 text-xl font-bold">Missão</h3>
                <p className="text-muted-foreground">
                  Oferecer soluções jurídicas eficientes e personalizadas, com
                  ética, transparência e profundo conhecimento técnico, sempre
                  focando na defesa dos interesses de nossos clientes.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BookOpen size={24} />
                </div>
                <h3 className="mb-2 text-xl font-bold">Visão</h3>
                <p className="text-muted-foreground">
                  Ser referência regional em excelência jurídica, mantendo uma
                  equipe técnica qualificada, atualizada e comprometida com a
                  evolução do Direito e da sociedade.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Award size={24} />
                </div>
                <h3 className="mb-2 text-xl font-bold">Valores</h3>
                <p className="text-muted-foreground">
                  Ética, transparência, comprometimento, excelência técnica,
                  respeito às pessoas, responsabilidade social e atuação
                  estratégica são os pilares do nosso trabalho.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            Nossos Diferenciais
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Atendimento Personalizado",
                description:
                  "Cada cliente é atendido com atenção individualizada e estratégias jurídicas alinhadas às suas necessidades.",
                icon: <Users className="h-6 w-6" />,
              },
              {
                title: "Equipe Especializada",
                description:
                  "Contamos com profissionais experientes em Direito Médico, Militar, Trabalhista e Civil, oferecendo excelência técnica.",
                icon: <Award className="h-6 w-6" />,
              },
              {
                title: "Comunicação Clara",
                description:
                  "Priorizamos a transparência e o acompanhamento constante dos processos, com linguagem clara e objetiva.",
                icon: <BookOpen className="h-6 w-6" />,
              },
              {
                title: "Atuação Estratégica",
                description:
                  "Aliamos conhecimento técnico com visão prática para alcançar soluções eficazes na esfera judicial e administrativa.",
                icon: <Scale className="h-6 w-6" />,
              },
            ].map((diferencial, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {diferencial.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    {diferencial.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {diferencial.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Precisa de Assessoria Jurídica?
            </h2>
            <p className="mb-8 text-lg">
              Entre em contato conosco para agendar uma consulta e conhecer como
              podemos ajudar você ou sua empresa.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contato">Agende uma Consulta</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/advogados">Conheça Nossa Equipe</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
