"use client";
import React from "react";
import ScrollTriggeredSwiperSection, {
  ScrollTriggeredSwiperSectionProps,
} from "@/commonComponents/scrollTriggeredSwiperSection";
import { H6_2 } from "@/styles/theme/components/typography.fontvariant";

const CharitableTrustsStories = () => {
  return (
    <ScrollTriggeredSwiperSection
      data={data}
      SectionProps={{ id: "stories" }}
      py={0}
    />
  );
};

export default CharitableTrustsStories;

const data: ScrollTriggeredSwiperSectionProps["data"] = [
  {
    bgImage:
      "https://s3-alpha-sig.figma.com/img/1c35/79d3/44b7670550a3293788be4cd400109c86?Expires=1697414400&Signature=WnAa~Rex9cH~eyqYmoHl-rrs115m6ps~sEjxgmJMRhgMi7y3x9VFHNXASMclAjrjefKGITYTiUHNdf5Tt1jfGGdI7u01NWDWoa2Gn57rInAFJf6w2daPxxm3w7QEw1VO1dtQgYlinzdSj3SN8J7EQpkyGZRaUS2Uegb0y03mXI5G1PBvjODq1EzcY1jdSJnC2TkmUm-o1Xv69xmqEn6Bq4EIeDcSE2Y-s3zSJ5~POj0VikIjhN65Qxq3b8TsT316904lEw~acpMFdB6i58FVMvl51sKeUZb-PXQ3~xFfONMx1ijkDVMG4FM9YHH01tDEgiMQISv2p89Lqhi2Byj1Uw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    description: `Sunita, a resident of Mumbai’s slums, once struggled to make ends meet. With the Project Hamaara Sapna, her life took a hopeful turn. The initiative not only taught her sewing and tailoring but instilled confidence, breaking the shackles of underprivilege. More than a job, it’s a renewed life, a journey from marginalization to dignity, reflecting the essence of our foundation.`,
    person: {
      name: "Sunita Kumari",
      info: "Beneficiary - Project Hamaara Sapna",
    },
    DescriptionTypographyProps: {
      fontSize: H6_2,
      sx: {
        opacity: 1,
      },
    },
  },
  {
    bgImage:
      "https://s3-alpha-sig.figma.com/img/1c35/79d3/44b7670550a3293788be4cd400109c86?Expires=1697414400&Signature=WnAa~Rex9cH~eyqYmoHl-rrs115m6ps~sEjxgmJMRhgMi7y3x9VFHNXASMclAjrjefKGITYTiUHNdf5Tt1jfGGdI7u01NWDWoa2Gn57rInAFJf6w2daPxxm3w7QEw1VO1dtQgYlinzdSj3SN8J7EQpkyGZRaUS2Uegb0y03mXI5G1PBvjODq1EzcY1jdSJnC2TkmUm-o1Xv69xmqEn6Bq4EIeDcSE2Y-s3zSJ5~POj0VikIjhN65Qxq3b8TsT316904lEw~acpMFdB6i58FVMvl51sKeUZb-PXQ3~xFfONMx1ijkDVMG4FM9YHH01tDEgiMQISv2p89Lqhi2Byj1Uw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    description: `Sunita, a resident of Mumbai’s slums, once struggled to make ends meet. With the Project Hamaara Sapna, her life took a hopeful turn. The initiative not only taught her sewing and tailoring but instilled confidence, breaking the shackles of underprivilege. More than a job, it’s a renewed life, a journey from marginalization to dignity, reflecting the essence of our foundation.`,
    person: {
      name: "Sunita Kumari",
      info: "Beneficiary - Project Hamaara Sapna",
    },
    DescriptionTypographyProps: {
      fontSize: H6_2,
      sx: {
        opacity: 1,
      },
    },
  },
];
