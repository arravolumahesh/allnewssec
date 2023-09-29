import OurFocusAreas from "@/components/ourCompanies/ourFocusAreas";
import BuildFuture from "@/components/ourCompanies/build-future";
import Section from "@/components/ourCompanies/section";
import OurCaseStudies from "@/components/ourCompanies/our-studies";
import Sustainability from "@/components/ourCompanies/Sustainability";
import CsrReport from "@/components/ourCompanies/csrRepots";
import Bajaj from "@/components/ourCompanies/bajaj";
import HerosSection from "@/components/ourCompanies/herosSection";
import Enquire from "@/components/ourCompanies/enquire";

const ourCompaniesPage = () => {
  return (
    <>
      <BuildFuture />
      <Section />
      <OurFocusAreas />
      <Sustainability />
      <OurCaseStudies />
      <HerosSection />
      <Enquire />
      <Bajaj />
      <CsrReport />
    </>
  );
};

export default ourCompaniesPage;
