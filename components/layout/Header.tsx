"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2.5 md:gap-6 md:px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="GeoDecision Analytics logo"
            width={80}
            height={80}
            className="h-12 w-auto object-contain"
            priority
          />
          <div className="leading-tight">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-red-700">
              GeoDecision Analytics
            </p>
            <p className="text-[11px] text-slate-500">
              Transforming Spatial Data into Confident Decisions
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3 md:justify-center md:gap-6">
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative pb-1 text-sm font-medium transition-colors ${
                    isActive ? "text-red-700" : "text-slate-700"
                  }`}
                >
                  {item.label}
                  <span
                    className={`pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-red-600 transition duration-200 ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-50 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="flex h-3.5 w-4 flex-col justify-between">
              <span
                className={`h-0.5 w-full rounded-full bg-slate-800 transition-transform ${
                  isOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-slate-800 transition-opacity ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-slate-800 transition-transform ${
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
            <span>+91-98765-43210</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-800"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white/95 shadow-sm md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-sm font-medium text-slate-700">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-lg px-2 py-2 transition-colors ${
                    isActive
                      ? "bg-red-50 text-red-700"
                      : "hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                  )}
                </Link>
              );
            })}
            <a
              href="tel:+919876543210"
              className="mt-2 inline-flex items-center justify-center rounded-full border border-red-100 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700"
            >
              Call us: +91-98765-43210
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

