"use client";
import {
  ComponentProps,
  ComponentType,
  forwardRef,
  ReactNode,
  Ref,
} from "react";
import {
  MaterialSwiper,
  MaterialSwiperProps,
  MaterialSwiperSlide,
  MaterialSwiperSlideProps,
} from "@cc/material-components";
import { sxArrayUtil } from "@util/sx-helpers";
import { SwiperRef } from "swiper/swiper-react";
import "../../node_modules/swiper/swiper-bundle.min.css";
import { MotionStack, MotionStackProps } from "@cc/motion-components";

export type SlideData = {
  isActive?: boolean;
  isPrev?: boolean;
  isNext?: boolean;
  isVisible?: boolean;
  index?: number;
};

export interface EnhancedSwiperProps<
  T extends ComponentType<any> = ComponentType<any>,
  P extends ComponentProps<T> = ComponentProps<T>,
  PS = P extends SlideData ? P & SlideData : P,
> extends MaterialSwiperProps {
  data: PS[];
  passSlideState?: boolean;
  SlideWrapperProps?:
    | MaterialSwiperSlideProps
    | ((index: number) => MaterialSwiperSlideProps);
  SlideComponentProps?: Partial<PS> | ((index: number) => Partial<PS>);
  SlideComponent: ComponentType<P & SlideData>;
  Slots?: {
    ContainerStartChildren?: ReactNode;
    ContainerStartProps?: MotionStackProps;
    ContainerEndChildren?: ReactNode;
    ContainerEndProps?: MotionStackProps;
    WrapperStartChildren?: ReactNode;
    WrapperEndProps?: MotionStackProps;
    WrapperEndChildren?: ReactNode;
    WrapperStartProps?: MotionStackProps;
  };
}

export type EnhancedSwiperSlideComponent<T> = EnhancedSwiperProps<
  any,
  T
>["SlideComponent"];

export type EnhancedSwiperSlideData<T> = ComponentProps<
  EnhancedSwiperSlideComponent<T>
>;

const EnhancedSwiper = <
  T extends ComponentType<any>,
  P extends ComponentProps<T>,
>(
  props: EnhancedSwiperProps<T, P>,
  ref: Ref<SwiperRef>
) => {
  const {
    data = [],
    passSlideState,
    SlideComponent,
    SlideComponentProps,
    SlideWrapperProps,
    Slots = {},
    children,
    sx,
    ...swiperProps
  } = props;
  const {
    ContainerStartChildren,
    ContainerStartProps,
    ContainerEndChildren,
    ContainerEndProps,
    WrapperStartChildren,
    WrapperStartProps,
    WrapperEndChildren,
    WrapperEndProps,
  } = Slots;
  return (
    <MaterialSwiper
      ref={ref}
      sx={[
        {
          width: "100%",
          height: "100%",
        },
        ...sxArrayUtil(sx),
      ]}
      {...swiperProps}
    >
      {data.map((item, idx) => {
        return (
          <MaterialSwiperSlide
            key={idx}
            {...(typeof SlideWrapperProps === "function"
              ? SlideWrapperProps(idx)
              : SlideWrapperProps)}
          >
            {(slideData) => {
              return (
                <SlideComponent
                  {...(typeof SlideComponentProps === "function"
                    ? SlideComponentProps(idx)
                    : SlideComponentProps)}
                  {...item}
                  {...(passSlideState ? { ...slideData, index: idx } : {})}
                />
              );
            }}
          </MaterialSwiperSlide>
        );
      })}
      {ContainerStartChildren && (
        <MotionStack slot='container-start' {...ContainerStartProps}>
          {ContainerStartChildren}
        </MotionStack>
      )}
      {ContainerEndChildren && (
        <MotionStack slot='container-end' {...ContainerEndProps}>
          {ContainerEndChildren}
        </MotionStack>
      )}
      {WrapperStartChildren && (
        <MotionStack slot='wrapper-start' {...WrapperStartProps}>
          {WrapperStartChildren}
        </MotionStack>
      )}
      {WrapperEndChildren && (
        <MotionStack slot='wrapper-end' {...WrapperEndProps}>
          {WrapperEndChildren}
        </MotionStack>
      )}
      {children}
    </MaterialSwiper>
  );
};

export default forwardRef(EnhancedSwiper);
