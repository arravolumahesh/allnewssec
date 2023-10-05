import { MotionVariantProps } from "./motion-components";

export const bottomToToptextStagger = (delay: number): MotionVariantProps => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: delay,
    },
  },
});
export const bottomToToptextStaggerChildren: MotionVariantProps = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const bottomTextStagger = (delay: number): MotionVariantProps => ({
  initial: {},
  animate: {
    transition: {
      delayChildren: delay,
      staggerChildren: 0.4,
      duration: 0.4,
    },
  },
});
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
