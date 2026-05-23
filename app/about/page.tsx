import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Leaf, Droplets, MapPin, Thermometer, ShieldCheck, ArrowRight, Star, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "About Us | FRUITIFIED by Kamala",
  description: "From trusted farms to healthy families. Learn about Fruitified by Kamala's quality promise.",
}

const G = {
  cream:     "#faf5eb",
  creamWarm: "#f3ede0",
  creamDeep: "#e8dcc8",
  white:     "#ffffff",
  dark:      "#1e3a0f",
  green:     "#4a7c2f",
  terra:     "#b5451b",
  terraDark: "#8B2E12",
  border:    "#e0d8c8",
  muted:     "#6b7280",
}

const HH: React.CSSProperties = {
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: "0.04em",
}

const features = [
  { icon: Leaf,         title: "Carefully Chosen",           desc: "Handpicked from the best farms for superior taste & quality."        },
  { icon: Droplets,     title: "Ozone-Washed Hygiene",       desc: "Advanced ozone washing for 99.9% germ-free fruits."                  },
  { icon: MapPin,       title: "Farm to Home Traceability",  desc: "Complete visibility from farm to your doorstep."                     },
  { icon: Thermometer,  title: "Ripening Excellence",        desc: "Expert ripening for perfect taste, every time."                      },
  { icon: ShieldCheck,  title: "Trusted Quality",            desc: "Every fruit meets our highest quality standards."                    },
]

