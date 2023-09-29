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
import Sunitha from "@/commonComponents/images/sunitha.png";
import Arrow from "@/commonComponents/images/arrow.svg";

const SunithaBio = () => {
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
        bgcolor: "main.white",
      }}
      py={{ xs: 7, md: 12 }}
    >
      <Stack
        width={1}
        sx={{
          overflow: "hidden",
          background:
            screenSize === "mobile" ? "none" : "var(--Background, #E6E6E6)",
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            width: "204%",
            height: "auto",
            aspectRatio: 4.6,
            bottom: { xs: "34.5%", md_lg: "29%" },
            right: 0,
            backgroundSize: "contain",
            transform: "translate3d(0, 0, 0)",
            animation: "scroll 15s infinite linear",
            "@keyframes scroll": {
              "100%": {
                WebkitTransform: "translateX(50.5%)",
              },
            },
          },
        }}
      >
        <Stack
          display={"flex"}
          padding={"96px 64px"}
          sx={{
            background: `linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%),url(https://res.cloudinary.com/devj4jofj/image/upload/v1695884419/sunitha_qs5e2b.png),lightgray 50% / cover no-repeat`,
            backgroundPosition:
              screenSize === "mobile" ? "top" : "center center",
            height: screenSize === "mobile" ? "900px" : "553px",
            backgroundRepeat:
              screenSize === "mobile" ? "no-repeat" : "no-repeat",
          }}
        >
          <MotionTypography
            sx={{
              alignSelf: "stretch",
              color: "var(--White, #FFF)",
              fontFamily: "Helvetica",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "128%",
              width: screenSize === "mobile" ? "250px" : "500px",
              paddingTop: screenSize === "mobile" ? "470px" : "",
            }}
          >
            Sunita, a resident of Mumbai’s slums, once struggled to make ends
            meet. With the Project Hamaara Sapna, her life took a hopeful turn.
            The initiative not only taught her sewing and tailoring but
            instilled confidence, breaking the shackles of underprivilege. More
            than a job, it’s a renewed life, a journey from marginalization to
            dignity, reflecting the essence of our foundation.
            {/*<Image alt="" src={Arrow}/>  */}
          </MotionTypography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              flex: "1 0 0",
            }}
          >
            <MotionTypography
              sx={{
                color: "#FFF",
                fontFamily: "Helvetica",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "128%",
                paddingTop: screenSize === "mobile" ? "10px" : "80px",
              }}
            >
              Sunita Kumari
            </MotionTypography>
            <MotionTypography
              sx={{
                color: "var(--Stroke, #EAEAEA)",
                fontFamily: "Helvetica",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "128%",
              }}
            >
              Beneficiary - Project Hamaara Sapna
            </MotionTypography>
          </Stack>
        </Stack>
      </Stack>
    </SectionWrapper>
  );
};

export default SunithaBio;
