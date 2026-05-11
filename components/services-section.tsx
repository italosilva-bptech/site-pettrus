"use client"

import Image from "next/image"
import Link from "next/link" // Importado para navegação entre páginas
import {
  Shield,
  Car,
  Flame,
  TreePine,
  AlertTriangle,
  Zap,
  Phone,
  Truck,
  Disc,
  Key,
  Wrench,
  Fuel,
} from "lucide-react"

import { Button } from "./ui/button"

const coverages = [
  {
    icon: Shield,
    title: "Roubo e furto",
    description:
      "Amparo em situações inesperadas, com suporte ágil para minimizar impactos.",
  },

  {
    icon: Car,
    title: "Colisões",
    description:
      "Assistência completa para recuperação do seu veículo com eficiência.",
  },

  {
    icon: Flame,
    title: "Incêndio acidental",
    description:
      "Cobertura para ocorrências imprevistas, com atendimento rápido.",
  },

  {
    icon: TreePine,
    title: "Danos da natureza",
    description:
      "Proteção contra eventos naturais como enchentes, chuvas intensas e outros fenômenos.",
  },

  {
    icon: AlertTriangle,
    title: "Atos de vandalismo",
    description:
      "Mais segurança diante de situações externas fora do seu controle.",
  },

  {
    icon: Zap,
    title: "Socorro emergencial",
    description:
      "Atendimento imediato para garantir suporte no momento em que você mais precisa.",
  },
]

const services = [
  {
    icon: Phone,
    title: "Assistência 24h",
    description:
      "Disponibilidade total para atender você a qualquer momento.",
  },

  {
    icon: Fuel,
    title: "Pane seca",
    description:
      "Solução prática para imprevistos simples do dia a dia.",
  },

  {
    icon: Truck,
    title: "Guincho",
    description:
      "Rapidez no atendimento e deslocamento do veículo com segurança.",
  },

  {
    icon: Disc,
    title: "Troca de pneus",
    description:
      "Atendimento ágil para garantir sua mobilidade.",
  },

  {
    icon: Wrench,
    title: "Suporte técnico",
    description:
      "Orientação especializada para diferentes situações.",
  },

  {
    icon: Key,
    title: "Chaveiro 24h",
    description:
      "Acesso facilitado em situações emergenciais.",
  },
]

export function ServicesSection() {
  // Removida a função scrollToForm que usava document.getElementById 
  // porque o formulário está em outra página (Home).

  return (
    <section id="servicos" className="relative">

      {/* Hero Section */}
      <div className="relative min-h-[450px] overflow-hidden">

        <Image
          src="/hero_section_nossos serviços.webp"
          alt="Homem feliz com as chaves do carro"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#1a2744]/30" />

        <div className="relative container mx-auto px-4 py-20 lg:py-28 text-center">

          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 max-w-2xl mx-auto leading-tight">
            Soluções completas para proteger o seu patrimônio!
          </h2>

          <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Suporte contínuo, pensado para acompanhar você em diferentes situações do dia a dia.
          </p>

          {/* Ajustado: Link que leva para a Home e desce até o ID #formulario */}
          <Link href="/#formulario">
            <Button
              className="bg-white hover:bg-white/95 text-[#1a2744] rounded-full px-10 py-5 text-base font-medium shadow-lg"
            >
              Faça sua cotação agora
            </Button>
          </Link>
        </div>
      </div>

      {/* Coverages Section */}
      <div className="py-20 lg:py-28 bg-white">

        <div className="container mx-auto px-4">

          <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-center mb-14">
            Coberturas que fazem a diferença quando você mais precisa.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {coverages.map((coverage, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-xl p-6 hover:shadow-md hover:border-[#4a90d9]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-[#e8f4fd] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#4a90d9]/20 transition-colors">
                  <coverage.icon className="w-6 h-6 text-[#4a90d9]" />
                </div>

                <h4 className="font-heading text-base font-semibold text-foreground mb-2">
                  {coverage.title}
                </h4>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {coverage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services with Image */}
      <div className="py-20 lg:py-28 bg-[#0A2136]">

        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* IMAGE */}
            <div className="relative h-[350px] lg:h-[500px] flex items-center justify-center order-2 lg:order-1">

              <div className="relative w-full h-full max-w-[500px]">

                <Image
                  src="/shieldstg.png"
                  alt="Proteção veicular Pettrus"
                  fill
                  className="object-contain drop-shadow-2xl"
                />

              </div>
            </div>

            {/* Services Content */}
            <div className="order-1 lg:order-2">

              <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white mb-10 leading-tight">
                Uma estrutura preparada para te atender com agilidade e eficiência.
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {services.map((service, index) => (
                  <div key={index} className="flex gap-3">

                    <div className="w-10 h-10 bg-[#e8f4fd] rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-[#4a90d9]" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">
                        {service.title}
                      </h4>

                      <p className="text-white text-xs leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}