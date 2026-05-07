import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function FaleConosco() {
  return (
    <main className="min-h-screen">
      <Header activeRoute="/fale-conosco" />
      
      {/* Contato */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
