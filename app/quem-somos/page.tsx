import { Header } from "@/components/header"
import { AboutHero } from "@/components/about-hero"
import { MissionVisionValues } from "@/components/mission-vision-values"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function QuemSomos() {
  return (
    <main className="min-h-screen">
      <Header activeRoute="/quem-somos" />
      
      {/* About Hero */}
      <AboutHero />
      
      {/* Missão, Visão e Valores */}
      <MissionVisionValues />
      
      {/* Depoimentos */}
      <TestimonialsSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
