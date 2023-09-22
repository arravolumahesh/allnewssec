"use client";
import { SxProps, Theme } from "@mui/material";
import { useMemo, useState } from "react";
import { MotionButton, MotionButtonProps } from "./motion-components";

interface AnimatedButtonProps extends MotionButtonProps {}

const AnimatedButton = (props: AnimatedButtonProps) => {
  const { sx, ...restProps } = props;
  const [isInView, setIsInView] = useState(false);

  const animatedButtonOnViewportEnterSx: SxProps<Theme> = useMemo(() => {
    return (theme) => {
      return {
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          borderTop: `1px solid ${theme.palette.common.white}`,
          borderRight: `1px solid ${theme.palette.common.white}`,
          width: "100%",
          height: "0",
          borderRadius: "inherit",
          transform: "translateX(-100%)",
          ...(isInView && {
            transition: "transform 0.4s linear 0.6s, height 0.2s linear 1s",
            height: "100%",
            transform: "translateX(0)",
          }),
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          right: 0,
          borderBottom: `1px solid ${theme.palette.common.white}`,
          borderLeft: `1px solid ${theme.palette.common.white}`,
          width: "100%",
          height: "0",
          borderRadius: "inherit",
          transform: "translateX(100%)",
          ...(isInView && {
            transition: "transform 0.4s linear, height 0.2s linear 0.4s",
            height: "100%",
            transform: "translateX(0)",
          }),
        },
      };
    };
  }, [isInView]);
  return (
    <MotionButton
      sx={[
        animatedButtonInitialSx,
        animatedButtonOnViewportEnterSx,
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      variant={"outlined"}
      color={"inherit"}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      {...restProps}
    />
  );
};

export default AnimatedButton;

const animatedButtonInitialSx: SxProps<Theme> = () => {
  return {
    position: "relative",
    border: "none",
  };
};
