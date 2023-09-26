"use client";

import { useState } from "react";

import { Button, Stack, Box, Grid } from "@mui/material";
import Image from "next/image";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

import SectionWrapper from "@/commonComponents/section-wrapper";
import {
  MotionTypography,
  MotionVariantProps,
  MotionButton,
} from "@/commonComponents/motion-components";

import useMediaQuery from "@mui/material/useMediaQuery";

import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";

import Emission from "./images/Emission.png";
import supplyChain from "./images/supplyChain.png";
import solar from "./images/solar.png";

interface ButtonsProps {
  disablePrev: boolean;
  disableNext: boolean;
}

const CuroselBttn = (prop: ButtonsProps) => {
  const { disableNext, disablePrev, ...rest } = prop;
  const swiper = useSwiper();
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "16px",
      }}
      component={motion.div}
      variants={constrolButton}
      initial={"initial"}
      whileInView={"animate"}
      viewport={{ once: true }}
    >
      <Button
        sx={{
          display: "flex",
          width: "48px",
          height: "48px",
          padding: "4px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          background: "rgba(255, 255, 255, 0.20)",
          border: "1px solid var(--White, #FFF)",
          opacity: disablePrev ? 0.5 : 0.9,
        }}
        onClick={() => swiper.slidePrev()}
        disabled={disablePrev}
        disableRipple
        disableTouchRipple
      >
        <NavigateBeforeIcon
          sx={{
            width: "30px",
            height: "30px",
            color: "#FFF",
          }}
        />
      </Button>
      <Button
        sx={{
          display: "flex",
          width: "48px",
          height: "48px",
          padding: "4px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          border: "1px solid var(--White, #FFF)",
          background: "rgba(255, 255, 255, 0.20)",
          opacity: disableNext ? 0.5 : 0.9,
        }}
        onClick={() => swiper.slideNext()}
        disabled={disableNext}
        disableRipple
        disableTouchRipple
      >
        <NavigateNextIcon
          sx={{
            width: "30px",
            height: "30px",
            color: "#FFF",
          }}
        />
      </Button>
    </Stack>
  );
};

// Curosel Part
const Carousel = () => {
  const [disablePrev, setDisabledPrev] = useState<boolean>(true);
  const [disableNext, setDisabledNext] = useState<boolean>(false);
  const theme = useTheme();
  const swiper = useSwiper();

  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  const isTablet = useMediaQuery(theme.breakpoints.up("md_lg"));

  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack>
      <Stack
        component={"div"}
        sx={{
          py: { xs: 5, lg: 12 },
          "& .swiper": {
            width: "100%",
          },
        }}
      >
        <Stack
          sx={{
            display: {
              xs: "flex",
              sm: "none",
            },
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "stretch",
            justifyContent: "space-between",
            marginBottom: "40px",
          }}
          component={motion.div}
          variants={staggerDiv}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <MotionTypography
            sx={useStyles.subHeading}
            variants={staggerSubHeading}
          >
            Our Measures
          </MotionTypography>
        </Stack>
        <Swiper
          slidesPerView={isDesktop ? 3 : isTablet ? 2 : 1}
          spaceBetween={matches ? theme.spacing(2) : theme.spacing(3)}
          freeMode={true}
          pagination={false}
          navigation={true}
          modules={[Pagination, Navigation, FreeMode]}
          onSlideChange={(swiper) => {
            setDisabledPrev(swiper.isBeginning);
            setDisabledNext(swiper.isEnd);
          }}
          style={{
            display: "flex",
            flexDirection: matches ? "column" : "column-reverse",
            gap: "30px",
          }}
        >
          <Stack
            sx={{
              display: {
                xs: "flex",
                sm: "none",
              },
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CuroselBttn disablePrev={disablePrev} disableNext={disableNext} />
          </Stack>
          {ourMeasuresdata.map((eachMearsure, index) => (
            <SwiperSlide key={index}>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                component={motion.div}
                viewport={{ once: true }}
                flexShrink={0}
              >
                <Image
                  src={eachMearsure.imageurl}
                  alt={eachMearsure.title}
                  width={120}
                  height={150}
                  style={{
                    height: "100%",
                    width: "120px",
                    marginRight: "16px",
                  }}
                />
                <Stack
                  spacing={2}
                  display={"flex"}
                  alignItems={"flex-start"}
                  component={motion.div}
                  variants={constrolButton}
                  initial={"initial"}
                  whileInView={"animate"}
                  viewport={{ once: true }}
                >
                  <MotionButton
                    sx={{
                      display: "flex",
                      padding: "6px 16px",
                      alignItems: "flex-start",
                      gap: "8px",
                      background: "rgba(255, 255, 255, 0.20)",
                      color: "var(--primary-light-grey, #DADADA)",
                      fontFamily: "Helvetica",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "128%",
                    }}
                    variants={staggerButton}
                    href="#"
                  >
                    {eachMearsure.title}
                  </MotionButton>
                  <MotionTypography
                    sx={{
                      color: "#FFF",
                      fontFamily: "Helvetica",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "128%",
                    }}
                    variants={staggerChildren}
                  >
                    {eachMearsure.description}
                  </MotionTypography>
                </Stack>
              </Stack>
            </SwiperSlide>
          ))}

          <Stack
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "stretch",
              justifyContent: "space-between",
            }}
            component={motion.div}
            variants={staggerDiv}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            <MotionTypography
              sx={useStyles.subHeading}
              variants={staggerSubHeading}
            >
              Our Measures
            </MotionTypography>
            <CuroselBttn disablePrev={disablePrev} disableNext={disableNext} />
          </Stack>
        </Swiper>
      </Stack>
    </Stack>
  );
};

// Main component  Sustainability

