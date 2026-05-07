import Link from "next/link"
import { PettrusLogo } from "./pettrus-logo"

export function Footer() {
  return (
    <footer className="bg-[#000815] text-white py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo */}
          <div>
            <PettrusLogo className="h-12 w-auto" variant="white" />
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-[#4a90d9] mb-4 text-sm">Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/quem-somos" className="text-white/75 hover:text-white transition-colors text-sm">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/nossos-servicos" className="text-white/75 hover:text-white transition-colors text-sm">
                  Nossos Serviços
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-heading font-semibold text-[#4a90d9] mb-4 text-sm">Contato</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:08005915945" className="text-white/75 hover:text-white transition-colors text-sm">
                  Assistência 24h
                </a>
              </li>
              <li>
                <a href="https://wa.me/553220280289" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-white transition-colors text-sm">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Endereços */}
          <div>
            <h4 className="font-heading font-semibold text-[#4a90d9] mb-4 text-sm">Endereços</h4>
            <ul className="space-y-2.5">
              <li className="text-white/75 text-sm">Matriz: São Paulo – SP</li>
              <li className="text-white/75 text-sm">Filiais em todo o Brasil.</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Pettrus Proteção Veicular. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
