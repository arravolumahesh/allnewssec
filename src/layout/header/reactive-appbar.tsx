"use client";
import { styled } from "@mui/material/styles";
import { AppBar, AppBarProps, useScrollTrigger } from "@mui/material";
import { ResponsiveStyleValue } from "@mui/system";
import { Property } from "csstype";
import { motion } from "framer-motion";
import { MotionVariantProps } from "@cc/motion-components";

const appbarVariant: MotionVariantProps = {
  hidden: {
    y: "-100%",
  },
  visible: { y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

const ReactiveAppBar = styled((props: AppBarProps) => {
  const trigger = useScrollTrigger({
    threshold: 200,
  });
  return (
    <AppBar
      elevation={0}
      component={motion.header}
      variants={appbarVariant}
      initial={"hidden"}
      animate={trigger ? "hidden" : "visible"}
      {...props}
    />
  );
})(({ theme }) => {
  return theme.unstable_sx({
    background: theme.palette.gradient.header,
    color: "primary.contrastText",
    height: appbarHeight,
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  });
});

export default ReactiveAppBar;

export const appbarHeight: ResponsiveStyleValue<
  Property.Height<string | number>
> = {
  xs: "64px",
  md: "92px",
  xxl: "120px",
};
