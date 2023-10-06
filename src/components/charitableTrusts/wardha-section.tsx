"use client";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";

import SectionWrapper from "@/commonComponents/section-wrapper";
import {
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import { H5_1, Body1 } from "@/styles/theme/components/typography.fontvariant";

import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import Balamandir from "./images/Balamandir.png";
import Bajajwadi from "./images/Bajajwadi.png";
import MaharogiSevaSamiti from "./images/MaharogiSevaSamiti.png";
import EnhancedSwiper from "@/commonComponents/enhanced-swiper";
import SwiperNavigationButton from "@/commonComponents/swiper-navigation-button";
import InfoSlides from "@/commonComponents/cards/info-slides";
import { staggerTextChildrenLowOpacity } from "@/commonComponents/animations";

const Wardha = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) =>
            `${theme.palette.gradient.darkOverlay}, url(https://res.cloudinary.com/dspbnevuo/image/upload/v1695902886/Frame_1171280671_1_of4tnp.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        },
      }}
      SectionHeaderProps={{
        title: "Wardha - A sanctuary of hope & change",
        description:
          "A home to Jamnalal Bajaj and top political leaders including Mahatma Gandhi, Wardha has been a witness to many events of constructive, social, national and historical significance.",
        TitleTypographyProps: {
          variant: "h3",
        },
        DescriptionTypographyProps: {
          fontSize: Body1,
          maxWidth: 738,
          variants: staggerTextChildrenLowOpacity(0.8),
        },
        LinkProps: {
          href: "/",
        },
        mb: { xs: 7, md: 9 },
      }}
    >
      <EnhancedSwiper
        slidesPerView={"auto"}
        SlideWrapperProps={{
          sx: {
            width: { xs: 301, lg: 421 },
            mr: 3,
          },
        }}
        sx={{
          overflow: { xs: "visible", xxl: "hidden" },
        }}
        navigation={{
          enabled: true,
          nextEl: ".wardha-swiper-next",
          prevEl: ".wardha-swiper-prev",
        }}
        modules={[Navigation]}
        SlideComponent={InfoSlides}
        SlideComponentProps={{
          CardWrapperProps: {
            rowGap: 2,
            direction: "column",
          },
          ImageProps: {
            width: 421,
            height: 310,
            sx: { width: "100%", height: "100%" },
          },
          TagProps: {
            bgcolor: "#DADADA",
            color: "#575756",
          },
        }}
        data={data}
        Slots={{
          ContainerStartChildren: (
            <Stack
              direction='row'
              alignItems={"center"}
              justifyContent={"space-between"}
              mb={{ xs: 3, md: 6 }}
            >
              <MotionTypography variant='h3' fontSize={H5_1}>
                Our CONTRIBUTIONS
              </MotionTypography>
              <SwiperNavigationButton
                display={{
                  xs: "none",
                  md: "flex",
                }}
                PrevButtonProps={{
                  className: "wardha-swiper-prev",
                }}
                NextButtonProps={{
                  className: "wardha-swiper-next",
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
                className: "wardha-swiper-prev",
              }}
              NextButtonProps={{
                className: "wardha-swiper-next",
              }}
            />
          ),
        }}
      />
    </SectionWrapper>
  );
};

export default Wardha;

const data = [
  {
    img: Balamandir,
    title: "Jamnalal Bajaj Balmandir",
    description:
      "Started in 1938, this organisation since then has been successfully fulfilling its objective of taking care of the holistic development of the children",
  },
  {
    img: Bajajwadi,
    title: "Bajajwadi",
    description:
      "Bajajwadi at Wardha had a lot happening within its four walls. It was the meeting place for Gandhian ‘revolutionaries’,",
  },
  {
    img: MaharogiSevaSamiti,
    title: "Maharogi Seva Samiti",
    description:
      "Maharogi Seva Samiti (MSS) at Dattapur was the first indigenous leprosy care centre of India established in Wardha in 1936.",
  },
];

const staggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.5,
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

const StaggerImage: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "-50%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
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
