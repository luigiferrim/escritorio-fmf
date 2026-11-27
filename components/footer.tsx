import Link from "next/link";
import { Instagram } from "lucide-react";
import { areas } from "@/lib/areas";
import Logo from "@/components/logo";
import { INSTAGRAM_URL, whatsappUrl } from "@/lib/site";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/15 bg-foreground text-white">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-[2rem]">
              <Logo tone="light" tagline={false} />
            </h3>
            {/* tagline do logo via CSS, para não alterar o texto da página */}
            <span
              className="mono-label mb-8 mt-4 block pl-[1.8rem] !text-[11px] text-white/60 before:content-['Advogados_Associados']"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-white/70">
              Advocacia em Lages - SC nas áreas do Direito Trabalhista
              Patronal, Médico, de Família e Divórcio, Contratos, Empresarial
              e Militar, atendendo toda a região serrana de Santa Catarina.
            </p>
          </div>

          <div>
            <h3 className="mono-label mb-5 border-b border-white/20 pb-3 text-white/60">Áreas de Atuação</h3>
            <ul className="space-y-2 text-sm">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas-de-atuacao/${area.slug}`}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {area.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mono-label mb-5 border-b border-white/20 pb-3 text-white/60">Contato</h3>
            <address className="not-italic space-y-2 text-sm text-white/70">
              <p>R. Emíliano Ramos, 490 - Centro</p>
              <p>Lages - SC, 88502-216</p>
              <p>
                <a
                  href="tel:+554932228979"
                  className="transition-colors hover:text-white"
                >
                  Tel: (49) 3222-8979
                </a>
              </p>
              <p>
                <a
                  href={whatsappUrl(
                    "Olá, gostaria de agendar uma consulta com o escritório Ferri, Maines & Fernandes."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp: (49) 98412-3389
                </a>
              </p>
              <p>
                <a
                  href="mailto:advogadosfmf@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  Email: advogadosfmf@gmail.com
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="mono-label mb-5 border-b border-white/20 pb-3 text-white/60">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white"
              >
                <Instagram size={20} aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/70">
              © {currentYear} Ferri, Maines &amp; Fernandes Advogados
              Associados. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 text-sm text-white/70">
              <Link
                href="/politica-de-privacidade"
                className="transition-colors hover:text-white"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
