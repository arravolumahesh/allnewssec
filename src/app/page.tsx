import Hero from "@/components/home/hero";
import AboveProfits from "@/components/home/above-pofits";
import KeyFocus from "@/components/home/key-focus";
import Impact from "@/components/home/impact";
import Social from "@/components/home/social";
import Partners from "@/components/home/partners";
import OurFocusAreas from "@/components/ourCompanies/ourFocusAreas";
import BuildFuture from "@/components/ourCompanies/build-future";
import Section from "@/components/ourCompanies/section";
import OurCaseStudies from "@/components/ourCompanies/our-studies";
import KeyHighlights from "@/components/home/key-highlights";
import InTheNews from "@/components/home/in-the-news";
import OurStoriesAndKeyHighlights from "@/components/home/our-stories-and-key-highlights";
import ContactUs from "@/components/home/contact-us";
import Sustainability from "@/components/ourCompanies/Sustainability";
import CsrReport from "@/components/ourCompanies/csrRepots";
import Bajaj from "@/components/ourCompanies/bajaj";
import HerosSection from "@/components/ourCompanies/herosSection";
import Enquire from "@/components/ourCompanies/enquire";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboveProfits />
      <KeyFocus />
      <Impact />
      <OurStoriesAndKeyHighlights />
      <InTheNews />
      <Partners />
      <Social />
      <ContactUs />
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

export default HomePage;
