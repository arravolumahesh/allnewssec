"use client";
import {
  AppBar,
  AppBarProps,
  SxProps,
  Theme,
  useScrollTrigger,
} from "@mui/material";
import { ResponsiveStyleValue } from "@mui/system";
import { Property } from "csstype";
import { motion } from "framer-motion";
import { MotionVariantProps } from "@cc/motion-components";
import { forwardRef } from "react";
import { sxArrayUtil } from "@util/sx-helpers";

export const appbarMotionTransition = {
  duration: 0.4,
  ease: "easeInOut",
} as const;


const appbarVariant: MotionVariantProps = {
  hidden: {
    y: "-100%",
    transition: appbarMotionTransition,
  },
  visible: { y: 0, transition: appbarMotionTransition },
};

const AppbarWithScrollTrigger = forwardRef<HTMLHeadElement, AppBarProps>(
  (props, ref) => {
    const { sx, ...restProps } = props;
    const trigger = useScrollTrigger({
      threshold: 200,
    });
    return (
      <AppBar
        ref={ref}
        elevation={0}
        component={motion.header}
        variants={appbarVariant}
        animate={trigger ? "hidden" : "visible"}
        sx={[appbarSx, ...sxArrayUtil(sx)]}
        {...restProps}
      />
    );
  },
);

export default AppbarWithScrollTrigger;

AppbarWithScrollTrigger.displayName = AppbarWithScrollTrigger.name;

const appbarSx: SxProps<Theme> = (theme) =>
  theme.unstable_sx({
    background: theme.palette.gradient.header,
    color: "primary.contrastText",
    height: appbarHeight,
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  });

export const appbarHeight: ResponsiveStyleValue<
  Property.Height<string | number>
> = {
  xs: "64px",
  md: "92px",
  xxl: "120px",
};
