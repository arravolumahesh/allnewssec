"use client";

import AnimatedButton from "@/commonComponents/animated-button";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { motion } from "framer-motion";

import { MenuItem, Select, Stack, alpha } from "@mui/material";

import Image from "next/image";
import React, { useState } from "react";
import csrReport from "./images/Group 1.png";

import {
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Button } from "@/styles/theme/components/typography.fontvariant";
import ArrowImage from "@/commonComponents/arrow-image";

const CsrReport = () => {
  const [report, setReport] = useState("");
  const [year, setYear] = useState("");
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
        justifyContent={"space-evenly"}
        rowGap={3}
        columnGap={5}
      >
        <ArrowImage
          src={csrReport}
          alt=''
          width={217}
          height={262}
          sx={{ minWidth: 217 }}
        />
        <Stack
          direction={"column"}
          width={1}
          maxWidth={668}
          // component={motion.div}
          // variants={staggerDiv}
          // initial={"initial"}
          // whileInView={"animate"}
          // viewport={{ once: true }}
        >
          <MotionTypography
            variant='h3'
            // initial={"initial"}
            // whileInView={"animate"}
            // viewport={{ once: true }}
            // variants={staggerheading}
          >
            Csr Reports
          </MotionTypography>
          <MotionTypography
            variant='body1'
            mt={{ xs: 2, md: 1 }}
            // variants={staggerChildren}
            // initial={"initial"}
            // whileInView={"animate"}
            // viewport={{ once: true }}
          >
            We are always looking forward to support you
          </MotionTypography>
          <Stack
            mt={5}
            mb={4}
            direction={{ xs: "column", md: "row" }}
            gap={{ xs: 2, md: 5 }}
          >
            <Select
              fullWidth
              sx={(theme) => ({
                color: alpha(theme.palette.secondary.main, !!report ? 1 : 0.4),
              })}
              value={report}
              onChange={(e) => setReport(e.target.value)}
              displayEmpty
              renderValue={(value) => {
                return value === "" ? "Select A Report" : value;
              }}
              variant='outlined'
              color='secondary'
              IconComponent={KeyboardArrowDown}
            >
              {["Report 1", "Report 2"].map((item, idx) => (
                <MenuItem key={idx} value={item} sx={{ py: 2 }}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <Select
              fullWidth
              sx={(theme) => ({
                color: alpha(theme.palette.secondary.main, !!year ? 1 : 0.4),
              })}
              value={year}
              onChange={(e) => setYear(e.target.value)}
              displayEmpty
              renderValue={(value) => {
                return value === "" ? "Select A Year" : value;
              }}
              variant='outlined'
              color='secondary'
              IconComponent={KeyboardArrowDown}
            >
              {["Year 1", "Year 2"].map((item, idx) => (
                <MenuItem key={idx} value={item} sx={{ py: 2 }}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Stack>
          <AnimatedButton
            href={"#"}
            rotation='anticlockwise'
            variant={"text"}
            color={"secondary"}
            sx={{
              width: { xs: 1, md: 172 },
              fontSize: Button,
            }}
            // variants={staggerBtn}
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
