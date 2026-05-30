import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Store, Building2, ShoppingCart } from "lucide-react"
// JUICE_HIDDEN: import Citrus from "lucide-react" — restore alongside "Fruit Juice Places" partner

const partners = [
  { icon: Store,        label: "Fruit Shops"       },
  { icon: Building2,    label: "Corporate Offices" },
  { icon: ShoppingCart, label: "Super Markets"     },
  // JUICE_HIDDEN_START — restore next line when juices are re-enabled
  // { icon: Citrus, label: "Fruit Juice Places" },
  // JUICE_HIDDEN_END
]

export default function B2BBanner() {
  return (
    <section style={{ backgroundColor: "#1e3a0f", borderTop: "1px solid #162e0a" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10" style={{ paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="grid items-center gap-10 lg:grid-cols-[58%_42%]">

          {/* Left — content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#b5451b", marginBottom: "10px" }}>
                B2B Solutions
              </p>
              <h2 style={{ fontSize: "clamp(1.5rem,2.8vw,2.2rem)", fontWeight: 900, lineHeight: 1.15, color: "#fff", marginBottom: "12px" }}>
                Your Trusted Mango<br />Partner in Business
              </h2>
              <p style={{ fontSize: "13px", lineHeight: 1.75, color: "rgba(255,255,255,0.55)", maxWidth: "380px" }}>
                Premium mangoes, consistent quality and reliable supply — tailored for businesses that demand the best.
              </p>
            </div>

            {/* 2×2 partner grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {partners.map((p) => (
                <div key={p.label} style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "12px 14px",
                  display: "flex", alignItems: "center", gap: "10px",
                }}>
                  <p.icon style={{ width: 15, height: 15, color: "#b5451b", flexShrink: 0 }} />
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{p.label}</span>
                </div>
              ))}
            </div>

            {/* Stats + CTA */}
            <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: "20px" }}>
                {[["500+", "Clients"], ["15+", "Countries"], ["10+", "Years"]].map(([val, lbl]) => (
                  <div key={lbl}>
                    <p style={{ fontSize: "18px", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{val}</p>
                    <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", marginTop: "2px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{lbl}</p>
                  </div>
                ))}
              </div>
              <Link href="/b2b" style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                backgroundColor: "#b5451b", color: "#fff",
                fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em",
                padding: "11px 22px", borderRadius: "100px",
                textDecoration: "none",
              }}>
                Know More <ArrowRight style={{ width: 13, height: 13 }} />
              </Link>
            </div>
          </div>

          {/* Right — contained image card */}
          <div style={{
            borderRadius: "16px", overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            height: "260px", position: "relative",
          }}>
            <Image
              src="/images/b2b/b2b-hero.jpeg"
              alt="B2B mango supply"
              fill
              className="object-cover"
              style={{ opacity: 0.85 }}
              sizes="42vw"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
