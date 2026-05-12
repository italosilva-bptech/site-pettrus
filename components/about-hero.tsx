"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"

export function AboutHero() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section id="quem-somos" className="relative min-h-[500px] lg:min-h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/stg_quem_somos_1.webp"
            alt="Banner Quem Somos"
            fill
            className="object-cover object-left"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-lg">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6" style={{ lineHeight: '1.1' }}>
              Construída<br />
              sobre confiança.<br />
              Movida por<br />
              responsabilidade.
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
              Conheça a STG e entenda como a proteção patrimonial mutualista se transforma em segurança real para quem faz parte.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          {/* items-stretch garante que as duas colunas tenham sempre a mesma altura */}
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            
            {/* Left Column - Image with central text */}
            <div className="relative h-full">
              <div
                className="relative overflow-hidden flex items-center h-full p-8 lg:p-12"
                style={{
                  marginLeft: '-50vw',
                  paddingLeft: 'calc(50vw + 1rem)',
                }}
              >
                {/* Background Image - Clareada com overlay suave */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/carstgquemsomos.webp"
                    alt="Pessoas em propósito claro"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay reduzido para 40% de opacidade para a imagem aparecer bem */}
                  <div className="absolute inset-0 bg-[#001D3D]/40" />
                </div>

                {/* Texto Centralizado Verticalmente na coluna */}
                <h3 className="relative z-10 font-heading text-2xl md:text-3xl lg:text-[2.5rem] leading-tight max-w-xs text-white" style={{ lineHeight: '1.15' }}>
                  Unimos<br />
                  pessoas em<br />
                  torno de um<br />
                  propósito claro
                </h3>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="flex flex-col justify-center py-12 lg:py-24 lg:pl-16 items-center text-center lg:items-start lg:text-left">
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm md:text-base">
                Cuidar do que realmente importa por meio de um modelo justo, acessível e colaborativo de proteção patrimonial mutualista.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
                Fundada em 2019, na cidade de Juiz de Fora, Minas Gerais, a STG nasceu com uma visão sólida: ir além do básico e oferecer uma experiência pautada em confiança e responsabilidade.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
                Ao longo da nossa trajetória, construímos uma gestão séria, transparente e ética, consolidando nossa atuação como uma associação especializada em proteção veicular. Entendemos, na prática, as necessidades de quem depende do seu veículo no dia a dia, e é isso que orienta cada decisão que tomamos.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
                Mais do que oferecer soluções, construímos relações duradouras com quem escolhe fazer parte. Mantemos um compromisso inabalável com a gestão ética dos recursos, assegurando agilidade nos processos e a tranquilidade que você e sua família merecem.
              </p>

              {/* Botão */}
              <div className="w-full flex justify-center lg:justify-start">
                <Link href="/#formulario">
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-2.5 text-foreground border-foreground hover:bg-foreground hover:text-background transition-colors font-medium"
                  >
                    Seja um cliente STG
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}