import Image from "next/image"


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

        {/* Juice Highlight */}
        <div className="mb-12 flex flex-col items-center gap-6 rounded-2xl bg-background p-8 shadow-sm md:flex-row md:gap-10">
          <div className="relative h-52 w-52 shrink-0 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/fruitified-orange.jpeg"
              alt="Fruitified orange juice"
              fill
              className="object-cover"
              sizes="208px"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground">Pure. Fresh. Delivered.</h3>
            <p className="mt-2 text-muted-foreground">
              Cold-pressed juices and handcrafted fruit bowls made daily with 100% natural ingredients — no sugar, no preservatives, just goodness.
            </p>
            <a
              href="/menu"
              className="mt-5 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110"
            >
              View Full Menu →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
