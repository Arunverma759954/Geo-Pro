import Link from "next/link";

export default function HomeServicesHero() {
  return (
    <section className="rounded-3xl border border-white/5 bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-transparent px-6 py-10 shadow-2xl md:px-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
        <div className="space-y-6">
          <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#c40902] bg-[#c40902]/10 px-4 py-1.5 rounded-full border border-[#c40902]/20">
            Geospatial intelligence for better choices
          </p>
          <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            GeoDecision Analytics
          </h2>
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
            GeoDecision Analytics provides geospatial data and technology (GIS) for
            decision‑making purposes. Transform complex location data into clear,
            actionable decisions.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <Link
              href="/services"
              className="rounded-full bg-cyan-500 px-8 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,242,254,0.3)]"
            >
              Explore solutions
            </Link>
            <Link
              href="/services"
              className="text-sm font-bold text-white underline decoration-cyan-500/50 underline-offset-8 transition-all hover:decoration-cyan-500"
            >
              See how GIS powers decisions →
            </Link>
          </div>
        </div>

        <div className="space-y-3 p-6 rounded-2xl glass-card border-white/5">
          <p className="text-sm font-bold text-white uppercase tracking-wider">What we help you do</p>
          <p className="text-sm text-slate-400 leading-relaxed italic">"Turn raw spatial data into dashboards, reports, and guidance that leadership can act on with confidence."</p>
        </div>
      </div>
    </section>
  );
}

