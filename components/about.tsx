import { Leaf, Heart, MapPin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24" style={{ backgroundColor: "#faf5eb" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            About <span className="text-primary">FRUITIFIED</span> by Kamala
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            FRUITIFIED by Kamala is a cloud kitchen born out of a passion for healthy,
            delicious food. We handcraft every fruit bowl and cold-press every juice
            with love, using only the freshest seasonal fruits — no preservatives,
            no artificial flavours, and absolutely no added sugar.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Based out of E Marredpally, Secunderabad, our commitment is simple:
            deliver nature{"'"}s goodness straight to your door, fast and fresh.
            Every ingredient is carefully selected, every recipe thoughtfully
            designed to nourish your body and delight your taste buds.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground">100% Natural</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              No preservatives, no artificial colours
            </p>
          </div>
          <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground">Made with Love</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Handcrafted daily by our expert team
            </p>
          </div>
          <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/30 text-accent-foreground">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground">E Marredpally, Secunderabad</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Delivering freshness across the twin cities
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
