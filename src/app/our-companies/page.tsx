import Sustainability from "@/components/ourCompanies/Sustainability";
import Bajaj from "@/components/ourCompanies/bajaj";
import BuildFuture from "@/components/ourCompanies/build-future";
import CsrReport from "@/components/ourCompanies/csrRepots";
import Enquire from "@/components/ourCompanies/enquire";
import HerosSection from "@/components/ourCompanies/herosSection";
import CaseStudies from "@/components/ourCompanies/our-studies";
import OurFocusAreas from "@/components/ourCompanies/our-focus-areas";
import Section from "@/components/ourCompanies/section";
import React from "react";

const OurCompanies = () => {
  return (
    <>
      <OurFocusAreas />
      {/* <HerosSection /> */}
      {/* <Bajaj /> */}
      <BuildFuture />
      <Enquire />
      <Sustainability />
      <CaseStudies />
      {/* <Section /> */}
      {/* <CsrReport /> */}
    </>
  );
};

export default OurCompanies;
