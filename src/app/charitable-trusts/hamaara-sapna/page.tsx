import ObjectiveSection from "@cc/objective-section";
import BeginningOfChange from "@c/charitableTrusts/hamaara-sapna/beginning-of-change";
import SectionNavigation from "@cc/section-navigation";
import HeroBanner from "@c/charitableTrusts/hamaara-sapna/hero-banner";
import ActOfProgress from "@c/charitableTrusts/hamaara-sapna/act-of-progress";
import PartnerSwiperSection from "@cc/partner-swiper-section";
import DiscoverSection, { DiscoverSectionProps } from "@cc/discover-section";
import di1 from "@c/charitableTrusts/hamaara-sapna/images/discover/hs-discover-1.jpg";
import di2 from "@c/charitableTrusts/hamaara-sapna/images/discover/hs-discover-2.jpg";
import di3 from "@c/charitableTrusts/hamaara-sapna/images/discover/hs-discover-3.jpg";
import di4 from "@c/charitableTrusts/hamaara-sapna/images/discover/hs-discover-4.jpg";
import di5 from "@c/charitableTrusts/hamaara-sapna/images/discover/hs-discover-5.jpg";
import di6 from "@c/charitableTrusts/hamaara-sapna/images/discover/hs-discover-6.jpg";
import di7 from "@c/charitableTrusts/hamaara-sapna/images/discover/hs-discover-7.jpg";
import di8 from "@c/charitableTrusts/hamaara-sapna/images/discover/hs-discover-8.jpg";
import HamaaraSapnaStories from "@c/charitableTrusts/hamaara-sapna/hamaara-sapna-stories";
import HowWeHelp from "@c/charitableTrusts/hamaara-sapna/how-we-help";
import Programmes from "@c/charitableTrusts/hamaara-sapna/programmes";

const HamaaraSapna = () => {
  return (
    <>
      <HeroBanner />
      <SectionNavigation
        Sections={menus}
        LogoImageProps={{
          src: "https://s3-alpha-sig.figma.com/img/795b/2fc6/fe169a8bdf078ee4b90ed23b7b88d1f5?Expires=1697414400&Signature=WdrVAp7bzzi3FkV1Yh4xDkf~M0J~4VFrOA2yc0AUkFBQYloYHx7kGnsN~eZwuvJPtl~RVcQJeJo0Mrhhzvq~OMuZw7cGjW4Mb1UUjhxAHRZe35OP5xjQmiW02ASDWFCmaIMyFeAuCVTMnbGlWGvzxreGYPEWucgvvvsq3n5OavtZTPQ8dSvEvW4tJ5tGXj-eBGQcDOamvv7F9RDBAONPZ5RcAKSpYejy5hJG71qavFHIm9p~Jxp~FdSEuObyrsU7M-poHF-n8~D5iKlfuNnwhsP0BcNGho~yTgiDpzXwK1fsDIqbIYZJmDevzEFQb1HmHUcoO9MFWqoiRSp90MK76Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          alt: "",
          sx: {
            width: 111,
            height: { xs: 24, md: 48 },
          },
        }}
      />
      <ObjectiveSection Objective={objective} />
      <BeginningOfChange />
      <ActOfProgress />
      <HowWeHelp />
      <HamaaraSapnaStories />
      <Programmes />
      <PartnerSwiperSection />
      <DiscoverSection
        title={"DISCOVER hamaara sapna"}
        linkProps={{
          href: "/",
          children: "Visit The Hamaara Sapna Website",
        }}
        ImageData={discoverImageData}
      />
    </>
  );
};

export default HamaaraSapna;

const objective = `We aim to create sustainable pathways for marginalised women, breaking them free from socio-economic constraints.`;

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
    title: "Our Ideas",
    href: "#awards",
  },
  {
    title: "Stories",
    href: "#initiatives",
  },
  {
    title: "Volunteering",
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

const discoverImageData: DiscoverSectionProps["ImageData"] = [
  { img: di1 },
  { img: di2 },
  { img: di3 },
  { img: di4 },
  { img: di5 },
  { img: di6 },
  { img: di7 },
  { img: di8 },
];
