"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Nossos Serviços", href: "/nossos-servicos" },
  { label: "Fale Conosco", href: "/fale-conosco" },
]

interface HeaderProps {
  activeRoute?: string
}

export function Header({ activeRoute = "/" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img 
              src="/logo-stg.svg" 
              alt="Logo STG" 
              className="h-12 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  activeRoute === item.href
                    ? "text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-accent"
                    : "text-foreground/80 hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <Link href="/#formulario" className="hidden md:inline-flex">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 text-sm font-medium"
            >
              Faça sua cotação agora
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors py-2",
                    activeRoute === item.href
                      ? "text-foreground font-semibold"
                      : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* CTA Button Mobile - Fecha o menu ao clicar */}
              <Link 
                href="/#formulario" 
                onClick={() => setIsMenuOpen(false)}
                className="w-full mt-2"
              >
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 text-sm font-medium w-full"
                >
                  Faça sua cotação agora
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}