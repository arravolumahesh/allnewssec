"use client";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import AnimatedButton from "@/commonComponents/animated-button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import {
  Body1,
  H1,
  H6_3,
} from "@/styles/theme/components/typography.fontvariant";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { common } from "@mui/material/colors";
import Image from "next/image";
import cup1 from "@/components/charitableTrusts/images/cup1.png";
import cup2 from "@/components/charitableTrusts/images/cup2.png";
import cup3 from "@/components/charitableTrusts/images/cup3.png";
import cup4 from "@/components/charitableTrusts/images/cup4.png";
import React, { useState } from "react";
import SlideButtons from "../intermediate/swiper/swiperButton";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const Awards = () => {
  const theme = useTheme();
  const [disablePrev, setDisabledPrev] = useState<boolean>(true);
  const [disableNext, setDisabledNext] = useState<boolean>(false);
  const isTabletOrLarger = useMediaQuery((theme: any) =>
    theme.breakpoints.up("md")
  );
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg_xl"));
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));

  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const slidesPerView = isDesktop ? 4 : isTablet ? 2 : 1;

  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.darkToLight,
          height: "978px",
        },
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: H6_3,
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <MotionTypography
          variant="h1"
          sx={{
            fontSize: H1,
            textAlign: "center",
          }}
          variants={staggerChildren}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          Jamnalal Bajaj Awards
        </MotionTypography>
        <MotionTypography
          variant="body1"
          sx={{
            fontSize: Body1,
            textAlign: "center",
            width: { xs: "342px", md: "692px" },
            opacity: 0.6,
          }}
          variants={staggerChildren}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          The Jamnalal Bajaj Foundation along with other affiliates instituted
          Awards to provide a grateful gesture to men and women working at the
          grassroots level; celebrating their dedication to building a more
          compassionate and equitable society.
        </MotionTypography>
        <AnimatedButton href={"/"} variant={"outlined"} color={"inherit"}>
          Learn More
        </AnimatedButton>
      </Stack>
      <Box sx={{ display: "flex", gap: "24px", flexDirection: "row" }}>
        <Swiper
          freeMode={true}
          pagination={false}
          navigation={true}
          spaceBetween={24}
          slidesPerView={slidesPerView}
          modules={[Pagination, Navigation, FreeMode]}
          onSlideChange={(swiper) => {
            setDisabledPrev(swiper.isBeginning);
            setDisabledNext(swiper.isEnd);
          }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Stack>
            {awardsdata.map((award, index) => (
              <SwiperSlide key={index}>
                <Stack>
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      // position: "relative",
                      // height: "400px",
                    }}
                  >
                    <Image
                      src={award.imageUrl}
                      alt="awards"
                      width={84}
                      height={209}
                      // style={{
                      //   position: "absolute",
                      //   zIndex: "0",
                      //   left: "40%",
                      //   top: "-20%",
                      // }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        width: "310px",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "16px",
                        background: "rgba(255, 255, 255, 0.1)",
                        padding: "64px 0px 24px 0px",

                        "&:hover": {
                          background: common.white,
                          color: (theme) => theme.palette.primary.main,
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "18px",
                          width: "260px",
                          height: { xs: "25px", md: "23px" },
                          textAlign: "center",
                        }}
                      >
                        {award.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "16px",
                          width: "262px",
                          height: { xs: "88px", md: "80px" },
                          textAlign: "center",
                        }}
                      >
                        {award.subtitle}
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
                {/* Need to add the button to the swipert thing */}
              </SwiperSlide>
            ))}
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: " row",
              justifyContent: "flex-end",
              marginTop: "40px",
              color: common.white,
            }}
          >
            <SlideButtons disablePrev={disablePrev} disableNext={disableNext} />
          </Stack>
        </Swiper>
      </Box>
    </SectionWrapper>
  );
};

export default Awards;

const staggerChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "150%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const awardsdata = [
  {
    imageUrl: cup1,
    title: "CONSTRUCTIVE WORK",
    subtitle:
      "Recognizes contributions in the field of constructive work focussing on any of the eighteen development areas.",
  },
  {
    imageUrl: cup2,
    title: "WOMEN & CHILD WELFARE",
    subtitle:
      "Commends women for their contribution towards the development & welfare of women and children.",
  },
  {
    imageUrl: cup3,
    title: "SCIENCE & TECHNOLOGY",
    subtitle:
      "Felicitates the contributions in the application of science and technology for rural and tribal development.",
  },
  {
    imageUrl: cup4,
    title: "INTERNATIONAL",
    subtitle:
      "Honours individual foreign nationals for propagating Gandhian principles outside India.",
  },
];

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
