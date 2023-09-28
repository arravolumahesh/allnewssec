"use client";
import { Box, Divider, Stack } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { Theme, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";

import SectionWrapper from "@/commonComponents/section-wrapper";
import {
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import useMediaQuery from "@mui/material/useMediaQuery";

import sustain from "./images/sustain.png";

import Emission from "./images/Emission.png";
import supplyChain from "./images/supplyChain.png";
import solar from "./images/solar.png";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import EnhancedSwiper from "@/commonComponents/enhanced-swiper";
import { H5_1 } from "@/styles/theme/components/typography.fontvariant";
import SwiperNavigationButton from "@/commonComponents/swiper-navigation-button";
import { Navigation } from "swiper/modules";

// Main component  Sustainability

const Sustainability = () => {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: "black",
          // background: `url(${sustain.src})`,
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
        },
      }}
    >
      <Grid2
        container
        justifyContent={{ xs: "space-between", md: "space-around" }}
        rowGap={3}
      >
        {gridData.map((item, idx) => (
          <>
            <Grid2 key={idx} width={{ xs: 0.5, md: "max-content" }}>
              <Stack rowGap={1} width={{ xs: 1, md: "max-content" }}>
                <MotionTypography
                  variant='body2'
                  fontSize={"18px !important"}
                  // variants={staggerTextChildren}
                >
                  {item.title}
                </MotionTypography>
                <MotionTypography
                  variant='body2'
                  sx={{ opacity: 0.68 }}
                  // variants={staggerTextChildren}
                  // sx={useStyles.bodySmall}
                >
                  {item.subtitle}
                </MotionTypography>
              </Stack>
            </Grid2>
            {idx !== gridData.length - 1 && (
              <Grid2
                sx={{
                  display: matches ? "none" : "block",
                }}
              >
                <Divider
                  orientation='vertical'
                  sx={{
                    height: "100%",
                  }}
                />
              </Grid2>
            )}
          </>
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

interface InfoSlidesProps {
  img: StaticImageData | string;
  title: string;
  description: string;
}

const InfoSlides = (props: InfoSlidesProps) => {
  const { img, title, description } = props;
  return (
    <Stack
      direction='row'
      columnGap={2}
      alignItems={"stretch"}
      // component={motion.div}
      // viewport={{ once: true }}
    >
      <Image src={img} alt={title} width={120} height={120} />
      <Stack
        rowGap={2}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        // component={motion.div}
        // variants={constrolButton}
        // initial={"initial"}
        // whileInView={"animate"}
        // viewport={{ once: true }}
      >
        <Box bgcolor={alpha("#fff", 0.2)} p={"6px 16px"} fontSize={"14px"}>
          {title}
        </Box>
        <MotionTypography variant='body1'>{description}</MotionTypography>
      </Stack>
    </Stack>
  );
};

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

// Animation Props

const staggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.5,
    },
  },
};

const staggerheading: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const staggerSubHeading: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "-50%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
    },
  },
};

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

const staggerTextChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "40%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const staggerChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "150%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const staggerButton: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};
