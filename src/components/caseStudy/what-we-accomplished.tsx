"use client";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Box, Stack, useMediaQuery } from "@mui/material";
import {
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import { motion } from "framer-motion";
import Divider from "@mui/material/Divider";

import ArrowGradient from "@cc/arrow-gradient";
import {
  Body1,
  H1,
  H2,
  H6_1,
  Subtitle2,
} from "@/styles/theme/components/typography.fontvariant";
import SlideButtons from "../intermediate/swiper/swiperButton";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { common } from "@mui/material/colors";

const Accomplished = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg_xl"));
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const slidesPerView = isDesktop ? 3 : isTablet ? 2 : 'auto';
  const [disablePrev, setDisabledPrev] = useState<boolean>(true);
  const [disableNext, setDisabledNext] = useState<boolean>(false);
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.darkToLight,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "80px",
        }}
        component={motion.div}
        variants={containerAnimation}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <Stack
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            alignSelf: "stretch",
          }}
        >
          <ArrowGradient height={"201.22px"} maxWidth={130} variants={arrowAnimation} />
        </Stack>
        <MotionTypography
          sx={{
            fontSize: {lg:32,md:28,xs:20},
            color: (theme) => theme.palette.primary.contrastText,
            width: { md: "60%", xs: "90%" },
            textAlign:{md:'inherit',xs:'center'}
          }}
          variant="body1"
          variants={textAnimation}
        >
          Maharashtra faced a significant issue of unemployment amongst the
          youth due to lack of necessary skills.
        </MotionTypography>
      </Box>
      <Divider
        sx={{
          color: common.white,
          mt: { xs: "40px", md: "48px", height: "1px" },
        }}
      />

      <MotionTypography
        variant="h1"
        sx={{
          fontSize: H1,
          textAlign: "center",
          mt: { md: "90px", xs: "40px" },
        }}
        variants={staggerChildren}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        What we accomplished
      </MotionTypography>
      <MotionTypography
        variant="body1"
        sx={{
          fontSize: "18px",
          textAlign: "center",
          alignSelf: "center",
          width: { xs: "342px", md: "692px" },
          opacity: 0.8,
          mt: "16px",
          mb: { xs: "56px", md: "32px" },
        }}
        variants={staggerChildren}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        We take immense pride in sharing the tangible outcomes of our skill
        development initiative, which stand as a testament to the transformative
        power of education and training.
      </MotionTypography>
      <Box sx={{ display: "flex", gap: "24px", flexDirection: "row",
      "& .swiper": {
        width: "100%",
      },
      '& .swiper-slide':{
        width:'auto'
      }
    }}>
        <Swiper          
          pagination={false}          
          spaceBetween={24}
          slidesPerView={slidesPerView}
          modules={[Pagination, Navigation]}
          onSlideChange={(swiper) => {
            setDisabledPrev(swiper.isBeginning);
            setDisabledNext(swiper.isEnd);
          }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Stack>
            {awardsdata.map((award, index) => (
              <SwiperSlide key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        width: { xs: "320px", md: 1 },
                        flexDirection: "column",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent:'center',
                        gap: "24px",
                        minHeight: 340,
                        height:'100%',
                        background: "rgba(255, 255, 255, 0.1)",
                        p:{xs:3,md:5},
                        transition:'all 0.5s',
                        "& .hoverSubs":{                          
                          height:0,
                          overflow:'hidden',
                          transition:'height 0.5s',
                        },
                        "&:hover": {
                          background: common.white,
                          transition:'all 0.5s',
                          color: (theme) => theme.palette.primary.main,
                          "& .hoverSubs":{                            
                            height:100,                            
                            transition:'height 0.5s',
                          },
                        },
                      }}
                    >
                      <MotionTypography
                        variant="body2"
                        sx={{
                          fontSize: { lg: "72px", xs: "56px", md: "60px" },
                          width: "260px",
                          fontWeight: "700",                          
                          textAlign: "center",                          
                        }}
                        variants={staggerChildren}
                      >
                        {award.number}
                      </MotionTypography>
                      <MotionTypography
                        variant="body1"
                        sx={{
                          fontSize: "18px",
                          width: "260px",                          
                          textAlign: "center",
                        }}
                        variants={staggerChildren}
                      >
                        {award.title}
                      </MotionTypography>
                      <MotionTypography
                        variant="body2"
                        sx={{
                          fontSize: Subtitle2,
                          width: "262px",                          
                          textAlign: "center",
                        }}
                        variants={staggerChildren}
                        className="hoverSubs"
                      >
                        {award.subtitle}
                      </MotionTypography>
                    </Box>                              
              </SwiperSlide>
            ))}
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: " row",
              justifyContent: {md:"flex-end",xs:"center"},
              marginTop: "40px",
              color: common.white,

            }}
          >
            <SlideButtons disablePrev={disablePrev} variant={'secondary'} disableNext={disableNext} />
          </Stack>
        </Swiper>
      </Box>
    </SectionWrapper>
  );
};

export default Accomplished;

const containerAnimation: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.4,
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
      duration: 0.6,
    },
  },
};

const textAnimation: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "40%",
  },
  animate: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 0.9,
    },
  },
};

const arrowAnimation: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 0.8,
    },
  },
};

const awardsdata = [
  {
    number: "20%",
    title: "INCREASE IN INCOME LEVEL",
    subtitle:"Families of participants experiences an increase in household income, contributing to overall economic growth in the community.",
  },
  {
    number: "12%",
    title: "WOMEN & CHILD WELFARE",
    subtitle:"Families of participants experiences an increase in household income, contributing to overall economic growth in the community.",
  },
  {
    number: "35%",
    title: "SCIENCE & TECHNOLOGY",
    subtitle:"Families of participants experiences an increase in household income, contributing to overall economic growth in the community.",
  },
  {
    number: "35%",
    title: "SCIENCE & TECHNOLOGY",
    subtitle:"Families of participants experiences an increase in household income, contributing to overall economic growth in the community.",
  },
  {
    number: "35%",
    title: "SCIENCE & TECHNOLOGY",
    subtitle:"Families of participants experiences an increase in household income, contributing to overall economic growth in the community.",
  },
];
