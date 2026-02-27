import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";

export default function ContactLayout() {
  return (
    <section className="relative space-y-12 sm:space-y-20">
      {/* Background Atmosphere */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      {/* Header Section */}
      <Reveal direction="up" width="100%">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 glass-card p-8 sm:p-12 md:p-16">
          <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-cyan-500/5 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-6">
              <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#c40902] bg-[#c40902]/10 px-4 py-1.5 rounded-full border border-[#c40902]/20">
                Get In Touch
              </p>
              <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.1]">
                Let&apos;s talk about your <span className="text-gradient">geospatial project.</span>
              </h1>
              <p className="text-lg leading-relaxed text-slate-300 md:text-xl font-medium">
                Share a bit about your locations, timelines, and decision-makers. We
                typically respond within one business day.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-md lg:max-w-sm">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                <p className="text-xs font-black text-cyan-400 uppercase tracking-widest">Active Support</p>
              </div>
              <p className="text-sm font-bold text-white">Project types we support:</p>
              <p className="text-sm text-slate-400 leading-relaxed italic">
                "Site selection, risk mapping, infrastructure planning, utilities, and high-fidelity environmental modelling."
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
        {/* Left: Form */}
        <Reveal direction="left" delay={0.4} className="h-full">
          <div className="h-full rounded-[2.5rem] border border-white/10 bg-slate-900/40 backdrop-blur-xl p-8 sm:p-12 shadow-2xl">
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl mb-6">
              Tell us about your project
            </h2>

            <form className="grid gap-8 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white shadow-inner outline-none transition-all focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 placeholder:text-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@organisation.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white shadow-inner outline-none transition-all focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 placeholder:text-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="organisation" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                  Organisation
                </label>
                <input
                  id="organisation"
                  type="text"
                  placeholder="Organisation / department"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white shadow-inner outline-none transition-all focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 placeholder:text-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="e.g. Urban planning, risk mapping"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white shadow-inner outline-none transition-all focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 placeholder:text-slate-600"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                  Project details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Describe your use case, locations of interest, timelines, and any existing data sources."
                  className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white shadow-inner outline-none transition-all focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 placeholder:text-slate-600 resize-none"
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-6 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-cyan-500 px-10 py-4 text-sm font-black text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Submit Enquiry
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest max-w-[300px] leading-relaxed">
                  By submitting, you agree to our processing of your geospatial project details.
                </p>
              </div>
            </form>
          </div>
        </Reveal>

        {/* Right: Sidebar */}
        <div className="space-y-6">
          <Reveal direction="right" delay={0.6} className="h-full">
            <aside className="h-full space-y-8 rounded-[2.5rem] border border-white/10 bg-slate-900/40 backdrop-blur-xl p-8 sm:p-10">
              <div className="space-y-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c40902]/20 text-[#c40902] border border-[#c40902]/20">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="space-y-4">
                  <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#c40902] bg-[#c40902]/10 px-4 py-1.5 rounded-full border border-[#c40902]/20">
                    Our HQ
                  </p>
                  <p className="text-xl font-bold text-white">Brisbane, Australia</p>
                </div>
              </div>

              <div className="space-y-6 pt-8 border-t border-white/5">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 border border-white/5 transition-colors group-hover:border-[#c40902]/30 group-hover:text-[#c40902]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-none mb-1">Email</p>
                      <p className="text-sm font-bold text-white">contact@geodecision.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 border border-white/5 transition-colors group-hover:border-[#c40902]/30 group-hover:text-[#c40902]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-none mb-1">Phone</p>
                      <p className="text-sm font-bold text-white">+61 7 3000 0000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] bg-cyan-500/5 border border-cyan-500/10 p-6 space-y-4">
                <p className="text-xs font-black text-cyan-400 uppercase tracking-widest">Map Collaboration</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We run remote review sessions around <span className="text-cyan-400 font-bold">live web maps</span> for real-time scenario exploration.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
