import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Clock } from "lucide-react"
import Link from "next/link"
import { contact, site } from "../lib/site-config"

export function Footer() {
  return (
    <footer id="contacto" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
              <Coffee className="h-8 w-8" />
              <span className="font-[var(--font-playfair)] text-2xl font-bold">
                {site.name}
              </span>
            </Link>
            <p className="text-background/70 mb-6">
              Donde cada taza cuenta una historia. Café artesanal preparado con amor desde 2020.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background/10 hover:bg-background/20 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 hover:bg-background/20 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 hover:bg-background/20 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#menu" className="text-background/70 hover:text-background transition-colors">
                  Menú
                </Link>
              </li>
              <li>
                <Link href="#especialidad" className="text-background/70 hover:text-background transition-colors">
                  Especialidad
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-background/70 hover:text-background transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors">
                  Trabaja con nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <span className="text-background/70">
                  {contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-background/70">
                  {contact.phone}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 text-primary" />
                <span className="text-background/70">
                  {contact.hours}
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Suscríbete</h4>
            <p className="text-background/70 mb-4">
              Recibe promociones exclusivas y novedades.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="px-4 py-2.5 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg font-semibold transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
            © 2024 {site.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-background/60 hover:text-background transition-colors">
              Privacidad
            </Link>
            <Link href="#" className="text-background/60 hover:text-background transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
