"use client";

import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import { MotionVariantProps } from "@/commonComponents/motion-components";
import React from "react";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { useMediaQuery, Stack, Button } from "@mui/material";
import { helvetica } from "@/app/font";
import womens from "@/components/ourCompanies/images/womens.png";
import childrens from "@/components/ourCompanies/images/childrens.png";
import { MotionTypography } from "@/commonComponents/motion-components";
import { MaterialImage } from "@/commonComponents/material-components";
import SwiperNavigationButton from "@/commonComponents/swiper-navigation-button";

const useStyles = {
  imageContainer: {
    position: "relative",
    overflow: "hidden",
  },
  hoverableImage: {
    width: "100%",
    height: "auto",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
      filter: "brightness(0.5)",
    },
  },
  buttonOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10px 20px",
    border: "none",
    color: "white",
    cursor: "pointer",
    transition: "opacity 0.3s ease",
    opacity: 0,
    "&:hover": {
      opacity: 1,
    },
  },
};

const CaseStudies = () => {
  interface DetailsOfLargerDevices {
    imageUrl: string;
    tag: string;
    heading: string;
    subheading: string;
  }
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
  const isTabletOrLarger = useMediaQuery((theme: any) =>
    theme.breakpoints.up("md")
  );

  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  const slidesPerView = isMobile ? 1 : 2;
  return (
    <SectionWrapper
      sx={{
        backgroundColor: "rgba(234, 234, 234, 1)",
        padding: "96px 64px",
        textAlign: "center",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "auto",
        }}
      >
        <MotionTypography
          variant="h3"
          sx={{
            color: "var(--primary-blue, #005DAC)",
            textOverflow: "ellipsis",
            fontSize: "48px",
            fontStyle: "normal",
            lineHeight: "128%",
          }}
          variants={staggerChildren}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          OUR CASE STUDIES
        </MotionTypography>

        {isTabletOrLarger && (
          <SwiperNavigationButton
            style={{
              color: "rgba(0, 93, 172, 1)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          />
        )}
      </Stack>
      {/* Adding the image container */}

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          paddingTop: "30px",
          justifyContent: "flex-start",
        }}
      >
        {/*  */}
        <Swiper
          freeMode={true}
          pagination={false}
          navigation={!isMobile}
          slidesPerView={slidesPerView}
          spaceBetween={24}
          modules={[Pagination, Navigation, FreeMode]}
        >
          {DetailsOfLargerDevices.map((element, index) => (
            <SwiperSlide key={index}>
              <Stack key={index}>
                <MaterialImage
                  src={element.imageUrl}
                  alt="childerns"
                  sx={{
                    width: { xs: "310px", md: "643px" },
                    height: { xs: "240px", md: "310px" },
                  }}
                />
                <Stack
                  sx={{
                    display: "flex",
                    gap: "16px",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <MotionTypography
                    variant="body1"
                    sx={{
                      color: "#fff",
                      fontFamily: helvetica,
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "200",
                      background: "var(--primary-light-grey, #DADADA);",
                      padding: "5px",
                    }}
                    variants={staggerChildren}
                    initial={"initial"}
                    whileInView={"animate"}
                    viewport={{ once: true }}
                  >
                    {element.tag}
                  </MotionTypography>
                  <MotionTypography
                    variant="body1"
                    sx={{
                      color: "var(--primary-blue, #005DAC)",
                      fontFamily: helvetica,
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: { xs: "20px", md: "24px" },
                      lineHeight: "128%",
                      textAlign: "start",
                    }}
                    variants={staggerChildren}
                    initial={"initial"}
                    whileInView={"animate"}
                    viewport={{ once: true }}
                  >
                    {element.heading}
                  </MotionTypography>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <MotionTypography
                      variant="body1"
                      sx={{
                        color: "var(--primary-blue, #005DAC)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: { xs: "16px", md: "18px" },
                        lineHeight: "128%",
                        width: { xs: "310px", md: "643px" },
                        textAlign: "start",
                      }}
                    >
                      {element.subheading}
                    </MotionTypography>
                  </Stack>
                </Stack>
                {isMobile && (
                  <Button
                    href="/"
                    sx={{
                      color: "rgba(0, 93, 172, 1)",
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    View Case Study {">"}
                  </Button>
                )}
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
      {/* </Swiper> */}

      {/* Mobile view button Arrow  */}
      {isMobile && (
        <SwiperNavigationButton
          style={{
            color: "rgba(0, 93, 172, 1)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        />
      )}
      {/* </SwiperNavigationButton> */}
    </SectionWrapper>
  );
};

export default CaseStudies;

const staggerChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "150%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
