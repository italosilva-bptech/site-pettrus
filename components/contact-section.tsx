"use client"

import Image from "next/image"
import Link from "next/link"
import { Headphones, MapPin } from "lucide-react"
import { Button } from "./ui/button"

const addresses = [
  {
    city: "Juiz de Fora – MG",
    address: "Av. Barão do Rio Branco, 1035",
    complement: "Mariano Procópio – CEP 36045-475",
    // Link para abrir o Google Maps em outra aba
    mapLink: "https://www.google.com/maps/search/?api=1&query=Av.+Barão+do+Rio+Branco,+1035+-+Mariano+Procópio,+Juiz+de+Fora+-+MG",
    // Iframe específico para a unidade JF
    mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.4746142106494!2d-43.3551571!3d-21.7513364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b6058097587%3A0x63351337c7891823!2sAv.%20Bar%C3%A3o%20do%20Rio%20Branco%2C%201035%20-%20Mariano%20Proc%C3%B3pio%2C%20Juiz%20de%20Fora%20-%20MG%2C%2036045-475!5e0!3m2!1spt-BR!2sbr!4v1715440000000!5m2!1spt-BR!2sbr"
  },
  {
    city: "Piraúba – MG",
    address: "R. Tanguanhanha, 11",
    complement: "CEP 36170-000",
    mapLink: "https://www.google.com/maps/search/?api=1&query=R.+Tanguanhanha,+11,+Piraúba+-+MG",
    // Iframe específico para a unidade Piraúba
    mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.666138656114!2d-43.0076246!3d-21.4324546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99616058097587%3A0x63351337c7891823!2sR.%20Tanguanhanha%2C%2011%2C%20Pira%C3%BAba%20-%20MG%2C%2036170-000!5e0!3m2!1spt-BR!2sbr!4v1715440000000!5m2!1spt-BR!2sbr"
  },
]

export function ContactSection() {
  return (
    <section id="contato" className="bg-white">
      
      {/* Hero Section */}
      <div className="relative min-h-[450px] lg:min-h-[520px] overflow-hidden">
        
        <Image
          src="/stg_fala_conosco_1.webp"
          alt="Equipe de atendimento STG"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay para contraste do texto */}
        <div className="absolute inset-0 bg-[#07162d]/40" />

        {/* Conteúdo Centralizado */}
        <div className="relative container mx-auto px-4 py-20 lg:py-32 text-center flex flex-col items-center justify-center">
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[3.5rem] font-bold text-white mb-6 leading-tight max-w-4xl">
            Estamos prontos para te atender!
          </h2>

          <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
            Torne-se um associado STG e conte com um atendimento ágil e preparado para cuidar do que é importante para você. 
          </p>

          <Link href="/#formulario">
            <Button
              className="bg-white hover:text-white text-[#07162d] rounded-full h-12 px-10 text-base font-bold w-full md:w-auto min-w-[320px] shadow-xl"
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
              <Image 
                src="/wpp.svg" 
                alt="WhatsApp STG" 
                width={28} 
                height={28} 
                className="w-7 h-7"
              />
            </div>

            <h4 className="font-heading text-base font-semibold text-foreground mb-2">
              WhatsApp / Atendimento
            </h4>

            <a
              href="https://wa.me/553220280289"
              target="_blank"
              rel="noopener noreferrer"
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
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border flex flex-col"
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

                {/* Map Iframe Area */}
                <div className="relative h-64 w-full bg-slate-100">
                  <iframe 
                    src={location.mapIframe} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                  
                  {/* Botão flutuante para abrir no Google Maps App/Web */}
                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-[#1a2744] px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-white transition-all shadow-lg border border-black/5"
                  >
                    <MapPin className="w-3 h-3" />
                    ABRIR NO GOOGLE MAPS
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}