"use client";
import { buttonClasses, SxProps, Theme } from "@mui/material";
import { useMemo, useState } from "react";
import { MotionButton, MotionButtonProps } from "./motion-components";

export interface AnimatedButtonProps extends MotionButtonProps {}

const AnimatedButton = (props: AnimatedButtonProps) => {
  const { sx, color, ...restProps } = props;
  const [isInView, setIsInView] = useState(false);

  const animatedButtonOnViewportEnterSx: SxProps<Theme> = useMemo(() => {
    return (theme) => {
      const { palette } = theme;
      const borderColor = palette["primary"].main;
      return {
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          borderColor,
          borderTop: `1px solid`,
          borderRight: `1px solid`,
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
          borderColor,
          borderBottom: `1px solid`,
          borderLeft: `1px solid`,
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
      color={color || "inherit"}
      onViewportEnter={() => setIsInView(true)}
      viewport={{
        once: true,
      }}
      {...restProps}
    />
  );
};

export default AnimatedButton;

const animatedButtonInitialSx: SxProps<Theme> = () => {
  return {
    overflow: "hidden",
    position: "relative",
    [`&.${buttonClasses.outlined}`]: {
      border: "none",
      "&:hover": {
        border: "none",
      },
    },
  };
};
