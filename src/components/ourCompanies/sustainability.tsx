"use client";
import { Divider, Stack } from "@mui/material";
import { Theme } from "@mui/material/styles";

import SectionWrapper from "@/commonComponents/section-wrapper";
import {
  MotionImage,
  MotionStack,
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import useMediaQuery from "@mui/material/useMediaQuery";

import Emission from "./images/Emission.png";
import supplyChain from "./images/supplyChain.png";
import solar from "./images/solar.png";
import sustain from "./images/sustain.png";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import EnhancedSwiper from "@/commonComponents/enhanced-swiper";
import { H5_1 } from "@/styles/theme/components/typography.fontvariant";
import SwiperNavigationButton from "@/commonComponents/swiper-navigation-button";
import { Navigation } from "swiper/modules";
import { Fragment } from "react";
import InfoSlides from "@/commonComponents/cards/info-slides";
import line from "@c/home/images/Line 1322.svg";
import { MaterialImage } from "@/commonComponents/material-components";
import { motion } from "framer-motion";
import {
  staggerArrowChildren,
  staggerDivArrow,
  staggerStackChildren,
  staggerTextChildren,
  staggerTextChildrenLowOpacity,
} from "@/commonComponents/animations";

// Main component Sustainability

const Sustainability = () => {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  return (
    <SectionWrapper
      SectionProps={{
        id: "sustainability",
        sx: {
          background: (theme) =>
            `${theme.palette.gradient.darkOverlay}, url(${sustain.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        },
      }}
      SectionHeaderProps={{
        title: "Sustainability",
        TitleTypographyProps: {
          variant: "h3",
        },
        description:
          "At Bajaj Auto, our operations are not just revenue-focused. We also dedicate ourselves to achieving a balance between our business and environmental goals.",
        DescriptionTypographyProps: {
          fontSize: "18px",
          maxWidth: 716,
          mt: "16px !important",
          variants: staggerTextChildrenLowOpacity(0.8),
        },
      }}
    >
      <Grid2
        container
        justifyContent={{ xs: "space-between", lg: "space-around" }}
        rowGap={3}
        component={motion.div}
        variants={staggerDivArrow(0.5)}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        {gridData.map((item, idx) => (
          <Fragment key={idx}>
            <Grid2
              width={{ xs: 0.5, lg: "max-content" }}
              component={motion.div}
              variants={staggerStackChildren}
            >
              <MotionStack
                rowGap={1}
                width={{ xs: 1, lg: "max-content" }}
                variants={staggerStackChildren}
              >
                <MotionTypography
                  variant='body2'
                  fontSize={"18px !important"}
                  variants={staggerTextChildren}
                >
                  {item.title}
                </MotionTypography>
                <MotionTypography
                  variant='body2'
                  variants={staggerTextChildrenLowOpacity(0.68)}
                >
                  {item.subtitle}
                </MotionTypography>
              </MotionStack>
            </Grid2>
            {idx !== gridData.length - 1 && (
              <Grid2
                sx={{
                  display: matches ? "none" : "block",
                }}
                component={motion.div}
                variants={staggerArrowChildren}
              >
                <MaterialImage
                  src={line}
                  alt=''
                  sx={{
                    height: 51,
                    display: { xs: "none", md: "block" },
                  }}
                />
              </Grid2>
            )}
          </Fragment>
        ))}
      </Grid2>
      <Stack direction='row' mt={{ xs: 7, md: 12 }} width={1}>
        <EnhancedSwiper
          slidesPerView={"auto"}
          SlideWrapperProps={{
            sx: {
              width: { xs: 341, lg: 421 },
              mr: { xs: 2, md: 3 },
            },
          }}
          navigation={{
            enabled: true,
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          modules={[Navigation]}
          SlideComponent={InfoSlides}
          SlideComponentProps={(index) => ({
            ImageProps: {
              sx: { width: 120, height: 120 },
            },
            initial: {
              opacity: 0,
              y: "100%",
            },
            whileInView: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: index * 0.5,
              },
            },
            viewport: {
              once: true,
            },
          })}
          sx={{
            overflow: { xs: "visible", xxl: "hidden" },
          }}
          data={ourMeasuresdata}
          Slots={{
            ContainerStartChildren: (
              <Stack
                direction='row'
                alignItems={"center"}
                justifyContent={"space-between"}
                mb={{ xs: 3, md: 6 }}
              >
                <MotionTypography variant='h3' fontSize={H5_1}>
                  Our Measures
                </MotionTypography>
                <SwiperNavigationButton
                  display={{
                    xs: "none",
                    md: "flex",
                  }}
                  PrevButtonProps={{
                    className: "swiper-prev",
                  }}
                  NextButtonProps={{
                    className: "swiper-next",
                  }}
                />
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
                  className: "swiper-prev",
                }}
                NextButtonProps={{
                  className: "swiper-next",
                }}
              />
            ),
          }}
        />
      </Stack>
    </SectionWrapper>
  );
};

export default Sustainability;

//  Carousel Data
const ourMeasuresdata = [
  {
    img: Emission,
    title: "Emissions",
    description:
      "Emissions produced by our automobiles has reduced by 55% compared to 2009.",
  },
  {
    img: supplyChain,
    title: "Supply Chain",
    description:
      "Nearly 600 suppliers, dealers and distributors trained in & assessed on sustainability.",
  },
  {
    img: solar,
    title: "Renewable Energy",
    description:
      "We adopted a 2 MWp Rooftop Solar Plant to achieve 50% renewable electricity by 2025.",
  },
];

const gridData = [
  {
    title: "Gold Standard in Governance",
    subtitle: "by 2024",
  },
  {
    title: "Water Positive",
    subtitle: "by 2027",
  },
  {
    title: "Carbon Neutral",
    subtitle: "by 2040",
  },
  {
    title: "100% Renewable Energy",
    subtitle: "by 2050",
  },
];
