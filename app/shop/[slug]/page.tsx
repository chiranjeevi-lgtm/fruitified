import type { ReactNode } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductActions from "./product-actions"
import ImageSlider from "./image-slider"
import { fruits } from "@/lib/fruits-data"
import { getFruitExtended } from "@/lib/fruits-extended"
import { Check, Truck, MapPin, ChevronRight } from "lucide-react"

export function generateStaticParams() {
  return fruits.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const fruit = fruits.find((f) => f.slug === slug)
  if (!fruit) return {}
  return {
    title: `${fruit.name} | FRUITIFIED by Kamala`,
    description: fruit.shortDesc,
  }
}

const DARK  = "#1e3a0f"
const PRICE = "#b5451b"
const GREEN = "#4a7c2f"
const BG    = "#faf5eb"

const DOT_COLORS = [GREEN, PRICE, "#c07a1a"]

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const fruit = fruits.find((f) => f.slug === slug)
  if (!fruit) notFound()
  const ext = getFruitExtended(slug)

  return (
    <>
      <Header />
      <main style={{ backgroundColor: BG, minHeight: "100vh" }}>

        {/* ── Breadcrumb ── */}
        <div className="mx-auto max-w-6xl px-6 lg:px-10" style={{ paddingTop: "120px", paddingBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#9ca3af", fontWeight: 600 }}>
            <Link href="/shop" style={{ color: "#9ca3af", textDecoration: "none", transition: "color 0.15s" }}>Shop</Link>
            <ChevronRight style={{ width: 11, height: 11 }} />
            <Link href="/shop" style={{ color: "#9ca3af", textDecoration: "none", transition: "color 0.15s" }}>Fruits</Link>
            <ChevronRight style={{ width: 11, height: 11 }} />
            <span style={{ color: DARK }}>{fruit.name}</span>
          </div>
        </div>

        {/* ── Hero: image left + info right ── */}
        <section>
          <div className="mx-auto max-w-6xl px-6 lg:px-10" style={{ paddingTop: "28px", paddingBottom: "72px" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "60px", alignItems: "flex-start" }}>

              {/* Left — image slider + annotation chips */}
              <div>
                <ImageSlider
                  images={fruit.images}
                  alt={fruit.name}
                  placeholderBg={fruit.placeholderBg}
                  badge={fruit.badge}
                  badgeColor={fruit.badgeColor}
                  emoji={fruit.emoji}
                />

                {/* Annotation quality callouts */}
                {ext && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "18px" }}>
                    {ext.annotations.map((ann, i) => (
                      <div key={i} style={{
                        background: "#fff",
                        border: "1.5px solid #e8e0d0",
                        borderRadius: "100px",
                        padding: "8px 18px",
                        boxShadow: "0 3px 14px rgba(30,58,15,0.08)",
                        display: "flex", alignItems: "center", gap: "8px",
                      }}>
                        <div style={{
                          width: "8px", height: "8px", borderRadius: "50%",
                          backgroundColor: DOT_COLORS[i], flexShrink: 0,
                        }} />
                        <span style={{ fontSize: "12px", fontWeight: 700, color: DARK }}>{ann}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right — product info */}
              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>

                {/* Origin */}
                {ext && (
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <MapPin style={{ width: 12, height: 12, color: PRICE }} />
                    <span style={{ fontSize: "11px", fontWeight: 700, color: PRICE, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {ext.origin}
                    </span>
                  </div>
                )}

                {/* Name + tagline */}
                <div>
                  <h1 style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                    fontWeight: 400, color: DARK, lineHeight: 1.08, margin: "0 0 8px",
                  }}>
                    {fruit.name}
                  </h1>
                  <p style={{ fontSize: "13px", color: "#9ca3af", fontWeight: 600, margin: 0 }}>
                    {fruit.tagline}
                  </p>
                </div>

                {/* Season + price */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    background: "rgba(30,58,15,0.07)", borderRadius: "100px", padding: "6px 14px",
                  }}>
                    <span style={{ fontSize: "12px" }}>🗓</span>
                    <span style={{ fontSize: "10px", fontWeight: 700, color: DARK, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                      {fruit.seasonal}
                    </span>
                  </div>
                  <span style={{ fontSize: "28px", fontWeight: 900, color: DARK }}>{fruit.price}</span>
                </div>

                {/* Short description */}
                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.85, margin: 0 }}>
                  {fruit.shortDesc}
                </p>

                {/* Add to cart + WhatsApp */}
                <ProductActions fruit={fruit} />

                {/* Delivery note */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  paddingTop: "18px", borderTop: "1px solid #e8e0d0",
                }}>
                  <Truck style={{ width: 14, height: 14, color: GREEN }} />
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "#6b7280" }}>
                    Harvested, packed &amp; dispatched within 24 hours of your order.
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Extended content sections ── */}
        {ext && (
          <div className="mx-auto max-w-6xl px-6 lg:px-10" style={{ paddingBottom: "100px" }}>
            <div style={{ height: "1px", backgroundColor: "#e8e0d0", marginBottom: "72px" }} />

            <Section title="Description">
              <p style={{ fontSize: "15px", color: "#444", lineHeight: 2.1, maxWidth: "800px", margin: 0 }}>
                {ext.description}
              </p>
            </Section>

            <Section title="How We Source the Best For You">
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "14px", maxWidth: "880px",
              }}>
                {ext.howWeSource.map((point, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{
                      width: "22px", height: "22px", borderRadius: "50%", flexShrink: 0,
                      backgroundColor: "rgba(74,124,47,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginTop: "2px",
                    }}>
                      <Check style={{ width: 12, height: 12, color: GREEN }} />
                    </div>
                    <span style={{ fontSize: "14px", color: "#444", lineHeight: 1.65 }}>{point}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Shelf Life & Storage">
              <p style={{ fontSize: "15px", color: "#444", lineHeight: 2.1, maxWidth: "800px", margin: 0 }}>
                {ext.shelfLife}
              </p>
            </Section>

            <Section title="Nutritional Value (per 100 g)">
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                gap: "12px", maxWidth: "760px",
              }}>
                {ext.nutrition.map((n) => (
                  <div key={n.label} style={{
                    background: "#fff",
                    border: "1px solid #e8e0d0",
                    borderRadius: "16px",
                    padding: "18px 20px",
                    boxShadow: "0 2px 10px rgba(30,58,15,0.05)",
                  }}>
                    <p style={{
                      fontSize: "10px", fontWeight: 700, color: "#9ca3af",
                      textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 5px",
                    }}>
                      {n.label}
                    </p>
                    <p style={{ fontSize: "22px", fontWeight: 900, color: DARK, margin: 0 }}>
                      {n.value}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Health Benefits">
              <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "20px", maxWidth: "880px" }}>
                {ext.healthBenefits.map((b) => (
                  <div key={b.title} style={{
                    background: "#fff",
                    border: "1px solid #e8e0d0",
                    borderRadius: "20px",
                    padding: "26px 24px",
                    boxShadow: "0 2px 14px rgba(30,58,15,0.06)",
                  }}>
                    <div style={{
                      width: "38px", height: "38px", borderRadius: "50%",
                      backgroundColor: "rgba(74,124,47,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "16px",
                    }}>
                      <span style={{ fontSize: "17px" }}>🌿</span>
                    </div>
                    <p style={{ fontSize: "14px", fontWeight: 800, color: DARK, margin: "0 0 8px" }}>{b.title}</p>
                    <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.75, margin: 0 }}>{b.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="How to Enjoy" last>
              <p style={{ fontSize: "15px", color: "#444", lineHeight: 2.1, maxWidth: "800px", margin: 0 }}>
                {ext.howToEnjoy}
              </p>
            </Section>
          </div>
        )}

      </main>
      <Footer />
    </>
  )
}

function Section({
  title,
  children,
  last = false,
}: {
  title: string
  children: ReactNode
  last?: boolean
}) {
  return (
    <div style={{ marginBottom: last ? 0 : "64px" }}>
      <h2 style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: "clamp(1.35rem, 2vw, 1.75rem)",
        fontWeight: 400, color: DARK,
        margin: "0 0 28px", paddingBottom: "16px",
        borderBottom: "1px solid #e8e0d0",
      }}>
        {title}
      </h2>
      {children}
    </div>
  )
}
