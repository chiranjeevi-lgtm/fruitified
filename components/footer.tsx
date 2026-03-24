import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Details Side */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/fruitified-logo-Photoroom.png"
                alt="FRUITIFIED by Kamala logo"
                width={130}
                height={130}
                className="object-contain"
              />
              <span className="flex flex-col leading-tight">
                <span className="text-lg font-bold tracking-wide">FRUITIFIED</span>
                <span className="text-[10px] font-medium uppercase tracking-widest opacity-70">by Kamala</span>
              </span>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed opacity-70">
              Fresh fruit bowls {"&"} juices crafted daily with love by Kamala. Nourishing your
              body, one bowl at a time.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm opacity-80">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+91 89777 22037</span>
              </div>
              <div className="flex items-center gap-3 text-sm opacity-80">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>fruitified2026@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm opacity-80">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>
                  10-3-18, Road to East Marredpally, Tukaram Gate, Secunderabad, Telangana 500026
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="#"
                aria-label="Follow us on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Follow us on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Follow us on Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Map Side */}
          <div className="overflow-hidden rounded-2xl">
            <iframe
              title="FRUITIFIED by Kamala location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1903.0!2d78.51213889!3d17.44661111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2z MTfCsDI2JzQ3LjgiTiA3OMKwMzAnNDMuNyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs opacity-60 sm:flex-row lg:px-8">
          <p>&copy; {new Date().getFullYear()} FRUITIFIED by Kamala. All rights reserved.</p>
          <p>Made with freshness in Secunderabad</p>
        </div>
      </div>
    </footer>
  )
}
