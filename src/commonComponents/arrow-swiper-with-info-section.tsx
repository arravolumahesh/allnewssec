"use client";
import React, { ComponentProps, ComponentType, useRef } from "react";
import { BehaviorSubject } from "rxjs";
import { Swiper } from "swiper/types";
import SectionWrapper, { SectionWrapperProps } from "@cc/section-wrapper";
import ArrowSwiper, { ArrowSwiperProps } from "@cc/arrow-swiper";
import ArrowSlideInfo, {
  ArrowSlideInfoProps,
} from "@cc/cards/arrow-slide-info";
import { sxArrayUtil } from "@util/sx-helpers";
import { deepmerge } from "@mui/utils";
import { SetOptional } from "type-fest";

export interface ArrowSwiperWithInfoProps<
  T extends ComponentType<any>,
  P extends ComponentProps<T> = ComponentProps<T>,
> extends SetOptional<ArrowSwiperProps<T, P>, "SwiperProps"> {
  ArrowSlideInfoProps?: SetOptional<
    ArrowSlideInfoProps,
    "data" | "SwiperInstance"
  >;
  SectionWrapperProps?: Omit<SectionWrapperProps, "children">;
}

const ArrowSwiperWithInfoSection = <
  T extends ComponentType<any>,
  P extends ComponentProps<T>,
>(
  props: ArrowSwiperWithInfoProps<T, P>,
) => {
  const {
    data,
    SwiperProps,
    ArrowSlideInfoProps,
    SectionWrapperProps,
    ...restProps
  } = props;
  const $swiperInstance = useRef(
    new BehaviorSubject<Swiper | null>(null),
  ).current;
  return (
    <SectionWrapper
      {...deepmerge(
        ArrowSwiperWithInfoSectionWrapperDefaultProps,
        SectionWrapperProps,
      )}
    >
      <ArrowSwiper
        data={data}
        SwiperProps={{
          onSwiper: (swiper) => $swiperInstance.next(swiper),
          ...SwiperProps,
        }}
        {...restProps}
        sx={[
          {
            width: { xs: 1, sm: 490, md_lg: 400, lg: 540, xl: 690 },
            aspectRatio: "5/3.21",
          },
          ...sxArrayUtil(restProps.sx),
        ]}
      />
      <ArrowSlideInfo
        data={data}
        SwiperInstance={$swiperInstance}
        {...deepmerge(arrowSlideInfoDefaultProps, ArrowSlideInfoProps)}
      />
    </SectionWrapper>
  );
};

export default ArrowSwiperWithInfoSection;

export const ArrowSwiperWithInfoSectionWrapperDefaultProps: Omit<
  SectionWrapperProps,
  "children" | "ref"
> = {
  direction: { md_lg: "row" },
  alignItems: "flex-start",
  justifyContent: "space-between",
  color: "primary.main",
  rowGap: { xs: 4, md_lg: 0 },
};

export const arrowSlideInfoDefaultProps: Omit<
  ArrowSlideInfoProps,
  "data" | "SwiperInstance"
> = {
  NavigationWrapperProps: {
    alignSelf: { xs: "center", md: "flex-end" },
  },
  height: "fit-content",
  width: {
    xs: 1,
    md_lg: 0.5,
    lg: 0.47,
    xl: 0.4,
  },
};
