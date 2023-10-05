"use client";

import ArrowGradient from "@/commonComponents/arrow-gradient";
import {
  MotionBoxProps,
  MotionTypography,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { H1 } from "@/styles/theme/components/typography.fontvariant";
import { useTheme } from "@emotion/react";
import { Stack, useMediaQuery } from "@mui/material";
import { color } from "framer-motion";
import theme from "@/styles/theme";
const AwardsWinner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <SectionWrapper display={"flex"} flexDirection={"row"}>
      {matches && <ArrowGradient height={"301px"} {...imageTransition} />}
      <MotionTypography
        sx={{
          fontSize: H1,
          width: "30%",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          color: (theme) => theme.palette.primary.main,
        }}
        pt={6}
      >
        2022 <br />
        AWARD WINNERS
      </MotionTypography>
      <Stack></Stack>
    </SectionWrapper>
  );
};

export default AwardsWinner;

const imageTransition: MotionBoxProps = {
  initial: {
    x: "-121%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  viewport: {
    once: true,
  },
};
