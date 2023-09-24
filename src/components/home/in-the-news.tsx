"use client";
import ArrowSlideInfo, {
  ArrowSlideInfoProps,
} from "@cc/cards/arrow-slide-info";
import keyHighlights from "@/components/home/images/key-highlights.jpg";
import inTheNews from "@/components/home/images/in-the-news.jpg";
import ArrowSwiper from "@cc/arrow-swiper";
import SectionWrapper from "@cc/section-wrapper";
import React from "react";
import { Swiper } from "swiper/types";
import { BehaviorSubject } from "rxjs";
import { Typography } from "@mui/material";

const $swiperInstance = new BehaviorSubject<Swiper | null>(null);

const InTheNews = () => {
  return (
    <SectionWrapper
      direction={{ md: "row" }}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      color={"primary.main"}
    >
      <Typography
        variant={"h1"}
        component={"h2"}
        color={"inherit"}
        width={1}
        mx={"auto"}
        textAlign={"center"}
        mb={7}
      >
        In the News
      </Typography>
      <ArrowSwiper
        data={data}
        sx={{
          width: { xs: 1, lg: 560, xl: 690 },
          aspectRatio: "5/3.21",
        }}
        SwiperProps={{
          onSwiper: (swiper) => $swiperInstance.next(swiper),
          navigation: {
            enabled: true,
          },
        }}
      />
      <ArrowSlideInfo
        data={data}
        SwiperInstance={$swiperInstance}
        isNavigation
        NavigationWrapperProps={{
          alignSelf: "flex-end",
        }}
        height={"fit-content"}
        width={{
          xs: 1,
          lg: 0.45,
          xl: 0.4,
        }}
      />
    </SectionWrapper>
  );
};

export default InTheNews;
const data: ArrowSlideInfoProps["data"] = [
  {
    prefix: "26 June 2022",
    title: "Jamnalal Bajaj Foundation to distribute 30 awards to individuals",
    description:
      "By offering hi-tech mobility options, Bajaj Finserv has pledged to empower people with disabilities.",
    image: keyHighlights,
    btnText: "Learn More",
    btnLink: "/",
  },
  {
    prefix: "28 June 2022",
    title: "Jamnalal Bajaj Foundation to distribute 30 awards to individuals",
    description:
      "By offering hi-tech mobility options, Bajaj Finserv has pledged to empower people with disabilities.",
    image: inTheNews,
    btnText: "Learn More",
    btnLink: "/",
  },
];
