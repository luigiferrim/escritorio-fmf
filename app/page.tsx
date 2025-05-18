import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/hero-home.jpg"
          alt="Escritório de advocacia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Ferri, Maines & Fernandes
          </h1>
          <p className="mb-6 max-w-2xl text-lg sm:text-xl">
            Excelência jurídica em Direito Médico, Militar, Trabalhista e Civil,
            com atendimento estratégico e personalizado.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/contato">Entre em Contato</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/sobre">Conheça Nosso Escritório</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Apresentação do Escritório */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Sobre Nosso Escritório
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Com mais de uma década de atuação, somos referência em Direito
              Médico, Militar, Trabalhista e Civil. Atuamos com ética,
              excelência técnica e foco em resultados, sempre com atendimento
              próximo e humano.
            </p>
            <Button asChild>
              <Link href="/sobre" className="inline-flex items-center gap-2">
                Saiba Mais <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Áreas de Atuação
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Direito Médico",
                description:
                  "Defesa de profissionais da saúde e clínicas em demandas judiciais e administrativas.",
              },
              {
                title: "Direito Militar",
                description:
                  "Assessoria jurídica especializada para militares ativos e inativos.",
              },
              {
                title: "Direito Trabalhista",
                description:
                  "Atuação patronal com foco em prevenção e contencioso estratégico.",
              },
              {
                title: "Direito Civil",
                description:
                  "Contratos, responsabilidade civil, família e sucessões.",
              },
            ].map((area, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advogados Destaque */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Nossos Advogados
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Dra. Janaina Ferri Maines",
                role: "Direito Trabalhista Patronal",
                image: "/janaina.jpg",
              },
              {
                name: "Dr. Rafael Maines",
                role: "Direito Médico e Civil",
                image: "/rafael.jpg",
              },
              {
                name: "Dra. Roberta Dalva Fernandes",
                role: "Direito de Família, Civil, Penal e Militar",
                image: "/roberta.jpg",
              },
            ].map((advogado, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all hover:shadow-md"
              >
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src={advogado.image}
                    alt={advogado.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="mb-1 text-xl font-bold">{advogado.name}</h3>
                  <p className="mb-4 text-muted-foreground">{advogado.role}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/advogados">Ver Perfil</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/advogados">Conheça Toda Nossa Equipe</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Informações e Mapa */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight">
                Localização e Horários
              </h2>
              <div className="mb-8 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-bold">Endereço</h3>
                    <p className="text-muted-foreground">
                      R. Emíliano Ramos, 490 - Centro
                      <br />
                      Lages - SC, 88502-216
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-bold">Horário de Funcionamento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 09:00–12:00, 14:00–18:00
                      <br />
                      Sábado e Domingo: Fechado
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-bold">Telefone</h3>
                    <p className="text-muted-foreground">
                      (49) 3222-8979 / WhatsApp: +55 49 98412-3389
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-bold">E-mail</h3>
                    <p className="text-muted-foreground">
                      advogadosfmf@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/contato">Entre em Contato</Link>
              </Button>
            </div>
            <div className="h-[400px] overflow-hidden rounded-lg bg-gray-200">
              <iframe
                src="https://maps.google.com/maps?q=R.%20Em%C3%ADliano%20Ramos%2C%20490%2C%20Centro%2C%20Lages%2C%20SC&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Escritório"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
