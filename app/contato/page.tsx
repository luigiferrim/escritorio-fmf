"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("https://formspree.io/f/xqaqnjpd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSubmitSuccess(true);
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Ocorreu um erro ao enviar. Tente novamente.");
    }

    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full overflow-hidden">
        <Image
          src="/hero-contato.jpg"
          alt="Contato"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Fale com a Ferri, Maines & Fernandes
          </h1>
          <p className="max-w-2xl text-lg">
            Temos uma equipe pronta para atender você com ética, agilidade e
            excelência técnica. Preencha o formulário ou nos chame pelo
            WhatsApp.
          </p>
        </div>
      </section>

      {/* Informações de Contato e Formulário */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight">
                Informações de Contato
              </h2>

              <div className="mb-8 space-y-6">
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
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-bold">Telefone</h3>
                    <p className="text-muted-foreground">
                      (49) 3222-8979
                      <br />
                      WhatsApp: +55 49 98412-3389
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
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-bold">Localização</h3>
                <div className="h-[300px] overflow-hidden rounded-lg bg-gray-200">
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
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-6 text-2xl font-bold">
                    Envie sua Mensagem
                  </h2>

                  {submitSuccess ? (
                    <div className="rounded-lg bg-green-50 p-4 text-green-800">
                      <p className="font-medium">
                        Mensagem enviada com sucesso!
                      </p>
                      <p>Entraremos em contato o mais breve possível.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
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
