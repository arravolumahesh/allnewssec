"use client";
import { Navigation } from "swiper/modules";
import { MotionTypography } from "@/commonComponents/motion-components";
import React from "react";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Stack } from "@mui/material";
import EnhancedSwiper from "@/commonComponents/enhanced-swiper";
import SwiperNavigationButton from "@/commonComponents/swiper-navigation-button";
import { CaseStudySlide, CaseStudySlideProps } from "./cards/case-study-slide";

type CaseStudiesProps = {
  SectioHeader?: string;
  data: CaseStudySlideProps[];
};

const CaseStudies = (props: CaseStudiesProps) => {
  const { SectioHeader, data } = props;
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
          data={data}
          Slots={{
            ContainerStartChildren: (
              <Stack
                direction='row'
                alignItems={"center"}
                justifyContent={"space-between"}
                mb={{ xs: 5, md: 6 }}
              >
                <MotionTypography variant='h3'>
                  {SectioHeader || "Our Case Studies"}
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
