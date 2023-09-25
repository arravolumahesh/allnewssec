"use client";
import {
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React, { forwardRef } from "react";
import { EnhancedSwiperSlideComponent } from "@cc/enhanced-swiper";
import { MotionStack, MotionStackProps } from "@cc/motion-components";
import { sxArrayUtil } from "@util/sx-helpers";

export interface StorySlideProps extends Omit<MotionStackProps, "children"> {
  bgImage: string;
  company: string;
  title: string;
  location: string;
  description: string;
}

const StorySlide: EnhancedSwiperSlideComponent<StorySlideProps> = forwardRef(
  (props, ref) => {
      const {
        bgImage,
        company,
        title,
        location,
        description,
        ...restCardProps
      } = props;
      const { sx, ...rest } = restCardProps;
    return (
      <MotionStack ref={ref} sx={[...sxArrayUtil(sx)]} {...rest}>
        <CardHeader title={title} subheader={location} />
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions></CardActions>
      </MotionStack>
    );
  },
);

export default StorySlide;

StorySlide.displayName = StorySlide.name;
