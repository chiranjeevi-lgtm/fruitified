"use client"

import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"

const DARK  = "#1e3a0f"
const TEXT  = "#2d4a1c"
const PRICE = "#b5451b"
const MUTED = "#6b7280"

const sections = [
  {
    id: "juices",
    label: "Fresh Juices",
    emoji: "🍊",
    items: [
      { name: "Cold Pressed ABC Vitality Juice [200 ml]",   price: "₹103.95" },
      { name: "Fresh Tropical Mixed Fruit [200 ml]",        price: "₹103.95" },
      { name: "Cold Pressed Watermelon Juice [200 ml]",     price: "₹82.95"  },
      { name: "Cold Pressed Mosambi Juice",                 price: "₹82.95"  },
      { name: "Cold Pressed Pineapple Juice",               price: "₹82.95"  },
      { name: "Cold Pressed Pomegranate Juice",             price: "₹103.95" },
      { name: "Farm Fresh Mango Juice",                     price: "₹103.95" },
      { name: "Farm Fresh Papaya Juice",                    price: "₹82.95"  },
      { name: "Farm Fresh Sapota Juice",                    price: "₹103.95" },
    ],
  },
  {
    id: "bowls",
    label: "Fruit Bowls",
    emoji: "🍓",
    items: [
      { name: "Exotic Fruit Bowl",            price: "₹135.45" },
      { name: "Classic Fresh Fruit Bowl",     price: "₹93.45"  },
      { name: "Watermelon Cut Fruit Bowl",    price: "₹51.45"  },
      { name: "Fresh Pineapple Bowl",         price: "₹82.95"  },
      { name: "Fresh Mango Bowl",             price: "₹51.45"  },
      { name: "Fresh Guava Bowl",             price: "₹51.45"  },
      { name: "Raw Mango Bowl",               price: "₹51.45"  },
      { name: "Muskmelon Fruit Bowl",         price: "₹51.45"  },
      { name: "Premium Banginapalli Mangoes", price: "₹945.00" },
    ],
  },
  {
    id: "smoothies",
    label: "Smoothies & Shakes",
    emoji: "🥤",
    items: [
      { name: "Fresh Banana Protein Shake", price: "₹103.95" },
      { name: "Kiwi Fresh Smoothie",        price: "₹103.95" },
      { name: "Creamy Mango Smoothie",      price: "₹135.45" },
      { name: "Protein Shake",              price: "₹156.45" },
    ],
  },
  {
    id: "hydration",
    label: "Natural Hydration",
    emoji: "🥥",
    items: [
      { name: "Coconut Refresh Drink",    price: "₹82.95"  },
      { name: "Traditional Buttermilk",   price: "₹51.45"  },
      { name: "Classic Creamy Lassi",     price: "₹51.45"  },
      { name: "Royal Mango Lassi",        price: "₹82.95"  },
      { name: "Millet Probiotic Bowl",    price: "₹51.45"  },
      { name: "Protein Packed Oats Bowl", price: "₹208.95" },
    ],
  },
]

const pageVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
  exit:    { opacity: 0, transition: { staggerChildren: 0.04, staggerDirection: -1, duration: 0.2 } },
}

const headingVariants: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as [number,number,number,number] } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.2 } },
}

const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 28, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] as [number,number,number,number] } },
  exit:    { opacity: 0, y: -16, scale: 0.97, transition: { duration: 0.22, ease: "easeIn" as const } },
}

export default function MenuTabs() {
  const [active, setActive] = useState("juices")
  const current = sections.find((s) => s.id === active)!

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>

      {/* Decorative blobs */}
      <div aria-hidden style={{
        position: "absolute", top: "-120px", right: "-100px",
        width: "480px", height: "480px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(74,124,47,0.12) 0%, transparent 70%)",
        filter: "blur(48px)", pointerEvents: "none", zIndex: 0,
      }} />
      <div aria-hidden style={{
        position: "absolute", bottom: "-60px", left: "-80px",
        width: "380px", height: "380px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(181,69,27,0.09) 0%, transparent 70%)",
        filter: "blur(48px)", pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* Tab bar */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "8px",
          marginBottom: "56px", padding: "6px",
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
          borderRadius: "100px", border: "1px solid rgba(255,255,255,0.9)",
          boxShadow: "0 2px 16px rgba(30,58,15,0.07), inset 0 1px 0 rgba(255,255,255,0.8)",
          width: "fit-content",
        }}>
          {sections.map((s) => {
            const isActive = active === s.id
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                style={{
                  position: "relative", padding: "10px 22px",
                  borderRadius: "100px", border: "none", background: "transparent",
                  color: isActive ? "#faf5eb" : MUTED,
                  fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", cursor: "pointer",
                  transition: "color 0.25s ease", zIndex: 1,
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    style={{
                      position: "absolute", inset: 0, borderRadius: "100px",
                      backgroundColor: DARK, boxShadow: "0 4px 16px rgba(30,58,15,0.3)", zIndex: -1,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "13px" }}>{s.emoji}</span>
                  {s.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div key={active} variants={pageVariants} initial="hidden" animate="visible" exit="exit">

            {/* Section heading */}
            <motion.div variants={headingVariants} style={{ marginBottom: "36px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", flexWrap: "wrap" }}>
                <h2 style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(2rem, 3.2vw, 2.8rem)", fontWeight: 400,
                  color: DARK, letterSpacing: "0.01em", lineHeight: 1.1, margin: 0,
                }}>
                  {current.label}
                </h2>
                <span style={{
                  fontSize: "11px", fontWeight: 700, color: PRICE,
                  background: "rgba(181,69,27,0.08)", padding: "4px 12px",
                  borderRadius: "100px", letterSpacing: "0.08em", textTransform: "uppercase",
                }}>
                  {current.items.length} items
                </span>
              </div>
              <div style={{
                marginTop: "10px", height: "2px", width: "60px",
                background: `linear-gradient(90deg, ${PRICE} 0%, rgba(181,69,27,0.15) 100%)`,
                borderRadius: "2px",
              }} />
            </motion.div>

            {/* Items grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "10px" }}>
              {current.items.map((item) => (
                <motion.div
                  key={item.name}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.025,
                    y: -5,
                    boxShadow: "0 12px 36px rgba(30,58,15,0.13), 0 2px 8px rgba(30,58,15,0.06)",
                    transition: { duration: 0.22, ease: "easeOut" },
                  }}
                  style={{
                    background: "rgba(255,255,255,0.58)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(255,255,255,0.88)",
                    borderRadius: "18px",
                    padding: "17px 22px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "14px",
                    boxShadow: "0 2px 12px rgba(30,58,15,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
                    cursor: "default",
                  }}
                >
                  {/* Left: dot + name */}
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, minWidth: 0 }}>
                    <div style={{
                      width: "6px", height: "6px", borderRadius: "50%",
                      backgroundColor: DARK, opacity: 0.35, flexShrink: 0,
                    }} />
                    <span style={{
                      fontSize: "14px", color: TEXT, fontWeight: 500,
                      letterSpacing: "0.01em", lineHeight: 1.4,
                      overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    }}>
                      {item.name}
                    </span>
                  </div>

                  {/* Right: price badge */}
                  <span style={{
                    fontSize: "13.5px", color: PRICE, fontWeight: 700, flexShrink: 0,
                    background: "rgba(181,69,27,0.08)",
                    border: "1px solid rgba(181,69,27,0.14)",
                    padding: "5px 12px", borderRadius: "10px",
                    letterSpacing: "0.02em",
                  }}>
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  )
}
