import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-card"
    >
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-4 py-16 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
<h1 className="text-balance text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Fresh Fruit Bowls{" "}
            <span className="text-primary">{"&"}</span> Juices by{" "}
            <span className="text-secondary">FRUITIFIED</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Handcrafted by Kamala with 100% natural fruits. No preservatives, no added
            sugar — just pure, refreshing goodness delivered fresh to your door in Secunderabad.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="#menu"
              className="rounded-lg border-2 border-primary bg-primary px-8 py-3.5 text-center font-semibold text-primary-foreground shadow-md transition-all hover:brightness-110"
            >
              View Menu
            </Link>
            <Link
              href="#contact"
              className="rounded-lg border-2 border-secondary px-8 py-3.5 text-center font-semibold text-secondary transition-all hover:bg-secondary hover:text-secondary-foreground"
            >
              Order Now
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-2xl lg:max-w-lg">
            <Image
              src="/images/hero-bowl.jpg"
              alt="A vibrant fresh fruit bowl with strawberries, blueberries, mango, kiwi, and granola"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-hidden="true"
        >
          <path
            d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
