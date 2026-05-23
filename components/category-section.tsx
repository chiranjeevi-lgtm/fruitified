"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  {
    name: "FRUIT\nBOWLS",
    href: "/menu",
    image: "/images/menu-bowl-1.jpg",
    bg: "#fce8e8",
  },
  {
    name: "COLD PRESSED\nJUICES",
    href: "/menu",
    image: "/images/menu-juice-1.jpg",
    bg: "#fef9e0",
  },
  {
    name: "SMOOTHIE\nBOWLS",
    href: "/menu",
    image: "/images/menu-bowl-2.jpg",
    bg: "#e8f4e8",
  },
  {
    name: "HEALTHY\nSNACKS",
    href: "/menu",
    image: "/images/menu-bowl-3.jpg",
    bg: "#feeee0",
  },
  {
    name: "GIFT\nBOXES",
    href: "/menu",
    image: "/images/menu-juice-2.jpg",
    bg: "#ede8f8",
  },
]

export default function CategorySection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" })
  }

  return (
    <section className="py-12 lg:py-16" style={{ backgroundColor: "#faf5eb" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Title */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="text-[#4a7c2f]">❧</span>
          <h2 className="text-2xl font-extrabold tracking-widest text-[#1e3a0f] uppercase">
            Shop By Category
          </h2>
          <span className="text-[#4a7c2f]">❧</span>
        </div>

        {/* Carousel wrapper */}
        <div className="relative flex items-center gap-3">

          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex flex-1 gap-4 overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="flex-shrink-0 w-[240px] rounded-2xl overflow-hidden flex items-center gap-3 px-4 py-4"
                style={{ backgroundColor: cat.bg }}
              >
                {/* Image */}
                <div className="flex-shrink-0 w-[80px] h-[80px] rounded-xl overflow-hidden relative">
                  <Image
                    src={cat.image}
                    alt={cat.name.replace("\n", " ")}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <p className="text-[15px] font-extrabold leading-tight text-[#1e3a0f] whitespace-pre-line">
                    {cat.name}
                  </p>
                  <Link
                    href={cat.href}
                    className="mt-2 text-[11px] font-bold text-[#b5451b] hover:underline tracking-wide"
                  >
                    &gt; SHOP NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
