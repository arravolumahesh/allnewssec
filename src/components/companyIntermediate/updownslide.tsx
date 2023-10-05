"use client";
import EnhancedSwiper, {
    EnhancedSwiperProps,
  } from "@/commonComponents/enhanced-swiper";
import { MaterialImage } from "@/commonComponents/material-components";

import group2 from "./image/Rectangle 25147.png";
import group3 from "./image/Rectangle 25144.png";
import group5 from "@/components/ourCompanies/images/group5.png";
import group7 from "@/components/ourCompanies/images/group7.png";
import group8 from "@/components/ourCompanies/images/group8.png";
import { Box } from "@mui/material";
import { StaticImageData } from "next/image";
import { Autoplay } from "swiper/modules";

const imageData = [
{ img: group2 },
{ img: group3 },
{ img: group2 },
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

const swiperProps: Omit<EnhancedSwiperProps, "data" | "SlideComponent"> = {
    slidesPerView: "auto",
    speed: 5000,
    direction:'vertical',
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
        height:"max-content",       
      },
    },
    sx: {
      width: "100%",
      height:{
        md:522,
        xs:290
      },
      "& .swiper-wrapper": {
        height:{
            md:522,
            xs:290
          },
        transitionTimingFunction: "linear !important",
      },
    },
  };

  
  const ImageSlies = (props: ImageSliesProps) => {
    const { img } = props;
    return (
      <MaterialImage
        src={img}
        alt=""
        width={421}
        height={267}
        sx={{
          // width: { xs: 200, md: 421 },
          // height: { xs: 164, md: 247 },
        //   width: { xs: 250, md: 421 },
          height: { xs: 230, md: 267 },
          objectFit: "cover",
        }}
      />
    );
  };

const UpdownSlide = () => {
    return (
        <>
        <Box sx={{display:'flex',gap:1}}>
            <EnhancedSwiper
            data={imageData}
            SlideComponent={ImageSlies}
            {...swiperProps}
            />

            <EnhancedSwiper
            data={imageData}
            SlideComponent={ImageSlies}
            {...swiperProps}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
            />
        </Box>
        </>
    )
}

export default UpdownSlide;