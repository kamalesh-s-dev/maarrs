import HeroBanner from "./components/HeroBanner";
import WhatWeBuild from "./components/WhatWeBuild";
import HowPlatformsServe from "./components/HowPlatformsServe";
import HowWeBuild from "./components/HowWeBuild";
import IndustriesWeWorkWith from "./components/IndustriesWeWorkWith";
import SupportingCapabilities from "./components/SupportingCapabilities";
import CTABanner from "./components/CTABanner";
import Founders from "./components/Founders";
import Careers from "./components/Careers";
import ContactUs from "./components/ContactUs";
import GutterDecorated from "./components/GutterDecorated";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start flex-1 w-full bg-[#fafcff]">
      <HeroBanner />

      {/* SEC 01 — What We Build */}
      <GutterDecorated
        glowLeak="left"
        concentricRings="right"
        dotCluster="left"
        gridEdges
      >
        <WhatWeBuild />
      </GutterDecorated>

      {/* SEC 02 — How Our Platforms Serve */}
      <GutterDecorated
        arcSide="left"
        glowLeak="right"
        dotCluster="right"
        gridEdges
      >
        <HowPlatformsServe />
      </GutterDecorated>

      {/* SEC 03 — How We Build */}
      <GutterDecorated
        dotCluster="right"
        concentricRings="left"
        glowLeak="left"
        gridEdges
      >
        <HowWeBuild />
      </GutterDecorated>

      {/* SEC 04 — Industries We Work With */}
      <GutterDecorated
        arcSide="both"
        glowLeak="both"
        concentricRings="right"
        gridEdges
      >
        <IndustriesWeWorkWith />
      </GutterDecorated>

      {/* SEC 05 — Supporting Capabilities */}
      <GutterDecorated
        dotCluster="left"
        concentricRings="right"
        glowLeak="right"
        gridEdges
      >
        <SupportingCapabilities />
      </GutterDecorated>

      {/* SEC 06 — Founders */}
      <GutterDecorated
        arcSide="right"
        glowLeak="left"
        dotCluster="left"
      >
        <Founders />
      </GutterDecorated>

      <CTABanner />

      {/* SEC 07 — Careers */}
      <GutterDecorated
        dotCluster="both"
        concentricRings="both"
        glowLeak="right"
        gridEdges
      >
        <Careers />
      </GutterDecorated>

      {/* SEC 08 — Contact Us */}
      <GutterDecorated
        arcSide="left"
        glowLeak="right"
        dotCluster="right"
        concentricRings="left"
      >
        <ContactUs />
      </GutterDecorated>
    </main>
  );
}
