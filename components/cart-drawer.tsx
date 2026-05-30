"use client"

import Link from "next/link"
import { useCart } from "./cart-provider"
import { X, Minus, Plus, ShoppingBasket, ArrowRight } from "lucide-react"

const DARK  = "#1e3a0f"
const PRICE = "#b5451b"
const BG    = "#faf5eb"

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, clearCart, totalItems } = useCart()

  function buildWAMessage() {
    const lines = items.map((i) => `• ${i.name} — ${i.weight} × ${i.qty}`)
    return encodeURIComponent(
      `Hi! I'd like to order the following fruits:\n\n${lines.join("\n")}\n\nPlease let me know availability and pricing. Thank you!`
    )
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
        }}
      />

      {/* Drawer */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 201,
        width: "min(420px, 100vw)",
        backgroundColor: BG,
        display: "flex", flexDirection: "column",
        boxShadow: "-8px 0 40px rgba(0,0,0,0.18)",
      }}>

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 24px", borderBottom: "1px solid #e0d8c8",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ShoppingBasket style={{ width: 20, height: 20, color: DARK }} />
            <span style={{ fontSize: "15px", fontWeight: 800, color: DARK }}>Your Basket</span>
            {totalItems > 0 && (
              <span style={{
                backgroundColor: PRICE, color: "#fff",
                fontSize: "10px", fontWeight: 800,
                borderRadius: "100px", padding: "2px 8px",
              }}>
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            style={{ border: "none", background: "none", cursor: "pointer", padding: "4px", color: DARK, display: "flex" }}
          >
            <X style={{ width: 20, height: 20 }} />
          </button>
        </div>

        {/* Items list */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
          {items.length === 0 ? (
            <div style={{
              flex: 1, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: "14px",
              opacity: 0.35, paddingTop: "80px",
            }}>
              <ShoppingBasket style={{ width: 52, height: 52, color: DARK }} />
              <p style={{ fontSize: "13px", color: DARK, fontWeight: 600 }}>Your basket is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.name}-${item.weight}`} style={{
                display: "flex", alignItems: "center", gap: "12px",
                background: "#fff", borderRadius: "14px", padding: "14px 16px",
                border: "1px solid #e0d8c8",
                boxShadow: "0 1px 6px rgba(30,58,15,0.05)",
              }}>
                <span style={{ fontSize: "30px", flexShrink: 0, lineHeight: 1 }}>{item.emoji}</span>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: DARK, lineHeight: 1.3, marginBottom: "2px" }}>
                    {item.name}
                  </p>
                  <p style={{ fontSize: "11px", color: "#6b7280", fontWeight: 600, marginBottom: "2px" }}>{item.weight}</p>
                  <p style={{ fontSize: "11px", color: PRICE, fontWeight: 600 }}>{item.price}</p>
                </div>

                {/* Qty controls */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                  <button
                    onClick={() => updateQty(item.name, item.weight, item.qty - 1)}
                    style={{
                      width: 28, height: 28, borderRadius: "50%",
                      border: "1.5px solid #d1cfc8", background: "#fff",
                      cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <Minus style={{ width: 11, height: 11, color: DARK }} />
                  </button>
                  <span style={{ fontSize: "14px", fontWeight: 800, color: DARK, minWidth: "20px", textAlign: "center" }}>
                    {item.qty}
                  </span>
                  <button
                    onClick={() => updateQty(item.name, item.weight, item.qty + 1)}
                    style={{
                      width: 28, height: 28, borderRadius: "50%",
                      border: "none", background: DARK,
                      cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <Plus style={{ width: 11, height: 11, color: "#fff" }} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: "16px 24px 32px", borderTop: "1px solid #e0d8c8", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Link
              href="/checkout"
              onClick={closeCart}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                backgroundColor: DARK, color: BG,
                fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em",
                padding: "15px", borderRadius: "12px", textDecoration: "none",
              }}
            >
              Proceed to Checkout <ArrowRight style={{ width: 14, height: 14 }} />
            </Link>
            <a
              href={`https://wa.me/918977722037?text=${buildWAMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                border: "1.5px solid #e0d8c8", color: DARK,
                fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em",
                padding: "14px", borderRadius: "12px", textDecoration: "none",
              }}
            >
              Order via WhatsApp
            </a>
            <button
              onClick={clearCart}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: "11px", color: "#9ca3af", fontWeight: 600, textAlign: "center",
              }}
            >
              Clear basket
            </button>
          </div>
        )}
      </div>
    </>
  )
}
