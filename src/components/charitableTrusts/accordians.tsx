"use client";

import { useState } from "react";
import Image from "next/image";

import {
  Box,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { MotionVariantProps } from "@/commonComponents/motion-components";
import AnimatedButton from "@/commonComponents/animated-button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import SectionWrapper from "@/commonComponents/section-wrapper";
import { motion } from "framer-motion";

import GramVikas from "./images/GramVikas.png";
import RuralDevelopment from "./images/RuralDevelopment.png";
import CentreofScience from "./images/CentreofScience.png";

const Accordians = () => {
  const [expanded, setExpanded] = useState<string | false>(`Area0`);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.darkToLight,
        },
      }}
    >
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
                expanded === `Area${index}`
                  ? " "
                  : data.length - 1 === index
                  ? ""
                  : "1px solid #EAEAEA"
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
                variant="h3"
                sx={{
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
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "128%",
                  textTransform: "uppercase",
                  opacity: 0.9,
                  color: "var(--White, #FFF)",
                  width: {
                    xs: "100%",
                    sm: "50%",
                  },
                }}
              >
                {eachArea.discrption}
              </Typography>

              <Box
                display={"flex"}
                gap={2}
                overflow={"scroll"}
                mt={10}
                sx={{
                  scrollBarWidth: "thin",
                  "&::-webkit-scrollbar": {
                    width: "2px",
                    height: "0px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "transparent",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "blue",
                    borderRadius: "2px",
                  },
                  "&::-webkit-scrollbar-button": {
                    display: "none",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    background: "#555",
                  },
                }}
              >
                {eachArea.intitiatives.map((eachIntiative, index) => (
                  // <SwiperSlide>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    key={index}
                    gap={2}
                    maxWidth={"310px"}
                  >
                    <Image
                      src={eachIntiative.imageUrl}
                      alt={eachIntiative.title}
                      width={301}
                      height={301}
                    />
                    <Typography
                      variant="body1"
                      sx={{
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
                  // </SwiperSlide>
                ))}
              </Box>
              {/* </Swiper> */}
              <Stack display={"flex"} alignItems={"center"}>
                <AnimatedButton
                  color={"inherit"}
                  sx={{
                    mt: 4,

                    width: { xs: "100%", md: "207px" },
                    border: "2px solid #FFF",
                    fontSize: { xs: "18px", md: "24px !important" },
                    opacity: 0.2,
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
    </SectionWrapper>
  );
};

export default Accordians;

const data = [
  {
    title: "Community Development",
    discrption:
      "Making communities live a holistic and quality life through various activities & initiatives. ",
    intitiatives: [
      {
        imageUrl: CentreofScience,
        title: "Centre of Science for Villages",
      },
      {
        imageUrl: RuralDevelopment,
        title: "Integrated Rural Development",
      },
      {
        imageUrl: GramVikas,
        title: "Gram Vikas",
      },
    ],
  },
  {
    title: "Healthcare",
    discrption:
      "Making communities live a holistic and quality life through various activities & initiatives. ",
    intitiatives: [
      {
        imageUrl: CentreofScience,
        title: "Centre of Science for Villages",
      },
      {
        imageUrl: RuralDevelopment,
        title: "Integrated Rural Development",
      },
      {
        imageUrl: GramVikas,
        title: "Gram Vikas",
      },
    ],
  },
  {
    title: "Education",
    discrption:
      "Making communities live a holistic and quality life through various activities & initiatives. ",
    intitiatives: [
      {
        imageUrl: CentreofScience,
        title: "Centre of Science for Villages",
      },
      {
        imageUrl: RuralDevelopment,
        title: "Integrated Rural Development",
      },
      {
        imageUrl: GramVikas,
        title: "Gram Vikas",
      },
    ],
  },
  {
    title: "Arts, Culture & Sports",
    discrption:
      "Making communities live a holistic and quality life through various activities & initiatives. ",
    intitiatives: [
      {
        imageUrl: CentreofScience,
        title: "Centre of Science for Villages",
      },
      {
        imageUrl: RuralDevelopment,
        title: "Integrated Rural Development",
      },
      {
        imageUrl: GramVikas,
        title: "Gram Vikas",
      },
    ],
  },
  {
    title: "Peace & Spirituality",
    discrption:
      "Making communities live a holistic and quality life through various activities & initiatives. ",
    intitiatives: [
      {
        imageUrl: CentreofScience,
        title: "Centre of Science for Villages",
      },
      {
        imageUrl: RuralDevelopment,
        title: "Integrated Rural Development",
      },
      {
        imageUrl: GramVikas,
        title: "Gram Vikas",
      },
    ],
  },
];

const StagAccordion: MotionVariantProps = {
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
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
