import ArrowSwiperWithInfoSection, {
  ArrowSwiperWithInfoProps,
} from "@/commonComponents/arrow-swiper-with-info-section";
import { ArrowSlideDefaultImageProps } from "@/commonComponents/cards/arrow-slide-default-image";
import ArrowSlideInfo from "@/commonComponents/cards/arrow-slide-info";
import keyHighlights from "@/components/home/images/key-highlights.jpg";
import { H3_2 } from "@/styles/theme/components/typography.fontvariant";
import React from "react";

const Happening = () => {
  return (
    <ArrowSwiperWithInfoSection
      id='whats-new'
      data={data}
      SwiperKey={Happening.name}
      SectionWrapperProps={{
        SectionHeaderProps: {
          title: "HERE’S WHAT’S HAPPENING",
        },
      }}
      SwiperProps={{
        navigation: true,
      }}
      ArrowSlideInfoProps={{
        SlotProps: {
          TitleTypographyProps: {
            fontSize: H3_2,
          },
        },
      }}
    />
  );
};

export default Happening;

const data: (ArrowSwiperWithInfoProps<
  typeof ArrowSlideInfo
>["data"][number]["data"][number] &
  ArrowSlideDefaultImageProps)[] = [
  {
    title: "BEST Centre at Banasthali Vidyapith",
    description:
      "We are happy to collaborate with Banasthali Vidyapith, the world's largest residential university for women, with a NIRF ranking of 58, to launch the BEST Program. The BEST program at Banasthali is our endeavour to empower young women engineers.",
    image: keyHighlights,
    btnText: "Learn More",
    btnLink: "/",
  },
  {
    title: "BEST Centre at Banasthali Vidyapith",
    suffix: {
      date: "15 July 2023",
      region: "Maharashtra",
    },
    description:
      "We are happy to collaborate with Banasthali Vidyapith, the world's largest residential university for women, with a NIRF ranking of 58, to launch the BEST Program. The BEST program at Banasthali is our endeavour to empower young women engineers.",
    image: keyHighlights,
    btnText: "Learn More",
    btnLink: "/",
  },
];
