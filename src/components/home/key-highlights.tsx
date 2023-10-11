"use client";
import React from "react";
import ArrowSwiperWithInfoSection, {
  ArrowSwiperWithInfoProps,
} from "@cc/arrow-swiper-with-info-section";
import ArrowSlideInfo from "@cc/cards/arrow-slide-info";
import { ArrowSlideDefaultImageProps } from "@cc/cards/arrow-slide-default-image";
import { H3_1 } from "@theme/components/typography.fontvariant";
import keyhighlight1 from "./images/keyhighlightImg/keyhighlit1.jpg";
import keyhighlight2 from "./images/keyhighlightImg/Jamnalal-Bajaj-Awards_JBF.jpg";
import keyhighlight3 from "./images/keyhighlightImg/Nutritious Food Distribution to school kids (5).jpeg";
import keyhighlight4 from "./images/keyhighlightImg/highlight4.jpeg";
import keyhighlight5 from "./images/keyhighlightImg/keyhighlight5.jpg";

const KeyHighlights = () => {
  return (
    <ArrowSwiperWithInfoSection
      data={data}
      SwiperKey={KeyHighlights.name}
      SectionWrapperProps={{
        color: "secondary.main",
        SectionHeaderProps: {
          title: "Key Highlights",
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

export default KeyHighlights;

const data: (ArrowSwiperWithInfoProps<
  typeof ArrowSlideInfo
>["data"][number]["data"][number] &
  ArrowSlideDefaultImageProps)[] = [
  {
    title: " Maha Smile Program",
    description:
      "Creating awareness for cleft care for every child in Maharashtra, and supporting 24,000 free reconstructive surgeries for underprivileged beneficiaries. ",
    image: keyhighlight1,
    btnText: "Learn More",
    btnLink: "/",
  },
  {
    title: "Trailblazers of Social Impact: 45th Jamnalal Bajaj Awards 2023 Recipients",
    description:
      " The Jamnalal Bajaj Awards, established in 1978, honour individuals who have made outstanding contributions to propagate Gandhian values and ideals.",
    image: keyhighlight2,
    btnText: "Learn More",
    btnLink: "/",
  },
  {
    title: "Nurturing the next generation ",
    description:
      "Fulfilling nutrition requirements of school going kids by undertaking Nutritious Ladoo distribution in all the schools. ",
    image: keyhighlight3,
    btnText: "Learn More",
    btnLink: "/",
  },
  {
    title: "Bridge the gap programme",
    description:
      "Working towards supporting government aided, unaided schools, anganwadis and creating demonstrable models, helping the capacity of the students. ",
    image: keyhighlight4,
    btnText: "Learn More",
    btnLink: "/",
  },
  {
    title: "Bajaj Engineering Skills Training (BEST)",
    description:
      "BEST is the flagship CSR initiative of Bajaj Auto Ltd. in collaboration with top NIRF-ranked universities and engineering colleges. It aims to build state-of-the-art centres and enable hands-on-skilling for thousands of young people",
    image: keyhighlight5,
    btnText: "Learn More",
    btnLink: "/",
  },
];
