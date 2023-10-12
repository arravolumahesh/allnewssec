"use client";
import SectionWrapper from "@/commonComponents/section-wrapper";
import SearchDrawerToggler from "./search-drawer";
import DropDown from "./dropdown";
import { Stack } from "@mui/material";
import React from "react";
import {
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import CommonBreadcrumb from "@/commonComponents/breadcrumb";

const Filterednews = () => {
  return (
    <>
      <SectionWrapper
        SectionProps={{
          sx: {
            background: "secondary.main",
            backgroundPosition: "right",
            backgroundSize: "cover",
          },
        }}
        py={{ xs: 2, md: 4 }} // Todo: basePy
        pb={{ xs: 4, md: 8 }}
      >
        <CommonBreadcrumb />
          <MotionTypography maxWidth={863} color={"primary.main"} variant="h1">
          all news
          </MotionTypography>
          <MotionTypography maxWidth={800} color={"secondary.900"} variant="body2">
          Stay informed by exploring all the latest news stories in the Bajaj world.
          </MotionTypography>
          <Stack display={"flex"} flexDirection={"row"}>
          <SearchDrawerToggler/>
          <DropDown/>
          </Stack>
      </SectionWrapper>
    </>
  );
};

export default Filterednews;

const staggerChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "150%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
