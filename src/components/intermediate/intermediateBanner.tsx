"use client";
import { Box, Stack } from "@mui/material";
import banner from "./images/b.svg";
import banner1 from "./images/b1.svg";
import banner2 from "./images/b2.svg";
import React, { useRef, useState } from "react";
import {
  MotionBox,
  MotionBoxProps,
  MotionTypography,
  MotionTypographyProps,
} from "@/commonComponents/motion-elements";
import SectionWrapper from "@/commonComponents/section-wrapper";
import Image from "next/image";
import CommonBreadcrumb from "@/commonComponents/breadcrumb";

const IntermediateBanner = () => {
  const [textTransition, setTextTransition] = useState(false);
  const mainRef = useRef(null);

  const headerTransition: MotionTypographyProps = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      duration: 1,
    },
    viewport: {
      once: true,
    },
  };

 
  const bannerBoxTransition: MotionBoxProps = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    transition: {
      duration: 1,
    },
    // onTransitionEnd: () => setTextTransition(true),
  };

  return (
    <Stack
      sx={{
        background: "#fff",
        position: "relative",
        overflow: "hidden",
        '& img':{
          width:'100%',
          height:'100%'
        }
      }}
      component={"section"}
      ref={mainRef}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          [theme.breakpoints.down("lg")]: {
            minWidth: "1000px",
            position: "relative",
            left: "calc(-500px + 50%)",
          },
        })}
      >
        <MotionBox
          sx={{
            clipPath:
              "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 48%, 0% 0%)",
            background: "#333",
            height: "464px",
            flex: 1,
            marginRight: "-9%",
            overflow: "hidden",
          }}
          {...bannerBoxTransition}
          transition={{
            delay: 0.3,
            duration: 1,
          }}
        >
          <Image src={banner1} alt="banner1" />
        </MotionBox>

        <MotionBox
          sx={{
            clipPath:
              "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
            background: "#ccc",
            height: "464px",
            flex: 1,
            marginRight: "-9%",
            overflow: "hidden",
          }}
          {...bannerBoxTransition}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
        >
          <Image src={banner2} alt="banner2" />
        </MotionBox>

        <MotionBox
          sx={{
            clipPath:
              "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)",
            background: "#333",
            height: "464px",
            flex: 1,
            overflow: "hidden",
          }}
          {...bannerBoxTransition}
          transition={{
            delay: 0,
            duration: 1,
          }}
        >
          <Image src={banner} alt="banner3" />
        </MotionBox>
      </Box>

      <SectionWrapper
        SectionProps={{
          sx: {
            background:
              "linear-gradient(90deg, #000 -3.68%, rgba(0, 0, 0, 0.59) 50.52%, rgba(0, 0, 0, 0.30) 100%)",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          },
        }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CommonBreadcrumb data={[{
          'title':'All Initiatives',
          'path':'/',
        }]} />
        <MotionTypography
          variant="h3"
          color="white"
          mb={2}
          sx={{textTransform:'uppercase'}}
          {...headerTransition}
        >
          Empowering Lives
        </MotionTypography>
      </SectionWrapper>
    </Stack>
  );
};

export default IntermediateBanner;
