"use client";

import { Stack } from "@mui/material";
import SectionWrapper, { basePx } from "@/commonComponents/section-wrapper";

import group2 from "@/components/ourCompanies/images/group2.png";
import group3 from "@/components/ourCompanies/images/group3.png";
import group5 from "@/components/ourCompanies/images/group5.png";
import group7 from "@/components/ourCompanies/images/group7.png";
import group8 from "@/components/ourCompanies/images/group8.png";

import EnhancedSwiper, {
  EnhancedSwiperProps,
} from "@/commonComponents/enhanced-swiper";

import { StaticImageData } from "next/image";

import { MaterialImage } from "@/commonComponents/material-components";

import { Autoplay } from "swiper/modules";

const GallaryWall = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx:{
          backgroundColor:'white'
        }
      }}
      SectionHeaderProps={{
        title: "Gallery Wall",
        TitleTypographyProps: {
          variant: "h3",
          color: "primary.500",
        },        
        pl: { ...basePx, xs: 8 },
        pr: { ...basePx, xs: 8 },
        mb: { xs: 5, md: 6 },
      }}
    >
      <Stack rowGap={{ xs: 2, m: 3 }}>
        <EnhancedSwiper
          data={imageData}
          SlideComponent={ImageSlies}
          {...swiperProps}
        />
        {/* <EnhancedSwiper
          data={imageData}
          SlideComponent={ImageSlies}
          {...swiperProps}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
        /> */}
      </Stack>
    </SectionWrapper>
  );
};

export default GallaryWall;

const imageData = [
  { img: group2 },
  { img: group3 },
  { img: group5 },
  { img: group7 },
  { img: group8 },
  { img: group2 },
  { img: group3 },
  { img: group5 },
  { img: group7 },
  { img: group8 },
];

interface ImageSliesProps {
  img: StaticImageData | string;
}

const ImageSlies = (props: ImageSliesProps) => {
  const { img } = props;
  return (
    <MaterialImage
      src={img}
      alt=""
      width={421}
      height={247}
      sx={{
        // width: { xs: 200, md: 421 },
        // height: { xs: 164, md: 247 },
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
    width: "100%",
    "& .swiper-wrapper": {
      transitionTimingFunction: "linear !important",
    },
  },
};
