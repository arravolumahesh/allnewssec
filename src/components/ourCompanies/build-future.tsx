"use client";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Stack, Typography } from "@mui/material";
import React from "react";
import {
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import bg from "./images/bg.png";
import CommonBreadcrumb from "@/commonComponents/breadcrumb";

const BuildFuture = () => {
  return (
    <>
      <SectionWrapper
        SectionProps={{
          sx: {
            background: `linear-gradient(90deg, #000 -3.68%, rgba(0, 0, 0, 0.59) 72.78%, rgba(0, 0, 0, 0.30) 100%) , url(${bg.src}) no-repeat`,
            backgroundPosition: "right",
            backgroundSize: "cover",
          },
        }}
        pt={{ xs: 2, md: 4 }}
        pb={{ xs: 3, md: 9 }}
      >
        {CommonBreadcrumb()}
        <Stack mt={{ xs: 7, md: 12 }} maxWidth={863} rowGap={3}>
          <MotionTypography
            variant='h1'

            // variants={staggerChildren}
            // initial={"initial"}
            // whileInView={"animate"}
            // viewport={{ once: true }}
          >
            Building futures, empowering by skilling
          </MotionTypography>

          <MotionTypography
            variant='body2'
            // variants={staggerChildren}
            // initial={"initial"}
            // whileInView={"animate"}
            // viewport={{ once: true }}
          >
            At Bajaj Auto, our commitment to society is way beyond our business.
            As a true corporate citizen, our actions in community development
            have been empowering generations. Our CSR initiatives are designed
            leveraging our know-how to positively impact people and the planet.
          </MotionTypography>
        </Stack>
      </SectionWrapper>
    </>
  );
};

export default BuildFuture;

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
