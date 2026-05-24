export type WorkshopType = "club-lectura" | "arte" | "reposteria" | "social" | "cafe"

export interface Workshop {
  id: string
  title: string
  description: string
  longDescription: string
  type: WorkshopType
  instructor: string
  date: string
  time: string
  duration: string
  capacity: number
  registered: number
  price: number | null // null = gratuito
  image: string
  requirements?: string[]
  included?: string[]
}

export const workshops: Workshop[] = [
  {
    id: "w1",
    title: "Club de Lectura: Realismo Mágico",
    description: "Exploramos las obras de Gabriel García Márquez mientras disfrutamos de café colombiano",
    longDescription: "Únete a nuestro círculo de lectura mensual donde exploramos el fascinante mundo del realismo mágico latinoamericano. Este mes leemos 'Cien años de soledad' acompañados de un café colombiano de origen único.",
    type: "club-lectura",
    instructor: "María Elena Rodríguez",
    date: "2024-02-15",
    time: "18:00",
    duration: "2 horas",
    capacity: 15,
    registered: 8,
    price: null,
    image: "/workshops/book-club.jpg",
    requirements: ["Traer el libro 'Cien años de soledad'", "Leer hasta el capítulo 10"],
    included: ["Café de cortesía", "Galletas artesanales"]
  },
  {
    id: "w2",
    title: "Acuarela para Principiantes",
    description: "Aprende técnicas básicas de acuarela mientras pintas tu propia taza de café",
    longDescription: "Descubre el arte de la acuarela en un ambiente relajado. Aprenderás técnicas de mezcla de colores, aguadas y detalles mientras pintas una ilustración de café. No necesitas experiencia previa.",
    type: "arte",
    instructor: "Carlos Mendoza",
    date: "2024-02-18",
    time: "11:00",
    duration: "3 horas",
    capacity: 12,
    registered: 10,
    price: 350,
    image: "/workshops/watercolor.jpg",
    requirements: ["Ropa que pueda mancharse"],
    included: ["Todos los materiales", "Kit de acuarelas para llevar", "Bebida caliente", "Snack"]
  },
  {
    id: "w3",
    title: "Decoración de Cupcakes",
    description: "Aprende a decorar cupcakes con técnicas profesionales de betún y fondant",
    longDescription: "En este taller práctico aprenderás a preparar y aplicar diferentes tipos de betún, crear flores de fondant y decorar 6 cupcakes que podrás llevar a casa en una caja especial.",
    type: "reposteria",
    instructor: "Ana Lucía Gómez",
    date: "2024-02-20",
    time: "16:00",
    duration: "2.5 horas",
    capacity: 10,
    registered: 7,
    price: 450,
    image: "/workshops/cupcakes.jpg",
    requirements: ["Delantal (opcional, tenemos disponibles)"],
    included: ["6 cupcakes decorados", "Caja para llevar", "Recetario digital", "Café o té"]
  },
  {
    id: "w4",
    title: "Coffee Date a Ciegas",
    description: "Conoce gente nueva en un ambiente relajado con dinámicas divertidas",
    longDescription: "Un evento social donde conocerás personas interesantes a través de mini-citas de 7 minutos. Ambiente cálido, música suave y la mejor excusa para hacer nuevas conexiones. Incluye 2 bebidas.",
    type: "social",
    instructor: "Equipo Coke's Coffee",
    date: "2024-02-14",
    time: "19:00",
    duration: "2 horas",
    capacity: 20,
    registered: 16,
    price: 180,
    image: "/workshops/coffee-date.jpg",
    requirements: ["Ser mayor de 25 años", "Actitud abierta y respetuosa"],
    included: ["2 bebidas de cortesía", "Snacks", "Dinámicas rompe-hielo"]
  },
  {
    id: "w5",
    title: "Cata de Café de Especialidad",
    description: "Descubre los secretos del café de especialidad con nuestro barista certificado",
    longDescription: "Aprende a identificar notas de sabor, aromas y el proceso de tueste. Cataremos 5 cafés de diferentes orígenes y aprenderás el protocolo profesional de catación SCA.",
    type: "cafe",
    instructor: "Roberto Sánchez - Q Grader",
    date: "2024-02-22",
    time: "10:00",
    duration: "2 horas",
    capacity: 8,
    registered: 5,
    price: 280,
    image: "/workshops/coffee-tasting.jpg",
    requirements: ["No usar perfume el día del evento"],
    included: ["5 cafés de especialidad", "Rueda de sabores", "Certificado de participación", "10% descuento en café en grano"]
  },
  {
    id: "w6",
    title: "Lettering Creativo",
    description: "Crea tu propio arte tipográfico con técnicas de brush pen y marcadores",
    longDescription: "Aprende los fundamentos del lettering moderno: trazos básicos, composición y estilos. Crearás una pieza personalizada que podrás enmarcar. Ideal para principiantes.",
    type: "arte",
    instructor: "Valentina Torres",
    date: "2024-02-25",
    time: "17:00",
    duration: "2.5 horas",
    capacity: 14,
    registered: 3,
    price: 320,
    image: "/workshops/lettering.jpg",
    requirements: [],
    included: ["Kit de brush pens", "Cuaderno de práctica", "Guías descargables", "Bebida caliente"]
  },
  {
    id: "w7",
    title: "Club de Lectura: Poesía Contemporánea",
    description: "Una tarde de poesía, lectura en voz alta y reflexión colectiva",
    longDescription: "Compartimos poemas de autores contemporáneos en un círculo íntimo. Cada participante puede traer un poema favorito para compartir. Un espacio seguro para la expresión artística.",
    type: "club-lectura",
    instructor: "Dra. Patricia Vega",
    date: "2024-03-01",
    time: "18:30",
    duration: "1.5 horas",
    capacity: 12,
    registered: 4,
    price: null,
    image: "/workshops/poetry.jpg",
    requirements: ["Opcional: traer un poema favorito"],
    included: ["Café de cortesía", "Antología impresa del mes"]
  },
  {
    id: "w8",
    title: "Latte Art Básico",
    description: "Aprende a crear corazones y rosettas en tu café como un barista profesional",
    longDescription: "Domina las técnicas básicas de vertido para crear arte en tu café. Practicarás con leche texturizada y aprenderás los fundamentos que usan los baristas profesionales.",
    type: "cafe",
    instructor: "Miguel Ángel Flores - Barista Champion",
    date: "2024-03-03",
    time: "09:00",
    duration: "3 horas",
    capacity: 6,
    registered: 6,
    price: 550,
    image: "/workshops/latte-art.jpg",
    requirements: [],
    included: ["Práctica ilimitada de vertidos", "Jarra para llevar", "Certificado", "Desayuno ligero"]
  }
]

export const workshopTypeConfig = {
  "club-lectura": {
    label: "Club de Lectura",
    icon: "BookOpen",
    className: "bg-violet-100 text-violet-700 border-violet-200"
  },
  "arte": {
    label: "Arte & Creatividad",
    icon: "Palette",
    className: "bg-pink-100 text-pink-700 border-pink-200"
  },
  "reposteria": {
    label: "Repostería",
    icon: "Cake",
    className: "bg-amber-100 text-amber-700 border-amber-200"
  },
  "social": {
    label: "Evento Social",
    icon: "Heart",
    className: "bg-rose-100 text-rose-700 border-rose-200"
  },
  "cafe": {
    label: "Cultura del Café",
    icon: "Coffee",
    className: "bg-primary/10 text-primary border-primary/20"
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-MX', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  })
}

export function getAvailableSpots(workshop: Workshop): number {
  return workshop.capacity - workshop.registered
}

export function isAlmostFull(workshop: Workshop): boolean {
  return getAvailableSpots(workshop) <= 3 && getAvailableSpots(workshop) > 0
}

export function isFull(workshop: Workshop): boolean {
  return getAvailableSpots(workshop) === 0
}
