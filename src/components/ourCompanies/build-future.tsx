"use client";
import SectionWrapper, { basePy } from "@/commonComponents/section-wrapper";
import { Stack, Typography } from "@mui/material";
import React from "react";
import {
  MotionImage,
  MotionStack,
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import bg from "./images/bg.png";
import CommonBreadcrumb from "@/commonComponents/breadcrumb";

const BuildFuture = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.transparentToDarkRight,
          position: "relative",
        },
      }}
      py={{ /* ...basePy, */ xs: 2, md: 4 }} //Todo: basePy
      pb={{ /* ...basePy, */ xs: 3, md: 9 }}
      ContainerProps={{
        // position: "relative",
        overflow: "hidden",
      }}
    >
      <CommonBreadcrumb />
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
          src={
            "https://s3-alpha-sig.figma.com/img/8ccc/9c64/da47be3b8da21a2f8eac9b5123f58988?Expires=1697414400&Signature=FMhYbqCzhBtTVof494qcZaIS8cMf9Vm~dtQ2E9Vv671MoF9EN4gK0ft9B9mFen8xhAW2lCYzWAX7tFEaI7bLQ~OPa3fFHyzsLZID9uOfbOKD2k1l20-054RCLmrfvoFjO6L93QO2yfvn-8YkYieBicjdBZE3JIwdPFsNC0CK4sC8u6dxgIY-NquJQzzm8T2BpK1ADh2aeD9e-psk1Hc8Svf3NKJ2NuHCw1G40ctF-L4nFzHPdYN5AJTcXkYKRD3whymaw-fx2LTMrwrl8u5ESK~QaY4~tjRumwvE-9pOt1ITNyKUmK0ujPXSX9WB6Fl3IuIFDXtNpjjwXdH3SK4tqg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          }
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
          src={
            "https://s3-alpha-sig.figma.com/img/dea5/8c36/397ef88789eb4ddc80deb1140c017107?Expires=1697414400&Signature=ktUaD-CrPXYDBBbsjiLsNvR5JmmiW8OcdjecDZmiewmoiczH1Otcn7Pcs1tZCemBdWFSODhZc5NSxpSG-eYV3aFFqct~R6nK48mMOFbnIkmSCfrqvy0nVKIdlS77RYBHKSBR3sAZd4FrpWfzCvN7CT1lY2KMGhp1Nj8hSGGcWptXYRpb5xUo5BQCNnIBtuVIL5nJp6EsiGmyzANqQNQqswlRIeOWnXyGEQGL9gpAeSZ~eYRWIorLk9~kYXl6T4TaE9hatsTVX-~3ECiS5s6sPmsMo9Wk2qmphI6Y2pM39adDeWkdC~~n3-McHrc4t89mzZd0HfsFRSP-GoEOI1YbIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          }
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
          src={
            "https://s3-alpha-sig.figma.com/img/d6a9/3a95/fd7ca374d677717dd6409fc9e831ead4?Expires=1697414400&Signature=DpQwpLcy14A7bZXiq4txqFgan~n6aIa8HXugiVtCzOihKFcvk93svcTYOP88X1yrLkF7Xuldyg8QQ6uSOWgkeW~d0ZsB7acbBGW-cEBH6HlHS8E9GDnFT3qct4i9MVrCqjz-YW3uUejEtcDXcds7inUA2JpTyo4fekaAYnLFyfmWBw22xLNIV9b7qpq7V2vC14J2kPl0~XwP2ri8Emx4pXMaGdS6XezUesJPmTUnkGcEwBslxYH6Nyw8PJ1JkhCxQe2bfbmZythqTUjqA~kio81zJA5xsNZIjzU0ge7RaeJulvjCGWeosZbrFAz9tRPH2xYWxvIAuIYgHvIPhpOFPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          }
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
      <MotionStack
        mt={{ xs: 7, md: 12 }}
        maxWidth={863}
        rowGap={3}
        variants={textStagger}
        initial={"initial"}
        animate={"animate"}
      >
        <MotionTypography variant='h1' variants={textStaggerChildren}>
          Building futures, empowering by skilling
        </MotionTypography>

        <MotionTypography variant='body2' variants={textStaggerChildren}>
          At Bajaj Auto, our commitment to society is way beyond our business.
          As a true corporate citizen, our actions in community development have
          been empowering generations. Our CSR initiatives are designed
          leveraging our know-how to positively impact people and the planet.
        </MotionTypography>
      </MotionStack>
    </SectionWrapper>
  );
};

export default BuildFuture;

const textStagger: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.6,
    },
  },
};
const textStaggerChildren: MotionVariantProps = {
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
