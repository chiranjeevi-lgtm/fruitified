"use client"

import { useState } from "react"
import {
  Lock, RefreshCw, LogOut, ShoppingBag, TrendingUp,
  Clock, CheckCircle2, Search, Phone, MapPin,
  IndianRupee, Users, ChevronDown, ArrowUpRight,
  Hash, CreditCard, Calendar, Package, ChevronUp,
} from "lucide-react"

const FONT = "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif"
const MONO = "'Roboto Mono', 'SF Mono', 'Cascadia Code', monospace"

const STATUSES = ["Confirmed", "Preparing", "Out for Delivery", "Delivered"]

const STATUS_META: Record<string, { color: string; bg: string; dot: string }> = {
  "Confirmed":        { color: "#b45309", bg: "#fef3c7", dot: "#f59e0b" },
  "Preparing":        { color: "#1d4ed8", bg: "#dbeafe", dot: "#3b82f6" },
  "Out for Delivery": { color: "#15803d", bg: "#dcfce7", dot: "#22c55e" },
  "Delivered":        { color: "#6d28d9", bg: "#ede9fe", dot: "#7c3aed" },
}

type OrderItem = { name: string; weight: string; qty: number; price: string }
type RazorpayPayment = {
  id: string
  amount: number
  status: string
  method: string
  vpa?: string
  bank?: string
  wallet?: string
  card?: { name?: string; network?: string; last4?: string }
  contact?: string
  created_at: number
}
type Order = {
  id: number
  token: string
  customer_name: string
  phone: string
  email?: string
  address_line1: string
  address_line2?: string
  city: string
  state: string
  pincode: string
  items: OrderItem[]
  total: number
  status: string
  payment_id: string
  created_at: string
}

function fmt(dateStr: string) {
  const d = new Date(dateStr)
  return {
    date: d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
    time: d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true }),
  }
}

function parseItemTotal(price: string, weight: string, qty: number): number | null {
  const p = price.match(/₹(\d+)/)?.[1]
  const w = parseFloat(weight)
  if (!p || isNaN(w)) return null
  return parseInt(p) * w * qty
}

function StatusBadge({ status }: { status: string }) {
  const m = STATUS_META[status] || { color: "#64748b", bg: "#f1f5f9", dot: "#94a3b8" }
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "5px",
      padding: "4px 10px", borderRadius: "6px",
      backgroundColor: m.bg, fontFamily: FONT,
      fontSize: "11px", fontWeight: 700, color: m.color,
      whiteSpace: "nowrap",
    }}>
      <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: m.dot }} />
      {status}
    </span>
  )
}

// ── Receipt row helper ────────────────────────────────────────────────────────
function Row({ label, value, bold }: { label: string; value?: string; bold?: boolean }) {
  if (!value) return null
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
      <span style={{ fontSize: "11px", color: "#94a3b8", fontFamily: FONT, flexShrink: 0 }}>{label}</span>
      <span style={{ fontSize: "11px", fontWeight: bold ? 700 : 500, color: "#0f172a", fontFamily: MONO, textAlign: "right" }}>{value}</span>
    </div>
  )
}

