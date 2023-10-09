"use client";
import AnimatedButton from "@/commonComponents/animated-button";
import {
  arrowImageTransition,
  formStagger,
  formStaggerChildrenRight,
} from "@/commonComponents/animations";
import {
  MotionStack,
  MotionTypography,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Stack } from "@mui/material";
import React from "react";
import ArrowImage from "@/commonComponents/arrow-image";
import { Button } from "@/styles/theme/components/typography.fontvariant";

const OurInitiatives = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.lightToDark,
        },
        id: "csr-reports",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        rowGap={3}
        columnGap={{ md: 10, lg: 18 }}
      >
        <ArrowImage
          src={
            "https://s3-alpha-sig.figma.com/img/fcec/af5c/04a2398ba06c720947e1c302895f391a?Expires=1698019200&Signature=PpFAcSB7X8KTrbYUL~c~jNnt9I6kiXZPniwDUW-PvHxAgG-CPxFGqi-aDWAkuwhLjtRlq3h5l9A1N-MCbxooK1C7Lh1Pvk6v9BIZif2WZro8UwZqe5BHOEoojxb81o7a8VN8qGUjoEFwJ5elrNHTrdC92WLiOov2wkf-ZI7Hmjm8Ky2UG9e3la35gKTgTCOovu7PaNXs2LFr60CU~b6i50Qg64nCFbs603Sc43Qg6hfW8nl~XI9z1WS04Y1CkEUu~wBInfoUzilv4Knk1pvzPfe4BB0OnCcAndVirpKdW-Z4LzZ~p7wh6iNvnJ0bxyBZtj3kVuKfmf17CRCaU4r4AA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          }
          alt=''
          width={230}
          height={267}
          sx={{ minWidth: 230 }}
          ContainerProps={{ ...arrowImageTransition }}
        />
        <MotionStack
          direction={"column"}
          width={1}
          maxWidth={532}
          variants={formStagger}
          initial='initial'
          whileInView={"animate"}
          viewport={{ once: true }}
          rowGap={2}
        >
          <MotionTypography variant='h3' variants={formStaggerChildrenRight}>
            our Initiatives
          </MotionTypography>
          <MotionTypography
            variant='body1'
            variants={formStaggerChildrenRight}
            mb={3}
          >
            Discover how we’re driving positive change in communities through a
            range of impactful projects from skill development to healthcare.
          </MotionTypography>
          <AnimatedButton
            href={"#"}
            rotation='anticlockwise'
            variant={"contained"}
            color={"secondary"}
            animationDelay={2000}
            variants={formStaggerChildrenRight}
          >
            View All Initiatives
          </AnimatedButton>
        </MotionStack>
      </Stack>
    </SectionWrapper>
  );
};

export default OurInitiatives;
