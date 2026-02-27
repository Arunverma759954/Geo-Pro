import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";

export default function WhoWeServe() {
  const industries = [
    {
      title: "Government & Local Councils",
      description: "We support public-sector agencies in delivering defensible spatial analysis for planning, regulation, infrastructure strategy, and community development.",
      image: "/Environ_9.jpg",
    },
    {
      title: "Infrastructure & Utilities",
      description: "We assist infrastructure providers in integrating spatial data into planning, optimisation, and risk mitigation strategies.",
      image: "/Environ_8.jpg",
    },
    {
      title: "Environmental & Climate Agencies",
      description: "We provide advanced geospatial modelling to support environmental monitoring, climate adaptation, and sustainability initiatives.",
      image: "/Environ_7.jpg",
    },
    {
      title: "Mining & Energy Projects",
      description: "We help resource and energy organisations manage environmental risk, regulatory obligations, and site development decisions using defensible spatial intelligence.",
      image: "/Environ_6.jpg",
      bullets: [
        "Impact assessment mapping",
        "Compliance & reporting support",
        "Environmental buffer analysis",
        "Risk-based site evaluation"
      ]
    },
    {
      title: "Public Health & Research",
      description: "We support researchers and analytical teams in integrating spatial intelligence into epidemiological studies and environmental health modelling.",
      image: "/Environ_5.jpg",
    },
    {
      title: "Private & Commercial Enterprises",
      description: "We support organisations seeking to integrate spatial intelligence into strategic planning, site selection, environmental compliance, and investment decisions.",
      image: "/Enterprice_2.jpg",
      bullets: [
        "Development feasibility analysis",
        "Market & location intelligence",
        "Environmental risk due diligence",
        "Infrastructure & expansion planning"
      ]
    }
  ];

  return (
    <section className="space-y-12 sm:space-y-16">
      <Reveal direction="up" width="100%">
        <header className="space-y-4 text-center max-w-3xl mx-auto">
          <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#c40902] bg-[#c40902]/10 px-4 py-1.5 rounded-full border border-[#c40902]/20">
            Who We Serve
          </p>
          <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Supporting organisations that rely on spatial intelligence for high‑stakes decision‑making.
          </h2>
        </header>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((item, idx) => (
          <Reveal
            key={idx}
            direction={idx % 2 === 0 ? "left" : "right"}
            delay={idx * 0.1}
            width="100%"
            className="h-full"
          >
            <div
              className="group flex flex-col h-full overflow-hidden rounded-2xl border border-white/5 glass-card transition-all duration-300 hover:border-cyan-500/30 hover:translate-y-[-4px]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041d3d] via-[#041d3d]/20 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 space-y-4">
                <p className="text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>

                {item.bullets && (
                  <ul className="grid gap-2 text-xs text-slate-400 border-t border-white/5 pt-4">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-cyan-500 font-bold leading-none">✔</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

