
import CompanyIntermediateBanner from "@/components/companyIntermediate/companyIntermediateBanner";
import IntermediateCount from "@/components/intermediate/intermediateCount";
import IntermediateMenu from "@/commonComponents/commonIntermediates/intermediateMenu";
import { NextPage } from "next";
import CompanyIntermediateInitiatives from "@/components/companyIntermediate/companyInitiatives";
import DiscoverCompanyIntermidiate from "@/components/companyIntermediate/discover";
import IntermediateCountAndCards from "@/components/companyIntermediate/companyInitiativecountandcards";

const menus = [
  {
    title:'All Initiatives',
    url:'/'
  },
  {
    title:'Skill Development',
    url:'/'
  },
  {
    title:'Education',
    url:'/'
  },
  {
    title:'Water Conversion',
    url:'/'
  }
]
const logoImg = "https://s3-alpha-sig.figma.com/img/db64/8e41/5817c9640f87a5e65c72730fd3c68df2?Expires=1696809600&Signature=CxQFzRXfbXHrEnJKXnG95laUmKKq0nOqnAW3CoeP6OJE8EgqbwkdNVdkbz8K8ya3yuv0M9gwESb1P9Afo80u4LFknhiblu3NbFUdVnwE37E2DRmDAxGQfxVuF0YuWaph~XlnMjaiXRowaPo-~TnQaSojfiLGvazwMENkDsq55s3KFItCsjDwnzuOvSoOQzGlljE9Ef1qBtcSa2Sn3RchKZqkN07-weEozkD7KHgdieV1CyHeCSq1c5hT4ZziO0JK8fTKmGtBrPbGvkkNbb7LhWBtkLrhbhZT4PyV69qAGfMVvaA8eKliQFEI53JIyKicQBE0gsmG6Nw1XZ~DByHKbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"


const initiative = [
  {
    imageUrl: "",
    location: "Maharashtra",
    title: "Gifting Smiles – No child left behind",
    slug: "test",
  },
  {
    imageUrl: "",
    location: "India",
    title: "Implementing skill-based education in schools",
    slug: "test",
  },
  {
    imageUrl: "",
    location: "Maharashtra",
    title: "Gifting Smiles – No child left behind",
    slug: "test",
  },
  {
    imageUrl: "",
    location: "Delhi",
    title: "IPH-Triveni Program",
    slug: "test",
  },
  {
    imageUrl: "",
    location: "Maharashtra",
    title: "Gifting Smiles – No child left behind",
    slug: "test",
  },
  {
    imageUrl: "",
    location: "Maharashtra",
    title: "Gifting Smiles – No child left behind",
    slug: "test",
  },
]

const IntermediatePage: NextPage = () => {
  return (
    <>     
      <CompanyIntermediateBanner />
      
        <IntermediateMenu
          logoImg={logoImg}
          menus={menus}
          styles={{
            alignItems:'center',
            justifyContent:'flex-start',
            gap:{xs:5,lg:12},          
              '& a:nth-child(2)':{
                ml:-12
              },
              '& a:last-child':{
                mr:'auto'
              }          
          }}
        />
        <IntermediateCountAndCards initiative={initiative} />
        <DiscoverCompanyIntermidiate />
      

    </>
  );
};

export default IntermediatePage;
