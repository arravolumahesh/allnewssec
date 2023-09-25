"use client";
import { alpha, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import { EnhancedSwiperSlideComponent } from "@cc/enhanced-swiper";
import { MotionImage } from "@cc/motion-components";
import { sxArrayUtil } from "@util/sx-helpers";
import { StaticImageData } from "next/image";
import AnimatedButton from "@cc/animated-button";
import { H5_1 } from "@theme/components/typography.fontvariant";
import SectionWrapper, { SectionWrapperProps } from "@cc/section-wrapper";

export interface StorySlideProps extends Omit<SectionWrapperProps, "children"> {
  bgImage: string | StaticImageData;
  company: string;
  title: string;
  location: string;
  description: string;
}

const StorySlide: EnhancedSwiperSlideComponent<StorySlideProps> = forwardRef(
  (props, ref) => {
    const { bgImage, company, title, location, description, ...restCardProps } =
      props;
    const { sx, ...rest } = restCardProps;
    return (
      <SectionWrapper
        ref={ref}
        sx={[
          {
            position: "relative",
            aspectRatio: "16/9",
            alignItems: "flex-start",
          },
          ...sxArrayUtil(sx),
        ]}
        {...rest}
      >
        <MotionImage
          src={bgImage}
          alt={company}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        />
        <Typography
          variant={"body2"}
          gutterBottom
          sx={{
            width: "fit-content",
            textTransform: "capitalize",
            px: 16,
            py: {
              xs: 1,
              md: 1.25,
              xxl: 1.5,
            },
            background: (theme) => alpha(theme.palette.secondary.main, 0.2),
          }}
        >
          {company}
        </Typography>
        <Typography fontSize={H5_1} mb={3} textTransform={"capitalize"}>
          {title}
        </Typography>
        <Typography variant={"body2"} mb={3} textTransform={"capitalize"}>
          {location}
        </Typography>
        <Typography
          variant={"body1"}
          mb={{
            xs: 4,
            md: 4.5,
            xxl: 5,
          }}
        >
          {description}
        </Typography>
        <AnimatedButton
          href={"/bajaj-auto-initiatives"}
          variant={"outlined"}
          color={"secondary"}
        >
          View More Initiatives
        </AnimatedButton>
      </SectionWrapper>
    );
  },
);

export default StorySlide;

StorySlide.displayName = StorySlide.name;
