"use client"

import { motion } from "framer-motion"

const DARK  = "#1e3a0f"
const TEXT  = "#2d4a1c"
const PRICE = "#b5451b"
const MUTED = "#6b7280"

const addons = [
  { name: "Honey",               price: "₹5",  emoji: "🍯", desc: "Pure natural sweetener" },
  { name: "Sabja Seeds",         price: "₹5",  emoji: "🌱", desc: "Cooling basil seeds"    },
  { name: "Salt Chilli Powder",  price: "₹5",  emoji: "🧂", desc: "Classic seasoning mix"  },
  { name: "Grated Nuts",         price: "₹10", emoji: "🌰", desc: "Crunchy topping"         },
  { name: "Sugarcane Ice Cubes", price: "₹10", emoji: "🧊", desc: "Sweet cooling crunch"   },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
}

export default function AddonsSection() {
  return (
    <section style={{
      backgroundColor: "#f3ede0",
      padding: "72px 0",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Decorative blobs */}
      <div aria-hidden style={{
        position: "absolute", top: "-60px", right: "-60px",
        width: "320px", height: "320px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(181,69,27,0.1) 0%, transparent 70%)",
        filter: "blur(48px)", pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", bottom: "-40px", left: "-40px",
        width: "260px", height: "260px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(74,124,47,0.09) 0%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none",
      }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-12" style={{ position: "relative", zIndex: 1 }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          style={{ marginBottom: "48px" }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.85)",
            borderRadius: "100px", padding: "5px 16px",
            marginBottom: "16px",
          }}>
            <span style={{ fontSize: "11px" }}>✦</span>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED }}>
              Personalise Your Order
            </span>
            <span style={{ fontSize: "11px" }}>✦</span>
          </div>

          <div style={{ display: "flex", alignItems: "baseline", gap: "14px", flexWrap: "wrap" }}>
            <h2 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2rem, 3.2vw, 2.8rem)",
              fontWeight: 400, color: DARK,
              letterSpacing: "0.01em", lineHeight: 1.1, margin: 0,
            }}>
              Add-Ons & Extras
            </h2>
            <span style={{
              fontSize: "11px", fontWeight: 700, color: PRICE,
              background: "rgba(181,69,27,0.08)",
              padding: "4px 12px", borderRadius: "100px",
              letterSpacing: "0.08em", textTransform: "uppercase",
            }}>
              {addons.length} items
            </span>
          </div>

          <div style={{
            marginTop: "10px", height: "2px", width: "60px",
            background: `linear-gradient(90deg, ${PRICE} 0%, rgba(181,69,27,0.15) 100%)`,
            borderRadius: "2px",
          }} />

          <p style={{ fontSize: "13px", color: MUTED, marginTop: "12px", letterSpacing: "0.04em", lineHeight: 1.7 }}>
            Add these to any item and customise your order
          </p>
        </motion.div>

        {/* Rows grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{ gap: "10px" }}
        >
          {addons.map((addon) => (
            <motion.div
              key={addon.name}
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
              {/* Left: emoji + name + desc */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1, minWidth: 0 }}>
                <span style={{ fontSize: "20px", flexShrink: 0 }}>{addon.emoji}</span>
                <div style={{ minWidth: 0 }}>
                  <p style={{
                    fontSize: "14px", fontWeight: 600, color: TEXT,
                    letterSpacing: "0.01em", lineHeight: 1.3, margin: 0,
                  }}>
                    {addon.name}
                  </p>
                  <p style={{
                    fontSize: "11px", color: MUTED,
                    lineHeight: 1.4, margin: "3px 0 0",
                  }}>
                    {addon.desc}
                  </p>
                </div>
              </div>

              {/* Right: price badge */}
              <span style={{
                fontSize: "13.5px", fontWeight: 700, color: PRICE,
                flexShrink: 0,
                background: "rgba(181,69,27,0.08)",
                border: "1px solid rgba(181,69,27,0.14)",
                padding: "5px 12px", borderRadius: "10px",
                letterSpacing: "0.02em",
              }}>
                {addon.price}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
