"use client";

import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import { MotionButton, MotionVariantProps } from "@/commonComponents/motion-components";
import React, { useState } from "react";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { useMediaQuery, Stack, Button } from "@mui/material";
import { helvetica } from "@/app/font";
import womens from "@/components/ourCompanies/images/womens.png";
import childrens from "@/components/ourCompanies/images/childrens.png";
import { MotionTypography } from "@/commonComponents/motion-components";
import { MaterialImage } from "@/commonComponents/material-components";
import SlideButtons from "../intermediate/swiper/swiperButton";
import AnimatedButton from "@/commonComponents/animated-button";
import { common } from "@mui/material/colors";
import theme from "@/styles/theme";
import { Body1, Caption, H3, H6_3 } from "@/styles/theme/components/typography.fontvariant";
import Link from "next/link";
import SvgIconArrow from "../intermediate/icons/arrowIcon";

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
        "Helping students learn digitally in order to keep them future and employment ready.",
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
        "Helping students learn digitally in order to keep them future and employment ready. ",
    },
    {
      imageUrl: childrens,
      tag: "IPH-Triveni Program",
      heading: "Digital Skilling for Youth",
      subheading:
        "Helping students learn digitally in order to keep them future and employment ready. ",
    },
  ];
  const [disablePrev, setDisabledPrev] = useState<boolean>(true);
  const [disableNext, setDisabledNext] = useState<boolean>(false);
  const isTabletOrLarger = useMediaQuery((theme: any) =>
    theme.breakpoints.up("md")
  );

  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  const slidesPerView = isTabletOrLarger ? 2 : isMobile ? 'auto' : 'auto';
  return (
    <SectionWrapper
      sx={{
        backgroundColor: "rgba(234, 234, 234, 1)",
        padding: "96px 64px",
        textAlign: "center",
      }}
    >
      {/* <Stack
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
      </Stack> */}
      {/* Adding the image container */}

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",          
          justifyContent: "flex-start",
          "& .swiper": {
            width: "100%",
          },
          '& .swiper-slide':{
            width:'auto'
          }
        }}
      >
        <Swiper          
          pagination={false}
          navigation={!isMobile}
          slidesPerView={slidesPerView}
          spaceBetween={24}
          modules={[Pagination, Navigation]}
          onSlideChange={(swiper) => {
            setDisabledPrev(swiper.isBeginning);
            setDisabledNext(swiper.isEnd);
          }}
        >
          <Stack
            slot="container-start"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mb:{md:6,xs:5}
              // mt: { xs: "30px" },
            }}
          >
            <MotionTypography
                variant="h3"
                sx={{
                  color: "primary.main",
                  textOverflow: "ellipsis",
                  fontSize: H3,
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
              {!isMobile && <SlideButtons disablePrev={disablePrev} disableNext={disableNext} /> }
          </Stack>
          {isMobile && <Stack slot="container-end"><SlideButtons disablePrev={disablePrev} disableNext={disableNext} /></Stack>  }
          {DetailsOfLargerDevices.map((element, index) => (
            <SwiperSlide key={index}>
              <Stack 
                key={index}
                sx={{width: { xs:300, md: 1 }}}
                >
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
                      color: 'grey.600',
                      fontSize: Caption,
                      fontWeight: "400",
                      background: "var(--primary-light-grey, #DADADA)",
                      padding: "5px",
                      mt:2
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
                      fontWeight: "400",
                      fontSize: H6_3,
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
                        fontSize: Body1,
                        width: { xs: "310px", md: "643px" },
                        textAlign: "start",
                      }}
                    >
                      {element.subheading}
                    </MotionTypography>
                  </Stack>
                </Stack>
                {isMobile && (
                  <MotionButton variant="text" sx={{px:0}} endIcon={<SvgIconArrow />}>
                    View Case Study
                  </MotionButton>
                )}
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
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
