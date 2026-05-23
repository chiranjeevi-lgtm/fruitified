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
    <section className="py-16 lg:py-24" style={{ backgroundColor: "#faf5eb" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl" style={{ color: "#1e3a0f" }}>
            Why Choose <span style={{ color: "#b5451b" }}>Fruitified</span>?
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            We believe healthy food should taste amazing and arrive fresh.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundColor: "#fffdf7",
                border: "1px solid #e8dcc8",
                boxShadow: "0 2px 12px 0 rgba(30,58,15,0.06)",
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full"
                style={{ backgroundColor: "#4a7c2f" }}
              />

              {/* Icon */}
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: "#4a7c2f18", color: "#4a7c2f" }}
              >
                <feature.icon className="h-5 w-5" />
              </div>

              {/* Text */}
              <div>
                <h3 className="mb-1.5 text-[15px] font-bold" style={{ color: "#1e3a0f" }}>
                  {feature.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-24" style={{ backgroundColor: "#f3ede0" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl" style={{ color: "#1e3a0f" }}>
            Who Do We <span style={{ color: "#b5451b" }}>Serve</span>?
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Freshness delivered to every doorstep, big or small.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serveItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{
                height: "280px",
                boxShadow: "0 4px 20px 0 rgba(30,58,15,0.12)",
              }}
            >
              {/* Full background image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-108"
                style={{ transition: "transform 0.5s ease" }}
              />

              {/* Gradient overlay — always visible, darkens on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to top, rgba(10,28,6,0.82) 0%, rgba(10,28,6,0.3) 55%, transparent 100%)",
                }}
              />

              {/* Icon badge — top left */}
              <div
                className="absolute top-4 left-4 flex h-9 w-9 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(255,253,247,0.18)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.3)" }}
              >
                <item.icon className="h-4 w-4 text-white" />
              </div>

              {/* Text — pinned to bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-[16px] font-extrabold text-white leading-tight">
                  {item.title}
                </h3>
                <p className="mt-1 text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
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
