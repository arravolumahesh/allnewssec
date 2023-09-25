import EnhancedSwiper, { EnhancedSwiperProps } from "@cc/enhanced-swiper";
import { SxProps, Theme } from "@mui/material";
import React, { ComponentProps, ComponentType, useCallback } from "react";
import { Navigation } from "swiper/modules";
import { SetOptional } from "type-fest";
import { clipImagePath } from "@cc/clipped-image";
import { sxArrayUtil } from "@util/sx-helpers";
import { MaterialSwiperSlideProps } from "@cc/material-components";
import ArrowGradient from "@cc/arrow-gradient";
import ArrowSlideDefaultImage from "@cc/cards/arrow-slide-default-image";
import SwiperNavigationArrowIcon from "@cc/swiper-navigation-arrow-icon";
import {
  MotionBox,
  MotionStack,
  MotionStackProps,
} from "@cc/motion-components";
import { MotionProps } from "framer-motion";

export interface ArrowSwiperProps<
  T extends ComponentType<any>,
  P extends ComponentProps<T> = ComponentProps<T>,
> extends Omit<MotionStackProps, "children"> {
  SwiperProps: SetOptional<
    EnhancedSwiperProps<T, P>,
    "data" | "SlideComponent"
  >;
  data: EnhancedSwiperProps<T>["data"];
}

const ArrowSwiper = <T extends ComponentType<any>, P extends ComponentProps<T>>(
  props: ArrowSwiperProps<T, P>,
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
    <MotionStack
      direction={"row"}
      flexWrap={"nowrap"}
      position={"relative"}
      overflow={"clip"}
      initial={"initial"}
      whileInView={"animate"}
      viewport={{
        once: true,
        amount: "all",
      }}
      transition={{
        staggerChildren: 0.4,
        staggerDirection: -1,
      }}
      {...restStackProps}
    >
      <MotionBox
        height={"100%"}
        width={0.9}
        zIndex={2}
        variants={childMotionVariants}
      >
        <EnhancedSwiper
          data={data}
          SlideWrapperProps={slideWrapperProps}
          modules={[Navigation, ...swiperModules]}
          loop
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: null,
            ...(typeof navigation === "boolean"
              ? {
                  enabled: navigation,
                }
              : navigation),
          }}
          spaceBetween={40}
          sx={[enhancedSwiperSx, ...sxArrayUtil(sx)]}
          SlideComponent={ArrowSlideDefaultImage}
          {...swiperProps}
        >
          {(typeof navigation === "boolean"
            ? navigation
            : navigation?.enabled) && (
            <SwiperNavigationArrowIcon
              direction={"next"}
              className={"swiper-prev"}
            />
          )}
        </EnhancedSwiper>
      </MotionBox>
      <ArrowGradient
        width={"10%"}
        height={"100%"}
        ml={"-116px"}
        zIndex={1}
        variants={childMotionVariants}
      />
    </MotionStack>
  );
};

export default ArrowSwiper;

const enhancedSwiperSx: SxProps<Theme> = {
  mx: "unset",
  width: "100%",
  height: "100%",
  clipPath: clipImagePath,
};

const childMotionVariants: MotionProps["variants"] = {
  initial: {
    opacity: 0,
    x: "-200%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};
