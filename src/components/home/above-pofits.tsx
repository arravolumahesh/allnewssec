"use client";
import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import videoImage from "./images/Frame 111142.png";
import React, { useState } from "react";
import {
  MotionBox,
  MotionBoxProps,
  MotionTypography,
  MotionTypographyProps,
} from "@/commonComponents/motion-components";
import { PlayCircle } from "@mui/icons-material";
import SectionWrapper from "@/commonComponents/section-wrapper";
import theme from "@/styles/theme";

const AboveProfits = () => {
  const [textTransition, setTextTransition] = useState(false);

  const headerTransition: MotionTypographyProps = {
    initial: {
      y: "30%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.8,
    },
    viewport: {
      once: true,
    },
  };

  const videoBannerTransition: MotionBoxProps = {
    initial: {
      x: "-118%",
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
    // onTransitionEnd: () => setTextTransition(true),
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
  {
    /* <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "-100%",
          animation: "slideIn 5s infinite linear",
          "@keyframes slideIn": {
            "0%": {
              left: "-100%",
            },
            "100%": {
              left: "100%",
            },
          },
        }}
      >
        <Image src={dcd} alt='' />
      </Box> */
  }
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.darkToLight,
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            width: "200%",
            height: "auto",
            aspectRatio: 4.54,
            top: 0,
            right: 0,
            background: "url(/beyond.svg) repeat-x", //space
            backgroundSize: "contain",
            transform: "translate3d(0, 0, 0)",
            animation: "scroll 15s infinite linear",
            "@keyframes scroll": {
              "100%": {
                WebkitTransform: "translateX(50%)",
              },
            },
          },
        },
      }}
      SectionHeaderProps={{
        title: "ABOVE PROFITS. BEYOND BOTTOM LINES.",
      }}
      py={{ xs: 7, md: 12 }}
    >
      <Stack textAlign={"center"} maxWidth={1051} m={"auto"}>
        <MotionTypography
          variant='h3'
          color='white'
          fontWeight={400}
          {...headerTransition}
        >
          ABOVE PROFITS. BEYOND BOTTOM LINES.
        </MotionTypography>
        <MotionBox
          position={"relative"}
          height={{ xs: 264, md: 513 }}
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
            }}
          >
            <PlayCircle
              sx={{
                width: { xs: 77, md: 100 },
                height: { xs: 77, md: 100 },
                fill: "#005DAC",
              }}
            />
          </IconButton>
        </MotionBox>
        <MotionTypography
          variant='h6'
          color='white'
          fontWeight={400}
          {...descTransition}
        >
          Welcome to Bajaj Beyond, a holistic and integrated platform that
          combines the myriad of Bajaj Inc’s CSR initiatives to create a single
          force of good that goes beyond profits and bottom lines. We’re certain
          that our unwavering commitment towards empowering communities through
          skill development will cement India’s legacy as we walk hand in hand
          towards an equitable future.
        </MotionTypography>
      </Stack>
    </SectionWrapper>
  );
};

export default AboveProfits;

const headerTransition: MotionTypographyProps = {
  initial: {
    y: "30%",
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.8,
  },
  viewport: {
    once: true,
  },
};

const videoBannerTransition: MotionBoxProps = {
  initial: {
    x: "-107%",
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
