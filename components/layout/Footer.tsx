import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-red-900 bg-[#020617] text-slate-200">
      <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 md:px-10">
        <div className="flex flex-col items-start gap-4 border-b border-red-900/60 pb-6 sm:gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full sm:h-11 sm:w-11">
              <Image
                src="/logo.jpg"
                alt="GeoDecision Analytics logo"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 leading-tight">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-red-300">
                GeoDecision Analytics
              </p>
              <p className="mt-0.5 text-xs text-slate-300">
                Transforming spatial data into confident decisions.
              </p>
            </div>
          </div>

          <p className="rounded-full border border-red-700/60 bg-red-900/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-red-100 sm:px-4 sm:text-[11px]">
            Spatial · Maps · Analytics
          </p>
        </div>

        <div className="mt-6 grid gap-6 text-xs sm:gap-8 sm:text-sm md:grid-cols-3">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-200">
              About
            </p>
            <p className="max-w-sm text-slate-300 sm:text-sm">
              GeoDecision Analytics helps organisations turn complex spatial data into
              clear, confident decisions through modern GIS, analytics, and mapping
              solutions.
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
              Contact
            </p>
            <p className="break-words text-slate-300">
              Email: contact@geodecision-analytics.com
            </p>
            <p className="text-slate-300">Phone: +91-98765-43210</p>
            <p className="text-slate-300">
              Location: Add your address or city here.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 pt-3 text-center text-[11px] text-slate-400 sm:gap-4 md:flex-row md:text-left md:text-xs">
          <p className="shrink-0">© {year} GeoDecision Analytics. All rights reserved.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <p className="hidden gap-3 text-slate-400 md:flex">
              <span>Spatial Intelligence.</span>
              <span>Data-Driven Decisions.</span>
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                aria-label="Visit our LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-red-700/60 bg-red-900/60 text-slate-100 transition hover:bg-red-700"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M6.09 5.5A2.09 2.09 0 1 1 2 5.5a2.09 2.09 0 0 1 4.09 0ZM2.32 8.32h3.53V21H2.32V8.32Zm6.34 0h3.38v1.72h.05c.47-.9 1.63-1.86 3.36-1.86 3.6 0 4.26 2.37 4.26 5.45V21h-3.53v-5.8c0-1.38-.02-3.15-1.92-3.15-1.93 0-2.23 1.5-2.23 3.05V21H8.66V8.32Z" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="Visit our Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-red-700/60 bg-red-900/60 text-slate-100 transition hover:bg-red-700"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M18.25 3H21l-6.11 7.02L21.5 21h-4.5l-3.53-5.17L8.4 21H5.65l6.52-7.5L3.5 3h4.62l3.18 4.64L18.25 3Zm-1.58 15.25h1.25L7.4 4.68H6.05l10.62 13.57Z" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="Visit our YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-red-700/60 bg-red-900/60 text-slate-100 transition hover:bg-red-700"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M21.6 7.2a2.4 2.4 0 0 0-1.69-1.69C18.25 5 12 5 12 5s-6.25 0-7.91.51A2.4 2.4 0 0 0 2.4 7.2 25.23 25.23 0 0 0 2 12a25.23 25.23 0 0 0 .4 4.8 2.4 2.4 0 0 0 1.69 1.69C5.75 19 12 19 12 19s6.25 0 7.91-.51a2.4 2.4 0 0 0 1.69-1.69A25.23 25.23 0 0 0 22 12a25.23 25.23 0 0 0-.4-4.8ZM10 15.25v-6.5L15.2 12 10 15.25Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

