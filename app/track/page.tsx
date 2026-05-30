"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Search, Package, CheckCircle, Truck, Home, Clock } from "lucide-react"

const DARK  = "#1e3a0f"
const GREEN = "#4a7c2f"
const PRICE = "#b5451b"
const BG    = "#faf5eb"

const STATUSES = ["Confirmed", "Preparing", "Out for Delivery", "Delivered"]

type OrderItem = { name: string; weight: string; qty: number; price: string }
type Order = {
  token: string
  customer_name: string
  address_line1: string
  address_line2?: string
  city: string
  state: string
  pincode: string
  items: OrderItem[]
  total: number
  status: string
  created_at: string
  payment_id: string
}

function TrackContent() {
  const searchParams                = useSearchParams()
  const [tokenInput, setTokenInput] = useState(searchParams.get("token") ?? "")
  const [order, setOrder]           = useState<Order | null>(null)
  const [loading, setLoading]       = useState(false)
  const [error, setError]           = useState("")

  // Auto-search if token came from URL
  useEffect(() => {
    const t = searchParams.get("token")
    if (t) {
      setTokenInput(t)
      fetchOrder(t)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  async function fetchOrder(t: string) {
    setLoading(true)
    setError("")
    setOrder(null)
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001"
      const res  = await fetch(`${backendUrl}/api/track/${t.trim()}`)
      const data = await res.json()
      if (!res.ok) setError("No order found with this token. Please check and try again.")
      else setOrder(data)
    } catch {
      setError("Could not reach the server. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (!tokenInput.trim()) return
    fetchOrder(tokenInput)
  }

  const statusIndex = order ? STATUSES.indexOf(order.status) : -1
  const STATUS_ICONS = [CheckCircle, Package, Truck, Home]

  return (
    <>
      <Header />
      <main style={{ backgroundColor: BG, minHeight: "100vh", paddingTop: "100px", paddingBottom: "80px" }}>
        <div className="mx-auto max-w-2xl px-6">

          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <div style={{ width: "28px", height: "1px", backgroundColor: GREEN }} />
              <p style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.26em", textTransform: "uppercase", color: GREEN, margin: 0 }}>
                Order Tracking
              </p>
              <div style={{ width: "28px", height: "1px", backgroundColor: GREEN }} />
            </div>
            <h1 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 400, color: DARK, marginBottom: "12px",
            }}>
              Track Your Order
            </h1>
            <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.75 }}>
              Enter the token shown on your order confirmation screen.
            </p>
          </div>

          {/* Search */}
          <form onSubmit={handleSearch} style={{ marginBottom: "32px" }}>
            <div style={{
              display: "flex",
              backgroundColor: "#fff", borderRadius: "14px",
              border: "1.5px solid #e0d8c8", overflow: "hidden",
              boxShadow: "0 4px 20px rgba(30,58,15,0.08)",
            }}>
              <input
                type="text"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                placeholder="Enter your order token (e.g. a8f3k2b9cd12)"
                style={{
                  flex: 1, padding: "16px 20px",
                  border: "none", outline: "none",
                  fontSize: "14px", color: DARK,
                  backgroundColor: "transparent", fontFamily: "inherit",
                  letterSpacing: "0.04em",
                }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: "0 28px",
                  backgroundColor: DARK, color: "#fff",
                  border: "none", cursor: loading ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", gap: "8px",
                  fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em",
                  flexShrink: 0,
                }}
              >
                <Search style={{ width: 14, height: 14 }} />
                {loading ? "Searching…" : "Track"}
              </button>
            </div>
          </form>

          {/* Error */}
          {error && (
            <div style={{
              backgroundColor: "rgba(181,69,27,0.08)", border: "1px solid rgba(181,69,27,0.2)",
              borderRadius: "12px", padding: "16px 20px",
              fontSize: "13px", color: PRICE, fontWeight: 600, marginBottom: "24px",
            }}>
              {error}
            </div>
          )}

          {/* Result */}
          {order && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

              {/* Status timeline */}
              <div style={{
                backgroundColor: "#fff", borderRadius: "20px",
                border: "1px solid #e0d8c8", padding: "28px",
                boxShadow: "0 4px 20px rgba(30,58,15,0.07)",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px", flexWrap: "wrap", gap: "10px" }}>
                  <p style={{ fontSize: "11px", fontWeight: 800, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Order Status
                  </p>
                  {order.status !== "Delivered" && (
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      backgroundColor: "rgba(74,124,47,0.08)", border: "1px solid rgba(74,124,47,0.2)",
                      borderRadius: "100px", padding: "5px 12px",
                    }}>
                      <Clock style={{ width: 11, height: 11, color: GREEN }} />
                      <span style={{ fontSize: "11px", fontWeight: 700, color: GREEN }}>
                        Delivery within 3 days
                      </span>
                    </div>
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {STATUSES.map((s, i) => {
                    const done   = i <= statusIndex
                    const active = i === statusIndex
                    const Icon   = STATUS_ICONS[i]
                    return (
                      <div key={s} style={{ display: "flex", alignItems: "center", flex: i < STATUSES.length - 1 ? 1 : "none" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                          <div style={{
                            width: "42px", height: "42px", borderRadius: "50%",
                            backgroundColor: done ? (active ? DARK : GREEN) : "#f3f4f6",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            boxShadow: active ? "0 0 0 5px rgba(30,58,15,0.1)" : "none",
                          }}>
                            <Icon style={{ width: 18, height: 18, color: done ? "#fff" : "#d1d5db" }} />
                          </div>
                          <span style={{
                            fontSize: "10px", fontWeight: active ? 800 : 600,
                            color: done ? (active ? DARK : GREEN) : "#9ca3af",
                            textAlign: "center", lineHeight: 1.3, maxWidth: "64px",
                          }}>
                            {s}
                          </span>
                        </div>
                        {i < STATUSES.length - 1 && (
                          <div style={{
                            flex: 1, height: "2px", marginBottom: "26px",
                            backgroundColor: i < statusIndex ? GREEN : "#e5e7eb",
                          }} />
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Order details */}
              <div style={{
                backgroundColor: "#fff", borderRadius: "20px",
                border: "1px solid #e0d8c8", padding: "24px",
                boxShadow: "0 4px 20px rgba(30,58,15,0.07)",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                  <div>
                    <p style={{ fontSize: "11px", color: "#9ca3af", fontWeight: 600, marginBottom: "4px" }}>Customer</p>
                    <p style={{ fontSize: "15px", fontWeight: 800, color: DARK }}>{order.customer_name}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: "11px", color: "#9ca3af", fontWeight: 600, marginBottom: "4px" }}>Order Date</p>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: DARK }}>
                      {new Date(order.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </p>
                  </div>
                </div>

                <div style={{ height: "1px", backgroundColor: "#e8e0d0", marginBottom: "20px" }} />

                {/* Delivery address */}
                <p style={{ fontSize: "11px", fontWeight: 800, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>
                  Delivery Address
                </p>
                <div style={{ marginBottom: "20px", paddingLeft: "2px" }}>
                  {order.address_line1 ? (
                    <>
                      <p style={{ fontSize: "13px", color: DARK, fontWeight: 500, lineHeight: 1.65 }}>{order.address_line1}</p>
                      {order.address_line2 && (
                        <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.65 }}>{order.address_line2}</p>
                      )}
                      <p style={{ fontSize: "13px", color: "#6b7280" }}>
                        {[order.city, order.state].filter(Boolean).join(", ")}
                        {order.pincode ? ` — ${order.pincode}` : ""}
                      </p>
                    </>
                  ) : (
                    <p style={{ fontSize: "13px", color: "#9ca3af", fontStyle: "italic" }}>Address not available for this order</p>
                  )}
                </div>

                <div style={{ height: "1px", backgroundColor: "#e8e0d0", marginBottom: "20px" }} />

                <p style={{ fontSize: "11px", fontWeight: 800, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
                  Items Ordered
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                  {order.items.map((item, i) => (
                    <div key={i} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "10px 14px", backgroundColor: BG, borderRadius: "10px",
                      border: "1px solid #e8e0d0",
                    }}>
                      <div>
                        <p style={{ fontSize: "13px", fontWeight: 700, color: DARK }}>{item.name}</p>
                        <p style={{ fontSize: "11px", color: "#9ca3af", fontWeight: 600 }}>{item.weight} × {item.qty}</p>
                      </div>
                      <p style={{ fontSize: "12px", fontWeight: 700, color: PRICE }}>{item.price}</p>
                    </div>
                  ))}
                </div>

                {order.total > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "14px", borderTop: "1px solid #e8e0d0" }}>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: DARK }}>Total Paid</span>
                    <span style={{ fontSize: "18px", fontWeight: 900, color: DARK }}>₹{order.total}</span>
                  </div>
                )}
              </div>

            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  )
}

export default function TrackPage() {
  return (
    <Suspense fallback={null}>
      <TrackContent />
    </Suspense>
  )
}
