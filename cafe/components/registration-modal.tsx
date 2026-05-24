"use client"

import { useState } from "react"
import { X, Calendar, Clock, Users, Check, CreditCard, User, Mail, Phone, AlertCircle } from "lucide-react"
import { Workshop, formatDate, getAvailableSpots } from "@/lib/workshops-data"

interface RegistrationModalProps {
  workshop: Workshop
  isOpen: boolean
  onClose: () => void
}

export function RegistrationModal({ workshop, isOpen, onClose }: RegistrationModalProps) {
  const [step, setStep] = useState<"info" | "form" | "payment" | "success">("info")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const availableSpots = getAvailableSpots(workshop)
  const isPaid = workshop.price !== null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    if (isPaid) {
      setStep("payment")
    } else {
      setStep("success")
    }
    setIsSubmitting(false)
  }

  const handlePayment = async () => {
    setIsSubmitting(true)
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    setStep("success")
    setIsSubmitting(false)
  }

  const handleClose = () => {
    setStep("info")
    setFormData({ name: "", email: "", phone: "" })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors z-10"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {step === "info" && (
          <>
            {/* Workshop Image */}
            <div 
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${workshop.image})` }}
            />

            {/* Content */}
            <div className="p-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                {workshop.title}
              </h2>
              
              <p className="text-muted-foreground mb-4">
                {workshop.longDescription}
              </p>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="capitalize">{formatDate(workshop.date)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{workshop.time} hrs</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span>{availableSpots} lugares</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-primary" />
                  <span>{workshop.instructor}</span>
                </div>
              </div>

              {/* Requirements */}
              {workshop.requirements && workshop.requirements.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-foreground mb-2">Requisitos:</h4>
                  <ul className="space-y-1">
                    {workshop.requirements.map((req, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Included */}
              {workshop.included && workshop.included.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-foreground mb-2">Incluye:</h4>
                  <ul className="space-y-1">
                    {workshop.included.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  {isPaid ? (
                    <>
                      <p className="text-sm text-muted-foreground">Precio por persona</p>
                      <p className="text-2xl font-bold text-primary">${workshop.price} MXN</p>
                    </>
                  ) : (
                    <p className="text-xl font-bold text-emerald-600">Evento Gratuito</p>
                  )}
                </div>
                <button
                  onClick={() => setStep("form")}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                  Continuar
                </button>
              </div>
            </div>
          </>
        )}

        {step === "form" && (
          <div className="p-6">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
              Registro
            </h2>
            <p className="text-muted-foreground mb-6">
              Completa tus datos para reservar tu lugar en &quot;{workshop.title}&quot;
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Nombre completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Correo electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Teléfono
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="55 1234 5678"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setStep("info")}
                  className="flex-1 py-3 border border-border rounded-xl font-semibold text-foreground hover:bg-muted transition-colors"
                >
                  Volver
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Procesando..." : isPaid ? "Continuar al pago" : "Confirmar registro"}
                </button>
              </div>
            </form>
          </div>
        )}

        {step === "payment" && (
          <div className="p-6">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
              Pago
            </h2>
            <p className="text-muted-foreground mb-6">
              Completa el pago para confirmar tu lugar
            </p>

            {/* Order Summary */}
            <div className="bg-muted rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-foreground">{workshop.title}</span>
                <span className="font-semibold">${workshop.price} MXN</span>
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>1 persona</span>
                <span>{formData.name}</span>
              </div>
              <div className="border-t border-border mt-3 pt-3 flex justify-between items-center">
                <span className="font-semibold text-foreground">Total</span>
                <span className="text-xl font-bold text-primary">${workshop.price} MXN</span>
              </div>
            </div>

            {/* Simulated Payment Form */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Número de tarjeta
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="4242 4242 4242 4242"
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Expiración
                  </label>
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className="w-full px-4 py-3 border border-border rounded-xl bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-3 border border-border rounded-xl bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep("form")}
                className="flex-1 py-3 border border-border rounded-xl font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Volver
              </button>
              <button
                onClick={handlePayment}
                disabled={isSubmitting}
                className="flex-1 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Procesando..." : `Pagar $${workshop.price} MXN`}
              </button>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="p-6 text-center py-12">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-emerald-600" />
            </div>
            
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
              Registro Exitoso
            </h2>
            <p className="text-muted-foreground mb-6">
              Te hemos enviado un correo de confirmación a <strong>{formData.email}</strong> con todos los detalles del taller.
            </p>

            <div className="bg-muted rounded-xl p-4 mb-6 text-left">
              <h4 className="font-semibold text-foreground mb-2">{workshop.title}</h4>
              <p className="text-sm text-muted-foreground capitalize">{formatDate(workshop.date)} - {workshop.time} hrs</p>
              <p className="text-sm text-muted-foreground">Duración: {workshop.duration}</p>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
