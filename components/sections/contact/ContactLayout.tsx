import Image from "next/image";

export default function ContactLayout() {
  return (
    <section className="space-y-6 sm:space-y-8">
      {/* Banner heading */}
      <div className="rounded-2xl bg-gradient-to-r from-rose-50 via-white to-slate-50 px-4 py-5 shadow-sm sm:rounded-3xl sm:px-6 sm:py-7 md:px-10 md:py-9">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-700">
              Contact Us
            </p>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
              Let&apos;s talk about your geospatial project.
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Share a bit about your locations, timelines, and decision-makers. We
              typically respond within one business day.
            </p>
          </div>

          <div className="mt-2 rounded-2xl border border-red-100 bg-white/80 px-4 py-3 text-xs text-slate-700 md:max-w-xs md:text-sm">
            <p className="font-semibold text-slate-900">Project types we support</p>
            <p className="mt-1">
              Site selection, risk mapping, infrastructure planning, utilities, and
              more.
            </p>
          </div>
        </div>
      </div>

      {/* Left: form, Right: details */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-10 md:items-start">
        <div className="min-w-0 space-y-6 rounded-2xl border border-red-100 bg-white p-4 shadow-sm sm:p-6 md:p-8">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Tell us about your project
          </h2>

          <form className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-1">
              <label
                htmlFor="name"
                className="block text-xs font-medium text-slate-700 md:text-sm"
              >
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-red-100 placeholder:text-slate-400 focus:border-red-400 focus:ring-2"
              />
            </div>

            <div className="md:col-span-1">
              <label
                htmlFor="email"
                className="block text-xs font-medium text-slate-700 md:text-sm"
              >
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@organisation.com"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-red-100 placeholder:text-slate-400 focus:border-red-400 focus:ring-2"
              />
            </div>

            <div className="md:col-span-1">
              <label
                htmlFor="organisation"
                className="block text-xs font-medium text-slate-700 md:text-sm"
              >
                Organisation
              </label>
              <input
                id="organisation"
                name="organisation"
                type="text"
                placeholder="Organisation / department"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-red-100 placeholder:text-slate-400 focus:border-red-400 focus:ring-2"
              />
            </div>

            <div className="md:col-span-1">
              <label
                htmlFor="subject"
                className="block text-xs font-medium text-slate-700 md:text-sm"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="e.g. Urban planning support, risk mapping"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-red-100 placeholder:text-slate-400 focus:border-red-400 focus:ring-2"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block text-xs font-medium text-slate-700 md:text-sm"
              >
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Describe your use case, locations of interest, timelines, and any existing data sources."
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-red-100 placeholder:text-slate-400 focus:border-red-400 focus:ring-2"
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-red-700 px-8 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-800"
              >
                Submit Enquiry
              </button>
              <p className="text-[11px] text-slate-500 md:text-xs">
                By submitting this form you agree to be contacted about GeoDecision
                Analytics services. You can update your preferences any time.
              </p>
            </div>
          </form>
        </div>

        <aside className="min-w-0 space-y-4 rounded-2xl border border-red-100 bg-white p-4 shadow-sm sm:p-6 md:p-7">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
              <Image src="/globe.svg" alt="Contact icon" width={32} height={32} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
                Contact details
              </p>
              <p className="text-xs text-slate-500">
                Reach out using the form or the contact information below.
              </p>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-700 md:text-sm">
            <p>
              <span className="font-semibold text-slate-900">Email:</span>{" "}
              contact@geodecision-analytics.com
            </p>
            <p>
              <span className="font-semibold text-slate-900">Phone:</span>{" "}
              +91-98765-43210
            </p>
            <p>
              <span className="font-semibold text-slate-900">Location:</span> Add
              your city / region here.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 text-xs text-slate-600 md:text-sm">
            <p className="font-semibold text-slate-900">
              Need map-based collaboration?
            </p>
            <p className="mt-1">
              We regularly run remote review sessions around live web maps and
              dashboards so stakeholders can explore scenarios together in real time.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

