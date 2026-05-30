import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Our Specials | FRUITIFIED by Kamala",
  description: "Explore our freshly crafted juices and shakes with prices.",
}

const specials = [
  {
    name: "Classic Fruit Bowl",
    subtitle: null,
    description: "A vibrant medley of seasonal fruits, perfectly cut and served fresh daily.",
    price: "₹93.45",
    image: "/images/specials/classic-fruit-bowl.jpeg",
    tag: "Seasonal Pick",
  },
  {
    name: "Creamy Mango Smoothie",
    subtitle: null,
    description: "Thick, luscious mango blended smooth — a true summer indulgence.",
    price: "₹135.45",
    image: "/images/specials/mango-smoothie.jpeg",
    tag: "Summer Favourite",
  },
  {
    name: "Royal Mango Lassi",
    subtitle: null,
    description: "Mango-kissed yoghurt lassi — creamy, chilled and irresistibly rich.",
    price: "₹82.95",
    image: "/images/specials/royal-mango-lassi.jpeg",
    tag: "Refreshing Sip",
  },
  {
    name: "Banana Protein Shake",
    subtitle: null,
    description: "High-fiber oats blended with banana & milk. Wholesome and filling.",
    price: "₹103.95",
    image: "/gallery/Banana-shake.jpeg",
    tag: "High Protein",
  },
  {
    name: "Coconut Refresh Drink",
    subtitle: null,
    description: "Fresh tender coconut water — nature's electrolyte, pure and hydrating.",
    price: "₹82.95",
    image: "/images/specials/coconut-refresh-drink.jpeg",
    tag: "Natural Hydration",
  },
  /* JUICE_HIDDEN_START — restore by un-commenting this object
  {
    name: "Farm Fresh Sapota Juice",
    subtitle: null,
    description: "Naturally sweet sapota blended fresh — rich, earthy and full of goodness.",
    price: "₹103.95",
    image: "/images/specials/sapota-juice-image.jpeg",
    tag: "Farm Fresh",
  },
  JUICE_HIDDEN_END */
]

export default function SpecialsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ backgroundColor: "#faf5eb" }}>
        {/* Hero heading */}
        <div className="pb-16 pt-32 text-center" style={{ backgroundColor: "#faf5eb" }}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Fresh & Natural
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-foreground md:text-5xl">
            Our <span className="text-primary">Specials</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Handcrafted daily with 100% natural ingredients. No preservatives, no added sugar — just pure goodness in every sip.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {specials.map((item) => (
              <div
                key={item.name}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Tag */}
                <span className="absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow">
                  {item.tag}
                </span>

                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover brightness-110 contrast-105 saturate-110 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-bold text-foreground">{item.name}</h2>
                  {item.subtitle && (
                    <p className="mt-0.5 text-xs font-medium text-primary">{item.subtitle}</p>
                  )}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
