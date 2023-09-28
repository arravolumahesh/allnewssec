"use client";
import { Swiper } from "swiper/types";
import React, { useEffect, useMemo, useState } from "react";
import {
  MotionStack,
  MotionStackProps,
  MotionTypography,
  MotionTypographyProps,
} from "@cc/motion-components";
import { StaticImageData } from "next/image";
import AnimatedButton, { AnimatedButtonProps } from "@cc/animated-button";
import { BehaviorSubject } from "rxjs";
import { useObservable } from "react-use";
import { H5_1 } from "@theme/components/typography.fontvariant";
import { AnimatePresence, MotionProps } from "framer-motion";
import SwiperNavigationButton, {
  SwiperNavigationButtonProps,
} from "@cc/swiper-navigation-button";
import { Stack, StackProps } from "@mui/material";
import { CalendarToday, FmdGood } from "@mui/icons-material";

export interface ArrowSlideInfoProps extends Omit<StackProps, "children"> {
  data: {
    prefix?: string;
    suffix?: {
      date?: string;
      region?: string;
    };
    title: string;
    description: string;
    image: string | StaticImageData;
    btnText?: string;
    btnLink?: string;
  }[];
  SlotProps?: {
    PrefixTypographyProps?: Omit<MotionTypographyProps, "children">;
    SuffixTypographyProps?: Omit<MotionTypographyProps, "children">;
    TitleTypographyProps?: Omit<MotionTypographyProps, "children">;
    DescriptionTypographyProps?: Omit<MotionTypographyProps, "children">;
    ButtonProps?: Omit<AnimatedButtonProps, "children">;
  };
  isNavigation?: boolean;
  NavigationWrapperProps?: Omit<MotionStackProps, "children">;
  InfoWrapperProps?: Omit<MotionStackProps, "children">;
  SwiperInstance: BehaviorSubject<Swiper | null>;
  SwiperNavigationButtonProps?: SwiperNavigationButtonProps;
}

const ArrowSlideInfo = (props: ArrowSlideInfoProps) => {
  const {
    data,
    isNavigation,
    NavigationWrapperProps,
    InfoWrapperProps,
    SwiperInstance,
    SwiperNavigationButtonProps,
    SlotProps = {},
    ...restStackProps
  } = props;
  const {
    PrefixTypographyProps,
    SuffixTypographyProps,
    TitleTypographyProps,
    DescriptionTypographyProps,
    ButtonProps,
  } = SlotProps;
  const swiper = useObservable(SwiperInstance, null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { prefix, suffix, title, description, btnText } = useMemo(() => {
    return data[activeIndex];
  }, [activeIndex, data]);

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", (s) => {
        s.activeIndex !== activeIndex && setActiveIndex(s.activeIndex);
      });
    }
    return () => {
      if (swiper) {
        swiper.off("slideChange");
      }
    };
  }, [swiper, activeIndex]);

  return (
    <Stack color={"inherit"} alignSelf={"center"} {...restStackProps}>
      <AnimatePresence presenceAffectsLayout mode={"popLayout"}>
        <MotionStack
          key={`prefix-${activeIndex}`}
          color={"inherit"}
          width={1}
          initial={"initial"}
          whileInView={"animate"}
          exit={"exit"}
          viewport={{
            once: true,
            amount: "some",
          }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
              },
            },
          }}
          {...InfoWrapperProps}
        >
          {prefix && (
            <MotionTypography
              variant={"subtitle1"}
              gutterBottom
              variants={childMotionVariants}
              {...PrefixTypographyProps}
            >
              {prefix}
            </MotionTypography>
          )}
          <MotionTypography
            variant={"h4"}
            fontSize={H5_1}
            gutterBottom
            variants={childMotionVariants}
            {...TitleTypographyProps}
          >
            {title}
          </MotionTypography>
          {suffix && (
            <MotionStack
              variants={childMotionVariants}
              direction='row'
              alignItems='center'
              columnGap={3}
            >
              {suffix.date && (
                <MotionTypography
                  display={"flex"}
                  gap={0.5}
                  alignItems={"center"}
                  variant={"body1"}
                  gutterBottom
                  {...SuffixTypographyProps}
                >
                  <CalendarToday fontSize='small' /> {suffix.date}
                </MotionTypography>
              )}
              {suffix.region && (
                <MotionTypography
                  display={"flex"}
                  gap={0.5}
                  alignItems={"center"}
                  variant={"body1"}
                  gutterBottom
                  {...SuffixTypographyProps}
                >
                  <FmdGood fontSize='small' /> {suffix.region}
                </MotionTypography>
              )}
            </MotionStack>
          )}
          <MotionTypography
            variant={"body1"}
            mb={3}
            variants={childMotionVariants}
            {...DescriptionTypographyProps}
          >
            {description}
          </MotionTypography>
          {btnText && (
            <AnimatedButton
              href={"/"}
              variant={"outlined"}
              color={"inherit"}
              variants={childMotionVariants}
              animationDelay={850}
              {...ButtonProps}
            >
              {btnText}
            </AnimatedButton>
          )}
        </MotionStack>
      </AnimatePresence>
      {isNavigation && swiper && (
        <SwiperNavigationButton
          swiper={swiper}
          alignSelf={{
            xs: "center",
            md: "flex-end",
          }}
          mt={{
            xs: 5,
            md: 4,
          }}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 1,
            },
          }}
          viewport={{
            once: true,
            amount: "some",
          }}
          {...SwiperNavigationButtonProps}
        />
      )}
    </Stack>
  );
};
export default ArrowSlideInfo;

const childMotionVariants: MotionProps["variants"] = {
  initial: {
    opacity: 0,
    x: "20%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
