import IntermediateInitiatives from "@/components/intermediate/intermediateInitiatives";
import IntermediateBanner from "@/components/intermediate/intermediateBanner";
import IntermediateCount from "@/components/intermediate/intermediateCount";
import IntermediateMenu from "@/components/intermediate/intermediateMenu";
import { NextPage } from "next";

const IntermediatePage: NextPage = () => {
  return (
    <>
      <IntermediateBanner />
      <IntermediateMenu />
      <IntermediateCount />
      <IntermediateInitiatives />
    </>
  );
};

export default IntermediatePage;
