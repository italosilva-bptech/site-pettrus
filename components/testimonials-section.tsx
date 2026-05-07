"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    initials: "EL",
    name: "Erika Leticya",
    rating: 5,
    text: "Minha experiência foi excelente. Precisei de atendimento em um momento delicado e fui prontamente atendida. Além do socorro, ainda recebi um suporte que fez toda a diferença. O cuidado e a atenção da equipe realmente se destacam.",
  },

  {
    initials: "SG",
    name: "Saulo Galil",
    rating: 5,
    text: "Registro aqui minha admiração pela Pettrus. Tive uma ótima experiência, com uma equipe extremamente dedicada e atenciosa. Atendimento que transmite confiança do início ao fim.",
  },

  {
    initials: "RM",
    name: "Rafael Marciano",
    rating: 5,
    text: "Já tive experiência com outras associações, mas o atendimento que recebi na Pettrus fez toda a diferença. Fui atendido com agilidade, respeito e eficiência em um momento importante. Recomendo com tranquilidade.",
  },

  {
    initials: "RG",
    name: "Ronan Gama",
    rating: 5,
    text: "Desde o início da minha associação, sempre fui muito bem atendido. A equipe está presente em todos os momentos e pronta para ajudar. Um suporte que realmente funciona quando você precisa.",
  },

  {
    initials: "WJ",
    name: "Wallace José",
    rating: 5,
    text: "Destaco o compromisso e a atenção da equipe. Existe um cuidado genuíno com o associado, sempre com disposição para ajudar e resolver qualquer situação. Um serviço que transmite segurança.",
  },

  {
    initials: "LE",
    name: "Luiz Eduardo",
    rating: 5,
    text: "O atendimento foi ágil e extremamente profissional. Fui atendido com respeito, educação e eficiência. É o tipo de serviço que você espera não precisar usar, mas que, quando precisa, faz toda a diferença.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  /* AUTO PLAY */
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            A experiência de quem já confia na Pettrus
          </h2>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative">

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * 33.333}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-[calc(33.333%-16px)] bg-white border border-border rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">

                    <div className="w-11 h-11 bg-[#f5f7fa] rounded-full flex items-center justify-center text-[#4a90d9] font-semibold text-sm border border-border">
                      {testimonial.initials}
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </h4>

                      <div className="flex gap-0.5">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {`"${testimonial.text}"`}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">

            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-[#f5f7fa] hover:bg-[#e8f4fd] transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-[#4a90d9]"
                      : "bg-[#e2e8f0]"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-[#f5f7fa] hover:bg-[#e8f4fd] transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">

          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">

              <div className="w-11 h-11 bg-[#f5f7fa] rounded-full flex items-center justify-center text-[#4a90d9] font-semibold text-sm border border-border">
                {testimonials[currentIndex].initials}
              </div>

              <div>
                <h4 className="font-semibold text-foreground text-sm">
                  {testimonials[currentIndex].name}
                </h4>

                <div className="flex gap-0.5">
                  {Array.from({
                    length: testimonials[currentIndex].rating,
                  }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {`"${testimonials[currentIndex].text}"`}
            </p>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">

            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-[#f5f7fa] hover:bg-[#e8f4fd] transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-[#4a90d9]"
                      : "bg-[#e2e8f0]"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-[#f5f7fa] hover:bg-[#e8f4fd] transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}