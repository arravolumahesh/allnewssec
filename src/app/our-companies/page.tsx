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
import SectionNavigation from "@cc/section-navigation";
import Enquire from "@c/ourCompanies/enquire";

const Company = () => {
  return (
    <>
      <BuildFuture />
      <SectionNavigation
        logoImg={
          "https://s3-alpha-sig.figma.com/img/db64/8e41/5817c9640f87a5e65c72730fd3c68df2?Expires=1696809600&Signature=CxQFzRXfbXHrEnJKXnG95laUmKKq0nOqnAW3CoeP6OJE8EgqbwkdNVdkbz8K8ya3yuv0M9gwESb1P9Afo80u4LFknhiblu3NbFUdVnwE37E2DRmDAxGQfxVuF0YuWaph~XlnMjaiXRowaPo-~TnQaSojfiLGvazwMENkDsq55s3KFItCsjDwnzuOvSoOQzGlljE9Ef1qBtcSa2Sn3RchKZqkN07-weEozkD7KHgdieV1CyHeCSq1c5hT4ZziO0JK8fTKmGtBrPbGvkkNbb7LhWBtkLrhbhZT4PyV69qAGfMVvaA8eKliQFEI53JIyKicQBE0gsmG6Nw1XZ~DByHKbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
        menus={menus}
      />
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

const menus = [
  {
    title: "What’s New",
    anchorTag: "#whats-new",
  },
  {
    title: "Programs & Initiatives",
    anchorTag: "#programs-initiatives",
  },
  {
    title: "Stories",
    anchorTag: "#stories",
  },
  {
    title: "Sustainability",
    anchorTag: "#sustainability",
  },
  {
    title: "Case Studies",
    anchorTag: "#case-studies",
  },
  {
    title: "Recognition",
    anchorTag: "#recognition",
  },
  {
    title: "Volunteering Opportunities",
    anchorTag: "#volunteering-opportunities",
  },
  {
    title: "Contact Us",
    anchorTag: "#contact-us",
  },
  {
    title: "CSR Reports",
    anchorTag: "#csr-reports",
  },
];
