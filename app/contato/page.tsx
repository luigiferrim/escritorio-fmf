import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "./contact-form";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato | Advogados em Lages - SC",
  description:
    "Fale com o Ferri, Maines & Fernandes em Lages - SC. Rua Emíliano Ramos, 490, Centro. Telefone (49) 3222-8979, WhatsApp (49) 98412-3389. Atendimento de segunda a sexta.",
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Contato | Advogados em Lages - SC",
    description:
      "Fale com o Ferri, Maines & Fernandes em Lages - SC. Telefone (49) 3222-8979 e WhatsApp (49) 98412-3389.",
    url: "/contato",
  },
};

const contactItems = [
  {
    icon: MapPin,
    title: "Endereço",
    content: (
      <>
        R. Emíliano Ramos, 490 - Centro
        <br />
        Lages - SC, 88502-216
      </>
    ),
  },
  {
    icon: Phone,
    title: "Telefone",
    content: (
      <>
        <a
          href="tel:+554932228979"
          className="transition-colors hover:text-primary"
        >
          (49) 3222-8979
        </a>
        <br />
        WhatsApp: (49) 98412-3389
      </>
    ),
  },
  {
    icon: Mail,
    title: "E-mail",
    content: (
      <a
        href="mailto:advogadosfmf@gmail.com"
        className="transition-colors hover:text-primary"
      >
        advogadosfmf@gmail.com
      </a>
    ),
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    content: (
      <>
        Segunda a Sexta: 09:00 às 12:00 e 14:00 às 18:00
        <br />
        Sábado e Domingo: Fechado
      </>
    ),
  },
];

export default function ContatoPage() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[380px] w-full overflow-hidden">
        <Image
          src="/hero-contato.jpg"
          alt="Contato do escritório de advocacia Ferri, Maines & Fernandes em Lages - SC"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="mb-4 animate-fade-in-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Fale com Advogados em Lages - SC
          </h1>
          <p className="max-w-2xl animate-fade-in-up text-lg delay-100">
            Atendimento presencial no Centro de Lages ou por videochamada para
            toda a região serrana. Preencha o formulário ou nos chame pelo
            WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
                Informações de Contato
              </h2>

              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={item.title}
                      className="border-border/70 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <CardContent className="p-5">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                          <Icon size={18} />
                        </div>
                        <h3 className="mb-1 text-lg font-bold text-primary">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.content}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="mb-8 flex flex-col items-start gap-3 rounded-2xl border border-border/70 bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-medium">
                  Prefere agilidade? Chame no WhatsApp e fale direto com a
                  equipe.
                </p>
                <Button
                  asChild
                  className="shrink-0 gap-2 bg-green-500 hover:bg-green-600"
                >
                  <a
                    href={whatsappUrl(
                      "Olá, gostaria de agendar uma consulta com o escritório Ferri, Maines & Fernandes."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={16} />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold text-primary">
                  Localização
                </h3>
                <div className="h-[320px] overflow-hidden rounded-2xl border border-border/70 bg-gray-200 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.9734934629093!2d-50.3254032!3d-27.817683699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e26a5287cfc89b%3A0x7f3313a1ed09b869!2sR.%20Em%C3%ADliano%20Ramos%2C%20490%20-%20Centro%2C%20Lages%20-%20SC%2C%2088502-216!5e0!3m2!1spt-BR!2sbr!4v1715984812545!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do escritório Ferri, Maines & Fernandes em Lages - SC"
                  ></iframe>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
