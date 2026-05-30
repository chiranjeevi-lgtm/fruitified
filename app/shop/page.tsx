import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FruitsGrid from "@/components/fruits-grid"
import { ArrowLeft, Package } from "lucide-react"

export const metadata = {
  title: "Shop Fresh Fruits | FRUITIFIED by Kamala",
  description: "Buy farm-fresh seasonal fruits — mangoes, guava, blueberry, custard apple and more. Add to cart and order via WhatsApp.",
}

const PRICE = "#b5451b"
const BG    = "#faf5eb"

export default function ShopPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: BG, minHeight: "100vh" }}>

        {/* ── Hero ── */}
        <section style={{
          backgroundColor: BG, paddingTop: "140px", paddingBottom: "64px",
          textAlign: "center", position: "relative", overflow: "hidden",
          borderBottom: "1px solid #e0d8c8",
        }}>
          {/* Wider container so track button has room on the right */}
          <div className="mx-auto max-w-6xl px-6" style={{ position: "relative" }}>

            {/* Centered content */}
            <div className="mx-auto max-w-2xl" style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#fff", border: "1px solid #e0d8c8",
                borderRadius: "100px", padding: "6px 18px", marginBottom: "28px",
                boxShadow: "0 2px 8px rgba(30,58,15,0.06)",
              }}>
                <span style={{ fontSize: "10px" }}>🛒</span>
                <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#6b7280", margin: 0 }}>
                  Seasonal · Farm Fresh · Direct to Door
                </p>
              </div>
              <h1 style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(2.8rem, 5vw, 4.4rem)",
                fontWeight: 400, color: "#1e3a0f",
                lineHeight: 1.08, letterSpacing: "0.03em", marginBottom: "20px",
              }}>
                Shop Fresh Fruits
              </h1>
              <div style={{
                width: "48px", height: "2px", margin: "0 auto 24px",
                background: `linear-gradient(90deg, transparent, ${PRICE}, transparent)`,
              }} />
              <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 2, letterSpacing: "0.03em", marginBottom: "28px" }}>
                Add fruits to your basket and place your order via WhatsApp.<br />
                We confirm availability and pricing on the same day.
              </p>
              <Link
                href="/fruits"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  color: "#9ca3af",
                  fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em",
                  textDecoration: "none",
                }}
              >
                <ArrowLeft style={{ width: 11, height: 11 }} /> About our fruit sales
              </Link>
            </div>

            {/* Track Order — right side, desktop only */}
            <div className="hidden lg:flex" style={{
              position: "absolute", right: "24px", top: "50%", transform: "translateY(-50%)",
              flexDirection: "column", alignItems: "center", gap: "6px",
            }}>
              {/* Annotation */}
              <p style={{
                fontSize: "12px", color: "#9ca3af", fontStyle: "italic",
                fontFamily: "Georgia, 'Times New Roman', serif",
                letterSpacing: "0.02em", margin: 0,
              }}>
                Already ordered?
              </p>
              <span style={{ fontSize: "18px", lineHeight: 1 }}>↓</span>
              <Link
                href="/track"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  backgroundColor: "#1e3a0f", color: "#fff",
                  fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em",
                  padding: "12px 22px", borderRadius: "100px", textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(30,58,15,0.25)",
                  whiteSpace: "nowrap",
                }}
              >
                <Package style={{ width: 13, height: 13 }} />
                Track Your Order
              </Link>
            </div>

          </div>
        </section>

        {/* ── Fruit Grid ── */}
        <div className="mx-auto max-w-7xl px-6 lg:px-10" style={{ paddingTop: "56px", paddingBottom: "80px" }}>
          <FruitsGrid />
        </div>

      </main>
      <Footer />
    </>
  )
}
