import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";

export default function GisCapabilities() {
    const capabilities = [
        {
            title: "Data Ingestion & Management",
            description:
                "Seamless integration of multi-source spatial datasets with quality assurance and validation.",
            image: "/Infra_4.jpg",
            tag: "Spatial Data",
        },
        {
            title: "Spatial Modeling & Analysis",
            description:
                "Advanced geospatial algorithms for pattern recognition, forecasting, and optimization.",
            image: "/Service_3.jpg",
            tag: "Analytics",
        },
        {
            title: "Interactive Map Services",
            description:
                "Web-based mapping interfaces with real-time updates, filtering, and deep analytics.",
            image: "/Home_2.jpg",
            tag: "Visualization",
        },
        {
            title: "Geospatial APIs",
            description:
                "RESTful APIs for custom integrations and third-party application connectivity.",
            image: "/Service_4.jpg",
            tag: "Integration",
        },
    ];

    return (
        <section className="relative overflow-hidden py-12">
            <div className="relative space-y-16 lg:space-y-24">
                {/* Header Section */}
                <Reveal direction="left" width="100%">
                    <div className="max-w-4xl space-y-6">
                        <div className="space-y-4">
                            <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#c40902] bg-[#c40902]/10 px-4 py-1.5 rounded-full border border-[#c40902]/20">
                                Technology Stack
                            </p>
                            <h2 className="text-2xl font-black tracking-tight text-white leading-[1.1] sm:text-3xl lg:text-4xl">
                                Advanced <span className="text-gradient">GIS & Spatial</span>{" "}
                                Capabilities
                            </h2>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            <p className="text-base leading-relaxed text-slate-300 sm:text-lg font-medium">
                                We leverage industry-leading GIS platforms, spatial databases, and
                                APIs to deliver robust geospatial solutions. Our technology stack
                                is built for scalability, precision, and real-time decision
                                support.
                            </p>
                            <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
                                From data ingestion to spatial modeling and interactive map
                                services, our platform integrates all the tools you need to turn
                                location data into actionable intelligence.
                            </p>
                        </div>
                    </div>
                </Reveal>

                {/* Capabilities Layers */}
                <div className="space-y-20 sm:space-y-32">
                    {capabilities.map((cap, index) => (
                        <div
                            key={index}
                            className={`group relative grid items-center gap-10 lg:grid-cols-12 lg:gap-16`}
                        >
                            {/* Content Side */}
                            <div
                                className={`min-w-0 lg:col-span-5 space-y-6 lg:space-y-8 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                                    }`}
                            >
                                <Reveal direction={index % 2 === 1 ? "right" : "left"} width="100%">
                                    <div className="space-y-6">
                                        <span className="rounded-full bg-[#c40902]/10 px-4 py-1.5 text-[10px] font-black text-[#c40902] uppercase tracking-[0.4em] border border-[#c40902]/20">
                                            {cap.tag}
                                        </span>
                                        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#c40902] sm:text-2xl">
                                            {cap.title}
                                        </h3>
                                        <p className="text-base leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors sm:text-lg">
                                            {cap.description}
                                        </p>

                                        <button className="group/btn flex items-center gap-3 rounded-full bg-white/5 px-8 py-3.5 text-sm font-bold text-white border border-white/10 transition-all hover:bg-white/10">
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
                                </Reveal>
                            </div>

                            {/* Image Side */}
                            <div
                                className={`relative min-w-0 lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                                    }`}
                            >
                                <Reveal direction={index % 2 === 1 ? "left" : "right"} width="100%">
                                    <div className="relative">
                                        <div className="absolute -inset-4 rounded-[40px] bg-cyan-500/5 blur-3xl -z-10 group-hover:bg-cyan-500/10 transition-all duration-500" />

                                        <div className="relative overflow-hidden rounded-3xl border border-white/10 glass-card shadow-2xl transition-all duration-500 lg:group-hover:-translate-y-2">
                                            <div className="aspect-[16/10] relative">
                                                <Image
                                                    src={cap.image}
                                                    alt={cap.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-tr from-[#041d3d]/40 via-transparent to-white/5" />
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
