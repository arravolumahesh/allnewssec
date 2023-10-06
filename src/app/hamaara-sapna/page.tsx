import ObjectiveSection from "@cc/objective-section";
import BeginningOfChange from "@c/hamaara-sapna/beginning-of-change";
import SectionNavigation from "@cc/section-navigation";

const HamaaraSapna = () => {
  return (
    <>
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
