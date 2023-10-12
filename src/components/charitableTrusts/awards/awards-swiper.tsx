"use client";
import { Navigation } from "swiper/modules";
import { MotionVariantProps } from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Body1 } from "@/styles/theme/components/typography.fontvariant";
import { Stack, stackClasses, Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import cup1 from "@/components/charitableTrusts/images/cup1.png";
import cup2 from "@/components/charitableTrusts/images/cup2.png";
import cup3 from "@/components/charitableTrusts/images/cup3.png";
import cup4 from "@/components/charitableTrusts/images/cup4.png";
import React from "react";
import { alpha } from "@mui/material/styles";
import EnhancedSwiper from "@/commonComponents/enhanced-swiper";
import { MaterialImage } from "@/commonComponents/material-components";
import SwiperNavigationButton from "@/commonComponents/swiper-navigation-button";

const AwardsSwiper = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.darkToLight,
        },
        id: "awards",
      }}
      SectionHeaderProps={{
        isArrow: true,
        title: "Jamnalal Bajaj Awards",
        TitleTypographyProps: {
          variant: "h1",
        },
        description:
          "Founded in 1977, the Jamnalal Bajaj Foundation established four awards to promote Jamnalal Bajaj's ideals. These annual awards recognize individuals dedicated to grassroots inclusive development in alignment with Gandhi's principles. The awards include three National and one International category.",
        DescriptionTypographyProps: {
          fontSize: Body1,
          maxWidth: 867,
          mx: "auto",
        },
        LinkProps: {
          variant: "contained",
          color: "secondary",
          children: "Apply Now",
        },
        mb: { xs: 6, md: 3 },
      }}
    >
      <EnhancedSwiper
        slidesPerView={"auto"}
        SlideWrapperProps={{
          sx: {
            width: 310,
            mr: 3,
            alignSelf: "center",
          },
        }}
        sx={{
          pt: { xs: 6, md: 7 },
          overflow: { xs: "visible", xxl: "hidden" },
        }}
        SlideComponent={AwardCard}
        data={awardsData}
        navigation={{
          enabled: true,
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        modules={[Navigation]}
        Slots={{
          ContainerEndChildren: (
            <SwiperNavigationButton
              display={{
                xs: "flex",
                md: "none",
              }}
              mt={{ xs: 5, md: 6 }}
              alignSelf={{ xs: "center", md: "flex-end" }}
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
    </SectionWrapper>
  );
};

export default AwardsSwiper;

interface AwardCardProps {
  imageUrl: StaticImageData | string;
  title: string;
  subTitle: string;
}

const AwardCard = (props: AwardCardProps) => {
  const { imageUrl, title, subTitle } = props;
  return (
    <Stack
      position={"relative"}
      alignItems={"center"}
      width={1}
      sx={{
        [`.${stackClasses.root}`]: {
          bgcolor: alpha("#fff", 0.1),
          transition: "all .3s ease-out",
        },
        "&:hover": {
          color: (theme) => theme.palette.primary.main,
          [`.${stackClasses.root}`]: {
            bgcolor: alpha("#fff", 1),
          },
          img: {
            transform: "scale(1.3)",
            transformOrigin: "bottom",
          },
        },
      }}
    >
      <MaterialImage
        src={imageUrl}
        alt="awards"
        width={92}
        height={209}
        sx={{
          width: { xs: 79, md: 94 },
          height: { xs: 169, md: 209 },
          mb: "-12%",
          zIndex: 1,
          transform: "scale(1)",
          transition: "all .3s ease-out",
        }}
      />
      <Stack
        p={3}
        pt={8}
        rowGap={2}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        minHeight={207}
      >
        <Typography variant="h6" fontSize={"18px !important"}>
          {title}
        </Typography>
        <Typography fontSize={"16px !important"}>{subTitle}</Typography>
      </Stack>
    </Stack>
  );
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
      duration: 0.6,
    },
  },
};

const awardsData = [
  {
    imageUrl: cup1,
    title: "CONSTRUCTIVE WORK",
    subTitle:
      "Recognizes contributions in the field of constructive work focussing on any of the eighteen development areas.",
  },
  {
    imageUrl: cup2,
    title: "WOMEN & CHILD WELFARE",
    subTitle:
      "Commends women for their contribution towards the development & welfare of women and children.",
  },
  {
    imageUrl: cup4,
    title: "SCIENCE & TECHNOLOGY",
    subTitle:
      "Felicitates the contributions in the application of science and technology for rural and tribal development.",
  },
  {
    imageUrl: cup3,
    title: "INTERNATIONAL",
    subTitle:
      "Honours individual foreign nationals for propagating Gandhian principles outside India.",
  },
];

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

interface ButtonsProps {
  disablePrev: boolean;
  disableNext: boolean;
}
