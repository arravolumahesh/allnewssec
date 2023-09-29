import { Box, CardContent, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import { EnhancedSwiperSlideComponent } from "@cc/enhanced-swiper";
import Link from "next/link";
import { MotionCard, MotionCardProps } from "@cc/motion-components";
import { H6_2, H6_3 } from "@/styles/theme/components/typography.fontvariant";
import Image, { StaticImageData } from "next/image";
import { MaterialImage } from "../material-components";

interface CompanyCardProps extends Omit<MotionCardProps, "children"> {
  img: StaticImageData;
  title: string;
}

export const CompanyCard: EnhancedSwiperSlideComponent<CompanyCardProps> =
  forwardRef((props, ref) => {
    const {
      img,
      title,
      sx,
      index,
      isPrev,
      isActive,
      isVisible,
      isNext,
      ...restProps
    } = props;
    return (
      <MotionCard
        elevation={0}
        ref={ref}
        sx={{
          width: { xs: 301, lg: 310 },
          borderRadius: 0,
          bgcolor: "transparent",
          ...sx,
        }}
        {...restProps}
      >
        <CardContent sx={{ p: 0, pb: "0 !important" }}>
          <MaterialImage
            src={img}
            alt={title}
            sx={{
              width: 1,
              height: { xs: 301, md: 310 },
            }}
          />
          <Typography variant='body1' fontSize={H6_3} mt={2}>
            {title}
          </Typography>
        </CardContent>
      </MotionCard>
    );
  });

CompanyCard.displayName = CompanyCard.name;
