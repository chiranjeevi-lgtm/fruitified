import { Apple, Droplets, Truck, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Apple,
    title: "100% Fresh Fruits",
    description:
      "We source the freshest seasonal fruits daily from trusted local farms.",
  },
  {
    icon: Droplets,
    title: "No Added Sugar",
    description:
      "Our bowls and juices are naturally sweet — zero refined sugar, zero guilt.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "From our kitchen to your doorstep in under 30 minutes, always on time.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Preparation",
    description:
      "Prepared in a FSSAI-certified kitchen with the highest hygiene standards.",
  },
]

export default function Features() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Why Choose <span className="text-primary">FreshBowl</span>?
          </h2>
          <p className="mt-3 text-muted-foreground">
            We believe healthy food should taste amazing and arrive fast.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
