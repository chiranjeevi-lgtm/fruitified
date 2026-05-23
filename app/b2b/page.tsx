import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
import FadeIn from "@/components/fade-in"
import {
  ArrowRight, Truck, Leaf, Package, CheckCircle2, Users,
  Star, Award, ShieldCheck, BarChart3, Headphones, BadgeDollarSign,
  Store, Building2, ShoppingCart, Citrus,
} from "lucide-react"

const C = {
  cream:      "#faf5eb",
  creamLight: "#fffdf7",
  creamWarm:  "#f3ede0",
  creamDeep:  "#e8dcc8",
  dark:       "#1e3a0f",
  terra:      "#b5451b",
  terraDark:  "#8B2E12",
  muted:      "#6b7280",
  border:     "#e0d8c8",
  white:      "#ffffff",
}

const HH: React.CSSProperties = {
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: "0.03em",
}

const trustBadges = [
  { icon: Leaf,         label: "100% Natural"          },
  { icon: Star,         label: "Premium Quality"        },
  { icon: Truck,        label: "On-Time Delivery"       },
  { icon: Package,      label: "Bulk Supply Expertise"  },
  { icon: Users,        label: "Long Term Partnerships" },
]

const stats = [
  { value: "500+", label: "Tons of Mangoes Supplied Annually" },
  { value: "100+", label: "B2B Clients Worldwide"             },
  { value: "15+",  label: "Countries Exported To"             },
  { value: "10+",  label: "Years of Experience in the Industry" },
]

const segments = [
  {
    label: "Fruit Shops",
    color: C.dark,
    icon: Store,
    desc: "Attract more customers with the finest & most loved mangoes.",
    bullets: ["Fresh & Handpicked", "Variety of Premium Mangoes", "Small to Large Quantities"],
    image: "/images/b2b/fruit shops.jpeg",
  },
  {
    label: "Corporate Offices",
    color: C.terra,
    icon: Building2,
    desc: "Healthy employees, happy teams. We make it easy.",
    bullets: ["Regular & Hassle-free Supply", "Perfect for Pantries & Events", "Custom Packing Options"],
    image: "/images/b2b/corporate-b2b.jpeg",
  },
  {
    label: "Super Markets",
    color: "#1a56a0",
    icon: ShoppingCart,
    desc: "High quality mangoes that customers trust & love.",
    bullets: ["Bulk Supply with Consistency", "Grading & Quality Assured", "On-time Delivery, Everytime"],
    image: "/images/b2b/super-market-b2b.jpeg",
  },
  {
    label: "Fruit Juice Places",
    color: "#6d28d9",
    icon: Citrus,
    desc: "Juicy. Pulpy. Perfect. Mangoes that blend happiness.",
    bullets: ["Ideal for Juices & Smoothies", "High Pulp & Rich Taste", "Bulk & Continuous Supply"],
    image: "/images/b2b/fruit-juice-place.jpeg",
  },
]

const whyFeatures = [
  { icon: ShieldCheck,        title: "Consistent Quality",  desc: "Every mango carefully selected & quality checked."        },
  { icon: Truck,              title: "Reliable Supply",     desc: "On-time, every time. You can count on us."                },
  { icon: BarChart3,          title: "Scalable Solutions",  desc: "From small orders to bulk container loads."               },
  { icon: BadgeDollarSign,    title: "Competitive Pricing", desc: "Best quality at best value for your business."            },
  { icon: Package,            title: "Custom Packaging",    desc: "Tailored packaging to match your brand."                  },
  { icon: Headphones,         title: "Dedicated Support",   desc: "A dedicated account manager for all your needs."         },
]

const steps = [
  { icon: Users,   title: "Understand Your Needs",   desc: "We listen to your requirements."           },
  { icon: Star,    title: "Quality Selection",        desc: "Best farms. Best mangoes."                 },
  { icon: Package, title: "Safe & Custom Packaging",  desc: "Hygienic packing as per your need."        },
  { icon: Truck,   title: "On-Time Delivery",         desc: "Delivered fresh to your doorstep."         },
  { icon: Award,   title: "Long Term Partnership",    desc: "Growing together, season after season."    },
]

