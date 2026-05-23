import Link from "next/link"
import { Gift, Building2, Leaf, ArrowRight, CheckCircle2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Mangoes | FRUITIFIED by Kamala",
  description: "Premium Banganapally mangoes — gift packs and B2B bulk orders available.",
}

const highlights = [
  "Sourced directly from Andhra Pradesh farms",
  "Handpicked at peak ripeness",
  "No artificial ripening agents",
  "Delivered fresh to your door",
]

const giftPacks = [
  {
    name: "Classic Box",
    weight: "3 kg",
    desc: "Perfect for family gifting — a thoughtful taste of the season.",
    price: "₹ 499",
  },
  {
    name: "Premium Box",
    weight: "6 kg",
    desc: "Our most popular choice for corporate and festive gifting.",
    price: "₹ 949",
  },
  {
    name: "Royal Box",
    weight: "12 kg",
    desc: "Grand gifting for bulk orders and special occasions.",
    price: "₹ 1,799",
  },
]

const b2bPerks = [
  "Bulk pricing starting at 50 kg",
  "Consistent supply through mango season",
  "Custom packaging with your branding",
  "Dedicated account manager",
  "Flexible delivery schedules",
]

export default function MangoesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="bg-card pb-16 pt-32 text-center">
          <Badge className="mb-4">Season 2025</Badge>
          <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">
            The King of Mangoes —{" "}
            <span className="text-primary">Banganapally</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Golden, fibre-free, and irresistibly sweet. We bring you the finest Banganapally
            mangoes from Andhra Pradesh — available as gift packs and B2B bulk orders.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#gift-packs"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110"
            >
              Shop Gift Packs
            </Link>
            <Link
              href="#b2b"
              className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
            >
              B2B Enquiry
            </Link>
          </div>
        </section>

        {/* Why Banganapally */}
        <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Why Banganapally
              </p>
              <h2 className="mt-2 text-3xl font-bold text-foreground">
                Nature's finest, straight from the orchard
              </h2>
              <p className="mt-4 text-muted-foreground">
                Banganapally mangoes — also called Safeda — are celebrated for their large size,
                thin skin, minimal fibre, and rich honey-sweet flavour. Grown under the sun of
                Kurnool and Nandyal districts, every fruit carries generations of farming tradition.
              </p>
              <ul className="mt-6 space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Placeholder image block */}
            <div className="flex items-center justify-center rounded-2xl border border-border bg-muted">
              <div className="py-20 text-center text-muted-foreground">
                <Leaf className="mx-auto mb-3 h-12 w-12 opacity-30" />
                <p className="text-sm">Mango photo coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gift Packs */}
        <section id="gift-packs" className="bg-card py-16">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Gift Packs
              </p>
              <h2 className="mt-2 text-3xl font-bold text-foreground">
                Share the sweetness
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
                Beautifully packed mango boxes — ideal for Eid, Dussehra, corporate gifting,
                and any occasion worth celebrating.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {giftPacks.map((pack) => (
                <div
                  key={pack.name}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Gift className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-foreground">{pack.name}</h3>
                      <Badge variant="secondary">{pack.weight}</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{pack.desc}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-extrabold text-primary">{pack.price}</span>
                    <Link
                      href="/#contact"
                      className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                    >
                      Order <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* B2B */}
        <section id="b2b" className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                B2B
              </p>
              <h2 className="mt-2 text-3xl font-bold text-foreground">
                Bulk orders for businesses
              </h2>
              <p className="mt-4 text-muted-foreground">
                Restaurants, hotels, juice bars, corporate offices, and retailers — we supply
                Banganapally mangoes in bulk with reliable logistics and competitive pricing.
              </p>
              <ul className="mt-6 space-y-3">
                {b2bPerks.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-foreground">
                    <Building2 className="h-4 w-4 shrink-0 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center justify-center rounded-2xl border border-border bg-muted">
              <div className="py-20 text-center text-muted-foreground">
                <Building2 className="mx-auto mb-3 h-12 w-12 opacity-30" />
                <p className="text-sm">B2B photo coming soon</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
