import ArrowSlideInfo from "@cc/cards/arrow-slide-info";
import keyHighlights from "@/components/home/images/key-highlights.jpg";
import inTheNews from "@/components/home/images/in-the-news.jpg";
import React from "react";
import ArrowSwiperWithInfoSection, {
  ArrowSwiperWithInfoProps,
} from "@cc/arrow-swiper-with-info-section";
import { ArrowSlideDefaultImageProps } from "@cc/cards/arrow-slide-default-image";

import news1 from './images/newsImg/news1.jpg'

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
    prefix: "8 December, 2022",
    title: "Felicitating achievers in the field of humanitarian activities",
    description:
      "As a tribute to Jamnalal Bajaj on this special occasion, the Foundation felicitated achievers in the field of humanitarian activities and Gandhian constructive programmes.",
    image: keyHighlights,
    btnText: "Learn More",
    btnLink: "/",
  },
  {
    prefix: "28 June 2022",
    title: "Symbiosis Institute of Technology Signed an MOU with Bajaj Auto Limited ",
    description:
      "The collaboration covers the gap between academics and industries to make the students industry ready and employable.",
    image: news1,
    btnText: "Learn More",
    btnLink: "https://www.punekarnews.in/pune-symbiosis-institute-of-technology-sit-signed-an-mou-with-bajaj-auto-limited/",
  },  
];
