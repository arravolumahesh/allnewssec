"use client";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Box, Stack } from "@mui/material";
import {
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import { motion } from "framer-motion";

import ArrowGradient from "@cc/arrow-gradient";
import { H6_1 } from "@/styles/theme/components/typography.fontvariant";

const AboutUs = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.darkToLight,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "80px",
        }}
        component={motion.div}
        variants={containerAnimation}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <Stack
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            alignSelf: "stretch",
          }}
        >
          <ArrowGradient height={"201.22px"} variants={arrowAnimation} />
        </Stack>
        <MotionTypography
          sx={{
            fontSize: H6_1,
            color: "#FFF",
          }}
          variant="body1"
          variants={textAnimation}
        >
          We are guided by the timeless principles of Gandhiji. With a strong
          commitment to uplift the underserved communities, we transform lives
          across our nation.
        </MotionTypography>
      </Box>
    </SectionWrapper>
  );
};

export default AboutUs;

const containerAnimation: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.4,
    },
  },
};

const textAnimation: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "40%",
  },
  animate: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 0.9,
    },
  },
};

const arrowAnimation: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 0.8,
    },
  },
};
