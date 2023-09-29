"use client";
import React from "react";
import { MotionTypography } from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Stack } from "@mui/material";

const HerosOfInitiatives = () => {
  return (
    <SectionWrapper
      pt={{ xs: 7, md: 4 }}
      pb={{ xs: 7, md: 8 }}
      rowGap={{ xs: 6, md: 8 }}
      color={"secondary.main"}
      SectionProps={{
        bgcolor: "primary.main",
      }}
      overflow={"hidden"}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        columnGap={4}
        pl={{ xs: 0, md: "5.5%" }}
      >
        <MotionTypography variant={"h3"} component={"h2"}>
          Heroes behind our successful initiatives
        </MotionTypography>
      </Stack>
      <Stack direction={"row"} justifyContent={"center"}></Stack>
    </SectionWrapper>
  );
};

export default HerosOfInitiatives;
