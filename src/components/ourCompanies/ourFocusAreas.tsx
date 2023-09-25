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
} from "@/commonComponents/motion-elements";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Image from "next/image";
import { helvetica } from "@/app/font";
import OFA1 from "./images/OFA1.png";
import OFA2 from "./images/OFA2.png";
import OFA3 from "./images/OFA3.png";

const data = [
  {
    title: "Skill Development",
    discrption:
      "Changing the landscape of the skilling ecosystem through various initiatives and programs to bridge the gap between academia and industry.",
    intitiatives: [
      {
        imageUrl: "/images/workForce.png",
        title: "Building a Skilled-Workforce",
      },
      {
        imageUrl: "/images/classRoom.png",
        title: "Implementing Skill-Based Education in Schools",
      },
      {
        imageUrl: "/images/IPH1.png",
        title: "IPH-Triveni Program",
      },
      {
        imageUrl: "/images/IPH2.png",
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
        imageUrl: "/workForce.png",
        title: "Building a Skilled-Workforce",
      },
      {
        imageUrl: "/classRoom.png",
        title: "Implementing Skill-Based Education in Schools",
      },
      {
        imageUrl: "/IPH1.png",
        title: "IPH-Triveni Program",
      },
      {
        imageUrl: "/IPH2.png",
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
        imageUrl: "/images/workForce.png",
        title: "Building a Skilled-Workforce",
      },
      {
        imageUrl: "/images/classRoom.png",
        title: "Implementing Skill-Based Education in Schools",
      },
      {
        imageUrl: "/images/IPH1.png",
        title: "IPH-Triveni Program",
      },
      {
        imageUrl: "/images/IPH2.png",
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
            key={index}
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
                variant="h3"
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
                variant="body1"
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
                {eachArea.intitiatives.map((eachIntiative,index) => (
                  <Box display={"flex"} key={index} flexDirection={"column"} gap={2}>
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
                      variant="body1"
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
                    width: { xs: "100%", md: "207px" },
                    bgcolor: "rgba(255, 255, 255, 0.10)",
                    fontSize: { xs: "18px", md: "24px !important" },
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
      sx={{
        background:
          "var(--gradient-dark-light, linear-gradient(180deg, #0C1425 0%, #162B52 17.68%, #1F3F78 35.36%, #254F98 53.05%, #2B5CB0 70.73%, #2F65C1 89.77%, #316ACB 110.17%, #326CCF 136.02%))",
        margin: 0,
      }}
    >
      <Box
        sx={{
          display: {
            xs: "flex",
            gl: "inline-flex",
          },
          flexDirection: "column",
          alignItems: "flex-start",
          padding: {
            sm: "56px 24px",
            xs_sm: "56px 24px",
            sm_md: "56px 24px",
            lg: "96px 52px 176px 64px",
          },
        }}
        component={motion.div}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <Stack
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              alignSelf: "stretch",
            }}
            component={motion.div}
            variants={staggerDiv}
          >
            <MotionTypography
              sx={{
                fontFamily: helvetica,
                fontSize: {
                  xs: "32px",
                  md: "32px",
                  xl: "64px",
                },
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "128%",
                textTransform: "uppercase",
                opacity: 0.9,
                color: "var(--White, #FFF)",
                textAlign: "center",
                textOverflow: "ellipsis",
              }}
              variants={staggerHeading}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              {" "}
              Our Focus Areas
            </MotionTypography>
          </Stack>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",

                lg: "row",
              },
              gap: "20px",
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  lg: "50%",
                },
                display: "flex",
              }}
            >
              <MotionImage
                src={OFA1}
                alt="OFA1"
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
              <Stack
                sx={{
                  width: "50%",
                  gap: "8px",
                }}
              >
                <MotionImage
                  src={OFA2}
                  alt=""
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
                  alt=""
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
            </Box>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "40px",
                width: {
                  xs: "100%",
                  lg: "50%",
                },
              }}
              component={motion.div}
              variants={staggerDiv}
            >
              <MotionTypography
                sx={{
                  fontFamily: helvetica,
                  fontSize: {
                    xs: "18px",
                    md: "21px",
                    xl: "24px",
                  },
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: {
                    xs: "128%",
                    md: "128%",
                    xl: "140%",
                  },

                  color: "var(--White, #FFF)",
                }}
                variant="body1"
                variants={staggerChildren}
                initial={"initial"}
                whileInView={"animate"}
                viewport={{ once: true }}
              >
                We are deeply committed to improving livelihoods, particularly
                for the marginalized youth of our country by skilling and
                empowering them. We also contribute to education, health,
                environment, animal welfare projects, and other relevant areas
                for the sustainable development of the community and the nation.
              </MotionTypography>
              <AnimatedButton
                sx={{
                  mt: 4,
                  width: "150px",
                  bgcolor: "rgba(255, 255, 255, 0.10)",
                  fontSize: { xs: "16px", md: "22px !important" },
                }}
                href={"./"}
                variants={staggerBtn}
                initial={"initial"}
                whileInView={"animate"}
                viewport={{ once: true }}
              >
                View Initiatives
              </AnimatedButton>
            </Stack>
          </Box>
        </Box>
      </Box>
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
