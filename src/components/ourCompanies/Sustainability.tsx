"use client";

import { Button, Stack, Box } from "@mui/material";
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
} from "@/commonComponents/motion-elements";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";

// Curosel Part
const Carousel = () => {
  const theme = useTheme();
  const swiper = useSwiper();

  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  const isTablet = useMediaQuery(theme.breakpoints.up("md_lg"));

  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack>
      <Stack
        sx={{
          display: "flex",
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

        <Stack
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
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
              border: "1px solid var(--White, #FFF)",
            }}
            onClick={() => swiper?.slidePrev()}
            disabled={swiper?.isBeginning}
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
            }}
            onClick={() => swiper?.slideNext()}
            disabled={swiper?.isEnd}
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
      </Stack>
      <Stack
        component={"div"}
        sx={{
          py: { xs: 5, lg: 12 },
          "& .swiper": {
            width: "100%",
          },
        }}
      >
        <Swiper
          slidesPerView={isDesktop ? 3 : isTablet ? 2 : 1}
          spaceBetween={matches ? theme.spacing(2) : theme.spacing(3)}
          freeMode={true}
          pagination={false}
          navigation={true}
          modules={[Pagination, Navigation, FreeMode]}
        >
          {ourMeasuresdata.map((eachMearsure, index) => (
            <SwiperSlide key={index}>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                component={motion.div}
                viewport={{ once: true }}
                flexShrink={0}
                width={"410px"}
              >
                <Box
                  sx={{
                    background: `url('l${eachMearsure.imageurl}'),red 50% / cover no-repeat`,
                    width: {
                      xs: "120px",
                      sm: "102px",
                    },
                    height: "100%",
                    flexShrink: 0,
                  }}
                  marginRight={2}
                ></Box>
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
                      ...useStyles.body2,
                      opacity: 1,
                      textAlign: "left",
                      fontSize: "2px",
                    }}
                    variants={staggerChildren}
                  >
                    {eachMearsure.description}
                  </MotionTypography>
                </Stack>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
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
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Button
            sx={{
              display: "flex",
              width: "24px",
              height: "24px",
              padding: "4px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              border: "1px solid var(--White, #FFF)",
            }}
            onClick={() => swiper?.slidePrev()}
            disabled={swiper?.isBeginning}
          >
            <NavigateBeforeIcon
              sx={{
                width: "16px",
                height: "16px",
                color: "#FFF",
              }}
            />
          </Button>
          <Button
            sx={{
              display: "flex",
              width: "24px",
              height: "24px",
              padding: "4px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              border: "1px solid var(--White, #FFF)",
            }}
            onClick={() => swiper?.slideNext()}
            disabled={swiper?.isEnd}
          >
            <NavigateNextIcon
              sx={{
                width: "16px",
                height: "16px",
                color: "#FFF",
              }}
            />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

// Main component  Sustainability

const Sustainability = () => {
  return (
    <SectionWrapper
      sx={{
        backgroundColor: "#000000",
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
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "70px",
              alignSelf: "stretch",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                borderRight: {
                  xs: "none",
                  md: "1px solid var(--Stroke, #EAEAEA)",
                },

                width: {
                  xs: "33%",
                  sm: "40%",
                  md: "310px",
                },
                maxWidth: "319px",
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
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                borderRight: {
                  xs: "none",
                  md: "1px solid var(--Stroke, #EAEAEA)",
                },
                width: {
                  xs: "33%",
                  sm: "40%",
                  md: "196px",
                },
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
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                borderRight: {
                  xs: "none",
                  md: "1px solid var(--Stroke, #EAEAEA)",
                },
                width: {
                  xs: "40%",
                  sm: "40%",

                  md: "196px",
                },
              }}
              flexGrow={1}
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
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                width: {
                  xs: "30%",
                  sm: "40%",

                  md: "196px",
                },
              }}
              flexGrow={1}
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
          </Stack>
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
    imageurl: "/images/Emission.png",
    title: "Emissions",
    description:
      "Emissions produced by our automobiles has reduced by 55% compared to 2009.",
  },
  {
    imageurl: "/images/supplyChain.png",
    title: "Supply Chain",
    description:
      "Nearly 600 suppliers, dealers and distributors trained in & assessed on sustainability.",
  },
  {
    imageurl: "/images/solar.png",
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
    fontSize: {
      xs: "18px",
    },
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
