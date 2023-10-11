"use client";
import SectionWrapper from "@cc/section-wrapper";
import { Stack } from "@mui/material";
import React from "react";
import { MotionTypography, MotionVariantProps } from "@cc/motion-components";
import CommonBreadcrumb from "@cc/breadcrumb";

const HeroBanner = () => {
  return (
    <>
      <SectionWrapper
        SectionProps={{
          sx: {
            background: (theme) =>
              `${theme.palette.gradient.transparentToDarkRight}, url(https://s3-alpha-sig.figma.com/img/40cf/8d6d/1bb8a609339e3a0c11f8e2b31e9c2c1d?Expires=1697414400&Signature=UVRc6l294ajx2rskrC1NmFQ7LTxI0hnWDXvYT3e9iNx~-elElGW7CfNyDNXdhEQHK6SZrVnj-pRxI5DvoOGRFBIoXt4Pr4CJRCm55p3pHEeQZblLMCrCN0SOB35xS2QJMykrUcGkIvC4S7nFtNnXM~SlTDjWMA8c8kqyXgtvUkPK0Kgd3b7d51nY94w02VurC0Lpm7QkgS43xKWnVPoMbo3GL5Te4sQqTwZoEUZZGsWjBtwAX01jL2pLgMGoucpBaglksgNQWAyiU~KTyyddVoKkF4vpMQOKcSQqbS2koQXuzbE7ONPA3TPeoqIyRy5ZIMZO5n5fAqQA~E-OjaticA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4) no-repeat`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          },
        }}
        py={{ xs: 2, md: 4 }} // Todo: basePy
        pb={{ xs: 4, md: 8 }}
      >
        <CommonBreadcrumb />
        <Stack mt={23} maxWidth={863} rowGap={3}>
          <MotionTypography variant="h1">
            A Better Tomorrow for ‘Her’
          </MotionTypography>
        </Stack>
      </SectionWrapper>
    </>
  );
};

export default HeroBanner;

const staggerChildren: MotionVariantProps = {
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
