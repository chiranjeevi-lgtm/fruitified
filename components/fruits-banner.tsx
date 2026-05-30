import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sprout, Leaf, ShieldCheck, Truck } from "lucide-react"

const DARK  = "#1e3a0f"
const GREEN = "#4a7c2f"
const BG    = "#faf5eb"

const features = [
  { icon: Sprout,      label: "Organically Grown",     sub: "No pesticides, no chemicals"  },
  { icon: Leaf,        label: "Seasonal Only",          sub: "What nature gives, we deliver" },
  { icon: ShieldCheck, label: "No Artificial Ripening", sub: "100% naturally farm-ripened"   },
  { icon: Truck,       label: "24-hr Farm to Door",     sub: "Straight from orchard to you"  },
]

export default function FruitsBanner() {
  return (
    <section style={{ backgroundColor: BG, borderTop: "1px solid #e0d8c8", overflow: "hidden" }}>

      {/* ── Centered editorial heading ── */}
      <div style={{ textAlign: "center", paddingTop: "72px", paddingBottom: "48px" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          marginBottom: "18px",
        }}>
          <div style={{ width: "32px", height: "1px", backgroundColor: GREEN }} />
          <p style={{
            fontSize: "9px", fontWeight: 800, letterSpacing: "0.28em",
            textTransform: "uppercase", color: GREEN, margin: 0,
          }}>
            Farm-Fresh Fruit Sales
          </p>
          <div style={{ width: "32px", height: "1px", backgroundColor: GREEN }} />
        </div>

        <h2 style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
          fontWeight: 400, color: DARK,
          lineHeight: 1.05, letterSpacing: "0.015em",
          marginBottom: "0",
        }}>
          Nature&apos;s Finest,
          <br />
          <span style={{ fontStyle: "italic", color: GREEN }}>Delivered Fresh.</span>
        </h2>
      </div>

      {/* ── 3-column: image | content | image ── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10" style={{ paddingBottom: "72px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr]" style={{ gap: "28px", alignItems: "start" }}>

          {/* Column 1 — tall image */}
          <div style={{
            borderRadius: "24px", overflow: "hidden",
            height: "380px", position: "relative",
            boxShadow: "0 16px 48px rgba(30,58,15,0.14)",
            border: "1px solid #d4c9a8",
          }}>
            <Image
              src="/images/home-images/banganapalli-home.jpeg"
              alt="Banginapalli mangoes"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 28vw"
            />
            {/* Dark gradient + label */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(20,46,10,0.7) 0%, transparent 55%)",
            }} />
            <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
              <p style={{
                fontSize: "16px", fontWeight: 900, color: "#fff",
                textShadow: "0 2px 8px rgba(0,0,0,0.3)", marginBottom: "4px",
              }}>
                Banginapalli Mangoes
              </p>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                Kurnool, Andhra Pradesh
              </p>
            </div>
          </div>

          {/* Column 2 — content */}
          <div style={{
            display: "flex", flexDirection: "column", gap: "0",
            paddingTop: "20px",
          }}>

            {/* Feature list */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {features.map((f, i) => (
                <div key={f.label} style={{
                  display: "flex", alignItems: "flex-start", gap: "14px",
                  padding: "18px 0",
                  borderBottom: i < features.length - 1 ? "1px solid #e0d8c8" : "none",
                }}>
                  <div style={{
                    width: "38px", height: "38px", borderRadius: "10px",
                    backgroundColor: i % 2 === 0 ? DARK : GREEN,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <f.icon style={{ width: 16, height: 16, color: "#fff" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 800, color: DARK, margin: "0 0 2px", lineHeight: 1.3 }}>
                      {f.label}
                    </p>
                    <p style={{ fontSize: "11px", color: "#9ca3af", margin: 0, lineHeight: 1.5 }}>
                      {f.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider + CTA */}
            <div style={{ paddingTop: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/shop" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                backgroundColor: DARK, color: "#fff",
                fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em",
                padding: "14px 28px", borderRadius: "100px",
                textDecoration: "none",
                boxShadow: "0 6px 24px rgba(30,58,15,0.25)",
              }}>
                Shop Fresh Fruits <ArrowRight style={{ width: 13, height: 13 }} />
              </Link>
              <p style={{ fontSize: "10px", color: "#9ca3af", textAlign: "center", fontWeight: 600 }}>
                Mangoes · Guava · Blueberry · Custard Apple & more
              </p>
            </div>
          </div>

          {/* Column 3 — same size image, pushed down */}
          <div style={{
            borderRadius: "24px", overflow: "hidden",
            height: "380px",
            position: "relative",
            boxShadow: "0 16px 48px rgba(30,58,15,0.14)",
            border: "1px solid #d4c9a8",
          }}>
            <Image
              src="/images/home-images/custard-apples-home.jpeg"
              alt="Custard apples"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 28vw"
            />
            {/* Dark gradient + label */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(20,46,10,0.7) 0%, transparent 55%)",
            }} />
            <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
              <p style={{
                fontSize: "16px", fontWeight: 900, color: "#fff",
                textShadow: "0 2px 8px rgba(0,0,0,0.3)", marginBottom: "4px",
              }}>
                Custard Apple
              </p>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                Deccan Belt, India
              </p>
            </div>
            {/* Seasonal badge */}
            <div style={{
              position: "absolute", top: "16px", right: "16px",
              background: "rgba(255,255,255,0.92)",
              borderRadius: "100px", padding: "5px 12px",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(224,216,200,0.5)",
            }}>
              <p style={{ fontSize: "9px", fontWeight: 800, color: DARK, margin: 0, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Seasonal
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
