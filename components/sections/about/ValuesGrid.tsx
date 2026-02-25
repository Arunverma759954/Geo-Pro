export default function ValuesGrid() {
  const values = [
    {
      title: "Clarity over complexity",
      description:
        "We believe good geospatial work should simplify choices, not add more jargon. Use this card later to explain your philosophy.",
    },
    {
      title: "Partnership mindset",
      description:
        "Placeholder text: describe how you co-create solutions with clients instead of just delivering reports.",
    },
    {
      title: "Responsible use of data",
      description:
        "Talk here about your standards around data quality, ethics, and how you handle uncertainty in spatial models.",
    },
  ];

  return (
    <section className="grid gap-5 rounded-2xl border border-red-100 bg-white p-6 shadow-sm md:grid-cols-3 md:p-8">
      {values.map((value) => (
        <div key={value.title} className="space-y-2">
          <div className="h-7 w-7 rounded-full bg-red-50 text-center text-sm font-semibold text-red-700">
            ·
          </div>
          <h2 className="text-sm font-semibold text-slate-900">
            {value.title}
          </h2>
          <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
            {value.description}
          </p>
        </div>
      ))}
    </section>
  );
}

