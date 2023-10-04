"use client";

import {
  MotionButton,
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";

import SectionWrapper from "@/commonComponents/section-wrapper";
import { Body2, Caption } from "@/styles/theme/components/typography.fontvariant";
import { Box, Grid, Stack } from "@mui/material";

import bg from "../ourCompanies/images/workForce.png";

import { motion } from "framer-motion";

const data = [
  {
    title: "Vocational Training",
    description:
      "The initiative provided diverse vocational training in tailoring, computer literacy, electrical work, carpentry, etc.",
  },
  {
    title: "Soft Skills Development",
    description:
      "Participants received soft skills training in communication, teamwork, time management, etc. to enhance employability.",
  },
  {
    title: "Placement Support",
    description:
      "We collaborated with local businesses and industries to facilitate job placements for participants.",
  },
  {
    title: "Community Engagement",
    description:
      "The initiative engaged with local communities, partnering with NGOs and government agencies.",
  },
];

const HowWeDid = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: `linear-gradient(90deg,rgba(0, 0, 0, 0.8) -3.68%, rgba(0, 0, 0, 0.8) 72.78%, rgba(0, 0, 0, 0.8) 100%), url(${bg.src}) no-repeat`,
          backgroundSize: "cover",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: {
            xs: "40px",
            md: "96px",
          },
        }}
        component={motion.div}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
        variants={staggerDiv}
      >
        <Stack
          sx={{
            width: {
              xs: "100%",
              md: "70%",
            },
            textAlign: "center",
          }}
          spacing={2}
          alignSelf={"center"}
          component={motion.div}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
          variants={staggerDiv}
        >
          <MotionTypography
            variant="h3"
            sx={{ opacity: 0.9, color: "#FFF" }}
            variants={staggerheading}
          >
            How We Did It
          </MotionTypography>
          <MotionTypography
            variant="body1"
            sx={{ opacity: 0.8 }}
            variants={staggerText}
          >
            Bajaj Group, in collaboration with the Maharashtra State Government,
            devised a comprehensive solution to tackle the unemployment issue
            through skill development. The initiative focused on establishing
            vocational training centers equipped with state-of-the-art
            facilities and experienced trainers.
          </MotionTypography>
        </Stack>
        <Grid
          container
          justifyContent={{ xs: "space-between", md: "space-evenly" }}
          rowGap={4}
        >
          {data.map((eachData, index) => (
            <Grid key={index} xs={12} md={6} lg={3} item>
              <Stack spacing={2}>
                <MotionButton
                  sx={{
                    fontSize: Caption,
                    color: "#FFF",
                    background: "rgba(255, 255, 255, 0.20)",
                    padding: "6px 16px",
                  }}
                  disableRipple
                  disableTouchRipple
                  variants={staggerTextChildren}
                >
                  {eachData.title}
                </MotionButton>
                <MotionTypography width={"80%"} fontSize={Body2} variants={staggerTextChildren}>
                  {eachData.description}
                </MotionTypography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionWrapper>
  );
};

export default HowWeDid;

const staggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
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
      duration: 0.7,
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
