import Image from "next/image"
import { ArrowRight } from "lucide-react"

const cards = [
  {
    label: "Fruit Bowls",
    color: "#1e3a0f",
    desc: "Colorful, nutritious & perfectly portioned for your healthy lifestyle.",
    image: "/images/menu-bowl-1.jpg",
    bg: "#f0f7eb",
  },
  {
    label: "Cold Pressed Juices",
    color: "#b5451b",
    desc: "Extracted slowly to retain maximum nutrition & taste.",
    image: "/images/menu-juice-1.jpg",
    bg: "#fef6ee",
  },
  {
    label: "Smoothie Bowls",
    color: "#2563eb",
    desc: "Thick, creamy & loaded with superfoods to fuel your day.",
    image: "/images/menu-bowl-2.jpg",
    bg: "#eff6ff",
  },
  {
    label: "Healthy Snacks",
    color: "#7c3aed",
    desc: "Wholesome snacks made with real ingredients & no guilt.",
    image: "/images/menu-bowl-3.jpg",
    bg: "#f5f3ff",
  },
]

export default function PureGoodness() {
  return (
    <section className="py-14 lg:py-20" style={{ backgroundColor: "#faf5eb" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <div className="mb-10 flex items-center justify-center gap-3">
          <span className="text-[#4a7c2f] text-lg">❧</span>
          <h2 className="text-2xl font-extrabold tracking-widest text-[#1e3a0f] uppercase">
            Pure Goodness in Every Bite
          </h2>
          <span className="text-[#4a7c2f] text-lg">❧</span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.label}
              className="group relative overflow-hidden rounded-2xl flex flex-col"
              style={{
                backgroundColor: card.bg,
                border: "1px solid #e8dcc8",
                minHeight: "200px",
              }}
            >
              {/* Floating image — right side */}
              <div
                className="absolute right-0 top-0 bottom-0 w-[48%] transition-transform duration-500 group-hover:scale-105"
                style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "52%" }}
              >
                <Image
                  src={card.image} alt={card.label} fill
                  className="object-cover"
                  style={{
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 35%)",
                    maskImage: "linear-gradient(to right, transparent 0%, black 35%)",
                  }}
                  sizes="15vw"
                />
              </div>

              {/* Text — left side */}
              <div className="relative z-10 flex flex-col gap-3 p-5 pr-[50%]">
                <h3
                  className="text-[14px] font-extrabold leading-tight uppercase tracking-wide"
                  style={{ color: card.color }}
                >
                  {card.label}
                </h3>
                <p className="text-[12px] leading-relaxed text-gray-500">{card.desc}</p>
                <a
                  href="https://wa.me/918977722037"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide transition-gap duration-200"
                  style={{ color: card.color }}
                >
                  Order Now <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
