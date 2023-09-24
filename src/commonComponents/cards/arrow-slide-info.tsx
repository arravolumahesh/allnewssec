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
import BorderedIconButton, {
  iconButtonLargeSx,
} from "@cc/bordered-icon-button";
import { BehaviorSubject } from "rxjs";
import { useObservable } from "react-use";
import { H5_1 } from "@theme/components/typography.fontvariant";

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
  NavigationWrapperProps?: Omit<StackProps, "children">;
  SwiperInstance: BehaviorSubject<Swiper | null>;
}

const ArrowSlideInfo = (props: ArrowSlideInfoProps) => {
  const {
    data,
    isNavigation,
    NavigationWrapperProps,
    SwiperInstance,
    SlotProps = {},
    ...restStackProps
  } = props;
  const {
    PrefixTypographyProps,
    TitleTypographyProps,
    DescriptionTypographyProps,
    ButtonProps,
  } = SlotProps;
  const swiper = useObservable(SwiperInstance, null);
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
    <Stack color={"primary.main"} {...restStackProps}>
      {prefix && (
        <MotionTypography
          variant={"subtitle1"}
          gutterBottom
          {...PrefixTypographyProps}
        >
          {prefix}
        </MotionTypography>
      )}
      <MotionTypography
        key={title}
        variant={"h4"}
        fontSize={H5_1}
        gutterBottom
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
      <MotionTypography
        variant={"body1"}
        mb={3}
        {...DescriptionTypographyProps}
      >
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
      {isNavigation && (
        <Stack
          direction={"row"}
          spacing={{
            xs: 3,
            sm: 2,
          }}
          color={"primary.main"}
          mt={{
            xs: 5,
            md: 4.5,
            xl: 4,
          }}
          {...NavigationWrapperProps}
        >
          <BorderedIconButton
            color={"primary"}
            onClick={() => {
              swiper?.slidePrev();
            }}
            sx={iconButtonLargeSx}
          >
            <NavigateBeforeRounded />
          </BorderedIconButton>
          <BorderedIconButton
            color={"primary"}
            onClick={() => {
              swiper?.slideNext();
            }}
            sx={iconButtonLargeSx}
          >
            <NavigateNextRounded />
          </BorderedIconButton>
        </Stack>
      )}
    </Stack>
  );
};
export default ArrowSlideInfo;