const Sustainability = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.darkToLight,
        },
      }}
    >
      <Stack
        sx={{
          padding: {
            xs: "32px 18px",
            md: "64px 32px 63px 32px",
            xl: "96px 64px 93px 64px",
          },
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        component={motion.div}
        variants={staggerDiv}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: {
              xs: "flex-start",
              md: "center",
            },
            gap: {
              xs: "40px",
              xl: "56px",
            },
          }}
        >
          <Stack
            spacing={2}
            marginBottom={"30px"}
            textAlign={"center"}
            component={motion.div}
            variants={staggerDiv}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            <MotionTypography
              sx={useStyles.haeding}
              variant="h5"
              variants={staggerheading}
            >
              Sustainability
            </MotionTypography>

            <MotionTypography
              sx={{
                ...useStyles.body2,
              }}
              variants={staggerChildren}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              At Bajaj Auto, our operations are not just revenue-focused. We
              also dedicate ourselves to achieving a balance between our
              business and environmental goals.
            </MotionTypography>
          </Stack>

          <Grid container sx={{ alignSelf: "stretch" }}>
            <Grid item xs={6} lg={3}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  borderRight: {
                    xs: "none",
                    md: "1px solid var(--Stroke, #EAEAEA)",
                  },
                  marginBottom: "40px",
                }}
              >
                <MotionTypography
                  variant="body2"
                  sx={{ ...useStyles.body2, textAlign: "left" }}
                  variants={staggerTextChildren}
                >
                  Gold Standard in Governance
                </MotionTypography>
                <MotionTypography
                  variant="body2"
                  variants={staggerTextChildren}
                  sx={useStyles.bodySmall}
                >
                  by 2024
                </MotionTypography>
              </Stack>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: {
                    xs: "flex-start",
                    sm: "center",
                  },
                  gap: "8px",
                  borderRight: {
                    xs: "none",
                    lg: "1px solid var(--Stroke, #EAEAEA)",
                  },
                  marginBottom: "40px",
                }}
                flexGrow={1}
              >
                <MotionTypography
                  variant="body2"
                  sx={{ ...useStyles.body2, textAlign: "left" }}
                  variants={staggerTextChildren}
                >
                  Water Positive
                </MotionTypography>
                <MotionTypography
                  variant="body2"
                  sx={useStyles.bodySmall}
                  variants={staggerTextChildren}
                >
                  by 2027
                </MotionTypography>
              </Stack>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: {
                    xs: "flex-start",
                    lg: "center",
                  },
                  gap: "8px",
                  borderRight: {
                    xs: "none",
                    md: "1px solid var(--Stroke, #EAEAEA)",
                  },
                  marginBottom: "40px",
                }}
              >
                <MotionTypography
                  variant="body2"
                  sx={{ ...useStyles.body2, textAlign: "left" }}
                  variants={staggerTextChildren}
                >
                  Carbon Neutral
                </MotionTypography>

                <MotionTypography
                  variant="body2"
                  sx={useStyles.bodySmall}
                  variants={staggerTextChildren}
                >
                  by 2040
                </MotionTypography>
              </Stack>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: {
                    xs: "flex-start",
                    sm: "center",
                  },
                  gap: "8px",
                  marginBottom: "40px",
                }}
              >
                <MotionTypography
                  variant="body2"
                  sx={{ ...useStyles.body2, textAlign: "left" }}
                  variants={staggerTextChildren}
                >
                  100% Renewable Energy
                </MotionTypography>
                <MotionTypography
                  variant="body2"
                  sx={useStyles.bodySmall}
                  variants={staggerTextChildren}
                >
                  by 2050
                </MotionTypography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
      <Carousel />
    </SectionWrapper>
  );
};

export default Sustainability;

//  Carousel Data
const ourMeasuresdata = [
  {
    imageurl: Emission,
    title: "Emissions",
    description:
      "Emissions produced by our automobiles has reduced by 55% compared to 2009.",
  },
  {
    imageurl: supplyChain,
    title: "Supply Chain",
    description:
      "Nearly 600 suppliers, dealers and distributors trained in & assessed on sustainability.",
  },
  {
    imageurl: solar,
    title: "Renewable Energy",
    description:
      "We adopted a 2 MWp Rooftop Solar Plant to achieve 50% renewable electricity by 2025.",
  },
];

// Common Typography  Styles

const useStyles = {
  haeding: {
    overflow: "hidden",
    color: "var(--White, #FFF)",
    textAlign: "center",
    textOverflow: "ellipsis",
    fontFamily: "Helvetica",
    fontSize: {
      sm: "32px",
      xl: "48px",
    },
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "128%",
    textTransform: "uppercase",
    marginBottom: "16px",
    opacity: 0.9,
  },
  body2: {
    color: "var(--White, #FFF)",
    textAlign: "center",
    textOverflow: "ellipsis",
    fontFamily: "Helvetica",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "128%",
    textTransform: "uppercase",
    marginBottom: "16px",
    opacity: 0.8,
  },
  bodySmall: {
    color: "rgba(255, 255, 255, 0.60)",
    fontFamily: "Helvetica",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "128%",
  },
  subHeading: {
    color: "#FFF",
    fontFamily: "Helvetica",
    fontSize: {
      xs: "24px",
      lg: "28px",
      xl: "32px",
    },
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "128%",
    Opacity: 0.9,
  },
  buttonText: {
    color: "var(--primary-light-grey, #DADADA)",
    fontFamily: "Helvetica",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "128%",
  },
};

// Animation Props

const staggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.5,
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
      duration: 0.8,
    },
  },
};

const staggerSubHeading: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "-50%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
    },
  },
};

const constrolButton: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "40%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
    },
  },
};

const staggerTextChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "40%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
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
      duration: 0.8,
    },
  },
};

const staggerButton: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};
