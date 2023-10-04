"use client";
import { Box, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import {
  MotionBox,
  MotionBoxProps,
  MotionTypography,
  MotionTypographyProps,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import Image from "next/image";
import CommonBreadcrumb from "@/commonComponents/breadcrumb";
import cbanner from './image/cbanner.png'

const CompanyIntermediateBanner = () => {
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
        position: "relative",
        overflow: "hidden",
        "& img": {
          width: "100%",
          height: "100%",
          objectFit:'cover',
        },
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
            height: {md:"464px",xs:'265px'},
            flex: 1,
            overflow: "hidden",
          }}
          {...bannerBoxTransition}
          transition={{
            delay: 0,
            duration: 1,
          }}
        >
          <Image src={cbanner} alt="banner3" />
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
          pb:{xxl:9,xs:1},
          pt:{xxl:4,xs:2},          
        }}
        color={'white'}
      >
        <CommonBreadcrumb />
        <MotionTypography
          variant="h3"
          color="white"
          mb={2}
          sx={{textTransform:'uppercase',maxWidth:550}}
          {...headerTransition}
        >
          Building futures, one skill at a time.
        </MotionTypography>
      </SectionWrapper>
    </Stack>
  );
};

export default CompanyIntermediateBanner;
