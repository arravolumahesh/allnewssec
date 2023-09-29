"use client";
import React from "react";
import { MotionTypography } from "@/commonComponents/motion-components";
import SectionWrapper, { basePx } from "@/commonComponents/section-wrapper";
import { Box, Stack } from "@mui/material";
import group2 from "@/components/ourCompanies/images/group2.png";
import group3 from "@/components/ourCompanies/images/group3.png";
import group5 from "@/components/ourCompanies/images/group5.png";
import group7 from "@/components/ourCompanies/images/group7.png";
import group8 from "@/components/ourCompanies/images/group8.png";
import EnhancedSwiper, {
  EnhancedSwiperProps,
} from "@/commonComponents/enhanced-swiper";
import { Autoplay } from "swiper/modules";
import {
  MaterialImage,
  MaterialLink,
} from "@/commonComponents/material-components";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowForwardIos } from "@mui/icons-material";
import { H6_2 } from "@/styles/theme/components/typography.fontvariant";
import { motion } from "framer-motion";
const Bajaj = () => {
  return (
    <SectionWrapper
      SectionProps={{
        bgcolor: "primary.500",
      }}
      SectionHeaderProps={{
        title: "Discover bajaj Auto",
        TitleTypographyProps: {
          variant: "h3",
        },
        pl: { ...basePx, xs: 8 },
        pr: { ...basePx, xs: 8 },
        mb: { xs: 5, md: 6 },
      }}
      ContainerProps={{
        pl: 0,
        pr: 0,
      }}
    >
      <Stack rowGap={{ xs: 2, m: 3 }}>
        <EnhancedSwiper
          data={imageData}
          SlideComponent={ImageSlies}
          {...swiperProps}
        />
        <EnhancedSwiper
          data={imageData}
          SlideComponent={ImageSlies}
          {...swiperProps}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
        />
      </Stack>
      <Stack
        display={"flex"}
        flexDirection={"row"}
        sx={
          {
            // flexDirection: screenSize === "mobile" ? "column" : "",
            // alignItems: screenSize === "mobile" ? "center" : "",
          }
        }
      >
        <Stack direction={"row"} mt={{ xs: 5, md: 7 }} px={basePx}>
          <MaterialLink
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: H6_2,
              textDecoration: "none",
            }}
            href='/'
          >
            Visit Bajaj Auto Website
            <ArrowForwardIos sx={{ ml: "8px" }} fontSize='small' />
          </MaterialLink>
          {/* <Stack
                direction={"row"}
                gap={4}
                mt={2}
                component={motion.div}
                variants={iconStagger}
              >
                {[fb, twitter, yt, insta, linkd].map((item, idx) => (
                  <Box
                    key={idx}
                    position={"relative"}
                    width={48}
                    height={48}
                    component={motion.div}
                    variants={iconStaggerChildren}
                  >
                    <MotionImage src={item} alt="" fill />
                  </Box>
                ))}
              </Stack> */}
        </Stack>
      </Stack>
    </SectionWrapper>
  );
};

export default Bajaj;

const imageData = [
  { img: group2 },
  { img: group3 },
  { img: group5 },
  { img: group7 },
  { img: group8 },
  { img: group2 },
  { img: group3 },
  { img: group5 },
  { img: group7 },
  { img: group8 },
];

interface ImageSliesProps {
  img: StaticImageData | string;
}

const ImageSlies = (props: ImageSliesProps) => {
  const { img } = props;
  return (
    <MaterialImage
      src={img}
      alt=''
      width={421}
      height={247}
      sx={{
        width: { xs: 200, md: 421 },
        height: { xs: 164, md: 247 },
        objectFit: "cover",
      }}
    />
  );
};

const swiperProps: Omit<EnhancedSwiperProps, "data" | "SlideComponent"> = {
  slidesPerView: "auto",
  speed: 5000,
  loop: true,
  modules: [Autoplay],
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  SlideWrapperProps: {
    sx: {
      width: "auto",
      mr: { xs: 2, md: 3 },
    },
  },
  sx: {
    width: "100%",
    "& .swiper-wrapper": {
      transitionTimingFunction: "linear !important",
    },
  },
};
