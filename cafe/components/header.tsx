"use client"

import { useState } from "react"
import { Coffee, Menu, ShoppingBag, X } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"
import { CartDrawer } from "./cart-drawer"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cart = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Coffee className="h-8 w-8 text-primary-foreground" />
            <span className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight">
              Coke&apos;s Coffee
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#menu" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium">
              Menú
            </Link>
            <Link href="#especialidad" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium">
              Especialidad
            </Link>
            <Link href="#talleres" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium">
              Talleres
            </Link>
            <Link href="#nosotros" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium">
              Nosotros
            </Link>
            <Link href="#contacto" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium">
              Contacto
            </Link>
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => cart.open()}
              className="relative p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
            >
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-secondary text-secondary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                {cart.count}
              </span>
            </button>
            <CartDrawer />
            
            <button 
              className="md:hidden p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col gap-4">
              <Link 
                href="#menu" 
                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Menú
              </Link>
              <Link 
                href="#especialidad" 
                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Especialidad
              </Link>
              <Link 
                href="#talleres" 
                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Talleres
              </Link>
              <Link 
                href="#nosotros" 
                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                href="#contacto" 
                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
