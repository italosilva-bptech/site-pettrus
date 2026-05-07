import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoveragesSection } from "@/components/coverages-section"
import { ServicesAccordion } from "@/components/services-accordion"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header activeRoute="/" />
      
      {/* Hero */}
      <HeroSection />
      
      {/* Coberturas */}
      <CoveragesSection />
      
      {/* Serviços Accordion */}
      <ServicesAccordion />
      
      {/* Formulário de Contato */}
      <ContactForm />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
