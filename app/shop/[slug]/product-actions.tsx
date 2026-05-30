"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ShoppingBasket, Minus, Plus, Zap } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import type { Fruit } from "@/lib/fruits-data"

const DARK  = "#1e3a0f"
const GREEN = "#4a7c2f"

export default function ProductActions({ fruit }: { fruit: Fruit }) {
  const { addItem, removeItem, updateQty, items } = useCart()
  const router = useRouter()
  const [kg, setKg] = useState<number>(1)

  const weightLabel = `${kg} kg`
  const cartItem    = items.find((i) => i.name === fruit.name && i.weight === weightLabel)
  const qty         = cartItem?.qty ?? 0
  const inCart      = qty > 0

  function handleKgChange(val: string) {
    const num = parseFloat(val)
    if (!isNaN(num) && num > 0) setKg(num)
    else if (val === "") setKg(0)
  }

  function handleAdd() {
    if (kg <= 0) return
    addItem({ name: fruit.name, emoji: fruit.emoji, image: fruit.images[0], price: fruit.price, weight: weightLabel })
  }

  function handleBuyNow() {
    if (kg <= 0) return
    addItem({ name: fruit.name, emoji: fruit.emoji, image: fruit.images[0], price: fruit.price, weight: weightLabel })
    router.push("/checkout")
  }

  function handleDecrement() {
    if (qty <= 1) removeItem(fruit.name, weightLabel)
    else updateQty(fruit.name, weightLabel, qty - 1)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

      {/* Kg input */}
      <div>
        <p style={{
          fontSize: "11px", fontWeight: 700, color: "#9ca3af",
          textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "10px",
        }}>
          Select Quantity
        </p>

        <div style={{
          display: "flex", alignItems: "center",
          border: `1.5px solid #e0d8c8`, borderRadius: "12px",
          overflow: "hidden", backgroundColor: "#fff",
          boxShadow: "0 2px 8px rgba(30,58,15,0.06)",
          width: "fit-content",
        }}>
          <button
            onClick={() => setKg((prev) => Math.max(0.5, parseFloat((prev - 0.5).toFixed(1))))}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "0 16px", height: "48px", color: DARK,
              display: "flex", alignItems: "center",
              borderRight: "1px solid #e0d8c8",
            }}
            aria-label="Decrease by 0.5 kg"
          >
            <Minus style={{ width: 14, height: 14 }} />
          </button>

          <div style={{ display: "flex", alignItems: "center", padding: "0 14px", gap: "6px" }}>
            <input
              type="number"
              min="0.5"
              step="0.5"
              value={kg || ""}
              onChange={(e) => handleKgChange(e.target.value)}
              style={{
                width: "60px", textAlign: "center",
                fontSize: "16px", fontWeight: 800, color: DARK,
                border: "none", outline: "none", background: "transparent",
              }}
            />
            <span style={{ fontSize: "13px", fontWeight: 700, color: "#9ca3af" }}>kg</span>
          </div>

          <button
            onClick={() => setKg((prev) => parseFloat((prev + 0.5).toFixed(1)))}
            style={{
              background: DARK, border: "none", cursor: "pointer",
              padding: "0 16px", height: "48px", color: "#fff",
              display: "flex", alignItems: "center",
              borderLeft: "1px solid #e0d8c8",
            }}
            aria-label="Increase by 0.5 kg"
          >
            <Plus style={{ width: 14, height: 14 }} />
          </button>
        </div>

        <p style={{ fontSize: "11px", color: "#9ca3af", marginTop: "8px", fontWeight: 500 }}>
          You can also type any amount directly
        </p>
      </div>

      {/* Buy Now — always visible */}
      <button
        onClick={handleBuyNow}
        disabled={kg <= 0}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
          backgroundColor: kg > 0 ? DARK : "#d1d5db", color: "#fff",
          fontSize: "13px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em",
          height: "58px", borderRadius: "14px",
          border: "none", cursor: kg > 0 ? "pointer" : "not-allowed",
          boxShadow: kg > 0 ? "0 8px 28px rgba(30,58,15,0.28)" : "none",
          transition: "background-color 0.18s ease",
        }}
      >
        <Zap style={{ width: 16, height: 16 }} /> Buy Now
      </button>

      {/* Add to cart / qty controls */}
      {inCart ? (
        <div style={{
          display: "flex", alignItems: "center",
          border: `2px solid ${GREEN}`, borderRadius: "14px", overflow: "hidden",
          height: "52px",
        }}>
          <button
            onClick={handleDecrement}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "0 20px", height: "100%", color: GREEN,
              display: "flex", alignItems: "center",
            }}
            aria-label="Remove one"
          >
            <Minus style={{ width: 15, height: 15 }} />
          </button>
          <span style={{
            fontSize: "14px", fontWeight: 900, color: GREEN,
            flex: 1, textAlign: "center",
          }}>
            {qty} × {weightLabel} in cart
          </span>
          <button
            onClick={handleAdd}
            style={{
              background: GREEN, border: "none", cursor: "pointer",
              padding: "0 20px", height: "100%", color: "#fff",
              display: "flex", alignItems: "center",
            }}
            aria-label="Add one more"
          >
            <Plus style={{ width: 15, height: 15 }} />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAdd}
          disabled={kg <= 0}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
            backgroundColor: "transparent",
            border: `2px solid ${kg > 0 ? GREEN : "#d1d5db"}`,
            color: kg > 0 ? GREEN : "#d1d5db",
            fontSize: "13px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em",
            height: "52px", borderRadius: "14px",
            cursor: kg > 0 ? "pointer" : "not-allowed",
            transition: "all 0.18s ease",
          }}
        >
          <ShoppingBasket style={{ width: 16, height: 16 }} /> Add to Cart
        </button>
      )}

    </div>
  )
}
