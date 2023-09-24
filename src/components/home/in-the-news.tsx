"use client";
import ArrowSlideInfo, {
  ArrowSlideInfoProps,
} from "@cc/cards/arrow-slide-info";
import keyHighlights from "@/components/home/images/key-highlights.jpg";
import inTheNews from "@/components/home/images/in-the-news.jpg";
import ArrowSwiper from "@cc/arrow-swiper";
import SectionWrapper from "@cc/section-wrapper";
import React, { useState } from "react";
import { Swiper } from "swiper/types";
import { Controller } from "swiper/modules";

const InTheNews = () => {
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  return (
    <SectionWrapper direction={"row"}>
      <ArrowSwiper
        data={data}
        sx={{
          height: 424,
          width: 644,
        }}
        SwiperProps={{
          onSwiper: setSwiper,
          modules: [Controller],
        }}
      />
      <ArrowSlideInfo data={data} swiperInstance={swiper} />
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
