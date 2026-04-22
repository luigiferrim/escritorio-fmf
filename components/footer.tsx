import Link from "next/link";
import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Ferri, Maines &amp; Fernandes
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Advocacia com mais de uma década de excelência nas áreas do
              Direito Médico, Militar, Trabalhista e Civil.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Áreas de Atuação</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Direito Médico",
                "Direito Militar",
                "Direito Trabalhista",
                "Direito Civil",
              ].map((area) => (
                <li key={area}>
                  <Link
                    href="/sobre"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contato</h3>
            <address className="not-italic space-y-2 text-sm text-muted-foreground">
              <p>R. Emíliano Ramos, 490 - Centro</p>
              <p>Lages - SC, 88502-216</p>
              <p>
                <a
                  href="tel:+554932228979"
                  className="transition-colors hover:text-primary"
                >
                  Tel: (49) 3222-8979
                </a>
              </p>
              <p>
                <a
                  href="mailto:advogadosfmf@gmail.com"
                  className="transition-colors hover:text-primary"
                >
                  Email: advogadosfmf@gmail.com
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/fmfadvogadoss/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram size={20} aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/70 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ferri, Maines &amp; Fernandes. Todos os direitos
              reservados.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="#" className="transition-colors hover:text-primary">
                Política de Privacidade
              </Link>
              <Link href="#" className="transition-colors hover:text-primary">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
