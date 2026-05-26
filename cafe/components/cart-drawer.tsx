"use client"

import { Trash } from "lucide-react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "./ui/drawer"
import { useCart, type CartItem } from "@/lib/cart-context"
import CheckoutForm from "./checkout-form"
import { useState } from "react"

type Order = {
  id: string
  customer: {
    name: string
    email: string
    phone: string
    address: string
    deliveryTime: string
  }
  items: CartItem[]
  total: number
}

export function CartDrawer() {
  const { items, total, isOpen, close, removeItem, clear } = useCart()
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [order, setOrder] = useState<Order | null>(null)

  const handleCheckout = () => setCheckoutOpen(true)

  const handleSuccess = async (customer: Order['customer']) => {
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customer, items, total }),
      })
      if (!res.ok) throw new Error('Error saving order')
      const saved = await res.json()
      setOrder(saved as Order)
      clear()
      setCheckoutOpen(false)
    } catch (err) {
      console.error('Order save failed', err)
      alert('No se pudo guardar la orden. Intenta de nuevo.')
    }
  }

  let title = "Tu carrito"
  if (order) title = "Orden confirmada"
  else if (checkoutOpen) title = "Checkout"

  return (
    <Drawer open={isOpen} onOpenChange={(open) => { if (!open) close() }}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>

        <div className="p-4 space-y-4">
          {!order && !checkoutOpen && (
            items.length === 0 ? (
              <p className="text-muted-foreground">No hay artículos en el carrito.</p>
            ) : (
              items.map((it) => (
                <div key={`${it.id}-${it.size}`} className="flex items-center gap-3">
                  {it.image && (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img src={it.image} alt={it.name} className="w-16 h-16 rounded-md object-cover" />
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">{it.name} <span className="text-sm text-muted-foreground">{it.size}</span></p>
                        <p className="text-sm text-muted-foreground">{it.qty} x ${it.price}.00</p>
                      </div>
                      <button
                        onClick={() => removeItem(it.id, it.size)}
                        className="p-2 text-destructive hover:bg-destructive/10 rounded-md"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )
          )}

          {checkoutOpen && (
            <CheckoutForm items={items} total={total} onCancel={() => setCheckoutOpen(false)} onSuccess={handleSuccess} />
          )}

          {order && (
            <div className="space-y-3">
              <p className="text-muted-foreground">Gracias por tu compra, {order.customer.name}.</p>
              <p className="font-semibold">ID de orden: {order.id}</p>
              <p className="text-sm text-muted-foreground">Entrega estimada: {new Date(order.customer.deliveryTime).toLocaleString()}</p>
              <div className="mt-2">
                <p className="font-medium">Resumen</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {order.items.map((it) => (
                    <li key={`${it.id}-${it.size}`}>{it.qty}x {it.name} ({it.size}) — ${it.price}.00</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <DrawerFooter>
          {!order && !checkoutOpen && (
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-xl font-bold">${total}.00</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => clear()} className="px-4 py-2 rounded-lg bg-muted text-foreground">Limpiar</button>
                <button onClick={handleCheckout} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground">Pagar</button>
              </div>
            </div>
          )}

          {checkoutOpen && (
            <div className="flex justify-end">
              <button onClick={() => setCheckoutOpen(false)} className="px-4 py-2 rounded-lg bg-muted">Cancelar</button>
            </div>
          )}

          {order && (
            <div className="flex justify-end">
              <button onClick={() => { setOrder(null); close() }} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground">Cerrar</button>
            </div>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
