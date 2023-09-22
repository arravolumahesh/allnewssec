"use client";
import AnimatedButton from "@/commonComponents/animated-button";
import { Box, Slide, Stack } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BajajLogo from "./images/Graphics.svg";
import { motion } from "framer-motion";
import {
  MotionImageProps,
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";

const Hero = () => {
  const [logoAnimate, setLogoAnimate] = useState(false);
  useEffect(() => {
    setLogoAnimate(true);
  }, []);

  return (
    <SectionWrapper
      py={0}
      SectionProps={{
        sx: {
          background: "radial-gradient(circle,  #326ccf 0%,  #0C1220 97%)",
        },
      }}
    >
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        alignItems={"center"}
        maxWidth={1090}
        // width={{ xs: "87.7%", md: "80%", lg_xl: "76%" }}
        sx={{
          m: "30px auto 67px",
        }}
      >
        <Stack
          component={motion.div}
          variants={staggerDiv}
          initial={"initial"}
          animate={"animate"}
        >
          <MotionTypography
            variant="h1"
            color={"#fff"}
            sx={{ fontWeight: 400, mb: 2 }}
            variants={staggerChildren}
          >
            TURNING POTENTIAL TO PROGRESS
          </MotionTypography>
          <MotionTypography
            variant="body1"
            color={"#fff"}
            variants={staggerChildren}
          >
            The wheels of a self-reliant future are turning with equal
            opportunities for all.
          </MotionTypography>
          <AnimatedButton
            sx={{
              mt: 4,
              width: { xs: "100%", md: "207px" },
              bgcolor: "rgba(255, 255, 255, 0.10)",
              fontSize: { xs: "18px", md: "24px !important" },
            }}
            href={"./"}
            variants={staggerChildren}
          >
            View Initiatives
          </AnimatedButton>
        </Stack>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"center"}
          width={{ xs: 1, md: 354, lg: 528 /* large: 651 */ }}
        >
          <Slide
            direction="right"
            in={logoAnimate}
            timeout={500}
            easing={{ enter: "cubic-bezier(.13,.47,.02,1)" }}
          >
            <Box
              sx={{
                position: "relative",
                mr: { xs: "-90px", lg: "-167px" /* large: "-230px" */ },
                zIndex: 1,
                width: { xs: 111, md: 117, lg: 221 /* large: 320 */ },
                height: { xs: 350, md: 350, lg: 600 /* large: 700 */ },
              }}
            >
              <Image src={BajajLogo} alt="Bajaj Beyond Logo" fill />
            </Box>
          </Slide>
          <Box
            sx={{
              position: "relative",
              width: { xs: 255, md: 255, lg: 475 /* large: 560 */ },
              height: { xs: 277, md: 300, lg: 543 /* large: 635 */ },
              overflow: "hidden",
              // clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 74% 100%, 0% 100%)",
              clipPath:
                "polygon(75% 0%, 100% 50%, 74% 100%, 0% 100%, 25% 50%, 0 0)",
            }}
          >
            {/* <MotionImage
              src={Banner}
              alt='Video Banner'
              {...imageTransition}
              fill
            /> */}
            <motion.video
              src={
                "https://s3-figma-videos-production-sig.figma.com/video/624586955221933605/TEAM/5329/d0dd/-c7d2-4ea0-84ae-05de8da46856?Expires=1696204800&Signature=XCb1S83ao0yMbXPQ9kolPQGGNyNWfgw5lwWg-VZCTS4Q0Mb~LTwtRTtjmoiqmduqQRCYaLxab7uplfiXirj27B~Vf9V2Cfb25W8PUOVbkfctz3XgrDrb6ICa8KVExLUtMN0-phAtm46CVmcrGLIyfIFVGBungLgVQPzyUDRPc4JWF9P0WWQhoyRPWPRrssdCmgnkdGuFAxTeexQ~10xgkZ14vMOhZB0eb2rcBrTwd1wxfrRwBI-13QIodGTUguTWD3yXEo9ujgC~gzqylVpDtc0wJKwIGsU4ALi8r7~K2YJbUfvycsLdfl6bKyPEwWX6dOKKJVJ~9vf8C6u6tHyBWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              }
              autoPlay
              muted
              loop
              initial={imageTransition.initial}
              animate={imageTransition.animate}
              style={{
                transform: "translateX(-100%)",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                clipPath:
                  "polygon(75% 0%, 100% 50%, 74% 100%, 0% 100%, 25% 50%, 0 0)",
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </SectionWrapper>
  );
};

export default Hero;

const imageTransition: Omit<MotionImageProps, "src" | "alt"> = {
  style: {
    transform: "translateX(-100%)",
  },
  initial: {
    x: "-100%",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.4, //0.2 for image
    },
  },
};

const staggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 1,
    },
  },
};
const staggerChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "30%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
