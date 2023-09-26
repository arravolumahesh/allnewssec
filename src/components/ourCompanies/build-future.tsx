import SectionWrapper from "@/commonComponents/section-wrapper";
import { Stack, Typography } from "@mui/material";
import { helvetica } from "@/app/font";
import React from "react";
import {
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";

const BuildFuture = () => {
  return (
    <>
      <SectionWrapper
        sx={{
          background:
            "linear-gradient(90deg, #000 -3.68%, rgba(0, 0, 0, 0.59) 72.78%, rgba(0, 0, 0, 0.30) 100%)",
        }}
      >
        <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <MotionTypography
            variant="h5"
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "130%",
              color: "rgba(255, 255, 255, 0.50)",
              fontFamily: helvetica,
              height: "20px",
            }}
            variants={staggerChildren}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            Our Companies {">"}
          </MotionTypography>
          <MotionTypography
            variant="h5"
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "130%",
              color: "#fff",
              fontFamily: helvetica,
              height: "20px",
            }}
            variants={staggerChildren}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            &nbsp;Bajaj Auto
          </MotionTypography>
        </Stack>
        <MotionTypography
          variant="h1"
          sx={{
            fontFamily: helvetica,
            fontSize: { xs: "32px", md: "42px", xl: "64px" },
            fontWeight: "400",
            lineHeight: "128%",
            textTransform: "uppercase",
            color: "#FFF",
            alignItems: "stretch",
            width: { sm_md: "100%", lg: "70%" },
            height: "123px",
            paddingTop: "40px",
          }}
          variants={staggerChildren}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          Building futures, empowering by skilling
        </MotionTypography>

        <MotionTypography
          variant="h6"
          sx={{
            color: "#FFF",
            alignItems: "stretch",
            fontSize: { xs: "12px", md: "16px" },
            fontFamily: helvetica,
            fontStyle: "normal",
            lineHeight: "128%",
            paddingTop: "100px",
            width: "100%",
            margin: "10px",
          }}
          variants={staggerChildren}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          At Bajaj Auto, our commitment to society is way beyond our business.
          As a true corporate citizen, our actions in community development have
          been empowering generations. Our CSR initiatives are designed
          leveraging our know-how to positively impact people and the planet.
        </MotionTypography>
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
