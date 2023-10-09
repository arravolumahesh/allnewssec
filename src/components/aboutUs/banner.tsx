"use client";
import {
  bottomToToptextStagger,
  bottomToToptextStaggerChildren,
} from "@/commonComponents/animations";
import ArrowBgBanner from "@/commonComponents/arrow-bg-banner";
import CommonBreadcrumb from "@/commonComponents/breadcrumb";
import {
  MotionStack,
  MotionTypography,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import React from "react";

const AboutUsBanner = () => {
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
      <ArrowBgBanner
        img1={
          "https://s3-alpha-sig.figma.com/img/8ccc/9c64/da47be3b8da21a2f8eac9b5123f58988?Expires=1697414400&Signature=FMhYbqCzhBtTVof494qcZaIS8cMf9Vm~dtQ2E9Vv671MoF9EN4gK0ft9B9mFen8xhAW2lCYzWAX7tFEaI7bLQ~OPa3fFHyzsLZID9uOfbOKD2k1l20-054RCLmrfvoFjO6L93QO2yfvn-8YkYieBicjdBZE3JIwdPFsNC0CK4sC8u6dxgIY-NquJQzzm8T2BpK1ADh2aeD9e-psk1Hc8Svf3NKJ2NuHCw1G40ctF-L4nFzHPdYN5AJTcXkYKRD3whymaw-fx2LTMrwrl8u5ESK~QaY4~tjRumwvE-9pOt1ITNyKUmK0ujPXSX9WB6Fl3IuIFDXtNpjjwXdH3SK4tqg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
        img2={
          "https://s3-alpha-sig.figma.com/img/dea5/8c36/397ef88789eb4ddc80deb1140c017107?Expires=1697414400&Signature=ktUaD-CrPXYDBBbsjiLsNvR5JmmiW8OcdjecDZmiewmoiczH1Otcn7Pcs1tZCemBdWFSODhZc5NSxpSG-eYV3aFFqct~R6nK48mMOFbnIkmSCfrqvy0nVKIdlS77RYBHKSBR3sAZd4FrpWfzCvN7CT1lY2KMGhp1Nj8hSGGcWptXYRpb5xUo5BQCNnIBtuVIL5nJp6EsiGmyzANqQNQqswlRIeOWnXyGEQGL9gpAeSZ~eYRWIorLk9~kYXl6T4TaE9hatsTVX-~3ECiS5s6sPmsMo9Wk2qmphI6Y2pM39adDeWkdC~~n3-McHrc4t89mzZd0HfsFRSP-GoEOI1YbIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
        img3={
          "https://s3-alpha-sig.figma.com/img/d6a9/3a95/fd7ca374d677717dd6409fc9e831ead4?Expires=1697414400&Signature=DpQwpLcy14A7bZXiq4txqFgan~n6aIa8HXugiVtCzOihKFcvk93svcTYOP88X1yrLkF7Xuldyg8QQ6uSOWgkeW~d0ZsB7acbBGW-cEBH6HlHS8E9GDnFT3qct4i9MVrCqjz-YW3uUejEtcDXcds7inUA2JpTyo4fekaAYnLFyfmWBw22xLNIV9b7qpq7V2vC14J2kPl0~XwP2ri8Emx4pXMaGdS6XezUesJPmTUnkGcEwBslxYH6Nyw8PJ1JkhCxQe2bfbmZythqTUjqA~kio81zJA5xsNZIjzU0ge7RaeJulvjCGWeosZbrFAz9tRPH2xYWxvIAuIYgHvIPhpOFPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
      />
      <MotionStack
        mt={{ xs: 7, md: 12 }}
        maxWidth={1028}
        rowGap={3}
        variants={bottomToToptextStagger(0.6)}
        initial={"initial"}
        animate={"animate"}
      >
        <MotionTypography
          variant='h1'
          variants={bottomToToptextStaggerChildren}
        >
          Strengthening the nation, beyond just business
        </MotionTypography>
      </MotionStack>
    </SectionWrapper>
  );
};

export default AboutUsBanner;
