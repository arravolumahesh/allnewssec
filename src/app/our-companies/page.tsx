import BuildFuture from "@/components/ourCompanies/build-future";
import CaseStudies from "@/components/ourCompanies/our-studies";
import OurFocusAreas from "@/components/ourCompanies/our-focus-areas";
import React from "react";
import Sustainability from "@/components/ourCompanies/sustainability";
import Happening from "@/components/ourCompanies/happening";
import Stories from "@/components/ourCompanies/stories";
import VolunteeringOpportunities from "@/components/ourCompanies/volunteeringOpportunities";
import PartnerSwiperSection from "@cc/partner-swiper-section";
import DiscoverBajaj from "@c/ourCompanies/discover-bajaj";
import CsrReport from "@/components/ourCompanies/csrRepots";
import HerosOfInitiatives from "@c/ourCompanies/heroesOfInitiatives";
import SectionMenu from "@/components/ourCompanies/section-menu";

const Company = () => {
  return (
    <>
      <BuildFuture />
      <SectionMenu menus={menus} />
      <Happening />
      <OurFocusAreas />
      <Stories />
      <Sustainability />
      <CaseStudies />
      <HerosOfInitiatives />
      <VolunteeringOpportunities />
      <PartnerSwiperSection />
      <DiscoverBajaj />
      <CsrReport />
      {/* <HerosSection /> */}
      {/*
      <HerosOfInitiatives />
      <Section />
      {/* <Bajaj />
      <Enquire />
      <CsrReport /> */}
    </>
  );
};

export default Company;

const menus = [
  {
    title: "What’s New",
    anchorTag: "/",
  },
  {
    title: "Programs & Initiatives",
    anchorTag: "/",
  },
  {
    title: "Stories",
    anchorTag: "/",
  },
  {
    title: "Sustainability",
    anchorTag: "/",
  },
  {
    title: "Case Studies",
    anchorTag: "/",
  },
  {
    title: "Recognition",
    anchorTag: "/",
  },
  {
    title: "Volunteering Opportunities",
    anchorTag: "/",
  },
  {
    title: "CSR Reports",
    anchorTag: "/",
  },
];
