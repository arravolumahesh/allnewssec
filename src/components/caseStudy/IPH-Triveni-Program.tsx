"use client";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { alpha, Stack } from "@mui/material";
import React from "react";
import {
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import {
  Body1,
  Body2,
  H2,
  H6_3,
} from "@/styles/theme/components/typography.fontvariant";
import AnimatedButton from "@/commonComponents/animated-button";
import ReactiveBreadcrumb from "@/commonComponents/breadcrumb";

const backUrl =
  "https://res.cloudinary.com/dgvec2ipx/image/upload/v1695968756/header_qacffr.png";
const CaseHome = () => {
  return (
    <>
      <SectionWrapper
        SectionProps={{
          sx: {
            // background:"linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%),url(https://res.cloudinary.com/dgvec2ipx/image/upload/v1695968756/header_qacffr.png),lightgray 50% / cover no-repeat",
            background: {
              md: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) -74.89%, rgba(0, 0, 0, 0.86) 57.41%, #000 100%), url(${backUrl})`,
              xs: `linear-gradient(180deg, rgba(0, 0, 0, 0.80) 2.82%, rgba(0, 0, 0, 0.50) 50.9%, #000 100%), url(${backUrl}) left +65% center`,
            },
            backgroundRepeat: { xs: "no-repeat", md: "no-repeat" },
            backgroundSize: { xs: "cover", md: "cover" },
            // backgroundPosition:{xs:'center'}
          },
        }}
        sx={{ pt: { xxl: 4 } }}
      >
        <ReactiveBreadcrumb />

        <Stack
          sx={{
            md: { width: "667px", height: "255px", marginTop: H6_3 },
            mt: 10,
          }}
        >
          <MotionTypography
            variant="h1"
            sx={{
              fontSize: H2,
              color: (theme) => theme.palette.primary.contrastText,
              alignItems: "stretch",
              height: "67px",
              paddingTop: "40px",
              textTransform: "inherit",
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
              color: (theme) => alpha(theme.palette.common.white, 0.7),
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
            animationDelay={500}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
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
          <Stack
            sx={{
              width: { xs: "100%", md: "40%" },
              gap: "8px",
              order: { xs: 1 },
            }}
          >
            <MotionTypography
              sx={{
                fontSize: Body2,
                color: (theme) => alpha(theme.palette.common.white, 0.6),
              }}
              variants={staggerChildren}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              Key Sector
            </MotionTypography>
            <MotionTypography
              sx={{ fontSize: "18px" }}
              variants={staggerChildren}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              Skill Development
            </MotionTypography>
          </Stack>
          <Stack
            sx={{
              width: { xs: "100%", md: "40%" },
              gap: "8px",
              order: { xs: 3, md: 2 },
            }}
          >
            <MotionTypography
              sx={{
                fontSize: Body2,
                color: (theme) => alpha(theme.palette.common.white, 0.6),
              }}
              variants={staggerChildren}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              Location
            </MotionTypography>
            <MotionTypography
              sx={{ fontSize: "18px" }}
              variants={staggerChildren}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              Shahpur, Maharashtra
            </MotionTypography>
          </Stack>
          <Stack
            sx={{
              width: { xs: "100%", md: "40%" },
              gap: "8px",
              order: { xs: 2, md: 3 },
            }}
          >
            <MotionTypography
              sx={{
                fontSize: Body2,
                color: (theme) => alpha(theme.palette.common.white, 0.6),
              }}
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
          <Stack
            sx={{
              width: { xs: "100%", md: "40%" },
              gap: "8px",
              order: { xs: 4 },
            }}
          >
            <MotionTypography
              sx={{
                fontSize: Body2,
                color: (theme) => alpha(theme.palette.common.white, 0.6),
              }}
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
