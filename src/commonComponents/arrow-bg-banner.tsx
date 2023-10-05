import React from "react";
import {
  MotionImage,
  MotionStack,
  MotionVariantProps,
} from "./motion-components";
import { StaticImageData } from "next/image";

interface ArrowBannerProps {
  img1: StaticImageData | string;
  img2: StaticImageData | string;
  img3: StaticImageData | string;
}

const ArrowBgBanner = (props: ArrowBannerProps) => {
  const { img1, img2, img3 } = props;
  return (
    <MotionStack
      direction={"row"}
      width={1}
      justifyContent={"center"}
      height={"100%"}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      variants={staggerBanner}
      initial={"initial"}
      animate={"animate"}
    >
      <MotionImage
        src={img1}
        alt=''
        width={618}
        height={458}
        sx={{
          width: { xs: 400, md: 650 },
          minWidth: { xxl_wide: 900 },
          height: "100%",
          clipPath:
            "polygon(80% 0%, 100% 50%, 80% 100%, 0% 100%, 20% 50%, 0 0)",
          objectFit: "cover",
          mr: { xs: "-30px", md: "-50px", xxl_wide: "-60px" },
        }}
        variants={staggerBannerChildren}
      />
      <MotionImage
        src={img2}
        alt=''
        width={618}
        height={458}
        sx={{
          width: { xs: 400, md: 650 },
          minWidth: { xxl_wide: 900 },
          height: "100%",
          clipPath:
            "polygon(80% 0%, 100% 50%, 80% 100%, 0% 100%, 20% 50%, 0 0)",
          objectFit: "cover",
          ml: { xs: "-40px", md: "-70px", xxl_wide: "-90px" },
        }}
        variants={staggerBannerChildren}
      />
      <MotionImage
        src={img3}
        alt=''
        width={618}
        height={458}
        sx={{
          width: { xs: 400, md: 650 },
          minWidth: { xxl_wide: 900 },
          height: "100%",
          clipPath:
            "polygon(80% 0%, 100% 50%, 80% 100%, 0% 100%, 20% 50%, 0 0)",
          objectFit: "cover",
          ml: { xs: "-70px", md: "-120px", xxl_wide: "-150px" },
        }}
        variants={staggerBannerChildren}
      />
    </MotionStack>
  );
};

export default ArrowBgBanner;

const staggerBanner: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};
const staggerBannerChildren: MotionVariantProps = {
  initial: {
    x: "-150%",
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};
