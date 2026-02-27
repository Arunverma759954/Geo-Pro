import { Reveal } from "@/components/animations/Reveal";

export default function WhyGeoDecision() {
  const points = [
    {
      title: "Strategic Advantage",
      content: "GeoDecision Analytics combines advanced geospatial modelling, environmental intelligence, and real-world regulatory experience to deliver decision-ready insights that organisations can trust."
    },
    {
      title: "Analytical Frameworks",
      content: "We don’t just produce maps — we design analytical frameworks that inform planning, compliance, investment, and long-term strategy."
    },
    {
      title: "Evidence-Based outputs",
      content: "Our work integrates spatial modelling, environmental data analysis, and statistical reasoning to ensure outputs are defensible, transparent, and evidence-based."
    },
    {
      title: "Regulatory Experience",
      content: "With experience supporting government agencies and infrastructure organisations, we understand the importance of compliance, documentation, and defensible decision-making."
    },
    {
      title: "Systems-Level Thinking",
      content: "From ArcGIS Enterprise environments to spatial databases and automation workflows, we bring systems-level thinking — not just project-level delivery."
    },
    {
      title: "Executive-Ready Visualisations",
      content: "We translate complex spatial analysis into executive-ready dashboards, strategic reports, and clear visualisations that support confident action."
    }
  ];

  return (
    <section className="space-y-12 py-10">
      <Reveal direction="left" width="100%">
        <header className="space-y-4 max-w-2xl">
          <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#c40902] bg-[#c40902]/10 px-4 py-1.5 rounded-full border border-[#c40902]/20">
            Why GeoDecision Analytics?
          </p>
          <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Turning Complex Spatial Data into Strategic Advantage
          </h2>
        </header>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {points.map((point, idx) => (
          <Reveal
            key={idx}
            direction="up"
            delay={idx * 0.1}
            width="100%"
          >
            <div
              className="group relative h-full p-8 rounded-2xl border border-white/5 glass-card overflow-hidden transition-all duration-300 hover:border-cyan-500/20"
            >
              {/* Background glow for cards */}
              <div className="absolute -top-10 -right-10 h-32 w-32 bg-cyan-500/5 blur-3xl rounded-full group-hover:bg-cyan-500/10 transition-colors" />

              <div className="relative space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-[2px] bg-gradient-to-b from-cyan-500 to-transparent" />
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {point.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                  {point.content}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

