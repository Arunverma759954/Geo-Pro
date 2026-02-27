export default function ServicesStrip() {
  return (
    <section className="grid gap-8 md:grid-cols-3">
      {[
        {
          title: "GeoSpatial Consulting",
          desc: "Strategy, data architecture, and roadmaps to modernise your geospatial capabilities."
        },
        {
          title: "Analytics & Dashboards",
          desc: "Custom dashboards and reporting that surface the right spatial KPIs for decision-makers."
        },
        {
          title: "Training & Enablement",
          desc: "Capability-building programs so your teams can confidently use geospatial tools and outputs."
        }
      ].map((service, i) => (
        <div key={i} className="p-8 rounded-2xl glass-card border-white/5 transition-all hover:bg-white/[0.05]">
          <h3 className="text-lg font-bold text-white mb-3">
            {service.title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            {service.desc}
          </p>
        </div>
      ))}
    </section>
  );
}

