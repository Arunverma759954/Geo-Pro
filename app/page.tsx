import HeroSection from "@/components/sections/home/HeroSection";
import GisCapabilities from "@/components/sections/home/GisCapabilities";
import HomeServicesHero from "@/components/sections/home/HomeServicesHero";
import WhoWeServe from "@/components/sections/home/WhoWeServe";
import WhyGeoDecision from "@/components/sections/home/WhyGeoDecision";
import ServicesStrip from "@/components/sections/home/ServicesStrip";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[1700px] flex-col gap-16 px-4 py-8 sm:gap-24 sm:px-6 sm:py-12 md:gap-32 md:px-10 md:py-20 text-white">
      <HeroSection />
      <WhoWeServe />
      <WhyGeoDecision />
      <GisCapabilities />
      <HomeServicesHero />
      <ServicesStrip />
    </div>
  );
}
