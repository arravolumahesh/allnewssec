"use client";
import { IconButton, Stack, StackProps } from "@mui/material";
import { Swiper } from "swiper/types";
import React, { useMemo } from "react";
import { MotionTypography, MotionTypographyProps } from "@cc/motion-components";
import { StaticImageData } from "next/image";
import {
  NavigateBeforeRounded,
  NavigateNextRounded,
} from "@mui/icons-material";
import AnimatedButton, { AnimatedButtonProps } from "@cc/animated-button";

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
  swiperInstance?: Swiper | null;
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
  const { prefix, title, description, btnText } = useMemo(() => {
    const { activeIndex } = swiperInstance || {};
    return data[activeIndex || 0];
  }, [data, swiperInstance]);
  return (
    <Stack color={"primary.dark"} spacing={3} {...restStackProps}>
      {prefix && (
        <MotionTypography variant={"body1"} {...PrefixTypographyProps}>
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
        color={"primary.dark"}
      >
        <IconButton
          className={"border"}
          onClick={() => {
            swiperInstance?.slidePrev();
          }}
          color={"primary"}
        >
          <NavigateBeforeRounded />
        </IconButton>
        <IconButton
          className={"border"}
          onClick={() => {
            swiperInstance?.slideNext();
          }}
          color={"primary"}
        >
          <NavigateNextRounded />
        </IconButton>
      </Stack>
    </Stack>
  );
};
export default ArrowSlideInfo;
