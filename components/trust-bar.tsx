import { Leaf, Sprout, ShieldCheck, Users, Gift } from "lucide-react"

const items = [
  {
    icon: Leaf,
    title: "No Preservatives",
    subtitle: "No Artificial Flavors",
  },
  {
    icon: Sprout,
    title: "100% Natural",
    subtitle: "Just Real Ingredients",
  },
  {
    icon: ShieldCheck,
    title: "Immunity Boosting",
    subtitle: "Packed with Nutrition",
  },
  {
    icon: Users,
    title: "Loved by 10,000+",
    subtitle: "Happy Customers",
  },
]

export default function TrustBar() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch w-full" style={{ backgroundColor: "#ede8d8" }}>

      {/* First four items with dividers */}
      {items.map((item, i) => {
        const Icon = item.icon
        return (
          <div
            key={item.title}
            className="flex flex-1 items-center gap-4 px-6 py-5"
            style={ i < items.length - 1 ? { borderRight: "1px solid #b8d484" } : {} }
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[#4a7c2f]/30 bg-white/60">
              <Icon className="h-5 w-5 text-[#4a7c2f]" />
            </div>
            <div className="leading-tight">
              <p className="text-[13px] font-bold text-[#1e3a0f]">{item.title}</p>
              <p className="text-[11px] text-gray-500">{item.subtitle}</p>
            </div>
          </div>
        )
      })}

      {/* FREE SHIPPING — dark green accent block */}
      <div className="flex flex-shrink-0 items-center gap-3 bg-[#4a7c2f] px-7 py-5 sm:min-w-[200px]">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
          <Gift className="h-5 w-5 text-white" />
        </div>
        <div className="leading-tight">
          <p className="text-[13px] font-extrabold text-white">FREE SHIPPING</p>
          <p className="text-[11px] text-white/80">On orders above ₹499</p>
        </div>
      </div>

    </div>
  )
}
