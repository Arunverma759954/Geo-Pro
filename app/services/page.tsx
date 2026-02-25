import Image from "next/image";
import ServicesStrip from "@/components/sections/home/ServicesStrip";

export default function ServicesPage() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col gap-16 px-6 py-12 md:px-10 md:py-20">
      {/* Services hero */}
      <section className="grid gap-10 md:grid-cols-[1.4fr_minmax(0,1fr)] md:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Geospatial intelligence for better choices
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            GeoDecision Analytics
          </h1>
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-700">
            GeoDecision Analytics provides geospatial data and technology (GIS) for
            decision-making purposes. Transform complex location data into clear,
            actionable decisions.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <button className="rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800">
              Explore solutions
            </button>
            <button className="text-sm font-semibold text-emerald-800 underline-offset-4 hover:underline">
              See how GIS powers decisions →
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -top-10 -right-6 h-40 w-40 rounded-full bg-emerald-100/60 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl">
            <div className="relative aspect-[4/3]">
              <Image
                src="/gis4.webp"
                alt="GeoDecision Analytics services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reuse home services strip, but inside its own section wrapper */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          Core services
        </h2>
        <p className="max-w-2xl text-sm text-slate-600">
          From strategy and architecture to analytics and enablement, our team supports
          every stage of your geospatial journey.
        </p>
        <ServicesStrip />
      </section>
    </div>
  );
}
