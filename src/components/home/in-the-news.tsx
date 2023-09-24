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

const $swiperInstance = new BehaviorSubject<Swiper | null>(null);

const InTheNews = () => {
  return (
    <SectionWrapper
      direction={{ lg: "row" }}
      alignItems={"center"}
      justifyContent={"space-between"}
      color={"primary.main"}
      rowGap={{ xs: 4, md: 0 }}
      SectionHeaderProps={{
        title: "In The News",
      }}
    >
      <ArrowSwiper
        data={data}
        sx={{
          width: { xs: 1, lg: 560, xl: 690 },
          aspectRatio: "5/3.21",
        }}
        SwiperProps={{
          onSwiper: (swiper) => $swiperInstance.next(swiper),
        }}
      />
      <ArrowSlideInfo
        data={data}
        SwiperInstance={$swiperInstance}
        isNavigation
        NavigationWrapperProps={{
          alignSelf: { xs: "center", md: "flex-end" },
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
