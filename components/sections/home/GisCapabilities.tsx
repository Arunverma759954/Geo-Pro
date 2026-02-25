import Image from "next/image";

export default function GisCapabilities() {
    const capabilities = [
        {
            title: "Data Ingestion & Management",
            description:
                "Seamless integration of multi-source spatial datasets with quality assurance and validation.",
            image: "/gis2.webp",
            tag: "Spatial Data",
        },
        {
            title: "Spatial Modeling & Analysis",
            description:
                "Advanced geospatial algorithms for pattern recognition, forecasting, and optimization.",
            image: "/gis3.webp",
            tag: "Analytics",
        },
        {
            title: "Interactive Map Services",
            description:
                "Web-based mapping interfaces with real-time updates, filtering, and deep analytics.",
            image: "/gis.webp",
            tag: "Visualization",
        },
        {
            title: "Geospatial APIs",
            description:
                "RESTful APIs for custom integrations and third-party application connectivity.",
            image: "/gis4.webp",
            tag: "Integration",
        },
    ];

    return (
        <section className="relative overflow-hidden py-8 sm:py-12">
            {/* Background Decorations */}
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-teal-50 blur-[120px] opacity-60" />
            <div className="absolute top-1/2 -right-24 h-[500px] w-[500px] rounded-full bg-blue-50 blur-[150px] opacity-40" />

            <div className="relative space-y-12 sm:space-y-16 lg:space-y-24">
                {/* Header Section */}
                <div className="max-w-4xl space-y-4 sm:space-y-6 md:space-y-8">
                    <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <span className="h-0.5 w-8 bg-red-500 rounded-full sm:w-12" />
                            <p className="text-xs font-bold tracking-[0.25em] text-red-600 uppercase sm:text-sm sm:tracking-[0.3em]">
                                Technology Stack
                            </p>
                        </div>
                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 leading-[1.1] sm:text-3xl lg:text-4xl">
                            Advanced <span className="text-red-600">GIS & Spatial</span>{" "}
                            Capabilities
                        </h2>
                    </div>
                    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
                        <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                            We leverage industry-leading GIS platforms, spatial databases, and
                            APIs to deliver robust geospatial solutions. Our technology stack
                            is built for scalability, precision, and real-time decision
                            support.
                        </p>
                        <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                            From data ingestion to spatial modeling and interactive map
                            services, our platform integrates all the tools you need to turn
                            location data into actionable intelligence.
                        </p>
                    </div>
                </div>

                {/* Capabilities Layers */}
                <div className="space-y-16 sm:space-y-24 lg:space-y-32">
                    {capabilities.map((cap, index) => (
                        <div
                            key={index}
                            className={`group relative grid items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12 ${index % 2 === 1 ? "lg:direction-rtl" : ""
                                }`}
                        >
                            {/* Content Side */}
                            <div
                                className={`min-w-0 lg:col-span-5 space-y-4 sm:space-y-6 lg:space-y-8 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                                    }`}
                            >
                                <div className="space-y-6">
                                    <div className="inline-block transform transition-transform group-hover:-translate-y-1">
                                        <span className="rounded-full bg-teal-50 px-4 py-1.5 text-xs font-bold text-red-600 uppercase tracking-wider border border-teal-100/50">
                                            {cap.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-red-700 sm:text-2xl lg:text-3xl">
                                        {cap.title}
                                    </h3>
                                    <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                                        {cap.description}
                                    </p>
                                </div>

                                <button className="group/btn flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm border border-slate-200 transition-all hover:bg-slate-50 hover:shadow-md">
                                    Contact Specialist
                                    <svg
                                        className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Image Side */}
                            <div
                                className={`relative min-w-0 lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                                    }`}
                            >
                                {/* Image & decorative elements */}
                                <div className="absolute -inset-2 rounded-2xl bg-slate-100/50 blur-2xl -z-10 transition-colors group-hover:bg-teal-50/50 sm:-inset-4 sm:rounded-[40px]" />

                                <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-2xl transition-all duration-500 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] sm:rounded-[32px] sm:border-[8px] lg:group-hover:-translate-y-2">
                                    <div className="aspect-[16/10] relative">
                                        <Image
                                            src={cap.image}
                                            alt={cap.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Glass overlay for subtle highlight */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-white/10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
