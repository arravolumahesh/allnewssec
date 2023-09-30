"use client";
import ArrowGradient from "@/commonComponents/arrow-gradient";
import {
  MotionBoxProps,
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import calender from "@/components/charitableTrusts/images/calender.svg";
import SectionWrapper from "@/commonComponents/section-wrapper";
import cup1 from "@/components/charitableTrusts/images/cup1.png";
import cup2 from "@/components/charitableTrusts/images/cup2.png";
import cup3 from "@/components/charitableTrusts/images/cup3.png";
import cup4 from "@/components/charitableTrusts/images/cup4.png";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import theme from "@/styles/theme";
import {
  Body1,
  H3_2,
  H6_3,
  Subtitle1,
} from "@/styles/theme/components/typography.fontvariant";
import AnimatedButton from "@/commonComponents/animated-button";
import { common } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";

const NominationsOpen = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg_xl"));
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));

  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <SectionWrapper color={"primary.main"}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
        }}
      >
        <Stack sx={{ alignSelf: "flex-start" }}>
          <ArrowGradient
            height={{ xs: "100px", md: "301px" }}
            {...imageTransition}
          />
        </Stack>
        <Stack
          component={motion.div}
          variants={staggerDiv}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
          maxWidth={{ xs: "100%", md: 814 }}
          rowGap={4}
          display={"flex"}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            // gap: { md: "50px" },
            alignSelf: "center",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              // gap: { md: "20px" },
            }}
          >
            <Image
              src={cup2}
              alt="awards"
              width={isDesktop ? 129 : isTablet ? 95 : 78}
              height={isDesktop ? 322 : isTablet ? 280 : 194}
              style={{ alignSelf: "center" }}
            />
            <Image
              src={cup4}
              alt="awards"
              width={isDesktop ? 129 : isTablet ? 95 : 78}
              height={isDesktop ? 322 : isTablet ? 280 : 194}
              style={{ alignSelf: "flex-end", marginTop: "60px" }}
            />
            <Image
              src={cup1}
              alt="awards"
              width={isDesktop ? 129 : isTablet ? 95 : 78}
              height={isDesktop ? 322 : isTablet ? 280 : 194}
              style={{ alignSelf: "flex-start", marginBottom: "60px" }}
            />
            <Image
              src={cup3}
              alt="awards"
              width={isDesktop ? 129 : isTablet ? 95 : 78}
              height={isDesktop ? 322 : isTablet ? 280 : 194}
              style={{ alignSelf: "center" }}
            />
          </Stack>
          <Stack
            sx={{
              color: (theme) => theme.palette.primary.main,
              display: "flex",
              flexDirection: "column",
              gap: H6_3,
            }}
          >
            <MotionTypography
              variant="body2"
              sx={{ fontSize: Subtitle1 }}
              variants={staggerChildren}
            >
              Jamnalal Bajaj Awards 2023
            </MotionTypography>
            <MotionTypography
              variant="h3"
              sx={{ fontSize: H3_2 }}
              variants={staggerChildren}
            >
              Nominations Open
            </MotionTypography>
            <MotionTypography
              variant="body2"
              sx={{ fontSize: Body1, width: { xs: "100%", md: "485px" } }}
              variants={staggerChildren}
            >
              The Jamnalal Bajaj Foundation established four annual awards,
              honoring the legacy and ideals of Jamnalal Bajaj both in India and
              abroad.
            </MotionTypography>
            <MotionTypography
              variant="body2"
              sx={{ fontSize: "14px", width: "126px" }}
              variants={staggerChildren}
            >
              Apply by:
            </MotionTypography>
            <Stack sx={{ display: "flex", flexDirection: "row" }}>
              <Image src={calender} alt="calender" width={24} height={24} />
              <MotionTypography
                variant="body2"
                sx={{ fontSize: Body1 }}
                variants={staggerChildren}
              >
                15 Aug 2023
              </MotionTypography>
            </Stack>
            <AnimatedButton href={"/"} variant={"outlined"} color={"inherit"}>
              Apply Now
            </AnimatedButton>
          </Stack>
        </Stack>
        <Stack
          alignSelf={"flex-end"}
          sx={{ marginTop: "200px", display: { xs: "none", md: "flex" } }}
        >
          <ArrowGradient height={"301px"} {...imageTransition} />
        </Stack>
      </Stack>
    </SectionWrapper>
  );
};

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

const staggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.5,
    },
  },
};

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

export default NominationsOpen;
