"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

const STORAGE_KEY = "fruitified_cart"

export type CartItem = {
  name: string
  emoji: string
  image: string
  price: string
  weight: string
  qty: number
}

type CartCtx = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "qty">) => void
  removeItem: (name: string, weight: string) => void
  updateQty: (name: string, weight: string, qty: number) => void
  clearCart: () => void
  totalItems: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartCtx | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return []
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? (JSON.parse(saved) as CartItem[]) : []
    } catch {
      return []
    }
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // localStorage unavailable (private browsing quota exceeded etc.)
    }
  }, [items])

  function addItem(item: Omit<CartItem, "qty">) {
    setItems((prev) => {
      const existing = prev.find((i) => i.name === item.name && i.weight === item.weight)
      if (existing) {
        return prev.map((i) =>
          i.name === item.name && i.weight === item.weight ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  function removeItem(name: string, weight: string) {
    setItems((prev) => prev.filter((i) => !(i.name === name && i.weight === weight)))
  }

  function updateQty(name: string, weight: string, qty: number) {
    if (qty <= 0) return removeItem(name, weight)
    setItems((prev) => prev.map((i) =>
      i.name === name && i.weight === weight ? { ...i, qty } : i
    ))
  }

  function clearCart() {
    setItems([])
  }

  const totalItems = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, updateQty, clearCart,
      totalItems, isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside CartProvider")
  return ctx
}
