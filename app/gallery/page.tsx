import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Our Specials | FRUITIFIED by Kamala",
  description: "Explore our freshly crafted juices and shakes with prices.",
}

const specials = [
  {
    name: "ABC Juice",
    subtitle: "Apple, Beetroot & Carrot blend",
    description: "A natural immunity booster rich in antioxidants and essential nutrients.",
    price: "₹199",
    image: "/gallery/ABC-juice.jpeg",
    tag: "Bestseller",
  },
  {
    name: "Watermelon Splash",
    subtitle: null,
    description: "Hydrating and cooling summer refresher.",
    price: "₹79",
    image: "/gallery/WaterMelon-juice.jpeg",
    tag: "Summer Special",
  },
  {
    name: "Classic Orange Juice",
    subtitle: null,
    description: "Freshly extracted orange juice, naturally sweet & tangy.",
    price: "₹79",
    image: "/gallery/Classic-Orange-Juice.jpeg",
    tag: "Fan Favourite",
  },
  {
    name: "Pomegranate Power",
    subtitle: null,
    description: "100% fresh pomegranate juice, rich in antioxidants.",
    price: "₹279",
    image: "/gallery/Pomegranate-juice.jpeg",
    tag: "Premium",
  },
  {
    name: "Banana Protein Shake",
    subtitle: null,
    description: "High-fiber oats blended with banana & milk. Wholesome and filling.",
    price: "₹199",
    image: "/gallery/Banana-shake.jpeg",
    tag: "High Protein",
  },
]

export default function SpecialsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero heading */}
        <div className="bg-card py-16 text-center">
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
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="text-xl font-bold text-foreground">{item.name}</h2>
                      {item.subtitle && (
                        <p className="mt-0.5 text-xs font-medium text-primary">{item.subtitle}</p>
                      )}
                    </div>
                    <span className="shrink-0 rounded-2xl bg-primary/10 px-4 py-1.5 text-lg font-extrabold text-primary">
                      {item.price}
                    </span>
                  </div>
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
