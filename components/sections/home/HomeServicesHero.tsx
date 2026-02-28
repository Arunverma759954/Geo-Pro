import Link from "next/link";

export default function HomeServicesHero() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
          <div className="space-y-6">
            <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#c40902] bg-[#c40902]/10 px-4 py-1.5 rounded-full border border-[#c40902]/20">
              Geospatial intelligence for better choices
            </p>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              GeoDecision Analytics
            </h2>
            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
              GeoDecision Analytics provides geospatial data and technology (GIS) for
              decision‑making purposes. Transform complex location data into clear,
              actionable decisions.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link
                href="/services"
                className="rounded-full bg-[#c40902] px-8 py-3.5 text-sm font-black text-white transition-all hover:bg-[#a30702] hover:shadow-[0_0_25px_rgba(196,9,2,0.4)] hover:scale-105 cursor-pointer"
              >
                Explore solutions
              </Link>
              <Link
                href="/services"
                className="text-sm font-black text-slate-900 underline decoration-[#c40902]/50 underline-offset-8 transition-all hover:decoration-[#c40902]"
              >
                See how GIS powers decisions →
              </Link>
            </div>
          </div>

          <div className="space-y-3 p-6 rounded-2xl bg-white border-2 border-slate-100 shadow-sm">
            <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">What we help you do</p>
            <p className="text-sm text-slate-500 leading-relaxed italic">"Turn raw spatial data into dashboards, reports, and guidance that leadership can act on with confidence."</p>
          </div>
        </div>
      </div>
    </section>
  );
}

