"use client";
import React, { useState, useEffect } from "react";
import { MotionTypography } from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import Image from "next/image";
import { randomFillSync } from "crypto";
import { Translate } from "@mui/icons-material";
import group1 from "@/components/ourCompanies/images/group1.png";
import group2 from "@/components/ourCompanies/images/group2.png";
import group3 from "@/components/ourCompanies/images/group3.png";
import group4 from "@/components/ourCompanies/images/group4.png";
import group5 from "@/components/ourCompanies/images/group5.png";
import group6 from "@/components/ourCompanies/images/group6.png";
import group7 from "@/components/ourCompanies/images/group7.png";
import group8 from "@/components/ourCompanies/images/group8.png";
const Bajaj = () => {
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
          Discover Bajaj Auto
        </MotionTypography>
        <Stack direction={"row"} justifyContent={"flex-start"} gap={"10px"}>
          <Image
            style={{
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              width: screenSize === "mobile" ? "150px" : "",
            }}
            alt=""
            src={group1}
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
            src={group2}
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
            src={group7}
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
            src={group3}
            width={380}
            height={247}
          />
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"flex-start"}
          gap={"10px"}
          marginTop={"10px"}
        >
          <Image
            style={{
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              width: screenSize === "mobile" ? "150px" : "",
            }}
            alt=""
            src={group4}
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
            src={group3}
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
            src={group1}
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
            src={group5}
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
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: "400px",
                lineHeight: "108%",
                display: "flex",
                width: "200px",
              }}
            >
              Visit Our Website
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="#fff"
              >
                <path
                  d="M7.45828 15.5805L12.0405 10.9908L7.45828 6.40861C6.99708 5.94741 6.99708 5.19981 7.45828 4.74605C7.91204 4.28485 8.65962 4.28485 9.12082 4.74605L14.5474 10.1652C15.0011 10.6264 15.0011 11.3739 14.5474 11.8351L9.12082 17.2542C8.65962 17.7154 7.91204 17.7154 7.45828 17.2542C7.00452 16.8005 6.99708 16.038 7.45828 15.5843L7.45828 15.5805Z"
                  fill="white"
                />
              </svg>
            </MotionTypography>
          </Stack>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-end"}
            gap={"10px"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M48 48H0V0H48V48ZM20.2299 38.9661H26.2604V23.8781H30.4631L30.9119 18.8264H26.2604V15.9455C26.2604 14.7541 26.4971 14.2808 27.6559 14.2808H30.9201V9.03387H26.7501C22.2618 9.03387 20.2462 11.0085 20.2462 14.7868V18.8184H17.1125V23.9347H20.2462V38.9661H20.2299Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M48 48H0V0H48V48ZM11.2452 32.0138C13.5628 33.499 16.3128 34.3639 19.2669 34.3639C28.986 34.3639 34.4699 26.1545 34.1435 18.7937C35.1636 18.0593 36.053 17.1369 36.7548 16.0842C35.8164 16.5004 34.8045 16.7866 33.7518 16.909C34.829 16.2643 35.6613 15.2355 36.053 14.0114C35.0411 14.6071 33.9231 15.0482 32.7317 15.2849C31.7769 14.2648 30.4141 13.6281 28.9126 13.6281C25.5342 13.6281 23.0534 16.7781 23.8123 20.0505C19.4628 19.8301 15.6029 17.7491 13.0242 14.5828C11.6532 16.933 12.3142 20.01 14.6399 21.5686C13.7831 21.5441 12.9752 21.3068 12.2652 20.9151C12.2081 23.3388 13.9463 25.6075 16.4597 26.1134C15.7252 26.3174 14.9174 26.3585 14.0932 26.2035C14.7542 28.2844 16.6882 29.7942 18.9813 29.835C16.778 31.5569 14.0116 32.3323 11.2288 32.0058L11.2452 32.0138Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M0 0V48.0002H48V0H0ZM37.1139 30.6265C36.7956 31.8098 35.8735 32.7486 34.6902 33.0587C32.5522 33.6381 24 33.6381 24 33.6381C24 33.6381 15.4396 33.6381 13.3098 33.0587C12.1346 32.7405 11.2043 31.8098 10.8861 30.6265C10.3148 28.4803 10.3149 24.0001 10.3149 24.0001C10.3149 24.0001 10.3148 19.5199 10.8861 17.3737C11.2043 16.1904 12.1265 15.2524 13.3098 14.9423C15.4478 14.3629 24 14.3629 24 14.3629C24 14.3629 32.5604 14.3629 34.6902 14.9423C35.8654 15.2606 36.7956 16.1904 37.1139 17.3737C37.6851 19.5199 37.6851 24.0001 37.6851 24.0001C37.6851 24.0001 37.6851 28.4803 37.1139 30.6265Z"
                fill="white"
              />
              <path
                d="M21.2006 28.0723V19.9365L28.3492 24L21.2006 28.0723Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M0 0V48.0002H48V0H0ZM37.375 29.5491C37.3097 30.9853 37.0812 31.9564 36.7467 32.8133C36.4039 33.6946 35.9388 34.4453 35.1962 35.1961C34.4454 35.9469 33.6946 36.4042 32.8133 36.7469C31.9564 37.0815 30.9772 37.3104 29.5491 37.3757C28.1129 37.441 27.6559 37.457 24 37.457C20.3441 37.457 19.8871 37.441 18.4509 37.3757C17.0146 37.3104 16.0435 37.0815 15.1867 36.7469C14.3053 36.4042 13.5546 35.9387 12.8038 35.1961C12.053 34.4453 11.596 33.6946 11.2533 32.8133C10.9187 31.9564 10.6903 30.9772 10.625 29.5491C10.5597 28.1129 10.5433 27.656 10.5433 24.0001C10.5433 20.3442 10.5597 19.8874 10.625 18.4512C10.6903 17.0149 10.9187 16.0438 11.2533 15.187C11.596 14.3056 12.0612 13.5549 12.8038 12.8042C13.5546 12.0534 14.3053 11.5961 15.1867 11.2533C16.0435 10.9188 17.0228 10.6907 18.4509 10.6254C19.8871 10.5601 20.3441 10.5433 24 10.5433C27.6559 10.5433 28.1129 10.5601 29.5491 10.6254C30.9853 10.6907 31.9564 10.9188 32.8133 11.2533C33.6946 11.5961 34.4454 12.0534 35.1962 12.8042C35.947 13.5549 36.4039 14.3056 36.7467 15.187C37.0812 16.0438 37.3097 17.0231 37.375 18.4512C37.4403 19.8874 37.4566 20.3442 37.4566 24.0001C37.4566 27.656 37.4403 28.1129 37.375 29.5491Z"
                fill="white"
              />
              <path
                d="M24.0001 19.512C21.5193 19.512 19.5118 21.5194 19.5118 24.0002C19.5118 26.481 21.5193 28.4885 24.0001 28.4885C26.4809 28.4885 28.4884 26.481 28.4884 24.0002C28.4884 21.5194 26.4809 19.512 24.0001 19.512Z"
                fill="white"
              />
              <path
                d="M34.9519 18.5651C34.8948 17.2513 34.6744 16.5417 34.4867 16.0684C34.2419 15.44 33.9481 14.9909 33.483 14.5175C33.0097 14.0442 32.5609 13.759 31.9325 13.5142C31.4592 13.3265 30.7492 13.1141 29.4354 13.0488C28.0155 12.9835 27.5911 12.9675 24.0005 12.9675C20.4099 12.9675 19.9774 12.9835 18.5656 13.0488C17.2518 13.1059 16.5418 13.3265 16.0685 13.5142C15.4401 13.759 14.9913 14.0524 14.518 14.5175C14.0447 14.9909 13.7591 15.44 13.5143 16.0684C13.3266 16.5417 13.1144 17.2513 13.0491 18.5651C12.9838 19.985 12.9675 20.4095 12.9675 24.0001C12.9675 27.5907 12.9838 28.0234 13.0491 29.4351C13.1062 30.749 13.3266 31.4586 13.5143 31.9319C13.7591 32.5603 14.0528 33.0094 14.518 33.4827C14.9913 33.956 15.4401 34.242 16.0685 34.4868C16.5418 34.6745 17.2518 34.8862 18.5656 34.9514C19.9855 35.0167 20.4099 35.0335 24.0005 35.0335C27.5911 35.0335 28.0236 35.0167 29.4354 34.9514C30.7492 34.8943 31.4592 34.6745 31.9325 34.4868C32.5609 34.242 33.0097 33.9479 33.483 33.4827C33.9563 33.0094 34.2419 32.5603 34.4867 31.9319C34.6744 31.4586 34.8866 30.749 34.9519 29.4351C35.0172 28.0152 35.0335 27.5907 35.0335 24.0001C35.0335 20.4095 35.0172 19.985 34.9519 18.5651ZM23.9923 30.9118C20.1732 30.9118 17.0804 27.8192 17.0804 24.0001C17.0804 20.181 20.1732 17.0884 23.9923 17.0884C27.8114 17.0884 30.9043 20.181 30.9043 24.0001C30.9043 27.8192 27.8114 30.9118 23.9923 30.9118ZM31.1736 18.4344C30.2841 18.4344 29.5578 17.7085 29.5578 16.8191C29.5578 15.9296 30.2841 15.2029 31.1736 15.2029C32.0631 15.2029 32.7893 15.9296 32.7893 16.8191C32.7893 17.7085 32.0631 18.4344 31.1736 18.4344Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M0 0V48H48V0H0ZM17.137 36.5347H11.9633V19.8138H17.137V36.5347ZM14.5257 17.627C12.8364 17.627 11.4655 16.2477 11.4655 14.5422C11.4655 12.8366 12.8364 11.4573 14.5257 11.4573C16.2149 11.4573 17.5858 12.8366 17.5858 14.5422C17.5858 16.2477 16.2149 17.627 14.5257 17.627ZM36.5345 36.5347H31.3852V27.7623C31.3852 25.3549 30.4713 24.008 28.5699 24.008C26.4971 24.008 25.4199 25.412 25.4199 27.7623V36.5347H20.4584V19.8138H25.4199V22.0659C25.4199 22.0659 26.9133 19.2998 30.455 19.2998C33.9966 19.2998 36.5345 21.462 36.5345 25.9421V36.5268V36.5347Z"
                fill="white"
              />
            </svg>
          </Stack>
        </Stack>
      </Stack>
    </SectionWrapper>
  );
};

export default Bajaj;
