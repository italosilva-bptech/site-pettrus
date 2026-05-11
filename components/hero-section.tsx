"use client"

import Image from "next/image"
import { Button } from "./ui/button"

export function HeroSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById("formulario")
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/banner_stg_home_1.webp"
          alt="Família feliz dentro de um carro"
          fill
          // object-center centraliza no mobile
          // lg:object-right mantém a família à direita no desktop
          className="object-cover object-center lg:object-right"
          priority
        />
        
        {/* OVERLAYS */}
        {/* Mobile: Cor #0E314C com 70% de opacidade (oculto no desktop) */}
        <div className="absolute inset-0 bg-[#0E314C]/70 lg:hidden" />
        
        {/* Desktop: Gradiente original (oculto no mobile) */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#1a2744] via-[#1a2744]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 lg:py-36">
        {/* Texto mantido à esquerda conforme o original */}
        <div className="max-w-lg">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6">
            Segurança para o que realmente importa.
          </h1>
          <p className="text-white/85 text-base md:text-lg mb-10 leading-relaxed max-w-md">
            A STG oferece proteção patrimonial mutualista com gestão responsável, atendimento próximo e soluções eficientes para o seu dia a dia. 
          </p>
          <Button
            onClick={scrollToForm}
            className="bg-white hover:bg-white/95 text-[#1a2744] rounded-full px-10 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Faça sua cotação agora
          </Button>
        </div>
      </div>

      {/* Decorative shape - Mantido apenas no desktop para não poluir o mobile */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-32 opacity-20">
        <svg viewBox="0 0 300 100" className="w-full h-full" fill="none">
          <path
            d="M300 0V100C200 100 100 50 0 80"
            fill="#4a90d9"
            fillOpacity="0.3"
          />
        </svg>
      </div>
    </section>
  )
}