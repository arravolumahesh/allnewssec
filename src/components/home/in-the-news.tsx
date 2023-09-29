import ArrowSlideInfo from "@cc/cards/arrow-slide-info";
import keyHighlights from "@/components/home/images/key-highlights.jpg";
import inTheNews from "@/components/home/images/in-the-news.jpg";
import React from "react";
import ArrowSwiperWithInfoSection, {
  ArrowSwiperWithInfoProps,
} from "@cc/arrow-swiper-with-info-section";
import { ArrowSlideDefaultImageProps } from "@cc/cards/arrow-slide-default-image";

const InTheNews = () => {
  return (
    <ArrowSwiperWithInfoSection
      data={data}
      SwiperKey={InTheNews.name}
      SectionWrapperProps={{
        color: "primary.main",
        SectionHeaderProps: {
          title: "In the News",
        },
        ContainerProps: {
          pb: 0,
        },
      }}
      ArrowSlideInfoProps={{
        isNavigation: true,
        SlotProps: {
          ButtonProps: {
            href: "#",
            color: "primary",
          },
        },
      }}
    />
  );
};

export default InTheNews;

const data: (ArrowSwiperWithInfoProps<
  typeof ArrowSlideInfo
>["data"][number]["data"][number] &
  ArrowSlideDefaultImageProps)[] = [
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
