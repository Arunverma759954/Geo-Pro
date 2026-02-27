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
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#041d3d]/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1700px] items-center gap-3 px-4 py-3 sm:gap-4 md:gap-8 md:px-8 lg:px-12">
        <div className="flex min-w-0 flex-shrink-0 items-center gap-3">
          <div className="relative group flex items-center justify-center h-10 w-10 md:h-14 md:w-14 rounded-full bg-white overflow-hidden border-2 border-[#c40902]/30">
            <Image
              src="/logo.jpg"
              alt="GeoDecision Analytics logo"
              width={120}
              height={120}
              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
              priority
            />
          </div>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-[10px] font-black tracking-[0.4em] text-[#c40902] sm:text-[12px]">
              GeoDecision Analytics
            </p>
            <p className="hidden text-[11px] text-slate-400 font-bold sm:block opacity-60 tracking-wider">
              Spatial Data into Confident Decisions
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3 md:justify-center md:gap-8">
          <nav className="hidden items-center gap-8 text-sm font-bold text-white md:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative pb-1 text-sm font-black transition-all duration-300 ${isActive ? "text-[#c40902]" : "text-white/80 hover:text-white"
                    }`}
                >
                  {item.label}
                  <span
                    className={`pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-[#c40902] transition-all duration-300 ${isActive
                      ? "scale-x-100 opacity-100 shadow-[0_0_8px_rgba(196,9,2,0.5)]"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                      }`}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white shadow-sm md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="flex h-3.5 w-4 flex-col justify-between">
              <span
                className={`h-0.5 w-full rounded-full bg-white transition-transform ${isOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-white transition-opacity ${isOpen ? "opacity-0" : "opacity-100"
                  }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-white transition-transform ${isOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
              />
            </span>
          </button>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold text-white hover:bg-white/10 transition-all"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#c40902] animate-pulse" />
            <span>+91-98765-43210</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex rounded-full bg-[#c40902] px-6 py-2 text-sm font-black text-white shadow-[0_0_15px_rgba(196,9,2,0.3)] transition-all hover:bg-[#b00802] hover:scale-105"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-white/5 bg-[#041d3d]/98 backdrop-blur-2xl md:hidden">
          <nav className="mx-auto flex flex-col gap-2 px-4 py-6 text-sm font-bold text-white">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 transition-all ${isActive
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    : "hover:bg-white/5"
                    }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  )}
                </Link>
              );
            })}
            <div className="mt-4 flex flex-col gap-3 border-t border-white/5 pt-4">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3.5 text-xs font-bold text-white"
              >
                <span>Call: +91-98765-43210</span>
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-xl bg-cyan-500 py-3.5 text-sm font-bold text-slate-950"
              >
                Get in touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

