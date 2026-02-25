const steps = [
  {
    title: "Discover",
    text: "Placeholder: workshops to clarify objectives, geographies, and constraints.",
  },
  {
    title: "Design",
    text: "Placeholder: choose methods, datasets, and tooling that fit your context.",
  },
  {
    title: "Deliver",
    text: "Placeholder: produce maps, dashboards, and decision briefs tailored to your stakeholders.",
  },
];

export default function ProcessStrip() {
  return (
    <section className="rounded-2xl border border-dashed border-red-200 bg-red-50/70 p-6 text-xs text-slate-700 md:text-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-800">
        Example delivery approach
      </p>
      <div className="mt-4 grid gap-5 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.title} className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-red-700">
              {step.title}
            </p>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

