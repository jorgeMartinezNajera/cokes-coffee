export type DrinkBadge = "nuevo" | "temporada" | "popular" | "favorito" | null

export type DrinkSize = "S" | "M" | "L"

export interface Drink {
  id: string
  name: string
  description: string
  price: {
    S: number
    M: number
    L: number
  }
  image: string
  badge: DrinkBadge
  category: "calientes" | "frias" | "especiales" | "postres"
}

export const drinks: Drink[] = [
  {
    id: "1",
    name: "Americano Clásico",
    description: "Espresso doble con agua caliente, intenso y aromático",
    price: { S: 45, M: 55, L: 65 },
    image: "/drinks/americano.jpg",
    badge: "popular",
    category: "calientes"
  },
  {
    id: "2",
    name: "Latte Vainilla",
    description: "Espresso suave con leche cremosa y esencia de vainilla",
    price: { S: 55, M: 65, L: 75 },
    image: "/drinks/latte.jpg",
    badge: "favorito",
    category: "calientes"
  },
  {
    id: "3",
    name: "Mocha Intenso",
    description: "Chocolate premium con espresso y crema batida",
    price: { S: 65, M: 75, L: 85 },
    image: "/drinks/mocha.jpg",
    badge: null,
    category: "calientes"
  },
  {
    id: "4",
    name: "Frappé de Caramelo",
    description: "Café helado con jarabe de caramelo y hielo frappé",
    price: { S: 70, M: 80, L: 90 },
    image: "/drinks/frappe.jpg",
    badge: "popular",
    category: "frias"
  },
  {
    id: "5",
    name: "Cold Brew Nitro",
    description: "Café infusionado en frío con nitrógeno, textura sedosa",
    price: { S: 75, M: 85, L: 95 },
    image: "/drinks/coldbrew.jpg",
    badge: "nuevo",
    category: "frias"
  },
  {
    id: "6",
    name: "Matcha Latte",
    description: "Té matcha ceremonial con leche de avena",
    price: { S: 70, M: 80, L: 90 },
    image: "/drinks/matcha.jpg",
    badge: "temporada",
    category: "especiales"
  },
  {
    id: "7",
    name: "Chai Spiced Latte",
    description: "Mezcla de especias con té negro y leche vaporizada",
    price: { S: 60, M: 70, L: 80 },
    image: "/drinks/chai.jpg",
    badge: null,
    category: "especiales"
  },
  {
    id: "8",
    name: "Espresso Doble",
    description: "Shot doble de nuestro blend signature",
    price: { S: 35, M: 45, L: 55 },
    image: "/drinks/espresso.jpg",
    badge: "favorito",
    category: "calientes"
  },
  {
    id: "9",
    name: "Iced Shaken Espresso",
    description: "Espresso agitado con hielo y toque de vainilla",
    price: { S: 65, M: 75, L: 85 },
    image: "/drinks/iced-espresso.jpg",
    badge: "nuevo",
    category: "frias"
  },
  {
    id: "10",
    name: "Horchata Latte",
    description: "Latte con nuestra receta especial de horchata",
    price: { S: 65, M: 75, L: 85 },
    image: "/drinks/horchata.jpg",
    badge: "temporada",
    category: "especiales"
  },
  {
    id: "11",
    name: "Affogato",
    description: "Helado de vainilla con shot de espresso caliente",
    price: { S: 75, M: 85, L: 95 },
    image: "/drinks/affogato.jpg",
    badge: "popular",
    category: "postres"
  },
  {
    id: "12",
    name: "Café de Olla",
    description: "Receta tradicional con piloncillo y canela",
    price: { S: 50, M: 60, L: 70 },
    image: "/drinks/cafe-olla.jpg",
    badge: "favorito",
    category: "calientes"
  }
]

export const badgeConfig = {
  nuevo: {
    label: "Nuevo",
    className: "bg-emerald-500 text-white"
  },
  temporada: {
    label: "De Temporada",
    className: "bg-amber-500 text-white"
  },
  popular: {
    label: "Popular",
    className: "bg-primary text-primary-foreground"
  },
  favorito: {
    label: "Favorito",
    className: "bg-pink-500 text-white"
  }
}
