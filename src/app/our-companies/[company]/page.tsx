import BuildFuture from "@/components/ourCompanies/build-future";
import CaseStudies from "@/components/ourCompanies/our-studies";
import OurFocusAreas from "@/components/ourCompanies/our-focus-areas";
import Sustainability from "@/components/ourCompanies/sustainability";
import Happening from "@/components/ourCompanies/happening";
import Stories from "@/components/ourCompanies/stories";
import VolunteeringOpportunities from "@/components/ourCompanies/volunteeringOpportunities";
import PartnerSwiperSection from "@cc/partner-swiper-section";
import CsrReport from "@/components/ourCompanies/csr-repots";
import HerosOfInitiatives from "@c/ourCompanies/heroesOfInitiatives";
import SectionNavigation, {
  SectionNavigationProps,
} from "@cc/section-navigation";
import Discover from "@/commonComponents/discover";
import group2 from "@/components/ourCompanies/images/group2.png";
import group3 from "@/components/ourCompanies/images/group3.png";
import group5 from "@/components/ourCompanies/images/group5.png";
import group7 from "@/components/ourCompanies/images/group7.png";
import group8 from "@/components/ourCompanies/images/group8.png";
import FundsAndPartners from "@c/ourCompanies/fund-and-partners";

const Company = () => {
  return (
    <>
      <BuildFuture />
      <SectionNavigation Sections={menus} />
      <Happening />
      <OurFocusAreas />
      <Stories />
      <Sustainability />
      <CaseStudies />
      <HerosOfInitiatives />
      <VolunteeringOpportunities />
      <PartnerSwiperSection />
      <FundsAndPartners />
      <Discover
        title="Discover bajaj Auto"
        link="Visit Bajaj Auto Website"
        href="/"
        ImageData={imageData}
      />
      <CsrReport />
      {/*<FormDialog />*/}
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
