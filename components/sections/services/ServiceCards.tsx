const services = [
  {
    title: "GeoSpatial consulting",
    body: "Placeholder: strategy, architecture, and planning support to shape how your organisation uses spatial data.",
  },
  {
    title: "Analytics & modelling",
    body: "Placeholder: site suitability, risk mapping, accessibility analysis, and other spatial models.",
  },
  {
    title: "Dashboards & tooling",
    body: "Placeholder: decision dashboards, lightweight tools, and automation for spatial reporting.",
  },
];

export default function ServiceCards() {
  return (
    <section className="grid gap-5 md:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.title}
          className="flex flex-col gap-3 rounded-2xl border border-red-100 bg-white p-5 shadow-sm"
        >
          <h2 className="text-sm font-semibold text-slate-900">
            {service.title}
          </h2>
          <p className="text-xs text-slate-600 md:text-sm">{service.body}</p>
          <ul className="mt-1 list-disc space-y-1 pl-4 text-[11px] text-slate-500 md:text-xs">
            <li>Swap these bullet points with your specific sub-services.</li>
            <li>Keep them short and outcome-focused.</li>
          </ul>
        </div>
      ))}
    </section>
  );
}

