"use client";
import React from "react";
import SectionWrapper from "@cc/section-wrapper";
import EnhancedSwiper, { EnhancedSwiperProps } from "@cc/enhanced-swiper";
import InitiativeHeroCard from "@c/ourCompanies/heroesOfInitiatives/initiative-hero-card";
import hero_1 from "./images/hero_1.jpg";
import hero_2 from "./images/hero_2.jpg";
import hero_3 from "./images/hero_3.jpg";
import hero_4 from "./images/hero_4.jpg";
import SwiperNavigationButton from "@cc/swiper-navigation-button";
import { H3_1 } from "@theme/components/typography.fontvariant";
import ArrowGradient from "@cc/arrow-gradient";
import { MotionTypography } from "@cc/motion-components";
import { Stack } from "@mui/material";
import { Navigation } from "swiper/modules";

const HerosOfInitiatives = () => {
  return (
    <SectionWrapper
      id='recognition'
      color={"secondary.main"}
      SectionProps={{
        bgcolor: "primary.main",
      }}
      direction={"row"}
      alignItems={"flex-start"}
    >
      <ArrowGradient
        SVGProps={{
          width: 121,
          height: 316,
        }}
        flexGrow={1}
        display={{
          xs: "none",
          xl: "block",
        }}
        alignSelf={"flex-start"}
        mt={-12}
        ml={{ xl: 0, xxl: 8.375 }}
      />
      <Stack width={{ xs: 1, xl: 0.83 }} flexGrow={1}>
        <MotionTypography
          variant={"h2"}
          fontSize={H3_1}
          mb={5}
          width={650}
          maxWidth={"100%"}
          textAlign={{ xs: "center", md: "left" }}
          alignSelf={{
            xs: "center",
            md: "flex-start",
          }}
        >
          Heroes behind our successful initiatives.
        </MotionTypography>
        <EnhancedSwiper
          data={[...herosData, ...herosData]}
          SlideComponent={InitiativeHeroCard}
          slidesPerView={"auto"}
          passSlideState
          simulateTouch={false}
          modules={[Navigation]}
          navigation={{
            enabled: true,
            nextEl: ".heroes-button-next",
            prevEl: ".heroes-button-prev",
          }}
          SlideWrapperProps={{
            sx: {
              width: "auto",
              height: "auto",
              alignSelf: "flex-end",
              mr: 3,
              "&:last-child": {
                mr: 0,
              },
            },
          }}
          sx={{
            overflow: {
              xs: "visible",
              lg: "hidden",
            },
          }}
          Slots={{
            ContainerEndChildren: (
              <SwiperNavigationButton
                mt={{
                  xs: 5,
                  md: 4,
                  xl: 3,
                }}
                PrevButtonProps={{
                  className: "heroes-button-prev",
                }}
                NextButtonProps={{
                  className: "heroes-button-next",
                }}
                alignSelf={{
                  xs: "center",
                  md: "flex-end",
                }}
              />
            ),
          }}
        />
      </Stack>
    </SectionWrapper>
  );
};

export default HerosOfInitiatives;

const herosData: EnhancedSwiperProps<typeof InitiativeHeroCard>["data"] = [
  {
    title: "Sanchali Khanna",
    image: hero_1,
    designation: "Senior Engineer",
    description:
      "Participated in IPH-Triveni Program & helped 200+ individuals.",
  },
  {
    title: "Rajat Sharme",
    image: hero_2,
    designation: "Senior Engineer",
    description:
      "Participated in IPH-Triveni Program & helped 200+ individuals.",
  },
  {
    title: "Sanjana Singh",
    image: hero_3,
    designation: "Senior Engineer",
    description:
      "Participated in IPH-Triveni Program & helped 200+ individuals.",
  },
  {
    title: "Rohit Kumar",
    image: hero_4,
    designation: "Senior Engineer",
    description:
      "Participated in IPH-Triveni Program & helped 200+ individuals.",
  },
];
