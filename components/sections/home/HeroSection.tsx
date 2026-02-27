import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_-20%,#0a2e5c,transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c40902]/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-12 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: content */}
          <div className="space-y-8 sm:space-y-10">
            <Reveal direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#c40902] bg-[#c40902]/10 px-4 py-1.5 rounded-full border border-[#c40902]/20">
                  GEODECISION ANALYTICS
                </p>
                <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.1]">
                  Transforming Spatial Data into{" "}
                  <span className="text-gradient">Confident Decisions.</span>
                </h1>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.4}>
              <p className="text-lg sm:text-xl leading-relaxed text-slate-300 max-w-2xl font-medium">
                We partner with governments, infrastructure agencies, environmental
                organisations, and researchers to convert complex spatial data into clear,
                defensible, decision‑ready insights.
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.6}>
              <div className="flex flex-wrap gap-5 pt-4">
                <Link
                  href="/services"
                  className="rounded-full bg-[#c40902] px-10 py-4 text-sm font-black text-white transition-all hover:bg-[#b00802] hover:shadow-[0_0_25px_rgba(196,9,2,0.4)] hover:scale-105"
                >
                  Explore services
                </Link>
                <button className="rounded-full border border-white/10 bg-white/5 px-10 py-4 text-sm font-black text-white transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105">
                  Request a consultation
                </button>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.8}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-white/5">
                {[
                  { label: "Advanced Modeling", sub: "High-fidelity simulations" },
                  { label: "Defensible Data", sub: "Evidence-based frameworks" },
                  { label: "Strategic Insights", sub: "Decision-ready intelligence" }
                ].map((item, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-sm font-black text-white">{item.label}</p>
                    <p className="text-xs text-slate-400 font-bold">{item.sub}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: image side - Robust Container */}
          <div className="relative">
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#c40902]/10 blur-[100px] animate-pulse" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px] animate-pulse delay-700" />

            {/* High Impact Image */}
            <div className="relative group overflow-hidden rounded-[3rem] border border-white/10 glass-card shadow-2xl transition-all duration-700 hover:border-[#c40902]/30">
              <div className="relative aspect-[4/3] w-full bg-slate-900/50">
                <Image
                  src="/Home_3.jpg"
                  alt="GeoDecision Analytics spatial mapping visualization"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />

                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#041d3d]/90 via-[#041d3d]/10 to-transparent" />
                <div className="absolute inset-0 border-[0.5px] border-white/5 rounded-[3rem]" />

                {/* Tech UI Elements - Corner Brackets */}
                <div className="absolute top-10 left-10 h-8 w-8 border-t-2 border-l-2 border-[#c40902]/40 rounded-tl-xl" />
                <div className="absolute bottom-10 right-10 h-8 w-8 border-b-2 border-r-2 border-[#c40902]/40 rounded-br-xl" />

                {/* Scanning line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c40902]/20 to-transparent h-20 w-full -translate-y-full animate-scan" />
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-8 right-8 p-6 glass-card rounded-3xl border border-white/10 shadow-2xl animate-float">
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-[#c40902] shadow-[0_0_12px_rgba(196,9,2,0.8)] animate-pulse" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c40902] leading-none mb-1">DATA PROCESSING</p>
                    <p className="text-base font-black text-white uppercase tracking-wider">SPATIAL ENGINE ACTIVE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}