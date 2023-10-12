"use client";
import React from "react";
import {
  MotionLink,
  MotionLinkProps,
  MotionStack,
} from "@/commonComponents/motion-components";
import SectionWrapper, { basePx } from "@/commonComponents/section-wrapper";
import EnhancedSwiper, {
  EnhancedSwiperProps,
} from "@/commonComponents/enhanced-swiper";
import { Autoplay } from "swiper/modules";
import { MaterialImage } from "@/commonComponents/material-components";
import { StaticImageData } from "next/image";
import { ArrowForwardIos } from "@mui/icons-material";
import { H6_2 } from "@/styles/theme/components/typography.fontvariant";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/commonComponents/social-icons";
import {
  bottomTextStagger,
  iconStagger,
  iconStaggerChildren,
  textStaggerChildren,
} from "@/commonComponents/animations";

export interface DiscoverSectionProps {
  title: string;
  linkProps: MotionLinkProps; // Todo update in other components
  ImageData: {
    img: StaticImageData | string;
  }[];
}

const DiscoverSection = (props: DiscoverSectionProps) => {
  const { title, linkProps, ImageData } = props;
  return (
    <SectionWrapper
      SectionProps={{
        bgcolor: "primary.500",
        id: "gallery",
      }}
      color={"secondary.main"}
      SectionHeaderProps={{
        title: title,
        TitleTypographyProps: {
          variant: "h3",
        },
      }}
    >
      <EnhancedSwiper
        data={ImageData}
        SlideComponent={ImageSlics}
        Slots={{
          ContainerEndChildren: (
            <>
              <MotionLink
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: H6_2,
                  textDecoration: "none",
                }}
                disableRipple
                variant={"text"}
                color={"inherit"}
                variants={textStaggerChildren}
                endIcon={<ArrowForwardIos fontSize="inherit" />}
                {...linkProps}
              />
              <MotionStack
                direction={"row"}
                gap={{ xs: 2, md: 4 }}
                variants={iconStagger}
              >
                {[
                  FacebookIcon,
                  TwitterIcon,
                  YouTubeIcon,
                  InstagramIcon,
                  LinkedInIcon,
                ].map((Icon, idx) => (
                  <Icon
                    key={idx}
                    variant="contained"
                    SvgIconProps={{
                      sx: {
                        bgcolor: "common.white",
                        width: { xs: 32, md: 48 },
                        height: { xs: 32, md: 48 },
                      },
                    }}
                    variants={iconStaggerChildren}
                  />
                ))}
              </MotionStack>
            </>
          ),
          ContainerEndProps: {
            direction: { xs: "column-reverse", md: "row" },
            rowGap: 3,
            mt: { xs: 5, md: 7 },
            px: basePx,
            width: 1,
            alignItems: "center",
            justifyContent: "space-between",
            variants: bottomTextStagger(0),
            initial: "initial",
            whileInView: "animate",
            viewport: { once: true },
          },
        }}
        {...swiperProps}
      />
    </SectionWrapper>
  );
};

export default DiscoverSection;

interface ImageSlicsProps {
  img: StaticImageData | string;
}

const ImageSlics = (props: ImageSlicsProps) => {
  const { img } = props;
  return (
    <MaterialImage
      src={img}
      alt=""
      width={421}
      height={484}
      sx={{
        width: { xs: 250, md: 421 },
        height: { xs: 290, md: 484 },
        objectFit: "cover",
      }}
    />
  );
};

const swiperProps: Omit<EnhancedSwiperProps, "data" | "SlideComponent"> = {
  slidesPerView: "auto",
  speed: 5000,
  loop: true,
  modules: [Autoplay],
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  SlideWrapperProps: {
    sx: {
      width: "auto",
      mr: { xs: 2, md: 3 },
    },
  },
  sx: {
    overflow: {
      xs: "visible",
      wide: "hidden",
    },
    width: "100%",
    "& .swiper-wrapper": {
      transitionTimingFunction: "linear !important",
    },
  },
};
