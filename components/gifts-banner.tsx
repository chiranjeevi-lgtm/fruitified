import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Gift, Heart, MessageCircle, Package } from "lucide-react"

const features = [
  { icon: Gift,          label: "Beautiful Packaging",  sub: "Premium & Elegant"    },
  { icon: Heart,         label: "Perfect for Gifting",  sub: "Personal & Corporate" },
  { icon: MessageCircle, label: "Custom Messages",       sub: "Add a Personal Touch" },
  { icon: Package,       label: "Bulk Gifting",          sub: "Solutions Available"  },
]

export default function GiftsBanner() {
  return (
    <section style={{ backgroundColor: "#f3ede0", borderTop: "1px solid #e0d8c8" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10" style={{ paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="grid items-center gap-10 lg:grid-cols-[45%_55%]">

          {/* Left — image */}
          <div style={{ position: "relative" }}>
            <div style={{
              borderRadius: "16px", overflow: "hidden",
              border: "1px solid #e0d8c8",
              height: "260px", position: "relative",
            }}>
              <Image
                src="/images/gifts/gifts-hero.jpeg"
                alt="Mango gift boxes"
                fill
                className="object-cover"
                sizes="45vw"
              />
            </div>
            {/* Small floating badge */}
            <div style={{
              position: "absolute", bottom: "14px", right: "14px",
              backgroundColor: "#b5451b", borderRadius: "50%",
              width: "72px", height: "72px",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              border: "2px solid #faf5eb",
              textAlign: "center",
            }}>
              <Heart style={{ width: 13, height: 13, color: "#fff", marginBottom: "2px" }} />
              <p style={{ fontSize: "7px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: "#fff", lineHeight: 1.3 }}>
                Handpicked<br />With Love
              </p>
            </div>
          </div>

          {/* Right — content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#b5451b", marginBottom: "10px" }}>
                Gifts that Speak From the Heart
              </p>
              <h2 style={{ fontSize: "clamp(1.5rem,2.8vw,2.2rem)", fontWeight: 900, lineHeight: 1.15, color: "#1e3a0f", marginBottom: "12px" }}>
                Thoughtful Gifts<br />
                <span style={{ color: "#b5451b" }}>for Every Occasion</span>
              </h2>
              <p style={{ fontSize: "13px", lineHeight: 1.75, color: "#6b7280", maxWidth: "380px" }}>
                Handpicked mangoes, beautifully packed with love — perfect for your loved ones, employees and clients.
              </p>
            </div>

            {/* 2×2 feature grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {features.map((f, i) => (
                <div key={f.label} style={{
                  backgroundColor: "#fff",
                  border: "1px solid #e0d8c8",
                  borderRadius: "12px",
                  borderTop: `3px solid ${i % 2 === 0 ? "#1e3a0f" : "#b5451b"}`,
                  padding: "14px 14px",
                  display: "flex", gap: "10px", alignItems: "flex-start",
                }}>
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "8px",
                    backgroundColor: "#f3ede0", border: "1px solid #e0d8c8",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <f.icon style={{ width: 14, height: 14, color: "#1e3a0f" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: 700, color: "#1e3a0f", lineHeight: 1.3 }}>{f.label}</p>
                    <p style={{ fontSize: "10px", color: "#6b7280", marginTop: "2px" }}>{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/gifts" style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              backgroundColor: "#1e3a0f", color: "#fff",
              fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em",
              padding: "11px 22px", borderRadius: "100px",
              textDecoration: "none", width: "fit-content",
            }}>
              Explore Gift Boxes <ArrowRight style={{ width: 13, height: 13 }} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
