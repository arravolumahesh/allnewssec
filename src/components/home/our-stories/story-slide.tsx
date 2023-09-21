"use client";
import {
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React, { forwardRef } from "react";
import { EnhancedSwiperSlideData } from "@cc/enhanced-swiper";
import { MotionStack, MotionStackProps } from "@cc/motion-elements";
import { sxArrayUtil } from "@util/sx-helpers";

export interface StorySlideProps extends Omit<MotionStackProps, "children"> {
  data: {
    bgImage: string;
    company: string;
    title: string;
    location: string;
    description: string;
  };
}

const StorySlide: EnhancedSwiperSlideData<StorySlideProps> = forwardRef(
  (props, ref) => {
    const { data, ...restCardProps } = props;
    const { bgImage, company, title, location, description } = data;
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

const data: StorySlideProps["data"] = {
  bgImage: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
  title: "Announcing Jamnalal Bajaj Awards 2023",
  description:
    "Felicitating the efforts of women and men who have dedicated their life to constructive work.",
  company: "Bajaj Auto",
  location: "Wardha, Maharashtra",
};
