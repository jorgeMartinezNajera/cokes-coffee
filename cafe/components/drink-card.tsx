"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import type { Drink, DrinkSize } from "@/lib/drinks-data"
import { badgeConfig } from "@/lib/drinks-data"

interface DrinkCardProps {
  drink: Drink
}

export function DrinkCard({ drink }: Readonly<DrinkCardProps>) {
  const [selectedSize, setSelectedSize] = useState<DrinkSize>("M")
  const cart = useCart()

  const sizes: DrinkSize[] = ["S", "M", "L"]
  const sizeLabels = {
    S: "Chico",
    M: "Mediano",
    L: "Grande"
  }

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50">
      {/* Image Container */}
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <Image
          src={drink.image}
          alt={drink.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badge */}
        {drink.badge && (
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${badgeConfig[drink.badge].className}`}>
            {badgeConfig[drink.badge].label}
          </div>
        )}
        
        {/* Quick Add Button */}
        <button className="absolute bottom-3 right-3 p-3 bg-primary text-primary-foreground rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg hover:bg-primary/90">
          <Plus className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        {/* Name & Description */}
        <h3 className="font-semibold text-foreground text-lg mb-1 text-balance">
          {drink.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {drink.description}
        </p>

        {/* Size Selector */}
        <div className="flex gap-2 mb-4">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                selectedSize === size
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <span className="block text-xs opacity-70">{sizeLabels[size]}</span>
              <span className="font-bold">{size}</span>
            </button>
          ))}
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground">Precio</span>
            <p className="text-xl font-bold text-foreground">
              ${drink.price[selectedSize]}.00
            </p>
          </div>
          <button
            onClick={() =>
              cart.addItem({
                id: drink.id,
                name: drink.name,
                price: drink.price[selectedSize],
                size: selectedSize,
                qty: 1,
                image: drink.image,
              })
            }
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm transition-colors"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}
