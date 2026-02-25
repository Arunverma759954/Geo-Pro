import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-start">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-700">
          Services
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          End-to-end spatial analytics services.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
          This is placeholder content. Replace it later with your own overview
          of how GeoDecision Analytics helps clients move from raw spatial data
          to confident, defensible decisions.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
          Below are example service categories and process steps that you can
          adjust to match your actual offerings.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-linear-to-br from-red-50 via-white to-slate-50 p-6 shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,113,113,0.25),transparent_60%)]" />
        <div className="relative flex h-full flex-col justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
              <Image
                src="/window.svg"
                alt="Dashboard illustration"
                width={36}
                height={36}
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
                Example deliverables
              </p>
              <p className="text-xs text-slate-500">
                Dashboards, maps, briefs, and reports.
              </p>
            </div>
          </div>

          <ul className="space-y-2 text-xs text-slate-700 md:text-sm">
            <li>• Interactive web maps and dashboards.</li>
            <li>• Static map products for reports and presentations.</li>
            <li>• Spatial analysis memos with clear recommendations.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

