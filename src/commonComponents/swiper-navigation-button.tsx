import BorderedIconButton, {
  BorderedIconButtonProps,
  iconButtonLargeSx,
} from "@cc/bordered-icon-button";
import {
  NavigateBeforeRounded,
  NavigateNextRounded,
} from "@mui/icons-material";
import { MotionStack, MotionStackProps } from "@cc/motion-components";
import React from "react";
import { Swiper } from "swiper/types";
import { sxArrayUtil } from "@util/sx-helpers";

export interface SwiperNavigationButtonProps
  extends Omit<MotionStackProps, "children"> {
  swiper?: Swiper | null;
  PrevButtonProps?: Omit<BorderedIconButtonProps, "children">;
  NextButtonProps?: Omit<BorderedIconButtonProps, "children">;
}

const SwiperNavigationButton = (props: SwiperNavigationButtonProps) => {
  const {
    swiper,
    PrevButtonProps,
    NextButtonProps,
    ...NavigationWrapperProps
  } = props;
  return (
    <MotionStack
      direction={"row"}
      color={"primary.main"}
      spacing={{
        xs: 3,
        sm: 2,
      }}
      {...NavigationWrapperProps}
    >
      <BorderedIconButton
        color={"primary"}
        onClick={() => {
          swiper && swiper.slidePrev();
        }}
        {...PrevButtonProps}
        sx={[iconButtonLargeSx, ...sxArrayUtil(PrevButtonProps?.sx)]}
      >
        <NavigateBeforeRounded />
      </BorderedIconButton>
      <BorderedIconButton
        color={"primary"}
        onClick={() => {
          swiper && swiper.slideNext();
        }}
        {...NextButtonProps}
        sx={[iconButtonLargeSx, ...sxArrayUtil(NextButtonProps?.sx)]}
      >
        <NavigateNextRounded />
      </BorderedIconButton>
    </MotionStack>
  );
};

export default SwiperNavigationButton;
