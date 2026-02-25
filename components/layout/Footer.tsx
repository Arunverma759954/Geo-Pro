import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-red-900 bg-[#020617] text-slate-200">
      <div className="mx-auto max-w-5xl px-4 py-8 md:px-6">
        <div className="flex flex-col items-start gap-6 border-b border-red-900/60 pb-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full">
              <Image
                src="/logo.jpg"
                alt="GeoDecision Analytics logo"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div className="leading-tight">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-red-300">
                GeoDecision Analytics
              </p>
              <p className="text-xs text-slate-300">
                Placeholder: transforming spatial data into confident decisions.
              </p>
            </div>
          </div>

          <p className="rounded-full border border-red-700/60 bg-red-900/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-100">
            Spatial · Maps · Analytics
          </p>
        </div>

        <div className="mt-6 grid gap-8 text-xs md:grid-cols-3 md:text-sm">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-200">
              About (placeholder)
            </p>
            <p className="max-w-sm text-slate-300">
              Use this short paragraph later to describe your firm in your own
              words—who you work with and the kind of spatial decisions you
              support.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-200">
              Navigation
            </p>
            <ul className="space-y-1 text-slate-300">
              <li>
                <Link href="/" className="hover:text-red-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-red-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-200">
              Contact (placeholder)
            </p>
            <p className="text-slate-300">
              Email: hello@geodecision-analytics.example
            </p>
            <p className="text-slate-300">Phone: +91-98765-43210</p>
            <p className="text-slate-300">
              Location: Add your address or city here.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 pt-3 text-[11px] text-slate-400 md:flex-row md:text-xs">
          <p>© {year} GeoDecision Analytics. All rights reserved.</p>
          <p className="flex gap-3">
            <span>Spatial Intelligence.</span>
            <span>Data-Driven Decisions.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