// ── Login ─────────────────────────────────────────────────────────────────────
function LoginScreen({ password, setPassword, loading, authError, onSubmit }: {
  password: string; setPassword: (v: string) => void
  loading: boolean; authError: string; onSubmit: (e: React.FormEvent) => void
}) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONT, padding: "24px" }}>
      <div style={{ width: "100%", maxWidth: "360px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: "48px", height: "48px", borderRadius: "12px",
            background: "linear-gradient(135deg, #22c55e, #15803d)",
            fontSize: "22px", marginBottom: "14px",
            boxShadow: "0 6px 20px rgba(34,197,94,0.25)",
          }}>🥭</div>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.16em", color: "#16a34a", textTransform: "uppercase", marginBottom: "5px" }}>Fruitified by Kamala</p>
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>Admin Portal</h1>
        </div>
        <div style={{ backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: "8px" }}>
                <Lock style={{ width: 10, height: 10 }} /> Password
              </label>
              <input
                type="password" value={password} autoFocus
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                style={{ width: "100%", padding: "11px 14px", backgroundColor: "#f8fafc", border: `1.5px solid ${authError ? "#fca5a5" : "#e2e8f0"}`, borderRadius: "9px", fontSize: "14px", color: "#0f172a", outline: "none", boxSizing: "border-box", fontFamily: FONT, letterSpacing: "0.08em" }}
              />
              {authError && <p style={{ fontSize: "12px", color: "#ef4444", marginTop: "7px", fontWeight: 500 }}>{authError}</p>}
            </div>
            <button type="submit" disabled={loading || !password} style={{ background: loading || !password ? "#e2e8f0" : "linear-gradient(135deg, #6366f1, #4f46e5)", color: loading || !password ? "#94a3b8" : "#fff", border: "none", padding: "12px 20px", borderRadius: "9px", fontSize: "13px", fontWeight: 600, cursor: loading || !password ? "not-allowed" : "pointer", fontFamily: FONT, boxShadow: loading || !password ? "none" : "0 3px 12px rgba(99,102,241,0.3)" }}>
              {loading ? "Verifying…" : "Sign in →"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

// ── Order Card ────────────────────────────────────────────────────────────────
function OrderCard({ order, updating, onUpdateStatus, defaultExpanded, password, backendUrl }: {
  order: Order
  updating: number | null
  onUpdateStatus: (id: number, status: string) => void
  defaultExpanded?: boolean
  password: string
  backendUrl: string
}) {
  const [expanded, setExpanded]         = useState(defaultExpanded ?? false)
  const [receipt, setReceipt]           = useState<RazorpayPayment | null>(null)
  const [receiptLoading, setReceiptLoading] = useState(false)
  const [receiptError, setReceiptError] = useState("")

  async function fetchReceipt() {
    if (!order.payment_id) return
    setReceiptLoading(true)
    setReceiptError("")
    try {
      const res = await fetch(`${backendUrl}/api/admin/payment/${order.payment_id}`, {
        headers: { "x-admin-password": password },
      })
      const data = await res.json()
      if (!res.ok) setReceiptError("Could not fetch receipt.")
      else setReceipt(data)
    } catch {
      setReceiptError("Could not reach server.")
    } finally {
      setReceiptLoading(false)
    }
  }
  const { date, time } = fmt(order.created_at)

  const itemTotal = order.items.reduce((sum, item) => {
    const t = parseItemTotal(item.price, item.weight, item.qty)
    return t ? sum + t : sum
  }, 0)

  return (
    <div style={{ backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>

      {/* ── Card header ── */}
      <div
        onClick={() => setExpanded(!expanded)}
        style={{ padding: "18px 20px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", userSelect: "none" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px", flex: 1, minWidth: 0, flexWrap: "wrap" }}>
          {/* Order number */}
          <div style={{ width: "40px", height: "40px", borderRadius: "10px", backgroundColor: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#64748b", fontFamily: MONO }}>#{order.id}</span>
          </div>

          <div style={{ minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "15px", fontWeight: 700, color: "#0f172a", fontFamily: FONT }}>{order.customer_name}</span>
              <StatusBadge status={order.status} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#64748b", fontFamily: FONT }}>
                <Phone style={{ width: 10, height: 10 }} />{order.phone}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#64748b", fontFamily: FONT }}>
                <Calendar style={{ width: 10, height: 10 }} />{date} · {time}
              </span>
              <span style={{ fontSize: "12px", color: "#94a3b8", fontFamily: FONT }}>
                {order.items.length} {order.items.length === 1 ? "item" : "items"}
              </span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {order.total > 0 && (
            <span style={{ fontSize: "18px", fontWeight: 800, color: "#0f172a", fontFamily: FONT, letterSpacing: "-0.02em" }}>
              ₹{order.total.toLocaleString("en-IN")}
            </span>
          )}
          {expanded
            ? <ChevronUp style={{ width: 16, height: 16, color: "#94a3b8" }} />
            : <ChevronDown style={{ width: 16, height: 16, color: "#94a3b8" }} />
          }
        </div>
      </div>

      {/* ── Expanded details ── */}
      {expanded && (
        <div style={{ borderTop: "1px solid #f1f5f9" }}>

          {/* 3-column info grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0", borderBottom: "1px solid #f1f5f9" }}>

            {/* Delivery address */}
            <div style={{ padding: "18px 20px", borderRight: "1px solid #f1f5f9" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px", fontFamily: FONT }}>
                Delivery Address
              </p>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "7px" }}>
                <MapPin style={{ width: 13, height: 13, color: "#6366f1", marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: "13px", color: "#0f172a", fontWeight: 500, lineHeight: 1.6, fontFamily: FONT }}>{order.address_line1}</p>
                  {order.address_line2 && (
                    <p style={{ fontSize: "12px", color: "#475569", fontFamily: FONT, marginTop: "1px" }}>{order.address_line2}</p>
                  )}
                  <p style={{ fontSize: "12px", color: "#64748b", fontFamily: FONT, marginTop: "2px" }}>{order.city}, {order.state}</p>
                  <p style={{ fontSize: "12px", color: "#64748b", fontFamily: MONO, marginTop: "1px" }}>PIN: {order.pincode}</p>
                </div>
              </div>
            </div>

            {/* Payment info */}
            <div style={{ padding: "18px 20px", borderRight: "1px solid #f1f5f9" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px", fontFamily: FONT }}>
                Payment
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                  <CreditCard style={{ width: 12, height: 12, color: "#22c55e" }} />
                  <span style={{ fontSize: "11px", color: "#64748b", fontFamily: MONO }}>{order.payment_id || "—"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                  <Hash style={{ width: 12, height: 12, color: "#6366f1" }} />
                  <span style={{ fontSize: "11px", color: "#64748b", fontFamily: MONO }}>Token: {order.token}</span>
                </div>
              </div>

              {/* Razorpay receipt */}
              {order.payment_id && !receipt && (
                <button
                  onClick={fetchReceipt}
                  disabled={receiptLoading}
                  style={{ display: "flex", alignItems: "center", gap: "5px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", padding: "6px 10px", fontSize: "11px", fontWeight: 600, color: "#6366f1", cursor: receiptLoading ? "not-allowed" : "pointer", fontFamily: FONT }}
                >
                  <CreditCard style={{ width: 11, height: 11 }} />
                  {receiptLoading ? "Fetching…" : "View Razorpay Receipt"}
                </button>
              )}
              {receiptError && <p style={{ fontSize: "11px", color: "#ef4444", marginTop: "6px", fontFamily: FONT }}>{receiptError}</p>}

              {receipt && (
                <div style={{ marginTop: "10px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "12px", display: "flex", flexDirection: "column", gap: "7px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "10px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: FONT }}>Razorpay Receipt</span>
                    <span style={{ fontSize: "10px", fontWeight: 700, color: receipt.status === "captured" ? "#15803d" : "#ef4444", backgroundColor: receipt.status === "captured" ? "#dcfce7" : "#fee2e2", padding: "2px 7px", borderRadius: "4px", fontFamily: FONT }}>
                      {receipt.status === "captured" ? "✓ Captured" : receipt.status}
                    </span>
                  </div>
                  <div style={{ height: "1px", backgroundColor: "#e2e8f0" }} />
                  <Row label="Method" value={receipt.method?.toUpperCase()} />
                  {receipt.vpa    && <Row label="UPI ID"   value={receipt.vpa} />}
                  {receipt.bank   && <Row label="Bank"     value={receipt.bank} />}
                  {receipt.wallet && <Row label="Wallet"   value={receipt.wallet} />}
                  {receipt.card   && <Row label="Card"     value={`${receipt.card.network || ""} •••• ${receipt.card.last4 || ""}`} />}
                  <Row label="Amount" value={`₹${(receipt.amount / 100).toLocaleString("en-IN")}`} bold />
                  <Row label="Date"   value={new Date(receipt.created_at * 1000).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })} />
                  <div style={{ height: "1px", backgroundColor: "#e2e8f0", marginTop: "2px" }} />
                  <button
                    onClick={() => {
                      const { date: oDate, time: oTime } = fmt(order.created_at)
                      const logo = `${window.location.origin}/images/fruitified-logo-Photoroom.png`
                      const methodLabel = receipt.method === "upi" ? "UPI" : receipt.method === "card" ? "Card" : receipt.method === "netbanking" ? "Net Banking" : receipt.method === "wallet" ? "Wallet" : (receipt.method || "—").toUpperCase()
                      const methodDetail = receipt.vpa ? receipt.vpa : receipt.bank ? receipt.bank : receipt.card ? `${receipt.card.network || ""} •••• ${receipt.card.last4 || ""}` : receipt.wallet || ""
                      const itemRows = order.items.map((item) => {
                        const p = item.price.match(/₹(\d+)/)?.[1]
                        const w = parseFloat(item.weight) || 1
                        const lineTotal = p ? `₹${(parseInt(p) * w * item.qty).toLocaleString("en-IN")}` : "—"
                        return `<tr><td>${item.name}</td><td style="text-align:center">${item.weight}</td><td style="text-align:center">${item.qty}</td><td style="text-align:right">${lineTotal}</td></tr>`
                      }).join("")
                      const addressParts = [order.address_line1, order.address_line2, `${order.city}, ${order.state}`, `PIN: ${order.pincode}`].filter(Boolean).join(", ")
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
    <div class="row"><span class="lbl">Order #</span><span>${order.id}</span></div>
    <div class="row"><span class="lbl">Date</span><span>${oDate} · ${oTime}</span></div>
    <div class="row"><span class="lbl">Token</span><span>${order.token}</span></div>
    <div class="row"><span class="lbl">Payment ID</span><span>${order.payment_id}</span></div>
    <div class="row"><span class="lbl">Method</span><span>${methodLabel}${methodDetail ? " — " + methodDetail : ""}</span></div>
    <div class="row"><span class="lbl">Status</span><span>${order.status}</span></div>
  </div>

  <div class="section">
    <div class="section-title">Customer</div>
    <div class="row"><span class="lbl">Name</span><span>${order.customer_name}</span></div>
    <div class="row"><span class="lbl">Phone</span><span>${order.phone}</span></div>
    ${order.email ? `<div class="row"><span class="lbl">Email</span><span>${order.email}</span></div>` : ""}
    <div class="row"><span class="lbl">Address</span><span style="text-align:right;max-width:300px">${addressParts}</span></div>
  </div>

  <div class="section">
    <div class="section-title">Items</div>
    <table>
      <thead><tr><th>Item</th><th>Weight</th><th>Qty</th><th>Amount</th></tr></thead>
      <tbody>${itemRows}</tbody>
    </table>
    <div class="total-row">
      <span>Total Paid</span>
      <span>${order.total > 0 ? "₹" + order.total.toLocaleString("en-IN") : "₹" + (receipt.amount / 100).toLocaleString("en-IN")}</span>
    </div>
  </div>

  <div class="footer-text">
    Thank you for ordering with Fruitified by Kamala!
    <button class="print-btn" onclick="window.print()">Print / Save as PDF</button>
  </div>
</div>
</body></html>`
                      const win = window.open("", "_blank")
                      if (win) { win.document.write(html); win.document.close() }
                    }}
                    style={{ display: "flex", alignItems: "center", gap: "5px", backgroundColor: "#1e3a0f", border: "none", borderRadius: "6px", padding: "7px 12px", fontSize: "11px", fontWeight: 600, color: "#fff", cursor: "pointer", fontFamily: FONT, marginTop: "2px" }}
                  >
                    Print / Download Receipt
                  </button>
                </div>
              )}
            </div>

            {/* Update status */}
            <div style={{ padding: "18px 20px" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px", fontFamily: FONT }}>
                Update Status
              </p>
              <div style={{ position: "relative" }}>
                <select
                  value={order.status}
                  onChange={(e) => onUpdateStatus(order.id, e.target.value)}
                  disabled={updating === order.id}
                  style={{ appearance: "none", width: "100%", padding: "9px 32px 9px 12px", backgroundColor: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "12px", fontWeight: 600, color: "#0f172a", fontFamily: FONT, cursor: updating === order.id ? "not-allowed" : "pointer", outline: "none" }}
                >
                  {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDown style={{ position: "absolute", right: 9, top: "50%", transform: "translateY(-50%)", width: 12, height: 12, color: "#94a3b8", pointerEvents: "none" }} />
              </div>
              {updating === order.id && (
                <p style={{ fontSize: "11px", color: "#6366f1", marginTop: "6px", fontFamily: FONT }}>Updating…</p>
              )}
            </div>
          </div>

          {/* Items table */}
          <div style={{ padding: "18px 20px" }}>
            <p style={{ fontSize: "10px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px", fontFamily: FONT }}>
              Order Items
            </p>
            <div style={{ border: "1px solid #f1f5f9", borderRadius: "10px", overflow: "hidden" }}>
              {/* Table head */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 100px 60px 90px", padding: "8px 14px", backgroundColor: "#f8fafc", borderBottom: "1px solid #f1f5f9" }}>
                {["Item", "Weight", "Qty", "Amount"].map((h) => (
                  <p key={h} style={{ fontSize: "10px", fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: FONT }}>{h}</p>
                ))}
              </div>
              {/* Rows */}
              {order.items.map((item, i) => {
                const lineTotal = parseItemTotal(item.price, item.weight, item.qty)
                return (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 100px 60px 90px", padding: "10px 14px", borderBottom: i < order.items.length - 1 ? "1px solid #f8fafc" : "none", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Package style={{ width: 12, height: 12, color: "#22c55e", flexShrink: 0 }} />
                      <div>
                        <p style={{ fontSize: "13px", fontWeight: 600, color: "#0f172a", fontFamily: FONT }}>{item.name}</p>
                        <p style={{ fontSize: "11px", color: "#94a3b8", fontFamily: FONT }}>{item.price}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "12px", color: "#475569", fontFamily: FONT }}>{item.weight}</p>
                    <p style={{ fontSize: "12px", fontWeight: 700, color: "#0f172a", fontFamily: FONT }}>{item.qty}</p>
                    <p style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", fontFamily: FONT }}>
                      {lineTotal ? `₹${lineTotal}` : "—"}
                    </p>
                  </div>
                )
              })}
              {/* Total row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 100px 60px 90px", padding: "10px 14px", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "#0f172a", gridColumn: "1 / 4", fontFamily: FONT }}>Total</p>
                <p style={{ fontSize: "14px", fontWeight: 800, color: "#0f172a", fontFamily: FONT }}>
                  {order.total > 0 ? `₹${order.total.toLocaleString("en-IN")}` : itemTotal > 0 ? `₹${itemTotal}` : "—"}
                </p>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function AdminPage() {
  const [password, setPassword]         = useState("")
  const [authed, setAuthed]             = useState(false)
  const [authError, setAuthError]       = useState("")
  const [orders, setOrders]             = useState<Order[]>([])
  const [loading, setLoading]           = useState(false)
  const [updating, setUpdating]         = useState<number | null>(null)
  const [search, setSearch]             = useState("")
  const [filterStatus, setFilterStatus] = useState("All")

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001"

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setAuthError("")
    try {
      const res = await fetch(`${backendUrl}/api/admin/orders`, { headers: { "x-admin-password": password } })
      if (res.status === 401 || res.status === 403) { setAuthError("Incorrect password."); setLoading(false); return }
      setOrders(await res.json())
      setAuthed(true)
    } catch { setAuthError("Could not connect to server.") }
    finally { setLoading(false) }
  }

  async function refreshOrders() {
    setLoading(true)
    try {
      const res = await fetch(`${backendUrl}/api/admin/orders`, { headers: { "x-admin-password": password } })
      setOrders(await res.json())
    } finally { setLoading(false) }
  }

  async function updateStatus(id: number, status: string) {
    setUpdating(id)
    try {
      await fetch(`${backendUrl}/api/admin/orders/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "x-admin-password": password },
        body: JSON.stringify({ status }),
      })
      setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status } : o))
    } finally { setUpdating(null) }
  }

  if (!authed) return <LoginScreen password={password} setPassword={setPassword} loading={loading} authError={authError} onSubmit={handleLogin} />

  const totalRevenue    = orders.reduce((s, o) => s + (o.total || 0), 0)
  const deliveredCount  = orders.filter((o) => o.status === "Delivered").length
  const activeCount     = orders.filter((o) => o.status !== "Delivered").length
  const today           = new Date().toDateString()
  const todayCount      = orders.filter((o) => new Date(o.created_at).toDateString() === today).length
  const uniqueCustomers = new Set(orders.map((o) => o.phone)).size

  const STATS = [
    { label: "Total Orders",  value: orders.length,  icon: ShoppingBag,  color: "#6366f1" },
    { label: "Today",         value: todayCount,     icon: Clock,        color: "#f59e0b", delta: "new today" },
    { label: "Active",        value: activeCount,    icon: TrendingUp,   color: "#3b82f6" },
    { label: "Delivered",     value: deliveredCount, icon: CheckCircle2, color: "#22c55e" },
    { label: "Revenue",       value: `₹${totalRevenue.toLocaleString("en-IN")}`, icon: IndianRupee, color: "#8b5cf6" },
    { label: "Customers",     value: uniqueCustomers, icon: Users,       color: "#14b8a6" },
  ]

  const filtered = orders.filter((o) => {
    const q = search.toLowerCase()
    const matchSearch = !q || o.customer_name?.toLowerCase().includes(q) || o.phone?.includes(q) || o.token?.toLowerCase().includes(q) || o.address_line1?.toLowerCase().includes(q) || o.city?.toLowerCase().includes(q)
    const matchStatus = filterStatus === "All" || o.status === filterStatus
    return matchSearch && matchStatus
  })

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", fontFamily: FONT }}>

      {/* Topbar */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: "#fff", borderBottom: "1px solid #e2e8f0", height: "52px", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "18px" }}>🥭</span>
          <span style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>Fruitified</span>
          <span style={{ fontSize: "10px", fontWeight: 600, color: "#6366f1", backgroundColor: "#eef2ff", padding: "2px 8px", borderRadius: "5px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Admin</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button onClick={refreshOrders} disabled={loading} style={{ display: "flex", alignItems: "center", gap: "5px", backgroundColor: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: "7px", padding: "6px 12px", color: "#475569", cursor: "pointer", fontSize: "12px", fontWeight: 500, fontFamily: FONT }}>
            <RefreshCw style={{ width: 12, height: 12 }} />{loading ? "Refreshing…" : "Refresh"}
          </button>
          <button onClick={() => { setAuthed(false); setPassword(""); setOrders([]) }} style={{ display: "flex", alignItems: "center", gap: "5px", backgroundColor: "transparent", border: "1px solid #e2e8f0", borderRadius: "7px", padding: "6px 12px", color: "#94a3b8", cursor: "pointer", fontSize: "12px", fontWeight: 500, fontFamily: FONT }}>
            <LogOut style={{ width: 12, height: 12 }} />Sign out
          </button>
        </div>
      </header>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "28px 24px 60px" }}>

        {/* Heading */}
        <div style={{ marginBottom: "24px" }}>
          <h1 style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em", marginBottom: "3px" }}>Orders</h1>
          <p style={{ fontSize: "13px", color: "#94a3b8" }}>{orders.length} total · click any order to expand details</p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))", gap: "12px", marginBottom: "24px" }}>
          {STATS.map(({ label, value, icon: Icon, color, delta }: { label: string; value: string | number; icon: React.ElementType; color: string; delta?: string }) => (
            <div key={label} style={{ backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px 18px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "10px" }}>
                <p style={{ fontSize: "10px", fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</p>
                <div style={{ width: "28px", height: "28px", borderRadius: "7px", backgroundColor: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon style={{ width: 13, height: 13, color }} />
                </div>
              </div>
              <p style={{ fontSize: "24px", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.03em" }}>{value}</p>
              {delta && <p style={{ fontSize: "11px", color: "#22c55e", marginTop: "6px", fontWeight: 500, display: "flex", alignItems: "center", gap: "3px" }}><ArrowUpRight style={{ width: 10, height: 10 }} />{delta}</p>}
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}>
          <div style={{ position: "relative", flex: 1, minWidth: "220px" }}>
            <Search style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", width: 13, height: 13, color: "#cbd5e1" }} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, phone, address, token…" style={{ width: "100%", padding: "8px 12px 8px 32px", backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "13px", color: "#0f172a", outline: "none", boxSizing: "border-box", fontFamily: FONT }} />
          </div>
          <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
            {["All", ...STATUSES].map((s) => (
              <button key={s} onClick={() => setFilterStatus(s)} style={{ padding: "7px 12px", borderRadius: "7px", fontFamily: FONT, border: `1px solid ${filterStatus === s ? "#6366f1" : "#e2e8f0"}`, cursor: "pointer", fontSize: "12px", fontWeight: 500, backgroundColor: filterStatus === s ? "#eef2ff" : "#fff", color: filterStatus === s ? "#4f46e5" : "#64748b", transition: "all 0.12s" }}>
                {s}{s !== "All" && <span style={{ marginLeft: "5px", fontSize: "10px", opacity: 0.6 }}>{orders.filter((o) => o.status === s).length}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Orders */}
        {filtered.length === 0 ? (
          <div style={{ backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "60px", textAlign: "center", color: "#cbd5e1", fontSize: "14px" }}>
            {search || filterStatus !== "All" ? "No orders match your filters." : "No orders yet."}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {filtered.map((order) => (
              <OrderCard key={order.id} order={order} updating={updating} onUpdateStatus={updateStatus} password={password} backendUrl={backendUrl} />
            ))}
          </div>
        )}

        {filtered.length > 0 && (
          <p style={{ fontSize: "11px", color: "#cbd5e1", marginTop: "12px", textAlign: "right", fontFamily: FONT }}>
            {filtered.length} of {orders.length} orders
          </p>
        )}
      </main>
    </div>
  )
}
