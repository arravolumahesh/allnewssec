import { Stack, SxProps } from "@mui/material";
import React from "react";
import {
  MotionBox,
  MotionBoxProps,
  MotionTypography,
  MotionTypographyProps,
} from "../motion-components";
import AnimatedButton from "../animated-button";
import { motion, MotionProps } from "framer-motion";
import ArrowGradient from "../arrow-gradient";

type SlideAnimationWrapper = {
  prefix?: string;
  title: string;
  subtitle: string;
  btnText?: string;
  textColor?: string;
  titleTypographyprops?: MotionTypographyProps;
  btnProps?: SxProps;
  children: any;
};

const SlideAnimationWrapper = (props: SlideAnimationWrapper) => {
  const {
    prefix,
    title,
    subtitle,
    btnText = "Learn More",
    textColor,
    titleTypographyprops,
    btnProps,
    children,
  } = props;
  return (
    <>
      <Stack
        direction='row'
        alignItems={"center"}
        //   justifyContent={"center"}
        width={{ xs: 1, md: "auto" }}
      >
        <MotionBox
          sx={{
            position: "relative",
            width: { xs: "91%", md: 320, lg: 441, xl: 644 /* large: 644 */ },
            height: { xs: "auto", md: 254, lg: 315, xl: 443 /* large: 443 */ },
            aspectRatio: 1.25,
            clipPath: "polygon(0% 0%, 84% 0%, 100% 50%, 84% 100%, 0% 100%)",
          }}
          {...boxTransition}
        >
          {children}
        </MotionBox>
        <ArrowGradient
          sx={{
            ml: { xs: "-11%", md: "-45px", lg: "-65px", xl: "-113px" },
            width: { xs: "20%", md: 83, lg: 120, xl: 171 /* large: 171 */ },
            height: { xs: "auto", md: 254, lg: 315, xl: 443 /* large: 443 */ },
            aspectRatio: 0.32,
          }}
          {...imageTransition}
        />
      </Stack>
      <Stack
        component={motion.div}
        variants={staggerDiv}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
        maxWidth={{ xs: 1, md: 350, lg: 448 }}
        rowGap={{ xs: 2, md: 3 }}
      >
        {prefix && (
          <MotionTypography
            variant='body1'
            color={textColor}
            variants={staggerChildren}
          >
            {prefix}
          </MotionTypography>
        )}
        <MotionTypography
          variant='h3'
          fontWeight={400}
          color={textColor}
          variants={staggerChildren}
          {...titleTypographyprops}
        >
          {title}
        </MotionTypography>
        <MotionTypography
          variant='body1'
          color={textColor}
          variants={staggerChildren}
        >
          {subtitle}
        </MotionTypography>
        <AnimatedButton
          variant='outlined'
          href={"/"}
          color='primary'
          sx={{
            width: { xs: "100%", md: "171px" },
            fontSize: { xs: "18px", md: "24px !important" },
            ...btnProps,
          }}
          variants={staggerChildren}
        >
          {btnText}
        </AnimatedButton>
      </Stack>
    </>
  );
};

export default SlideAnimationWrapper;

const boxTransition: MotionBoxProps = {
  initial: {
    x: "-107%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.8,
    delay: 0.2,
    ease: "easeOut",
  },
  viewport: {
    once: true,
  },
  // onTransitionEnd: () => setTextTransition(true),
};
const imageTransition: MotionBoxProps = {
  initial: {
    x: "-440%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.5,
    ease: "easeOut",
  },
  viewport: {
    once: true,
  },
  // onTransitionEnd: () => setTextTransition(true),
};

const staggerDiv: MotionProps["variants"] = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.6,
    },
  },
};
const staggerChildren: MotionProps["variants"] = {
  initial: {
    opacity: 0,
    x: "30%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};
