import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade do site do escritório Ferri, Maines & Fernandes Advogados Associados, de Lages - SC, em conformidade com a LGPD.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-lg text-white/90">
            Como tratamos os seus dados pessoais neste site
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-3xl space-y-8 px-4 md:px-6">
          <div className="space-y-3">
            <p className="leading-relaxed text-muted-foreground">
              Esta Política de Privacidade descreve como o Ferri, Maines &amp;
              Fernandes Advogados Associados, com sede na R. Emíliano Ramos,
              490, Centro, Lages - SC, CEP 88502-216, trata os dados pessoais
              coletados por meio deste site, em conformidade com a Lei Geral de
              Proteção de Dados Pessoais (Lei nº 13.709/2018, LGPD).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">
              1. Dados que coletamos
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Ao preencher o formulário de contato, você nos fornece: nome
              completo, e-mail, telefone, assunto de interesse e a mensagem que
              descrever. Não coletamos dados sensíveis pelo formulário e
              recomendamos que detalhes do seu caso sejam tratados diretamente
              com o advogado, em canal reservado.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">
              2. Finalidade do tratamento
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Utilizamos os dados exclusivamente para responder ao seu contato,
              agendar atendimentos e prestar as informações solicitadas. Não
              vendemos, alugamos ou compartilhamos seus dados com terceiros
              para fins de marketing.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">
              3. Compartilhamento e operadores
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Para o funcionamento do formulário, utilizamos serviços de
              tecnologia que processam os dados em nosso nome, como o serviço
              de encaminhamento de mensagens e a verificação antispam
              (reCAPTCHA, do Google). Esses serviços tratam os dados apenas
              para viabilizar a entrega da sua mensagem.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">
              4. Sigilo profissional
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Toda comunicação com o escritório é protegida pelo sigilo
              profissional do advogado, nos termos do Estatuto da Advocacia
              (Lei nº 8.906/1994) e do Código de Ética e Disciplina da OAB,
              independentemente de contratação.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">
              5. Armazenamento e segurança
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Mantemos os dados pelo tempo necessário ao atendimento da sua
              solicitação e ao cumprimento de obrigações legais. Adotamos
              medidas técnicas e administrativas para proteger os dados contra
              acessos não autorizados.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">
              6. Seus direitos
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Nos termos da LGPD, você pode solicitar a confirmação do
              tratamento, o acesso, a correção, a anonimização ou a exclusão
              dos seus dados pessoais, entre outros direitos previstos no art.
              18 da lei.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">
              7. Contato do responsável
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta
              política, entre em contato pelo e-mail advogadosfmf@gmail.com ou
              pelo telefone (49) 3222-8979.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">
              8. Atualizações
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Esta política pode ser atualizada para refletir mudanças legais
              ou operacionais. A versão vigente estará sempre disponível nesta
              página.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
