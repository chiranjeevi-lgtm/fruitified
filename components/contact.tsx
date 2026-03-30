"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch("https://formspree.io/f/xlgobejn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
        setTimeout(() => setSubmitted(false), 4000)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ready to order? Reach out to us anytime.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 rounded-xl border border-border bg-background px-5 py-4 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Phone</p>
                <Link
                  href="tel:+918977722037"
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  +91 89777 22037
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-border bg-background px-5 py-4 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</p>
                <Link
                  href="mailto:fruitified2026@gmail.com"
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  fruitified2026@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-background px-5 py-4 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/30 text-accent-foreground">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-foreground">
                  10-3-18, Road to East Marredpally,<br />
                  Tukaram Gate, Secunderabad, Telangana 500026
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-foreground">Send us a Message</h3>

            {submitted ? (
              <div className="rounded-lg bg-green-50 p-4 text-green-700">
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {error && (
                  <div className="rounded-lg bg-red-50 p-3 text-red-700 text-sm">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-xs font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-9 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-xs font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-9 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-xs font-medium text-foreground">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-9 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-xs font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your order or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="text-sm"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-sm font-semibold hover:brightness-110 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
