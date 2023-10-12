"use client";
import {
  MotionBox,
  MotionBoxProps,
  MotionImage,
  MotionStack,
  MotionVariantProps,
  MotionTypography
} from "@/commonComponents/motion-components";
import ToggleButton from "./toggle-btn"
import SectionWrapper from "@/commonComponents/section-wrapper";
import {
  alpha,
  Box,
  Button,
  Dialog,
  DialogContent,
  MenuItem,
  Select,
  selectClasses,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import contact from "./images/Group 427321804 (1).png";
import AnimatedButton from "@/commonComponents/animated-button";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { BorderColor, KeyboardArrowDown } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Body1, H6 } from "@/styles/theme/components/typography.fontvariant";
import dialogbanner from "./images/Group 427321833.svg";
import Image from "next/image";
import ArrowImage from "@/commonComponents/arrow-image";
import {
  arrowImageTransition,
  formStagger,
  formStaggerChildrenRight,
  formStaggerChildrenUp,
} from "@/commonComponents/animations";

const DropDown = () => {
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <MotionStack
          rowGap={5}
          //maxWidth={{ xs: 1, md_lg: 470 }}
          variants={formStagger}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
        >
    <Stack
    direction={{ xs: "column", md_lg: "row" }}
    rowGap={5}
    columnGap={5}
    alignItems={"center"}
    justifyContent={"space-between"}
    mt={10}
  >
   {/* <Stack display={"flex"}  flexDirection={{xs:"column", md:"row"}} gap={2} mt={10}> */}
   <MotionTypography pt={2}  color={"secondary.900"} variant="body1">
      Filters
      </MotionTypography>
      <Grid2
            container
            rowGap={2}
            columnSpacing={5}
            component={motion.div}
            variants={formStaggerChildrenUp}
          >
      <Grid2 xs={12} md={4}>
        <Select
          fullWidth
          sx={(theme) => ({
            color: alpha(
              theme.palette.primary.main,
              !!company ? 1 : 0.4
            ),
            background:"common.white"
          })}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          displayEmpty
          renderValue={(value) => {
            return value === "" ? "Company / Trust" : value;
          }}
          variant="outlined"
          color="primary"
          IconComponent={KeyboardArrowDown}
        >
          {[
            "Bajaj Auto",
            "Mukand Ltd."
          
          ].map((item1, idx) => (
            <MenuItem key={idx} value={item1} sx={{ py: 2 }}>
              {item1}
            </MenuItem>
          ))}
        </Select>
      </Grid2>
      <Grid2 xs={12} md={4}>
        <Select
          fullWidth
          sx={(theme) => ({
            color: alpha(
              theme.palette.primary.main,
              !!category ? 1 : 0.4
            ),
          })}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          displayEmpty
          renderValue={(value) => {
            return value === ""
              ? "Topic"
              : value;
          }}
          variant="outlined"
          color="primary"
          IconComponent={KeyboardArrowDown}
        >
          {["Digital Literacy for Youth",
           "Providing Vocational Training for Women in Maharashtra",
           "Jamnalal Bajaj Foundation to distribute 30 awards"].map((item2, idx) => (
            <MenuItem key={idx} value={item2} sx={{ py: 2 }}>
              {item2}
            </MenuItem>
          ))}
        </Select>
      </Grid2>
      <Grid2 xs={12} md={4}>
        <Select
          fullWidth
          sx={(theme) => ({
            color: alpha(
              theme.palette.primary.main,
              !!category ? 1 : 0.4
            ),
          })}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          displayEmpty
          renderValue={(value) => {
            return value === ""
              ? "Year"
              : value;
          }}
          variant="outlined"
          color="primary"
          IconComponent={KeyboardArrowDown}
        >
          {["2021", "2022","2023"].map((item3, idx) => (
            <MenuItem key={idx} value={item3} sx={{ py: 2 }}>
              {item3}
            </MenuItem>
          ))}
        </Select>
      </Grid2>
       <Grid2 marginLeft={20} xs={12} md={4}>
        <Select
          fullWidth
          sx={(theme) => ({
            color: alpha(
              theme.palette.primary.main,
              !!category ? 1 : 0.4
            ),
          })}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          displayEmpty
          renderValue={(value) => {
            return value === ""
              ? "Sort By: Recent"
              : value;
          }}
          variant="outlined"
          color="primary"
          IconComponent={KeyboardArrowDown}
        >
          {["Awards", "General", "Initiavites"].map((item4,idx) => (
            <MenuItem key={idx} value={item4} sx={{ py: 2 }}>
              {item4}
            </MenuItem>
          ))}
        </Select>
      </Grid2>
        </Grid2> 
        
        <ToggleButton/>
   </Stack>
   </MotionStack>
  )
}

export default DropDown


