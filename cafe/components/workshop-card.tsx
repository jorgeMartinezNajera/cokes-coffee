"use client"

import Image from "next/image"
import { Calendar, Clock, Users, MapPin, BookOpen, Palette, Cake, Heart, Coffee } from "lucide-react"
import { Workshop, workshopTypeConfig, formatDate, getAvailableSpots, isAlmostFull, isFull } from "@/lib/workshops-data"

const iconMap = {
  BookOpen,
  Palette,
  Cake,
  Heart,
  Coffee
}

interface WorkshopCardProps {
  workshop: Workshop
  onRegister: (workshop: Workshop) => void
}

export function WorkshopCard({ workshop, onRegister }: WorkshopCardProps) {
  const typeConfig = workshopTypeConfig[workshop.type]
  const IconComponent = iconMap[typeConfig.icon as keyof typeof iconMap]
  const availableSpots = getAvailableSpots(workshop)
  const almostFull = isAlmostFull(workshop)
  const full = isFull(workshop)

  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={workshop.image}
          alt={workshop.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Type Badge */}
        <div className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border ${typeConfig.className}`}>
          <IconComponent className="w-3.5 h-3.5" />
          {typeConfig.label}
        </div>

        {/* Price Badge */}
        <div className="absolute top-3 right-3">
          {workshop.price === null ? (
            <span className="bg-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold">
              Gratuito
            </span>
          ) : (
            <span className="bg-card text-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
              ${workshop.price} MXN
            </span>
          )}
        </div>

        {/* Availability Overlay */}
        {full && (
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm">
              Cupo Lleno
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-lg font-bold text-foreground mb-2 line-clamp-2">
          {workshop.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {workshop.description}
        </p>

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="capitalize">{formatDate(workshop.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span>{workshop.time} hrs ({workshop.duration})</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-primary" />
            {full ? (
              <span className="text-primary font-medium">Sin lugares disponibles</span>
            ) : almostFull ? (
              <span className="text-amber-600 font-medium">Solo {availableSpots} lugares</span>
            ) : (
              <span className="text-muted-foreground">{availableSpots} lugares disponibles</span>
            )}
          </div>
        </div>

        {/* Instructor */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">
              {workshop.instructor.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Imparte</p>
            <p className="text-sm font-medium text-foreground">{workshop.instructor}</p>
          </div>
        </div>

        {/* Register Button */}
        <button
          onClick={() => onRegister(workshop)}
          disabled={full}
          className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
            full
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]"
          }`}
        >
          {full ? "Lista de Espera" : workshop.price === null ? "Inscribirse Gratis" : "Reservar Lugar"}
        </button>
      </div>
    </div>
  )
}
