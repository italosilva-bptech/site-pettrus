import { Header } from "@/components/header"
import { ServicesSection } from "@/components/services-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function NossosServicos() {
  return (
    <main className="min-h-screen">
      <Header activeRoute="/nossos-servicos" />
      
      {/* Serviços Completo */}
      <ServicesSection />
      
      <ContactForm />

      {/* Footer */}
      <Footer />
    </main>
  )
}
