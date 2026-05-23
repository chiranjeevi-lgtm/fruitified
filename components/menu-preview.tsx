import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const menuItems = [
  {
    category: "Seasonal Special",
    title: "Mango Juice",
    description: "Luscious fresh mango juice — sweet, rich, and bursting with tropical flavour. No sugar added.",
    image: "/gallery/Mango-juice.jpeg",
    tag: "Best Seller",
    tagColor: "#b5451b",
  },
  {
    category: "Cold Pressed",
    title: "Classic Orange Juice",
    description: "Freshly extracted orange juice, naturally sweet & tangy with zero preservatives.",
    image: "/gallery/Classic-Orange-Juice.jpeg",
    tag: "Fan Favourite",
    tagColor: "#4a7c2f",
  },
  {
    category: "Immunity Booster",
    title: "ABC Juice",
    description: "Apple, Beetroot & Carrot blend — packed with antioxidants and natural goodness.",
    image: "/gallery/ABC-juice.jpeg",
    tag: "Bestseller",
    tagColor: "#b5451b",
  },
  {
    category: "Protein Shake",
    title: "Banana Protein Shake",
    description: "High-fibre oats blended with banana & milk — wholesome, filling and naturally energising.",
    image: "/gallery/Banana-shake.jpeg",
    tag: "Popular",
    tagColor: "#4a7c2f",
  },
]

export default function MenuPreview() {
  return (
    <section id="menu" className="py-16 lg:py-24" style={{ backgroundColor: "#faf5eb" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl" style={{ color: "#1e3a0f" }}>
            Our <span style={{ color: "#b5451b" }}>Menu</span>
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Crafted daily with the freshest ingredients — pure, natural & delicious.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">

          {/* Featured large card — left */}
          <div
            className="group relative overflow-hidden rounded-3xl lg:col-span-5"
            style={{ minHeight: "480px" }}
          >
            <Image
              src={menuItems[0].image}
              alt={menuItems[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(10,28,6,0.88) 0%, rgba(10,28,6,0.2) 60%, transparent 100%)" }}
            />
            {/* Tag */}
            <div className="absolute top-5 left-5">
              <span
                className="rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white"
                style={{ backgroundColor: menuItems[0].tagColor }}
              >
                {menuItems[0].tag}
              </span>
            </div>
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.6)" }}>
                {menuItems[0].category}
              </p>
              <h3 className="text-2xl font-extrabold text-white">{menuItems[0].title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                {menuItems[0].description}
              </p>
              <a
                href="https://wa.me/918977722037"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-[12px] font-bold text-white transition-all hover:gap-3"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Order Now <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right side — 3 smaller cards in a stacked column */}
          <div className="flex flex-col gap-5 lg:col-span-7">

            {/* Top row — 2 side-by-side cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {menuItems.slice(1, 3).map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl"
                  style={{ minHeight: "220px" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 30vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(10,28,6,0.85) 0%, rgba(10,28,6,0.15) 65%, transparent 100%)" }}
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white"
                      style={{ backgroundColor: item.tagColor }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {item.category}
                    </p>
                    <h3 className="text-[14px] font-extrabold leading-tight text-white">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom wide card */}
            <div
              className="group relative overflow-hidden rounded-3xl"
              style={{ minHeight: "220px" }}
            >
              <Image
                src={menuItems[3].image}
                alt={menuItems[3].title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, rgba(10,28,6,0.85) 0%, rgba(10,28,6,0.3) 55%, transparent 100%)" }}
              />
              <div className="absolute top-5 left-5">
                <span
                  className="rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white"
                  style={{ backgroundColor: menuItems[3].tagColor }}
                >
                  {menuItems[3].tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 p-5 top-0 flex flex-col justify-end">
                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {menuItems[3].category}
                </p>
                <h3 className="text-[17px] font-extrabold leading-tight text-white">{menuItems[3].title}</h3>
                <p className="mt-1 text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                  {menuItems[3].description}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-extrabold tracking-wide text-white shadow-md transition-all hover:brightness-110"
            style={{ backgroundColor: "#8B2E12" }}
          >
            View Full Menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
