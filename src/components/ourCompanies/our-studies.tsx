"use client";
import { Navigation } from "swiper/modules";
import { MotionVariantProps } from "@/commonComponents/motion-components";
import React, { useState } from "react";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { useMediaQuery, Stack, Theme } from "@mui/material";
import womens from "@/components/ourCompanies/images/womens.png";
import childrens from "@/components/ourCompanies/images/childrens.png";
import { MotionTypography } from "@/commonComponents/motion-components";
import { MaterialImage } from "@/commonComponents/material-components";
<<<<<<< HEAD
import SlideButtons from "../intermediate/swiper/swiperButton";
import AnimatedButton from "@/commonComponents/animated-button";
import { common } from "@mui/material/colors";
import theme from "@/styles/theme";
import { Body1, H6_3 } from "@/styles/theme/components/typography.fontvariant";

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
  ];
  const [disablePrev, setDisabledPrev] = useState<boolean>(true);
  const [disableNext, setDisabledNext] = useState<boolean>(false);
  const isTabletOrLarger = useMediaQuery((theme: any) =>
    theme.breakpoints.up("md")
  );

  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  const slidesPerView = isTabletOrLarger ? 2 : isMobile ? 1 : 1;
=======
import { StaticImageData } from "next/image";
import EnhancedSwiper from "@/commonComponents/enhanced-swiper";
import { H6_1, H6_2 } from "@/styles/theme/components/typography.fontvariant";
import Link from "next/link";
import { ArrowForwardIos } from "@mui/icons-material";
import SwiperNavigationButton from "@/commonComponents/swiper-navigation-button";

const CaseStudies = () => {
>>>>>>> e22abe04bb2b6d42eb119c65924146e0fc4a9458
  return (
    <SectionWrapper
      SectionProps={{ id: "case-studies" }}
      color={"primary.main"}
    >
      <Stack width={1}>
        <EnhancedSwiper
          slidesPerView={"auto"}
          navigation={{
            enabled: true,
            nextEl: ".swiper-case-next",
            prevEl: ".swiper-case-prev",
          }}
<<<<<<< HEAD
          variants={staggerChildren}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          OUR CASE STUDIES
        </MotionTypography>
      </Stack>
      {/* Adding the image container */}

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          pt: "30px",
          justifyContent: "flex-start",
        }}
      >
        <Swiper
          freeMode={true}
          pagination={false}
          navigation={!isMobile}
          slidesPerView={slidesPerView}
          spaceBetween={24}
          modules={[Pagination, Navigation, FreeMode]}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "flex-start",
              alignItems: "flex-start",
              mt: { xs: "30px" },
            }}
          >
            <SlideButtons disablePrev={disablePrev} disableNext={disableNext} />
          </Stack>
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
                      color: common.white,
                      fontSize: "14px",
                      fontWeight: "200",
                      background: "var(--primary-light-grey, #DADADA)",
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
                  <AnimatedButton
                    href={"/"}
                    variant={"outlined"}
                    color={"inherit"}
                  >
                    Learn More
                  </AnimatedButton>
                )}
=======
          modules={[Navigation]}
          SlideWrapperProps={{
            sx: {
              width: { xs: 301, lg: 643 },
              mr: 3,
            },
          }}
          SlideComponent={CaseStudySlide}
          data={swiperData}
          Slots={{
            ContainerStartChildren: (
              <Stack
                direction='row'
                alignItems={"center"}
                justifyContent={"space-between"}
                mb={{ xs: 5, md: 6 }}
              >
                <MotionTypography variant='h3'>
                  Our Case Studies
                </MotionTypography>
                <SwiperNavigationButton
                  display={{
                    xs: "none",
                    md: "flex",
                  }}
                  PrevButtonProps={{
                    className: "swiper-case-prev",
                  }}
                  NextButtonProps={{
                    className: "swiper-case-next",
                  }}
                />
>>>>>>> e22abe04bb2b6d42eb119c65924146e0fc4a9458
              </Stack>
            ),
            ContainerEndChildren: (
              <SwiperNavigationButton
                mt={5}
                display={{
                  xs: "flex",
                  md: "none",
                }}
                alignSelf={"center"}
                PrevButtonProps={{
                  className: "swiper-case-prev",
                }}
                NextButtonProps={{
                  className: "swiper-case-next",
                }}
              />
            ),
          }}
        />
      </Stack>
    </SectionWrapper>
  );
};

export default CaseStudies;

interface CaseStudySlideProps {
  img: StaticImageData | string;
  tag: string;
  title: string;
  subTitle: string;
}

const CaseStudySlide = (props: CaseStudySlideProps) => {
  const { img, tag, title, subTitle } = props;
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <Stack
      sx={{
        cursor: "pointer",
        "&:after": {
          display: isMobile ? "none" : "flex",
          opacity: 0,
          content: '"VIEW CASE STUDY"',
          fontSize: H6_2,
          color: "white",
          width: 1,
          height: 310,
          position: "absolute",
          top: 0,
          left: 0,
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%)",
          alignItems: "center",
          justifyContent: "center",
          transition: "all .3s",
        },
        "&:hover": {
          "&:after": {
            opacity: 1,
          },
        },
      }}
      rowGap={2}
    >
      <MaterialImage
        src={img}
        alt='childerns'
        sx={{
          position: "relative",
          width: { xs: 310, md: 643 },
          height: { xs: 240, md: 310 },
        }}
      />
      <MotionTypography
        fontSize={"14px"}
        color={"grey.A400"}
        p={1.3}
        bgcolor={"#DADADA"}
        width={"max-content"}
      >
        {tag}
      </MotionTypography>
      <MotionTypography variant='body1' fontSize={H6_1}>
        {title}
      </MotionTypography>
      <MotionTypography variant='body1'>{subTitle}</MotionTypography>
      {isMobile && (
        <Link
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "18px",
            textDecoration: "none",
          }}
          href='/'
        >
          View Case Study{" "}
          <ArrowForwardIos sx={{ ml: "8px" }} fontSize='small' />
        </Link>
      )}
    </Stack>
  );
};

const swiperData = [
  {
    img: childrens,
    tag: "IPH-Triveni Program",
    title: "Digital Skilling for Youth",
    subTitle:
      "Helping students learn digitally in order to keep them future and employment ready. ",
  },
  {
    img: womens,
    tag: "IPH-Triveni Program",
    title: "Providing Vocational Training for Women in Maharashtra",
    subTitle:
      "Aiding women in growing skills that help them achieve financial independence through mindfully curated training programmes. ",
  },
  {
    img: childrens,
    tag: "IPH-Triveni Program",
    title: "Digital Skilling for Youth",
    subTitle:
      "Helping students learn digitally in order to keep them future and employment ready. ",
  },
  {
    img: womens,
    tag: "IPH-Triveni Program",
    title: "Providing Vocational Training for Women in Maharashtra",
    subTitle:
      "Aiding women in growing skills that help them achieve financial independence through mindfully curated training programmes. ",
  },
];

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
