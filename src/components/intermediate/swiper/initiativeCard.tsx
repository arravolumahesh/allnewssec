"use client";

import {
  MotionBox,
  MotionTypography,
} from "@/commonComponents/motion-components";
import companyImage from "../images/companyImage.svg";
import Image from "next/image";
import { useSwiperSlide } from "swiper/react";
import RoomIcon from "@mui/icons-material/Room";
import { Box } from "@mui/material";

interface props {
  data: {
    imageUrl: string;
    location: string;
    title: string;
    slug: string;
  };
  matches: boolean;
}

const InitiativeCard = (prop: props) => {
  const swiperSlide = useSwiperSlide();

  const item = {
    visible: "visible",
  };

  //   const variants = !prop.matches
  // ? {
  //     animate: {
  //       opacity: 1,
  //       scale: 1,
  // 			y: 0,
  //     },
  //     exit: {
  //       opacity: 1,
  //       scale: 1,
  // 			y: 500,
  //     },
  //   }
  // : {
  //     animate: {
  //       opacity: 1,
  //       scale: 1,
  //       y: 0,
  //     },
  //     exit: {
  //       opacity: 0,
  //       scale: 0.9,
  //       y: -10,
  //     },
  //   };

  return (
    <>
      <MotionBox
        initial={{
          x: !prop.matches ? (swiperSlide.isPrev ? "-40%" : "40%") : 0,
          opacity: !prop.matches ? 0 : 1,
        }}
        whileInView={{
          x: "0",
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        exit={{
          x: "-40%",
          opacity: 0,
        }}
        viewport={{
          margin: "0px 0px 0px 100px",
        }}
      >
        <Box
          sx={{
            pb: 2,
            overflow: "hidden",
            "& img": {
              transition: "all 0.3s ease-in-out",
              maxWidth: "100%",
              height: "auto",
              "&:hover": {
                transform: "scale(1.05)",
                transition: "all 0.3s ease-in-out",
              },
            },
          }}
        >
          <Image src={companyImage} alt="initiative image" />
        </Box>
        <MotionTypography
          variant="body1"
          color={"primary"}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.75,
            mb: 1,
          }}
        >
          <RoomIcon sx={{ width: { xs: "18px", md: "18px" } }} />{" "}
          {prop.data.location}
        </MotionTypography>
        <MotionTypography variant="h6" fontWeight={400} color={"primary"}>
          {prop.data.title}
        </MotionTypography>
      </MotionBox>
    </>
  );
};

export default InitiativeCard;
