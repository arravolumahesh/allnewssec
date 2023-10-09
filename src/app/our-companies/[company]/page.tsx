import BuildFuture from "@/components/ourCompanies/build-future";
import OurFocusAreas from "@/components/ourCompanies/our-focus-areas";
import Sustainability from "@/components/ourCompanies/sustainability";
import Happening from "@/components/ourCompanies/happening";
import Stories from "@/components/ourCompanies/stories";
import VolunteeringOpportunities from "@/components/ourCompanies/volunteeringOpportunities";
import PartnerSwiperSection from "@cc/partner-swiper-section";
import CsrReport from "@/components/ourCompanies/csr-reports";
import HerosOfInitiatives from "@c/ourCompanies/heroesOfInitiatives";
import SectionNavigation, {
  SectionNavigationProps,
} from "@cc/section-navigation";
import DiscoverSection from "@cc/discover-section";
import group2 from "@/components/ourCompanies/images/group2.png";
import group3 from "@/components/ourCompanies/images/group3.png";
import group5 from "@/components/ourCompanies/images/group5.png";
import group7 from "@/components/ourCompanies/images/group7.png";
import group8 from "@/components/ourCompanies/images/group8.png";
import FundsAndPartners from "@c/ourCompanies/fund-and-partners";
import CaseStudies from "@/commonComponents/case-studies";
import womens from "@/components/ourCompanies/images/womens.png";
import childrens from "@/components/ourCompanies/images/childrens.png";
import { useMemo } from "react";

const Company = ({ params }: { params: { company: string } }) => {
  const caseStudyData = useMemo(
    () => [
      {
        img: childrens,
        tag: "IPH-Triveni Program",
        title: "Digital Skilling for Youth",
        subTitle:
          "Helping students learn digitally in order to keep them future and employment ready. ",
        href: `${params.company}/case-studies`,
      },
      {
        img: womens,
        tag: "IPH-Triveni Program",
        title: "Providing Vocational Training for Women in Maharashtra",
        subTitle:
          "Aiding women in growing skills that help them achieve financial independence through mindfully curated training programmes. ",
        href: `${params.company}/case-studies`,
      },
      {
        img: childrens,
        tag: "IPH-Triveni Program",
        title: "Digital Skilling for Youth",
        subTitle:
          "Helping students learn digitally in order to keep them future and employment ready. ",
        href: `${params.company}/case-studies`,
      },
      {
        img: womens,
        tag: "IPH-Triveni Program",
        title: "Providing Vocational Training for Women in Maharashtra",
        subTitle:
          "Aiding women in growing skills that help them achieve financial independence through mindfully curated training programmes. ",
        href: `${params.company}/case-studies`,
      },
    ],
    [params.company],
  );
  return (
    <>
      <BuildFuture />
      <SectionNavigation Sections={menus} />
      <Happening />
      <OurFocusAreas />
      <Stories />
      <Sustainability />
      <CaseStudies data={caseStudyData} />
      <HerosOfInitiatives />
      <VolunteeringOpportunities />
      <PartnerSwiperSection />
      <FundsAndPartners />
      <DiscoverSection
        title="Discover bajaj Auto"
        linkProps={{
          href: "/",
          children: "Visit Bajaj Auto Website",
        }}
        ImageData={imageData}
      />
      <CsrReport />
    </>
  );
};

export default Company;

const imageData = [
  { img: group2 },
  { img: group3 },
  { img: group5 },
  { img: group7 },
  { img: group8 },
  { img: group2 },
  { img: group3 },
  { img: group5 },
  { img: group7 },
  { img: group8 },
];

const menus: SectionNavigationProps["Sections"] = [
  {
    title: "What’s New",
    href: "#whats-new",
  },
  {
    title: "Programs & Initiatives",
    href: "#programs-initiatives",
  },
  {
    title: "Stories",
    href: "#stories",
  },
  {
    title: "Sustainability",
    href: "#sustainability",
  },
  {
    title: "Case Studies",
    href: "#case-studies",
  },
  {
    title: "Recognition",
    href: "#recognition",
  },
  {
    title: "Volunteering Opportunities",
    href: "#volunteering-opportunities",
  },
  {
    title: "Contact Us",
    href: "#contact-us",
  },
  {
    title: "Gallery",
    href: "#gallery",
  },
];
