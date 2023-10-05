"use client";
import { Navigation } from "swiper/modules";
import {
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import React from "react";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Stack, Theme, useMediaQuery } from "@mui/material";
import womens from "@/components/ourCompanies/images/womens.png";
import childrens from "@/components/ourCompanies/images/childrens.png";
import { MaterialImage } from "@/commonComponents/material-components";
import { StaticImageData } from "next/image";
import EnhancedSwiper from "@/commonComponents/enhanced-swiper";
import { H6_1, H6_2 } from "@/styles/theme/components/typography.fontvariant";
import Link from "next/link";
import { ArrowForwardIos } from "@mui/icons-material";
import SwiperNavigationButton from "@/commonComponents/swiper-navigation-button";
import { CaseStudySlide } from "../ourCompanies/our-studies";

const CaseStudies = () => {
  return (
    <SectionWrapper
      SectionProps={{ id: "case-studies" }}
      color={"primary.main"}
    >
      <Stack width={1}>
        <EnhancedSwiper
          slidesPerView={"auto"}
          navigation={{
            enabled: true,
            nextEl: ".swiper-case-next",
            prevEl: ".swiper-case-prev",
          }}
          modules={[Navigation]}
          SlideWrapperProps={{
            sx: {
              width: { xs: 301, lg: 643 },
              mr: 3,
            },
          }}
          sx={{
            overflow: { xs: "visible", xxl: "hidden" },
          }}
          SlideComponent={CaseStudySlide}
          data={swiperData}
          Slots={{
            ContainerStartChildren: (
              <Stack
                direction='row'
                alignItems={"center"}
                justifyContent={"space-between"}
                mb={{ xs: 5, md: 6 }}
              >
                <MotionTypography variant='h3'>
                  More Case Studies
                </MotionTypography>
                <SwiperNavigationButton
                  display={{
                    xs: "none",
                    md: "flex",
                  }}
                  PrevButtonProps={{
                    className: "swiper-case-prev",
                  }}
                  NextButtonProps={{
                    className: "swiper-case-next",
                  }}
                />
              </Stack>
            ),
            ContainerEndChildren: (
              <SwiperNavigationButton
                mt={5}
                display={{
                  xs: "flex",
                  md: "none",
                }}
                alignSelf={"flex-start"}
                PrevButtonProps={{
                  className: "swiper-case-prev",
                }}
                NextButtonProps={{
                  className: "swiper-case-next",
                }}
              />
            ),
          }}
        />
      </Stack>
    </SectionWrapper>
  );
};

export default CaseStudies;



const swiperData = [
  {
    img: childrens,
    tag: "IPH-Triveni Program",
    title: "Digital Skilling for Youth",
    subTitle:
      "Helping students learn digitally in order to keep them future and employment ready. ",
  },
  {
    img: womens,
    tag: "IPH-Triveni Program",
    title: "Providing Vocational Training for Women in Maharashtra",
    subTitle:
      "Aiding women in growing skills that help them achieve financial independence through mindfully curated training programmes. ",
  },
  {
    img: childrens,
    tag: "IPH-Triveni Program",
    title: "Digital Skilling for Youth",
    subTitle:
      "Helping students learn digitally in order to keep them future and employment ready. ",
  },
  {
    img: womens,
    tag: "IPH-Triveni Program",
    title: "Providing Vocational Training for Women in Maharashtra",
    subTitle:
      "Aiding women in growing skills that help them achieve financial independence through mindfully curated training programmes. ",
  },
];

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
