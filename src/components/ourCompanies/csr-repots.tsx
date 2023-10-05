"use client";

import AnimatedButton from "@/commonComponents/animated-button";
import SectionWrapper from "@/commonComponents/section-wrapper";

import { alpha, MenuItem, Select, Stack } from "@mui/material";
import React, { useState } from "react";
import csrReport from "./images/Group 1.png";

import {
  MotionStack,
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Button } from "@/styles/theme/components/typography.fontvariant";
import ArrowImage from "@/commonComponents/arrow-image";
import {
  arrowImageTransition,
  formStagger,
  formStaggerChildrenRight,
  formStaggerChildrenUp,
} from "@/commonComponents/animations";

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
          ContainerProps={{ ...arrowImageTransition }}
        />
        <MotionStack
          direction={"column"}
          width={1}
          maxWidth={668}
          variants={formStagger}
          initial='initial'
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <MotionTypography variant='h3' variants={formStaggerChildrenRight}>
            Csr Reports
          </MotionTypography>
          <MotionStack
            variants={formStaggerChildrenUp}
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
          </MotionStack>
          <AnimatedButton
            href={"#"}
            rotation='anticlockwise'
            variant={"text"}
            color={"secondary"}
            sx={{
              width: { xs: 1, md: 172 },
              fontSize: Button,
            }}
            animationDelay={2000}
            variants={formStaggerChildrenRight}
          >
            Download Report
          </AnimatedButton>
        </MotionStack>
      </Stack>
    </SectionWrapper>
  );
};

export default CsrReport;
