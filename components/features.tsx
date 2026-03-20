import Image from "next/image"
import { Apple, Droplets, Truck, ShieldCheck, Briefcase, UtensilsCrossed, PartyPopper, Heart, Home } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

type ServeItem = Feature & { image: string }

const features: Feature[] = [

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

const serveItems: ServeItem[] = [
  {
    icon: Briefcase,
    title: "Corporate Orders",
    description:
      "Healthy, fresh fruit bowls and juices for your office team — bulk orders made easy.",
    image: "/images/Corporate-Image.jpeg",
  },
  {
    icon: UtensilsCrossed,
    title: "Catering",
    description:
      "We cater to events of all sizes with customised fresh fruit menus.",
    image: "/images/catering-Image.jpeg",
  },
  {
    icon: PartyPopper,
    title: "Party Orders",
    description:
      "Make your celebrations healthier with vibrant fruit platters and juice bars.",
    image: "/images/Party-Image.jpeg",
  },
  {
    icon: Heart,
    title: "Hospitals",
    description:
      "Nutritious fruit options for patients and staff, delivered with care.",
    image: "/images/Hospital-new.jpeg",
  },
  {
    icon: Home,
    title: "Hostels",
    description:
      "Affordable daily fruit subscriptions for hostel residents and students.",
    image: "/images/Hostel-new.jpeg",
  },
]

export default function Features() {
  return (
    <>
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Why Choose <span className="text-primary">Fruitified</span>?
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

    <section className="py-16 lg:py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Who Do We <span className="text-primary">Serve</span>?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Freshness delivered to every doorstep, big or small.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serveItems.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
