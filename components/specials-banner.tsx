import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Flame, Heart } from "lucide-react"

const specials = [
  {
    tag: "Seasonal Pick",
    tagIcon: Star,
    name: "Classic Fruit Bowl",
    desc: "A vibrant medley of seasonal fruits, perfectly cut and served fresh daily.",
    image: "/images/specials/classic-fruit-bowl.jpeg",
    accent: "#b5451b",
  },
  {
    tag: "Refreshing Sip",
    tagIcon: Flame,
    name: "Royal Mango Lassi",
    desc: "Mango-kissed yoghurt lassi — creamy, chilled and irresistibly rich.",
    image: "/images/specials/royal-mango-lassi.jpeg",
    accent: "#1e3a0f",
  },
  {
    tag: "High Protein",
    tagIcon: Heart,
    name: "Banana Protein Shake",
    desc: "High-fiber oats blended with banana & milk. Wholesome and filling.",
    image: "/gallery/Banana-shake.jpeg",
    accent: "#4a7c2f",
  },
]

export default function SpecialsBanner() {
  return (
    <section style={{ backgroundColor: "#faf5eb", borderTop: "1px solid #e0d8c8" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10" style={{ paddingTop: "56px", paddingBottom: "56px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "8px" }}>
            <span style={{ color: "#4a7c2f" }}>✦</span>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#4a7c2f" }}>
              Handcrafted Just For You
            </p>
            <span style={{ color: "#4a7c2f" }}>✦</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.5rem,2.8vw,2.1rem)", fontWeight: 900, color: "#1e3a0f", lineHeight: 1.1 }}>
            Our <span style={{ color: "#b5451b" }}>Specials</span>
          </h2>
        </div>

        {/* 3-card row */}
        <div className="grid gap-5 md:grid-cols-3">
          {specials.map((s) => {
            const TagIcon = s.tagIcon
            return (
              <div key={s.name} style={{
                backgroundColor: "#ede8d8",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #d4c9a8",
                display: "flex", flexDirection: "column",
              }}>
                {/* Image */}
                <div style={{ position: "relative", height: "210px", overflow: "hidden", flexShrink: 0 }}>
                  <Image
                    src={s.image} alt={s.name} fill
                    className="object-cover"
                    sizes="(max-width:768px) 90vw, 33vw"
                  />
                  {/* Tag pill */}
                  <div style={{
                    position: "absolute", top: "12px", left: "12px",
                    backgroundColor: s.accent,
                    borderRadius: "100px",
                    padding: "4px 10px",
                    display: "flex", alignItems: "center", gap: "4px",
                  }}>
                    <TagIcon style={{ width: 10, height: 10, color: "#fff" }} />
                    <span style={{ fontSize: "9px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#fff" }}>
                      {s.tag}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <p style={{ fontSize: "14px", fontWeight: 800, color: "#1e3a0f", lineHeight: 1.2 }}>{s.name}</p>
                  <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: 1.65, flex: 1 }}>{s.desc}</p>
                  <a
                    href="https://wa.me/918977722037"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px",
                      backgroundColor: s.accent, color: "#fff",
                      fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em",
                      padding: "9px 16px", borderRadius: "8px",
                      textDecoration: "none",
                    }}
                  >
                    Order Now <ArrowRight style={{ width: 11, height: 11 }} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <Link href="/menu" style={{
            display: "inline-flex", alignItems: "center", gap: "7px",
            border: "1.5px solid #1e3a0f",
            color: "#1e3a0f",
            fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em",
            padding: "11px 28px", borderRadius: "100px",
            textDecoration: "none",
          }}>
            See All Items <ArrowRight style={{ width: 13, height: 13 }} />
          </Link>
        </div>

      </div>
    </section>
  )
}
