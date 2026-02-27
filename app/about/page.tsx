import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";

export default function AboutPage() {
  const leadershipAreas = [
    "Government and regulatory environments",
    "Infrastructure and utilities",
    "Environmental and public health modelling",
    "Enterprise GIS systems and spatial automation"
  ];

  const methodology = [
    "Problem Definition",
    "Data Integration & Validation",
    "Spatial Modelling & Risk Assessment",
    "Visualisation & Executive Reporting",
    "Strategic Recommendations"
  ];

  return (
    <div className="mx-auto flex max-w-[1700px] flex-col gap-12 px-4 py-8 sm:gap-16 md:gap-24 text-white">
      {/* Hero Section */}
      <Reveal direction="up" width="100%">
        <section className="relative overflow-hidden rounded-[40px] border border-white/5 bg-slate-950 px-8 py-16 md:px-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="/About_Us_4.jpg"
              alt="About GeoDecision Analytics"
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#041d3d] via-[#041d3d]/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <Reveal direction="left" delay={0.4}>
              <div className="space-y-3">
                <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#c40902] bg-[#c40902]/10 px-4 py-1.5 rounded-full border border-[#c40902]/20">
                  Who We Are
                </p>
                <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.1]">
                  About <span className="text-gradient">GeoDecision</span> Analytics
                </h1>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.6}>
              <p className="text-xl leading-relaxed text-slate-100 font-bold max-w-2xl text-shadow">
                GeoDecision Analytics is a spatial intelligence consultancy focused on transforming complex geospatial data into clear, defensible, decision-ready insight.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.8}>
              <p className="text-lg leading-relaxed text-slate-300 max-w-xl">
                We operate at the intersection of GIS, environmental modelling, and strategic planning — supporting organisations navigating regulatory, infrastructure, and environmental complexity.
              </p>
            </Reveal>
          </div>
        </section>
      </Reveal>

      {/* Core Principles Section with dual images */}
      <section className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal direction="left" width="100%">
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="h-1 w-20 bg-[#c40902] rounded-full mb-6" />
              <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
                Precision. Insight. <span className="text-[#c40902]">Confidence.</span>
              </h2>
            </div>
            <div className="space-y-8 text-xl leading-relaxed text-slate-400">
              <p className="text-white font-black text-xl border-l-4 border-cyan-500 pl-6 py-2 bg-white/5 rounded-r-xl">
                GeoDecision Analytics was founded on the principle that spatial data should enable confident, evidence-based decisions — not confusion.
              </p>
              <p className="font-medium">
                We integrate geospatial analysis, environmental intelligence, and structured decision frameworks to deliver insights that are technically rigorous and strategically actionable.
              </p>
              <p className="font-medium">
                Our work bridges the gap between advanced spatial modelling and real-world decisionmaking — ensuring outcomes are transparent, defensible, and aligned with organisational objectives.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" width="100%">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-[320px] overflow-hidden rounded-3xl border border-white/5 glass-card transform hover:-translate-y-2 transition-transform duration-500">
                <Image src="/About_Us_3.jpg" alt="Principles 1" fill className="object-cover" />
              </div>
              <div className="relative h-[200px] overflow-hidden rounded-3xl border border-white/5 glass-card transform hover:-translate-y-2 transition-transform duration-500">
                <Image src="/Home_4.jpg" alt="Context 1" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="relative h-[200px] overflow-hidden rounded-3xl border border-white/5 glass-card transform hover:-translate-y-2 transition-transform duration-500">
                <Image src="/Service_6.jpg" alt="Context 2" fill className="object-cover" />
              </div>
              <div className="relative h-[320px] overflow-hidden rounded-3xl border border-white/5 glass-card transform hover:-translate-y-2 transition-transform duration-500">
                <Image src="/About_Us_1.jpg" alt="Principles 2" fill className="object-cover" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Our Approach */}
      <Reveal direction="up" width="100%">
        <section className="relative rounded-[40px] border border-white/5 bg-[#041d3d] p-8 md:p-16 lg:p-20 overflow-hidden group">
          <div className="absolute inset-0 opacity-20 transition-opacity duration-1000 group-hover:opacity-30">
            <Image src="/About_Us_2.jpg" alt="Approach Background" fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[10s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041d3d] via-[#041d3d]/80 to-transparent" />
          </div>
          <div className="relative z-10 space-y-12">
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">Our Approach</h2>
              <p className="text-xl text-slate-300 font-bold">At GeoDecision Analytics, we apply a structured methodology to ensure excellence:</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {methodology.map((step, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 0.1}>
                  <div className="flex flex-col h-full gap-6 p-8 glass-card border-white/5 rounded-3xl group/item hover:bg-white/[0.08] transition-all hover:-translate-y-2">
                    <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-[#c40902] text-white text-xl font-black shadow-[0_0_20px_rgba(196,9,2,0.4)]">
                      {idx + 1}
                    </span>
                    <p className="text-xl font-black text-white leading-tight group-hover/item:text-[#c40902] transition-colors">{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="pt-8 flex items-center gap-6">
              <div className="h-px flex-grow bg-white/10" />
              <p className="text-lg font-bold text-[#c40902] italic bg-white/5 px-6 py-2 rounded-full border border-[#c40902]/20">Every engagement is guided by clarity, precision, and measurable impact.</p>
              <div className="h-px flex-grow bg-white/10" />
            </div>
          </div>
        </section>
      </Reveal>

      {/* Leadership & Mission split layout with more visuals */}
      <section className="grid gap-16 lg:grid-cols-2 items-start">
        <Reveal direction="left" width="100%">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">Leadership</h2>
              <p className="text-xl text-slate-400 leading-relaxed font-medium">
                GeoDecision Analytics is led by experienced spatial analysts and environmental researchers with cross-sector expertise in:
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-1">
              {leadershipAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 glass-card border-white/5 rounded-2xl group hover:border-cyan-500/30 transition-all">
                  <div className="h-4 w-4 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
                  <p className="text-lg font-black text-white group-hover:translate-x-2 transition-transform">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" width="100%">
          <div className="space-y-12 h-full flex flex-col justify-center">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/Enterprice_2.jpg" alt="Leadership Visualization" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal direction="up" delay={0.2}>
                <div className="p-8 rounded-3xl glass-card border-white/5 space-y-4">
                  <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 bg-cyan-950/30 px-4 py-1.5 rounded-full border border-cyan-500/20 mb-3">Our Mission</p>
                  <p className="text-2xl font-black text-white leading-tight">To transform spatial complexity into confident decisions.</p>
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.4}>
                <div className="p-8 rounded-3xl glass-card border-white/5 space-y-4">
                  <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 bg-cyan-950/30 px-4 py-1.5 rounded-full border border-cyan-500/20 mb-3">Our Vision</p>
                  <p className="text-lg text-slate-300 font-bold leading-relaxed">To become a trusted advisor in spatial intelligence for organisations globally.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </section>

      {/* How We Work */}
      <Reveal direction="up" width="100%">
        <section className="text-center py-20 border-t border-white/5 space-y-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">How We Work</h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              We combine advanced geospatial platforms, structured analytical methodologies, and sector-specific expertise to deliver solutions aligned with your operational and strategic objectives.
            </p>
            <div className="flex justify-center pt-8">
              <div className="h-px w-40 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
