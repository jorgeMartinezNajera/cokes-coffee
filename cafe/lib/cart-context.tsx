"use client"

import React, { createContext, useContext, useMemo, useState } from "react"
import type { ReactNode } from "react"

export type CartItem = {
  id: string
  name: string
  price: number
  size: string
  qty: number
  image?: string
}

type CartContextType = {
  items: CartItem[]
  count: number
  total: number
  addItem: (item: CartItem) => void
  removeItem: (id: string, size?: string) => void
  clear: () => void
  open: () => void
  close: () => void
  isOpen: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}

export function CartProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.size === item.size)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.size === item.size ? { ...i, qty: i.qty + item.qty } : i
        )
      }
      return [...prev, item]
    })
  }

  const removeItem = (id: string, size?: string) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && (size ? i.size === size : true))))
  }

  const clear = () => setItems([])

  const count = items.reduce((s, i) => s + i.qty, 0)
  const total = items.reduce((s, i) => s + i.qty * i.price, 0)

  const value = useMemo(
    () => ({
      items,
      count,
      total,
      addItem,
      removeItem,
      clear,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      isOpen,
    }),
    [items, count, total, isOpen]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
