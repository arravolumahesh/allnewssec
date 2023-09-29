import Partners from "@/components/home/partners";
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
      <Partners />
      <RequestDonations />
      <BajajFoundation />
    </>
  );
};

export default HomePage;
