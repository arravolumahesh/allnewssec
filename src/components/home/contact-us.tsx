"use client";
import { MotionImage } from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import {
  Box,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import contact from "./images/Group 427321804 (1).png";
import AnimatedButton from "@/commonComponents/animated-button";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useState } from "react";

const ContactUs = () => {
  const [company, setCompany] = useState("Select Company");
  const [category, setCategory] = useState(
    "Select Initiative Category (optional)"
  );
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
        <Box
          position={"relative"}
          width={{ xs: 342, xl: 470 }}
          minWidth={{ xs: 342, xl: 470 }}
          sx={{ aspectRatio: 0.86 }}
        >
          <MotionImage src={contact} alt='' fill />
        </Box>
        <Stack rowGap={5} maxWidth={{ xs: 1, md_lg: 712 }}>
          <Stack gap={1}>
            <Typography variant='h3'>REACH OUT TO US</Typography>
            <Typography fontSize={"18px"}>
              We are always looking forward to support you.
            </Typography>
          </Stack>
          <Grid2 container rowGap={3} columnSpacing={5}>
            <Grid2 xs={12} md={6}>
              <TextField
                placeholder='Name'
                fullWidth
                variant='outlined'
                sx={fieldSx}
              />
            </Grid2>
            <Grid2 xs={12} md={6}>
              <TextField placeholder='Email ID' fullWidth sx={fieldSx} />
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
                  {
                    ".MuiSelect-icon": {
                      display: "none",
                    },
                  },
                ]}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                MenuProps={{
                  sx: {
                    ".MuiPaper-root": {
                      bgcolor: "primary.main",
                    },
                  },
                }}
                endAdornment={<KeyboardArrowDown />}
              >
                {["Select Company", "Company 1", "Company 2"].map(
                  (item, idx) => (
                    <MenuItem
                      key={idx}
                      value={item}
                      disabled={item === "Select Company"}
                      sx={{ py: 2 }}
                    >
                      {item}
                    </MenuItem>
                  )
                )}
              </Select>
            </Grid2>
            <Grid2 xs={12} md={6}>
              <Select
                fullWidth
                sx={[
                  fieldSx,
                  {
                    ".MuiSelect-icon": {
                      display: "none",
                    },
                  },
                ]}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                MenuProps={{
                  sx: {
                    ".MuiPaper-root": {
                      bgcolor: "primary.main",
                    },
                  },
                }}
                endAdornment={<KeyboardArrowDown />}
              >
                {[
                  "Select Initiative Category (optional)",
                  "Category 1",
                  "Category 2",
                ].map((item, idx) => (
                  <MenuItem
                    key={idx}
                    value={item}
                    disabled={item === "Select Initiative Category (optional)"}
                    sx={{ py: 2 }}
                  >
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
            href={"#"}
            rotation='anticlockwise'
            variant={"contained"}
            color={"secondary"}
            sx={{
              width: { xs: "100%", md: "313px" },
            }}
          >
            Submit
          </AnimatedButton>
        </Stack>
      </Stack>
    </SectionWrapper>
  );
};

export default ContactUs;

const fieldSx = {
  "*": { borderRadius: 0 },
  ".MuiInputBase-root": { height: "auto", overflow: "unset" },
  ".MuiOutlinedInput-notchedOutline": {
    borderRadius: 0,
    borderColor: "white",
  },
};
