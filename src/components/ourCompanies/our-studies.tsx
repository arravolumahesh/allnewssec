"use client";

import React, { useState } from "react";
import SectionWrapper from "@/commonComponents/section-wrapper";
import {
  Box,
  Typography,
  useMediaQuery,
  Button,
  Card,
  makeStyles,
  Container,
  Grid,
} from "@mui/material";

import { helvetica } from "@/app/font";
import Image from "next/image";
//import LeftArrow from "@/components/ourcompany/images/LeftArrow.png";
//import RightArrow from "@/components/ourcompany/images/RightArrow.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import childrensphone from "@/components/ourcompany/images/childrensphone.png";
import womens from "@/components/ourCompanies/images/womens.png";
import childrens from "@/components/ourCompanies/images/childrens.png";

const OurCaseStudies = () => {
  const isTabletOrLarger = useMediaQuery((theme: any) =>
    theme.breakpoints.up("md")
  );

  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  const handleNext = () => {};
  const handlePrev = () => {};
  return (
    <SectionWrapper
      sx={{
        backgroundColor: "rgba(218, 218, 218, 1)",
        padding: "96px 64px",
        textAlign: "center",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: "auto" }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "var(--primary-blue, #005DAC)",
            textOverflow: "ellipsis",
            fontSize: "48px",
            fontStyle: "normal",
            lineHeight: "128%",
            textTransform: "uppercase",
          }}
        >
          OUR CASE STUDIES
        </Typography>

        {/* Latop and Table view Button Arrow */}
        {isTabletOrLarger && (
          <Box sx={{ display: "flex", gap: "16px" }}>
            <Button
              style={{
                background: "rgba(0, 93, 172, 0.20)",
                padding: "4px",
                width: "48px",
                height: "48px",
                border: "none",
                borderRadius: "1px solid blue",
              }}
              onClick={handleNext}
            >
              <KeyboardArrowLeftIcon />
            </Button>
            <Button
              style={{
                background: "rgba(0, 93, 172, 0.20)",
                padding: "4px",
                width: "48px",
                height: "48px",
                border: "none",
                borderRadius: "1px solid blue",
              }}
              onClick={handlePrev}
            >
              <KeyboardArrowRightIcon />
            </Button>
          </Box>
        )}
      </Box>
      {/* Adding the image container */}

      <Box
        sx={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
          padding: "40px",
          justifyContent: "flex-start",
        }}
      >
        {DetailsOfLargerDevices.map((element, index) => (
          <Grid key={index}>
            <Box>
              <Image
                src={element.imageUrl}
                alt="childerns"
                width={643}
                height={310}
              />

              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontFamily: helvetica,
                    fontSize: "8px",
                    fontStyle: "normal",
                    fontWeight: "200",
                    background: "var(--primary-light-grey, #DADADA);",
                    padding: "5px",
                  }}
                >
                  {element.tag}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: "var(--primary-blue, #005DAC)",
                    fontFamily: helvetica,
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "128%",
                  }}
                >
                  {element.heading}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "var(--primary-blue, #005DAC)",
                      fontFamily: helvetica,
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "128%",
                    }}
                  >
                    {element.subheading}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Box>

      {/* Mobile view button Arrow  */}
      {isMobile && (
        <Box sx={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <Button
            style={{
              background: "rgba(0, 93, 172, 0.20)",
              padding: "4px",
              width: "48px",
              height: "48px",
              border: "none",
              borderRadius: "1px solid blue",
            }}
          >
            <KeyboardArrowLeftIcon />
          </Button>
          <Button
            style={{
              background: "rgba(0, 93, 172, 0.20)",
              padding: "4px",
              width: "48px",
              height: "48px",
              border: "none",
              borderRadius: "1px solid blue",
            }}
          >
            <KeyboardArrowRightIcon />
          </Button>
        </Box>
      )}
    </SectionWrapper>
  );
};

export default OurCaseStudies;

const DetailsOfLargerDevices = [
  {
    imageUrl: childrens,
    tag: "IPH-Triveni Program",
    heading: "Digital Skilling for Youth",
    subheading:
      "Helping students learn digitally in order to keep them future and employment ready. ",
  },
  {
    imageUrl: womens,
    tag: "IPH-Triveni Program",
    heading: "Providing Vocational Training for Women in Maharashtra",
    subheading:
      "Aiding women in growing skills that help them achieve financial independence through mindfully curated training programmes. ",
  },
];
