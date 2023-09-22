"use client";
import EnhancedSwiper, { EnhancedSwiperProps } from "@cc/enhanced-swiper";
import { Stack, StackProps } from "@mui/material";
import React, { ComponentProps, ComponentType, useCallback } from "react";
import { Controller, Navigation, Virtual } from "swiper/modules";
import { SetOptional } from "type-fest";
import { clipImagePath } from "@cc/clipped-image";
import { sxArrayUtil } from "@util/sx-helpers";
import { MaterialSwiperSlideProps } from "@cc/material-components";
import Arrow from "@cc/arrow";
import ArrowSlideDefaultImage from "@cc/cards/arrow-slide-default-image";

export interface SwiperSectionProps<
  T extends ComponentType<any>,
  P extends ComponentProps<T> = ComponentProps<T>,
> extends Omit<StackProps, "children"> {
  SwiperProps: SetOptional<
    EnhancedSwiperProps<T, P>,
    "data" | "SlideComponent"
  >;
  data: EnhancedSwiperProps<T>["data"];
}

const ArrowSwiper = <T extends ComponentType<any>, P extends ComponentProps<T>>(
  props: SwiperSectionProps<T, P>,
) => {
  const { SwiperProps, data, ...restStackProps } = props;
  const {
    modules: swiperModules = [],
    SlideWrapperProps,
    sx,
    ...swiperProps
  } = SwiperProps;

  const slideWrapperProps = useCallback(
    (index: number): MaterialSwiperSlideProps => {
      const tempProps =
        typeof SlideWrapperProps === "function"
          ? SlideWrapperProps(index)
          : SlideWrapperProps;
      return {
        ...tempProps,
        sx: [
          {
            clipPath: clipImagePath,
          },
          ...sxArrayUtil(tempProps?.sx),
        ],
      };
    },
    [SlideWrapperProps],
  );

  return (
    <Stack
      direction={"row"}
      flexWrap={"nowrap"}
      position={"relative"}
      {...restStackProps}
    >
      <EnhancedSwiper
        data={data}
        SlideWrapperProps={slideWrapperProps}
        modules={[Virtual, Controller, Navigation].concat(swiperModules)}
        loop
        virtual
        spaceBetween={40}
        sx={[
          {
            mx: "unset",
            width: "90%",
            clipPath: clipImagePath,
          },
          ...sxArrayUtil(sx),
        ]}
        SlideComponent={ArrowSlideDefaultImage}
        {...swiperProps}
      />
      <Arrow
        height={"100%"}
        style={{
          position: "absolute",
          top: 0,
          right: -42,
          bottom: 0,
          zIndex: 9,
        }}
      />
    </Stack>
  );
};

export default ArrowSwiper;
