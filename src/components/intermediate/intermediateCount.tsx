"use client";

import {
  MotionTypography,
  MotionTypographyProps,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Box, Grid } from "@mui/material";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CountBox from "./countBox";



const IntermediateCount = () => {

  return (
    <>
      <SectionWrapper
        SectionProps={{
          sx: {
            backgroundColor: "white",
          },
        }}
        sx={{
          pt: 5,
          pb: {xxl:0,xl:0,lg:0,md:0},
          backgroundColor: "white",
        }}
      >
        <CountBox />
      </SectionWrapper>
    </>
  );
};

export default IntermediateCount;


