"use client";
import React from "react";
import { EnhancedSwiperSlideData } from "@cc/enhanced-swiper";
import { MaterialImage } from "@cc/material-components";
import { Stack } from "@mui/material";

export type LogoCardProps = {
  img: string;
};

export const LogoCard = (props: EnhancedSwiperSlideData<LogoCardProps>) => {
  const { img } = props;
  return (
    <Stack
      sx={{
        width: { xs: 128, md: 199 },
        minWidth: { xs: 128, md: 199 },
        height: { xs: 64, md: 100 },
        bgcolor: "common.white",
      }}
    >
      <MaterialImage
        width={180}
        height={80}
        src={img}
        alt={""}
        sx={{
          objectFit: "scale-down",
          m: "auto",
        }}
      />
    </Stack>
  );
};
