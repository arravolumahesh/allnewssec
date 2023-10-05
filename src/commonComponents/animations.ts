import { MotionBoxProps, MotionVariantProps } from "./motion-components";

export const bottomToToptextStagger = (delay: number): MotionVariantProps => ({
  initial: {},
  animate: {
    transition: {
      delayChildren: delay,
      staggerChildren: 0.4,
    },
  },
});

export const bottomToToptextStaggerChildren: MotionVariantProps = {
  initial: {
    y: "50%",
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      // delay: delay,
      duration: 0.5,
    },
  },
};
export const bottomToToptextTransition = (
  delay: number
): MotionVariantProps => ({
  initial: {
    y: "50%",
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      // delay: delay,
      duration: 0.5,
    },
  },
});

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

export const staggerDivArrow = (delay: number): MotionVariantProps => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: delay,
    },
  },
});

export const staggerStackChildren: MotionVariantProps = {
  initial: { opacity: 0.9 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.7,
    },
  },
};

export const staggerTextChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};
export const staggerTextChildrenLowOpacity: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 0.68,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export const staggerArrowChildren: MotionVariantProps = {
  initial: {
    clipPath: "inset(0% 0% 100% 0%)",
  },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.2,
    },
  },
};

export const arrowLeftToRightTransition: MotionBoxProps = {
  initial: {
    x: "-121%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  viewport: {
    once: true,
  },
};

export const arrowInfoStaggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.5,
    },
  },
};
export const arrowInfoStaggerDivChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "150%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const arrowImageTransition: MotionBoxProps = {
  initial: {
    x: "-102%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  viewport: {
    once: true,
  },
};

export const formStagger: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.6,
      delayChildren: 0.5,
    },
  },
};
export const formStaggerChildrenRight: MotionVariantProps = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};
export const formStaggerChildrenUp: MotionVariantProps = {
  initial: {
    y: 100,
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
