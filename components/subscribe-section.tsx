import Image from "next/image"

export default function SubscribeSection() {
  return (
    <section style={{ backgroundColor: "#1e3a0f" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-12">
        <div className="grid items-center gap-8 lg:grid-cols-12">

          {/* Text block */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] font-extrabold leading-tight text-white">
              Subscribe &amp; Save More
            </h2>
            <p className="text-[13px] leading-relaxed text-white/60">
              Get fresh fruits, juices &amp; more delivered to your doorstep. Every week. Hassle-free.
            </p>
          </div>

          {/* Badge */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div
              className="flex h-[90px] w-[90px] flex-col items-center justify-center rounded-full text-center"
              style={{ border: "2px dashed rgba(255,255,255,0.3)" }}
            >
              <p className="text-[10px] font-bold uppercase tracking-wide text-white/60 leading-tight">Upto</p>
              <p className="text-[22px] font-extrabold leading-none text-white">15%</p>
              <p className="text-[10px] font-bold uppercase tracking-wide text-white/60 leading-tight">OFF</p>
            </div>
          </div>

          {/* Input + button */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-full bg-white/10 px-5 py-3 text-[13px] text-white placeholder:text-white/40 outline-none border border-white/20 focus:border-white/50"
            />
            <button
              className="rounded-full px-6 py-3 text-[12px] font-extrabold uppercase tracking-widest text-white transition-all hover:brightness-110 whitespace-nowrap"
              style={{ backgroundColor: "#b5451b" }}
            >
              Subscribe Now
            </button>
          </div>

          {/* Image */}
          <div className="lg:col-span-2 flex justify-end">
            <div
              className="relative"
              style={{ width: "120px", height: "100px" }}
            >
              <Image
                src="/images/menu-bowl-1.jpg"
                alt="Fresh fruit bowl"
                fill
                className="object-cover"
                style={{
                  borderRadius: "50%",
                  WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 80%)",
                  maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 80%)",
                }}
                sizes="120px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
