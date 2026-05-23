import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const WA = "https://wa.me/918977722037"

const cards = [
  {
    heading: "Fruit Bowls",
    tagline: "Fresh, colorful & nutritious — made to order daily.",
    image: "/images/home-fruit-bowl.jpeg",
    href: WA,
    linkLabel: "Order Now",
    external: true,
  },
  {
    heading: "Fruit Juices",
    tagline: "Cold-pressed goodness with zero preservatives.",
    image: "/gallery/pomegranate.jpeg",
    href: WA,
    linkLabel: "Order Now",
    external: true,
  },
  {
    heading: "Gifts",
    tagline: "Handpicked mangoes, beautifully packed for every occasion.",
    image: "/images/gifts/family gift box.jpeg",
    href: "/gifts",
    linkLabel: "Explore Gifts",
  },
  {
    heading: "B2B",
    tagline: "Bulk mango supply for businesses, delivered reliably.",
    image: "/images/b2b/corporate-b2b.jpeg",
    href: "/b2b",
    linkLabel: "Partner With Us",
  },
]

export default function ShowcaseCards() {
  return (
    <section style={{ backgroundColor: "#faf5eb", borderTop: "1px solid #e0d8c8" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10" style={{ paddingTop: "56px", paddingBottom: "56px" }}>

        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "8px" }}>
            <span style={{ color: "#4a7c2f" }}>❧</span>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#4a7c2f" }}>
              What We Offer
            </p>
            <span style={{ color: "#4a7c2f" }}>❧</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.5rem,2.8vw,2.1rem)", fontWeight: 900, color: "#1e3a0f", lineHeight: 1.1 }}>
            Explore Our <span style={{ color: "#b5451b" }}>Offerings</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.heading} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

              {/* Card */}
              <div className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" style={{
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid #e0d8c8",
                backgroundColor: "#fff",
                boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
              }}>
                {/* Image */}
                <div style={{ position: "relative", overflow: "hidden", lineHeight: 0 }}>
                  <Image
                    src={card.image}
                    alt={card.heading}
                    width={600} height={500}
                    className="transition-transform duration-500 group-hover:scale-105"
                    style={{ width: "100%", height: "auto", display: "block" }}
                    sizes="(max-width:768px) 50vw, 25vw"
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(20,46,8,0.65) 0%, transparent 55%)",
                  }} />
                  <p style={{
                    position: "absolute", bottom: "14px", left: "14px",
                    fontSize: "14px", fontWeight: 900, color: "#fff",
                    textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1,
                  }}>
                    {card.heading}
                  </p>
                </div>

                {/* Card footer */}
                <div style={{ padding: "14px 16px", borderTop: "1px solid #e0d8c8" }}>
                  <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: 1.6, marginBottom: "10px" }}>
                    {card.tagline}
                  </p>
                  {"external" in card && card.external ? (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all duration-200 hover:gap-2 hover:opacity-80"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "5px",
                        fontSize: "10px", fontWeight: 800,
                        textTransform: "uppercase", letterSpacing: "0.1em",
                        color: "#b5451b", textDecoration: "none",
                      }}
                    >
                      {card.linkLabel} <ArrowRight style={{ width: 10, height: 10 }} />
                    </a>
                  ) : (
                    <Link href={card.href} className="transition-all duration-200 hover:gap-2 hover:opacity-80" style={{
                      display: "inline-flex", alignItems: "center", gap: "5px",
                      fontSize: "10px", fontWeight: 800,
                      textTransform: "uppercase", letterSpacing: "0.1em",
                      color: "#b5451b", textDecoration: "none",
                    }}>
                      {card.linkLabel} <ArrowRight style={{ width: 10, height: 10 }} />
                    </Link>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
