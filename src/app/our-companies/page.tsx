import BuildFuture from "@/components/ourCompanies/build-future";
import CaseStudies from "@/components/ourCompanies/our-studies";
import OurFocusAreas from "@/components/ourCompanies/our-focus-areas";
import React from "react";
import Sustainability from "@/components/ourCompanies/sustainability";
import Happening from "@/components/ourCompanies/happening";
import Stories from "@/components/ourCompanies/stories";
import VolunteeringOpportunities from "@/components/ourCompanies/volunteeringOpportunities";
import PartnerSwiperSection from "@cc/partner-swiper-section";
import Enquire from "@/components/ourCompanies/enquire";
import Bajaj from "@/components/ourCompanies/bajaj";
import HerosOfInitiatives from "@c/ourCompanies/heros-of-initiatives";
import CsrReport from "@/components/ourCompanies/csrRepots";

const Company = () => {
  return (
    <>
      <BuildFuture />
      <Happening />
      <OurFocusAreas />
      <Stories />
      <Sustainability />
      <CaseStudies />
      <VolunteeringOpportunities />
      <PartnerSwiperSection />
      <Bajaj />
      <CsrReport />
      {/* <HerosSection /> */}
      {/* 
      <HerosOfInitiatives />
      {/* <Bajaj />
      <Enquire />
      <Section />
      */}
    </>
  );
};

export default Company;
