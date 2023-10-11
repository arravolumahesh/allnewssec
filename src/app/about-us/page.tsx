import ObjectiveSection from "@/commonComponents/objective-section";
import AboutUsBanner from "@/components/aboutUs/banner";
import Leadership from "@/components/aboutUs/leadership/leadership";
import OurInitiatives from "@/components/aboutUs/our-initiatives";
import OurPurpose from "@/components/aboutUs/our-purpose";
import Vision from "@/components/aboutUs/vision";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <AboutUsBanner />
      <Vision />
      <OurPurpose />
      <ObjectiveSection
        Objective='Success is measured by the smiles we bring, the opportunities we create, and the positive change we ignite.'
        Author='Jamnalal Bajaj'
        Company='Founder, Bajaj Group'
        SectionProps={{
          sx: {
            background: "background.default",
          },
        }}
        color={"primary.main"}
        SVGProps={{
          width: 111,
          height: 326,
        }}
      />
      <Leadership />
      <OurInitiatives />
    </>
  );
};

export default AboutUs;
