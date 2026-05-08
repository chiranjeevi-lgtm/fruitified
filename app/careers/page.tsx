import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Careers | FRUITIFIED by Kamala",
  description: "Join the FRUITIFIED by Kamala team. Explore open positions and grow with us.",
}

const jobs = [
  {
    title: "Sales & Marketing Manager",
    tagline: "Lead our brand growth with 2+ years of sales and marketing expertise.",
    slug: "sales-marketing-manager",
  },
  {
    title: "Sales & Marketing Intern",
    tagline: "Kick-start your career by supporting our sales and marketing campaigns.",
    slug: "sales-marketing-intern",
  },
]

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="bg-card pb-16 pt-32 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Join Our Team
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-foreground md:text-5xl">
            Open <span className="text-primary">Positions</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We're growing fast and looking for passionate people to join the FRUITIFIED family.
          </p>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
          <div className="flex flex-col gap-6">
            {jobs.map((job) => (
              <div
                key={job.slug}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h2 className="text-xl font-bold text-foreground">{job.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{job.tagline}</p>
                </div>
                <Link
                  href={`/careers/${job.slug}`}
                  className="shrink-0 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
