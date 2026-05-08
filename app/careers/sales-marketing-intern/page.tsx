import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Sales & Marketing Intern | Careers | FRUITIFIED by Kamala",
  description: "Apply for the Sales & Marketing Intern role at FRUITIFIED by Kamala.",
}

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeyeSkvSlwpHXicWv-nK1Xkkjqp-WykIt0VgK174jqe833lqQ/viewform"

export default function SalesMarketingInternPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="bg-card pb-12 pt-32 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Careers at FRUITIFIED
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-foreground md:text-5xl">
            Sales & Marketing <span className="text-primary">Intern</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Internship · Hyderabad · Freshers Welcome
          </p>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-14 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">

            <Section title="About the Role">
              <p>
                Kickstart your marketing career with FRUITIFIED! As a Sales & Marketing Intern,
                you'll get hands-on experience across digital marketing, content creation, and
                on-ground sales — working closely with our founding team in a fast-moving startup.
              </p>
            </Section>

            <Section title="Key Responsibilities">
              <ul className="list-disc space-y-2 pl-5">
                <li>Assist in creating and scheduling content for Instagram, Swiggy, and Zomato.</li>
                <li>Support the team in running digital ad campaigns and tracking performance.</li>
                <li>Help with outreach to gyms, offices, and local communities for partnerships.</li>
                <li>Conduct market research and competitor analysis.</li>
                <li>Engage with customers on social media and help manage online reviews.</li>
                <li>Assist at events, pop-ups, and sampling drives as needed.</li>
              </ul>
            </Section>

            <Section title="Requirements">
              <ul className="list-disc space-y-2 pl-5">
                <li>Currently pursuing or recently completed a degree in Marketing, Business, or a related field.</li>
                <li>Passion for social media and digital content — you know your Reels from your Stories.</li>
                <li>Good written and verbal communication skills in English and Kannada/Hindi.</li>
                <li>Eagerness to learn, take initiative, and work in a fast-paced environment.</li>
                <li>Basic knowledge of Canva, Instagram, or Google Docs is a plus.</li>
              </ul>
            </Section>

            <Section title="What We Offer">
              <ul className="list-disc space-y-2 pl-5">
                <li>Stipend provided for the internship duration.</li>
                <li>Real-world exposure to startup marketing from day one.</li>
                <li>Certificate of completion and a strong letter of recommendation on performance.</li>
                <li>Opportunity for a full-time role based on performance.</li>
                <li>Free FRUITIFIED products — the best office perk.</li>
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
