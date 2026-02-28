const steps = [
  {
    label: "1. Understand the question",
    text: "Placeholder: discovery sessions to define the decision, geography, and stakeholders involved.",
  },
  {
    label: "2. Shape the data",
    text: "Placeholder: sourcing, cleaning, and preparing spatial datasets for analysis.",
  },
  {
    label: "3. Deliver decision assets",
    text: "Placeholder: maps, dashboards, and briefs that leadership can act on quickly.",
  },
];

export default function TimelineStrip() {
  return (
    <section className="rounded-2xl border border-dashed border-green-200 bg-green-50/70 p-6 text-xs text-slate-700 md:text-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-800">
        How we typically work
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.label} className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-green-700">
              {step.label}
            </p>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

