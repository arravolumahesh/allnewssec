"use client";
import {
  MotionBox,
  MotionBoxProps,
  MotionImage,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  MenuProps,
  Select,
  Stack,
  TextField,
  Typography,
  alpha,
  selectClasses,
} from "@mui/material";
import React from "react";
import contact from "./images/Group 427321804 (1).png";
import AnimatedButton from "@/commonComponents/animated-button";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useState } from "react";
import { motion } from "framer-motion";
import { Body1, H6 } from "@/styles/theme/components/typography.fontvariant";
import dialogbanner from "./images/Group 427321833.svg";
import Image from "next/image";

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
          {...boxTransition}
        >
          <MotionImage src={contact} alt='' fill />
        </MotionBox>
        <Stack
          rowGap={5}
          maxWidth={{ xs: 1, md_lg: 670 }}
          component={motion.div}
          variants={staggerDiv}
          initial='initial'
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <Stack
            gap={1}
            component={motion.div}
            variants={staggerDivChildrenRight}
          >
            <Typography variant='h3'>REACH OUT TO US</Typography>
            <Typography fontSize={"18px"}>
              We are always looking forward to support you.
            </Typography>
          </Stack>
          <Grid2
            container
            rowGap={3}
            columnSpacing={5}
            component={motion.div}
            variants={staggerDivChildrenUp}
          >
            <Grid2 xs={12} md={6}>
              <TextField
                placeholder='Name'
                fullWidth
                variant='outlined'
                sx={fieldSx}
              />
            </Grid2>
            <Grid2 xs={12} md={6}>
              <TextField
                placeholder='Email ID'
                type='email'
                fullWidth
                sx={fieldSx}
              />
            </Grid2>
            <Grid2 xs={12} md={6}>
              <TextField placeholder='Phone Number' fullWidth sx={fieldSx} />
            </Grid2>
            <Grid2 xs={12} md={6}>
              <TextField
                placeholder='Company Name (optional)'
                fullWidth
                sx={fieldSx}
              />
            </Grid2>
            <Grid2 xs={12} md={6}>
              <Select
                fullWidth
                sx={[
                  fieldSx,
                  (theme) => ({
                    [`& .${selectClasses.icon}`]: {
                      color: "white",
                    },
                    color: alpha(
                      theme.palette.secondary.main,
                      !!company ? 1 : 0.4
                    ),
                  }),
                ]}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                displayEmpty
                renderValue={(value) => {
                  return value === "" ? "Select Company" : value;
                }}
                MenuProps={{
                  sx: MenuStyle,
                }}
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
                sx={[
                  fieldSx,
                  (theme) => ({
                    [`& .${selectClasses.icon}`]: {
                      color: "white",
                    },
                    color: alpha(
                      theme.palette.secondary.main,
                      !!category ? 1 : 0.4
                    ),
                  }),
                ]}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                displayEmpty
                renderValue={(value) => {
                  return value === ""
                    ? "Select Initiative Category (optional)"
                    : value;
                }}
                MenuProps={{
                  sx: MenuStyle,
                }}
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
                placeholder='Enter A Message'
                multiline
                fullWidth
                rows={4}
                sx={fieldSx}
              />
            </Grid2>
          </Grid2>
          <AnimatedButton
            href={""}
            rotation='anticlockwise'
            variant={"contained"}
            color={"secondary"}
            sx={{
              width: { xs: "100%", md: "313px" },
            }}
            variants={staggerDivChildrenRight}
            animationDelay={1000}
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
                <Image src={dialogbanner} alt='' fill />
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
                  variant='body1'
                  color='primary.main'
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
                  variant='outlined'
                  sx={{ width: { xs: 1, md: 213 } }}
                  onClick={() => setOpen(false)}
                >
                  Done
                </Button>
              </Stack>
            </DialogContent>
          </Dialog>
        </Stack>
      </Stack>
    </SectionWrapper>
  );
};

export default ContactUs;

const fieldSx = {
  "*": { borderRadius: 0 },
  ".MuiInputBase-root": {
    height: "auto",
    overflow: "unset",
    // "&:hover": {
    //   ".MuiOutlinedInput-notchedOutline": {
    //     borderColor: "white !important",
    //   },
    // },
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderRadius: 0,
    borderColor: "white",
  },
};

const MenuStyle = {
  ".MuiPaper-root": {
    // bgcolor: "primary.main",
    borderRadius: 0,
    maxHeight: 280,
    overflowY: "scroll",
    ".MuiMenuItem-root": {
      color: "#575756",
      borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
    },
    "&::-webkit-scrollbar": {
      width: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#DADADA",
    },
  },
};

const boxTransition: MotionBoxProps = {
  initial: {
    x: "-102%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  viewport: {
    once: true,
  },
};

const staggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.6,
      delayChildren: 0.5,
    },
  },
};
const staggerDivChildrenRight: MotionVariantProps = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};
const staggerDivChildrenUp: MotionVariantProps = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};
