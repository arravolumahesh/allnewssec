"use client";
import { IconButton, Stack, StackProps } from "@mui/material";
import { Swiper } from "swiper/types";
import React, { useMemo } from "react";
import { MotionTypography, MotionTypographyProps } from "@cc/motion-components";
import MLink, { MLinkProps } from "@cc/m-link";
import { StaticImageData } from "next/image";

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
    ButtonProps?: Omit<MLinkProps, "children">;
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
    <Stack {...restStackProps}>
      {prefix && (
        <MotionTypography {...PrefixTypographyProps}>{prefix}</MotionTypography>
      )}
      <MotionTypography
        key={title}
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
        sx={{
          opacity: 0,
          transform: "translateY(150%)",
        }}
        {...TitleTypographyProps}
      >
        {title}
      </MotionTypography>
      <MotionTypography {...DescriptionTypographyProps}>
        {description}
      </MotionTypography>
      <MLink href={"/"} {...ButtonProps}>
        {btnText}
      </MLink>
      <Stack direction={"row"} {...navigationWrapperProps}>
        <IconButton
          onClick={() => {
            swiperInstance?.slidePrev();
          }}
        >
          {"<"}
        </IconButton>
        <IconButton
          onClick={() => {
            swiperInstance?.slideNext();
          }}
        >
          {">"}
        </IconButton>
      </Stack>
    </Stack>
  );
};
export default ArrowSlideInfo;
