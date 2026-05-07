"use client"

import { useState } from "react"
import { Phone, Truck, Disc, Key, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    icon: Phone,
    title: "Assistência 24h",
    description: "Disponibilidade total, todos os dias.",
  },
  {
    icon: Truck,
    title: "Guincho",
    description: "Agilidade no deslocamento do seu veículo.",
  },
  {
    icon: Disc,
    title: "Troca de pneus",
    description: "Praticidade no momento certo.",
  },
  {
    icon: Key,
    title: "Chaveiro 24h",
    description: "Acesso facilitado em situações emergenciais.",
  },
]

export function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground mb-3">
              Muito além da proteção:<br />
              suporte real no seu dia a dia!
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8">
              Você não está sozinho, nossa rede está pronta para te atender.
            </p>

            {/* Accordion Items */}
            <div className="space-y-1">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border-b border-border"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex items-center justify-between w-full text-left py-4"
                  >
                    <div className="flex items-center gap-3">
                      <service.icon className="w-5 h-5 text-[#4a90d9]" />
                      <span className="font-semibold text-foreground">{service.title}</span>
                    </div>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-20 pb-4' : 'max-h-0'}`}>
                    <p className="text-muted-foreground text-sm ml-8">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/nossos-servicos">
              <Button
                variant="outline"
                className="mt-8 rounded-full px-8 py-2.5 text-foreground border-foreground hover:bg-foreground hover:text-background transition-colors font-medium"
              >
                Saiba mais!
              </Button>
            </Link>
          </div>

          {/* Right Image - Car with shield */}
          <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carro_pettrus_1-2Q3ZW52ARWmvcOHAec5xTiFZJ9cvlD.webp"
              alt="Carro Pettrus com escudo de proteção"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
