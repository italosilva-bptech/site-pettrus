"use client"

import Link from "next/link"
import { Shield, Car, TreePine, Zap } from "lucide-react"
import { Button } from "./ui/button"

const coverages = [
  {
    icon: Shield,
    title: "Roubo e furto",
    description: "Proteção completa contra subtrações inesperadas.",
  },
  {
    icon: Car,
    title: "Colisões",
    description: "Cobertura para danos materiais em acidentes.",
  },
  {
    icon: TreePine,
    title: "Danos da natureza",
    description: "Segurança contra eventos climáticos severos.",
  },
  {
    icon: Zap,
    title: "Socorro emergencial",
    description: "Atendimento rápido em situações críticas.",
  },
]

export function CoveragesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Coberturas que acompanham a sua rotina!
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Imprevistos acontecem. Estar preparado faz toda a diferença.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {coverages.map((coverage, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-accent/30 transition-all group"
            >
              <div className="w-12 h-12 bg-[#e8f4fd] rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <coverage.icon className="w-6 h-6 text-[#4a90d9]" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                {coverage.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {coverage.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          {/* Ajustado para a rota /nossos-servicos conforme sua estrutura de pastas */}
          <Link href="/nossos-servicos"> 
            <Button
              variant="outline"
              className="rounded-full px-8 py-2.5 text-[#4a90d9] border-[#4a90d9] hover:bg-[#4a90d9] hover:text-white transition-colors font-medium"
            >
              Saiba mais!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}