import EnhancedSwiper, { EnhancedSwiperProps } from "@cc/enhanced-swiper";
import { Stack, StackProps, SxProps, Theme } from "@mui/material";
import React, { ComponentProps, ComponentType, useCallback } from "react";
import { Navigation } from "swiper/modules";
import { SetOptional } from "type-fest";
import { clipImagePath } from "@cc/clipped-image";
import { sxArrayUtil } from "@util/sx-helpers";
import { MaterialSwiperSlideProps } from "@cc/material-components";
import ArrowGradient from "@cc/arrow-gradient";
import ArrowSlideDefaultImage from "@cc/cards/arrow-slide-default-image";
import SwiperNavigationArrowIcon from "@cc/swiper-navigation-arrow-icon";

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
    navigation,
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
      overflow={"clip"}
      {...restStackProps}
    >
      <ArrowGradient
        height={"100%"}
        style={{
          position: "absolute",
          top: 0,
          right: -42,
          bottom: 0,
        }}
      />
      <EnhancedSwiper
        data={data}
        SlideWrapperProps={slideWrapperProps}
        modules={[Navigation, ...swiperModules]}
        loop
        navigation={
          typeof navigation === "boolean"
            ? navigation
            : {
                enabled: true,
                prevEl: ".swiper-prev",
                nextEl: null,
                ...navigation,
              }
        }
        spaceBetween={40}
        sx={[enhancedSwiperSx, ...sxArrayUtil(sx)]}
        SlideComponent={ArrowSlideDefaultImage}
        {...swiperProps}
      >
        {typeof navigation === "boolean"
          ? navigation
          : navigation?.enabled && (
              <SwiperNavigationArrowIcon
                direction={"next"}
                className={"swiper-prev"}
              />
            )}
      </EnhancedSwiper>
    </Stack>
  );
};

export default ArrowSwiper;

const enhancedSwiperSx: SxProps<Theme> = {
  mx: "unset",
  width: "90%",
  clipPath: clipImagePath,
};
