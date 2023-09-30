import { MotionVariantProps } from "./motion-components";

export const bottomTextStagger: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 2.4,
      staggerChildren: 0.4,
      duration: 0.4,
    },
  },
};
export const textStaggerChildren: MotionVariantProps = {
  initial: {
    y: 120,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const iconStagger: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
export const iconStaggerChildren: MotionVariantProps = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      type: "spring",
    },
  },
};
