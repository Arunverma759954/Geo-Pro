import HeroSection from "@/components/sections/home/HeroSection";
import GisCapabilities from "@/components/sections/home/GisCapabilities";
import HomeServicesHero from "@/components/sections/home/HomeServicesHero";
import ServicesStrip from "@/components/sections/home/ServicesStrip";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-4 py-8 sm:gap-16 sm:px-6 sm:py-12 md:gap-24 md:px-10 md:py-20">
      <HeroSection />
      <GisCapabilities />
      <HomeServicesHero />
      <ServicesStrip />
    </div>
  );
}
