import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CareersBanner() {
  return (
    <section style={{ backgroundColor: "#faf5eb", borderTop: "1px solid #e0d8c8" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left — content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <div style={{ marginBottom: "14px" }}>
                <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#b5451b" }}>
                  Join Our Team
                </span>
              </div>
              <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 900, lineHeight: 1.1, color: "#1e3a0f", marginBottom: "14px" }}>
                Grow With <span style={{ color: "#b5451b" }}>Fruitified</span><br />by Kamala
              </h2>
              <p style={{ fontSize: "13px", lineHeight: 1.8, color: "#6b7280", maxWidth: "400px" }}>
                We're a fast-growing fruit brand looking for passionate people who love fresh ideas, real work, and a team that feels like family.
              </p>
            </div>

            <Link href="/careers" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "#1e3a0f", color: "#fff",
              fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em",
              padding: "13px 28px", borderRadius: "100px",
              textDecoration: "none", alignSelf: "flex-start",
            }}>
              View Open Positions <ArrowRight style={{ width: 13, height: 13 }} />
            </Link>
          </div>

          {/* Right — image */}
          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #e0d8c8" }}>
            <Image
              src="/images/join-us-final.jpeg"
              alt="Join the Fruitified team"
              width={700} height={500}
              style={{ width: "100%", height: "auto", display: "block" }}
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
