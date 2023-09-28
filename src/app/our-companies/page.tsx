import BuildFuture from "@/components/ourCompanies/build-future";
import CaseStudies from "@/components/ourCompanies/our-studies";
import OurFocusAreas from "@/components/ourCompanies/our-focus-areas";
import React from "react";
import Sustainability from "@/components/ourCompanies/sustainability";
import Happening from "@/components/ourCompanies/happening";
import Stories from "@/components/ourCompanies/stories";

const Company = () => {
  return (
    <>
      <BuildFuture />
      <Happening />
      <OurFocusAreas />
      <Stories />
      <Sustainability />
      <CaseStudies />
      {/* <HerosSection /> */}
      {/* <Bajaj />
      <Enquire />
      <Section />
      <CsrReport /> */}
    </>
  );
};

export default Company;
