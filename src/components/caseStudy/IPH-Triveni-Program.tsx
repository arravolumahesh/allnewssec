"use client";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Box, Card, Container, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import {
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import { motion } from "framer-motion";
import {
  Body1,
  Body2,
  H2,
  H6_3,
  Subtitle1,
} from "@/styles/theme/components/typography.fontvariant";
import theme from "@/styles/theme";
import { Height } from "@mui/icons-material";
import AnimatedButton from "@/commonComponents/animated-button";
import CommonBreadcrumb from "@/commonComponents/breadcrumb";

const CaseHome = () => {
  return (
    <>
      <SectionWrapper
        SectionProps={{
          sx: {
            // background:"linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%),url(https://res.cloudinary.com/dgvec2ipx/image/upload/v1695968756/header_qacffr.png),lightgray 50% / cover no-repeat",
            background:{md:"linear-gradient(180deg, rgba(0, 0, 0, 0.00) -74.89%, rgba(0, 0, 0, 0.86) 57.41%, #000 100%), url(https://res.cloudinary.com/dgvec2ipx/image/upload/v1695968756/header_qacffr.png)",xs:"linear-gradient(180deg, rgba(0, 0, 0, 0.80) 2.82%, rgba(0, 0, 0, 0.50) 50.9%, #000 100%), url(https://res.cloudinary.com/dgvec2ipx/image/upload/v1695968756/header_qacffr.png)"},
            backgroundRepeat: {xs:"no-repeat",md:"no-repeat"},
            backgroundSize: {xs:"cover",md:"cover"},
            backgroundPosition:{xs:'center'}
          },
        }}
        sx={{pt:{xxl:4}}}
      >
        <CommonBreadcrumb />  
       
        <Stack
          sx={{ md: { width: "667px", height: "255px", marginTop: H6_3 },mt:10 }}
        >
          <MotionTypography
            variant="h1"
            sx={{
              fontSize: H2,
              color: (theme) => theme.palette.primary.contrastText,
              alignItems: "stretch",
              height: "67px",
              paddingTop: "40px",
            }}
            variants={staggerChildren}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            IPH-Triveni Program
          </MotionTypography>

          <MotionTypography
            variant="body2"
            sx={{
              color: (theme) => theme.palette.primary.contrastText,
              alignItems: "stretch",
              fontSize: Body2,
              paddingTop: "50px",
              width: { xs: "100%", md: "60%" },
            }}
            variants={staggerChildren}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            Digital literacy goes beyond technical know-how. It refers to the
            knowledge, skills and attitudes that allow children to be both safe
            and empowered in an increasingly digital world. We are helping
            students learn digitally in order to keep them future and employment
            ready.
          </MotionTypography>

          <AnimatedButton
            sx={{
              mt: 4,
              width: { xs: "100%", md: "207px" },
              fontSize: Body1,
            }}
            href={"/caseStudy"}
            variant={"outlined"}
            color={"inherit"}
            animationDelay={1000}
            variants={staggerChildren}
          >
            Download Case Study
          </AnimatedButton>
        </Stack>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          rowGap={3}
          sx={{ mt: "40px" }}
        >
          <Stack sx={{ width: { xs: "100%", md: "40%" }, gap: "8px" }}>
            <MotionTypography
              sx={{ opacity: "0.7", fontSize: Body2 }}
              variants={staggerChildren}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              Key Secuter
            </MotionTypography>
            <MotionTypography
              sx={{ fontSize: "18px" }}
              variants={staggerChildren}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              Skills Development
            </MotionTypography>
          </Stack>
          <Stack sx={{ width: { xs: "100%", md: "40%" }, gap: "8px" }}>
            <MotionTypography
              sx={{ opacity: "0.7", fontSize: Body2 }}
              variants={staggerChildren}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              Partners
            </MotionTypography>
            <MotionTypography
              sx={{ fontSize: "18px" }}
              variants={staggerChildren}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              Bharitiya Yuva Shakti (BYST)
            </MotionTypography>
          </Stack>
          <Stack sx={{ width: { xs: "100%", md: "40%" }, gap: "8px" }}>
            <MotionTypography
              sx={{ opacity: "0.7", fontSize: Body2 }}
              variants={staggerChildren}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              Location
            </MotionTypography>
            <MotionTypography sx={{ fontSize: "18px" }}>
              Shahpur, Maharashtra
            </MotionTypography>
          </Stack>
          <Stack sx={{ width: { xs: "100%", md: "40%" }, gap: "8px" }}>
            <MotionTypography
              sx={{ opacity: "0.7", fontSize: Body2 }}
              variants={staggerChildren}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              Date
            </MotionTypography>
            <MotionTypography
              sx={{ fontSize: "18px" }}
              variants={staggerChildren}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              August 1, 2023
            </MotionTypography>
          </Stack>
        </Stack>
      </SectionWrapper>
    </>
  );
};

export default CaseHome;

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

const staggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 1,
    },
  },
};
