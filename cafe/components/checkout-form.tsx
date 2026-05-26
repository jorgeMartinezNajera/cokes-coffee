"use client"

import { useState, useMemo } from "react"
import type { CartItem } from "@/lib/cart-context"

export type CustomerInfo = {
  name: string
  email: string
  phone: string
  address: string
  deliveryTime: string
}

export default function CheckoutForm({
  items,
  total,
  onCancel,
  onSuccess,
}: Readonly<{
  items: CartItem[]
  total: number
  onCancel: () => void
  onSuccess: (customer: CustomerInfo) => void
}>) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const defaultDelivery = useMemo(() => {
    const now = new Date()
    // round to next 30 minutes
    const ms = 1000 * 60 * 30
    const rounded = new Date(Math.ceil(now.getTime() / ms) * ms)
    // format to datetime-local value
    const pad = (n: number) => String(n).padStart(2, "0")
    const yyyy = rounded.getFullYear()
    const mm = pad(rounded.getMonth() + 1)
    const dd = pad(rounded.getDate())
    const hh = pad(rounded.getHours())
    const min = pad(rounded.getMinutes())
    return `${yyyy}-${mm}-${dd}T${hh}:${min}`
  }, [])
  const [deliveryTime, setDeliveryTime] = useState(defaultDelivery)
  const [processing, setProcessing] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!name || !email || !phone || !address) return
    setProcessing(true)
    // simulate payment processing delay
    await new Promise((r) => setTimeout(r, 1200))
    onSuccess({ name, email, phone, address, deliveryTime })
    setProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div>
        <label htmlFor="cf-name" className="block text-sm font-medium text-muted-foreground">Nombre completo</label>
        <input id="cf-name" required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-lg border bg-background/5" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="cf-email" className="block text-sm font-medium text-muted-foreground">Email</label>
          <input id="cf-email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-lg border bg-background/5" />
        </div>
        <div>
          <label htmlFor="cf-phone" className="block text-sm font-medium text-muted-foreground">Teléfono</label>
          <input id="cf-phone" required value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-lg border bg-background/5" />
        </div>
      </div>

      <div>
        <label htmlFor="cf-address" className="block text-sm font-medium text-muted-foreground">Dirección de entrega</label>
        <input id="cf-address" required value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-lg border bg-background/5" />
      </div>

      <div>
        <label htmlFor="cf-delivery" className="block text-sm font-medium text-muted-foreground">Hora de entrega</label>
        <input id="cf-delivery" required type="datetime-local" value={deliveryTime} onChange={(e) => setDeliveryTime(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-lg border bg-background/5" />
      </div>

      <div>
        <label htmlFor="cf-card" className="block text-sm font-medium text-muted-foreground">Método de pago (simulado)</label>
        <div className="mt-1 grid grid-cols-3 gap-2">
          <input id="cf-card" placeholder="Número" className="col-span-2 px-3 py-2 rounded-lg border bg-background/5" />
          <input placeholder="CVC" className="px-3 py-2 rounded-lg border bg-background/5" />
        </div>
      </div>

      <div className="border-t pt-3 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Total a cobrar</p>
          <p className="text-xl font-bold">${total}.00</p>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={onCancel} className="px-4 py-2 rounded-lg bg-muted">Volver</button>
          <button type="submit" disabled={processing} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground">
            {processing ? "Procesando..." : "Confirmar y pagar"}
          </button>
        </div>
      </div>
    </form>
  )
}
