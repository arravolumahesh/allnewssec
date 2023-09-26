"use client";
import { MotionTypography } from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { randomFillSync } from "crypto";
import { Translate } from "@mui/icons-material";
import teacher from "@/components/ourCompanies/images/teacher.png";
import teacher2 from "@/components/ourCompanies/images/teacher2.png";
const Enquire = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 556) {
        setScreenSize("mobile");
      } else if (width <= 996) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SectionWrapper
      SectionProps={{
        bgcolor: "common.white",
      }}
      py={{ xs: 7, md: 12 }}
    >
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          flexDirection: screenSize === "mobile" ? "column" : "row",
          gap: screenSize === "mobile" ? "8px" : "15px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "90px",
            height: "150px",
          }}
        >
          <MotionTypography
            sx={{
              color: "var(--primary-blue, #005DAC)",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "400px",
              lineHeight: "128%",
              textTransform: "uppercase",
              fontSize: screenSize === "mobile" ? "20px" : "40px",
              textAlign: screenSize === "mobile" ? "left" : "center",
              display: screenSize === "mobile" ? "block" : "none",
            }}
          >
            Raise Funds
          </MotionTypography>
          <Image
            width={120}
            height={150}
            src={teacher2}
            alt=""
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              clipPath:
                "polygon(75% 0, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
              marginTop: screenSize === "mobile" ? "40px" : "",
            }}
          />
        </div>
        <Stack
          direction="row"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <MotionTypography
            sx={{
              color: "var(--primary-blue, #005DAC)",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "400px",
              lineHeight: "128%",
              textTransform: "uppercase",
              fontSize: screenSize === "mobile" ? "32px" : "40px",
              textAlign: screenSize === "mobile" ? "left" : "center",
              display: screenSize === "mobile" ? "none" : "block",
            }}
          >
            Raise Funds
          </MotionTypography>
          <MotionTypography
            sx={{
              color: "var(--primary-blue, #005DAC)",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "400px",
              lineHeight: "128%",
              paddingLeft: "2rem",
              paddingTop: screenSize === "mobile" ? "3rem" : "1rem",
              fontSize: screenSize === "mobile" ? "12px" : "18px",
              width:
                screenSize === "mobile"
                  ? "250px"
                  : screenSize === "tablet"
                  ? "200px"
                  : "300px",
            }}
          >
            We can help with spreading the word and collecting funds for your
            cause
          </MotionTypography>
          <button
            type="button"
            style={{
              display: "flex",
              height: "48px",
              padding: "12px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              border: "1px solid var(--primary-blue, #005DAC)",
              color: "var(--primary-blue, #005DAC)",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "400px",
              lineHeight: "128%",
              marginLeft: "2rem",
              marginTop: "1rem",
              fontSize: screenSize === "mobile" ? "14px" : "18px",
              width:
                screenSize === "mobile"
                  ? "200px"
                  : screenSize === "tablet"
                  ? "150px"
                  : "300px",
            }}
          >
            Enquire About Fundraising
          </button>
        </Stack>
        <div
          style={{
            position: "relative",
            width: "90px",
            height: "150px",
            marginLeft:
              screenSize === "tablet"
                ? "10px"
                : screenSize === "desktop"
                ? "10px"
                : "15px",
          }}
        >
          <MotionTypography
            sx={{
              color: "var(--primary-blue, #005DAC)",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "400px",
              textTransform: "uppercase",
              fontSize: screenSize === "mobile" ? "32px" : "40px",
              paddingLeft: screenSize === "mobile" ? "20px" : "32px",
              textAlign: screenSize === "mobile" ? "center" : "center",
              display: screenSize === "mobile" ? "block" : "none",
            }}
          >
            Partner with us
          </MotionTypography>
          <Image
            width={120}
            height={150}
            src={teacher}
            alt=""
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              clipPath:
                "polygon(75% 0, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
              marginTop: screenSize === "mobile" ? "45px" : "",
            }}
          />
        </div>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MotionTypography
            sx={{
              color: "var(--primary-blue, #005DAC)",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "400px",
              textTransform: "uppercase",
              fontSize: screenSize === "mobile" ? "32px" : "40px",
              paddingLeft: screenSize === "mobile" ? "20px" : "32px",
              textAlign: screenSize === "mobile" ? "center" : "center",
              display: screenSize === "mobile" ? "none" : "block",
            }}
          >
            Partner with us
          </MotionTypography>
          <MotionTypography
            sx={{
              color: "var(--primary-blue, #005DAC)",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "400px",
              lineHeight: "128%",
              textAlign: "center",
              fontSize: screenSize === "mobile" ? "12px" : "18px",
              paddingLeft: screenSize === "mobile" ? "5px" : "32px",
              paddingTop: screenSize === "mobile" ? "3rem" : "1rem",
              width:
                screenSize === "mobile"
                  ? "250px"
                  : screenSize === "tablet"
                  ? "200px"
                  : "300px",
            }}
          >
            Our team will join hands with you in your initiatives.
          </MotionTypography>
          <button
            type="button"
            style={{
              display: "flex",
              height: "48px",
              padding: "12px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              border: "1px solid var(--primary-blue, #005DAC)",
              color: "var(--primary-blue, #005DAC)",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "400px",
              lineHeight: "128%",
              marginLeft: "2rem",
              marginTop: "1rem",
              fontSize: screenSize === "mobile" ? "14px" : "18px",
              width:
                screenSize === "mobile"
                  ? "200px"
                  : screenSize === "tablet"
                  ? "150px"
                  : "300px",
            }}
          >
            Enquire About Partnerships
          </button>
        </Stack>
      </Stack>
    </SectionWrapper>
  );
};

export default Enquire;
