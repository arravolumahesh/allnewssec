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

const Areas = () => {
  const [expanded, setExpanded] = useState<string>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : "");
    };
  return (
    <>
      <Divider />
      <Stack
      // component={motion.div}
      // variants={StagAccordion}
      // initial={"intial"}
      // whileInView={"animate"}
      // viewport={{ once: true }}
      >
        {data.map((eachArea, index) => (
          <Accordion
            expanded={expanded === `Area${index}`}
            onChange={handleChange(`Area${index}`)}
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderTop: `${
                expanded === `Area${index}` ? "1px solid #EAEAEA" : "none"
              }`,
              p: {
                xs: "24px 0",
                lg: "48px 0",
              },
            }}
            key={index}
            // component={motion.div}
            // variants={StagAccordion}
            // initial={{
            //   opacity: 0,
            //   y: `${index % 2 === 0 ? "-30%" : "30%"}`,
            // }}
            // whileInView={"animate"}
            // viewport={{ once: true }}
          >
            <AccordionSummary
              sx={{
                px: 0,
                color: alpha("#fff", expanded === `Area${index}` ? 1 : 0.9),
              }}
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#FFF",
                    width: {
                      xs: "40px",
                      xl: "56px",
                    },
                    height: {
                      xs: "40px",
                      xl: "56px",
                    },
                  }}
                />
              }
            >
              <Typography variant='h3' fontSize={H3_2}>
                {eachArea.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
              <Typography variant='body1' fontSize={H6_3} maxWidth={867}>
                {eachArea.discrption}
              </Typography>
              <Stack
                direction='row'
                alignItems={"center"}
                justifyContent={"space-around"}
                py={1.5}
                mt={3}
                borderTop={"1px solid rgba(234, 234, 234, 0.20)"}
                borderBottom={"1px solid rgba(234, 234, 234, 0.20)"}
              >
                <Stack textAlign={"center"} rowGap={{ xs: 1, md: 0.5 }}>
                  <Typography variant='h4' fontWeight={700}>
                    93K
                  </Typography>
                  <Typography variant='body2'>Students Educated</Typography>
                </Stack>
                <Divider
                  orientation='vertical'
                  sx={{
                    height: 75,
                    borderColor: "rgba(234, 234, 234, 0.20)",
                  }}
                />
                <Stack textAlign={"center"} rowGap={{ xs: 1, md: 0.5 }}>
                  <Typography variant='h4' fontWeight={700}>
                    100+
                  </Typography>
                  <Typography variant='body2'>Training Institutions</Typography>
                </Stack>
                <Divider
                  orientation='vertical'
                  sx={{
                    height: 75,
                    borderColor: "rgba(234, 234, 234, 0.20)",
                  }}
                />
                <Stack textAlign={"center"} rowGap={{ xs: 1, md: 0.5 }}>
                  <Typography variant='h4' fontWeight={700}>
                    300+
                  </Typography>
                  <Typography variant='body2'>Programs Conducted</Typography>
                </Stack>
              </Stack>
              <Stack direction='row' mt={{ xs: 4, md: 7 }} width={1}>
                <EnhancedSwiper
                  slidesPerView={"auto"}
                  SlideWrapperProps={{
                    sx: {
                      width: { xs: 301, lg: 310 },
                      mr: 3,
                    },
                  }}
                  SlideComponent={CompanyCard}
                  data={eachArea.intitiatives}
                />
              </Stack>
              <Stack
                display={"flex"}
                alignItems={"center"}
                mt={{ xs: 3, md: 6 }}
              >
                <AnimatedButton
                  href={"./"}
                  variant='outlined'
                  color='secondary'
                  // variants={staggerBtn}
                >
                  View More Initiatives
                </AnimatedButton>
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
      <Divider />
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
      <Areas />
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
