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
} from "@mui/material";

import {
  MotionImage,
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Image from "next/image";
import { helvetica } from "@/app/font";
import OFA1 from "./images/OFA1.png";
import OFA2 from "./images/OFA2.png";
import OFA3 from "./images/OFA3.png";
import WorkForce from "./images/WorkForce.png";
import classRoom from "./images/classRoom.png";
import IPH1 from "./images/IPH1.png";
import IPH2 from "./images/IPH2.png";
import theme from "@/styles/theme";
import { StackedLineChart } from "@mui/icons-material";
import { H6_2 } from "@/styles/theme/components/typography.fontvariant";

const data = [
  {
    title: "Skill Development",
    discrption:
      "Changing the landscape of the skilling ecosystem through various initiatives and programs to bridge the gap between academia and industry.",
    intitiatives: [
      {
        imageUrl: WorkForce,
        title: "Building a Skilled-Workforce",
      },
      {
        imageUrl: classRoom,
        title: "Implementing Skill-Based Education in Schools",
      },
      {
        imageUrl: IPH1,
        title: "IPH-Triveni Program",
      },
      {
        imageUrl: IPH2,
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
        imageUrl: WorkForce,
        title: "Building a Skilled-Workforce",
      },
      {
        imageUrl: classRoom,
        title: "Implementing Skill-Based Education in Schools",
      },
      {
        imageUrl: IPH1,
        title: "IPH-Triveni Program",
      },
      {
        imageUrl: IPH2,
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
        imageUrl: WorkForce,
        title: "Building a Skilled-Workforce",
      },
      {
        imageUrl: classRoom,
        title: "Implementing Skill-Based Education in Schools",
      },
      {
        imageUrl: IPH1,
        title: "IPH-Triveni Program",
      },
      {
        imageUrl: IPH2,
        title: "IPH-Triveni Program",
      },
    ],
  },
];

const Areas = () => {
  const [expanded, setExpanded] = useState<string | false>(`question1`);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <Divider
        sx={{
          backgroundColor: "blue",
        }}
        component={motion.div}
        variants={staggerChildren}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
      />
      <Stack
        component={motion.div}
        variants={StagAccordion}
        initial={"intial"}
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        {data.map((eachArea, index) => (
          <Accordion
            expanded={expanded === `Area${index}`}
            onChange={handleChange(`Area${index}`)}
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderBottom: `${
                expanded === `Area${index}` ? " " : "1px solid #EAEAEA"
              }`,
              padding: {
                xs: "24px 0",
                lg: "48px 0",
              },
            }}
            key={index}
            component={motion.div}
            variants={StagAccordion}
            initial={{
              opacity: 0,
              y: `${index % 2 === 0 ? "-30%" : "30%"}`,
            }}
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#FFF",
                    width: {
                      sm: "24px",
                      md: "28px",
                      xl: "48px",
                    },
                    height: {
                      sm: "24px",
                      md: "28px",
                      xl: "48px",
                    },
                  }}
                />
              }
            >
              <Typography
                variant='h3'
                sx={{
                  fontFamily: helvetica,
                  fontSize: {
                    sm: "24px",
                    md: "28px",
                    xl: "48px",
                  },
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "128%",
                  textTransform: "uppercase",
                  opacity: `${expanded === `Area${index}` ? 1 : 0.8}`,
                  color: "var(--White, #FFF)",

                  textOverflow: "ellipsis",
                }}
              >
                {eachArea.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant='body1'
                sx={{
                  fontFamily: helvetica,
                  fontSize: {
                    sm: "16px",
                    md: "18px",
                    xl: "24px",
                  },
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "128%",
                  textTransform: "uppercase",
                  opacity: 0.9,
                  color: "var(--White, #FFF)",
                }}
              >
                {eachArea.discrption}
              </Typography>
              <Box display={"flex"} gap={2} overflow={"scroll"} mt={10}>
                {eachArea.intitiatives.map((eachIntiative, index) => (
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    key={index}
                    gap={2}
                  >
                    <Image
                      src={eachIntiative.imageUrl}
                      alt={eachIntiative.title}
                      style={{
                        width: "301px",
                        height: "301px",
                      }}
                      width={50}
                      height={50}
                    />
                    <Typography
                      variant='body1'
                      sx={{
                        fontFamily: helvetica,
                        fontSize: {
                          sm: "16px",
                          md: "18px",
                          xl: "24px",
                        },
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "128%",
                        textTransform: "uppercase",
                        opacity: 0.9,
                        color: "var(--White, #FFF)",
                      }}
                    >
                      {eachIntiative.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Stack display={"flex"} alignItems={"center"}>
                <AnimatedButton
                  sx={{
                    mt: 4,
                    color: "#FFF",
                    width: { xs: "100%", md: "207px" },
                    bgcolor: "rgba(255, 255, 255, 0.10)",
                    fontSize: { xs: "18px", md: "24px !important" },
                    opacity: 0.8,
                  }}
                  href={"./"}
                  variants={staggerBtn}
                >
                  View Initiatives
                </AnimatedButton>
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </>
  );
};

const OurFocusAreas = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.darkToLight,
        },
      }}
      SectionHeaderProps={{
        title: "OUR FOCUS AREAS",
      }}
      color={"common.white"}
    >
      <Stack
        direction='row'
        alignItems={{ md: "stretch", lg: "center" }}
        justifyContent={"space-between"}
        mb={12}
        columnGap={2}
      >
        <Stack direction={"row"} columnGap={1} width={"50%"}>
          <MotionImage
            src={OFA1}
            alt='OFA1'
            width={0}
            height={0}
            style={{
              width: "50%",
              height: "100%",
            }}
            variants={StagImage1}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
          />
          <Stack rowGap={1}>
            <MotionImage
              src={OFA2}
              alt=''
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "50%",
              }}
              variants={StagImage2}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            />
            <MotionImage
              src={OFA3}
              alt=''
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "50%",
              }}
              variants={StagImage3}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            />
          </Stack>
        </Stack>
        <Stack
          width={"50%"}
          maxWidth={612}
          rowGap={5}
          component={motion.div}
          variants={staggerDiv}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <MotionTypography
            variant='body1'
            fontSize={H6_2}
            variants={staggerChildren}
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
            variants={staggerBtn}
          >
            View Initiatives
          </AnimatedButton>
        </Stack>
      </Stack>
      {Areas()}
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
