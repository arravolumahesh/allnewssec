import BuildFuture from "@/components/ourCompanies/build-future";
// import CaseStudies from "@/components/ourCompanies/our-studies";
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

import ChallengesFaced from "@/components/caseStudy/challenges-faced";
import GallaryWall from "@/components/caseStudy/gallary-wall";
import CaseStudies from "@/components/caseStudy/more-casee-studies";
import CaseHome from "@/components/caseStudy/IPH-Triveni-Program";
import Counts from "@/components/caseStudy/counts";
import Accomplished from "@/components/caseStudy/what-we-accomplished";
import HowWeDid from "@/components/caseStudy/how-we-did-it";

const Company = () => {
  return (
    <>
      <CaseHome />
      <Counts />
      <Accomplished />
      <HowWeDid />
      <ChallengesFaced />
      <GallaryWall />
      <CaseStudies />

      {/* <BuildFuture />
      <Happening />
      <OurFocusAreas />
      <Stories />
      <Sustainability />
      <CaseStudies />
      <VolunteeringOpportunities />
      <PartnerSwiperSection />
      <Bajaj />
      <CsrReport /> */}
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
