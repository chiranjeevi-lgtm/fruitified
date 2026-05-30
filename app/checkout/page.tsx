"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useCart } from "@/components/cart-provider"
import { useRef } from "react"
import {
  ChevronRight, ShoppingBasket, Minus, Plus, Trash2,
  User, Phone, MapPin, Hash, Truck, ShieldCheck, Leaf, ArrowRight, Mail, Download,
} from "lucide-react"
import type { CartItem } from "@/components/cart-provider"

const DARK  = "#1e3a0f"
const GREEN = "#4a7c2f"
const PRICE = "#b5451b"
const BG    = "#faf5eb"


type FormData = {
  name: string
  phone: string
  email: string
  address_line1: string
  address_line2: string
  city: string
  state: string
  pincode: string
  notes: string
}

const EMPTY_FORM: FormData = { name: "", phone: "", email: "", address_line1: "", address_line2: "", city: "", state: "", pincode: "", notes: "" }

const TRUST = [
  { icon: ShieldCheck, label: "Secure Checkout"   },
  { icon: Leaf,        label: "100% Fresh Fruits" },
  { icon: Truck,       label: "Same Day Delivery" },
]

function Field({
  icon: Icon, label, required, error, children,
}: {
  icon: React.ElementType
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label style={{
        display: "flex", alignItems: "center", gap: "6px",
        fontSize: "11px", fontWeight: 700, color: "#6b7280",
        textTransform: "uppercase", letterSpacing: "0.1em",
        marginBottom: "8px",
      }}>
        <Icon style={{ width: 12, height: 12, color: GREEN }} />
        {label}
        {required && <span style={{ color: PRICE, marginLeft: "2px" }}>*</span>}
      </label>
      {children}
      {error && (
        <p style={{ fontSize: "11px", color: PRICE, marginTop: "6px", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
          {error}
        </p>
      )}
    </div>
  )
}

const inputStyle = (hasError: boolean): React.CSSProperties => ({
  width: "100%", padding: "13px 16px",
  border: `1.5px solid ${hasError ? PRICE : "#e0d8c8"}`,
  borderRadius: "10px", fontSize: "14px", color: DARK,
  backgroundColor: "#fff", outline: "none",
  boxSizing: "border-box", fontFamily: "inherit",
  transition: "border-color 0.18s ease",
})

export default function CheckoutPage() {
  const { items, updateQty, removeItem, clearCart, totalItems } = useCart()
  const [form, setForm]             = useState<FormData>(EMPTY_FORM)
  const [errors, setErrors]         = useState<Partial<FormData>>({})
  const [submitting, setSubmitting]     = useState(false)
  const [submitted, setSubmitted]       = useState(false)
  const [token, setToken]               = useState("")
  const [paymentId, setPaymentId]       = useState("")
  const [paymentError, setPaymentError] = useState("")
  const savedItemsRef               = useRef<CartItem[]>([])

  // Load Razorpay checkout script
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  function parsePrice(priceStr: string): number | null {
    const match = priceStr.match(/₹(\d+)/)
    return match ? parseInt(match[1]) : null
  }

  function parseWeight(weightStr: string): number {
    return parseFloat(weightStr) || 1
  }

  const orderTotal = items.reduce((sum, item) => {
    const price = parsePrice(item.price)
    if (!price) return sum
    return sum + price * parseWeight(item.weight) * item.qty
  }, 0)

  const hasUnpricedItems = items.some((item) => !parsePrice(item.price))

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  function validate(): boolean {
    const errs: Partial<FormData> = {}
    if (!form.name.trim())          errs.name          = "Full name is required"
    if (!form.phone.trim())         errs.phone         = "Phone number is required"
    else if (!/^\d{10}$/.test(form.phone.trim())) errs.phone = "Enter a valid 10-digit number"
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Enter a valid email address"
    if (!form.address_line1.trim()) errs.address_line1 = "Street address is required"
    if (!form.city.trim())          errs.city          = "City is required"
    if (!form.state.trim())         errs.state         = "State is required"
    if (!form.pincode.trim())       errs.pincode       = "Pincode is required"
    else if (!/^\d{6}$/.test(form.pincode.trim())) errs.pincode = "Enter a valid 6-digit pincode"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setPaymentError("")
    setSubmitting(true)

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001"

      // Step 1 — create Razorpay order on backend
      const orderRes = await fetch(`${backendUrl}/api/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: orderTotal || 1, currency: "INR" }),
      })
      const orderData = await orderRes.json()
      if (!orderRes.ok) throw new Error(orderData.error)

      // Step 2 — open Razorpay checkout modal
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.orderId,
        name: "Fruitified by Kamala",
        description: `${totalItems} item${totalItems > 1 ? "s" : ""}`,
        prefill: { name: form.name, contact: form.phone, email: form.email },
        theme: { color: "#1e3a0f" },
        handler: async (response: {
          razorpay_payment_id: string
          razorpay_order_id: string
          razorpay_signature: string
        }) => {
          try {
            // Step 3 — verify payment and save order on backend
            const confirmRes = await fetch(`${backendUrl}/api/confirm-order`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...response,
                customer_name: form.name,
                phone:         form.phone,
                email:         form.email,
                address_line1: form.address_line1,
                address_line2: form.address_line2,
                city:          form.city,
                state:         form.state,
                pincode:       form.pincode,
                notes:         form.notes,
                items:    items.map((i) => ({ slug: i.name, name: i.name, qty: i.qty, weight: i.weight, price: i.price })),
                total:    orderTotal,
              }),
            })
            const confirmData = await confirmRes.json()
            if (!confirmRes.ok) {
              setPaymentError(confirmData.error || "Payment confirmed but order could not be saved. Please contact support with your Payment ID: " + response.razorpay_payment_id)
              setSubmitting(false)
              return
            }

            savedItemsRef.current = [...items]
            setPaymentId(response.razorpay_payment_id)
            setToken(confirmData.token)
            clearCart()
            setSubmitted(true)
            setSubmitting(false)
          } catch {
            setPaymentError("Payment was successful but we could not confirm your order. Please contact support with Payment ID: " + response.razorpay_payment_id)
            setSubmitting(false)
          }
        },
        modal: { ondismiss: () => setSubmitting(false) },
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rzp = new (window as any).Razorpay(options)
      rzp.open()
    } catch (err) {
      console.error("Payment error:", err)
      setSubmitting(false)
    }
  }

  // ── Receipt generator ────────────────────────────────────────────────────────
  function downloadReceipt() {
    const receiptItems = savedItemsRef.current
    const logo = `${window.location.origin}/images/fruitified-logo-Photoroom.png`
    const date = new Date().toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
    const address = [form.address_line1, form.address_line2].filter(Boolean).join(", ")
    const cityLine = [form.city, form.state].filter(Boolean).join(", ") + (form.pincode ? ` — ${form.pincode}` : "")
    const rows = receiptItems.map((item) => {
      const p = item.price.match(/₹(\d+)/)?.[1]
      const w = parseFloat(item.weight) || 1
      const lineTotal = p ? `₹${parseInt(p) * w * item.qty}` : "—"
      return `<tr><td>${item.name}</td><td style="text-align:center">${item.weight}</td><td style="text-align:center">${item.qty}</td><td style="text-align:right">${lineTotal}</td></tr>`
    }).join("")
    const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Receipt — Fruitified by Kamala</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Helvetica Neue',Arial,sans-serif;background:#fff;color:#111;padding:40px 24px}
  .wrap{max-width:560px;margin:0 auto}
  .top{text-align:center;padding-bottom:24px;border-bottom:2px solid #111;margin-bottom:24px}
  .top img{width:110px;height:110px;object-fit:contain;display:block;margin:0 auto 12px}
  .top .name{font-size:18px;font-weight:800;letter-spacing:0.04em;text-transform:uppercase}
  .top .confirmed{font-size:12px;font-weight:600;margin-top:6px}
  .section{margin-bottom:20px}
  .section-title{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;border-bottom:1px solid #111;padding-bottom:4px;margin-bottom:10px}
  .row{display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px}
  .row .lbl{color:#555}
  table{width:100%;border-collapse:collapse;margin-bottom:0}
  th{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;padding:7px 8px;border-top:1px solid #111;border-bottom:1px solid #111;text-align:left}
  th:nth-child(2),th:nth-child(3){text-align:center}
  th:last-child{text-align:right}
  td{font-size:12px;padding:8px 8px;border-bottom:1px solid #ddd}
  td:nth-child(2),td:nth-child(3){text-align:center}
  td:last-child{text-align:right}
  .total-row{display:flex;justify-content:space-between;padding:10px 0;border-top:2px solid #111;margin-top:4px;font-size:14px;font-weight:800}
  .footer-text{margin-top:28px;padding-top:16px;border-top:1px solid #ddd;font-size:11px;color:#555;text-align:center;line-height:1.8}
  .print-btn{display:block;margin:20px auto 0;padding:10px 32px;background:#111;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;font-weight:700;font-family:inherit}
  @media print{.print-btn{display:none}}
</style></head>
<body>
<div class="wrap">
  <div class="top">
    <img src="${logo}" alt="Fruitified by Kamala" onerror="this.style.display='none'"/>
    <div class="name">Fruitified by Kamala</div>
    <div class="confirmed">✓ Payment Confirmed</div>
  </div>

  <div class="section">
    <div class="section-title">Order Details</div>
    <div class="row"><span class="lbl">Date</span><span>${date}</span></div>
    <div class="row"><span class="lbl">Order Token</span><span>${token}</span></div>
    ${paymentId ? `<div class="row"><span class="lbl">Payment ID</span><span>${paymentId}</span></div>` : ""}
  </div>

  <div class="section">
    <div class="section-title">Customer</div>
    <div class="row"><span class="lbl">Name</span><span>${form.name}</span></div>
    <div class="row"><span class="lbl">Phone</span><span>${form.phone}</span></div>
    ${form.email ? `<div class="row"><span class="lbl">Email</span><span>${form.email}</span></div>` : ""}
    <div class="row"><span class="lbl">Address</span><span style="text-align:right;max-width:300px">${[address, cityLine].filter(Boolean).join(", ")}</span></div>
  </div>

  <div class="section">
    <div class="section-title">Items</div>
    <table>
      <thead><tr><th>Item</th><th>Weight</th><th>Qty</th><th>Amount</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="total-row">
      <span>Total Paid</span>
      <span>${orderTotal > 0 ? `₹${orderTotal}` : "On confirmation"}</span>
    </div>
  </div>

  <div class="footer-text">
    Thank you for ordering with Fruitified by Kamala!<br/>
    For support, contact us on WhatsApp.
    <button class="print-btn" onclick="window.print()">Print / Save as PDF</button>
  </div>
</div>
</body></html>`
    const win = window.open("", "_blank")
    if (win) { win.document.write(html); win.document.close() }
  }

  // ── Empty state ─────────────────────────────────────────────────────────────
  if (items.length === 0 && !submitted) {
    return (
      <>
        <Header />
        <main style={{ backgroundColor: BG, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", padding: "60px 24px", maxWidth: "420px" }}>
            <div style={{
              width: "88px", height: "88px", borderRadius: "50%",
              backgroundColor: "rgba(30,58,15,0.06)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 24px",
            }}>
              <ShoppingBasket style={{ width: 38, height: 38, color: DARK, opacity: 0.4 }} />
            </div>
            <h2 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "1.8rem", fontWeight: 400, color: DARK, marginBottom: "12px",
            }}>
              Your basket is empty
            </h2>
            <p style={{ fontSize: "14px", color: "#9ca3af", lineHeight: 1.75, marginBottom: "28px" }}>
              Browse our fresh fruits and add them to your basket before checking out.
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

  // ── Success state ────────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <>
        <Header />
        <main style={{ backgroundColor: BG, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "100px", paddingBottom: "60px" }}>
          <div style={{ textAlign: "center", padding: "40px 24px", maxWidth: "500px" }}>
            {/* Success icon */}
            <div style={{
              width: "96px", height: "96px", borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(74,124,47,0.15) 0%, rgba(74,124,47,0.05) 100%)",
              border: "2px solid rgba(74,124,47,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 28px",
            }}>
              <span style={{ fontSize: "42px" }}>🥭</span>
            </div>

            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.22em",
              textTransform: "uppercase", color: GREEN, marginBottom: "12px",
            }}>
              Order Placed
            </p>
            <h1 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 400, color: DARK, marginBottom: "16px",
            }}>
              Thank you, {form.name.split(" ")[0]}!
            </h1>
            <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.85, marginBottom: "10px" }}>
              Payment received. Your order has been confirmed and will be packed fresh for delivery.
            </p>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "rgba(74,124,47,0.08)", border: "1px solid rgba(74,124,47,0.2)",
              borderRadius: "100px", padding: "7px 16px", marginBottom: "16px",
            }}>
              <Truck style={{ width: 13, height: 13, color: GREEN }} />
              <span style={{ fontSize: "12px", fontWeight: 700, color: GREEN }}>
                Estimated delivery: within 3 days
              </span>
            </div>
            {token && (
              <div style={{
                display: "inline-block",
                backgroundColor: "rgba(30,58,15,0.06)",
                border: "1px solid rgba(30,58,15,0.15)",
                borderRadius: "10px", padding: "10px 20px", marginBottom: "16px",
              }}>
                <p style={{ fontSize: "10px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>
                  Order Token
                </p>
                <p style={{ fontSize: "16px", fontWeight: 900, color: DARK, letterSpacing: "0.08em" }}>
                  {token}
                </p>
              </div>
            )}
            <p style={{ fontSize: "13px", color: GREEN, fontWeight: 700, marginBottom: "36px" }}>
              Save this token to track your order.
            </p>

            {/* What happens next */}
            <div style={{
              backgroundColor: "#fff", borderRadius: "16px",
              border: "1px solid #e8e0d0", padding: "20px 24px",
              textAlign: "left", marginBottom: "32px",
              boxShadow: "0 2px 12px rgba(30,58,15,0.06)",
            }}>
              <p style={{ fontSize: "11px", fontWeight: 800, color: DARK, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "14px" }}>
                What happens next?
              </p>
              {[
                "We confirm your order on WhatsApp",
                "Fresh fruits are packed for you",
                "Delivered to your door within 3 days",
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: i < 2 ? "12px" : 0 }}>
                  <div style={{
                    width: "24px", height: "24px", borderRadius: "50%",
                    backgroundColor: DARK, color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "10px", fontWeight: 800, flexShrink: 0,
                  }}>
                    {i + 1}
                  </div>
                  <p style={{ fontSize: "13px", color: "#444", fontWeight: 500 }}>{step}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
              {token && (
                <Link href={`/track?token=${token}`} style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  backgroundColor: DARK, color: "#fff",
                  fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em",
                  padding: "14px 32px", borderRadius: "100px", textDecoration: "none",
                  boxShadow: "0 6px 24px rgba(30,58,15,0.25)",
                }}>
                  Track My Order <ArrowRight style={{ width: 13, height: 13 }} />
                </Link>
              )}
              <button
                onClick={downloadReceipt}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  backgroundColor: "transparent",
                  border: `1.5px solid ${GREEN}`, color: GREEN,
                  fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em",
                  padding: "12px 28px", borderRadius: "100px", cursor: "pointer",
                }}
              >
                <Download style={{ width: 13, height: 13 }} /> Download Receipt
              </button>
              <Link href="/shop" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                color: "#9ca3af",
                fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em",
                padding: "10px 24px", borderRadius: "100px", textDecoration: "none",
              }}>
                Continue Shopping
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // ── Main checkout ────────────────────────────────────────────────────────────
  return (
    <>
      <Header />
      <main style={{ backgroundColor: BG, minHeight: "100vh" }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-10" style={{ paddingTop: "116px", paddingBottom: "80px" }}>

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#9ca3af", fontWeight: 600, marginBottom: "28px" }}>
            <Link href="/shop" style={{ color: "#9ca3af", textDecoration: "none" }}>Shop</Link>
            <ChevronRight style={{ width: 11, height: 11 }} />
            <span style={{ color: DARK }}>Checkout</span>
          </div>

          {/* Page heading */}
          <div style={{ marginBottom: "40px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <div style={{ width: "28px", height: "1px", backgroundColor: GREEN }} />
              <p style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.26em", textTransform: "uppercase", color: GREEN, margin: 0 }}>
                Secure Checkout
              </p>
              <div style={{ width: "28px", height: "1px", backgroundColor: GREEN }} />
            </div>
            <h1 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 400, color: DARK, lineHeight: 1.1,
            }}>
              Complete Your Order
            </h1>
          </div>

          {/* Steps indicator */}
          <div style={{
            display: "flex", alignItems: "center", gap: "0",
            marginBottom: "40px", maxWidth: "400px",
          }}>
            {["Cart", "Details", "Confirm"].map((step, i) => (
              <div key={step} style={{ display: "flex", alignItems: "center", flex: i < 2 ? 1 : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    backgroundColor: i === 1 ? DARK : i === 0 ? GREEN : "#e0d8c8",
                    color: i < 2 ? "#fff" : "#9ca3af",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "11px", fontWeight: 800, flexShrink: 0,
                  }}>
                    {i === 0 ? "✓" : i + 1}
                  </div>
                  <span style={{
                    fontSize: "11px", fontWeight: 700,
                    color: i === 1 ? DARK : i === 0 ? GREEN : "#9ca3af",
                  }}>
                    {step}
                  </span>
                </div>
                {i < 2 && (
                  <div style={{ flex: 1, height: "1px", backgroundColor: i === 0 ? GREEN : "#e0d8c8", margin: "0 10px" }} />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px]" style={{ gap: "32px", alignItems: "flex-start" }}>

            {/* ── Left — Form ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

              {/* Trust bar */}
              <div style={{
                display: "flex", gap: "12px", flexWrap: "wrap",
              }}>
                {TRUST.map(({ icon: Icon, label }) => (
                  <div key={label} style={{
                    display: "flex", alignItems: "center", gap: "7px",
                    backgroundColor: "rgba(74,124,47,0.08)",
                    border: "1px solid rgba(74,124,47,0.18)",
                    borderRadius: "100px", padding: "6px 14px",
                  }}>
                    <Icon style={{ width: 12, height: 12, color: GREEN }} />
                    <span style={{ fontSize: "11px", fontWeight: 700, color: GREEN }}>{label}</span>
                  </div>
                ))}
              </div>

              {/* Form card */}
              <div style={{
                backgroundColor: "#fff", borderRadius: "20px",
                border: "1px solid #e0d8c8", padding: "36px",
                boxShadow: "0 4px 24px rgba(30,58,15,0.07)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "10px",
                    backgroundColor: "rgba(30,58,15,0.07)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <MapPin style={{ width: 16, height: 16, color: DARK }} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: "15px", fontWeight: 800, color: DARK, margin: 0 }}>Delivery Details</h2>
                    <p style={{ fontSize: "11px", color: "#9ca3af", margin: 0 }}>Tell us where to deliver your fruits</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "22px" }}>

                  {/* Name + Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "16px" }}>
                    <Field icon={User} label="Full Name" required error={errors.name}>
                      <input
                        name="name" value={form.name} onChange={handleChange}
                        placeholder="e.g. Ravi Kumar"
                        style={inputStyle(!!errors.name)}
                      />
                    </Field>
                    <Field icon={Phone} label="Phone Number" required error={errors.phone}>
                      <input
                        name="phone" value={form.phone} onChange={handleChange}
                        placeholder="10-digit mobile number"
                        maxLength={10} inputMode="numeric"
                        style={inputStyle(!!errors.phone)}
                      />
                    </Field>
                  </div>

                  {/* Email */}
                  <Field icon={Mail} label="Email Address" error={errors.email}>
                    <input
                      name="email" value={form.email} onChange={handleChange}
                      placeholder="you@example.com"
                      type="email" inputMode="email"
                      style={inputStyle(!!errors.email)}
                    />
                    <p style={{ fontSize: "10px", color: "#9ca3af", marginTop: "5px" }}>Optional — Razorpay will send you an official payment receipt</p>
                  </Field>

                  {/* Address Line 1 */}
                  <Field icon={MapPin} label="Street Address" required error={errors.address_line1}>
                    <input
                      name="address_line1" value={form.address_line1} onChange={handleChange}
                      placeholder="House / Flat no., Street name, Colony"
                      style={inputStyle(!!errors.address_line1)}
                    />
                  </Field>

                  {/* Address Line 2 */}
                  <Field icon={MapPin} label="Landmark / Area">
                    <input
                      name="address_line2" value={form.address_line2} onChange={handleChange}
                      placeholder="Near landmark, Area (optional)"
                      style={inputStyle(false)}
                    />
                    <p style={{ fontSize: "10px", color: "#9ca3af", marginTop: "5px" }}>Optional</p>
                  </Field>

                  {/* City + State row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "16px" }}>
                    <Field icon={MapPin} label="City" required error={errors.city}>
                      <input
                        name="city" value={form.city} onChange={handleChange}
                        placeholder="e.g. Hyderabad"
                        style={inputStyle(!!errors.city)}
                      />
                    </Field>
                    <Field icon={MapPin} label="State" required error={errors.state}>
                      <input
                        name="state" value={form.state} onChange={handleChange}
                        placeholder="e.g. Telangana"
                        style={inputStyle(!!errors.state)}
                      />
                    </Field>
                  </div>

                  {/* Pincode */}
                  <Field icon={Hash} label="Pincode" required error={errors.pincode}>
                    <input
                      name="pincode" value={form.pincode} onChange={handleChange}
                      placeholder="6-digit pincode"
                      maxLength={6} inputMode="numeric"
                      style={{ ...inputStyle(!!errors.pincode), maxWidth: "200px" }}
                    />
                  </Field>


                  {/* Divider */}
                  <div style={{ height: "1px", backgroundColor: "#e8e0d0" }} />

                  {/* Payment error */}
                  {paymentError && (
                    <div style={{
                      backgroundColor: "rgba(181,69,27,0.08)", border: "1px solid rgba(181,69,27,0.25)",
                      borderRadius: "10px", padding: "14px 16px",
                      fontSize: "13px", color: PRICE, fontWeight: 600, lineHeight: 1.6,
                    }}>
                      {paymentError}
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                      backgroundColor: submitting ? "#9ca3af" : DARK, color: "#fff",
                      fontSize: "13px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em",
                      height: "60px", borderRadius: "14px",
                      border: "none", cursor: submitting ? "not-allowed" : "pointer",
                      boxShadow: submitting ? "none" : "0 8px 28px rgba(30,58,15,0.28)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {submitting ? "Opening Payment…" : (
                      <>Pay {orderTotal > 0 ? `₹${orderTotal}` : ""} Securely <ArrowRight style={{ width: 15, height: 15 }} /></>
                    )}
                  </button>

                  <p style={{ fontSize: "11px", color: "#9ca3af", textAlign: "center", lineHeight: 1.7 }}>
                    Your order will be sent to our WhatsApp. We&apos;ll confirm availability and pricing within 30 minutes.
                  </p>

                </form>
              </div>
            </div>

            {/* ── Right — Order summary ── */}
            <div style={{ position: "sticky", top: "104px", display: "flex", flexDirection: "column", gap: "16px" }}>

              {/* Summary card */}
              <div style={{
                backgroundColor: "#fff", borderRadius: "20px",
                border: "1px solid #e0d8c8", padding: "24px",
                boxShadow: "0 4px 24px rgba(30,58,15,0.07)",
              }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                  <h2 style={{ fontSize: "14px", fontWeight: 800, color: DARK, margin: 0 }}>Order Summary</h2>
                  <div style={{
                    backgroundColor: PRICE, color: "#fff",
                    fontSize: "10px", fontWeight: 800,
                    borderRadius: "100px", padding: "3px 10px",
                  }}>
                    {totalItems} {totalItems === 1 ? "item" : "items"}
                  </div>
                </div>

                {/* Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
                  {items.map((item) => (
                    <div key={`${item.name}-${item.weight}`} style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      padding: "12px 14px",
                      backgroundColor: BG, borderRadius: "12px",
                      border: "1px solid #e8e0d0",
                    }}>
                      <span style={{ fontSize: "24px", flexShrink: 0 }}>{item.emoji}</span>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: "12px", fontWeight: 700, color: DARK, marginBottom: "2px", lineHeight: 1.3 }}>
                          {item.name}
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span style={{
                            fontSize: "10px", fontWeight: 700, color: GREEN,
                            backgroundColor: "rgba(74,124,47,0.1)",
                            padding: "1px 7px", borderRadius: "100px",
                          }}>
                            {item.weight}
                          </span>
                          <span style={{ fontSize: "10px", color: PRICE, fontWeight: 600 }}>{item.price}</span>
                        </div>
                      </div>

                      {/* Qty controls */}
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flexShrink: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <button
                            onClick={() => updateQty(item.name, item.weight, item.qty - 1)}
                            style={{
                              width: 24, height: 24, borderRadius: "50%",
                              border: "1.5px solid #d1cfc8", background: "#fff",
                              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                            }}
                          >
                            <Minus style={{ width: 9, height: 9, color: DARK }} />
                          </button>
                          <span style={{ fontSize: "12px", fontWeight: 800, color: DARK, minWidth: "16px", textAlign: "center" }}>
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.name, item.weight, item.qty + 1)}
                            style={{
                              width: 24, height: 24, borderRadius: "50%",
                              border: "none", background: DARK,
                              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                            }}
                          >
                            <Plus style={{ width: 9, height: 9, color: "#fff" }} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.name, item.weight)}
                          style={{
                            background: "none", border: "none", cursor: "pointer", padding: 0,
                            fontSize: "10px", color: "#d1cfc8", fontWeight: 600,
                            display: "flex", alignItems: "center", gap: "3px",
                          }}
                        >
                          <Trash2 style={{ width: 9, height: 9 }} /> Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div style={{ height: "1px", backgroundColor: "#e8e0d0", marginBottom: "14px" }} />

                {/* Order total */}
                {orderTotal > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 0" }}>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: DARK }}>Total</span>
                    <span style={{ fontSize: "18px", fontWeight: 900, color: DARK }}>₹{orderTotal}</span>
                  </div>
                )}
                {hasUnpricedItems && (
                  <div style={{
                    backgroundColor: "rgba(74,124,47,0.06)",
                    border: "1px solid rgba(74,124,47,0.15)",
                    borderRadius: "10px", padding: "12px 14px",
                  }}>
                    <p style={{ fontSize: "11px", color: GREEN, fontWeight: 700, marginBottom: "3px" }}>
                      Note
                    </p>
                    <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: 1.65 }}>
                      Some items are priced by weight — final total will be confirmed before dispatch.
                    </p>
                  </div>
                )}
              </div>

              {/* Delivery info card */}
              <div style={{
                backgroundColor: DARK, borderRadius: "16px",
                padding: "18px 20px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <Truck style={{ width: 14, height: 14, color: "rgba(255,255,255,0.7)" }} />
                  <p style={{ fontSize: "11px", fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Delivery Info
                  </p>
                </div>
                {[
                  "Same day delivery for orders before 10 AM",
                  "Freshly packed at time of dispatch",
                  "Delivery within Hyderabad",
                ].map((point) => (
                  <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "6px" }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: GREEN, marginTop: "6px", flexShrink: 0 }} />
                    <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>{point}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
