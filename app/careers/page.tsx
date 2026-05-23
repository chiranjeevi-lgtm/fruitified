import Link from "next/link"
import { Briefcase, MapPin, Clock, ArrowRight, TrendingUp } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Careers | FRUITIFIED by Kamala",
  description: "Join the FRUITIFIED by Kamala team. Explore open positions and grow with us.",
}

const jobs = [
  {
    title: "Sales & Marketing Manager",
    tagline: "Lead our brand growth strategy and drive revenue through innovative marketing campaigns.",
    slug: "sales-marketing-manager",
    type: "Full-time",
    location: "On-site",
    department: "Sales & Marketing",
    experience: "2+ years",
    tags: ["Brand Strategy", "Team Lead", "Revenue Growth"],
  },
  {
    title: "Sales & Marketing Intern",
    tagline: "Kick-start your career by supporting dynamic sales campaigns and marketing initiatives.",
    slug: "sales-marketing-intern",
    type: "Internship",
    location: "On-site",
    department: "Sales & Marketing",
    experience: "Fresher",
    tags: ["Social Media", "Market Research", "Content"],
  },
]

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="pb-16 pt-32 text-center" style={{ backgroundColor: "#faf5eb" }}>
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {jobs.map((job) => (
              <div
                key={job.slug}
                className="group flex aspect-square flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
              >
                {/* Top section */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <Badge
                    variant={job.type === "Internship" ? "secondary" : "default"}
                    className="text-xs"
                  >
                    {job.type}
                  </Badge>
                </div>

                {/* Middle section */}
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-medium uppercase tracking-widest text-primary">
                    {job.department}
                  </p>
                  <h2 className="text-lg font-bold leading-snug text-foreground">
                    {job.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {job.tagline}
                  </p>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {job.experience}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-3.5 w-3.5" />
                    {job.type}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/careers/${job.slug}`}
                  className="flex items-center justify-between rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                >
                  View Details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
