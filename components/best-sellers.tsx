'use client'
import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  { name: "Classic Fruit Bowl",      price: "₹299",   tag: "Bestseller", image: "/images/menu-bowl-1.jpg",                      href: "/menu" },
  // JUICE_HIDDEN_START — restore next line when juices are re-enabled
  // { name: "Immunity Booster Juice",  price: "₹199",   tag: "Bestseller", image: "/gallery/ABC-juice.jpeg",                       href: "/menu" },
  // JUICE_HIDDEN_END
  { name: "Mango Smoothie Bowl",     price: "₹349",   tag: "",           image: "/images/menu-bowl-2.jpg",                      href: "/menu" },
  { name: "Premium Alphonso Box",    price: "₹1,299", tag: "",           image: "/gallery/Mango-juice.jpeg",                    href: "/gifts" },
  { name: "Gift Box – Medium",       price: "₹699",   tag: "",           image: "/images/gifts/festive-mango-wrapper.jpeg",     href: "/gifts" },
]

export default function BestSellers() {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (dir: "left" | "right") =>
    ref.current?.scrollBy({ left: dir === "right" ? 260 : -260, behavior: "smooth" })

  return (
    <section className="py-14 lg:py-20" style={{ backgroundColor: "#faf5eb" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <div className="mb-10 flex items-center justify-center gap-3">
          <span className="text-[#4a7c2f] text-lg">❧</span>
          <h2 className="text-2xl font-extrabold tracking-widest text-[#1e3a0f] uppercase">
            Our Best Sellers
          </h2>
          <span className="text-[#4a7c2f] text-lg">❧</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          {/* Cards */}
          <div
            ref={ref}
            className="flex flex-1 gap-4 overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollSnapType: "x mandatory" }}
          >
            {products.map((p) => (
              <div
                key={p.name}
                className="group flex-shrink-0 rounded-2xl overflow-hidden"
                style={{
                  width: "220px",
                  scrollSnapAlign: "start",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e8dcc8",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "180px" }}>
                  <Image
                    src={p.image} alt={p.name} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="220px"
                  />
                  {p.tag && (
                    <div
                      className="absolute top-3 left-3 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-white"
                      style={{ backgroundColor: "#b5451b" }}
                    >
                      {p.tag}
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col gap-2">
                  <p className="text-[13px] font-extrabold leading-tight text-[#1e3a0f]">{p.name}</p>
                  <p className="text-[15px] font-extrabold text-[#b5451b]">{p.price}</p>
                  <a
                    href="https://wa.me/918977722037"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center justify-center rounded-lg py-2 text-[11px] font-extrabold uppercase tracking-wide text-white transition-all hover:brightness-110"
                    style={{ backgroundColor: "#1e3a0f" }}
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>

      </div>
      <style>{`div::-webkit-scrollbar{display:none}`}</style>
    </section>
  )
}
