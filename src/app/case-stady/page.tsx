import ChallengesFaced from "@/components/caseStudy/challenges-faced";
import GallaryWall from "@/components/caseStudy/gallary-wall";
import CaseStudies from "@/components/caseStudy/more-casee-studies";
import CaseHome from "@/components/caseStudy/IPH-Triveni-Program";
import Counts from "@/components/caseStudy/counts";
import Accomplished from "@/components/caseStudy/what-we-accomplished";
import HowWeDid from "@/components/caseStudy/how-we-did-it";

const CaseStudy = () => {
  return (
    <>
      <CaseHome />
      <Counts />
      <Accomplished />
      <HowWeDid />
      <ChallengesFaced />
      <GallaryWall />
      <CaseStudies />
    </>
  );
};

export default CaseStudy;
