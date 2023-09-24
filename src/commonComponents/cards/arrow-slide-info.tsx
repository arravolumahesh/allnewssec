"use client";
import { Stack, StackProps } from "@mui/material";
import { Swiper as SwiperType } from "swiper/types";
import React, { useEffect, useMemo } from "react";
import { MotionTypography, MotionTypographyProps } from "@cc/motion-components";
import { StaticImageData } from "next/image";
import {
  NavigateBeforeRounded,
  NavigateNextRounded,
} from "@mui/icons-material";
import AnimatedButton, { AnimatedButtonProps } from "@cc/animated-button";
import BorderedIconButton from "@cc/bordered-icon-button";

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
  swiperInstance?: SwiperType | null;
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

  useEffect(() => {
    console.log("-> swiper instance added");
    swiperInstance &&
      swiperInstance.on("slideChange", (swiper) => {
        console.log("-> slide changed");
      });
  }, [swiperInstance]);

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
        <BorderedIconButton color={"primary"}>
          <NavigateBeforeRounded />
        </BorderedIconButton>
        <BorderedIconButton color={"primary"}>
          <NavigateNextRounded />
        </BorderedIconButton>
      </Stack>
    </Stack>
  );
};
export default ArrowSlideInfo;
