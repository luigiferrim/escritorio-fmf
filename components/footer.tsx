import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Ferri, Maines & Fernandes</h3>
            <p className="text-sm text-muted-foreground">
              Advocacia com mais de uma década de excelência nas áreas do Direito Médico, Militar, Trabalhista e Civil.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Áreas de Atuação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Direito Médico
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Direito Militar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Direito Trabalhista
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Direito Civil
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contato</h3>
            <address className="not-italic">
              <p className="mb-2 text-sm text-muted-foreground">R. Emíliano Ramos, 490 - Centro</p>
              <p className="mb-2 text-sm text-muted-foreground">Lages - SC, 88502-216</p>
              <p className="mb-2 text-sm text-muted-foreground">Tel: (49) 3222-8979</p>
              <p className="text-sm text-muted-foreground">Email: advogadosfmf@gmail.com</p>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/fmfadvogadoss/" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </Link>
              {/* LinkedIn, Facebook e Twitter estão como placeholders */}
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin size={20} aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} aria-hidden="true" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} aria-hidden="true" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ferri, Maines & Fernandes. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-primary">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
