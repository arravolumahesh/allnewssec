"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { ComponentProps, ComponentType, ReactNode } from "react";
import "../../node_modules/swiper/swiper-bundle.min.css";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { SetOptional } from "type-fest";

export type SlideData = {
  isActive: boolean;
  isPrev: boolean;
  isNext: boolean;
  isVisible: boolean;
  index: number;
};

export interface EnhancedSwiperProps<
  T extends ComponentType<any> = ComponentType<any>,
  P extends ComponentProps<T> = ComponentProps<T>,
  PS = P extends SlideData
      ? SetOptional<P, "index" | "isActive" | "isPrev" | "isNext" | "isVisible">
    : P,
> extends ComponentProps<typeof MaterialSwiper> {
  data: PS[];
  passSlideState?: boolean;
  SlideWrapperProps?:
    | ComponentProps<typeof MaterialSwiperSlide>
    | ((index: number) => ComponentProps<typeof MaterialSwiperSlide>);
  SlideComponentProps?: Partial<PS> | ((index: number) => Partial<PS>);
  SlideComponent: ComponentType<P & SlideData>;
  Slots?: {
    ContainerStartChildren?: ReactNode;
    ContainerStartProps?: ComponentProps<typeof Stack>;
    ContainerEndChildren?: ReactNode;
    ContainerEndProps?: ComponentProps<typeof Stack>;
    WrapperStartChildren?: ReactNode;
    WrapperEndProps?: ComponentProps<typeof Stack>;
    WrapperEndChildren?: ReactNode;
    WrapperStartProps?: ComponentProps<typeof Stack>;
  };
}

export type EnhancedSwiperSlideData<T> = EnhancedSwiperProps<
  any,
  T
>["SlideComponent"];

export const MaterialSwiper = styled(Swiper)(({ theme }) => {
  return theme.unstable_sx({});
});
export const MaterialSwiperSlide = styled(SwiperSlide)(({ theme }) => {
  return theme.unstable_sx({});
});

const EnhancedSwiper = <
  T extends ComponentType<any>,
  P extends ComponentProps<T>,
>(
  props: EnhancedSwiperProps<T, P>,
) => {
  const {
    data = [],
    passSlideState,
    SlideComponent,
    SlideComponentProps,
    SlideWrapperProps,
    Slots,
    ...swiperProps
  } = props;
  return (
    <MaterialSwiper {...swiperProps}>
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
      {Slots &&
        Object.keys(Slots).length &&
        (() => {
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
            <>
              {ContainerStartChildren && (
                <Stack slot="container-start" {...ContainerStartProps}>
                  {ContainerStartChildren}
                </Stack>
              )}
              {ContainerEndChildren && (
                <Stack slot="container-end" {...ContainerEndProps}>
                  {ContainerEndChildren}
                </Stack>
              )}
              {WrapperStartChildren && (
                <Stack slot="wrapper-start" {...WrapperStartProps}>
                  {WrapperStartChildren}
                </Stack>
              )}
              {WrapperEndChildren && (
                <Stack slot="wrapper-end" {...WrapperEndProps}>
                  {WrapperEndChildren}
                </Stack>
              )}
            </>
          );
        })()}
    </MaterialSwiper>
  );
};

export default EnhancedSwiper;
