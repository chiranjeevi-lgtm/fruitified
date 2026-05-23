'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const G = {
  cream:     "#faf5eb",
  white:     "#ffffff",
  dark:      "#1e3a0f",
  green:     "#4a7c2f",
  terra:     "#b5451b",
  terraDark: "#8B2E12",
  border:    "#d4c9a8",
  muted:     "#6b7280",
  panel:     "#e2c87e",   // warm golden beige — matches the arch panel in reference
}

const HH: React.CSSProperties = {
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: "0.03em",
}

const boxes = [
  { name: "Gift Pack",               qty: "Premium Mango Gift Pack",   price: "₹499",   tag: "",            image: "/images/gifts/new-gifts/gift-pack-new.jpeg"      },
  { name: "Alphonso Mango Crate",    qty: "Premium Alphonso Mangoes",  price: "₹1,199", tag: "Best Seller", image: "/images/gifts/new-gifts/alphonso crate.jpeg"      },
  { name: "Rasalu Mango Crate",      qty: "Farm Fresh Rasalu Mangoes", price: "₹899",   tag: "Family Pack", image: "/images/gifts/new-gifts/rasalu crate.jpeg"        },
  { name: "Mixed Variety Crate",     qty: "Assorted Premium Mangoes",  price: "₹1,799", tag: "New",         image: "/images/gifts/new-gifts/mixedvareity-crate.jpeg"  },
]


export default function GiftBoxCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 210 : -210, behavior: 'smooth' })
  }

  return (
    <section id="gift-boxes" style={{ backgroundColor: G.cream, padding: "72px 0" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div style={{ display: "flex", gap: "16px", alignItems: "stretch" }}>

          {/* ── Left arch panel ── */}
          <div style={{
            flexShrink: 0,
            width: "210px",
            backgroundColor: G.panel,
            /* Arch / tombstone shape */
            borderTopLeftRadius: "105px",
            borderTopRightRadius: "105px",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
            padding: "40px 24px 32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}>

            {/* Site logo */}
            <div style={{ marginBottom: "16px" }}>
              <Image
                src="/images/fruitified-logo-Photoroom.png"
                alt="Fruitified by Kamala"
                width={140}
                height={140}
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Heading */}
            <p style={{ ...HH, fontSize: "26px", color: G.dark, lineHeight: 1.1, marginBottom: "0" }}>Our Best</p>
            <p style={{ ...HH, fontSize: "26px", color: G.dark, lineHeight: 1.1, marginBottom: "2px" }}>Selling</p>
            <p style={{ ...HH, fontSize: "26px", color: G.terra, lineHeight: 1.1 }}>Gift Boxes</p>

            {/* Decorative divider */}
            <div style={{
              display: "flex", alignItems: "center", gap: "6px",
              margin: "16px 0",
            }}>
              <div style={{ height: "1.5px", width: "28px", backgroundColor: G.terra, borderRadius: "2px" }} />
              <div style={{
                width: "7px", height: "7px",
                backgroundColor: G.terra,
                transform: "rotate(45deg)",
                borderRadius: "1px",
              }} />
              <div style={{ height: "1.5px", width: "28px", backgroundColor: G.terra, borderRadius: "2px" }} />
            </div>

            {/* CTA button */}
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              backgroundColor: G.terraDark, color: "#fff",
              ...HH, fontSize: "10px", letterSpacing: "0.12em",
              padding: "12px 20px", borderRadius: "100px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}>
              View All Boxes <ArrowRight style={{ width: 12, height: 12 }} />
            </a>
          </div>

          {/* ── Carousel area ── */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "10px", minWidth: 0 }}>

            {/* Left arrow */}
            <button
              onClick={() => scroll('left')}
              style={{
                flexShrink: 0, width: "38px", height: "38px", borderRadius: "50%",
                backgroundColor: G.white, border: `1.5px solid ${G.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
              aria-label="Scroll left"
            >
              <ArrowLeft style={{ width: 15, height: 15, color: G.dark }} />
            </button>

            {/* Scrollable cards track */}
            <div
              ref={scrollRef}
              style={{
                flex: 1, display: "flex", gap: "12px",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                paddingBottom: "2px",
              }}
            >
              {boxes.map((box) => (
                <div
                  key={box.name}
                  className="group"
                  style={{
                    flexShrink: 0, width: "300px",
                    scrollSnapAlign: "start",
                    backgroundColor: G.white,
                    borderRadius: "16px",
                    border: `1px solid ${G.border}`,
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  {box.tag && (
                    <div style={{
                      position: "absolute", top: "10px", right: "10px", zIndex: 10,
                      backgroundColor: G.terra, color: "#fff",
                      ...HH, fontSize: "8px", letterSpacing: "0.1em",
                      padding: "4px 10px", borderRadius: "100px",
                    }}>
                      {box.tag}
                    </div>
                  )}

                  {/* Image — full width, full image visible */}
                  <div style={{ width: "100%", lineHeight: 0 }}>
                    <Image
                      src={box.image} alt={box.name}
                      width={600} height={600}
                      style={{ width: "100%", height: "auto", display: "block" }}
                      sizes="300px"
                    />
                  </div>

                  {/* Card body */}
                  <div style={{ padding: "14px 13px 16px" }}>
                    <p style={{ ...HH, fontSize: "11px", color: G.dark, marginBottom: "3px", lineHeight: 1.25 }}>
                      {box.name}
                    </p>
                    <p style={{ fontSize: "10px", color: G.muted, marginBottom: "8px" }}>{box.qty}</p>
                    <p style={{ ...HH, fontSize: "16px", color: G.terra, marginBottom: "0" }}>{box.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scroll('right')}
              style={{
                flexShrink: 0, width: "38px", height: "38px", borderRadius: "50%",
                backgroundColor: G.white, border: `1.5px solid ${G.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
              aria-label="Scroll right"
            >
              <ArrowRight style={{ width: 15, height: 15, color: G.dark }} />
            </button>

          </div>
        </div>
      </div>

      <style>{`div::-webkit-scrollbar{display:none}`}</style>
    </section>
  )
}
