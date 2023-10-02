import CarryingServies from "@/components/charitableTrusts/carring-servies";
import Awards from "@/components/charitableTrusts/bajaj-awards";
import NominationsOpen from "@/components/charitableTrusts/nominations-open";
import AboutUs from "@/components/charitableTrusts/aboutUs";
import OriginofChange from "@/components/charitableTrusts/originofChange";
import ActsOfProgress from "@/components/charitableTrusts/actsOfProgress";
import Wardha from "@/components/charitableTrusts/wardha-section";
import Accordians from "@/components/charitableTrusts/accordians";
import SunithaBio from "@/components/charitableTrusts/sunithaBio";
import RequestDonations from "@/components/charitableTrusts/request-donation";
import BajajFoundation from "@/components/charitableTrusts/bajajfoundation";
import PartnerSwiperSection from "@/commonComponents/partner-swiper-section";

const HomePage = () => {
  return (
    <>
      <CarryingServies />
      <AboutUs />
      <OriginofChange />
      <ActsOfProgress />
      <Awards />
      <NominationsOpen />
      <Wardha />
      <Accordians />
      <SunithaBio />
      <PartnerSwiperSection />
      <RequestDonations />
      <BajajFoundation />
    </>
  );
};

export default HomePage;
