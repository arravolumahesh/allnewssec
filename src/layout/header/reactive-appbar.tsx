"use client";
import { styled } from "@mui/material/styles";
import { AppBar, AppBarProps, Slide, useScrollTrigger } from "@mui/material";

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
    height: { xs: 64, md: 92, xl: 120 },
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  });
});

export default ReactiveAppBar;
