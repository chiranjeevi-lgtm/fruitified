import Header from "@/components/header"
import Footer from "@/components/footer"
import MenuTabs from "@/components/menu-tabs"
import AddonsSection from "@/components/addons-section"

export const metadata = {
  title: "Menu | FRUITIFIED by Kamala",
  description: "Explore our full menu of fresh juices, fruit bowls, smoothies and more.",
}

const BG    = "#faf5eb"
const DARK  = "#1e3a0f"
const PRICE = "#b5451b"

export default function MenuPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: BG, minHeight: "100vh" }}>

        {/* ── HERO ── */}
        <section style={{ backgroundColor: DARK, paddingTop: "140px", paddingBottom: "64px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          {/* Subtle radial glow */}
          <div aria-hidden style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(181,69,27,0.18) 0%, transparent 70%)",
          }} />
          <div className="mx-auto max-w-2xl px-6" style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "100px", padding: "6px 18px", marginBottom: "28px",
            }}>
              <span style={{ fontSize: "10px" }}>🌿</span>
              <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", margin: 0 }}>
                Fresh · Natural · Nourishing
              </p>
            </div>
            <h1 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(3rem, 5.5vw, 4.8rem)",
              fontWeight: 400, color: "#faf5eb",
              lineHeight: 1.05, letterSpacing: "0.04em", marginBottom: "20px",
            }}>
              Our Menu
            </h1>
            <div style={{
              width: "48px", height: "2px", margin: "0 auto 24px",
              background: `linear-gradient(90deg, transparent, ${PRICE}, transparent)`,
            }} />
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.48)", lineHeight: 2, letterSpacing: "0.04em" }}>
              Handcrafted daily with 100% natural ingredients<br />
              No preservatives &nbsp;·&nbsp; No added sugar &nbsp;·&nbsp; Pure goodness
            </p>
          </div>
        </section>

        {/* ── TABBED MENU ── */}
        <div className="mx-auto max-w-7xl px-6 lg:px-12" style={{ paddingTop: "72px", paddingBottom: "72px" }}>
          <MenuTabs />
        </div>

        {/* ── ADD-ONS ── */}
        <AddonsSection />


      </main>
      <Footer />
    </>
  )
}
