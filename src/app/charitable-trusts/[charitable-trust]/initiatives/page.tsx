import CharitableTrustsInitiativesBanner from "@c/charitableTrusts/initiatives/charitable-trusts-initiatives-banner";
import SectionNavigation from "@cc/section-navigation";
import DiscoverOtherInitiatives, {
  DiscoverOtherInitiativesProps,
} from "@c/companyIntermediate/discover";
import discoverCharitableTrust1 from "@c/charitableTrusts/initiatives/images/discoverCharitableTrust/discover-charitable-trust-1.jpg";
import discoverCharitableTrust2 from "@c/charitableTrusts/initiatives/images/discoverCharitableTrust/discover-charitable-trust-2.jpg";
import discoverCharitableTrust3 from "@c/charitableTrusts/initiatives/images/discoverCharitableTrust/discover-charitable-trust-3.jpg";
import discoverCharitableTrust4 from "@c/charitableTrusts/initiatives/images/discoverCharitableTrust/discover-charitable-trust-4.jpg";
import discoverCharitableTrust5 from "@c/charitableTrusts/initiatives/images/discoverCharitableTrust/discover-charitable-trust-5.jpg";
import discoverCharitableTrust6 from "@c/charitableTrusts/initiatives/images/discoverCharitableTrust/discover-charitable-trust-6.jpg";
import InitiativeStats from "@c/charitableTrusts/initiatives/initiative-stats";

const CharitableTrustsInitiatives = () => {
  return (
    <>
      <CharitableTrustsInitiativesBanner />
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
      <InitiativeStats />
      <DiscoverOtherInitiatives
        SwiperData={verticalSwiperData}
        OtherOrganization={otherCompanies}
        title={"Discover initiatives by other Charitable trusts"}
      />
    </>
  );
};

export default CharitableTrustsInitiatives;

const menus = [
  {
    title: "Community Development",
    href: "#community-development",
  },
  {
    title: "Healthcare",
    href: "#healthcare",
  },
  {
    title: "Education",
    href: "#education",
  },
  {
    title: "Arts, Culture & Sports",
    href: "#culture-and-sports",
  },
  {
    title: "Peace & Spirituality",
    href: "#peace-spirituality",
  },
];

const verticalSwiperData: DiscoverOtherInitiativesProps["SwiperData"] = [
  { img: discoverCharitableTrust1 },
  { img: discoverCharitableTrust2 },
  { img: discoverCharitableTrust3 },
  { img: discoverCharitableTrust4 },
  { img: discoverCharitableTrust5 },
  { img: discoverCharitableTrust6 },
];

const otherCompanies: DiscoverOtherInitiativesProps["OtherOrganization"] = [
  {
    title: "Jamnalal Bajaj Sewa Trust",
    url: "/charitable-trusts/jamnalal-bajaj-foundation/initiatives",
  },
  {
    title: "Hammara Sapna",
    url: "charitable-trusts/hamaara-sapna",
  },
];
