"use client"

import { useState } from "react"
import { workshops, Workshop, WorkshopType, workshopTypeConfig } from "@/lib/workshops-data"
import { WorkshopCard } from "./workshop-card"
import { RegistrationModal } from "./registration-modal"
import { Sparkles } from "lucide-react"

type FilterType = "todos" | WorkshopType

export function WorkshopsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("todos")
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null)

  const filters: { value: FilterType; label: string }[] = [
    { value: "todos", label: "Todos" },
    { value: "club-lectura", label: "Club de Lectura" },
    { value: "arte", label: "Arte" },
    { value: "reposteria", label: "Repostería" },
    { value: "social", label: "Social" },
    { value: "cafe", label: "Café" }
  ]

  const filteredWorkshops = activeFilter === "todos" 
    ? workshops 
    : workshops.filter(w => w.type === activeFilter)

  return (
    <section id="talleres" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Experiencias únicas
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestros Talleres
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Más que café, ofrecemos experiencias. Únete a nuestros talleres y eventos 
            especiales organizados por creativos locales y expertos apasionados.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredWorkshops.map((workshop) => (
            <WorkshopCard
              key={workshop.id}
              workshop={workshop}
              onRegister={setSelectedWorkshop}
            />
          ))}
        </div>

        {filteredWorkshops.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No hay talleres disponibles en esta categoría por el momento.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              ¿Tienes una idea para un taller?
            </h3>
            <p className="text-muted-foreground mb-4">
              Nos encanta colaborar con creativos locales. Si tienes una propuesta 
              de taller, nos encantaría escucharte.
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
              Proponer un Taller
            </button>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal
        workshop={selectedWorkshop!}
        isOpen={selectedWorkshop !== null}
        onClose={() => setSelectedWorkshop(null)}
      />
    </section>
  )
}
