"use client";
import React, { forwardRef, useMemo } from "react";
import {
  IconButton,
  IconButtonProps,
  SvgIcon,
  SxProps,
  Theme,
} from "@mui/material";
import { sxArrayUtil } from "@util/sx-helpers";

interface SwiperNavigationArrowIconProps
  extends Omit<IconButtonProps, "children"> {
  direction?: "prev" | "next";
}

const SwiperNavigationArrowIcon = forwardRef<
  HTMLButtonElement,
  SwiperNavigationArrowIconProps
>((props, ref) => {
  const { direction = "next", sx, ...restIconButtonProps } = props;
  const iconDirectionSx: SxProps<Theme> = useMemo(() => {
    return direction === "prev"
      ? {
          left: 20,
          transform: "translateY(-50%) rotate(180deg)",
        }
      : {
          right: 20,
          transform: "translateY(-50%)",
        };
  }, [direction]);
  return (
    <IconButton
      ref={ref}
      disableRipple
      sx={[iconButtonSx, iconDirectionSx, ...sxArrayUtil(sx)]}
      {...restIconButtonProps}
    >
      <SvgIcon
        xmlns={"http://www.w3.org/2000/svg"}
        width={"21"}
        height={"71"}
        viewBox={"0 0 21 71"}
        fill={"none"}
        fontSize={"inherit"}
      >
        <path
          d="M2 1.18469L18 35.6079L2.41109 69.3063"
          stroke="white"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
      </SvgIcon>
    </IconButton>
  );
});

export default SwiperNavigationArrowIcon;

SwiperNavigationArrowIcon.displayName = SwiperNavigationArrowIcon.name;

const iconButtonSx: SxProps<Theme> = {
  fontSize: 55,
  position: "absolute",
  top: "50%",
  zIndex: 1,
  color: "transparent",
  transition: "scale 0.2s ease-in-out",
  "&:active": {
    scale: "80%",
  },
};
