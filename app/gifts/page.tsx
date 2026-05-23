import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
import FadeIn from "@/components/fade-in"
import GiftBoxCarousel from "@/components/gift-box-carousel"
import {
  ArrowRight, Leaf, Sprout, ShieldCheck, Truck, Gift,
  Star, CheckCircle2, Package, Heart, Sparkles, Award
} from "lucide-react"
import { Barlow, Instrument_Sans } from "next/font/google"

const barlow = Barlow({ subsets: ["latin"], weight: ["700", "800", "900"], display: "swap" })
const instrumentSans = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" })

// ── home-page colour tokens ─────────────────────────────
const G = {
  cream:      "#faf5eb",
  creamWarm:  "#ede8d8",
  creamDeep:  "#d9d0bc",
  white:      "#ffffff",
  dark:       "#1e3a0f",
  green:      "#4a7c2f",
  terra:      "#b5451b",
  terraDark:  "#8B2E12",
  border:     "#d4c9a8",
  greenBdr:   "#b8d484",
  muted:      "#6b7280",
  cardYellow: "#fffbeb",
  cardOrange: "#fff7ed",
  cardGreen:  "#f0fdf4",
  cardRose:   "#fdf2f8",
  cardPurple: "#f5f3ff",
}

const HH = { fontFamily: barlow.style.fontFamily, fontWeight: 900, textTransform: "uppercase" as const, letterSpacing: "0.02em" }
const BODY = { fontFamily: instrumentSans.style.fontFamily, fontWeight: 500 }

// ── data ───────────────────────────────────────────────
const featureBar = [
  { icon: Leaf,       title: "100% Natural",        sub: "No Chemicals"              },
  { icon: Award,      title: "Premium Quality",      sub: "Farm-Graded Banganapalli"  },
  { icon: Gift,       title: "Perfect for Gifting",  sub: "All Occasions"             },
  { icon: Package,    title: "Beautiful Packaging",  sub: "Secure & Elegant"          },
  { icon: Truck,      title: "Free Shipping",        sub: "On orders above ₹999"      },
]

const occasions = [
  { label: "Birthday Gifts",  sub: "Celebrate with sweetness",          image: "/images/Party-Image.jpeg",                    bg: G.cardYellow },
  { label: "Festive Hampers", sub: "Share joy, spread love",            image: "/images/gifts/festive-mango-wrapper.jpeg",    bg: G.cardOrange },
  { label: "Corporate Gifts", sub: "Strengthen bonds, the natural way", image: "/images/gifts/corporate-gifts.jpeg",          bg: G.cardGreen  },
  { label: "Thank You Gifts", sub: "A simple thanks, a lasting smile",  image: "/images/gifts/Thank-you-gifts.jpeg",          bg: G.cardRose   },
]

const processSteps = [
  { num: "1", icon: Gift,     title: "Choose Your Gift",   desc: "Pick from our exclusive gift boxes & hampers"   },
  { num: "2", icon: Package,  title: "We Pack With Care",  desc: "Handpicked mangoes packed with love"            },
  { num: "3", icon: Truck,    title: "Safe Delivery",      desc: "Delivered fresh to your loved ones"             },
  { num: "4", icon: Heart,    title: "Share Happiness",    desc: "Make every occasion truly memorable"            },
]


const whyPoints = [
  "Premium & Handpicked Banganapalli",
  "100% Natural & Chemical Free",
  "Beautiful & Sustainable Packaging",
  "On-time Delivery Across Hyderabad",
  "Perfect for Every Occasion",
]

const whyFeatures = [
  { icon: Sparkles, title: "Exceptional Quality",  desc: "Only the finest Banganapalli make it to your gift." },
  { icon: Leaf,     title: "Sustainable Choice",   desc: "Eco-friendly packs for a better tomorrow."         },
  { icon: Truck,    title: "Delivered With Care",  desc: "Handled with love, delivered with precision."      },
  { icon: Gift,     title: "Gifting Made Easy",    desc: "Thoughtful gifting, simplified for everyone."      },
]

