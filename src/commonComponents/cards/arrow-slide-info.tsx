"use client";
import { Stack, StackProps } from "@mui/material";
import { Swiper } from "swiper/types";
import React, { useEffect, useMemo, useState } from "react";
import { MotionTypography, MotionTypographyProps } from "@cc/motion-components";
import { StaticImageData } from "next/image";
import {
  NavigateBeforeRounded,
  NavigateNextRounded,
} from "@mui/icons-material";
import AnimatedButton, { AnimatedButtonProps } from "@cc/animated-button";
import BorderedIconButton from "@cc/bordered-icon-button";
import { BehaviorSubject } from "rxjs";
import { useObservable } from "react-use";

export interface ArrowSlideInfoProps extends Omit<StackProps, "children"> {
  data: {
    prefix?: string;
    title: string;
    description: string;
    image: string | StaticImageData;
    btnText: string;
    btnLink: string;
  }[];
  SlotProps?: {
    PrefixTypographyProps?: Omit<MotionTypographyProps, "children">;
    TitleTypographyProps?: Omit<MotionTypographyProps, "children">;
    DescriptionTypographyProps?: Omit<MotionTypographyProps, "children">;
    ButtonProps?: Omit<AnimatedButtonProps, "children">;
  };
  isNavigation?: boolean;
  navigationWrapperProps?: Omit<StackProps, "children">;
  swiperInstance: BehaviorSubject<Swiper | null>;
}

const ArrowSlideInfo = (props: ArrowSlideInfoProps) => {
  const {
    data,
    isNavigation,
    navigationWrapperProps,
    swiperInstance,
    SlotProps = {},
    ...restStackProps
  } = props;
  const {
    PrefixTypographyProps,
    TitleTypographyProps,
    DescriptionTypographyProps,
    ButtonProps,
  } = SlotProps;
  const swiper = useObservable(swiperInstance, null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { prefix, title, description, btnText } = useMemo(() => {
    return data[activeIndex];
  }, [activeIndex, data]);

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", (swiper) => {
        swiper.activeIndex !== activeIndex &&
          setActiveIndex(swiper.activeIndex);
      });
    }
    return () => {
      if (swiper) {
        swiper.off("slideChange");
      }
    };
  }, [swiper, activeIndex]);

  return (
    <Stack color={"primary.main"} spacing={3} {...restStackProps}>
      {prefix && (
        <MotionTypography variant={"subtitle1"} {...PrefixTypographyProps}>
          {prefix}
        </MotionTypography>
      )}
      <MotionTypography
        key={title}
        variant={"h4"}
        fontWeight={"inherit"}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 2,
            duration: 0.6,
          },
        }}
        initial={{
          opacity: 0,
          y: "150%",
        }}
        {...TitleTypographyProps}
      >
        {title}
      </MotionTypography>
      <MotionTypography variant={"body1"} {...DescriptionTypographyProps}>
        {description}
      </MotionTypography>
      <AnimatedButton
        href={"/"}
        variant={"outlined"}
        color={"primary"}
        {...ButtonProps}
      >
        {btnText}
      </AnimatedButton>
      <Stack
        direction={"row"}
        {...navigationWrapperProps}
        spacing={{
          xs: 3,
          sm: 2,
        }}
        color={"primary.main"}
      >
        <BorderedIconButton
          color={"primary"}
          onClick={() => {
            swiper?.slidePrev();
          }}
        >
          <NavigateBeforeRounded />
        </BorderedIconButton>
        <BorderedIconButton
          color={"primary"}
          onClick={() => {
            swiper?.slideNext();
          }}
        >
          <NavigateNextRounded />
        </BorderedIconButton>
      </Stack>
    </Stack>
  );
};
export default ArrowSlideInfo;
