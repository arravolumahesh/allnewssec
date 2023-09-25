"use client";
import React from "react";
import ArrowSwiperWithInfoSection, {
  ArrowSwiperWithInfoProps,
} from "@cc/arrow-swiper-with-info-section";
import ArrowSlideInfo from "@cc/cards/arrow-slide-info";
import { ArrowSlideDefaultImageProps } from "@cc/cards/arrow-slide-default-image";
import keyHighlights from "@/components/home/images/key-highlights.jpg";
import inTheNews from "@/components/home/images/in-the-news.jpg";
import { H3_1 } from "@theme/components/typography.fontvariant";

const KeyHighlights = () => {
  return (
    <ArrowSwiperWithInfoSection
      data={data}
      SectionWrapperProps={{
        color: "secondary.main",
        SectionHeaderProps: {
          title: "Key Highlights",
        },
        SectionProps: {
          bgcolor: "primary.main",
        },
      }}
      SwiperProps={{
        navigation: true,
      }}
      ArrowSlideInfoProps={{
        SlotProps: {
          TitleTypographyProps: {
            fontSize: H3_1,
          },
        },
      }}
    />
  );
};

export default KeyHighlights;

const data: (ArrowSwiperWithInfoProps<
  typeof ArrowSlideInfo
>["data"][number]["data"][number] &
  ArrowSlideDefaultImageProps)[] = [
  {
    title: "Announcing Jamnalal Bajaj Awards",
    description:
      "Felicitating the efforts of women and men who have dedicated their life to constructive work.",
    image: keyHighlights,
    btnText: "Learn More",
    btnLink: "/",
  },
  {
    title: "Announcing Jamnalal Bajaj Awards",
    description:
      "Felicitating the efforts of women and men who have dedicated their life to constructive work.",
    image: inTheNews,
    btnText: "Learn More",
    btnLink: "/",
  },
];
