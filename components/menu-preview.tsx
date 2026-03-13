import Image from "next/image"

const bowls = [
  {
    name: "Acai Power Bowl",
    description: "Acai, banana, strawberries, blueberries, coconut flakes & granola",
    price: "₹299",
    image: "/images/menu-bowl-1.jpg",
  },
  {
    name: "Tropical Mango Bowl",
    description: "Fresh mango, passion fruit, chia seeds & coconut flakes",
    price: "₹279",
    image: "/images/menu-bowl-2.jpg",
  },
  {
    name: "Green Vitality Bowl",
    description: "Kiwi, dragon fruit, pumpkin seeds & fresh mint",
    price: "₹259",
    image: "/images/menu-bowl-3.jpg",
  },
]

const juices = [
  {
    name: "Sunrise Orange",
    description: "Cold-pressed fresh oranges with a hint of ginger",
    price: "₹149",
    image: "/images/menu-juice-1.jpg",
  },
  {
    name: "Green Detox",
    description: "Spinach, apple, celery & ginger cold-pressed blend",
    price: "₹179",
    image: "/images/menu-juice-2.jpg",
  },
  {
    name: "Watermelon Mint Cooler",
    description: "Fresh watermelon with mint and a squeeze of lime",
    price: "₹129",
    image: "/images/menu-juice-3.jpg",
  },
]

function MenuCard({
  item,
}: {
  item: { name: string; description: string; price: string; image: string }
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
          <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
            {item.price}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default function MenuPreview() {
  return (
    <section id="menu" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Our <span className="text-primary">Menu</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Crafted daily with the freshest ingredients.
          </p>
        </div>

        {/* Fruit Bowls */}
        <div className="mb-12">
          <h3 className="mb-6 text-center text-xl font-semibold text-secondary">
            Fruit Bowls
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bowls.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* Juices */}
        <div>
          <h3 className="mb-6 text-center text-xl font-semibold text-secondary">
            Fresh Juices
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {juices.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
