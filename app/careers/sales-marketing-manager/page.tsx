import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Sales & Marketing Manager | Careers | FRUITIFIED by Kamala",
  description: "Apply for the Sales & Marketing Manager role at FRUITIFIED by Kamala.",
}

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeyeSkvSlwpHXicWv-nK1Xkkjqp-WykIt0VgK174jqe833lqQ/viewform"

export default function SalesMarketingManagerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="pb-12 pt-32 text-center" style={{ backgroundColor: "#faf5eb" }}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Careers at FRUITIFIED
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-foreground md:text-5xl">
            Sales & Marketing <span className="text-primary">Manager</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Full-time · Hyderabad · 2+ Years Experience
          </p>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-14 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">

            <Section title="About the Role">
              <p>
                We're looking for a driven Sales & Marketing Manager to lead our brand's growth
                strategy. You'll own end-to-end marketing campaigns, manage a small team, and work
                directly with the founders to expand FRUITIFIED's reach across Hyderabad and beyond.
              </p>
            </Section>

            <Section title="Key Responsibilities">
              <ul className="list-disc space-y-2 pl-5">
                <li>Develop and execute sales strategies to acquire new wholesale and retail clients.</li>
                <li>Plan and manage digital marketing campaigns across Instagram, Swiggy, Zomato, and Google.</li>
                <li>Track, analyse, and report on campaign performance and sales metrics.</li>
                <li>Coordinate with operations to ensure promotions align with production capacity.</li>
                <li>Build and maintain relationships with corporate clients, gyms, and wellness centres.</li>
                <li>Manage and mentor junior marketing staff or interns.</li>
                <li>Identify market trends and competitor activity to inform strategy.</li>
              </ul>
            </Section>

            <Section title="Requirements">
              <ul className="list-disc space-y-2 pl-5">
                <li>Minimum 2 years of experience in sales and/or marketing (F&B industry preferred).</li>
                <li>Proven track record of meeting or exceeding sales targets.</li>
                <li>Strong understanding of digital marketing, social media, and SEO basics.</li>
                <li>Excellent communication and negotiation skills in English and Kannada/Hindi.</li>
                <li>Proficiency with tools such as Meta Ads Manager, Google Analytics, or similar.</li>
                <li>Self-starter with strong organisational and leadership skills.</li>
              </ul>
            </Section>

            <Section title="What We Offer">
              <ul className="list-disc space-y-2 pl-5">
                <li>Competitive salary + performance-based incentives.</li>
                <li>Fast-growing startup environment with direct impact on business outcomes.</li>
                <li>Flexible working hours and a collaborative team culture.</li>
                <li>Free FRUITIFIED products — because perks should be delicious.</li>
              </ul>
            </Section>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110 sm:w-auto"
              >
                Apply Now
              </a>
              <Link
                href="/careers"
                className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
              >
                ← Back to Careers
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="mb-3 text-lg font-bold text-foreground">{title}</h2>
      <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  )
}
