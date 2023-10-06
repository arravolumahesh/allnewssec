import Discover from "@/commonComponents/discover";
import Enquire, { EnquireProps } from "@/commonComponents/enquire";
import ObjectiveSection from "@/commonComponents/objective-section";
import PartnerSwiperSection from "@/commonComponents/partner-swiper-section";
import SectionNavigation from "@/commonComponents/section-navigation";
import ActsOfProgress from "@/components/charitableTrusts/acts-of-progress";
import BajajAwards from "@/components/charitableTrusts/bajaj-awards";
import CarryingServies from "@/components/charitableTrusts/carring-servies";
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
      <PartnerSwiperSection />
      <Enquire data={enquireData} />
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

const enquireData: EnquireProps["data"] = [
  {
    title: "Request For Donation",
    description:
      "We can help with spreading the word and collecting funds for your cause.",
    image:
      "https://s3-alpha-sig.figma.com/img/8ec6/c2d6/b2ba014114e354804918c7c439af9b29?Expires=1697414400&Signature=JDgrUUXg3yKTf09VUD-c5VQOfE83S3ZtRe2je8oGYBf79401B8F6Zh58nJb40kP4dhhY1BAah5x1edRDdXUyOuTGVAHTyicAeqOgWaYrZ35F4~Ig2p9r6IPyUaM2j7jRF8UBKCaSuTckSkqkLiR4KWybzLPdrUzLnppE84xEe81VMVwpyvT1VUDl160moisxF9UJz1emmyg8KksHn4fnDd-tBbbP7hZvofqAaMwGDu6vvhsUCYk6pVG0Ua3mUvUoX1pth4R3e-Qq6899r7fJJdSLk0G3HJDRIFF07JclecT76oidiAK0ilKbx438SoRQyA-FOUZeBpi5Ft0Tk9bJPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    btn: "Enquire About Donations",
  },
  {
    title: "Partner with us",
    description: "Our team will join hands with you in your initiatives.",
    image:
      "https://s3-alpha-sig.figma.com/img/c56c/3893/8f08ddddc04eb10de0936899328c5533?Expires=1697414400&Signature=PvnqFC~Pz3oLYztt3dba6yFRJYQ6HscwN9l8Skn4MVukvFVCJ79enrbmrT32h93Z4tMZu~cp8Z-TZuDlonqA~CbBDq-dOckUz4imMyLc~qz6M7D5cuHMqI1-SuJq76lqrPlcoGsqy3ZbR1qaA3SgCgCPBqwQSTUTaudrmEjllpmBBMR254VgX4UhJNfEw3hLVeTOIrPnvqqi13SIi~wh93UNInLoLmHq7~trsdeAdr3lC5Ag~IZohHgUlKuhGcA2fV3XE3nzC4OYfilqmUCY38zbXWNcwc~V~Z9MVrtZGMXOGcQtnW9T4G6~tcjAkvgEyOasPZ0ZBauXtwuRpyerMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    btn: "Enquire About Partnerships",
  },
];
