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

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboveProfits />
      <KeyFocus />
      <Impact />
      <KeyHighlights />
      <InTheNews />
      <Partners />
      <Social />
      {/* <BuildFuture />
      <Section />
      <OurCaseStudies />
      <OurFocusAreas /> */}
    </>
  );
};

export default HomePage;
