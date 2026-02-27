import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";

export default function ServicesPage() {
  const services = [
    {
      title: "Spatial Risk & Suitability Analysis",
      description: "We design analytical frameworks to evaluate constraints, risk, and development suitability across complex environments.",
      bullets: ["Multi-criteria analysis", "Constraint & buffer modelling", "Risk heatmaps", "Scenario comparison"],
      image: "/Service_1.jpg"
    },
    {
      title: "Environmental & Exposure Modelling",
      description: "Advanced spatial modelling integrating environmental data, satellite analytics, and sociodemographic layers.",
      bullets: ["Air pollution (PM2.5) modelling", "Greenspace (EVI/NDVI) analysis", "Environmental-health linkages", "Spatial statistical integration"],
      image: "/Service_2.jpg"
    },
    {
      title: "Enterprise GIS & Data Systems",
      description: "Optimising spatial infrastructure for organisations requiring scalable, secure, and automated GIS environments.",
      bullets: ["ArcGIS Enterprise deployment", "Spatial database architecture", "FME automation workflows", "QA/QC & governance frameworks"],
      image: "/Service_5.jpg"
    },
    {
      title: "Decision Intelligence & Visualisation",
      description: "Translating technical analysis into executive-ready outputs.",
      bullets: ["Dashboards", "Strategic reporting", "Executive map products", "Policy-ready visualisation"],
      image: "/Decision_3.jpg"
    }
  ];

  const methodology = [
    { step: "Problem Definition", desc: "Define decision context and risk variables" },
    { step: "Data Integration & Validation", desc: "Ensure data integrity and governance" },
    { step: "Spatial Modelling & Risk Assessment", desc: "Apply structured analytical frameworks" },
    { step: "Visualisation & Executive Reporting", desc: "Deliver decision-ready outputs" },
    { step: "Strategic Recommendations", desc: "Translate insight into action" }
  ];

  const capabilities = [
    "ArcGIS Pro & ArcGIS Enterprise",
    "Spatial databases (PostGIS / Oracle Spatial)",
    "FME automation workflows",
    "Remote sensing & raster analytics",
    "Python-based spatial modelling",
    "Cloud-enabled geospatial integration"
  ];

  return (
    <div className="mx-auto flex max-w-[1700px] flex-col gap-16 px-4 py-8 sm:gap-24 sm:px-6 sm:py-12 md:gap-32 md:px-10 md:py-20 text-white">
      {/* Services Hero */}
      <Reveal direction="up" width="100%">
        <section className="relative overflow-hidden rounded-[40px] border border-white/5 bg-slate-950 px-8 py-20 md:px-16 md:py-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/Environ_1.jpg"
              alt="Strategic Spatial Intelligence"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#041d3d] via-transparent to-[#041d3d]" />
          </div>

          <div className="relative z-10 max-w-4xl space-y-8">
            <Reveal direction="left" delay={0.4}>
              <div className="space-y-4">
                <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#c40902] bg-[#c40902]/10 px-4 py-1.5 rounded-full border border-[#c40902]/20">
                  Our Services
                </p>
                <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.1]">
                  Delivering <span className="text-gradient">Strategic</span> Spatial Intelligence
                </h1>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.6}>
              <p className="text-xl sm:text-2xl leading-relaxed text-slate-300 font-medium max-w-2xl">
                At GeoDecision Analytics, we provide structured, defensible geospatial solutions designed to reduce uncertainty and strengthen decision-making.
              </p>
            </Reveal>
          </div>
        </section>
      </Reveal>

      {/* Services Grid */}
      <section className="space-y-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, idx) => (
            <Reveal key={idx} direction={idx % 2 === 0 ? "left" : "right"} delay={idx * 0.1} className="h-full">
              <div className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-white/5 glass-card transition-all hover:bg-white/[0.05]">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041d3d] via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-8 space-y-6 flex-grow">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-4">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Structured Approach */}
      <Reveal direction="up" width="100%">
        <section className="relative rounded-[40px] border border-white/5 bg-[#041d3d]/50 p-8 md:p-16 lg:p-24 overflow-hidden">
          <div className="relative z-10 space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">Our Structured Approach</h2>
              <p className="text-lg text-slate-400">We apply a disciplined methodology to ensure clarity, transparency, and defensibility across every project phase.</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-5 relative">
              {/* Visual connector line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent hidden lg:block -z-10" />

              {methodology.map((item, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 0.1} className="h-full">
                  <div className="relative h-full space-y-6 group">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#041d3d] border border-cyan-500/30 text-cyan-400 font-black text-xl shadow-[0_0_20px_rgba(6,182,212,0.1)] group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all mx-auto lg:mx-0">
                      {idx + 1}
                    </div>
                    <div className="space-y-2 text-center lg:text-left">
                      <h4 className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">{item.step}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-center">
              <p className="text-cyan-400 font-bold tracking-wide italic uppercase text-sm">"This section increases enterprise credibility significantly."</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Platforms & Capability */}
      <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal direction="left" width="100%">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#c40902] bg-[#c40902]/10 px-4 py-1.5 rounded-full border border-[#c40902]/20">
                Tools & Engineering
              </p>
              <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl leading-tight">Platforms & Technical Capability</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                While we are sector-agnostic, our technical stack is deep and built on industry-leading platforms that ensure scalability and security.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((cap, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 0.1} className="h-full">
                  <div className="flex items-center h-full gap-3 p-4 rounded-xl border border-white/5 bg-white/5 group hover:border-cyan-500/30 transition-all">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 group-hover:scale-150 transition-all" />
                    <p className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{cap}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" width="100%">
          <div className="relative aspect-square lg:aspect-video rounded-[40px] overflow-hidden border border-white/10 group">
            <Image
              src="/Service_4.jpg"
              alt="Technical Capability"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041d3d] via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-2xl border border-white/10">
              <p className="text-sm font-bold text-white uppercase tracking-widest mb-2">Operational Excellence</p>
              <p className="text-slate-300 text-sm leading-relaxed">Advanced geospatial platforms integrated with structured analytical methodologies.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Case Studies Placeholder */}
      <Reveal direction="up" width="100%">
        <section className="text-center py-20 border-y border-white/5 space-y-10 group">
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-white sm:text-4xl italic opacity-50">Case Studies</h2>
            <p className="text-slate-400">(Content to be added)</p>
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-cyan-500 px-10 py-4 text-sm font-black text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:bg-cyan-400 hover:scale-105"
            >
              Request Full Capability Statement
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
