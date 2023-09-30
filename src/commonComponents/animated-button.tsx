"use client";
import { buttonClasses, SxProps, Theme } from "@mui/material";
import { useMemo, useState } from "react";
import { MotionLink, MotionLinkProps } from "./motion-components";

export interface AnimatedButtonProps extends MotionLinkProps {
  /*
   * Animation delay in milliseconds
   *
   * Default: 0
   *
   * Example: 1000 is 1 second
   * */
  animationDelay?: number;
  rotation?: "clockwise" | "anticlockwise";
}

const AnimatedButton = (props: AnimatedButtonProps) => {
  const {
    sx,
    animationDelay = 0,
    rotation = "clockwise",
    ...restProps
  } = props;
  const { color, variant } = restProps;
  const [isInView, setIsInView] = useState(false);

  const { before, after } = useMemo(() => {
    const isClockwise = rotation === "clockwise";
    return {
      before: {
        initial: {
          height: "0",
          width: "0",
          transition: "none",
          borderStyle: isClockwise
            ? "solid solid none none"
            : "none none solid solid",
        },
        animate: {
          height: "100%",
          width: "100%",
          transition: isClockwise
            ? "width 0.4s linear 0.6s, height 0.2s linear 1s"
            : "height 0.2s linear, width 0.4s linear 0.2s",
        },
      },
      after: {
        initial: {
          height: "0",
          width: "0",
          transition: "none",
          borderStyle: isClockwise
            ? "none none solid solid"
            : "solid solid none none",
        },
        animate: {
          height: "100%",
          width: "100%",
          transition: isClockwise
            ? "width 0.4s linear, height 0.2s linear 0.4s"
            : "height 0.2s linear 0.6s, width 0.4s linear 0.8s",
        },
      },
    };
  }, [rotation]);

  const animatedButtonOnViewportEnterSx: SxProps<Theme> = useMemo(() => {
    return (theme) => {
      const { palette } = theme;
      const borderColor = !color
        ? palette.primary.main
        : color === "inherit"
        ? "inherit"
        : palette[color].main;
      const opacity =
        variant === "contained" ? (color === "secondary" ? 0.3 : 0.8) : 1;

      return {
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          border: `1px solid`,
          borderColor,
          borderRadius: "inherit",
          opacity,
          ...before.initial,
          ...(isInView && before.animate),
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          right: 0,
          border: `1px solid`,
          borderColor,
          borderRadius: "inherit",
          opacity,
          ...after.initial,
          ...(isInView && after.animate),
        },
      };
    };
  }, [after, before, color, isInView, variant]);

  return (
    <MotionLink
      sx={[
        animatedButtonInitialSx,
        animatedButtonOnViewportEnterSx,
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      variant={"outlined"}
      onViewportEnter={() => {
        setTimeout(() => {
          setIsInView(true);
        }, animationDelay);
      }}
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
    width: { xs: "100%", md: "fit-content" },
    [`&.${buttonClasses.outlined}, &.${buttonClasses.contained},  &.${buttonClasses.text}`]:
      {
        border: "none",
        "&:hover": {
          border: "none",
        },
      },
  };
};
