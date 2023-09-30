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

const BuildFuture = () => {
  return (
    <>
      <SectionWrapper
<<<<<<< HEAD
        sx={{
          background: `linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%),url(https://res.cloudinary.com/dgvec2ipx/image/upload/v1695908230/Frame_1171280554_qhbcdb.png),lightgray 50% / cover no-repeat`,
=======
        SectionProps={{
          sx: {
            background: (theme) =>
              `${theme.palette.gradient.transparentToDarkRight} , url(${bg.src}) no-repeat`,
            backgroundPosition: "right",
            backgroundSize: "cover",
          },
>>>>>>> e22abe04bb2b6d42eb119c65924146e0fc4a9458
        }}
        py={{ /* ...basePy, */ xs: 2, md: 4 }} //Todo: basePy
        pb={{ /* ...basePy, */ xs: 3, md: 9 }}
      >
        <CommonBreadcrumb />
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
