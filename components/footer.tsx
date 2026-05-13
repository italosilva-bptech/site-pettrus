import Link from "next/link"
import { Instagram, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#000815] text-white py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
        
          <div className="flex flex-col items-center gap-6"> 
            <Link href="/" className="inline-block">
              <img
                src="/logostgbranco.svg"
                alt="Logo STG"
                className="h-9 w-auto"
              />
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-white/75 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-white/75 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-white/75 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-[#4a90d9] mb-4 text-sm">Sobre a STG</h4>
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
            <h4 className="font-heading font-semibold text-[#4a90d9] mb-4 text-sm">Nossos endereços</h4>
            <ul className="space-y-2.5">
              <li className="text-white/75 text-sm">
                Av. Barão do Rio Branco, 1035 - Mariano Procópio, Juiz de Fora - MG, 36045-475
              </li>
              <li className="text-white/75 text-sm">
                R. Tanguanhanha, 11, Piraúba - MG, 36170-000
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} STG Proteção Veicular. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}