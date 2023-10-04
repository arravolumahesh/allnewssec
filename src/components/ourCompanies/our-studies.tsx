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
                  Our Case Studies
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
                alignSelf={"center"}
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

interface CaseStudySlideProps {
  img: StaticImageData | string;
  tag: string;
  title: string;
  subTitle: string;
}

const CaseStudySlide = (props: CaseStudySlideProps) => {
  const { img, tag, title, subTitle } = props;
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <Stack
      sx={{
        cursor: "pointer",
        "&:after": {
          display: isMobile ? "none" : "flex",
          opacity: 0,
          content: '"VIEW CASE STUDY"',
          fontSize: H6_2,
          color: "white",
          width: 1,
          height: 310,
          position: "absolute",
          top: 0,
          left: 0,
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%)",
          alignItems: "center",
          justifyContent: "center",
          transition: "all .3s",
        },
        "&:hover": {
          "&:after": {
            opacity: 1,
          },
        },
      }}
      rowGap={2}
    >
      <MaterialImage
        src={img}
        alt='childerns'
        sx={{
          position: "relative",
          width: { xs: 310, md: 643 },
          height: { xs: 240, md: 310 },
          objectFit: "cover",
        }}
      />
      <MotionTypography
        variant={"caption"}
        color={"grey.A400"}
        p={1.3}
        bgcolor={"#DADADA"}
        width={"max-content"}
      >
        {tag}
      </MotionTypography>
      <MotionTypography variant='body1' fontSize={H6_1}>
        {title}
      </MotionTypography>
      <MotionTypography variant='body1'>{subTitle}</MotionTypography>
      {isMobile && (
        <Link
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "18px",
            textDecoration: "none",
          }}
          href='/'
        >
          View Case Study{" "}
          <ArrowForwardIos sx={{ ml: "8px" }} fontSize='small' />
        </Link>
      )}
    </Stack>
  );
};

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
