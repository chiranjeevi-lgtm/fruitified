"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useCart } from "@/components/cart-provider"
import { Minus, Plus, Trash2, ShoppingBasket, ArrowRight, Tag } from "lucide-react"

const DARK  = "#1e3a0f"
const GREEN = "#4a7c2f"
const PRICE = "#b5451b"
const BG    = "#faf5eb"

function parsePrice(priceStr: string): number | null {
  const match = priceStr.match(/₹(\d+)/)
  return match ? parseInt(match[1]) : null
}

function parseWeight(weightStr: string): number {
  return parseFloat(weightStr) || 1
}

export default function CartPage() {
  const { items, updateQty, removeItem, totalItems } = useCart()

  const itemTotal = items.reduce((sum, item) => {
    const price = parsePrice(item.price)
    if (!price) return sum
    return sum + price * parseWeight(item.weight) * item.qty
  }, 0)

  const hasUnpricedItems = items.some((item) => !parsePrice(item.price))

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main style={{ backgroundColor: BG, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", padding: "60px 24px", maxWidth: "400px" }}>
            <div style={{
              width: "88px", height: "88px", borderRadius: "50%",
              backgroundColor: "rgba(30,58,15,0.06)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 24px",
            }}>
              <ShoppingBasket style={{ width: 38, height: 38, color: DARK, opacity: 0.35 }} />
            </div>
            <h2 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "1.8rem", fontWeight: 400, color: DARK, marginBottom: "12px",
            }}>
              Your basket is empty
            </h2>
            <p style={{ fontSize: "14px", color: "#9ca3af", lineHeight: 1.75, marginBottom: "28px" }}>
              Add some fresh fruits to your basket and come back here.
            </p>
            <Link href="/shop" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: DARK, color: "#fff",
              fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em",
              padding: "14px 32px", borderRadius: "100px", textDecoration: "none",
              boxShadow: "0 6px 24px rgba(30,58,15,0.25)",
            }}>
              Browse Shop <ArrowRight style={{ width: 13, height: 13 }} />
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main style={{ backgroundColor: BG, minHeight: "100vh", paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="mx-auto max-w-5xl px-6 lg:px-10">

          {/* Heading */}
          <div style={{ marginBottom: "32px" }}>
            <h1 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 400, color: DARK, marginBottom: "6px",
            }}>
              Your Basket
            </h1>
            <p style={{ fontSize: "13px", color: "#9ca3af", fontWeight: 500 }}>
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px]" style={{ gap: "24px", alignItems: "flex-start" }}>

            {/* ── Items ── */}
            <div style={{
              backgroundColor: "#fff", borderRadius: "20px",
              border: "1px solid #e8e0d0",
              boxShadow: "0 2px 12px rgba(30,58,15,0.05)",
              overflow: "hidden",
            }}>
              {items.map((item, idx) => (
                <div
                  key={`${item.name}-${item.weight}`}
                  style={{
                    display: "flex", alignItems: "center", gap: "16px",
                    padding: "18px 20px",
                    borderBottom: idx < items.length - 1 ? "1px solid #f3ede0" : "none",
                  }}
                >
                  {/* Image */}
                  <div style={{
                    width: "72px", height: "72px", borderRadius: "14px",
                    overflow: "hidden", flexShrink: 0,
                    backgroundColor: "#f9f5ec",
                    border: "1px solid #e8e0d0",
                    position: "relative",
                  }}>
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="72px"
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px" }}>
                        {item.emoji}
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "14px", fontWeight: 700, color: DARK, marginBottom: "4px" }}>
                      {item.name}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{
                        fontSize: "11px", fontWeight: 700, color: GREEN,
                        backgroundColor: "rgba(74,124,47,0.1)",
                        padding: "2px 8px", borderRadius: "100px",
                      }}>
                        {item.weight}
                      </span>
                      <span style={{ fontSize: "12px", color: PRICE, fontWeight: 600 }}>{item.price}</span>
                    </div>
                  </div>

                  {/* Qty controls */}
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                    <button
                      onClick={() => updateQty(item.name, item.weight, item.qty - 1)}
                      style={{
                        width: 30, height: 30, borderRadius: "50%",
                        border: "1.5px solid #e0d8c8", background: "#fff",
                        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >
                      <Minus style={{ width: 11, height: 11, color: DARK }} />
                    </button>
                    <span style={{ fontSize: "15px", fontWeight: 800, color: DARK, minWidth: "20px", textAlign: "center" }}>
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.name, item.weight, item.qty + 1)}
                      style={{
                        width: 30, height: 30, borderRadius: "50%",
                        border: "none", background: DARK,
                        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >
                      <Plus style={{ width: 11, height: 11, color: "#fff" }} />
                    </button>
                  </div>

                  {/* Line total + remove */}
                  <div style={{ textAlign: "right", flexShrink: 0, minWidth: "70px" }}>
                    {parsePrice(item.price) ? (
                      <p style={{ fontSize: "14px", fontWeight: 800, color: DARK, marginBottom: "4px" }}>
                        ₹{parsePrice(item.price)! * parseWeight(item.weight) * item.qty}
                      </p>
                    ) : (
                      <p style={{ fontSize: "11px", color: "#9ca3af", fontWeight: 600, marginBottom: "4px" }}>By weight</p>
                    )}
                    <button
                      onClick={() => removeItem(item.name, item.weight)}
                      style={{
                        background: "none", border: "none", cursor: "pointer",
                        display: "flex", alignItems: "center", gap: "3px",
                        fontSize: "10px", color: "#d1cfc8", fontWeight: 600,
                        marginLeft: "auto",
                      }}
                    >
                      <Trash2 style={{ width: 10, height: 10 }} /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Bill details ── */}
            <div style={{ position: "sticky", top: "104px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{
                backgroundColor: "#fff", borderRadius: "20px",
                border: "1px solid #e8e0d0", padding: "24px",
                boxShadow: "0 2px 12px rgba(30,58,15,0.05)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
                  <Tag style={{ width: 14, height: 14, color: GREEN }} />
                  <p style={{ fontSize: "13px", fontWeight: 800, color: DARK, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Bill Details
                  </p>
                </div>

                {/* Line items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
                  {items.map((item) => {
                    const price = parsePrice(item.price)
                    const lineTotal = price ? price * parseWeight(item.weight) * item.qty : null
                    return (
                      <div key={`${item.name}-${item.weight}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "12px", color: "#6b7280", fontWeight: 500 }}>
                          {item.name} ({item.weight} × {item.qty})
                        </span>
                        <span style={{ fontSize: "12px", fontWeight: 600, color: DARK }}>
                          {lineTotal ? `₹${lineTotal}` : "—"}
                        </span>
                      </div>
                    )
                  })}
                </div>

                <div style={{ height: "1px", backgroundColor: "#f0ebe0", marginBottom: "14px" }} />

                {/* Totals */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
                  {itemTotal > 0 && (
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "13px", color: "#6b7280" }}>Item Total</span>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: DARK }}>₹{itemTotal}</span>
                    </div>
                  )}
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "13px", color: "#6b7280" }}>Delivery Charges</span>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: GREEN }}>Free</span>
                  </div>
                </div>

                {hasUnpricedItems && (
                  <div style={{
                    backgroundColor: "rgba(74,124,47,0.06)",
                    border: "1px solid rgba(74,124,47,0.15)",
                    borderRadius: "8px", padding: "10px 12px",
                    fontSize: "11px", color: "#6b7280", lineHeight: 1.6,
                    marginBottom: "16px",
                  }}>
                    Some items are sold by weight — final price confirmed on WhatsApp after order.
                  </div>
                )}

                <div style={{ height: "1px", backgroundColor: "#f0ebe0", marginBottom: "14px" }} />

                {/* Total payable */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 800, color: DARK }}>Total Payable</span>
                  <span style={{ fontSize: "20px", fontWeight: 900, color: DARK }}>
                    {itemTotal > 0 ? `₹${itemTotal}` : "On confirmation"}
                  </span>
                </div>

                <Link
                  href="/checkout"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                    backgroundColor: DARK, color: "#fff",
                    fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em",
                    padding: "16px", borderRadius: "14px", textDecoration: "none",
                    boxShadow: "0 6px 24px rgba(30,58,15,0.25)",
                  }}
                >
                  Proceed to Checkout <ArrowRight style={{ width: 14, height: 14 }} />
                </Link>

                <Link
                  href="/shop"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginTop: "12px", fontSize: "12px", fontWeight: 600,
                    color: "#9ca3af", textDecoration: "none", textAlign: "center",
                  }}
                >
                  + Add more items
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
