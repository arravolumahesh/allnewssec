"use client";
import { styled } from "@mui/material/styles";
import { AppBar, AppBarProps, Slide, useScrollTrigger } from "@mui/material";
import { ResponsiveStyleValue } from "@mui/system";
import { Property } from "csstype";

const ReactiveAppBar = styled((props: AppBarProps) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      <AppBar elevation={0} {...props} />
    </Slide>
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
