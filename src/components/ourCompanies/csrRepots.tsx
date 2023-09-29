"use client";

import AnimatedButton from "@/commonComponents/animated-button";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { motion } from "framer-motion";

import { Stack, TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

import Image from "next/image";
import React, { useState, useEffect, ChangeEvent } from "react";
import csrReport from "./images/csrReports.png";

import {
  MotionImage,
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";

const CsrReport = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.lightToDark,
        },
      }}
    >
      <Stack
        sx={{
          padding: "40px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "185px",
        }}
      >
        <Stack
          sx={{
            position: "relative",
            display: {
              xs: "none",
              sm_md: "inline-flex",
            },
          }}
          component={motion.div}
          variants={StagerImage}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <Image
            width={120}
            height={250}
            src={csrReport}
            alt='Reports'
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              clipPath:
                "polygon(75% 0, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
            }}
          />
        </Stack>
        <Stack
          direction={"column"}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            width: {
              sx: "50%",
            },
          }}
          component={motion.div}
          variants={staggerDiv}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <MotionTypography
            variant='h3'
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
            variants={staggerheading}
          >
            Csr Reports
          </MotionTypography>
          <MotionTypography
            variant='body1'
            mt={{ xs: 2, md: 1 }}
            variants={staggerChildren}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            We are always looking forward to support you
          </MotionTypography>
          <TextField variant='outlined' placeholder='hshsh' />
          <Stack
            mt={5}
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                lg: "row",
              },
              alignItems: { lg: "center" },
              gap: "20px",
            }}
          >
            <Stack
              style={{
                display: "flex",
                minWidth: "313px",
                maxWidth: "342px",
                height: "50px",
                padding: "16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "6px",
                border: "1px solid var(--White, #FFF)",
              }}
              component={motion.div}
              variants={staggerReports}
            >
              <select
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  fontFamily: "Helvetica",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400px",
                  lineHeight: "200%",
                  letterSpacing: "0.16px",
                  border: "none",

                  backgroundColor:
                    "var(--gradient-light-dark, linear-gradient(0deg, #0F182A 35.16%, #244A8F 100%))",
                  opacity: 1,
                }}
              >
                <option
                  style={{
                    fontFamily: "Helvetica",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400px",
                    lineHeight: "150%",
                    letterSpacing: "0.16px",
                  }}
                  value=''
                >
                  Select A Year
                </option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
              </select>
            </Stack>

            <Stack
              style={{
                display: "flex",
                minWidth: "313px",
                maxWidth: "342px",
                height: "50px",
                padding: "16px",

                flexDirection: "column",
                alignItems: "flex-start",
                gap: "6px",
                border: "1px solid var(--White, #FFF)",
              }}
              component={motion.div}
              variants={staggerReports}
            >
              <select
                style={{
                  display: "flex",

                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  fontFamily: "Helvetica",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400px",
                  lineHeight: "200%",
                  letterSpacing: "0.16px",
                  border: "none",
                  backgroundColor:
                    "var(--gradient-light-dark, linear-gradient(0deg, #0F182A 35.16%, #244A8F 100%))",
                  opacity: 1,
                }}
              >
                <option
                  style={{
                    fontFamily: "Helvetica",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400px",
                    lineHeight: "150%",
                    letterSpacing: "0.16px",
                  }}
                  value=''
                >
                  Select A Report
                </option>
                <option value='Bajaj finance'>Bajaj finance</option>
                <option value='IT Company'>IT Company</option>
                <option value='AutoWala'>AutoWala</option>
                <option value='Students'>Students</option>
              </select>
            </Stack>
          </Stack>
          <AnimatedButton
            sx={{
              color: "#FFF",
              mt: 4,
              width: "40%",
              border: "1px solid #FFF !important",
              bgcolor: "transparent",
              fontSize: "18px",
            }}
            href={"./"}
            variants={staggerBtn}
          >
            Download Report
          </AnimatedButton>
        </Stack>
      </Stack>
    </SectionWrapper>
  );
};

export default CsrReport;

const staggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.5,
    },
  },
};

const staggerBtn: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "30%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const staggerheading: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const staggerChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "150%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const StagerImage: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const staggerReports: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
