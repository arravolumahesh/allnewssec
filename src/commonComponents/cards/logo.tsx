"use client";
import { Card, CardMedia } from "@mui/material";
import React from "react";
import { EnhancedSwiperSlideData } from "@cc/enhanced-swiper";

export type LogoCardProps = {
  img: string;
};

export const LogoCard = (props: EnhancedSwiperSlideData<LogoCardProps>) => {
  const { img } = props;
  return (
    <Card
      sx={{
        width: { xs: 128, md: 199 },
        minWidth: { xs: 128, md: 199 },
        height: { xs: 64, md: 100 },
        py: { xs: 1, md: 2 },
        bgcolor: "common.white",
        borderRadius: 0,
        //background: `url(${img}) no-repeat center / contain `,
        // backgroundSize: "contain",
        // backgroundRepeat: "no-repeat",
      }}
      elevation={0}
    >
      <CardMedia
        sx={{
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
        image={img}
      />
    </Card>
  );
};
