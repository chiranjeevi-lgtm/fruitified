import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Salad, Droplets, Layers } from "lucide-react"

const categories = [
  { icon: Salad,    label: "Fruit Bowls",  sub: "Handcrafted daily"     },
  { icon: Droplets, label: "Fresh Juices", sub: "Cold-pressed goodness"  },
  { icon: Layers,   label: "Combo Meals",  sub: "Best value picks"       },
]

export default function MenuBanner() {
  return (
    <section style={{ backgroundColor: "#fff", borderTop: "1px solid #e0d8c8" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10" style={{ paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="grid items-center gap-10 lg:grid-cols-[55%_45%]">

          {/* Left — content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <span style={{ color: "#4a7c2f", fontSize: "14px" }}>❧</span>
                <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#4a7c2f" }}>
                  Explore Our Menu
                </p>
                <span style={{ color: "#4a7c2f", fontSize: "14px" }}>❧</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.5rem,2.8vw,2.2rem)", fontWeight: 900, lineHeight: 1.15, color: "#1e3a0f", marginBottom: "12px" }}>
                Fresh. Handcrafted.<br />
                <span style={{ color: "#b5451b" }}>Made to Order.</span>
              </h2>
              <p style={{ fontSize: "13px", lineHeight: 1.75, color: "#6b7280", maxWidth: "380px" }}>
                Every bowl, juice and combo is made fresh daily with 100% natural ingredients — no preservatives, no shortcuts.
              </p>
            </div>

            {/* Category rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {categories.map((c, i) => (
                <div key={c.label} style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  backgroundColor: i === 0 ? "#1e3a0f" : "#faf5eb",
                  border: `1px solid ${i === 0 ? "#1e3a0f" : "#e0d8c8"}`,
                  borderRadius: "12px",
                  padding: "12px 16px",
                }}>
                  <div style={{
                    width: "34px", height: "34px", borderRadius: "8px",
                    backgroundColor: i === 0 ? "rgba(255,255,255,0.12)" : "#f3ede0",
                    border: `1px solid ${i === 0 ? "rgba(255,255,255,0.15)" : "#e0d8c8"}`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <c.icon style={{ width: 15, height: 15, color: i === 0 ? "#fff" : "#1e3a0f" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "12px", fontWeight: 700, color: i === 0 ? "#fff" : "#1e3a0f", lineHeight: 1.2 }}>{c.label}</p>
                    <p style={{ fontSize: "10px", color: i === 0 ? "rgba(255,255,255,0.5)" : "#6b7280", marginTop: "1px" }}>{c.sub}</p>
                  </div>
                  <ArrowRight style={{ width: 13, height: 13, color: i === 0 ? "#b5451b" : "#9ca3af", flexShrink: 0 }} />
                </div>
              ))}
            </div>

            <Link href="/menu" style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              backgroundColor: "#b5451b", color: "#fff",
              fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em",
              padding: "11px 22px", borderRadius: "100px",
              textDecoration: "none", width: "fit-content",
            }}>
              View Full Menu <ArrowRight style={{ width: 13, height: 13 }} />
            </Link>
          </div>

          {/* Right — single clean image */}
          <div style={{
            borderRadius: "16px", overflow: "hidden",
            border: "1px solid #e0d8c8",
            height: "260px", position: "relative",
            boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
          }}>
            <Image
              src="/images/menu-bowl-1.jpg"
              alt="Fresh fruit bowl"
              fill
              className="object-cover"
              sizes="45vw"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
