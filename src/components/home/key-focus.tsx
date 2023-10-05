"use client";
import {
  MotionBoxProps,
  MotionStack,
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import skillImage from "./images/Rectangle 24993.png";
import { SmallTitleCard } from "@/commonComponents/cards/small-title";
import { motion } from "framer-motion";
import EnhancedSwiper, {
  EnhancedSwiperProps,
} from "@/commonComponents/enhanced-swiper";
import SectionWrapper from "@/commonComponents/section-wrapper";
import ArrowGradient from "@cc/arrow-gradient";
import { H3_1, H6_3 } from "@/styles/theme/components/typography.fontvariant";
import ArrowSwiperWithInfoSection, {
  ArrowSwiperWithInfoProps,
} from "@/commonComponents/arrow-swiper-with-info-section";
import ArrowSlideInfo from "@/commonComponents/cards/arrow-slide-info";
import { ArrowSlideDefaultImageProps } from "@/commonComponents/cards/arrow-slide-default-image";
import educationImg from "./images/keyfocusImg/education.jpg";
import communityImg from "./images/keyfocusImg/communitydevelop.jpg";
import othersImg from "./images/keyfocusImg/others.jpg";
import {
  arrowInfoStaggerDiv,
  arrowInfoStaggerDivChildren,
  arrowLeftToRightTransition,
} from "@/commonComponents/animations";

const KeyFocus = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <SectionWrapper
      pt={{ xs: 7, md: 6 }}
      pb={{ xs: 7, md: 12 }}
      rowGap={{ xs: 6, md: 2 }}
      color={"primary.main"}
    >
      <Stack direction={"row"} alignItems={"center"}>
        {matches && (
          <ArrowGradient height={"301px"} {...arrowLeftToRightTransition} />
        )}
        <MotionStack
          variants={arrowInfoStaggerDiv}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
          maxWidth={{ xs: "100%", md: 814 }}
          rowGap={4}
        >
          <Stack maxWidth={814} rowGap={{ xs: 2, md: 4 }}>
            <MotionTypography
              variant='h1'
              component={"h3"}
              variants={arrowInfoStaggerDivChildren}
            >
              OUR KEY FOCUS AREAS
            </MotionTypography>
            <MotionTypography
              fontSize={H6_3}
              variants={arrowInfoStaggerDivChildren}
            >
              Our CSR initiatives encompass a diverse range of focus areas, with
              a strong emphasis on skill development. We aim to address social,
              environmental, and community needs to create a positive and
              lasting impact.
            </MotionTypography>
          </Stack>
        </MotionStack>
      </Stack>
      <ArrowSwiperWithInfoSection
        data={arrowData}
        SwiperKey={KeyFocus.name}
        SwiperProps={{
          navigation: false,
        }}
        ArrowSlideInfoProps={{
          SlotProps: {
            TitleTypographyProps: {
              fontSize: H3_1,
            },
            ButtonProps: {
              href: "/all-initiative",
              variant: "contained",
              color: "primary",
            },
          },
        }}
        SectionWrapperProps={{
          p: "0 !important",
          mb: { xs: 0, md: 6 },
        }}
      />
      <Stack
        direction='row'
        alignItems={"center"}
        width={{ xs: 1, xxl: "107%" }}
      >
        <EnhancedSwiper
          slidesPerView={"auto"}
          SlideWrapperProps={{
            sx: {
              width: { xs: 200, lg: 328 },
              mr: { xs: 2, lg: 0 },
              transition: "all 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
                zIndex: 1,
              },
            },
          }}
          sx={{
            m: {
              //  xs: "-48px 0 -56px -24px",
              xxl: "-64px 0 -96px -64px",
            },
            p: {
              // xs: "48px 24px 56px 24px",
              xxl: "64px 64px 96px 64px",
            },
            overflow: { xs: "visible", xxl: "hidden" },
          }}
          SlideComponent={SmallTitleCard}
          data={data}
          SlideComponentProps={(index) => ({
            initial: {
              opacity: 0,
              y: "100%",
            },
            whileInView: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: index * 0.5,
              },
            },
            viewport: {
              once: true,
            },
          })}
        />
      </Stack>
    </SectionWrapper>
  );
};

export default KeyFocus;

const arrowData: (ArrowSwiperWithInfoProps<
  typeof ArrowSlideInfo
>["data"][number]["data"][number] &
  ArrowSlideDefaultImageProps)[] = [
  {
    title: "SKILL DEVELOPEMENT",
    description:
      "Providing skill-based education through various programs to strengthen the foundation of a progressive nation.",
    image: skillImage,
    btnText: "Learn More",
    btnLink: "/",
  },
];

const data: EnhancedSwiperProps<typeof SmallTitleCard>["data"] = [
  {
    img: educationImg.src,
    title: "Education",
    href: "#",
  },
  {
    img: communityImg.src,
    title: "Community Development",
    href: "#",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/ea93/c20b/634f7fd518261abf4b3598846e01d3f8?Expires=1696204800&Signature=WitUdgcM7J8~K1g-WuhJzmxQljKipaufpY8EuHMIehnHyRHrS-LNqa4WL1ImRmoElXOEBFgPRQlDB2riD8gWalaWztQoVoZ~1R8XLDt9unDdkdAguq~~GW7N017lNxAAGgQlZanbWvFlMkfiajSWwf2pyGSMk8fbHWvAaNx0PKQe9pLSyKchSYD4qftuX2MGgCic8LQ56UiOxMvUPvm~PHxIbbVbnUwMoYx~-DofcBPN1Gxy~vKpLVAb1nzQAli~hzvq1osnR4Qt5~z0lRLX0ZOqH9EOEF6rzTY8zuWWQCOVpVFwaHcG4DTNWspqt4AqprlmcI9wscPbSCptKMMUsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Healthcare",
    href: "#",
  },
  {
    img: othersImg.src,
    title: "Others",
    href: "#",
  },
];
