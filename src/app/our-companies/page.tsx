import BuildFuture from "@/components/ourCompanies/build-future";
import CaseStudies from "@/components/ourCompanies/our-studies";
import OurFocusAreas from "@/components/ourCompanies/our-focus-areas";
import Sustainability from "@/components/ourCompanies/sustainability";
import Happening from "@/components/ourCompanies/happening";
import Stories from "@/components/ourCompanies/stories";
import VolunteeringOpportunities from "@/components/ourCompanies/volunteeringOpportunities";
import PartnerSwiperSection from "@cc/partner-swiper-section";
import CsrReport from "@/components/ourCompanies/csr-repots";
import HerosOfInitiatives from "@c/ourCompanies/heroesOfInitiatives";
import SectionNavigation, {
  SectionNavigationProps,
} from "@cc/section-navigation";
import Discover from "@/commonComponents/discover";
import group2 from "@/components/ourCompanies/images/group2.png";
import group3 from "@/components/ourCompanies/images/group3.png";
import group5 from "@/components/ourCompanies/images/group5.png";
import group7 from "@/components/ourCompanies/images/group7.png";
import group8 from "@/components/ourCompanies/images/group8.png";
import Enquire from "@/commonComponents/enquire";

const Company = () => {
  return (
    <>
      <BuildFuture />
      <SectionNavigation Sections={menus} />
      <Happening />
      <OurFocusAreas />
      <Stories />
      <Sustainability />
      <CaseStudies />
      <HerosOfInitiatives />
      <VolunteeringOpportunities />
      <PartnerSwiperSection />
      <Enquire data={enquireData} />
      <Discover
        title='Discover bajaj Auto'
        link='Visit Bajaj Auto Website'
        href='/'
        ImageData={imageData}
      />
      <CsrReport />
    </>
  );
};

export default Company;

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

const menus: SectionNavigationProps["Sections"] = [
  {
    title: "What’s New",
    href: "#whats-new",
  },
  {
    title: "Programs & Initiatives",
    href: "#programs-initiatives",
  },
  {
    title: "Stories",
    href: "#stories",
  },
  {
    title: "Sustainability",
    href: "#sustainability",
  },
  {
    title: "Case Studies",
    href: "#case-studies",
  },
  {
    title: "Recognition",
    href: "#recognition",
  },
  {
    title: "Volunteering Opportunities",
    href: "#volunteering-opportunities",
  },
  {
    title: "Bajaj Auto",
    href: "#bajaj-auto",
  },
  {
    title: "Contact Us",
    href: "#contact-us",
  },
  {
    title: "CSR Reports",
    href: "#csr-reports",
  },
];

const enquireData = [
  {
    title: "Raise Funds",
    description:
      "We can help with spreading the word and collecting funds for your cause.",
    image:
      "https://s3-alpha-sig.figma.com/img/8ec6/c2d6/b2ba014114e354804918c7c439af9b29?Expires=1697414400&Signature=JDgrUUXg3yKTf09VUD-c5VQOfE83S3ZtRe2je8oGYBf79401B8F6Zh58nJb40kP4dhhY1BAah5x1edRDdXUyOuTGVAHTyicAeqOgWaYrZ35F4~Ig2p9r6IPyUaM2j7jRF8UBKCaSuTckSkqkLiR4KWybzLPdrUzLnppE84xEe81VMVwpyvT1VUDl160moisxF9UJz1emmyg8KksHn4fnDd-tBbbP7hZvofqAaMwGDu6vvhsUCYk6pVG0Ua3mUvUoX1pth4R3e-Qq6899r7fJJdSLk0G3HJDRIFF07JclecT76oidiAK0ilKbx438SoRQyA-FOUZeBpi5Ft0Tk9bJPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    btnText: "Enquire About Fundraising",
  },
  {
    title: "Partner with us",
    description: "Our team will join hands with you in your initiatives.",
    image:
      "https://s3-alpha-sig.figma.com/img/c56c/3893/8f08ddddc04eb10de0936899328c5533?Expires=1697414400&Signature=PvnqFC~Pz3oLYztt3dba6yFRJYQ6HscwN9l8Skn4MVukvFVCJ79enrbmrT32h93Z4tMZu~cp8Z-TZuDlonqA~CbBDq-dOckUz4imMyLc~qz6M7D5cuHMqI1-SuJq76lqrPlcoGsqy3ZbR1qaA3SgCgCPBqwQSTUTaudrmEjllpmBBMR254VgX4UhJNfEw3hLVeTOIrPnvqqi13SIi~wh93UNInLoLmHq7~trsdeAdr3lC5Ag~IZohHgUlKuhGcA2fV3XE3nzC4OYfilqmUCY38zbXWNcwc~V~Z9MVrtZGMXOGcQtnW9T4G6~tcjAkvgEyOasPZ0ZBauXtwuRpyerMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    btnText: "Enquire About Partnerships",
  },
];
