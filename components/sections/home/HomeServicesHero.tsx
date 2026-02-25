import Link from "next/link";

export default function HomeServicesHero() {
  return (
    <section className="rounded-3xl border border-emerald-100 bg-emerald-50/60 px-6 py-8 shadow-sm md:px-10 md:py-10">
      <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Geospatial intelligence for better choices
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            GeoDecision Analytics
          </h2>
          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-700">
            GeoDecision Analytics provides geospatial data and technology (GIS) for
            decision-making purposes. Transform complex location data into clear,
            actionable decisions.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/services"
              className="rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            >
              Explore solutions
            </Link>
            <Link
              href="/services"
              className="text-sm font-semibold text-emerald-900 underline-offset-4 hover:underline"
            >
              See how GIS powers decisions →
            </Link>
          </div>
        </div>

        <div className="space-y-2 text-xs text-slate-700 sm:text-sm md:text-right">
          <p className="font-semibold text-slate-900">What we help you do</p>
          <p>Turn raw spatial data into dashboards, reports, and guidance that leadership can act on with confidence.</p>
        </div>
      </div>
    </section>
  );
}

