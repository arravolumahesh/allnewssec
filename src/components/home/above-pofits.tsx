"use client";
import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import videoImage from "./images/Frame 111142.png";
import React from "react";
import {
  MotionBox,
  MotionBoxProps,
  MotionTypography,
  MotionTypographyProps,
} from "@/commonComponents/motion-components";
import { PlayCircle } from "@mui/icons-material";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { H3_2, H6_2 } from "@/styles/theme/components/typography.fontvariant";

const AboveProfits = () => {
  const videoBannerTransition: MotionBoxProps = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
    viewport: {
      once: true,
    },
  };

  const descTransition: MotionTypographyProps = {
    initial: {
      y: "-130%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.5,
      delay: 0.8,
    },
    viewport: {
      once: true,
    },
  };
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.darkToLight,
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            width: "204%",
            height: "auto",
            aspectRatio: 4.6,
            top: 0,
            right: 0,
            background: "url(/beyond.svg) space", //space
            backgroundSize: "contain",
            transform: "translate3d(0, 0, 0)",
            animation: "scroll 15s infinite linear",
            "@keyframes scroll": {
              "100%": {
                WebkitTransform: "translateX(50.5%)",
              },
            },
          },
        },
      }}
      color={"common.white"}
      SectionHeaderProps={{
        title: "Shaping a sustainable legacy ",
        TitleTypographyProps: {
          fontSize: H3_2,
        },
        mb: 0,
      }}
    >
      <Stack textAlign={"center"} maxWidth={1051} m={"auto"}>
        <MotionBox
          position={"relative"}
          width={1}
          sx={{ aspectRatio: 2.04 }}
          // height={{ xs: 264, md: 513 }}
          mt={{ xs: 4, md: 6 }}
          mb={{ xs: 3, md: 4 }}
          zIndex={1}
          {...videoBannerTransition}
        >
          <Image src={videoImage} alt='Video Thumbnail' fill />
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              p: 0,
              bgcolor: "white",
              "&:hover": {
                bgcolor: "white",
              },
            }}
          >
            <PlayCircle
              sx={{
                width: { xs: 60, md: 100 },
                height: { xs: 60, md: 100 },
                fill: "#005dac",
              }}
            />
          </IconButton>
        </MotionBox>
        <MotionTypography variant='body1' fontSize={H6_2} {...descTransition}>
          Welcome to Bajaj Beyond, a holistic and integrated platform that brings together the collective CSR initiatives of all Bajaj companies. As a distinguished conglomerate, we share a united commitment towards empowering communities through skill development to foster an equitable society.
        </MotionTypography>
      </Stack>
    </SectionWrapper>
  );
};

export default AboveProfits;
