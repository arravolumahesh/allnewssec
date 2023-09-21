"use client";
import {
  MotionImage,
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-elements";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import line from "./images/Line 1322.svg";
import { motion } from "framer-motion";

const Impact = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <SectionWrapper
      SectionProps={{
        bgcolor: "primary.main",
      }}
      py={{ xs: 7, md: 12 }}
    >
      <Stack
        maxWidth={{ xs: 1, md: 867 }}
        textAlign='center'
        rowGap={{ xs: 2, md: 4 }}
        mx={"auto"}
        component={motion.div}
        variants={staggerDiv}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <MotionTypography
          variants={staggerChildren}
          variant='h1'
          color={"white"}
          fontWeight={400}
        >
          DRIVING A LASTING IMPACT
        </MotionTypography>
        <MotionTypography
          variants={staggerChildren}
          variant='h6'
          color={"white"}
          fontWeight={400}
        >
          These are not mere numbers. They’re a testament to our relentless
          dedication towards making a tangible impact in communities across the
          nation.
        </MotionTypography>
      </Stack>
      <Stack
        direction={"row"}
        width={1}
        maxWidth={1232}
        mx={"auto"}
        mt={{ xs: 5, md: 11 }}
        mb={{ xs: 0, md: 4 }}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        rowGap={4}
        component={motion.div}
        variants={staggerDivArrow}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        {data.map((item, idx) => {
          return (
            <>
              <Stack
                key={idx}
                alignItems={"center"}
                width={{ xs: "50%", md: "auto" }}
                rowGap={1}
                component={motion.div}
                variants={staggerStackChildren}
                viewport={{ once: true }}
              >
                <MotionTypography
                  variants={staggerTextChildren}
                  variant='h2'
                  fontWeight={700}
                  color={"white"}
                >
                  {item.title}
                </MotionTypography>
                <MotionTypography
                  variants={staggerTextChildren}
                  color={"white"}
                >
                  {item.subtitle}
                </MotionTypography>
              </Stack>
              {idx !== data.length - 1 && (
                <MotionImage
                  variants={staggerArrowChildren}
                  src={line}
                  alt=''
                  hidden={matches}
                />
              )}
            </>
          );
        })}
      </Stack>
    </SectionWrapper>
  );
};

export default Impact;

const staggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};
const staggerChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
const staggerDivArrow: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};
const staggerStackChildren: MotionVariantProps = {
  initial: { opacity: 0.9 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.7,
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
      duration: 0.7,
    },
  },
};
const staggerArrowChildren: MotionVariantProps = {
  initial: {
    clipPath: "inset(0% 0% 100% 0%)",
  },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.2,
    },
  },
};

const data = [
  {
    title: "12.4CR",
    subtitle: "People Reached",
  },
  {
    title: "57K",
    subtitle: "MSMEs Supported",
  },
  {
    title: "100.3K",
    subtitle: "Women Empowered",
  },
  {
    title: "93K",
    subtitle: "Students Educated",
  },
];
