"use client"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Máscara rigorosa para WhatsApp: (31) 98585-7744
  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "") // Remove tudo que não é número
    
    // Limita a 11 dígitos (2 do DDD + 9 do número)
    if (value.length > 11) value = value.slice(0, 11)

    // Aplica a formatação conforme o usuário digita
    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3")
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4,5})(\d{0,4}).*/, "($1) $2-$3")
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2")
    } else if (value.length > 0) {
      value = value.replace(/^(\d*)/, "($1")
    }

    setFormData({ ...formData, whatsapp: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulação de envio
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", whatsapp: "" })
    
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="formulario" className="relative py-20 lg:py-28">
      {/* Background image */}
     <div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/vetor_stg_1.webp')",
  }}
/>
      <div className="absolute inset-0 bg-[#1a2744]/30" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-5">
              {/* Left Side - Info */}
              <div className="md:col-span-2 bg-[#1a2744] p-8 lg:p-10 text-white">
                <div className="mb-6">
                  <img 
                    src="/iconstg.svg" 
                    alt="stg Icon" 
                    className="w-9 h-11 object-contain"
                  />
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-4 leading-tight">
                  Dê o primeiro passo para proteger seu patrimônio hoje!
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  Preencha o formulário e receba uma proposta personalizada. 
                </p>
              </div>

              {/* Right Side - Form */}
              <div className="md:col-span-3 p-8 lg:p-10">
                {isSubmitted ? (
                  <div className="h-full flex items-center justify-center min-h-[280px]">
                    <div className="text-center">
                      <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="font-heading text-lg font-bold text-foreground mb-2">
                        Obrigado pelo contato!
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Em breve entraremos em contato com você.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        maxLength={60}
                        placeholder="Digite seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#f5f7fa] border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#4a90d9] focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        // Pattern que exige @ e um domínio com pelo menos 2 caracteres após o ponto
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        title="Insira um e-mail válido, ex: contato@empresa.com"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#f5f7fa] border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#4a90d9] focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="whatsapp" className="block text-sm font-medium text-foreground mb-2">
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        required
                        placeholder="(00) 00000-0000"
                        value={formData.whatsapp}
                        onChange={handleWhatsAppChange}
                        className="w-full px-4 py-3 bg-[#f5f7fa] border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#4a90d9] focus:border-transparent text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1a2744] hover:bg-[#1a2744]/90 text-white font-medium py-4 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wide uppercase"
                    >
                      {isSubmitting ? "Enviando..." : "Receber cotação agora"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}