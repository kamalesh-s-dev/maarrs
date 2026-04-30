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
      
      <GutterDecorated 
        ghostNumber="01" 
        glowLeak="left" 
        concentricRings="right" 
        dotCluster="left" 
        verticalLabel="PLATFORM ENGINEERING" 
        sectionBadge="SEC.01" 
        gridEdges 
        cornerMarks 
        crossMarks
        tickMarks
      >
        <WhatWeBuild />
      </GutterDecorated>
      
      <GutterDecorated 
        arcSide="left" 
        glowLeak="right" 
        scanLine 
        crossMarks 
        verticalLabel="OPERATIONAL IMPACT" 
        sectionBadge="SEC.02"
        watermarkText="IMPACT"
      >
        <HowPlatformsServe />
      </GutterDecorated>
      
      <GutterDecorated 
        dotCluster="right" 
        concentricRings="left" 
        verticalLabel="DEVELOPMENT LIFECYCLE" 
        gridEdges 
        cornerMarks
        ghostNumber="03"
        tickMarks
      >
        <HowWeBuild />
      </GutterDecorated>
      
      <GutterDecorated 
        arcSide="both" 
        glowLeak="both" 
        crossMarks 
        verticalLabel="INDUSTRY SOLUTIONS" 
        sectionBadge="SEC.04"
        watermarkText="DOMAINS"
      >
        <IndustriesWeWorkWith />
      </GutterDecorated>
      
      <GutterDecorated 
        dotCluster="left" 
        concentricRings="right" 
        gridEdges 
        verticalLabel="SUPPORT & SCALING" 
        cornerMarks
        ghostNumber="05"
        scanLine
        tickMarks
      >
        <SupportingCapabilities />
      </GutterDecorated>
      
      <CTABanner />
      
      <GutterDecorated 
        arcSide="right" 
        glowLeak="left" 
        crossMarks 
        verticalLabel="LEADERSHIP" 
        sectionBadge="SEC.06"
        watermarkText="VISION"
      >
        <Founders />
      </GutterDecorated>
      
      <GutterDecorated 
        dotCluster="both" 
        concentricRings="both" 
        gridEdges 
        verticalLabel="JOIN US" 
        cornerMarks
        ghostNumber="07"
        tickMarks
      >
        <Careers />
      </GutterDecorated>
      
      <GutterDecorated 
        arcSide="left" 
        glowLeak="right" 
        verticalLabel="CONNECT" 
        sectionBadge="SEC.08"
        watermarkText="MAARRS"
      >
        <ContactUs />
      </GutterDecorated>
    </main>
  );
}
