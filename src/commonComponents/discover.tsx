"use client";
import React from "react";
import { MotionStack } from "@/commonComponents/motion-components";
import SectionWrapper, { basePx } from "@/commonComponents/section-wrapper";
import { Stack } from "@mui/material";
import EnhancedSwiper, {
  EnhancedSwiperProps,
} from "@/commonComponents/enhanced-swiper";
import { Autoplay } from "swiper/modules";
import {
  MaterialImage,
  MaterialLink,
} from "@/commonComponents/material-components";
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

interface DiscoverProps {
  title: string;
  link: string;
  href: string;
  ImageData: {
    img: StaticImageData | string;
  }[];
}

const Discover = (props: DiscoverProps) => {
  const { title, link, href, ImageData } = props;
  return (
    <SectionWrapper
      SectionProps={{
        bgcolor: "primary.500",
        id: "gallery",
      }}
      SectionHeaderProps={{
        title: title,
        TitleTypographyProps: {
          variant: "h3",
        },
        pl: { ...basePx, xs: 8 },
        pr: { ...basePx, xs: 8 },
        mb: { xs: 5, md: 6 },
      }}
      ContainerProps={{
        pl: 0,
        pr: 0,
      }}
    >
      <Stack rowGap={{ xs: 2, m: 3 }}>
        <EnhancedSwiper
          data={ImageData}
          SlideComponent={ImageSlics}
          {...swiperProps}
        />
      </Stack>
      <Stack display={"flex"} flexDirection={"row"}>
        <MotionStack
          direction={{ xs: "column-reverse", md: "row" }}
          rowGap={3}
          mt={{ xs: 5, md: 7 }}
          px={basePx}
          width={1}
          alignItems={"center"}
          justifyContent={"space-between"}
          variants={bottomTextStagger(0)}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <MaterialLink
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: H6_2,
              textDecoration: "none",
            }}
            href={href}
            variants={textStaggerChildren}
          >
            {link}
            <ArrowForwardIos sx={{ ml: "8px" }} fontSize='small' />
          </MaterialLink>
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
                variant='contained'
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
        </MotionStack>
      </Stack>
    </SectionWrapper>
  );
};

export default Discover;

interface ImageSlicsProps {
  img: StaticImageData | string;
}

const ImageSlics = (props: ImageSlicsProps) => {
  const { img } = props;
  return (
    <MaterialImage
      src={img}
      alt=''
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
