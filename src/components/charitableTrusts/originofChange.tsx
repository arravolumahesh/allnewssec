"use client";

import SectionWrapper from "@/commonComponents/section-wrapper";

import { Box, Stack, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AnimatedButton from "@/commonComponents/animated-button";

import {
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";

import Image from "next/image";

import JamnalalBajaj from "./images/jamnalalBajaj.png";
import { motion } from "framer-motion";

const OriginofChange = () => {
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallTablet = useMediaQuery(theme.breakpoints.down("md_lg"));
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <SectionWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: {
            xs: "32px",
            sm: "48px",
          },
        }}
        component={motion.div}
        variants={animationDiv}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <MotionTypography
          variants={animationHeading}
          variant="h1"
          sx={{ color: `#005DAC` }}
        >
          The Origin of generational Change
        </MotionTypography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            justifyContent: "space-between",
            alignItems: "center",
          }}
          width={"90%"}
        >
          <Stack component={motion.div} variants={animationImage}>
            <Image
              src={JamnalalBajaj}
              width={matches ? 280 : isSmallTablet ? 360 : isTablet ? 430 : 540}
              height={matches ? 264 : isTablet ? 350 : 368}
              alt="jamnalalBajaj"
              style={{
                marginBottom: "30px",
              }}
            />
          </Stack>
          <Stack
            spacing={5}
            sx={{
              width: {
                xs: "100%",
                sm: "40%",
              },
              display: "flex",
              alignItems: {
                xs: "center",
                sm: "flex-start",
              },
            }}
          >
            <MotionTypography
              variant="body1"
              sx={{
                color: "#005DAC",
              }}
              textAlign={"left"}
              variants={animationText}
            >
              Founded in 1977 in memory of Jamnalal Bajaj—a philanthropist,
              social reformer, Indian freedom fighter, and Mahatma Gandhi`s
              confidant—the Jamnalal Bajaj Foundation echoes his ideals, and
              advances the Gandhian constructive pursuits he championed.
            </MotionTypography>
            <AnimatedButton
              sx={{
                display: "flex",
                height: "56px",
                padding: "12px 24px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                border: "1px solid rgba(0, 93, 172, 0.80)",
                background: "rgba(0, 93, 172, 0.10)",
                width: {
                  xs: "100%",
                  sm: "auto",
                },
              }}
              href={"#"}
              variants={animatonButton}
            >
              <Typography variant="body1">View Our Legacy</Typography>
            </AnimatedButton>
          </Stack>
        </Stack>
      </Box>
    </SectionWrapper>
  );
};

export default OriginofChange;

const animationDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.5,
    },
  },
};

const animationImage: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "-20%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const animationHeading: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const animationText: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "40%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const animatonButton: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
