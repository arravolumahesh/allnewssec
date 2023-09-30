"use client";
import React, { useState, useEffect } from "react";
import {
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Stack } from "@mui/material";

import { Button } from "@mui/material";
import Image from "next/image";

import ArrowGradient from "@cc/arrow-gradient";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import SlideButtons from "@/components/intermediate/swiper/swiperButton";

import boy1 from "@/components/ourCompanies/images/boy1.png";
import girl1 from "@/components/ourCompanies/images/girl1 .png";
import boy2 from "@/components/ourCompanies/images/boy2.png";
import girl2 from "@/components/ourCompanies/images/gril2.png";

interface ButtonsProps {
  disablePrev: boolean;
  disableNext: boolean;
}

const CuroselBttn = (prop: ButtonsProps) => {
  const { disableNext, disablePrev, ...rest } = prop;
  const swiper = useSwiper();
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "16px",
      }}
      component={motion.div}
      variants={constrolButton}
      initial={"initial"}
      whileInView={"animate"}
      viewport={{ once: true }}
    >
      <Button
        sx={{
          display: "flex",
          width: "48px",
          height: "48px",
          padding: "4px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          background: "rgba(255, 255, 255, 0.20)",
          border: "1px solid var(--White, #FFF)",
          opacity: disablePrev ? 0.5 : 0.9,
        }}
        onClick={() => swiper.slidePrev()}
        disabled={disablePrev}
        disableRipple
        disableTouchRipple
      >
        <NavigateBeforeIcon
          sx={{
            width: "30px",
            height: "30px",
            color: "#FFF",
          }}
        />
      </Button>
      <Button
        sx={{
          display: "flex",
          width: "48px",
          height: "48px",
          padding: "4px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          border: "1px solid var(--White, #FFF)",
          background: "rgba(255, 255, 255, 0.20)",
          opacity: disableNext ? 0.5 : 0.9,
        }}
        onClick={() => swiper.slideNext()}
        disabled={disableNext}
        disableRipple
        disableTouchRipple
      >
        <NavigateNextIcon
          sx={{
            width: "30px",
            height: "30px",
            color: "#FFF",
          }}
        />
      </Button>
    </Stack>
  );
};

const HerosSection = () => {
  const [disablePrev, setDisabledPrev] = useState<boolean>(true);
  const [disableNext, setDisabledNext] = useState<boolean>(false);
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
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: {
              xs: "center",
              sm: "flex-start",
            },
            alignItems: "center",
            alignSelf: "strech",
            width: "100%",
          }}
        >
          <Stack
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <ArrowGradient height={"301px"} />
          </Stack>
          <MotionTypography
            sx={{
              fontSize: {
                xs: "32px",
                sm: "48px",
              },
              width: {
                xs: "90%",
                sm: "50%",
              },
            }}
            variant="h4"
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
          modules={[Navigation, Pagination, FreeMode]}
          spaceBetween={screenSize === "mobile" ? 40 : 100}
          slidesPerView="auto"
          freeMode={true}
          navigation={true}
          pagination={false}
          loop={true}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
          onSlideChange={(swiper) => {
            setDisabledPrev(swiper.isBeginning);
            setDisabledNext(swiper.isEnd);
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignSelf: "strech",
            }}
          >
            <CuroselBttn disablePrev={disablePrev} disableNext={disableNext} />
          </Stack>
          <Stack>
            <SwiperSlide>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: {
                    xs: "flex-start",
                    sm: "center",
                  },
                  alignSelf: "strech",
                }}
              >
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
                        : "420px",
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
                    Participated in IPH-Triveni Program & helped 200+
                    individuals.
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
                    src={boy1}
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
                    src={girl2}
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
                    src={boy2}
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
                    Participated in IPH-Triveni Program & helped 200+
                    individuals.
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
                    src={girl2}
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
                    src={boy2}
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
                    src={girl1}
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
                    Participated in IPH-Triveni Program & helped 200+
                    individuals.
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
                    src={boy2}
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
                    src={girl1}
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
                    src={boy2}
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
                    Participated in IPH-Triveni Program & helped 200+
                    individuals.
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
                    src={girl1}
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
                    src={boy1}
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
                    src={girl2}
                  />
                </Stack>
              </Stack>
            </SwiperSlide>
          </Stack>
        </Swiper>
      </Stack>
    </SectionWrapper>
  );
};

export default HerosSection;

const constrolButton: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "40%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
    },
  },
};
