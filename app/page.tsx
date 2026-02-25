import HeroSection from "@/components/sections/home/HeroSection";
import GisCapabilities from "@/components/sections/home/GisCapabilities";
import HomeServicesHero from "@/components/sections/home/HomeServicesHero";
import ServicesStrip from "@/components/sections/home/ServicesStrip";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col gap-24 px-6 py-12 md:px-10 md:py-20">
      <HeroSection />
      <GisCapabilities />
      <HomeServicesHero />
      <ServicesStrip />
    </div>
  );
}
