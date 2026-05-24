"use client"

import { Sparkles, Droplets, Thermometer, Clock } from "lucide-react"
import Image from "next/image"

export function HeroDrink() {
  return (
    <section id="especialidad" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Drink Image */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-8 -left-8 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 md:w-72 md:h-72 bg-primary/5 rounded-full blur-2xl" />
              
              {/* Main drink image */}
              <div className="relative z-10 w-72 h-96 md:w-96 md:h-[500px] lg:w-[400px] lg:h-[550px]">
                <Image
                  src="/specialty-drink.jpg"
                  alt="Caramel Macchiato Especial - Bebida de la casa"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute top-4 right-0 md:right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Especialidad
                </span>
              </div>
            </div>
          </div>

          {/* Right: Info Box */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Bebida de la Casa
              </span>
              <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
                Caramel Macchiato Especial
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Nuestra bebida insignia, preparada con amor y los mejores ingredientes seleccionados a mano.
              </p>
            </div>

            {/* Red Specification Box */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="font-[var(--font-playfair)] text-2xl font-bold mb-6">
                Especificaciones
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary-foreground/20 rounded-lg">
                    <Droplets className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ingredientes Premium</h4>
                    <p className="text-primary-foreground/80 text-sm">
                      Espresso doble, leche vaporizada, jarabe de vainilla artesanal, caramelo casero y un toque de canela
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary-foreground/20 rounded-lg">
                    <Thermometer className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Preparación</h4>
                    <p className="text-primary-foreground/80 text-sm">
                      Servida caliente a temperatura perfecta de 65°C, con arte latte en la espuma
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary-foreground/20 rounded-lg">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Tiempo de Preparación</h4>
                    <p className="text-primary-foreground/80 text-sm">
                      5-7 minutos de dedicación para una experiencia única
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-primary-foreground/20">
                <div>
                  <span className="text-primary-foreground/60 text-sm">Precio especial</span>
                  <p className="text-3xl font-bold">$89.00</p>
                </div>
                <button className="w-full sm:w-auto bg-primary-foreground text-primary px-8 py-3 rounded-full font-bold hover:bg-primary-foreground/90 transition-colors shadow-lg">
                  Ordenar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