const varieties = [
  { name: "Banganapalli", sub: "Large Size · Excellent Shelf Life",    image: "/images/b2b/varieties/banganapalli-mangoes.jpeg" },
  { name: "Dashehri",     sub: "Sweet & Aromatic · Loved by All",      image: "/images/b2b/varieties/Dasheri-mangoes.jpeg"      },
  { name: "Rasalu",       sub: "Creamy & Sweet · South Indian Delight",image: "/images/b2b/varieties/mango-rasalu.jpeg"         },
  { name: "Alphonso",     sub: "Rich Taste · Golden Goodness",         image: "/images/b2b/varieties/alphonso mangoes.jpeg"     },
]

const trusted = [
  "More Megastore", "Reliance Fresh", "SPAR Hypermarket",
  "Star Bazaar", "BigBasket", "24 Seven", "100+ Happy Clients",
]

const benefits = [
  { icon: Star,        label: "Increase Customer Satisfaction"        },
  { icon: ShieldCheck, label: "Build Trust with Top Quality"          },
  { icon: Package,     label: "Reduce Operational Hassles"            },
  { icon: BarChart3,   label: "Grow Your Business with Consistency"   },
  { icon: Leaf,        label: "Healthy Choice for Better Tomorrow"    },
]

export default function B2BPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: C.cream }}>

        {/* ══ HERO ══ */}
        <section style={{ backgroundColor: C.cream, paddingTop: "130px", paddingBottom: "64px" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* Left */}
              <FadeIn>
                <h1 style={{ color: C.dark, fontWeight: 900, lineHeight: 1.05, fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", marginBottom: "20px" }}>
                  Premium Mangoes.<br />
                  <span style={{ color: C.terra }}>Powering Your Business.</span>
                </h1>
                <p style={{ color: C.muted, fontSize: "15px", lineHeight: 1.75, maxWidth: "460px", marginBottom: "28px" }}>
                  We partner with businesses to deliver farm fresh, handpicked mangoes
                  with consistent quality, on-time delivery and unmatched reliability.
                </p>

                {/* Trust badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
                  {trustBadges.map((b) => (
                    <div key={b.label} style={{
                      display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
                      backgroundColor: C.creamWarm, border: `1px solid ${C.border}`,
                      borderRadius: "12px", padding: "10px 14px", minWidth: "72px",
                    }}>
                      <b.icon style={{ width: 18, height: 18, color: C.dark }} />
                      <span style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: C.dark, textAlign: "center", lineHeight: 1.2 }}>
                        {b.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <a href="#contact" style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    backgroundColor: C.dark, color: C.cream,
                    ...HH, fontSize: "12px", padding: "14px 28px",
                    borderRadius: "100px", textDecoration: "none",
                  }}>
                    Enquire for Bulk Orders <ArrowRight style={{ width: 14, height: 14 }} />
                  </a>
                  <a href="#varieties" style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    backgroundColor: C.white, color: C.dark,
                    border: `1.5px solid ${C.border}`,
                    ...HH, fontSize: "12px", padding: "14px 28px",
                    borderRadius: "100px", textDecoration: "none",
                  }}>
                    View Our Products
                  </a>
                </div>
              </FadeIn>

              {/* Right image — dissolve into background */}
              <FadeIn delay={150}>
                <div style={{ position: "relative", minHeight: "620px" }}>
                  <div style={{
                    position: "absolute",
                    inset: "-28% -20% -8% -20%",
                    zIndex: 10,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    WebkitMaskImage: "radial-gradient(ellipse 78% 82% at 50% 50%, black 25%, rgba(0,0,0,0.5) 50%, transparent 72%)",
                    maskImage: "radial-gradient(ellipse 78% 82% at 50% 50%, black 25%, rgba(0,0,0,0.5) 50%, transparent 72%)",
                  }}>
                    <Image
                      src="/images/b2b/b2b-hero-new.jpeg" alt="Premium mango supply"
                      width={1200} height={1050}
                      className="h-full w-full object-contain"
                      sizes="(max-width:1024px) 90vw, 60vw"
                    />
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* ══ STATS BAR ══ */}
        <div style={{ backgroundColor: C.dark, padding: "0" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <FadeIn key={s.label} delay={i * 80}>
                  <div style={{
                    display: "flex", alignItems: "center", gap: "14px",
                    padding: "28px 24px",
                    borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  }}>
                    <div style={{
                      width: "44px", height: "44px", borderRadius: "50%",
                      border: "1.5px solid rgba(255,255,255,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Package style={{ width: 18, height: 18, color: "rgba(255,255,255,0.6)" }} />
                    </div>
                    <div>
                      <p style={{ ...HH, fontSize: "22px", color: C.cream, lineHeight: 1 }}>{s.value}</p>
                      <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", marginTop: "4px", lineHeight: 1.3 }}>{s.label}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* ══ WHO WE SUPPLY ══ */}
        <section style={{ backgroundColor: C.white, padding: "80px 0" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeIn>
              <div style={{ textAlign: "center", marginBottom: "48px" }}>
                <p style={{ ...HH, fontSize: "10px", color: C.terra, letterSpacing: "0.2em", marginBottom: "8px" }}>
                  ❧ We Partner With Businesses Like You ❧
                </p>
                <h2 style={{ color: C.dark, fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                  Premium Mangoes for Every Business
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {segments.map((seg, i) => (
                <FadeIn key={seg.label} delay={i * 80}>
                  <div style={{
                    backgroundColor: C.white,
                    border: `1px solid ${C.border}`,
                    borderRadius: "16px", overflow: "hidden",
                    display: "flex", flexDirection: "column",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  }}>
                    {/* Image */}
                    <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                      <Image
                        src={seg.image} alt={seg.label} fill
                        className="object-cover" sizes="25vw"
                      />
                    </div>
                    {/* Body */}
                    <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <seg.icon style={{ width: 18, height: 18, color: seg.color }} />
                        <h3 style={{ ...HH, fontSize: "13px", color: seg.color }}>{seg.label}</h3>
                      </div>
                      <p style={{ fontSize: "12px", color: C.muted, lineHeight: 1.6 }}>{seg.desc}</p>
                      <ul style={{ display: "flex", flexDirection: "column", gap: "6px", margin: 0, padding: 0, listStyle: "none" }}>
                        {seg.bullets.map((b) => (
                          <li key={b} style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "12px", color: C.muted }}>
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: seg.color, flexShrink: 0 }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <a href="#contact" style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        backgroundColor: seg.color, color: "#fff",
                        ...HH, fontSize: "10px", letterSpacing: "0.1em",
                        padding: "10px 16px", borderRadius: "8px",
                        textDecoration: "none", marginTop: "auto",
                        width: "fit-content",
                      }}>
                        Partner With Us <ArrowRight style={{ width: 11, height: 11 }} />
                      </a>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CATERING ══ */}
        <section style={{ backgroundColor: C.cream, padding: "80px 0" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <FadeIn>
              <div style={{ textAlign: "center", marginBottom: "48px" }}>
                <p style={{ ...HH, fontSize: "10px", color: C.terra, letterSpacing: "0.2em", marginBottom: "8px" }}>
                  ❧ Fresh. Healthy. Catered. ❧
                </p>
                <h2 style={{ color: C.dark, fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginBottom: "12px" }}>
                  Catering Services
                </h2>
                <p style={{ fontSize: "14px", color: C.muted, lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
                  We bring the freshness of nature to your events — corporate gatherings, celebrations
                  or any special occasion. Our fruit bowls and cold-pressed juices make every moment healthier.
                </p>
              </div>
            </FadeIn>

            {/* Two cards: Fruit Bowls + Juices */}
            <div className="grid gap-6 md:grid-cols-2">

              {/* Fruit Bowls */}
              <FadeIn delay={0}>
                <div style={{
                  backgroundColor: C.white, border: `1px solid ${C.border}`,
                  borderRadius: "20px", overflow: "hidden",
                  display: "flex", flexDirection: "column",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                }}>
                  <div style={{ backgroundColor: C.dark, padding: "32px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                      <div style={{
                        width: "44px", height: "44px", borderRadius: "12px",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <Leaf style={{ width: 22, height: 22, color: "#fff" }} />
                      </div>
                      <h3 style={{ ...HH, fontSize: "17px", color: "#fff" }}>Fruit Bowls</h3>
                    </div>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>
                      Fresh, colourful and nutritious fruit bowls crafted for every occasion.
                    </p>
                  </div>
                  <div style={{ width: "100%", lineHeight: 0 }}>
                    <Image
                      src="/images/b2b/catering/catering-fruit-bowl.jpeg"
                      alt="Catering fruit bowls"
                      width={800} height={480}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                  <div style={{ padding: "28px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "12px", listStyle: "none", padding: 0, margin: "0 0 24px" }}>
                      {[
                        "Classic & exotic seasonal fruit bowls",
                        "Custom portions for small & large groups",
                        "Hygienically prepared on the day",
                        "Beautifully plated and presented",
                        "Available for corporate events & celebrations",
                      ].map((pt) => (
                        <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: C.muted, lineHeight: 1.5 }}>
                          <CheckCircle2 style={{ width: 14, height: 14, color: C.dark, flexShrink: 0, marginTop: "2px" }} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      backgroundColor: C.dark, color: C.cream,
                      ...HH, fontSize: "11px", padding: "12px 24px",
                      borderRadius: "100px", textDecoration: "none",
                      width: "fit-content", marginTop: "auto",
                    }}>
                      Enquire for Fruit Bowls <ArrowRight style={{ width: 12, height: 12 }} />
                    </a>
                  </div>
                </div>
              </FadeIn>

              {/* Fruit Juices */}
              <FadeIn delay={100}>
                <div style={{
                  backgroundColor: C.white, border: `1px solid ${C.border}`,
                  borderRadius: "20px", overflow: "hidden",
                  display: "flex", flexDirection: "column",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                }}>
                  <div style={{ backgroundColor: C.terra, padding: "32px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                      <div style={{
                        width: "44px", height: "44px", borderRadius: "12px",
                        backgroundColor: "rgba(255,255,255,0.15)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <Citrus style={{ width: 22, height: 22, color: "#fff" }} />
                      </div>
                      <h3 style={{ ...HH, fontSize: "17px", color: "#fff" }}>Fruit Juices</h3>
                    </div>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: 1.75 }}>
                      Cold-pressed, preservative-free juices served fresh at your event.
                    </p>
                  </div>
                  <div style={{ width: "100%", lineHeight: 0 }}>
                    <Image
                      src="/images/b2b/catering/catering-juice.jpeg"
                      alt="Catering fruit juices"
                      width={800} height={480}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                  <div style={{ padding: "28px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "12px", listStyle: "none", padding: 0, margin: "0 0 24px" }}>
                      {[
                        "ABC Juice, Pomegranate, Pineapple & more",
                        "Freshly pressed on the day of your event",
                        "No preservatives, no added sugar",
                        "Bulk quantities for large events",
                        "Custom juice stations for your venue",
                      ].map((pt) => (
                        <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: C.muted, lineHeight: 1.5 }}>
                          <CheckCircle2 style={{ width: 14, height: 14, color: C.terra, flexShrink: 0, marginTop: "2px" }} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      backgroundColor: C.terra, color: "#fff",
                      ...HH, fontSize: "11px", padding: "12px 24px",
                      borderRadius: "100px", textDecoration: "none",
                      width: "fit-content", marginTop: "auto",
                    }}>
                      Enquire for Juices <ArrowRight style={{ width: 12, height: 12 }} />
                    </a>
                  </div>
                </div>
              </FadeIn>

            </div>

            {/* Bottom banner */}
            <FadeIn delay={200}>
              <div style={{
                marginTop: "28px",
                backgroundColor: C.creamWarm,
                border: `1px solid ${C.border}`,
                borderRadius: "16px",
                padding: "28px 36px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                gap: "20px", flexWrap: "wrap",
              }}>
                <div>
                  <h3 style={{ ...HH, fontSize: "13px", color: C.dark, marginBottom: "6px" }}>
                    Planning an Event?
                  </h3>
                  <p style={{ fontSize: "12px", color: C.muted, lineHeight: 1.7, maxWidth: "500px" }}>
                    From intimate corporate lunches to large-scale celebrations — we tailor our catering
                    to suit your headcount, venue and budget.
                  </p>
                </div>
                <a href="#contact" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  backgroundColor: C.dark, color: C.cream,
                  ...HH, fontSize: "11px", padding: "13px 26px",
                  borderRadius: "100px", textDecoration: "none", flexShrink: 0,
                }}>
                  Plan Your Catering <ArrowRight style={{ width: 13, height: 13 }} />
                </a>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* ══ WHY PARTNER ══ */}
        <section style={{ backgroundColor: C.creamWarm, padding: "80px 0" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid items-stretch gap-8 lg:grid-cols-3">

              {/* Left dark panel */}
              <FadeIn>
                <div style={{
                  backgroundColor: C.dark, borderRadius: "20px",
                  padding: "40px 32px", height: "100%",
                  display: "flex", flexDirection: "column", gap: "20px",
                  position: "relative", overflow: "hidden",
                }}>
                  <div>
                    <p style={{ ...HH, fontSize: "10px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.2em", marginBottom: "12px" }}>
                      Why Choose Us
                    </p>
                    <h2 style={{ color: C.cream, fontWeight: 900, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", lineHeight: 1.15 }}>
                      Why Partner With<br />
                      <span style={{ color: C.terra }}>Fruitified?</span>
                    </h2>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", lineHeight: 1.75 }}>
                    We don&apos;t just supply mangoes, we build relationships that grow your business.
                  </p>
                  <div style={{ flex: 1, position: "relative", minHeight: "180px" }}>
                    <Image
                      src="/gallery/Mango-juice.jpeg" alt="Premium mangoes"
                      fill className="object-cover" sizes="30vw"
                      style={{ borderRadius: "14px", opacity: 0.8 }}
                    />
                  </div>
                </div>
              </FadeIn>

              {/* Right: 2×3 feature grid */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {whyFeatures.map((f, i) => (
                    <FadeIn key={f.title} delay={i * 70}>
                      <div style={{
                        backgroundColor: C.white,
                        border: `1px solid ${C.border}`,
                        borderRadius: "14px", padding: "22px 20px",
                        display: "flex", flexDirection: "column", gap: "10px",
                      }}>
                        <div style={{
                          width: "40px", height: "40px", borderRadius: "10px",
                          backgroundColor: C.creamWarm, border: `1px solid ${C.border}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <f.icon style={{ width: 18, height: 18, color: C.dark }} />
                        </div>
                        <h3 style={{ ...HH, fontSize: "11px", color: C.dark, lineHeight: 1.3 }}>{f.title}</h3>
                        <p style={{ fontSize: "12px", color: C.muted, lineHeight: 1.6 }}>{f.desc}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══ PROCESS ══ */}
        <section style={{ backgroundColor: C.white, padding: "80px 0" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeIn>
              <div style={{ textAlign: "center", marginBottom: "48px" }}>
                <p style={{ ...HH, fontSize: "10px", color: C.terra, letterSpacing: "0.2em", marginBottom: "8px" }}>
                  ❧ Our Simple Process ❧
                </p>
                <h2 style={{ color: C.dark, fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                  Getting Started is Simple
                </h2>
              </div>
            </FadeIn>

            <div className="grid gap-8 lg:grid-cols-3">

              {/* Steps (spans 2 cols) */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {steps.map((step, i) => (
                    <FadeIn key={step.title} delay={i * 80}>
                      <div style={{
                        backgroundColor: C.creamWarm,
                        border: `1px solid ${C.border}`,
                        borderRadius: "16px", padding: "22px",
                        display: "flex", flexDirection: "column", gap: "10px",
                        position: "relative",
                      }}>
                        {/* Step number */}
                        <span style={{
                          position: "absolute", top: "10px", right: "14px",
                          fontSize: "40px", fontWeight: 900, color: C.creamDeep,
                          lineHeight: 1, userSelect: "none",
                        }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div style={{
                          width: "42px", height: "42px", borderRadius: "50%",
                          backgroundColor: C.dark, display: "flex",
                          alignItems: "center", justifyContent: "center",
                        }}>
                          <step.icon style={{ width: 18, height: 18, color: C.cream }} />
                        </div>
                        <h3 style={{ ...HH, fontSize: "11px", color: C.dark, lineHeight: 1.3 }}>{step.title}</h3>
                        <p style={{ fontSize: "12px", color: C.muted, lineHeight: 1.6 }}>{step.desc}</p>
                        {i < steps.length - 1 && (
                          <div className="hidden lg:block" style={{
                            position: "absolute", right: "-12px", top: "50%",
                            transform: "translateY(-50%)", zIndex: 10,
                            width: "24px", height: "24px", borderRadius: "50%",
                            backgroundColor: C.white, border: `1px solid ${C.border}`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            <ArrowRight style={{ width: 11, height: 11, color: C.terra }} />
                          </div>
                        )}
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>

              {/* Sidebar CTA */}
              <FadeIn delay={200}>
                <div style={{
                  backgroundColor: C.dark, borderRadius: "20px",
                  padding: "36px 28px", height: "100%",
                  display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px",
                }}>
                  <h3 style={{ color: C.cream, fontWeight: 900, fontSize: "22px", lineHeight: 1.2 }}>
                    Bulk Orders.<br />Better Value.<br />
                    <span style={{ color: C.terra }}>Stronger Together.</span>
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", lineHeight: 1.7 }}>
                    Let&apos;s discuss how we can power your business with premium mangoes.
                  </p>
                  <a href="#contact" style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    backgroundColor: C.terra, color: "#fff",
                    ...HH, fontSize: "11px", padding: "13px 22px",
                    borderRadius: "100px", textDecoration: "none",
                    width: "fit-content",
                  }}>
                    Enquire Now <ArrowRight style={{ width: 13, height: 13 }} />
                  </a>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* ══ MANGO VARIETIES ══ */}
        <section id="varieties" style={{ backgroundColor: C.cream, padding: "80px 0" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeIn>
              <div style={{ textAlign: "center", marginBottom: "48px" }}>
                <p style={{ ...HH, fontSize: "10px", color: C.terra, letterSpacing: "0.2em", marginBottom: "8px" }}>
                  ❧ Our Premium Mango Varieties ❧
                </p>
                <h2 style={{ color: C.dark, fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                  The Finest Varieties, Sourced Directly
                </h2>
              </div>
            </FadeIn>

            {/* 4-card premium row */}
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
              {varieties.map((v, i) => (
                <FadeIn key={v.name} delay={i * 80}>
                  <div style={{
                    borderRadius: "18px", overflow: "hidden",
                    border: `1px solid ${C.border}`,
                    boxShadow: "0 6px 28px rgba(30,58,15,0.10)",
                    display: "flex", flexDirection: "column",
                    backgroundColor: C.white,
                  }}>
                    {/* Image fills full card width, full image visible, height follows naturally */}
                    <Image
                      src={v.image} alt={v.name}
                      width={800} height={600}
                      style={{ width: "100%", height: "auto", display: "block" }}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />

                    {/* Divider */}
                    <div style={{ height: "1px", backgroundColor: C.border }} />

                    {/* Name + sub-text + CTA */}
                    <div style={{
                      padding: "18px 20px 20px",
                      display: "flex", flexDirection: "column", gap: "8px", flex: 1,
                    }}>
                      <p style={{ ...HH, fontSize: "14px", color: C.dark }}>{v.name}</p>
                      <p style={{ fontSize: "11px", color: C.muted, lineHeight: 1.65 }}>{v.sub}</p>
                      <a href="#contact" style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        backgroundColor: C.creamWarm,
                        border: `1px solid ${C.border}`,
                        color: C.dark,
                        ...HH, fontSize: "9px", letterSpacing: "0.1em",
                        padding: "8px 14px", borderRadius: "8px",
                        textDecoration: "none", width: "fit-content", marginTop: "auto",
                      }}>
                        Enquire Now <ArrowRight style={{ width: 10, height: 10 }} />
                      </a>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Custom requirements — full-width strip below cards */}
            <FadeIn delay={200}>
              <div style={{
                marginTop: "28px",
                backgroundColor: C.dark, borderRadius: "16px",
                padding: "28px 36px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                gap: "20px", flexWrap: "wrap",
              }}>
                <div>
                  <h3 style={{ ...HH, fontSize: "13px", color: C.cream, marginBottom: "6px" }}>
                    Custom Requirements?
                  </h3>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: "520px" }}>
                    We offer customized packing, grading &amp; private labeling to meet your business needs.
                  </p>
                </div>
                <a href="#contact" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  backgroundColor: C.terra, color: "#fff",
                  ...HH, fontSize: "11px", padding: "13px 26px",
                  borderRadius: "100px", textDecoration: "none", flexShrink: 0,
                }}>
                  Let&apos;s Talk <ArrowRight style={{ width: 13, height: 13 }} />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══ TRUSTED BY ══ */}
        <section style={{ backgroundColor: C.white, padding: "56px 0", borderTop: `1px solid ${C.border}` }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeIn>
              <div className="flex flex-col items-center gap-6 lg:flex-row">
                <div style={{ flexShrink: 0 }}>
                  <p style={{ ...HH, fontSize: "11px", color: C.dark, maxWidth: "140px", lineHeight: 1.4 }}>
                    Trusted by Businesses Around the World
                  </p>
                </div>
                <div style={{ width: "1px", height: "48px", backgroundColor: C.border }} className="hidden lg:block" />
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                  {trusted.map((name) => (
                    <span key={name} style={{
                      backgroundColor: C.creamWarm, border: `1px solid ${C.border}`,
                      borderRadius: "100px", padding: "8px 18px",
                      fontSize: "12px", fontWeight: 700, color: C.dark,
                    }}>
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══ BENEFITS BAR ══ */}
        <div style={{ backgroundColor: C.dark }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-2 gap-0 lg:grid-cols-5">
              {benefits.map((b, i) => (
                <FadeIn key={b.label} delay={i * 60}>
                  <div style={{
                    display: "flex", flexDirection: "column", alignItems: "center",
                    gap: "10px", padding: "28px 16px", textAlign: "center",
                    borderRight: i < 4 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  }}>
                    <b.icon style={{ width: 22, height: 22, color: "rgba(255,255,255,0.6)" }} />
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.75)", lineHeight: 1.4 }}>
                      {b.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* ══ FINAL CTA ══ */}
        <section style={{ backgroundColor: C.creamWarm, padding: "72px 0" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeIn>
              <div className="grid items-center gap-10 lg:grid-cols-3">

                {/* Mango image */}
                <div style={{ borderRadius: "20px", overflow: "hidden", height: "220px", position: "relative" }}>
                  <Image src="/gallery/WaterMelon.jpeg" alt="Fresh mangoes" fill className="object-cover" sizes="30vw" />
                </div>

                {/* Text */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h2 style={{ color: C.dark, fontWeight: 900, fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", lineHeight: 1.15 }}>
                    Let&apos;s Grow Your Business Together
                  </h2>
                  <p style={{ fontSize: "14px", color: C.muted, lineHeight: 1.7 }}>
                    Partner with Fruitified by Kamala for premium mangoes and unmatched service.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {[
                      { icon: Users, text: "+91 89777 22037" },
                      { icon: CheckCircle2, text: "fruitified2026@gmail.com" },
                    ].map((c) => (
                      <div key={c.text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <c.icon style={{ width: 14, height: 14, color: C.terra }} />
                        <span style={{ fontSize: "13px", color: C.dark }}>{c.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <a href="#contact" style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    backgroundColor: C.dark, color: C.cream,
                    ...HH, fontSize: "13px", padding: "18px 36px",
                    borderRadius: "100px", textDecoration: "none",
                    boxShadow: "0 6px 24px rgba(30,58,15,0.2)",
                  }}>
                    Get a Quote <ArrowRight style={{ width: 15, height: 15 }} />
                  </a>
                </div>

              </div>
            </FadeIn>
          </div>
        </section>

        <Contact />

      </main>
      <Footer />
    </>
  )
}