const steps = [
  { label: "Carefully Selected Farms",      image: "/images/about/carefully-picked-from-farms.jpeg"      },
  { label: "Handpicked with Care",           image: "/images/about/handpicked-with-care.jpeg"              },
  { label: "Ozone-Washed for Purity",        image: "/images/about/ozone-washed.jpeg"                     },
  { label: "Quality Checked & Graded",       image: "/images/about/quality-check-and-graded.jpeg"         },
  { label: "Freshly Delivered to Your Home", image: "/images/about/freshyly-delivered-to-you-home.jpeg"   },
  { label: "Healthy Families, Happy Lives",  image: "/images/about/healthy-family.jpeg"                   },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: G.cream }}>

        {/* ══ HERO ══ */}
        <section style={{ backgroundColor: G.cream, paddingTop: "130px", paddingBottom: "72px" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid items-center gap-14 lg:grid-cols-2">

              {/* Left */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
                  <Leaf style={{ width: 14, height: 14, color: G.green }} />
                  <span style={{ ...HH, fontSize: "10px", color: G.green, letterSpacing: "0.2em" }}>
                    Our Story
                  </span>
                </div>

                <h1 style={{ lineHeight: 1.05, marginBottom: "6px" }}>
                  <span style={{ ...HH, display: "block", fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", color: G.dark }}>Real Farms.</span>
                  <span style={{ ...HH, display: "block", fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", color: G.dark }}>Real Freshness.</span>
                  <span style={{ ...HH, display: "block", fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", color: G.terra }}>Real Fruitified.</span>
                </h1>

                <svg viewBox="0 0 220 16" style={{ width: "180px", margin: "14px 0 20px" }} aria-hidden="true">
                  <path d="M0 12 Q27 2 55 12 Q82 22 110 12 Q137 2 165 12 Q192 22 220 12"
                    stroke={G.terra} strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>

                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  backgroundColor: G.dark, borderRadius: "8px",
                  padding: "10px 20px", marginBottom: "22px",
                }}>
                  <span style={{ ...HH, fontSize: "11px", color: "#fff", letterSpacing: "0.12em" }}>
                    From Trusted Farms to Healthy Families
                  </span>
                </div>

                <p style={{ fontSize: "15px", fontWeight: 700, color: G.dark, marginBottom: "10px", lineHeight: 1.4 }}>
                  Carefully Chosen. Freshly Delivered.<br />Premium Fruits Without Compromise.
                </p>
                <p style={{ fontSize: "14px", lineHeight: 1.85, color: G.muted, maxWidth: "440px", marginBottom: "28px" }}>
                  We bring you nature's finest – handpicked from trusted farms and delivered with
                  care, so your family enjoys only the best.
                </p>

                {/* 24H Guarantee pill */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  border: `2px solid ${G.dark}`, borderRadius: "100px",
                  padding: "10px 22px",
                }}>
                  <ShieldCheck style={{ width: 18, height: 18, color: G.dark }} />
                  <span style={{ ...HH, fontSize: "11px", color: G.dark, letterSpacing: "0.1em" }}>
                    24-Hour Replacement Guarantee
                  </span>
                </div>
              </div>

              {/* Right */}
              <div style={{ position: "relative" }}>
                <div style={{ borderRadius: "24px", overflow: "hidden", border: `1px solid ${G.border}`, boxShadow: "0 12px 48px rgba(30,58,15,0.1)" }}>
                  <Image
                    src="/images/home-fruit-bowl.jpeg"
                    alt="Premium fresh fruits by Fruitified"
                    width={800} height={700}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    sizes="50vw"
                    priority
                  />
                </div>
                {/* Floating badge */}
                <div style={{
                  position: "absolute", bottom: "20px", left: "-16px",
                  backgroundColor: G.dark, borderRadius: "14px",
                  padding: "14px 20px", boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                }}>
                  <p style={{ ...HH, fontSize: "10px", color: "rgba(255,255,255,0.6)", marginBottom: "2px" }}>Est. Since</p>
                  <p style={{ ...HH, fontSize: "22px", color: "#fff", lineHeight: 1 }}>2020</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══ 5 FEATURES ROW ══ */}
        <section style={{ backgroundColor: G.dark, padding: "56px 0" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-5">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} style={{
                  textAlign: "center",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: "14px",
                  paddingRight: i < features.length - 1 ? "0" : "0",
                }}>
                  <div style={{
                    width: "64px", height: "64px", borderRadius: "50%",
                    border: "1.5px solid rgba(255,255,255,0.25)",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon style={{ width: 26, height: 26, color: "rgba(255,255,255,0.85)" }} />
                  </div>
                  <p style={{ ...HH, fontSize: "10px", color: "#fff", lineHeight: 1.4, letterSpacing: "0.1em" }}>{title}</p>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CORE PROMISE + FRUIT BOX + 24H GUARANTEE ══ */}
        <section style={{ backgroundColor: G.creamWarm, padding: "80px 0" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span style={{ ...HH, fontSize: "10px", color: G.terra, letterSpacing: "0.2em" }}>✦ Our Commitments ✦</span>
              <h2 style={{ ...HH, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: G.dark, marginTop: "10px" }}>
                Quality You Can Trust
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3" style={{ alignItems: "start" }}>

              {/* Left — Core Quality Promise */}
              <div style={{
                backgroundColor: G.dark, borderRadius: "20px",
                padding: "32px 28px",
                display: "flex", flexDirection: "column", gap: "18px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}>
                <div style={{
                  display: "inline-flex",
                  backgroundColor: G.terra, borderRadius: "8px",
                  padding: "8px 14px", width: "fit-content",
                }}>
                  <span style={{ ...HH, fontSize: "10px", color: "#fff", letterSpacing: "0.1em" }}>
                    Our Core Quality Promise
                  </span>
                </div>
                <p style={{ fontSize: "13px", lineHeight: 1.8, color: "rgba(255,255,255,0.7)" }}>
                  Premium fruits with guaranteed freshness, ozone-washed hygiene, traceability, and trusted quality.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "72px", height: "72px", borderRadius: "50%", flexShrink: 0,
                    border: `3px solid ${G.terra}`,
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    textAlign: "center",
                  }}>
                    <Star style={{ width: 12, height: 12, color: G.terra, marginBottom: "3px" }} />
                    <p style={{ ...HH, fontSize: "7px", color: "#fff", lineHeight: 1.4 }}>Premium<br />Quality<br />Guaranteed</p>
                  </div>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                    Every fruit meets our highest standards before reaching you.
                  </p>
                </div>
              </div>

              {/* Center — image, full height */}
              <div style={{ borderRadius: "20px", overflow: "hidden", border: `1px solid ${G.border}`, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", lineHeight: 0 }}>
                <Image
                  src="/images/about/about-middle-image.jpeg"
                  alt="Fruitified premium fruit box"
                  width={600} height={600}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  sizes="33vw"
                />
              </div>

              {/* Right — 24H Guarantee */}
              <div style={{
                backgroundColor: G.white, borderRadius: "20px",
                border: `1px solid ${G.border}`,
                padding: "32px 28px",
                display: "flex", flexDirection: "column", gap: "18px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}>
                <div style={{
                  display: "inline-flex",
                  backgroundColor: G.terra, borderRadius: "8px",
                  padding: "8px 14px", width: "fit-content",
                }}>
                  <span style={{ ...HH, fontSize: "10px", color: "#fff", letterSpacing: "0.1em" }}>
                    24-Hour Replacement Guarantee
                  </span>
                </div>
                <p style={{ fontSize: "13px", lineHeight: 1.8, color: G.muted }}>
                  If your fruits are not fresh, we will replace them immediately. No questions asked.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "72px", height: "72px", borderRadius: "50%", flexShrink: 0,
                    border: `3px solid ${G.dark}`, backgroundColor: G.cream,
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    textAlign: "center",
                  }}>
                    <p style={{ ...HH, fontSize: "20px", color: G.dark, lineHeight: 1 }}>24</p>
                    <p style={{ ...HH, fontSize: "6px", color: G.dark, lineHeight: 1.4 }}>Hours<br />Guarantee</p>
                  </div>
                  <p style={{ fontSize: "11px", color: G.muted, lineHeight: 1.6 }}>
                    Fresh guarantee on every order, every time.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══ THE FRUITIFIED DIFFERENCE ══ */}
        <section style={{ backgroundColor: G.white, padding: "80px 0", borderTop: `1px solid ${G.border}` }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div style={{ textAlign: "center", marginBottom: "52px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                backgroundColor: G.dark, borderRadius: "100px",
                padding: "10px 28px",
              }}>
                <span style={{ ...HH, fontSize: "12px", color: "#fff", letterSpacing: "0.14em" }}>
                  The Fruitified Difference
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
              {steps.map((step, i) => (
                <div key={step.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", textAlign: "center", position: "relative" }}>
                  {/* Circular image */}
                  <div style={{
                    width: "160px", height: "160px", borderRadius: "50%",
                    overflow: "hidden",
                    border: `3px solid ${G.border}`,
                    boxShadow: "0 6px 20px rgba(0,0,0,0.10)",
                    flexShrink: 0,
                    position: "relative",
                  }}>
                    <Image
                      src={step.image} alt={step.label}
                      fill className="object-cover"
                      sizes="160px"
                    />
                  </div>
                  {/* Step number */}
                  <div style={{
                    position: "absolute", top: "-4px", right: "calc(50% - 88px)",
                    width: "24px", height: "24px", borderRadius: "50%",
                    backgroundColor: G.terra, color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "10px", fontWeight: 800,
                  }}>
                    {i + 1}
                  </div>
                  {/* Arrow */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex" style={{
                      position: "absolute", right: "-18px", top: "60px",
                    }}>
                      <ArrowRight style={{ width: 14, height: 14, color: G.terra }} />
                    </div>
                  )}
                  <p style={{ fontSize: "11px", fontWeight: 700, color: G.dark, lineHeight: 1.5 }}>{step.label}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ══ BRAND MISSION BANNER ══ */}
        <section style={{ backgroundColor: G.dark, padding: "64px 0" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid items-center gap-10 lg:grid-cols-[200px_1fr_200px]">

              {/* Left */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", textAlign: "center" }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "50%",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Leaf style={{ width: 22, height: 22, color: "rgba(255,255,255,0.85)" }} />
                </div>
                <span style={{ ...HH, fontSize: "11px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.12em", lineHeight: 1.6 }}>
                  Our Brand<br />Mission
                </span>
              </div>

              {/* Divider */}
              <div style={{ borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: "40px", borderRight: "1px solid rgba(255,255,255,0.1)", paddingRight: "40px" }}>
                <p style={{ ...HH, fontSize: "10px", color: G.terra, letterSpacing: "0.18em", marginBottom: "14px" }}>
                  ✦ From the Best Farms to the Best Homes ✦
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.85, color: "rgba(255,255,255,0.75)" }}>
                  We partner with carefully selected growers to deliver premium fruits with guaranteed
                  freshness, ozone-washed hygiene, traceability, and uncompromised quality for healthy families.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
                  {["Farm Fresh", "Ozone Washed", "Quality Graded", "Timely Delivered"].map((tag) => (
                    <div key={tag} style={{
                      display: "flex", alignItems: "center", gap: "6px",
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "100px", padding: "6px 14px",
                    }}>
                      <CheckCircle2 style={{ width: 11, height: 11, color: G.terra }} />
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.75)" }}>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div style={{
                backgroundColor: G.creamWarm, borderRadius: "16px",
                padding: "24px 20px", textAlign: "center",
                border: `1px solid ${G.border}`,
              }}>
                <Star style={{ width: 20, height: 20, color: G.terra, margin: "0 auto 10px" }} />
                <p style={{ ...HH, fontSize: "12px", color: G.dark, lineHeight: 1.6 }}>
                  Because Every<br />Family Deserves<br />The Best.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
