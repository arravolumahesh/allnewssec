"use client";
import {
  MotionBox,
  MotionBoxProps,
  MotionImage,
  MotionStack,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
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
import { KeyboardArrowDown } from "@mui/icons-material";
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

const ContactUs = () => {
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.lightToDark,
        },
      }}
    >
      <Stack
        direction={{ xs: "column", md_lg: "row" }}
        rowGap={3}
        columnGap={5}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <MotionBox
          position={"relative"}
          width={{ xs: 342, xl: 470 }}
          minWidth={{ xs: 342, xl: 470 }}
          sx={{ aspectRatio: 0.86 }}
          {...arrowImageTransition}
        >
          <MotionImage src={contact} alt="" fill />
        </MotionBox>
        {/* <ArrowImage
          src={contact}
          alt=''
          width={{ xs: 342, xl: 470 }}
          height={{ xs: 342, xl: 470 }}
          sx={{ aspectRatio: 0.86 }}
          {...boxTransition}
        /> */}
        <MotionStack
          rowGap={5}
          maxWidth={{ xs: 1, md_lg: 670 }}
          variants={formStagger}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <MotionStack gap={1} variants={formStaggerChildrenRight}>
            <Typography variant="h3">REACH OUT TO US</Typography>
            <Typography fontSize={"18px"}>
              We are always looking forward to support you.
            </Typography>
          </MotionStack>
          <Grid2
            container
            rowGap={3}
            columnSpacing={5}
            component={motion.div}
            variants={formStaggerChildrenUp}
          >
            <Grid2 xs={12} md={6}>
              <TextField placeholder="Name" fullWidth />
            </Grid2>
            <Grid2 xs={12} md={6}>
              <TextField placeholder="Email ID" type="email" fullWidth />
            </Grid2>
            <Grid2 xs={12} md={6}>
              <TextField placeholder="Phone Number" fullWidth />
            </Grid2>
            <Grid2 xs={12} md={6}>
              <TextField placeholder="Company Name (optional)" fullWidth />
            </Grid2>
            <Grid2 xs={12} md={6}>
              <Select
                fullWidth
                sx={(theme) => ({
                  color: alpha(
                    theme.palette.secondary.main,
                    !!company ? 1 : 0.4
                  ),
                })}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                displayEmpty
                renderValue={(value) => {
                  return value === "" ? "Select Company" : value;
                }}
                variant="outlined"
                color="secondary"
                IconComponent={KeyboardArrowDown}
              >
                {[
                  "Bajaj Auto Limited",
                  "Bajaj Electricals Limited",
                  "Bajaj Finserv Limited",
                  "Mukand Limited",
                  "Jamnalal Bajaj Foundation",
                ].map((item, idx) => (
                  <MenuItem key={idx} value={item} sx={{ py: 2 }}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Grid2>
            <Grid2 xs={12} md={6}>
              <Select
                fullWidth
                sx={(theme) => ({
                  color: alpha(
                    theme.palette.secondary.main,
                    !!category ? 1 : 0.4
                  ),
                })}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                displayEmpty
                renderValue={(value) => {
                  return value === ""
                    ? "Select Initiative Category (optional)"
                    : value;
                }}
                variant="outlined"
                color="secondary"
                IconComponent={KeyboardArrowDown}
              >
                {["Category 1", "Category 2"].map((item, idx) => (
                  <MenuItem key={idx} value={item} sx={{ py: 2 }}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Grid2>
            <Grid2 xs={12}>
              <TextField
                placeholder="Enter A Message"
                multiline
                fullWidth
                rows={4}
              />
            </Grid2>
          </Grid2>
          <AnimatedButton
            href={"#"}
            rotation="anticlockwise"
            variant={"contained"}
            color={"secondary"}
            sx={{
              width: { xs: 1, md: 313 },
            }}
            variants={formStaggerChildrenRight}
            animationDelay={2000}
            onClick={() => setOpen(true)}
          >
            Submit
          </AnimatedButton>
          <Dialog
            onClose={() => setOpen(false)}
            open={open}
            fullWidth
            maxWidth={"sm"}
            sx={{
              ".MuiPaper-root": {
                borderRadius: 0,
              },
            }}
          >
            <DialogContent sx={{ width: 1, p: 1 }}>
              <Box
                width={1}
                sx={{ aspectRatio: 459 / 155 }}
                position={"relative"}
              >
                <Image src={dialogbanner} alt="" fill />
              </Box>
              <Stack
                maxWidth={357}
                textAlign={"center"}
                alignItems={"center"}
                rowGap={2}
                mx={"auto"}
                my={{ xs: 3, md: 4 }}
              >
                <Typography
                  variant="body1"
                  color="primary.main"
                  fontSize={H6}
                  fontWeight={700}
                >
                  Details Submitted Successfully
                </Typography>
                <Typography fontSize={Body1} color={"black"}>
                  Thank you for submitting your details! We will get back to you
                  shortly.
                </Typography>
                <Button
                  variant="outlined"
                  sx={{ width: { xs: 1, md: 213 } }}
                  onClick={() => setOpen(false)}
                >
                  Done
                </Button>
              </Stack>
            </DialogContent>
          </Dialog>
        </MotionStack>
      </Stack>
    </SectionWrapper>
  );
};

export default ContactUs;