const reviews = [
  { quote: "The mangoes were superb and the packaging was so elegant. Perfect gift!", name: "Priya S.",  city: "Hyderabad"    },
  { quote: "Timely delivery and excellent quality. Highly recommended!", name: "Rahul M.", city: "Secunderabad" },
  { quote: "Gifting made easy with Fruitified. My clients loved it!", name: "Neha K.", city: "Hyderabad"    },
  { quote: "The best mangoes I've ever gifted. Truly premium!", name: "Arjun P.", city: "Hyderabad"    },
]

// ── component ──────────────────────────────────────────
export default function GiftsPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: G.cream, ...BODY }}>

        {/* ══════════════════════════════
            HERO
        ══════════════════════════════ */}
        <section style={{ backgroundColor: G.cream, paddingTop: "130px", paddingBottom: "64px" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* Left */}
              <FadeIn delay={0}>
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-5">
                  <Leaf className="h-3.5 w-3.5" style={{ color: G.green }} />
                  <span style={{ ...HH, color: G.green, fontSize: "10px", letterSpacing: "0.2em" }}>
                    Premium Mangoes. Perfectly Gifted.
                  </span>
                </div>

                {/* Heading */}
                <h1 style={{ lineHeight: 1.05, marginBottom: "20px" }}>
                  <span style={{ ...HH, display: "block", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: G.dark }}>
                    Gift Nature&apos;s
                  </span>
                  <span style={{ ...HH, display: "block", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: G.terra }}>
                    Finest Joy
                  </span>
                </h1>

                {/* Wavy underline */}
                <svg viewBox="0 0 220 16" className="w-44 mb-5" aria-hidden="true">
                  <path d="M0 12 Q27 2 55 12 Q82 22 110 12 Q137 2 165 12 Q192 22 220 12"
                    stroke={G.terra} strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>

                <p style={{ color: G.muted, fontSize: "15px", lineHeight: 1.75, maxWidth: "400px", marginBottom: "28px" }}>
                  Handpicked premium Banganapalli mangoes, beautifully packed to make every occasion extra special.
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-x-5 gap-y-3 mb-8">
                  {[
                    { icon: Leaf,        title: "100% Premium",   sub: "Handpicked"    },
                    { icon: Sprout,      title: "Farm Fresh",     sub: "& Natural"     },
                    { icon: ShieldCheck, title: "Carefully Packed", sub: "& Safe"      },
                    { icon: Truck,       title: "Delivered",      sub: "With Care"     },
                  ].map(({ icon: Icon, title, sub }) => (
                    <div key={title} className="flex items-center gap-2">
                      <div style={{
                        width: "36px", height: "36px", borderRadius: "50%",
                        border: `1px solid ${G.green}44`, backgroundColor: `${G.green}18`,
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        <Icon className="h-4 w-4" style={{ color: G.green }} />
                      </div>
                      <div style={{ lineHeight: 1.3 }}>
                        <p style={{ fontSize: "12px", fontWeight: 700, color: G.dark }}>{title}</p>
                        <p style={{ fontSize: "11px", color: G.muted }}>{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <a href="#gift-boxes" style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    backgroundColor: G.terraDark, color: "#fff",
                    ...HH, fontSize: "12px", letterSpacing: "0.12em",
                    padding: "0 28px", height: "48px", borderRadius: "100px",
                    textDecoration: "none",
                  }}>
                    Explore Gift Boxes <ArrowRight style={{ width: 15, height: 15 }} />
                  </a>
                  <a href="#occasions" style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    backgroundColor: "transparent", color: G.dark,
                    border: `2px solid ${G.dark}`,
                    ...HH, fontSize: "12px", letterSpacing: "0.12em",
                    padding: "0 28px", height: "48px", borderRadius: "100px",
                    textDecoration: "none",
                  }}>
                    Explore Varieties
                  </a>
                </div>
              </FadeIn>

              {/* Right: hero image */}
              <FadeIn delay={160}>
                <div style={{
                  borderRadius: "24px", overflow: "hidden",
                  border: `1px solid ${G.border}`,
                  backgroundColor: G.creamWarm,
                }}>
                  <Image
                    src="/images/gifts/gifts-hero.jpeg"
                    alt="Banganapalli mango gift boxes"
                    width={0} height={0} sizes="50vw"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            FEATURE BAR — dark green (mirrors home trust bar)
        ══════════════════════════════ */}
        <div className="flex flex-col sm:flex-row items-stretch w-full" style={{ backgroundColor: G.dark }}>
          {featureBar.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex flex-1 items-center gap-3 px-5 py-4"
                style={i < featureBar.length - 1 ? { borderRight: "1px solid rgba(255,255,255,0.08)" } : {}}
              >
                <div style={{
                  width: "38px", height: "38px", borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Icon className="h-4 w-4" style={{ color: "rgba(255,255,255,0.8)" }} />
                </div>
                <div style={{ lineHeight: 1.3 }}>
                  <p style={{ fontSize: "12px", fontWeight: 700, color: "#fff" }}>{item.title}</p>
                  <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.55)" }}>{item.sub}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* ══════════════════════════════
            PERFECT FOR EVERY OCCASION
        ══════════════════════════════ */}
        <section id="occasions" style={{ backgroundColor: G.white, padding: "72px 0" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <FadeIn>
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span style={{ color: G.green, fontSize: "18px" }}>✦</span>
                  <h2 style={{ ...HH, color: G.dark, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}>
                    Perfect for Every Occasion
                  </h2>
                  <span style={{ color: G.green, fontSize: "18px" }}>✦</span>
                </div>
              </div>
            </FadeIn>

            {/* 6-col grid: row 1 fills all 6, row 2 two cards at cols 2-3 and 4-5 (centred) */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "20px" }}>
              {occasions.map((occ, i) => {
                const gridColumn = i === 3 ? "3 / span 2" : "span 2"
                return (
                  <div key={occ.label} style={{ gridColumn }}>
                  <FadeIn delay={i * 80}>
                    <div className="group" style={{
                      borderRadius: "18px", overflow: "hidden",
                      border: `1px solid ${G.border}`,
                      backgroundColor: occ.bg,
                      cursor: "pointer",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                      height: "100%",
                    }}>
                      <div style={{ width: "100%", overflow: "hidden", lineHeight: 0 }}>
                        <Image
                          src={occ.image} alt={occ.label}
                          width={600} height={480}
                          sizes="33vw"
                          className="transition-transform duration-500 group-hover:scale-105"
                          style={{ width: "100%", height: "auto", display: "block" }}
                        />
                      </div>
                      <div style={{ padding: "16px 16px 18px" }}>
                        <p style={{ ...HH, fontSize: "12px", color: G.dark, marginBottom: "5px", lineHeight: 1.2 }}>{occ.label}</p>
                        <p style={{ fontSize: "11px", color: G.muted, lineHeight: 1.4, marginBottom: "12px" }}>{occ.sub}</p>
                      </div>
                    </div>
                  </FadeIn>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            THOUGHTFUL GIFTING, MADE SIMPLE
        ══════════════════════════════ */}
        <section style={{ backgroundColor: G.creamWarm, padding: "72px 0" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <FadeIn>
              <div className="flex items-center justify-center gap-3 mb-12" style={{ textAlign: "center" }}>
                <span style={{ color: G.green, fontSize: "18px" }}>✦</span>
                <h2 style={{ ...HH, color: G.dark, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}>
                  Thoughtful Gifting, Made Simple
                </h2>
                <span style={{ color: G.green, fontSize: "18px" }}>✦</span>
              </div>
            </FadeIn>

            <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_280px]" style={{ alignItems: "start" }}>
              {processSteps.map((step, i) => (
                <>
                  <FadeIn key={step.num} delay={i * 100}>
                    <div style={{ textAlign: "center" }}>
                      {/* Circle */}
                      <div style={{
                        width: "72px", height: "72px", borderRadius: "50%",
                        border: `2px solid ${G.green}`,
                        backgroundColor: G.white,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        margin: "0 auto 14px",
                        position: "relative",
                      }}>
                        <span style={{
                          position: "absolute", top: "-8px", right: "-4px",
                          width: "22px", height: "22px", borderRadius: "50%",
                          backgroundColor: G.terra, color: "#fff",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "10px", fontWeight: 800,
                        }}>{step.num}</span>
                        <step.icon className="h-7 w-7" style={{ color: G.dark }} />
                      </div>
                      <p style={{ ...HH, fontSize: "11px", color: G.dark, marginBottom: "6px", lineHeight: 1.3 }}>{step.title}</p>
                      <p style={{ fontSize: "11px", color: G.muted, lineHeight: 1.5, maxWidth: "120px", margin: "0 auto" }}>{step.desc}</p>
                    </div>
                  </FadeIn>
                  {i < processSteps.length - 1 && (
                    <div key={`arrow-${i}`} className="hidden lg:flex items-center justify-center pt-6">
                      <ArrowRight style={{ width: 20, height: 20, color: G.green }} />
                    </div>
                  )}
                </>
              ))}

              {/* Add personal touch card */}
              <FadeIn delay={400}>
                <div style={{
                  borderRadius: "16px", border: `1.5px dashed ${G.greenBdr}`,
                  backgroundColor: G.white, padding: "20px 18px",
                  textAlign: "center",
                }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    backgroundColor: G.creamWarm,
                    border: `1px solid ${G.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 12px",
                  }}>
                    <Sparkles className="h-5 w-5" style={{ color: G.terra }} />
                  </div>
                  <p style={{ ...HH, fontSize: "11px", color: G.dark, marginBottom: "6px" }}>Add a Personal Touch</p>
                  <p style={{ fontSize: "11px", color: G.muted, lineHeight: 1.5, marginBottom: "12px" }}>
                    Include a custom message with your gift.
                  </p>
                  <a href="#contact" style={{
                    display: "inline-flex", alignItems: "center", gap: "4px",
                    color: G.green, fontSize: "11px", fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.08em",
                    textDecoration: "none",
                  }}>
                    Add Message <ArrowRight style={{ width: 11, height: 11 }} />
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            BEST SELLING GIFT BOXES — horizontal carousel
        ══════════════════════════════ */}
        <GiftBoxCarousel />

        {/* ══════════════════════════════
            WHY CHOOSE US — split
        ══════════════════════════════ */}
        <section style={{ backgroundColor: G.cream, padding: "72px 0" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-2" style={{ alignItems: "stretch" }}>

              {/* Left dark */}
              <FadeIn delay={0}>
                <div style={{
                  backgroundColor: G.dark, borderRadius: "20px",
                  padding: "48px 40px", height: "100%",
                }}>
                  <p style={{ ...HH, color: G.terra, fontSize: "10px", letterSpacing: "0.2em", marginBottom: "14px" }}>
                    Our Promise
                  </p>
                  <h2 style={{ ...HH, color: "#fff", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", lineHeight: 1.15, marginBottom: "28px" }}>
                    Why Choose<br />Fruitified Gifts?
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {whyPoints.map((pt) => (
                      <div key={pt} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <CheckCircle2 style={{ width: 16, height: 16, color: G.terra, flexShrink: 0 }} />
                        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Right features */}
              <FadeIn delay={150}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  {whyFeatures.map((f, i) => (
                    <div key={f.title} style={{
                      backgroundColor: G.white, borderRadius: "16px",
                      border: `1px solid ${G.border}`,
                      padding: "24px 20px",
                      borderTop: `3px solid ${i % 2 === 0 ? G.terra : G.green}`,
                    }}>
                      <div style={{
                        width: "44px", height: "44px", borderRadius: "12px",
                        backgroundColor: G.creamWarm, border: `1px solid ${G.border}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        marginBottom: "14px",
                      }}>
                        <f.icon className="h-5 w-5" style={{ color: G.dark }} />
                      </div>
                      <p style={{ ...HH, fontSize: "11px", color: G.dark, marginBottom: "8px", lineHeight: 1.3 }}>{f.title}</p>
                      <p style={{ fontSize: "12px", color: G.muted, lineHeight: 1.6 }}>{f.desc}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            MORE THAN A GIFT — editorial
        ══════════════════════════════ */}
        <section style={{ backgroundColor: G.creamWarm, padding: "72px 0" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* Left — large image with floating badge */}
              <FadeIn delay={0}>
                <div style={{ position: "relative" }}>
                  <div style={{
                    borderRadius: "24px", overflow: "hidden",
                    border: `1px solid ${G.border}`,
                    boxShadow: "0 12px 48px rgba(30,58,15,0.12)",
                  }}>
                    <Image
                      src="/images/gifts/more-than-a-gift-memory.jpeg"
                      alt="Beautifully packed mango gift"
                      width={800} height={600}
                      style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
                      sizes="50vw"
                    />
                  </div>

                  {/* Floating badge — top left */}

                </div>
              </FadeIn>

              {/* Right — copy + 2×2 feature grid */}
              <FadeIn delay={150}>
                <p style={{ ...HH, color: G.green, fontSize: "10px", letterSpacing: "0.22em", marginBottom: "14px" }}>
                  ✦ The Fruitified Promise ✦
                </p>
                <h2 style={{ ...HH, color: G.dark, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", lineHeight: 1.1, marginBottom: "18px" }}>
                  More Than a Gift.<br />
                  <span style={{ color: G.terra }}>A Memory.</span>
                </h2>
                <p style={{ color: G.muted, fontSize: "15px", lineHeight: 1.8, marginBottom: "32px" }}>
                  A box of handpicked mangoes isn&apos;t just a present — it&apos;s a moment of joy, a gesture of care,
                  and a taste of something truly special. We make sure every gift you send feels exactly that way.
                </p>

                {/* 2×2 feature grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  {[
                    { icon: Leaf,        title: "Farm to Doorstep",      desc: "Handpicked, graded & delivered with full traceability."   },
                    { icon: Package,     title: "Elegant Packaging",      desc: "Beautifully boxed to impress at first sight."             },
                    { icon: ShieldCheck, title: "No Shortcuts",           desc: "No carbide, no chemicals — only naturally ripened fruit." },
                    { icon: Heart,       title: "Gifted with Love",       desc: "Personal messages & custom packing on every order."      },
                  ].map((f, i) => (
                    <div key={f.title} style={{
                      backgroundColor: G.white, borderRadius: "14px",
                      border: `1px solid ${G.border}`,
                      padding: "20px 18px",
                      borderTop: `3px solid ${i % 2 === 0 ? G.terra : G.green}`,
                    }}>
                      <div style={{
                        width: "38px", height: "38px", borderRadius: "10px",
                        backgroundColor: G.creamWarm, border: `1px solid ${G.border}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        marginBottom: "12px",
                      }}>
                        <f.icon style={{ width: 16, height: 16, color: G.dark }} />
                      </div>
                      <p style={{ ...HH, fontSize: "11px", color: G.dark, marginBottom: "6px", lineHeight: 1.3 }}>{f.title}</p>
                      <p style={{ fontSize: "11px", color: G.muted, lineHeight: 1.6 }}>{f.desc}</p>
                    </div>
                  ))}
                </div>

                <a href="#gift-boxes" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  backgroundColor: G.dark, color: G.cream,
                  ...HH, fontSize: "12px", letterSpacing: "0.1em",
                  padding: "14px 28px", borderRadius: "100px",
                  textDecoration: "none", marginTop: "28px",
                }}>
                  Shop Gift Boxes <ArrowRight style={{ width: 14, height: 14 }} />
                </a>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            LOVED BY THOUSANDS
        ══════════════════════════════ */}
        <section style={{ backgroundColor: G.white, padding: "72px 0" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <FadeIn>
              <div className="flex items-center justify-center gap-3 mb-10">
                <span style={{ color: G.green, fontSize: "18px" }}>✦</span>
                <h2 style={{ ...HH, color: G.dark, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}>
                  Loved by Thousands
                </h2>
                <span style={{ color: G.green, fontSize: "18px" }}>✦</span>
              </div>
            </FadeIn>

            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
              {reviews.map((r, i) => (
                <FadeIn key={r.name} delay={i * 80}>
                  <div style={{
                    backgroundColor: G.cream, borderRadius: "16px",
                    border: `1px solid ${G.border}`,
                    padding: "24px 20px",
                    display: "flex", flexDirection: "column", gap: "12px",
                    height: "100%",
                  }}>
                    <div style={{ display: "flex", gap: "2px" }}>
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} style={{ width: 13, height: 13, color: "#f59e0b", fill: "#f59e0b" }} />
                      ))}
                    </div>
                    <p style={{ fontSize: "13px", lineHeight: 1.7, color: G.dark, fontStyle: "italic", flex: 1 }}>
                      "{r.quote}"
                    </p>
                    <div style={{ borderTop: `1px solid ${G.border}`, paddingTop: "10px" }}>
                      <p style={{ fontSize: "12px", fontWeight: 700, color: G.terra }}>— {r.name}</p>
                      <p style={{ fontSize: "11px", color: G.muted }}>{r.city}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <Contact />


      </main>
      <Footer />
    </>
  )
}
