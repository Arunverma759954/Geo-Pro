import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-center">
      <div className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-700">
          About Us
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Building clarity from complex spatial data.
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
          This is placeholder copy. Replace this section later with your own
          story about GeoDecision Analytics—who you serve, how you started, and
          what makes your approach to spatial analytics unique.
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
          Use this area to briefly talk about your experience, scale of
          projects, and the type of outcomes you help your clients achieve.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-green-100 bg-linear-to-br from-green-50 via-white to-slate-50 p-6 shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,113,113,0.25),transparent_60%)]" />
        <div className="relative flex h-full flex-col justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
              <Image
                src="/gis.webp"
                alt="GIS icon"
                width={40}
                height={40}
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                GeoSpatial Expertise
              </p>
              <p className="text-xs text-slate-500">
                Maps, imagery, sensors, and decision science.
              </p>
            </div>
          </div>

          <div className="grid gap-3 text-xs text-slate-700 md:grid-cols-2 md:text-sm">
            <div className="rounded-xl bg-white/80 p-3 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Placeholder metric
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-900">
                50+ projects
              </p>
              <p className="mt-1">
                Use this card later for real stats: projects delivered, regions
                covered, or clients served.
              </p>
            </div>
            <div className="rounded-xl bg-white/80 p-3 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Typical outcomes
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-900">
                Better decisions
              </p>
              <p className="mt-1">
                A short sentence about how your work improves planning,
                operations, or investments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

