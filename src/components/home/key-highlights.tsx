"use client";
import ArrowSwiper from "@cc/arrow-swiper";
import keyHighlights from "./images/key-highlights.jpg";
import inTheNews from "./images/in-the-news.jpg";
import React, { useState } from "react";
import SectionWrapper from "@cc/section-wrapper";
import { Swiper } from "swiper/types";
import ArrowSlideInfo, {
  ArrowSlideInfoProps,
} from "@cc/cards/arrow-slide-info";

const KeyHighlights = () => {
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
        }}
      />
      <ArrowSlideInfo data={data} swiperInstance={swiper} />
    </SectionWrapper>
  );
};

export default KeyHighlights;

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
