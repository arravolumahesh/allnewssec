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

import {
  MotionImage,
  MotionImageProps,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import Arrow from "./images/Group 427321806.svg";
import { useMediaQuery, useTheme } from "@mui/material";

const slides = [
  {
    image:
      "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
    title: "Avatar: The Way of Water",
    subTitle:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    interval: 1500,
  },
  {
    image:
      "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    title: "Black Adam",
    subTitle:
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    interval: 500,
  },
  {
    image:
      "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
    title: "Black Panther: Wakanda Forever",
    subTitle:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    interval: 2500,
  },
];

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
} from "swiper/modules";

const HerosSection = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 556) {
        setScreenSize("mobile");
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

  const itemsPerPage =
    screenSize === "desktop" ? 3 : screenSize === "tablet" ? 2 : 1;

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
      <Stack
        direction={"row"}
        alignItems={"center"}
        columnGap={4}
        pl={{ xs: 0, md: "5.5%" }}
      >
        <Stack maxWidth={814} rowGap={{ xs: 2, md: 4 }}>
          <MotionTypography
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              color: "var(--Stroke, #EAEAEA)",
              textOverflow: "ellipsis",
              fontFamily: "Helvetica",
              fontSize: "48px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "128%",
              textTransform: "uppercase",
            }}
          >
            HeroEs behind our successful initiatives
          </MotionTypography>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        marginLeft={screenSize === "mobile" ? "5px" : "120px"}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
          spaceBetween={100}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          effect={"cube"}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
        >
          <SwiperSlide>
            <Stack direction={"row"}>
              <div
                style={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/devj4jofj/image/upload/v1695537086/image_43693_5_fkmu5i.png)",
                  height: "420px",
                  width:
                    screenSize === "mobile"
                      ? "300px"
                      : screenSize === "tablet"
                      ? "300px"
                      : screenSize === "desktop"
                      ? "420px"
                      : "",
                  backgroundRepeat: "no-repeat",
                  flexWrap: "nowrap",
                }}
              >
                <MotionTypography
                  variant="h6"
                  sx={{
                    color: "var(--White, #FFF)",
                    fontFamily: "Helvetica",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "128%",
                    textTransform: "capitalize",
                    paddingTop: "300px",
                    paddingLeft: "20px",
                  }}
                >
                  Sanchali Khanna
                </MotionTypography>
                <MotionTypography
                  variant="body1"
                  sx={{
                    color: "var(--White, #FFF)",
                    fontFamily: "Helvetica",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "128%",
                    textTransform: "capitalize",
                    paddingLeft: "20px",
                  }}
                >
                  Senior Engineer
                </MotionTypography>
                <MotionTypography
                  variant="body1"
                  sx={{
                    color: "var(--White, #FFF)",
                    fontFamily: "Helvetica",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "128%",
                    textTransform: "capitalize",
                    paddingLeft: "20px",
                    alignSelf: "stretch",
                  }}
                >
                  Participated in IPH-Triveni Program & helped 200+ individuals.
                </MotionTypography>
              </div>
              <Stack display={screenSize === "mobile" ? "none" : "block"}>
                <Image
                  style={{
                    marginTop: "300px",
                    marginLeft: "10px",
                    width: screenSize === "tablet" ? "60px" : "",
                  }}
                  width={120}
                  height={120}
                  alt=""
                  src="/image 43693 6.png"
                />
                <Image
                  style={{
                    marginTop: "300px",
                    marginLeft: "10px",
                    width: screenSize === "tablet" ? "60px" : "",
                  }}
                  width={120}
                  height={120}
                  alt=""
                  src="/image 43694.png"
                />
                <Image
                  style={{
                    marginTop: "300px",
                    marginLeft: "10px",
                    width: screenSize === "tablet" ? "60px" : "",
                  }}
                  width={120}
                  height={120}
                  alt=""
                  src="/image 43695 (3).png"
                />
              </Stack>
            </Stack>
          </SwiperSlide>

          <SwiperSlide>
            <Stack direction={"row"}>
              <div
                style={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/devj4jofj/image/upload/v1695637179/Pi7_Tool_image_43693_6_wc3s1d.jpg)",
                  height: "420px",
                  width:
                    screenSize === "mobile"
                      ? "300px"
                      : screenSize === "tablet"
                      ? "300px"
                      : screenSize === "desktop"
                      ? "420px"
                      : "",
                  backgroundRepeat: "no-repeat",
                  flexWrap: "nowrap",
                }}
              >
                <MotionTypography
                  variant="h6"
                  sx={{
                    color: "var(--White, #FFF)",
                    fontFamily: "Helvetica",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "128%",
                    textTransform: "capitalize",
                    paddingTop: "300px",
                    paddingLeft: "20px",
                  }}
                >
                  Sanchali Khanna
                </MotionTypography>
                <MotionTypography
                  variant="body1"
                  sx={{
                    color: "var(--White, #FFF)",
                    fontFamily: "Helvetica",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "128%",
                    textTransform: "capitalize",
                    paddingLeft: "20px",
                  }}
                >
                  Senior Engineer
                </MotionTypography>
                <MotionTypography
                  variant="body1"
                  sx={{
                    color: "var(--White, #FFF)",
                    fontFamily: "Helvetica",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "128%",
                    textTransform: "capitalize",
                    paddingLeft: "20px",
                    alignSelf: "stretch",
                  }}
                >
                  Participated in IPH-Triveni Program & helped 200+ individuals.
                </MotionTypography>
              </div>
              <Stack display={screenSize === "mobile" ? "none" : "block"}>
                <Image
                  style={{
                    marginTop: "300px",
                    marginLeft: "10px",
                    width: screenSize === "tablet" ? "60px" : "",
                  }}
                  width={120}
                  height={120}
                  alt=""
                  src="/whitegirl.png"
                />
                <Image
                  style={{
                    marginTop: "300px",
                    marginLeft: "10px",
                    width: screenSize === "tablet" ? "60px" : "",
                  }}
                  width={120}
                  height={120}
                  alt=""
                  src="/image 43694.png"
                />
                <Image
                  style={{
                    marginTop: "300px",
                    marginLeft: "10px",
                    width: screenSize === "tablet" ? "60px" : "",
                  }}
                  width={120}
                  height={120}
                  alt=""
                  src="/image 43695 (3).png"
                />
              </Stack>
            </Stack>
          </SwiperSlide>

          <SwiperSlide>
            <Stack direction={"row"}>
              <div
                style={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/devj4jofj/image/upload/v1695637206/Pi7_Tool_image_43694_x0wn05.jpg)",
                  height: "420px",
                  width:
                    screenSize === "mobile"
                      ? "300px"
                      : screenSize === "tablet"
                      ? "300px"
                      : screenSize === "desktop"
                      ? "420px"
                      : "",
                  backgroundRepeat: "no-repeat",
                  flexWrap: "nowrap",
                }}
              >
                <MotionTypography
                  variant="h6"
                  sx={{
                    color: "var(--White, #FFF)",
                    fontFamily: "Helvetica",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "128%",
                    textTransform: "capitalize",
                    paddingTop: "300px",
                    paddingLeft: "20px",
                  }}
                >
                  Sanchali Khanna
                </MotionTypography>
                <MotionTypography
                  variant="body1"
                  sx={{
                    color: "var(--White, #FFF)",
                    fontFamily: "Helvetica",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "128%",
                    textTransform: "capitalize",
                    paddingLeft: "20px",
                  }}
                >
                  Senior Engineer
                </MotionTypography>
                <MotionTypography
                  variant="body1"
                  sx={{
                    color: "var(--White, #FFF)",
                    fontFamily: "Helvetica",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "128%",
                    textTransform: "capitalize",
                    paddingLeft: "20px",
                    alignSelf: "stretch",
                  }}
                >
                  Participated in IPH-Triveni Program & helped 200+ individuals.
                </MotionTypography>
              </div>
              <Stack display={screenSize === "mobile" ? "none" : "block"}>
                <Image
                  style={{
                    marginTop: "300px",
                    marginLeft: "10px",
                    width: screenSize === "tablet" ? "60px" : "",
                  }}
                  width={120}
                  height={120}
                  alt=""
                  src="/image 43693 6.png"
                />
                <Image
                  style={{
                    marginTop: "300px",
                    marginLeft: "10px",
                    width: screenSize === "tablet" ? "60px" : "",
                  }}
                  width={120}
                  height={120}
                  alt=""
                  src="/whitegirl.png"
                />
                <Image
                  style={{
                    marginTop: "300px",
                    marginLeft: "10px",
                    width: screenSize === "tablet" ? "60px" : "",
                  }}
                  width={120}
                  height={120}
                  alt=""
                  src="/image 43695 (3).png"
                />
              </Stack>
            </Stack>
          </SwiperSlide>

          <SwiperSlide>
            <Stack direction={"row"}>
              <div
                style={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/devj4jofj/image/upload/v1695637223/Pi7_Tool_image_43695_3_zbuazu.jpg)",
                  height: "420px",
                  width:
                    screenSize === "mobile"
                      ? "300px"
                      : screenSize === "tablet"
                      ? "300px"
                      : screenSize === "desktop"
                      ? "420px"
                      : "",
                  backgroundRepeat: "no-repeat",
                  flexWrap: "nowrap",
                }}
              >
                <MotionTypography
                  variant="h6"
                  sx={{
                    color: "var(--White, #FFF)",
                    fontFamily: "Helvetica",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "128%",
                    textTransform: "capitalize",
                    paddingTop: "300px",
                    paddingLeft: "20px",
                  }}
                >
                  Sanchali Khanna
                </MotionTypography>
                <MotionTypography
                  variant="body1"
                  sx={{
                    color: "var(--White, #FFF)",
                    fontFamily: "Helvetica",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "128%",
                    textTransform: "capitalize",
                    paddingLeft: "20px",
                  }}
                >
                  Senior Engineer
                </MotionTypography>
                <MotionTypography
                  variant="body1"
                  sx={{
                    color: "var(--White, #FFF)",
                    fontFamily: "Helvetica",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "128%",
                    textTransform: "capitalize",
                    paddingLeft: "20px",
                    alignSelf: "stretch",
                  }}
                >
                  Participated in IPH-Triveni Program & helped 200+ individuals.
                </MotionTypography>
              </div>
              <Stack display={screenSize === "mobile" ? "none" : "block"}>
                <Image
                  style={{
                    marginTop: "300px",
                    marginLeft: "10px",
                    width: screenSize === "tablet" ? "60px" : "",
                  }}
                  width={120}
                  height={120}
                  alt=""
                  src="/image 43694.png"
                />
                <Image
                  style={{
                    marginTop: "300px",
                    marginLeft: "10px",
                    width: screenSize === "tablet" ? "60px" : "",
                  }}
                  width={120}
                  height={120}
                  alt=""
                  src="/image 43693 6.png"
                />
                <Image
                  style={{
                    marginTop: "300px",
                    marginLeft: "10px",
                    width: screenSize === "tablet" ? "60px" : "",
                  }}
                  width={120}
                  height={120}
                  alt=""
                  src="/whitegirl.png"
                />
              </Stack>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </Stack>
    </SectionWrapper>
  );
};

export default HerosSection;
