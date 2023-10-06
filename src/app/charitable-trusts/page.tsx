import Discover from "@/commonComponents/discover";
import ObjectiveSection from "@/commonComponents/objective-section";
import PartnerSwiperSection from "@/commonComponents/partner-swiper-section";
import SectionNavigation from "@/commonComponents/section-navigation";
import ActsOfProgress from "@/components/charitableTrusts/acts-of-progress";
import BajajAwards from "@/components/charitableTrusts/bajaj-awards";
import CarryingServies from "@/components/charitableTrusts/carring-servies";
import DonationsAndPartners from "@/components/charitableTrusts/donation-and-partner";
import Initiatives from "@/components/charitableTrusts/initiatives";
import Nominations from "@/components/charitableTrusts/nominations";
import Stories from "@/components/charitableTrusts/stories";
import Wardha from "@/components/charitableTrusts/wardha-section";
import group2 from "@/components/ourCompanies/images/group2.png";
import group3 from "@/components/ourCompanies/images/group3.png";
import group5 from "@/components/ourCompanies/images/group5.png";
import group7 from "@/components/ourCompanies/images/group7.png";
import group8 from "@/components/ourCompanies/images/group8.png";
import OriginOfGenerationChange from "@c/ourCompanies/origin-of-generation-change";

const CharitableTrusts = () => {
  return (
    <>
      <CarryingServies />
      <SectionNavigation
        Sections={menus}
        LogoImageProps={{
          src: "https://s3-alpha-sig.figma.com/img/3285/3c08/35776a49d6eab1bf9f1c89e107b8f140?Expires=1697414400&Signature=QP7PRGqtTE8g0cy9wqbYD4ATbkmEcFn9hZ~nJRQGa-U9JtRKCgGiQHtv7bmmRmJlL8qYJ~-Y-hV5nVfktRmh-RsCGDSdMfFHtFGSOblKrakzwsJLBaCJPFUyQy1vr2GCKZ1tm5dZ3yx008RGgVPbEJJR4hd0hu06hAxI4oC0RszN89kxkaVUPo8vNNB6n91QZcUeiD~PHsLoe5YVGFbNZLxUxxSWhQjTFzsWcTzT6CBrVMXNNbOSuesxImK8p1SPlIwBas~ohlfkmCP8aYZLR6udWcl~yKPxt3eJ7BFMcYWp~klelSV7IG6ARQW7MTkHMhUn6ycme~X~ryygAsdbIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          alt: "",
          sx: {
            width: 111,
            height: { xs: 24, md: 48 },
          },
        }}
      />
      <ObjectiveSection Objective='We are guided by the timeless principles of Gandhiji. With a strong commitment to uplift the underserved communities, we transform lives across our nation.' />
      <OriginOfGenerationChange />
      <ActsOfProgress />
      <BajajAwards />
      <Nominations />
      <Wardha />
      <Initiatives />
      <Stories />
      <PartnerSwiperSection SectionProps={{ id: "partners" }} />
      <DonationsAndPartners />
      <Discover
        title='DISCOVER JAMNALAL BAJAJ FOUNDATION'
        link='Visit The Jamnalal Bajaj Foundation Website'
        href='/'
        ImageData={imageData}
      />
    </>
  );
};

export default CharitableTrusts;

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

const menus = [
  {
    title: "About Us",
    href: "#about-us",
  },
  {
    title: "What’s New",
    href: "#whats-new",
  },
  {
    title: "Awards",
    href: "#awards",
  },
  {
    title: "Initiatives",
    href: "#initiatives",
  },
  {
    title: "Stories",
    href: "#stories",
  },
  {
    title: "Partners",
    href: "#partners",
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
