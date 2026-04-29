import HeroBanner from "./components/HeroBanner";
import WhatWeBuild from "./components/WhatWeBuild";
import HowPlatformsServe from "./components/HowPlatformsServe";
import HowWeBuild from "./components/HowWeBuild";
import IndustriesWeWorkWith from "./components/IndustriesWeWorkWith";
import SupportingCapabilities from "./components/SupportingCapabilities";
import CTABanner from "./components/CTABanner";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start flex-1 w-full">
      <HeroBanner />
      <WhatWeBuild />
      <HowPlatformsServe />
      <HowWeBuild />
      <IndustriesWeWorkWith />
      <SupportingCapabilities />
      <CTABanner />
      <ContactUs />
    </main>
  );
}
