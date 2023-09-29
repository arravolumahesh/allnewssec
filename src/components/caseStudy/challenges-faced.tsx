"use client";

import ArrowGradient from "@/commonComponents/arrow-gradient";
import {
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";

import { useTheme } from "@mui/material/styles";
import { Box, Grid, Stack } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { H6_1 } from "@/styles/theme/components/typography.fontvariant";
import { motion } from "framer-motion";

const ChallengesFaced = () => {
  const theme = useTheme();
  const isDeskTop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.lightToDark,
        },
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          gap: {
            xs: "40px",
            md: "80px",
          },
        }}
        component={motion.div}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
        variants={staggerDiv}
      >
        <MotionTypography
          variant="h5"
          alignSelf={"flex-start"}
          variants={staggerheading}
        >
          CHALLENGES FACED
        </MotionTypography>
        <Grid container>
          {data.map((eachItem) => (
            <Grid xs={12} md={6} item>
              <Box display={"flex"} alignItems={"baseline"}>
                <ArrowGradient
                  width={50}
                  height={isDeskTop ? 132 : isTablet ? 114 : 96}
                  zIndex={1}
                  marginRight={"69px"}
                  variants={StaggerArrow}
                />

                <Stack
                  spacing={4.5}
                  alignSelf={"center"}
                  sx={{
                    marginTop: {
                      xs: "40px",
                      md: "50px",
                    },
                    marginLeft: "40px",
                  }}
                >
                  <MotionTypography
                    variant="body1"
                    sx={{
                      fontSize: H6_1,
                    }}
                    variants={staggerheading}
                  >
                    {eachItem.title}
                  </MotionTypography>
                  <MotionTypography variant="body1" variants={staggerText}>
                    {eachItem.description}
                  </MotionTypography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionWrapper>
  );
};

export default ChallengesFaced;

const data = [
  {
    title: "Helping to make measurable and long lasting impact.",
    description:
      "Measuring the impact of the initiative on digital literacy levels and other relevant outcomes requires well-defined metrics and systematic data collection.",
  },
  {
    title: "Ensuring Digital Safety and Privacy",
    description:
      "Educating villagers about online safety and protecting personal information was crucial in order to ensure a positive experience while using digital technologies.",
  },
];

const staggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.7,
    },
  },
};

const staggerheading: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const StaggerArrow: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "-250%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};
const staggerText: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const staggerTextChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};
