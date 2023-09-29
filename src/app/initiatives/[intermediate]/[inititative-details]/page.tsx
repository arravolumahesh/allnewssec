import InitiativeDetailsHeader from "@/components/initiativeDetails/initiativedetailsHeader";
import InitiativeDetailsWrap from "@/components/initiativeDetails/initiativedetailswrap";
import MoreInitiatives from "@/components/initiativeDetails/moreInitiatives";
import { NextPage } from "next";

const InitiativeDetailPage: NextPage = () => {
    return (
      <>
        <InitiativeDetailsHeader />
        <InitiativeDetailsWrap />
        <MoreInitiatives />
      </>
    );
  };
  
  export default InitiativeDetailPage;