import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import MenuPreview from "@/components/menu-preview"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <MenuPreview />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
