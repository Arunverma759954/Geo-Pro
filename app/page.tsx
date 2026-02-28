import HomeSlider from "@/components/sections/home/HomeSlider";
import GisCapabilities from "@/components/sections/home/GisCapabilities";
import HomeServicesHero from "@/components/sections/home/HomeServicesHero";
import WhoWeServe from "@/components/sections/home/WhoWeServe";
import WhyGeoDecision from "@/components/sections/home/WhyGeoDecision";
import ServicesStrip from "@/components/sections/home/ServicesStrip";

export default function Home() {
  return (
    <div className="flex flex-col text-slate-900">
      <HomeSlider />
      <WhoWeServe />
      <WhyGeoDecision />
      <GisCapabilities />
      <HomeServicesHero />
      <ServicesStrip />
    </div>
  );
}
