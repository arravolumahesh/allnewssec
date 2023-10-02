"use client";
import { useState } from "react";
import SectionWrapper from "@/commonComponents/section-wrapper";
import AnimatedButton from "@/commonComponents/animated-button";
import { motion } from "framer-motion";
import {
  Box,
  Stack,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  alpha,
} from "@mui/material";

import {
  MotionImage,
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OFA1 from "./images/OFA1.png";
import OFA2 from "./images/OFA2.png";
import OFA3 from "./images/OFA3.png";
import WorkForce from "./images/workForce.png";
import classRoom from "./images/classRoom.png";
import IPH1 from "./images/IPH1.png";
import IPH2 from "./images/IPH2.png";
import {
  H3_2,
  H6_2,
  H6_3,
} from "@/styles/theme/components/typography.fontvariant";
import EnhancedSwiper from "@/commonComponents/enhanced-swiper";
import { CompanyCard } from "@/commonComponents/cards/company";
import ExpandableAccordion from "@/commonComponents/expandable-accordion";

const data = [
  {
    title: "Skill Development",
    discrption:
      "Changing the landscape of the skilling ecosystem through various initiatives and programs to bridge the gap between academia and industry.",
    intitiatives: [
      {
        img: WorkForce,
        title: "Building a Skilled-Workforce",
      },
      {
        img: classRoom,
        title: "Implementing Skill-Based Education in Schools",
      },
      {
        img: IPH1,
        title: "IPH-Triveni Program",
      },
      {
        img: IPH2,
        title: "IPH-Triveni Program",
      },
    ],
  },
  {
    title: "Education",
    discrption:
      "Changing the landscape of the skilling ecosystem through various initiatives and programs to bridge the gap between academia and industry.",
    intitiatives: [
      {
        img: WorkForce,
        title: "Building a Skilled-Workforce",
      },
      {
        img: classRoom,
        title: "Implementing Skill-Based Education in Schools",
      },
      {
        img: IPH1,
        title: "IPH-Triveni Program",
      },
      {
        img: IPH2,
        title: "IPH-Triveni Program",
      },
    ],
  },
  {
    title: "Miscellaneous",
    discrption:
      "Changing the landscape of the skilling ecosystem through various initiatives and programs to bridge the gap between academia and industry.",
    intitiatives: [
      {
        img: WorkForce,
        title: "Building a Skilled-Workforce",
      },
      {
        img: classRoom,
        title: "Implementing Skill-Based Education in Schools",
      },
      {
        img: IPH1,
        title: "IPH-Triveni Program",
      },
      {
        img: IPH2,
        title: "IPH-Triveni Program",
      },
    ],
  },
];

const OurFocusAreas = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.darkToLight,
        },
        id: "programs-initiatives",
      }}
      SectionHeaderProps={{
        title: "OUR FOCUS AREAS",
      }}
      color={"common.white"}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "stretch", lg: "center" }}
        justifyContent={"space-between"}
        mb={12}
        columnGap={2}
        rowGap={3}
      >
        <Stack
          direction={"row"}
          columnGap={{ xs: 0.5, md: 1 }}
          width={{ xs: 1, md: 0.5 }}
        >
          <MotionImage
            src={OFA1}
            alt='OFA1'
            sx={{
              width: 0.5,
              maxWidth: { xs: "none", md: 318 },
              height: { xs: 1, lg: 368 },
              objectFit: "cover",
            }}
            // variants={StagImage1}
            // initial={"initial"}
            // whileInView={"animate"}
            // viewport={{ once: true }}
          />
          <Stack
            width={0.5}
            rowGap={{ xs: 0.5, md: 1 }}
            maxWidth={{ xs: "none", md: 318 }}
          >
            <MotionImage
              src={OFA2}
              alt=''
              sx={{
                width: 1,
                height: { xs: 0.5, lg: 180 },
                objectFit: "cover",
              }}
              // variants={StagImage2}
              // initial={"initial"}
              // whileInView={"animate"}
              // viewport={{ once: true }}
            />
            <MotionImage
              src={OFA3}
              alt=''
              sx={{
                width: 1,
                height: { xs: 0.5, lg: 180 },
                objectFit: "cover",
              }}
              // variants={StagImage3}
              // initial={"initial"}
              // whileInView={"animate"}
              // viewport={{ once: true }}
            />
          </Stack>
        </Stack>
        <Stack
          width={{ xs: 1, md: 0.5 }}
          maxWidth={{ xs: 1, md: 612 }}
          rowGap={{ xs: 3, md: 5 }}
          // component={motion.div}
          // variants={staggerDiv}
          // initial={"initial"}
          // whileInView={"animate"}
          // viewport={{ once: true }}
        >
          <MotionTypography
            variant='body1'
            fontSize={H6_2}
            // variants={staggerChildren}
          >
            We are deeply committed to improving livelihoods, particularly for
            the marginalized youth of our country by skilling and empowering
            them. We also contribute to education, health, environment, animal
            welfare projects, and other relevant areas for the sustainable
            development of the community and the nation.
          </MotionTypography>
          <AnimatedButton
            href={"./"}
            variant='contained'
            color='secondary'
            // variants={staggerBtn}
          >
            View Initiatives
          </AnimatedButton>
        </Stack>
      </Stack>
      <ExpandableAccordion data={data} TopDivider BottomDivider />
    </SectionWrapper>
  );
};

export default OurFocusAreas;

const staggerChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const staggerHeading: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "-50%",
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const staggerDiv: MotionVariantProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 1,
    },
  },
};

const staggerBtn: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "30%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const StagImage1: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const StagImage2: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const StagImage3: MotionVariantProps = {
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

const StagAccordion: MotionVariantProps = {
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};
