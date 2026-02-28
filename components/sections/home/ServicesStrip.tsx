export default function ServicesStrip() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-12 md:px-8 grid gap-8 md:grid-cols-3">
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
          <div key={i} className="p-8 rounded-2xl bg-white border-2 border-slate-100 transition-all hover:shadow-2xl hover:border-[#16a34a]/20 cursor-pointer">
            <h3 className="text-xl font-black text-slate-900 mb-3">
              {service.title}
            </h3>
            <p className="text-base text-slate-700 font-bold leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
