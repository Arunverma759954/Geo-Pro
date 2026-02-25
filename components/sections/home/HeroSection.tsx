import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-rose-50 via-white to-slate-50 py-16 sm:py-20">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-red-100/70 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-12 px-6 md:flex-row md:items-center md:gap-16 md:px-10">
        {/* Left: content */}
        <div className="max-w-xl space-y-6">
          <p className="text-xs font-semibold tracking-[0.28em] text-red-700 uppercase">
            GEODECISION ANALYTICS
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
            Transform spatial data into{" "}
            <span className="text-red-600">confident business decisions.</span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            We combine advanced GIS, remote sensing, and location intelligence to
            turn complex spatial datasets into clear, actionable insights for
            government, infrastructure, utilities, and private enterprises.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/services"
              className="rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
            >
              Explore services
            </Link>
            <button className="rounded-full border border-red-200 bg-white px-6 py-2.5 text-sm font-semibold text-red-700 shadow-sm transition hover:border-red-300 hover:bg-rose-50">
              Request a consultation
            </button>
          </div>

          <div className="mt-6 grid gap-4 text-sm text-slate-700 sm:grid-cols-3">
            <div>
              <p className="font-semibold text-slate-900">Spatial analytics</p>
              <p className="text-xs sm:text-[13px]">
                Site selection, risk mapping, and impact analysis.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Decision support</p>
              <p className="text-xs sm:text-[13px]">
                Dashboards and reports for leadership teams.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Data services</p>
              <p className="text-xs sm:text-[13px]">
                Data engineering, cleaning, and integration.
              </p>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative flex-1">
          <div className="relative overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-xl">
            <div className="relative aspect-[16/7] sm:aspect-[16/6]">
              <Image
                src="/gis.webp"
                alt="GeoDecision Analytics hero"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}