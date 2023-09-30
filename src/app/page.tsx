import Hero from "@/components/home/hero";
import AboveProfits from "@/components/home/above-pofits";
import KeyFocus from "@/components/home/key-focus";
import Impact from "@/components/home/impact";
import Social from "@/components/home/social";
<<<<<<< HEAD
import Partners from "@/components/home/partners";
import InTheNews from "@/components/home/in-the-news";
import OurStoriesAndKeyHighlights from "@/components/home/our-stories-and-key-highlights";
import ContactUs from "@/components/home/contact-us";
=======
import InTheNews from "@/components/home/in-the-news";
import OurStoriesAndKeyHighlights from "@/components/home/our-stories-and-key-highlights";
import ContactUs from "@/components/home/contact-us";
import PartnerSwiperSection from "@cc/partner-swiper-section";
>>>>>>> e22abe04bb2b6d42eb119c65924146e0fc4a9458

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboveProfits />
      <KeyFocus />
      <Impact />
      <OurStoriesAndKeyHighlights />
      <InTheNews />
      <PartnerSwiperSection />
      <Social />
      <ContactUs />
    </>
  );
};

export default HomePage;
