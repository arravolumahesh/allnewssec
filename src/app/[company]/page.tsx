import Bajaj from "@/components/ourCompanies/bajaj";
import BuildFuture from "@/components/ourCompanies/build-future";
import CsrReport from "@/components/ourCompanies/csrRepots";
import Enquire from "@/components/ourCompanies/enquire";
import HerosSection from "@/components/ourCompanies/herosSection";
import CaseStudies from "@/components/ourCompanies/our-studies";
import OurFocusAreas from "@/components/ourCompanies/our-focus-areas";
import Section from "@/components/ourCompanies/section";
import React from "react";
import { NextPage } from "next";
import Sustainability from "@/components/ourCompanies/Sustainability";
import Happening from "@/components/ourCompanies/happening";
import Stories from "@/components/ourCompanies/stories";

const Company: NextPage = () => {
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
