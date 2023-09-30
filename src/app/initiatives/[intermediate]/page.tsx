import IntermediateInitiatives from "@/components/intermediate/intermediateInitiatives";
import IntermediateBanner from "@/components/intermediate/intermediateBanner";
import IntermediateCount from "@/components/intermediate/intermediateCount";
import IntermediateMenu from "@/commonComponents/commonIntermediates/intermediateMenu";
import { NextPage } from "next";
const skillMenus = [
  {
    title: "All",
    url: "",
  },
  {
    title: "Skill Development",
    url: "",
  },
  {
    title: "Education",
    url: "",
  },
  {
    title: "Women Empowerment",
    url: "",
  },
  {
    title: "Community Development",
    url: "",
  },
  {
    title: "Animal welfare",
    url: "",
  },
  {
    title: "Other Initiatives",
    url: "",
  },
];


const IntermediatePage: NextPage = () => {
  return (
    <>
      <IntermediateBanner />
      <IntermediateMenu menus={skillMenus} />
      <IntermediateCount />
      <IntermediateInitiatives />
    </>
  );
};

export default IntermediatePage;
