"use client";
import SectionWrapper, { basePy } from "@/commonComponents/section-wrapper";
import { Stack, Typography } from "@mui/material";
import React from "react";
import {
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import bg from "./images/bg.png";
import CommonBreadcrumb from "@/commonComponents/breadcrumb";

const CarryingService = () => {
  return (
    <>
      <SectionWrapper
        SectionProps={{
          sx: {
            background: (theme) =>
              `${theme.palette.gradient.transparentToDarkRight}, url(https://res.cloudinary.com/dspbnevuo/image/upload/v1695902855/Frame_1171280553_i532al.png) no-repeat`,
            backgroundPosition: "right",
            backgroundSize: "cover",
          },
        }}
        py={{ /* ...basePy, */ xs: 2, md: 4 }} //Todo: basePy
        pb={{ /* ...basePy, */ xs: 4, md: 8 }}
      >
        <CommonBreadcrumb />
        <Stack mt={23} maxWidth={863} rowGap={3}>
          <MotionTypography
            variant='h1'

            // variants={staggerChildren}
            // initial={"initial"}
            // whileInView={"animate"}
            // viewport={{ once: true }}
          >
            CARRYING FORWARD A LEGACY OF SERVICE
          </MotionTypography>
        </Stack>
      </SectionWrapper>
    </>
  );
};

export default CarryingService;

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
