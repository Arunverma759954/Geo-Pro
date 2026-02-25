import Image from "next/image";

import AboutHero from "@/components/sections/about/AboutHero";
import ValuesGrid from "@/components/sections/about/ValuesGrid";
import TimelineStrip from "@/components/sections/about/TimelineStrip";

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-4 py-8 sm:gap-12 sm:px-6 sm:py-12 md:gap-16 md:px-10 md:py-20">
      {/* Heading + intro */}
      <section className="grid gap-6 sm:gap-8 md:grid-cols-[1.3fr_minmax(0,1fr)] md:gap-10 md:items-start">
        <div className="min-w-0 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
            Who we are
          </p>
          <div className="space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              About GeoDecision Analytics
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600">
              GeoDecision Analytics provides geospatial data and technology (GIS) for
              decision–making purposes. We are a trusted partner for organizations
              seeking to unlock the strategic value hidden in location data.
            </p>
          </div>

          <ul className="space-y-4 text-sm sm:text-base text-slate-700">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />
              <p>
                <span className="font-semibold">20+ Years of GIS Expertise</span>{" "}
                – Deep knowledge of geospatial technologies and best practices.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />
              <p>
                <span className="font-semibold">Diverse Portfolio</span> – Successfully
                delivered GIS solutions across planning, logistics, environmental, and
                utility sectors.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />
              <p>
                <span className="font-semibold">Decision–Focused</span> – Every solution
                is designed to turn complex spatial data into clear, actionable
                insights.
              </p>
            </li>
          </ul>
        </div>

        {/* Side image card */}
        <aside className="relative min-w-0">
          <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-teal-100/60 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl">
            <div className="relative aspect-[4/3]">
              <Image
                src="/gis4.webp"
                alt="GeoDecision Analytics team and spatial analysis"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </aside>
      </section>

      {/* Values / mission strip */}
      <section className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-5 sm:rounded-3xl sm:px-6 sm:py-6 md:px-8 md:py-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Our mission
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-700">
              Help organizations make faster, more confident decisions by turning
              location–based data into intelligence that everyone can understand.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              How we work
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-700">
              We combine modern GIS platforms, cloud infrastructure, and sector–specific
              expertise to deliver solutions that fit your operations.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Who we serve
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-700">
              Government, infrastructure, utilities, and private enterprises that depend
              on accurate, timely geospatial insight.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
