import Header from "@/components/header"
import Hero from "@/components/hero"
import TrustBar from "@/components/trust-bar"
import ShowcaseCards from "@/components/showcase-cards"
import SpecialsBanner from "@/components/specials-banner"
import B2BBanner from "@/components/b2b-banner"
import FruitsBanner from "@/components/fruits-banner"
import GiftsBanner from "@/components/gifts-banner"
import CareersBanner from "@/components/careers-banner"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <>
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <main>
        <TrustBar />
        <ShowcaseCards />
        <FruitsBanner />
        <SpecialsBanner />
        <B2BBanner />
        <GiftsBanner />
        <CareersBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
