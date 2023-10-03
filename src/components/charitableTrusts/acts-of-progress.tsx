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
import SectionWrapper from "@/commonComponents/section-wrapper";
import theme from "@/styles/theme";

const ActsOfProgress = () => {
  return (
    <ArrowSwiperWithInfoSection
      data={data}
      SwiperKey={ActsOfProgress.name}
      SectionWrapperProps={{
        color: "secondary.main",
        SectionProps: {
          sx: {
            backgroundColor: (theme) => theme.palette.primary.main,
          },
        },
        SectionHeaderProps: {
          title: "ACTS OF PROGRESS, ONE AT A TIME",
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
          ButtonProps: {
            href: "#",
            color: "secondary",
          },
        },
      }}
    />
  );
};

export default ActsOfProgress;

const data: (ArrowSwiperWithInfoProps<
  typeof ArrowSlideInfo
>["data"][number]["data"][number] &
  ArrowSlideDefaultImageProps)[] = [
  {
    title: "Jamnalal Bajaj Awards 2023",
    description:
      "Felicitating the efforts of women and men who have dedicated their life to constructive work.",
    image: keyHighlights,
    btnText: "Learn More",
    btnLink: "/",
  },
  {
    title: "Jamnalal Bajaj Awards 2023",
    description:
      "Felicitating the efforts of women and men who have dedicated their life to constructive work.",
    image: inTheNews,
    btnText: "Learn More",
    btnLink: "/",
  },
];
