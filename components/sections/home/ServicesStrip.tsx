export default function ServicesStrip() {
  return (
    <section className="grid gap-4 rounded-2xl border border-red-100 bg-white p-4 shadow-sm sm:gap-6 sm:p-6 md:grid-cols-3">
      <div>
        <h3 className="text-sm font-semibold text-slate-900">
          GeoSpatial Consulting
        </h3>
        <p className="mt-2 text-xs text-slate-600 md:text-sm">
          Strategy, data architecture, and roadmaps to modernise your geospatial
          capabilities.
        </p>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-900">
          Analytics & Dashboards
        </h3>
        <p className="mt-2 text-xs text-slate-600 md:text-sm">
          Custom dashboards and reporting that surface the right spatial KPIs
          for decision-makers.
        </p>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-900">
          Training & Enablement
        </h3>
        <p className="mt-2 text-xs text-slate-600 md:text-sm">
          Capability-building programs so your teams can confidently use
          geospatial tools and outputs.
        </p>
      </div>
    </section>
  );
}

