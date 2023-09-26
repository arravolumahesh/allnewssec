import { CardContent, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import { EnhancedSwiperSlideComponent } from "@cc/enhanced-swiper";
import Link from "next/link";
import { MotionCard, MotionCardProps } from "@cc/motion-components";
import { H6_2 } from "@/styles/theme/components/typography.fontvariant";

interface SmallTitleCardProps extends Omit<MotionCardProps, "children"> {
  img: string;
  title: string;
  href: string;
}

export const SmallTitleCard: EnhancedSwiperSlideComponent<SmallTitleCardProps> =
  forwardRef((props, ref) => {
    const {
      img,
      title,
      href,
      sx,
      index,
      isPrev,
      isActive,
      isVisible,
      isNext,
      ...restProps
    } = props;
    return (
      <Link
        href={href}
        style={{
          textDecoration: "none",
        }}
      >
        <MotionCard
          ref={ref}
          sx={{
            display: "flex",
            position: "relative",
            width: { xs: 200, lg: 328 },
            height: { xs: 200, lg: 316 },
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 34.18%), url(${img}), lightgray -133.577px -1.973px / 181.45% 101.249% no-repeat`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 0,
            ...sx,
          }}
          {...restProps}
        >
          <CardContent
            sx={{
              alignSelf: "flex-end",
              pb: "16px !important",
            }}
          >
            <Typography variant='body1' fontSize={H6_2} color={"common.white"}>
              {title}
            </Typography>
          </CardContent>
        </MotionCard>
      </Link>
    );
  });

SmallTitleCard.displayName = SmallTitleCard.name;
