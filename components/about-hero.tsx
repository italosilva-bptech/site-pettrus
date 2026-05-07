"use client"

import Link from "next/link"
import { Button } from "./ui/button"

export function AboutHero() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section id="quem-somos" className="relative min-h-[500px] lg:min-h-[550px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner_section%20quem%20somos-sSjLrIZzQGHtvdIE4Y04m1EC68e2kq.webp')`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-lg">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6" style={{ lineHeight: '1.1' }}>
              Construída<br />
              sobre confiança.<br />
              Movida por<br />
              responsabilidade.
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
              Conheça a Pettrus e entenda como a proteção patrimonial mutualista se transforma em segurança real para quem faz parte.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="relative overflow-hidden"> {/* Adicionado overflow-hidden por segurança */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Left - Blue Rounded Shape */}
            <div className="relative">
              {/* Shape with rounded right side - Adjusted for full semicircle */}
              <div 
                className="bg-[#6799C6] text-white p-8 lg:p-12 flex items-center min-h-[280px] lg:min-h-[350px]"
                style={{
                  borderTopRightRadius: '180px',    // Valor aumentado para uma curva mais suave
                  borderBottomRightRadius: '180px', // Agora arredondado também na parte inferior
                  marginLeft: '-50vw',
                  paddingLeft: 'calc(50vw + 1rem)',
                }}
              >
                <h3 className="font-heading text-2xl md:text-3xl lg:text-[2.5rem] leading-tight max-w-xs" style={{ lineHeight: '1.15' }}>
                  Unimos<br />
                  pessoas em<br />
                  torno de um<br />
                  propósito claro
                </h3>
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="flex flex-col justify-center py-12 lg:py-16 lg:pl-12">
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm md:text-base">
                Fundada em 2019 na cidade de Juiz de Fora, a Pettrus Heritage Protection nasceu da necessidade de oferecer uma alternativa segura, transparente e justa para a proteção patrimonial. Nosso modelo mutualista garante que cada associado não seja apenas um cliente, mas parte de uma comunidade focada na segurança coletiva.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
                Mantemos um compromisso inabalável com a gestão ética dos recursos, assegurando agilidade nos processos e a tranquilidade que você e sua família merecem. Na Pettrus, a solidez institucional é a base para relacionamentos duradouros.
              </p>
              <div>
                <Link href="/#formulario">
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-2.5 text-foreground border-foreground hover:bg-foreground hover:text-background transition-colors font-medium"
                  >
                    Seja um cliente Pettrus
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