"use client";
import ArrowGradient from "@/commonComponents/arrow-gradient";
import {
  MotionBoxProps,
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import awards from "@/components/charitableTrusts/images/awards.png";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import { H3_2 } from "@/styles/theme/components/typography.fontvariant";
import { MaterialImage } from "@/commonComponents/material-components";
import ArrowSlideInfo from "@/commonComponents/cards/arrow-slide-info";
import { BehaviorSubject } from "rxjs";
import { useRef } from "react";
import { Swiper } from "swiper/types";

const Nominations = () => {
  const $swiperInstance = useRef(
    new BehaviorSubject<Swiper | null>(null)
  ).current;
  return (
    <SectionWrapper
      color={"primary.main"}
      SectionProps={{ position: "relative" }}
    >
      <ArrowGradient
        width={{ xs: 88, xl: 121 }}
        height={{ xs: 230, xl: 316 }}
        SVGProps={{
          style: {
            width: "100%",
          },
        }}
        sx={{
          position: "absolute",
          top: { xs: "-40px", xl: 0 },
          left: { xs: 0, xl: 64 },
        }} /* {...imageTransition} */
      />
      <ArrowGradient
        width={{ xs: 88, xl: 121 }}
        height={{ xs: 230, xl: 316 }}
        SVGProps={{
          style: {
            width: "100%",
          },
        }}
        sx={{
          position: "absolute",
          bottom: 0,
          right: { xs: "-64px", xl: 64 },
        }} /* {...imageTransition} */
      />

      <Stack
        direction={{ xs: "column", md: "row" }}
        rowGap={5}
        columnGap={5}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <MaterialImage
          src={awards}
          alt=''
          width={532}
          height={434}
          sx={{
            width: { xs: 342, xl: 532 },
            height: { xs: 282, xl: 434 },
            zIndex: 1,
          }}
        />
        <ArrowSlideInfo
          data={data}
          SwiperInstance={$swiperInstance}
          sx={{ maxWidth: { xs: "none", md: 485 } }}
          SlotProps={{
            TitleTypographyProps: {
              fontSize: H3_2,
            },
            PrefixTypographyProps: {
              variant: "body2",
            },
          }}
        />
      </Stack>
    </SectionWrapper>
  );
};

export default Nominations;

const data = [
  {
    prefix: "Jamnalal Bajaj Awards 2023",
    applyDate: "15 Aug 2023",
    title: "Nominations Open",
    description:
      "The Jamnalal Bajaj Foundation established four annual awards, honoring the legacy and ideals of Jamnalal Bajaj both in India and abroad.",

    btnText: "Apply Now",
    btnLink: "/",
  },
];

const imageTransition: MotionBoxProps = {
  initial: {
    x: "-121%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  viewport: {
    once: true,
  },
};

const staggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.5,
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
