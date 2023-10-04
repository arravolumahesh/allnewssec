"use client";
import React from "react";
import SectionWrapper from "@cc/section-wrapper";
import hero_1 from "./images/hero_1.jpg";
import hero_2 from "./images/hero_2.jpg";
import hero_3 from "./images/hero_3.jpg";
import hero_4 from "./images/hero_4.jpg";
import { H3_1 } from "@theme/components/typography.fontvariant";
import ArrowGradient from "@cc/arrow-gradient";
import { MotionTypography } from "@cc/motion-components";
import { Stack } from "@mui/material";
import HeoresSlider, {
  HeoresSliderProps,
} from "@c/ourCompanies/heroesOfInitiatives/heors-slider";

const HerosOfInitiatives = () => {
  return (
    <SectionWrapper
      color={"secondary.main"}
      SectionProps={{
        bgcolor: "primary.main",
        id: "recognition",
      }}
      direction={"row"}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
    >
      <ArrowGradient
        SVGProps={{
          width: 121,
          height: 316,
        }}
        flexGrow={1}
        display={{
          xs: "none",
          xl: "block",
        }}
        alignSelf={"flex-start"}
        mt={-12}
        ml={{ xl: 0, xxl: 8.375 }}
      />
      <Stack width={{ xs: 1, xl: 0.83 }}>
        <MotionTypography
          variant={"h2"}
          fontSize={H3_1}
          mb={5}
          width={650}
          maxWidth={"100%"}
          textAlign={{ xs: "center", md: "left" }}
          alignSelf={{
            xs: "center",
            md: "flex-start",
          }}
        >
          Heroes behind our successful initiatives.
        </MotionTypography>
        <HeoresSlider data={herosData} />
      </Stack>
    </SectionWrapper>
  );
};

export default HerosOfInitiatives;

const herosData: HeoresSliderProps["data"] = [
  {
    title: "Sanchali Khanna",
    image: hero_1,
    designation: "Senior Engineer",
    description:
      "Participated in IPH-Triveni Program & helped 200+ individuals.",
  },
  {
    title: "Rajat Sharme",
    image: hero_2,
    designation: "Senior Engineer",
    description:
      "Participated in IPH-Triveni Program & helped 200+ individuals.",
  },
  {
    title: "Sanjana Singh",
    image: hero_3,
    designation: "Senior Engineer",
    description:
      "Participated in IPH-Triveni Program & helped 200+ individuals.",
  },
  {
    title: "Rohit Kumar",
    image: hero_4,
    designation: "Senior Engineer",
    description:
      "Participated in IPH-Triveni Program & helped 200+ individuals.",
  },
];
