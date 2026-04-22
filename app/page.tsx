import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
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
    description: "Contratos, responsabilidade civil, família e sucessões.",
  },
];

const advogados = [
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
    name: "Dra. Roberta Costa Fernandes",
    role: "Direito de Família, Civil, Penal e Militar",
    image: "/roberta.jpg",
  },
];

const faqItems = [
  {
    q: "Quais são as áreas de atuação do escritório?",
    a: "Atuamos em quatro áreas principais: Direito Médico, Direito Militar, Direito Trabalhista Patronal e Direito Civil (incluindo Família, Sucessões e Penal), atendendo pessoas físicas, médicos, militares e empresas em Lages e região.",
  },
  {
    q: "Onde fica o escritório e qual o horário de atendimento?",
    a: "Estamos na R. Emíliano Ramos, 490 - Centro, Lages - SC, CEP 88502-216. Atendemos de segunda a sexta, das 09:00 às 12:00 e das 14:00 às 18:00. Telefone (49) 3222-8979 e WhatsApp +55 49 98412-3389.",
  },
  {
    q: "Quem são os sócios responsáveis pelo escritório?",
    a: "O escritório tem três sócios fundadores: Dra. Janaina Ferri Maines (OAB/SC 14.868), Dr. Rafael Maines (OAB/SC 9.118) e Dra. Roberta Costa Fernandes (OAB/SC 14.869).",
  },
  {
    q: "Vocês atendem clientes fora de Lages?",
    a: "Sim. Além de Lages, atendemos clientes de toda a região serrana catarinense e oferecemos consulta por WhatsApp e atendimentos remotos quando a demanda permite.",
  },
  {
    q: "Como agendar uma consulta?",
    a: "Você pode preencher o formulário na página de contato, ligar para (49) 3222-8979 ou nos chamar diretamente pelo WhatsApp. Retornamos o contato o mais breve possível.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/hero-home.jpg"
          alt="Escritório de advocacia"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="mb-4 animate-fade-in-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Ferri, Maines &amp; Fernandes
          </h1>
          <p className="mb-8 max-w-2xl animate-fade-in-up text-lg leading-relaxed delay-100 sm:text-xl">
            Excelência jurídica em Direito Médico, Militar, Trabalhista e Civil,
            com atendimento estratégico e personalizado.
          </p>
          <div className="flex animate-fade-in-up flex-col gap-3 delay-200 sm:flex-row">
            <Button asChild size="lg" className="shadow-sm">
              <Link href="/contato">Entre em Contato</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/sobre">Conheça Nosso Escritório</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Sobre Nosso Escritório
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
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

      <section className="section-wash py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Áreas de Atuação
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area, index) => (
              <Card
                key={index}
                className="border-border/70 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold">{area.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Procurando Advogado em Lages, SC?
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              O escritório Ferri, Maines &amp; Fernandes atua há mais de uma
              década com excelência em Direito Médico, Direito Trabalhista
              Patronal, Direito Militar e Direito Civil na região serrana de
              Santa Catarina.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Atendemos profissionais da saúde, militares ativos e inativos,
              empresas e pessoas físicas que buscam assessoria jurídica séria e
              personalizada em Lages e região.
            </p>
          </div>
        </div>
      </section>

      <section className="section-wash py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Nossos Advogados
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {advogados.map((advogado, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border/70 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src={advogado.image}
                    alt={advogado.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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
          <div className="mt-10 text-center">
            <Button asChild>
              <Link href="/advogados">Conheça Toda Nossa Equipe</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <div className="mx-auto max-w-3xl space-y-3">
            {faqItems.map((item, i) => (
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

      <section className="section-wash py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold tracking-tight">
                Localização e Horários
              </h2>
              <div className="mb-8 space-y-5">
                <div className="flex items-start gap-3 rounded-xl bg-white/70 p-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-bold">Endereço</h3>
                    <p className="text-muted-foreground">
                      R. Emíliano Ramos, 490 - Centro
                      <br />
                      Lages - SC, 88502-216
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-white/70 p-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-bold">Horário de Funcionamento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 09:00–12:00, 14:00–18:00
                      <br />
                      Sábado e Domingo: Fechado
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-white/70 p-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-bold">Telefone</h3>
                    <p className="text-muted-foreground">
                      (49) 3222-8979 / WhatsApp: +55 49 98412-3389
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-white/70 p-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
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
            <div className="h-[420px] overflow-hidden rounded-2xl border border-border/70 bg-gray-200 shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=R.%20Em%C3%ADliano%20Ramos%2C%20490%2C%20Centro%2C%20Lages%2C%20SC&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
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
