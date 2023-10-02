import BuildFuture from "@/components/ourCompanies/build-future";
import CaseStudies from "@/components/ourCompanies/our-studies";
import OurFocusAreas from "@/components/ourCompanies/our-focus-areas";
import Sustainability from "@/components/ourCompanies/sustainability";
import Happening from "@/components/ourCompanies/happening";
import Stories from "@/components/ourCompanies/stories";
import VolunteeringOpportunities from "@/components/ourCompanies/volunteeringOpportunities";
import PartnerSwiperSection from "@cc/partner-swiper-section";
import DiscoverBajaj from "@c/ourCompanies/discover-bajaj";
import CsrReport from "@/components/ourCompanies/csr-repots";
import HerosOfInitiatives from "@c/ourCompanies/heroesOfInitiatives";
import SectionNavigation, {
  SectionNavigationProps,
} from "@cc/section-navigation";
import Enquire from "@c/ourCompanies/enquire";

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
      <Enquire />
      <DiscoverBajaj />
      <CsrReport />
    </>
  );
};

export default Company;

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
    title: "Bajaj Auto",
    href: "#bajaj-auto",
  },
  {
    title: "CSR Reports",
    href: "#csr-reports",
  },
];
