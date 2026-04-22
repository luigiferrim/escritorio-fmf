"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import Script from "next/script";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

declare global {
  interface Window {
    grecaptcha?: {
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
      ready: (callback: () => void) => void;
    };
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
    website: "",
    startedAt: Date.now(),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, assunto: value }));
  };

  const getRecaptchaToken = async () => {
    if (!RECAPTCHA_SITE_KEY) return undefined;

    if (!window.grecaptcha) {
      throw new Error("reCAPTCHA indisponível");
    }

    return new Promise<string>((resolve, reject) => {
      window.grecaptcha?.ready(() => {
        window.grecaptcha
          ?.execute(RECAPTCHA_SITE_KEY, { action: "contact_form" })
          .then(resolve)
          .catch(reject);
      });
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const recaptchaToken = await getRecaptchaToken();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await res.json();
      if (!res.ok || data?.error) {
        console.error("Erro ao enviar formulário:", data?.error || data);
        alert("Ocorreu um erro ao enviar. Tente novamente.");
      } else {
        setSubmitSuccess(true);
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          assunto: "",
          mensagem: "",
          website: "",
          startedAt: Date.now(),
        });
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Ocorreu um erro ao enviar. Tente novamente.");
    }

    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
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
          (49) 3222-8979
          <br />
          WhatsApp: +55 49 98412-3389
        </>
      ),
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "advogadosfmf@gmail.com",
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: (
        <>
          Segunda a Sexta: 09:00–12:00, 14:00–18:00
          <br />
          Sábado e Domingo: Fechado
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col">
      {RECAPTCHA_SITE_KEY ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      ) : null}

      <section className="relative h-[380px] w-full overflow-hidden">
        <Image
          src="/hero-contato.jpg"
          alt="Contato"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="mb-4 animate-fade-in-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Fale com a Ferri, Maines &amp; Fernandes
          </h1>
          <p className="max-w-2xl animate-fade-in-up text-lg delay-100">
            Temos uma equipe pronta para atender você com ética, agilidade e
            excelência técnica. Preencha o formulário ou nos chame pelo
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
                    title="Localização do Escritório"
                  ></iframe>
                </div>
              </div>
            </div>

            <div>
              <Card className="overflow-hidden border-border/70 bg-white shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
                    Envie sua Mensagem
                  </h2>

                  {submitSuccess ? (
                    <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-5 text-green-800">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      <div>
                        <p className="font-semibold">
                          Mensagem enviada com sucesso!
                        </p>
                        <p className="text-sm">
                          Entraremos em contato o mais breve possível.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        autoComplete="off"
                        tabIndex={-1}
                        className="hidden"
                        aria-hidden="true"
                      />

                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">E-mail</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seu.email@exemplo.com"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="telefone">Telefone</Label>
                          <Input
                            id="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            placeholder="(49) 99999-9999"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="assunto">Assunto</Label>
                        <Select
                          onValueChange={handleSelectChange}
                          value={formData.assunto}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o assunto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Direito Civil">
                              Direito Civil
                            </SelectItem>
                            <SelectItem value="Direito Trabalhista">
                              Direito Trabalhista
                            </SelectItem>
                            <SelectItem value="Direito Médico">
                              Direito Médico
                            </SelectItem>
                            <SelectItem value="Direito Militar">
                              Direito Militar
                            </SelectItem>
                            <SelectItem value="Outros">Outros</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mensagem">Mensagem</Label>
                        <Textarea
                          id="mensagem"
                          name="mensagem"
                          value={formData.mensagem}
                          onChange={handleChange}
                          placeholder="Descreva sua necessidade..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Enviando..."
                        ) : (
                          <>
                            <Send size={16} />
                            Enviar Mensagem
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
