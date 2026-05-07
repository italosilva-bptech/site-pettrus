"use client"

import Image from "next/image"
import Link from "next/link" // Importado para navegação entre páginas
import { Phone, Headphones, MapPin } from "lucide-react"
import { Button } from "./ui/button"

const addresses = [
  {
    city: "Juiz de Fora – MG",
    address: "Av. Barão do Rio Branco, 1035",
    complement: "Mariano Procópio – CEP 36045-475",
    mapUrl:
      "https://maps.google.com", // Atualize com o link real do Google Maps
  },
  {
    city: "Piraúba – MG",
    address: "R. Tanguanhanha, 11",
    complement: "CEP 36170-000",
    mapUrl:
      "https://maps.google.com", // Atualize com o link real do Google Maps
  },
]

export function ContactSection() {
  // Removida a função scrollToForm pois o formulário está na Home
  
  return (
    <section id="contato" className="bg-white">
      
      {/* Hero Section */}
      <div className="relative min-h-[450px] lg:min-h-[520px] overflow-hidden">
        
        <Image
          src="/banner_section_fale conosco.webp"
          alt="Equipe de atendimento Pettrus"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay para contraste do texto */}
        <div className="absolute inset-0 bg-[#07162d]/40" />

        {/* Conteúdo Centralizado */}
        <div className="relative container mx-auto px-4 py-20 lg:py-32 text-center flex flex-col items-center justify-center">
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
            Estamos prontos para te atender!
          </h2>

          <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
            Torne-se um associado Pettrus e conte com um atendimento ágil e preparado para cuidar do que é importante para você.
          </p>

          {/* AJUSTADO: Link para o formulário na Home */}
          <Link href="/#formulario">
            <Button
              className="bg-white hover:bg-white/95 text-[#07162d] rounded-full h-12 px-10 text-base font-medium w-full md:w-auto min-w-[320px] shadow-xl"
            >
              Solicitar minha cotação
            </Button>
          </Link>

        </div>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 py-16 border-t border-border">
        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* Text */}
          <div className="lg:pr-8">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-tight">
              Nossa equipe está disponível para oferecer suporte com rapidez e atenção.
            </h3>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white border border-border rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-[#e8f4fd] rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-[#4a90d9]" />
            </div>

            <h4 className="font-heading text-base font-semibold text-foreground mb-2">
              WhatsApp / Atendimento
            </h4>

            <a
              href="tel:3220280289"
              className="text-[#4a90d9] text-lg font-medium hover:underline"
            >
              (32) 2028-0289
            </a>
          </div>

          {/* 24h Card */}
          <div className="bg-white border border-border rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-[#e8f4fd] rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="w-7 h-7 text-[#4a90d9]" />
            </div>

            <h4 className="font-heading text-base font-semibold text-foreground mb-2">
              Plantão 24 horas
            </h4>

            <a
              href="tel:08005915945"
              className="text-[#4a90d9] text-lg font-medium hover:underline"
            >
              0800 591 5945
            </a>
          </div>
        </div>
      </div>

      {/* Addresses Section */}
      <div className="bg-[#f8fafc] py-16 lg:py-24">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Nossos Endereços
            </h3>

            <p className="text-muted-foreground text-sm md:text-base">
              Presença física para garantir proximidade e atendimento sempre que necessário.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {addresses.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border"
              >
                <div className="p-6">
                  <div className="flex items-start gap-3">

                    <div className="w-8 h-8 bg-[#e8f4fd] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#4a90d9]" />
                    </div>

                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1 text-base">
                        {location.city}
                      </h4>

                      <p className="text-muted-foreground text-sm">
                        {location.address}
                      </p>

                      <p className="text-muted-foreground text-sm">
                        {location.complement}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Map Button Area */}
                <div className="relative h-40 bg-gradient-to-br from-[#e8f4fd] to-[#f5f7fa]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1a2744] text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#1a2744]/90 transition-colors shadow-md"
                    >
                      <MapPin className="w-4 h-4" />
                      Visualizar no Mapa
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}