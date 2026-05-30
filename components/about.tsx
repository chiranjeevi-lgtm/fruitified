import { Leaf, Heart, MapPin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28" style={{ backgroundColor: "#faf5eb" }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            About <span className="text-primary">FRUITIFIED</span> by Kamala
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary/40" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            FRUITIFIED by Kamala is a cloud kitchen born out of a passion for healthy,
            delicious food. We handcraft every fruit bowl and cold-press every juice
            with love, using only the freshest seasonal fruits — no preservatives,
            no artificial flavours, and absolutely no added sugar.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Based out of E Marredpally, Secunderabad, our commitment is simple:
            deliver nature{"'"}s goodness straight to your door, fast and fresh.
            Every ingredient is carefully selected, every recipe thoughtfully
            designed to nourish your body and delight your taste buds.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center rounded-2xl border border-border bg-card px-6 py-8 text-center shadow-sm">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/15 text-secondary">
              <Leaf className="h-9 w-9" />
            </div>
            <h3 className="text-base font-semibold text-foreground">100% Natural</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              No preservatives, no artificial colours
            </p>
          </div>
          <div className="flex flex-col items-center rounded-2xl border border-border bg-card px-6 py-8 text-center shadow-sm">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Heart className="h-9 w-9" />
            </div>
            <h3 className="text-base font-semibold text-foreground">Made with Love</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Handcrafted daily by our expert team
            </p>
          </div>
          <div className="flex flex-col items-center rounded-2xl border border-border bg-card px-6 py-8 text-center shadow-sm">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-accent/30 text-accent-foreground">
              <MapPin className="h-9 w-9" />
            </div>
            <h3 className="text-base font-semibold text-foreground">E Marredpally, Secunderabad</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Delivering freshness across the twin cities
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
