"use client"

import Image from "next/image"
import Link from "next/link"
import { Leaf, Apple, Sparkles, Truck, LayoutGrid } from "lucide-react"

// VIDEO SLIDE DISABLED — re-enable when video is hosted on CDN
// Imports needed when re-enabling: useState, useEffect, useRef from "react"
// motion, AnimatePresence from "framer-motion"
// Also restore: BANNER_DURATION, slideVariants, slide state, timerRef,
// handleVideoEnded, goTo, AnimatePresence wrapper, video slide JSX, nav dots

const trustItems = [
  { icon: Leaf,     title: "100% Fresh",  subtitle: "No Preservatives" },
  { icon: Apple,    title: "Handpicked",  subtitle: "Daily"            },
  { icon: Sparkles, title: "Hygienic",    subtitle: "& Safe"           },
  { icon: Truck,    title: "Delivered",   subtitle: "On Time"          },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ height: "100vh", backgroundColor: "#faf5eb", paddingTop: "120px" }}
    >
      <div
        className="mx-auto flex max-w-[1400px] flex-col lg:flex-row lg:items-stretch px-6 lg:px-10"
        style={{ height: "100%" }}
      >
        {/* Left text */}
        <div className="flex-1 lg:max-w-[50%] flex flex-col justify-center pb-14 text-center lg:text-left">

          <div className="inline-flex items-center gap-1.5 mb-5 justify-center lg:justify-start">
            <Leaf className="h-3.5 w-3.5 text-[#4a7c2f]" />
            <span className="text-[11px] font-extrabold tracking-[0.18em] text-[#4a7c2f] uppercase">
              Pure. Fresh. Delivered.
            </span>
          </div>

          <h1 className="leading-none">
            <span className="block text-[2.6rem] md:text-[3.4rem] lg:text-[3.9rem] font-extrabold tracking-tight text-[#1e3a0f]">
              REAL FRUITS.
            </span>
            <span className="block text-[2.6rem] md:text-[3.4rem] lg:text-[3.9rem] font-extrabold tracking-tight text-[#b5451b] mt-1">
              REAL GOODNESS.
            </span>
          </h1>

          <svg viewBox="0 0 220 16" className="mt-2 w-44 md:w-52 mx-auto lg:mx-0" aria-hidden="true">
            <path d="M0 12 Q27 2 55 12 Q82 22 110 12 Q137 2 165 12 Q192 22 220 12"
              stroke="#b5451b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-600 mx-auto lg:mx-0">
            Wholesome fruit bowls, cold-pressed juices &amp; healthy snacks made fresh
            daily with love and zero preservatives.
          </p>

          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-3">
            {trustItems.map(({ icon: Icon, title, subtitle }) => (
              <div key={title} className="flex items-center gap-2">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[#4a7c2f]/30 bg-[#4a7c2f]/10">
                  <Icon className="h-4 w-4 text-[#4a7c2f]" />
                </div>
                <div className="leading-tight text-left">
                  <p className="text-[12px] font-bold text-[#1e3a0f]">{title}</p>
                  <p className="text-[11px] text-gray-500">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-800 px-7 py-3 text-sm font-extrabold tracking-widest text-gray-800 transition-all hover:bg-gray-800 hover:text-white"
            >
              EXPLORE MENU <LayoutGrid className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="relative flex-1 min-h-[400px]">
          <div
            className="absolute z-10 flex items-center justify-center"
            style={{
              inset: "-8% -10% -8% -10%",
              WebkitMaskImage: "radial-gradient(ellipse 88% 92% at 52% 54%, black 38%, transparent 78%)",
              maskImage:        "radial-gradient(ellipse 88% 92% at 52% 54%, black 38%, transparent 78%)",
            }}
          >
            <Image
              src="/images/hero-banner-image.jpeg"
              alt="Fresh fruit bowls and cold-pressed juices by Fruitified by Kamala"
              width={900} height={760}
              className="h-full w-full object-contain"
              priority
              sizes="(max-width: 1024px) 90vw, 55vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
