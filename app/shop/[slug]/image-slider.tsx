"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const DARK = "#1e3a0f"

type Props = {
  images: string[]
  alt: string
  placeholderBg: string
  badge: string
  badgeColor: string
  emoji: string
}

export default function ImageSlider({ images, alt, placeholderBg, badge, badgeColor, emoji }: Props) {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index: number) => {
    if (animating || index === current) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 400)
  }, [animating, current])

  const prev = () => goTo((current - 1 + images.length) % images.length)
  const next = useCallback(() => goTo((current + 1) % images.length), [goTo, current, images.length])

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [images.length, next])

  if (images.length === 0) {
    return (
      <div style={{
        borderRadius: "24px", overflow: "hidden",
        aspectRatio: "4 / 3", background: placeholderBg,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 12px 48px rgba(30,58,15,0.12)",
      }}>
        <span style={{ fontSize: "130px", lineHeight: 1, filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.12))" }}>
          {emoji}
        </span>
      </div>
    )
  }

  return (
    <div style={{ position: "relative" }}>
      {/* Main image container */}
      <div style={{
        borderRadius: "24px", overflow: "hidden",
        aspectRatio: "4 / 3", background: placeholderBg,
        position: "relative",
        boxShadow: "0 12px 48px rgba(30,58,15,0.12)",
      }}>
        {images.map((src, i) => (
          <div
            key={src}
            style={{
              position: "absolute", inset: 0,
              opacity: i === current ? 1 : 0,
              transition: "opacity 0.4s ease",
              pointerEvents: i === current ? "auto" : "none",
            }}
          >
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Badge */}
        <div style={{
          position: "absolute", top: "16px", left: "16px", zIndex: 10,
          backgroundColor: badgeColor,
          borderRadius: "100px", padding: "5px 13px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.18)",
        }}>
          <span style={{ fontSize: "9px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#fff" }}>
            {badge}
          </span>
        </div>

        {/* Prev / Next arrows — only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              style={{
                position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)",
                zIndex: 10, background: "rgba(255,255,255,0.88)", border: "none",
                borderRadius: "50%", width: "36px", height: "36px",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                backdropFilter: "blur(4px)",
              }}
            >
              <ChevronLeft style={{ width: 18, height: 18, color: DARK }} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              style={{
                position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
                zIndex: 10, background: "rgba(255,255,255,0.88)", border: "none",
                borderRadius: "50%", width: "36px", height: "36px",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                backdropFilter: "blur(4px)",
              }}
            >
              <ChevronRight style={{ width: 18, height: 18, color: DARK }} />
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div style={{
          display: "flex", justifyContent: "center", gap: "8px",
          marginTop: "14px",
        }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              style={{
                width: i === current ? "22px" : "8px",
                height: "8px",
                borderRadius: "100px",
                backgroundColor: i === current ? DARK : "#d1d5db",
                border: "none", cursor: "pointer", padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
