"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ShoppingBasket, Minus, Plus, SlidersHorizontal } from "lucide-react"
import { useCart } from "./cart-provider"
import { fruits } from "@/lib/fruits-data"

const DARK   = "#1e3a0f"
const GREEN  = "#4a7c2f"
const PRICE  = "#b5451b"
const BORDER = "#e8e0d0"
const WA     = "https://wa.me/918977722037"

type SortOption = "default" | "alphabetical" | "price-low" | "price-high"

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "alphabetical", label: "Alphabetical"        },
  { value: "price-low",    label: "Price (Low to High)" },
  { value: "price-high",   label: "Price (High to Low)" },
]

function parsePrice(price: string): number {
  const match = price.match(/[\d,]+/)
  return match ? parseInt(match[0].replace(",", ""), 10) : 0
}

export default function FruitsGrid() {
  const router = useRouter()
  const { addItem, removeItem, updateQty, items } = useCart()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState<SortOption>("default")

  const shopFruits = useMemo(() => fruits.filter(f => f.shopVisible !== false), [])

  const categories = useMemo(() => {
    const cats = shopFruits.map(f => f.category)
    return ["All", ...Array.from(new Set(cats))]
  }, [shopFruits])

  const displayFruits = useMemo(() => {
    let list = [...shopFruits]
    if (selectedCategory !== "All") {
      list = list.filter(f => f.category === selectedCategory)
    }
    if (sortBy === "alphabetical") {
      list.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === "price-low") {
      list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price))
    } else if (sortBy === "price-high") {
      list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price))
    }
    return list
  }, [selectedCategory, sortBy])

  function getQty(name: string) {
    return items.find(i => i.name === name)?.qty ?? 0
  }
  function handleAdd(fruit: typeof fruits[number]) {
    addItem({ name: fruit.name, emoji: fruit.emoji, image: fruit.images[0], price: fruit.price, weight: "1 kg" })
  }
  function handleDecrement(fruit: typeof fruits[number]) {
    const qty = getQty(fruit.name)
    if (qty <= 1) removeItem(fruit.name, "1 kg")
    else updateQty(fruit.name, "1 kg", qty - 1)
  }
  function clearFilters() {
    setSelectedCategory("All")
    setSortBy("default")
  }

  const hasActiveFilters = selectedCategory !== "All" || sortBy !== "default"

  return (
    <div style={{ display: "flex", gap: "36px", alignItems: "flex-start" }}>

      {/* ── Left Sidebar ── */}
      <aside className="hidden lg:block" style={{ width: "230px", flexShrink: 0, position: "sticky", top: "104px" }}>
        <div style={{
          backgroundColor: "#fff",
          borderRadius: "18px",
          border: `1px solid ${BORDER}`,
          padding: "26px 22px",
          boxShadow: "0 2px 16px rgba(30,58,15,0.06)",
        }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <SlidersHorizontal style={{ width: 15, height: 15, color: DARK }} />
              <span style={{ fontSize: "15px", fontWeight: 800, color: DARK }}>Filters</span>
            </div>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                style={{
                  fontSize: "11px", fontWeight: 700, color: PRICE,
                  background: "none", border: "none", cursor: "pointer", padding: 0,
                }}
              >
                Clear all
              </button>
            )}
          </div>

          <div style={{ height: "1px", backgroundColor: BORDER, marginBottom: "20px" }} />

          {/* Sort By */}
          <p style={{
            fontSize: "10px", fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "0.14em", color: GREEN, marginBottom: "14px",
          }}>
            Sort By
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {SORT_OPTIONS.map(opt => (
              <label
                key={opt.value}
                style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
              >
                <div
                  onClick={() => setSortBy(sortBy === opt.value ? "default" : opt.value)}
                  style={{
                    width: "16px", height: "16px", borderRadius: "50%", flexShrink: 0,
                    border: `2px solid ${sortBy === opt.value ? DARK : "#d1d5db"}`,
                    backgroundColor: sortBy === opt.value ? DARK : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", transition: "all 0.18s ease",
                  }}
                >
                  {sortBy === opt.value && (
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#fff" }} />
                  )}
                </div>
                <span style={{
                  fontSize: "13px", cursor: "pointer",
                  color: sortBy === opt.value ? DARK : "#6b7280",
                  fontWeight: sortBy === opt.value ? 700 : 500,
                  transition: "color 0.18s ease",
                }}
                  onClick={() => setSortBy(sortBy === opt.value ? "default" : opt.value)}
                >
                  {opt.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <div style={{ flex: 1, minWidth: 0 }}>

        {/* Page title + category pills */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "16px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 900, color: DARK, margin: 0 }}>Fruits</h2>
            <span style={{ fontSize: "12px", color: "#9ca3af", fontWeight: 600 }}>
              {displayFruits.length} {displayFruits.length === 1 ? "product" : "products"}
            </span>
          </div>

          {/* Category pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "7px 18px",
                  borderRadius: "100px",
                  border: `1.5px solid ${selectedCategory === cat ? DARK : BORDER}`,
                  backgroundColor: selectedCategory === cat ? DARK : "#fff",
                  color: selectedCategory === cat ? "#fff" : "#6b7280",
                  fontSize: "12px", fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: selectedCategory === cat ? "0 4px 14px rgba(30,58,15,0.22)" : "none",
                  whiteSpace: "nowrap",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {displayFruits.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3" style={{ gap: "20px" }}>
            {displayFruits.map(fruit => {
              const qty    = getQty(fruit.name)
              const inCart = qty > 0

              return (
                <div
                  key={fruit.slug}
                  className="group shadow-[0_2px_14px_rgba(30,58,15,0.06)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(30,58,15,0.14)]"
                  onClick={() => router.push(`/shop/${fruit.slug}`)}
                  style={{
                    backgroundColor: "#fff",
                    border: `1px solid ${BORDER}`,
                    borderRadius: "18px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.28s cubic-bezier(0.23,1,0.32,1), box-shadow 0.28s cubic-bezier(0.23,1,0.32,1)",
                    display: "flex", flexDirection: "column",
                  }}
                >
                  {/* Image area */}
                  <div style={{ position: "relative", overflow: "hidden", flexShrink: 0 }}>
                    {fruit.images[0] ? (
                      <Image
                        src={fruit.images[0]}
                        alt={fruit.name}
                        width={400} height={300}
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="transition-transform duration-500 ease-out group-hover:scale-105"
                        style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
                      />
                    ) : (
                      <div style={{
                        background: fruit.placeholderBg,
                        height: "200px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <span
                          className="transition-transform duration-500 ease-out group-hover:scale-110"
                          style={{ fontSize: "80px", lineHeight: 1, display: "inline-block", filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.12))" }}
                        >
                          {fruit.emoji}
                        </span>
                      </div>
                    )}

                    {/* Badge */}
                    <div style={{
                      position: "absolute", top: "10px", left: "10px",
                      backgroundColor: fruit.badgeColor,
                      borderRadius: "100px", padding: "4px 10px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    }}>
                      <span style={{
                        fontSize: "8px", fontWeight: 800,
                        textTransform: "uppercase", letterSpacing: "0.1em", color: "#fff",
                      }}>
                        {fruit.badge}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <p style={{ fontSize: "14px", fontWeight: 800, color: DARK, lineHeight: 1.3, marginBottom: "2px" }}>
                      {fruit.name}
                    </p>
                    <p style={{ fontSize: "10px", color: "#9ca3af", fontWeight: 600, marginBottom: "12px", lineHeight: 1.4 }}>
                      {fruit.tagline}
                    </p>

                    {/* Price + Add */}
                    <div style={{
                      display: "flex", alignItems: "center",
                      justifyContent: "space-between", marginTop: "auto",
                    }}>
                      <span style={{ fontSize: "15px", fontWeight: 900, color: DARK }}>{fruit.price}</span>

                      {inCart ? (
                        <div
                          onClick={e => e.stopPropagation()}
                          style={{
                            display: "flex", alignItems: "center",
                            border: `1.5px solid ${DARK}`, borderRadius: "100px", overflow: "hidden",
                          }}
                        >
                          <button
                            onClick={e => { e.stopPropagation(); handleDecrement(fruit) }}
                            style={{
                              background: "none", border: "none", cursor: "pointer",
                              padding: "7px 11px", color: DARK,
                              display: "flex", alignItems: "center",
                            }}
                            aria-label="Remove one"
                          >
                            <Minus style={{ width: 10, height: 10 }} />
                          </button>
                          <span style={{ fontSize: "12px", fontWeight: 800, color: DARK, minWidth: "20px", textAlign: "center" }}>
                            {qty}
                          </span>
                          <button
                            onClick={e => { e.stopPropagation(); handleAdd(fruit) }}
                            style={{
                              background: DARK, border: "none", cursor: "pointer",
                              padding: "7px 11px", color: "#fff",
                              display: "flex", alignItems: "center",
                            }}
                            aria-label="Add one more"
                          >
                            <Plus style={{ width: 10, height: 10 }} />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={e => { e.stopPropagation(); handleAdd(fruit) }}
                          style={{
                            display: "inline-flex", alignItems: "center", gap: "5px",
                            backgroundColor: DARK, color: "#fff",
                            fontSize: "10px", fontWeight: 800,
                            textTransform: "uppercase", letterSpacing: "0.08em",
                            padding: "8px 14px", borderRadius: "100px",
                            border: "none", cursor: "pointer",
                            boxShadow: "0 4px 12px rgba(30,58,15,0.22)",
                            transition: "background-color 0.18s ease",
                          }}
                        >
                          <ShoppingBasket style={{ width: 10, height: 10 }} /> Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          /* Empty state */
          <div style={{ textAlign: "center", padding: "80px 20px" }}>
            <p style={{ fontSize: "36px", marginBottom: "14px" }}>🌿</p>
            <p style={{ fontSize: "16px", fontWeight: 800, color: DARK, marginBottom: "6px" }}>No fruits found</p>
            <p style={{ fontSize: "13px", color: "#6b7280", marginBottom: "18px" }}>Try a different category or clear your filters.</p>
            <button
              onClick={clearFilters}
              style={{
                color: "#fff", backgroundColor: DARK,
                fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em",
                padding: "10px 24px", borderRadius: "100px",
                border: "none", cursor: "pointer",
              }}
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div style={{
          marginTop: "60px", padding: "36px 32px",
          background: "rgba(30,58,15,0.04)",
          border: "1px solid rgba(30,58,15,0.09)",
          borderRadius: "20px", textAlign: "center",
        }}>
          <span style={{ fontSize: "28px", display: "block", marginBottom: "10px" }}>🌿</span>
          <p style={{ fontSize: "15px", fontWeight: 800, color: DARK, margin: "0 0 6px" }}>
            Not sure what&apos;s in season?
          </p>
          <p style={{ fontSize: "13px", color: "#6b7280", maxWidth: "420px", lineHeight: 1.75, margin: "0 auto 18px" }}>
            Availability changes weekly. WhatsApp us and we&apos;ll tell you exactly what&apos;s fresh today.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              border: `1.5px solid ${DARK}`, color: DARK,
              fontSize: "11px", fontWeight: 800,
              textTransform: "uppercase", letterSpacing: "0.12em",
              padding: "12px 30px", borderRadius: "100px",
              textDecoration: "none",
            }}
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>

    </div>
  )
}
