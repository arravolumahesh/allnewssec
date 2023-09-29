"use client";

import { useState } from "react";

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
  MotionImage,
} from "@/commonComponents/motion-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  H5_1,
  H5,
  Caption,
} from "@/styles/theme/components/typography.fontvariant";
import AnimatedButton from "@/commonComponents/animated-button";

import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";

import Balamandir from "./images/Balamandir.png";
import Bajajwadi from "./images/Bajajwadi.png";
import MaharogiSevaSamiti from "./images/MaharogiSevaSamiti.png";

import JamnalalBajajHome from "./images/JamnalalBajajHome.png";
import MLink from "@/commonComponents/m-link";

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

const OurContributions = () => {
  const [disablePrev, setDisabledPrev] = useState<boolean>(true);
  const [disableNext, setDisabledNext] = useState<boolean>(false);
  const theme = useTheme();
  const swiper = useSwiper();

  const isDesktop = useMediaQuery(theme.breakpoints.up("lg_xl"));
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));

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
            sx={{
              fontSize: H5_1,
            }}
            variants={staggerSubHeading}
          >
            Our CONTRIBUTIONS
          </MotionTypography>
        </Stack>
        <Swiper
          slidesPerView={isDesktop ? 3 : isTablet ? 2 : 1}
          spaceBetween={2}
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
          {data.map((eachMearsure, index) => (
            <SwiperSlide key={index}>
              <Stack
                display={"flex"}
                flexDirection={"column"}
                component={motion.div}
                variants={staggerDiv}
                initial={"initial"}
                whileInView={"animate"}
                viewport={{ once: true }}
                flexShrink={0}
                sx={{
                  width: {
                    xs: "301px",
                    md: "340px",
                    lg_xl: "380px",
                  },
                }}
              >
                <MotionImage
                  src={eachMearsure.image}
                  alt={eachMearsure.title}
                  width={isDesktop ? 380 : isTablet ? 340 : 310}
                  height={310}
                  variants={StaggerImage}
                />
                <Stack
                  spacing={2}
                  paddingTop={2}
                  display={"flex"}
                  alignItems={"flex-start"}
                  component={motion.div}
                  variants={constrolButton}
                  initial={"initial"}
                  whileInView={"animate"}
                  viewport={{ once: true }}
                >
                  <MLink
                    sx={{
                      display: "flex",
                      padding: "6px 16px",
                      alignItems: "flex-start",
                      gap: "8px",
                      background: "#EAEAEA",

                      fontSize: Caption,
                      marginTop: "30px",
                      color: "#575756",
                    }}
                    href="#"
                  >
                    {eachMearsure.title}
                  </MLink>
                  <MotionTypography variants={staggerChildren} variant="body1">
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
              sx={{ color: "#FFF", fontSize: H5 }}
              variants={staggerSubHeading}
            >
              Our CONTRIBUTIONS
            </MotionTypography>
            <CuroselBttn disablePrev={disablePrev} disableNext={disableNext} />
          </Stack>
        </Swiper>
      </Stack>
    </Stack>
  );
};

const Wardha = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: `linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%),url(https://res.cloudinary.com/dspbnevuo/image/upload/v1695902886/Frame_1171280671_1_of4tnp.png),lightgray 50% / cover no-repeat`,
        },
      }}
    >
      <Box
        alignSelf={"stretch"}
        display={"flex"}
        gap={9}
        flexDirection={"column"}
        sx={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.50) 6.73%, rgba(0, 0, 0, 0.90) 100%, #000 100%),",
        }}
      >
        <Stack
          display={"flex"}
          gap={3}
          alignSelf={"stretch"}
          textAlign={"center"}
          alignItems={"center"}
          sx={{
            alignSelf: "stretch",
          }}
        >
          <MotionTypography
            variant="h3"
            sx={{
              color: "#FFF",
              opacity: 0.9,
            }}
          >
            Wardha - A sanctuary of hope & change
          </MotionTypography>
          <MotionTypography
            variant="body1"
            sx={{
              color: "#FFF",
              opacity: 0.8,
              width: {
                xs: "100%",
                md: "58%",
              },
            }}
          >
            A home to Jamnalal Bajaj and top political leaders including Mahatma
            Gandhi, Wardha has been a witness to many events of constructive,
            social, national and historical significance. 
          </MotionTypography>
          <AnimatedButton href={"/"} variant={"outlined"} color={"inherit"}>
            Learn More
          </AnimatedButton>
        </Stack>
        <OurContributions />
      </Box>
    </SectionWrapper>
  );
};

export default Wardha;

const data = [
  {
    image: Balamandir,
    title: "Jamnalal Bajaj Balmandir",
    description:
      "Started in 1938, this organisation since then has been successfully fulfilling its objective of taking care of the holistic development of the children",
  },
  {
    image: Bajajwadi,
    title: "Bajajwadi",
    description:
      "Bajajwadi at Wardha had a lot happening within its four walls. It was the meeting place for Gandhian ‘revolutionaries’,",
  },
  {
    image: MaharogiSevaSamiti,
    title: "Maharogi Seva Samiti",
    description:
      "Maharogi Seva Samiti (MSS) at Dattapur was the first indigenous leprosy care centre of India established in Wardha in 1936.",
  },
];

const staggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.5,
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

const StaggerImage: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "-50%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
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
