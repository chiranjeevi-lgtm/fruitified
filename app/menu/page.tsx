import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Menu | FRUITIFIED by Kamala",
  description: "Explore our full menu of fresh fruit bowls and cold-pressed juices.",
}

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Our <span className="text-primary">Menu</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            Fresh, handcrafted daily with 100% natural ingredients.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/fruitified_menu.jpg"
            alt="Fruitified by Kamala full menu"
            width={1200}
            height={900}
            className="w-full object-contain"
            priority
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
