"use client";
import React, { useEffect, useState } from "react";
import { MotionTypography } from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Stack } from "@mui/material";
import Image from "next/image";
import foundation1 from "@/components/charitableTrusts/images/Foundation1.png";
import foundation2 from "@/components/charitableTrusts/images/Foundation2.png";
import foundation3 from "@/components/charitableTrusts/images/Foundation3.png";
import foundation4 from "@/components/charitableTrusts/images/Foundation4.png";
import foundation5 from "@/components/charitableTrusts/images/Foundation5.png";
import foundation6 from "@/components/charitableTrusts/images/Foundation6.png";
import foundation7 from "@/components/charitableTrusts/images/Foundation7.png";
import foundation8 from "@/components/charitableTrusts/images/Foundation8.png";
import icon from "@/components/charitableTrusts/images/icon.svg";
import facebook from "@/components/charitableTrusts/images/facebook.svg";
import twitter from "@/components/charitableTrusts/images/twitter.svg";
import youtube from "@/components/charitableTrusts/images/youtube.svg";
import insta from "@/components/charitableTrusts/images/insta.svg";
import linkedIn from "@/components/charitableTrusts/images/lindedin.svg";

const BajajFoundation = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 540) {
        setScreenSize("mobile");
      } else if (width <= 992) {
        setScreenSize("tablet1");
      } else if (width <= 1024) {
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
      pt={{ xs: 7, md: 4 }}
      pb={{ xs: 7, md: 8 }}
      rowGap={{ xs: 6, md: 8 }}
      SectionProps={{
        bgcolor: "primary.main",
      }}
      overflow={"hidden"}
    >
      <Stack direction={"column"}>
        <MotionTypography
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            color: "var(--White, #FFF)",
            textOverflow: "ellipsis",
            fontFamily: "Helvetica",
            fontSize: "48px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "128%",
            textTransform: "uppercase",
            opacity: 0.9,
            textAlign: "center",
            padding: "20px",
          }}
        >
          DISCOVER JAMNALAL BAJAJ FOUNDATION
        </MotionTypography>
        <Stack
          direction={"row"}
          justifyContent={"flex-start"}
          gap={"10px"}
          sx={{
            width: "min-content",
            transform: "translate3d(-50%, 0, 0)",
            animation: "logoScroll 10s infinite linear",
            "@keyframes logoScroll": {
              "100%": {
                WebkitTransform: "translateX(-3.5%)",
              },
            },
          }}
        >
          <Image
            style={{
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              width: screenSize === "mobile" ? "150px" : "",
            }}
            alt=""
            src={foundation1}
            width={380}
            height={247}
          />
          <Image
            style={{
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              width: screenSize === "mobile" ? "150px" : "",
            }}
            alt=""
            src={foundation2}
            width={380}
            height={247}
          />
          <Image
            style={{
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              width: screenSize === "mobile" ? "150px" : "",
            }}
            alt=""
            src={foundation3}
            width={380}
            height={247}
          />
          <Image
            style={{
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              width: screenSize === "mobile" ? "150px" : "",
            }}
            alt=""
            src={foundation4}
            width={380}
            height={247}
          />
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"flex-start"}
          gap={"10px"}
          marginTop={"10px"}
          sx={{
            "@keyframes logoScroll": {
              "0%": {
                transform: "translateX(-100%)", // Start from the left
              },
              "100%": {
                transform: "translateX(100%)", // Move to the right
              },
            },
          }}
        >
          <Image
            style={{
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              width: screenSize === "mobile" ? "150px" : "",
            }}
            alt=""
            src={foundation5}
            width={380}
            height={247}
          />
          <Image
            style={{
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              width: screenSize === "mobile" ? "150px" : "",
            }}
            alt=""
            src={foundation6}
            width={380}
            height={247}
          />
          <Image
            style={{
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              width: screenSize === "mobile" ? "150px" : "",
            }}
            alt=""
            src={foundation7}
            width={380}
            height={247}
          />
          <Image
            style={{
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              width: screenSize === "mobile" ? "150px" : "",
            }}
            alt=""
            src={foundation8}
            width={380}
            height={247}
          />
        </Stack>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          sx={{
            flexDirection: screenSize === "mobile" ? "column" : "",
            alignItems: screenSize === "mobile" ? "center" : "",
          }}
        >
          <Stack display={"flex"} flexDirection={"row"} marginTop={"20px"}>
            <MotionTypography
              sx={{
                color: "var(--White, #FFF)",
                fontFamily: "Helvetica",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "400px",
                lineHeight: "128%",
                display: screenSize === "mobile" ? "none" : "flex",
              }}
            >
              Visit The Jamnalal Bajaj Foundation Website
              <Image alt="" src={icon} />
            </MotionTypography>
          </Stack>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-end"}
            gap={"10px"}
          >
            <Image alt="" src={facebook} />
            <Image alt="" src={twitter} />
            <Image alt="" src={youtube} />
            <Image alt="" src={insta} />
            <Image alt="" src={linkedIn} />
          </Stack>
          <Stack display={"flex"} flexDirection={"row"} marginTop={"20px"}>
            <MotionTypography
              sx={{
                color: "var(--White, #FFF)",
                fontFamily: "Helvetica",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "400px",
                lineHeight: "128%",
                display: screenSize === "mobile" ? "block" && "flex" : "none",
              }}
            >
              Visit The Jamnalal Bajaj Foundation Website
              <Image alt="" src={icon} />
            </MotionTypography>
          </Stack>
        </Stack>
      </Stack>
    </SectionWrapper>
  );
};

export default BajajFoundation;
