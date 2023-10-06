import InitiativeDetailsHeader from "@c/initiativeDetails/initiativedetailsHeader";
import InitiativeDetailsWrap from "@c/initiativeDetails/initiativedetailswrap";
import MoreInitiatives from "@c/initiativeDetails/moreInitiatives";
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