import Hero from "@/components/home/hero";
import AboveProfits from "@/components/home/above-pofits";
import KeyFocus from "@/components/home/key-focus";
import Impact from "@/components/home/impact";
import Social from "@/components/home/social";
import Partners from "@/components/home/partners";
import InTheNews from "@/components/home/in-the-news";
import OurStoriesAndKeyHighlights from "@/components/home/our-stories-and-key-highlights";

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
    </>
  );
};

export default HomePage;
