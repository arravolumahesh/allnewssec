import ChallengesFaced from "@c/caseStudy/challenges-faced";
import GallaryWall from "@c/caseStudy/gallary-wall";
import CaseStudies from "@c/caseStudy/more-casee-studies";
import CaseHome from "@c/caseStudy/IPH-Triveni-Program";
import Counts from "@c/caseStudy/counts";
import Accomplished from "@c/caseStudy/what-we-accomplished";
import HowWeDid from "@c/caseStudy/how-we-did-it";
import EmployeeTestimonial from "@c/caseStudy/employeeTestimonial";

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
      <CaseStudies />
    </>
  );
};

export default CaseStudy;
