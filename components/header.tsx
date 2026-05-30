"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, Truck, ShoppingBasket } from "lucide-react"
import { useCart } from "./cart-provider"

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/menu", label: "MENU" },
  { href: "/gallery", label: "OUR SPECIALS" },
  { href: "/b2b", label: "B2B" },
  { href: "/gifts", label: "GIFTS" },
  { href: "/careers", label: "CAREERS" },
  { href: "/#contact", label: "CONTACT" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { totalItems } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    const hash = href.includes("#") ? href.split("#")[1] : null
    if (!hash) return
    e.preventDefault()
    const el = document.getElementById(hash)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(href)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}
      style={{ backgroundColor: "#faf5eb" }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/fruitified-logo-Photoroom.png"
            alt="FRUITIFIED by Kamala logo"
            width={115}
            height={115}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center text-[13px] font-bold tracking-wide transition-colors hover:text-[#b5451b] ${
                  isActive
                    ? "text-[#1e3a0f] underline underline-offset-4 decoration-2 decoration-[#1e3a0f]"
                    : "text-[#1e3a0f]"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right-side icons */}
        <div className="hidden items-center gap-2 xl:flex">
          {/* Cart button */}
          <Link
            href="/cart"
            style={{ position: "relative", padding: "8px", display: "flex", alignItems: "center", color: "#1e3a0f" }}
            aria-label="View basket"
          >
            <ShoppingBasket className="h-5 w-5" />
            {totalItems > 0 && (
              <span style={{
                position: "absolute", top: "2px", right: "2px",
                backgroundColor: "#b5451b", color: "#fff",
                fontSize: "9px", fontWeight: 800,
                borderRadius: "100px", minWidth: "16px", height: "16px",
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "0 4px",
              }}>
                {totalItems}
              </span>
            )}
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-background px-3 py-2 shadow-sm">
            <Truck className="h-5 w-5 flex-shrink-0 text-[#1e3a0f]" />
            <div className="leading-tight">
              <p className="text-[9px] font-semibold uppercase tracking-wider text-gray-400">
                DELIVERING
              </p>
              <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#1e3a0f]">
                ACROSS INDIA
              </p>
            </div>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="rounded-md p-2 text-[#1e3a0f] xl:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav
          className="border-t border-gray-100 bg-background px-4 pb-4 xl:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-0.5 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-bold text-[#1e3a0f] transition-colors hover:bg-gray-50 hover:text-[#b5451b]"
                  onClick={(e) => { handleNavClick(e, link.href); setMobileMenuOpen(false) }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-gray-100 pt-3">
              <div className="flex items-center gap-2 px-3">
                <Truck className="h-4 w-4 text-[#1e3a0f]" />
                <span className="text-sm font-bold text-[#1e3a0f]">Delivering in Hyderabad</span>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
