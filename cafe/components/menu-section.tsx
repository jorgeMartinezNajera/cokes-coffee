"use client"

import { useState } from "react"
import { drinks } from "@/lib/drinks-data"
import { DrinkCard } from "./drink-card"
import { Flame, Snowflake, Sparkles, IceCream } from "lucide-react"

const categories = [
  { id: "todos", label: "Todos", icon: null },
  { id: "calientes", label: "Calientes", icon: Flame },
  { id: "frias", label: "Frías", icon: Snowflake },
  { id: "especiales", label: "Especiales", icon: Sparkles },
  { id: "postres", label: "Postres", icon: IceCream },
]

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("todos")

  const filteredDrinks = activeCategory === "todos" 
    ? drinks 
    : drinks.filter(drink => drink.category === activeCategory)

  return (
    <section id="menu" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Nuestro Menú
          </span>
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Descubre Nuestras Bebidas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada taza es una obra de arte, preparada con pasión y los mejores granos de café
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span>{category.label}</span>
              </button>
            )
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDrinks.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>

        {/* Empty State */}
        {filteredDrinks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No hay bebidas en esta categoría por el momento.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
