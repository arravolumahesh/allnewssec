import ChallengesFaced from "@c/caseStudy/challenges-faced";
import GallaryWall from "@c/caseStudy/gallary-wall";
import CaseHome from "@c/caseStudy/IPH-Triveni-Program";
import Counts from "@c/caseStudy/counts";
import Accomplished from "@c/caseStudy/what-we-accomplished";
import HowWeDid from "@c/caseStudy/how-we-did-it";
import EmployeeTestimonial from "@c/caseStudy/employeeTestimonial";
import CaseStudies from "@/commonComponents/case-studies";
import womens from "@/components/ourCompanies/images/womens.png";
import childrens from "@/components/ourCompanies/images/childrens.png";

const CaseStudy = () => {
  return (
    <>
      <CaseHome />
      <Counts />
      <Accomplished />
      <EmployeeTestimonial />
      <HowWeDid />
      <ChallengesFaced />
      <GallaryWall />
      <CaseStudies
        SectioHeader='More Case Studies'
        data={caseStudyData}
        ContainerEndChildrenProps={{ alignSelf: "flex-start" }}
      />
    </>
  );
};

export default CaseStudy;

const caseStudyData = [
  {
    img: childrens,
    tag: "IPH-Triveni Program",
    title: "Digital Skilling for Youth",
    subTitle:
      "Helping students learn digitally in order to keep them future and employment ready. ",
    href: "",
  },
  {
    img: womens,
    tag: "IPH-Triveni Program",
    title: "Providing Vocational Training for Women in Maharashtra",
    subTitle:
      "Aiding women in growing skills that help them achieve financial independence through mindfully curated training programmes. ",
    href: "",
  },
  {
    img: childrens,
    tag: "IPH-Triveni Program",
    title: "Digital Skilling for Youth",
    subTitle:
      "Helping students learn digitally in order to keep them future and employment ready. ",
    href: "",
  },
  {
    img: womens,
    tag: "IPH-Triveni Program",
    title: "Providing Vocational Training for Women in Maharashtra",
    subTitle:
      "Aiding women in growing skills that help them achieve financial independence through mindfully curated training programmes. ",
    href: "",
  },
];
