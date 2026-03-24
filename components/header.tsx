"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Our Specials" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

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
    <header className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-0 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/fruitified-logo-Photoroom.png"
            alt="FRUITIFIED by Kamala logo"
            width={130}
            height={130}
            className="-my-4 object-contain drop-shadow-md"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex translate-y-3" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-semibold text-foreground drop-shadow transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110"
          >
            Order Now
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="rounded-md p-2 text-foreground drop-shadow md:hidden"
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
          className="border-t border-border bg-card px-4 pb-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                  onClick={(e) => { handleNavClick(e, link.href); setMobileMenuOpen(false) }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/#contact"
                className="block rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110"
                onClick={(e) => { handleNavClick(e, "/#contact"); setMobileMenuOpen(false) }}
              >
                Order Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
